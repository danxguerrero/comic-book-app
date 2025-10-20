'use client';

import { useAuth } from '../../hooks/useAuth';
import { ProtectedRoute } from '../../components/ProtectedRoute';

export default function Dashboard() {
    const { current, logout } = useAuth();

    return (
        <ProtectedRoute>
            <div className="min-h-screen py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
                    <p className="text-lg text-gray-600 mb-6">Welcome, {current?.name || current?.email}</p>
                    <button 
                        onClick={logout}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </ProtectedRoute>
    )
}