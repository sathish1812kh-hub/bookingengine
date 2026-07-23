'use client';

import { useState } from 'react';

interface RoleItem {
  id: string;
  code: string;
  name: string;
  isTemplate: boolean;
  permissionCount: number;
}

export default function RolesPage() {
  const [roles] = useState<RoleItem[]>([
    { id: 'rol_super_admin', code: 'super_admin', name: 'Super Administrator', isTemplate: true, permissionCount: 14 },
    { id: 'rol_hotel_mgr', code: 'hotel_manager', name: 'Hotel Manager', isTemplate: true, permissionCount: 10 },
    { id: 'rol_front_office', code: 'front_office', name: 'Front Office Agent', isTemplate: true, permissionCount: 6 },
    { id: 'rol_accountant', code: 'accountant', name: 'Hotel Accountant', isTemplate: true, permissionCount: 5 },
  ]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Roles & Granular Permissions (RBAC)</h1>
            <p className="text-sm text-slate-400">Manage role templates, custom roles, & permission matrices</p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 font-semibold text-sm rounded-lg transition-colors">
            + Create Custom Role
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roles.map((role) => (
            <div key={role.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs font-mono px-2 py-0.5 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded">
                    {role.code}
                  </span>
                  <h2 className="text-lg font-bold mt-2">{role.name}</h2>
                </div>
                {role.isTemplate && (
                  <span className="px-2.5 py-1 text-xs font-semibold uppercase bg-amber-950 text-amber-300 border border-amber-800 rounded-full">
                    Template
                  </span>
                )}
              </div>

              <div className="pt-2 border-t border-slate-800/60 flex justify-between items-center text-xs text-slate-400">
                <div>Permissions: <span className="text-slate-200 font-semibold">{role.permissionCount} Active</span></div>
                <button className="text-indigo-400 hover:text-indigo-300 font-semibold">Configure Matrix →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
