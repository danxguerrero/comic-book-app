'use client'

import { ProtectedRoute } from '../../components/ProtectedRoute';
import { useAuth } from '../../hooks/useAuth';
import ProfileView from '../../components/ProfileView';

export default function Profile() {
    const { current } = useAuth();

    return (
        <ProtectedRoute>
            <ProfileView editable />
        </ProtectedRoute>

    )
}