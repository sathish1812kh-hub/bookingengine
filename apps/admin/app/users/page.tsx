'use client';

import { useState } from 'react';

interface UserItem {
  id: string;
  employeeCode: string;
  name: string;
  email: string;
  username: string;
  status: string;
}

export default function UsersPage() {
  const [users] = useState<UserItem[]>([
    {
      id: 'usr_admin_001',
      employeeCode: 'EMP-001',
      name: 'Platform Admin',
      email: 'admin@bookingengine.com',
      username: 'admin',
      status: 'active',
    },
  ]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Identity & User Management</h1>
            <p className="text-sm text-slate-400">Manage platform users, profiles, & identity credentials</p>
          </div>
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 font-semibold text-sm rounded-lg transition-colors">
            + Create User
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950/80 text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-6 py-3">Employee Code</th>
                <th className="px-6 py-3">Name & Email</th>
                <th className="px-6 py-3">Username</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-800/40">
                  <td className="px-6 py-4 font-mono text-xs text-indigo-400">{user.employeeCode}</td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-slate-100">{user.name}</div>
                    <div className="text-xs text-slate-400">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-300">@{user.username}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 text-xs font-semibold uppercase bg-emerald-950 text-emerald-300 border border-emerald-800 rounded-full">
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold">
                      Edit Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
