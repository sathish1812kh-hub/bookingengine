'use client';

import { useState } from 'react';

interface HotelItem {
  id: string;
  code: string;
  name: string;
  brand: string;
  timezone: string;
  currency: string;
  status: string;
}

export default function HotelsPage() {
  const [hotels] = useState<HotelItem[]>([
    {
      id: 'htl_demo_001',
      code: 'GH-NY',
      name: 'Grand Horizon Times Square',
      brand: 'Grand Horizon Luxury',
      timezone: 'America/New_York',
      currency: 'USD',
      status: 'active',
    },
  ]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Multi-Hotel Management</h1>
            <p className="text-sm text-slate-400">Configure properties, business dates, & operational settings</p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 font-semibold text-sm rounded-lg transition-colors">
            + Add Hotel Property
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-mono px-2 py-0.5 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded">
                    {hotel.code}
                  </span>
                  <h2 className="text-lg font-bold mt-2">{hotel.name}</h2>
                  <p className="text-xs text-slate-400">{hotel.brand}</p>
                </div>
                <span className="px-2.5 py-1 text-xs font-semibold uppercase bg-emerald-950 text-emerald-300 border border-emerald-800 rounded-full">
                  {hotel.status}
                </span>
              </div>

              <div className="pt-2 border-t border-slate-800/60 text-xs text-slate-400 space-y-1">
                <div>Timezone: <span className="text-slate-200">{hotel.timezone}</span></div>
                <div>Currency: <span className="text-slate-200">{hotel.currency}</span></div>
                <div>Business Date: <span className="text-emerald-400 font-semibold">{new Date().toISOString().split('T')[0]} (OPEN)</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
