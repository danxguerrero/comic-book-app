'use client'

import { ProtectedRoute } from '../../components/ProtectedRoute';
import { useAuth } from '../../hooks/useAuth';
import ProfileView from '../../components/ProfileView';

export default function Profile() {
    const { current: user } = useAuth();

    return (
        <ProtectedRoute>
            <ProfileView />
        </ProtectedRoute>

    )
}