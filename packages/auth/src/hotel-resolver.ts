import { Hotel, HotelBusinessDate, HotelContext } from '@bookingengine/types';

export interface HotelRepository {
  getById(id: string): Promise<Hotel | null>;
  getByOrganization(organizationId: string): Promise<Hotel[]>;
  create(hotel: Omit<Hotel, 'id' | 'createdAt' | 'updatedAt'>): Promise<Hotel>;
  update(id: string, updates: Partial<Hotel>): Promise<Hotel | null>;
  getBusinessDate(hotelId: string): Promise<HotelBusinessDate | null>;
}

export class MemoryHotelRepository implements HotelRepository {
  private hotels = new Map<string, Hotel>();
  private businessDates = new Map<string, HotelBusinessDate>();

  constructor() {
    // Seed default demo hotel
    const demoHotel: Hotel = {
      id: 'htl_demo_001',
      organizationId: 'org_demo_001',
      code: 'GH-NY',
      name: 'Grand Horizon Times Square',
      legalName: 'Grand Horizon NYC LLC',
      brand: 'Grand Horizon Luxury',
      slug: 'grand-horizon-nyc',
      timezone: 'America/New_York',
      currency: 'USD',
      language: 'en',
      checkInTime: '15:00',
      checkOutTime: '11:00',
      status: 'active',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const demoDate: HotelBusinessDate = {
      id: 'bd_demo_001',
      hotelId: demoHotel.id,
      currentBusinessDate: new Date().toISOString().split('T')[0],
      isOpen: true,
    };

    this.hotels.set(demoHotel.id, demoHotel);
    this.businessDates.set(demoHotel.id, demoDate);
  }

  async getById(id: string): Promise<Hotel | null> {
    return this.hotels.get(id) || null;
  }

  async getByOrganization(organizationId: string): Promise<Hotel[]> {
    return Array.from(this.hotels.values()).filter((h) => h.organizationId === organizationId);
  }

  async create(input: Omit<Hotel, 'id' | 'createdAt' | 'updatedAt'>): Promise<Hotel> {
    const hotel: Hotel = {
      ...input,
      id: `htl_${crypto.randomUUID().substring(0, 8)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.hotels.set(hotel.id, hotel);

    const businessDate: HotelBusinessDate = {
      id: `bd_${crypto.randomUUID().substring(0, 8)}`,
      hotelId: hotel.id,
      currentBusinessDate: new Date().toISOString().split('T')[0],
      isOpen: true,
    };
    this.businessDates.set(hotel.id, businessDate);

    return hotel;
  }

  async update(id: string, updates: Partial<Hotel>): Promise<Hotel | null> {
    const existing = this.hotels.get(id);
    if (!existing) return null;
    const updated = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.hotels.set(id, updated);
    return updated;
  }

  async getBusinessDate(hotelId: string): Promise<HotelBusinessDate | null> {
    return this.businessDates.get(hotelId) || null;
  }
}

export class HotelResolver {
  constructor(private repo: HotelRepository) {}

  async resolveContext(hotelId: string, organizationId: string): Promise<HotelContext | null> {
    const hotel = await this.repo.getById(hotelId);
    if (!hotel || hotel.organizationId !== organizationId || hotel.status !== 'active') {
      return null;
    }

    const businessDate = (await this.repo.getBusinessDate(hotel.id)) || {
      id: `bd_default_${hotel.id}`,
      hotelId: hotel.id,
      currentBusinessDate: new Date().toISOString().split('T')[0],
      isOpen: true,
    };

    return { hotel, businessDate };
  }

  validateCrossHotelAccess(sessionHotelId?: string, targetHotelId?: string): boolean {
    if (!sessionHotelId) return true; // Super admin / Org level
    return sessionHotelId === targetHotelId;
  }
}
