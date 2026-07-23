import { Organization, OrganizationSettings, TenantContext } from '@bookingengine/types';

export interface OrganizationRepository {
  getById(id: string): Promise<Organization | null>;
  getBySlug(slug: string): Promise<Organization | null>;
  getByDomain(domain: string): Promise<Organization | null>;
  getSettings(organizationId: string): Promise<OrganizationSettings | null>;
  getFeatures(organizationId: string): Promise<Record<string, boolean>>;
}

export class MemoryOrganizationRepository implements OrganizationRepository {
  private orgs = new Map<string, Organization>();
  private settings = new Map<string, OrganizationSettings>();
  private features = new Map<string, Record<string, boolean>>();
  private domains = new Map<string, string>(); // domain -> orgId

  constructor() {
    // Seed default demo organization for testing & development
    const demoOrg: Organization = {
      id: 'org_demo_001',
      name: 'Grand Horizon Hospitality Group',
      slug: 'grand-horizon',
      status: 'active',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const demoSettings: OrganizationSettings = {
      id: 'set_demo_001',
      organizationId: demoOrg.id,
      defaultCurrency: 'USD',
      timezone: 'America/New_York',
      dateFormat: 'YYYY-MM-DD',
      fiscalYearStartMonth: '1',
    };

    this.orgs.set(demoOrg.id, demoOrg);
    this.settings.set(demoOrg.id, demoSettings);
    this.features.set(demoOrg.id, {
      revenue_intelligence: true,
      ttlock_integration: true,
      stayflexi_sync: true,
    });
    this.domains.set('admin.grandhorizon.com', demoOrg.id);
  }

  async getById(id: string): Promise<Organization | null> {
    return this.orgs.get(id) || null;
  }

  async getBySlug(slug: string): Promise<Organization | null> {
    for (const org of this.orgs.values()) {
      if (org.slug === slug) return org;
    }
    return null;
  }

  async getByDomain(domain: string): Promise<Organization | null> {
    const orgId = this.domains.get(domain);
    if (!orgId) return null;
    return this.getById(orgId);
  }

  async getSettings(organizationId: string): Promise<OrganizationSettings | null> {
    return this.settings.get(organizationId) || null;
  }

  async getFeatures(organizationId: string): Promise<Record<string, boolean>> {
    return this.features.get(organizationId) || {};
  }
}

export class TenantResolver {
  constructor(private repo: OrganizationRepository) {}

  async resolveContext(
    headerOrgId?: string,
    hostHeader?: string,
    sessionOrgId?: string,
  ): Promise<TenantContext | null> {
    let targetOrgId = headerOrgId || sessionOrgId;

    let org: Organization | null = null;
    if (targetOrgId) {
      org = await this.repo.getById(targetOrgId);
    } else if (hostHeader) {
      const cleanHost = hostHeader.split(':')[0];
      org = await this.repo.getByDomain(cleanHost);
    }

    if (!org || org.status !== 'active') return null;

    const settings = (await this.repo.getSettings(org.id)) || {
      id: `set_default_${org.id}`,
      organizationId: org.id,
      defaultCurrency: 'USD',
      timezone: 'UTC',
      dateFormat: 'YYYY-MM-DD',
      fiscalYearStartMonth: '1',
    };

    const features = await this.repo.getFeatures(org.id);

    return {
      organization: org,
      settings,
      features,
    };
  }

  validateCrossTenantAccess(sessionOrgId: string, targetOrgId: string): boolean {
    return sessionOrgId === targetOrgId;
  }
}
