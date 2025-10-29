'use client'

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useAuth } from '../hooks/useAuth';
import { useUserProfile, getUserProfileByUsername } from '../hooks/useUserProfile';

type Props = {
    username?: string; // if omitted, use current user
    editable?: boolean; // if true and current user matches, show edit form
};

export default function ProfileView({ username, editable }: Props) {
    const { current } = useAuth();
    const {
        profile,
        loading,
        error,
        loadByUsername,
        updateCurrentUserProfile
    } = useUserProfile();

    const isOwnProfile = useMemo(() => {
        if (!current) return false;
        return !!profile && profile.userId === current.$id;
    }, [current, profile]);

    const [form, setForm] = useState({
        username: '',
        displayName: '',
        bio: '',
        avatarUrl: ''
    });

    useEffect(() => {
        const load = async () => {
            const uname = username || current?.name || current?.email || '';
            if (!uname) return;
            await loadByUsername(uname);
        };
        load();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username, current?.$id]);

    useEffect(() => {
        if (profile) {
            setForm({
                username: profile.username,
                displayName: profile.displayName || '',
                bio: profile.bio || '',
                avatarUrl: profile.avatarUrl || ''
            });
        }
    }, [profile]);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await updateCurrentUserProfile({
            username: form.username,
            displayName: form.displayName,
            bio: form.bio,
            avatarUrl: form.avatarUrl
        });
    };

    if (loading && !profile) {
        return <div className="p-6 text-white">Loading...</div>;
    }

    if (error) {
        return <div className="p-6 text-red-400">{error}</div>;
    }

    if (!profile) {
        return (
            <div className="p-6 text-gray-300">
                No profile found{username ? ` for ${username}` : ''}.
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-4 sm:p-6 text-white">
            <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
                <div className="flex items-start gap-4 sm:gap-6">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gray-700">
                        {form.avatarUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={form.avatarUrl} alt={profile.username} className="object-cover w-full h-full" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-xl bg-gray-700">
                                {(profile.displayName || profile.username).charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>
                    <div className="flex-1">
                        <h1 className="text-2xl sm:text-3xl font-bold">{profile.displayName || profile.username}</h1>
                        <p className="text-gray-400">@{profile.username}</p>
                        <p className="mt-3 text-gray-200 whitespace-pre-line">{profile.bio || 'No bio yet.'}</p>
                    </div>
                </div>

                {editable && isOwnProfile && (
                    <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-sm text-gray-300 mb-1">Username</label>
                            <input
                                value={form.username}
                                onChange={(e) => setForm((f) => ({ ...f, username: e.target.value }))}
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-300 mb-1">Display Name</label>
                            <input
                                value={form.displayName}
                                onChange={(e) => setForm((f) => ({ ...f, displayName: e.target.value }))}
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-300 mb-1">Avatar URL</label>
                            <input
                                value={form.avatarUrl}
                                onChange={(e) => setForm((f) => ({ ...f, avatarUrl: e.target.value }))}
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-300 mb-1">Bio</label>
                            <textarea
                                value={form.bio}
                                onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))}
                                rows={4}
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">Save Profile</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}


