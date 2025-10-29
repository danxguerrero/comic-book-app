'use client'

import { useParams } from 'next/navigation';
import ProfileView from '../../../components/ProfileView';

export default function PublicProfilePage() {
    const params = useParams();
    const username = (params?.username as string) || '';
    return <ProfileView username={username} editable={false} />;
}


