'use client';

import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { current, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !current) {
            router.push('/login');
        }
    }, [current, loading, router]);

    // Show loading spinner while checking authentication
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    // Don't render children if user is not authenticated
    if (!current) {
        return null;
    }

    return <>{children}</>;
};
