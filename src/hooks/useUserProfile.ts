import { useState, useCallback } from 'react';
import { useAuth } from './useAuth';
import { Query, type Models } from 'appwrite';
import { tablesDB, ID } from '../../lib/appwrite';

// Environment configuration for Appwrite Tables
const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID!; // Appwrite database (or tables) ID
const tableId = process.env.NEXT_PUBLIC_TABLE_ID!; // Table/collection ID for user profiles

// Shape of a user profile row in the table
export type UserProfile = {
    $id?: string;
    username: string;
    displayName?: string;
    bio?: string;
    avatarUrl?: string;
    userId: string; // Appwrite userId reference
};

type ListRowsResponse<T> = {
    total: number;
    rows: T[];
};

// Create a new user profile
export async function createUserProfile(profile: UserProfile): Promise<UserProfile> {
    const created = await tablesDB.createRow(databaseId, tableId, ID.unique(), profile, undefined as unknown as string[] | undefined);
    return created as unknown as UserProfile;
}

// Fetch a single user profile by username
export async function getUserProfileByUsername(username: string): Promise<UserProfile | null> {
    const res = await tablesDB.listRows(databaseId, tableId, [Query.equal('username', username)]);
    const { rows } = res as unknown as ListRowsResponse<UserProfile>;
    return rows && rows.length > 0 ? rows[0] : null;
}

// Optional React hook to encapsulate profile loading for current user
export const useUserProfile = () => {
    const { current } = useAuth();
    const [loading, setLoading] = useState<boolean>(false);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [error, setError] = useState<string | null>(null);

    const loadByUsername = useCallback(async (username: string) => {
        setLoading(true);
        setError(null);
        try {
            const p = await getUserProfileByUsername(username);
            setProfile(p);
        } catch (e) {
            setError('Failed to load user profile');
        } finally {
            setLoading(false);
        }
    }, []);

    const updateCurrentUserProfile = useCallback(
        async (partial: Omit<UserProfile, 'userId' | 'username'> & { username: string }) => {
            if (!current) throw new Error('Not authenticated');
            setLoading(true);
            setError(null);
            try {
                // See if a profile already exists for this username
                const existing = await getUserProfileByUsername(partial.username);
                if (existing) {
                    // Update existing row
                    const updated = await tablesDB.updateRow(databaseId, tableId, existing.$id!, {
                        ...existing,
                        ...partial,
                        userId: existing.userId,
                    });
                    setProfile(updated as unknown as UserProfile);
                    return updated as unknown as UserProfile;
                }

                // Create new row
                const created = await createUserProfile({
                    username: partial.username,
                    displayName: partial.displayName,
                    bio: partial.bio,
                    avatarUrl: partial.avatarUrl,
                    userId: (current as Models.User).$id,
                });
                setProfile(created);
                return created;
            } catch (e) {
                setError('Failed to save user profile');
                throw e;
            } finally {
                setLoading(false);
            }
        },
        [current]
    );

    return {
        loading,
        profile,
        error,
        loadByUsername,
        updateCurrentUserProfile,
    };
};