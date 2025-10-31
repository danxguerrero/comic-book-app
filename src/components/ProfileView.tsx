'use client'

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useAuth } from '../hooks/useAuth';
import { useUserProfile } from '../hooks/useUserProfile';

type Props = {
    username?: string; // if omitted, use current user
    editable?: boolean; // if true and current user matches, show edit form
};

export default function ProfileView({ username, editable }: Props) {
    const { current: user } = useAuth();
    const { current: profile, fetch, add, loading } = useUserProfile();

    const addUserProfile = async () => {
        if (!user) return;

        const postUserProfileData = {
            username: user!.email,
            displayName: user!.email,
            bio: '',
            avatarUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT3Pf12eoOGUbxow4R5jQGUFF45tdtHe-ByySgKXnyP4AWCG-H9uAWuaw-xwJZzw1v-Xvlsih-eEuiWt4fHxH_Vz5tYhncVo-GBrxmY2O87OSp807VjYkrJ15_dxzbg2PNi885NNQ&usqp=CAc',
            userId: user!.$id
        }

        await add(postUserProfileData);
    }

    const getProfile = async (username: string) => {
        await fetch(username)
    }

    useEffect(() => {
        if (user?.email) {
            getProfile(user.email)
        }
        if (!profile) {
            addUserProfile();
        }
    }, [user])

    if (loading) {
        return <div>Loading...</div>
    }

    // return (
    //     <div>
    //         <h1>{profile ? profile[0]?.username : 'Profile View'}</h1>
    //         <p>{profile ? profile[0]?.displayName : ''}</p>
    //     </div>
    // )

    // useEffect(() => {
    //     const load = async () => {
    //         const uname = username || current?.name || current?.email || '';
    //         if (!uname) return;
    //         await loadByUsername(uname);
    //     };
    //     load();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [username, current?.$id]);

    // useEffect(() => {
    //     if (profile) {
    //         setForm({
    //             username: profile.username,
    //             displayName: profile.displayName || '',
    //             bio: profile.bio || '',
    //             avatarUrl: profile.avatarUrl || ''
    //         });
    //     }
    // }, [profile]);

    // const onSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     await updateCurrentUserProfile({
    //         username: form.username,
    //         displayName: form.displayName,
    //         bio: form.bio,
    //         avatarUrl: form.avatarUrl
    //     });
    // };

    // if (loading && !profile) {
    //     return <div className="p-6 text-white">Loading...</div>;
    // }

    // if (!profile) {
    //     return (
    //         <div className="p-6 text-gray-300">
    //             No profile found{username ? ` for ${username}` : ''}.
    //         </div>
    //     );
    // }

    return (
        profile && profile.length > 0 ? (
            <div className="max-w-3xl mx-auto p-4 sm:p-6 text-white">
                <div className="bg-gray-800 rounded-lg p-4 sm:p-6">
                    <div className="flex items-start gap-4 sm:gap-6">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-gray-700">
                            {profile[0].avatarUrl ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={profile[0].avatarUrl} alt={profile[0].username} className="object-cover w-full h-full" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-xl bg-gray-700">
                                    {(profile[0].displayName || profile[0].username).charAt(0).toUpperCase()}
                                </div>
                            )}
                        </div>
                        <div className="flex-1">
                            <h1 className="text-2xl sm:text-3xl font-bold">{profile[0].displayName || profile[0].username}</h1>
                            <p className="text-gray-400">@{profile[0].username}</p>
                            <p className="mt-3 text-gray-200 whitespace-pre-line">{profile[0].bio || 'No bio yet.'}</p>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div></div>
        )
    );
}

// Form information 
/* {editable && isOwnProfile && (
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
                )} */