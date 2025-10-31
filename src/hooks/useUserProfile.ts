import { useState, useEffect } from 'react';
import { ID, Query, Permission, type Models } from 'appwrite';
import { tablesDB } from '../../lib/appwrite';

// Environment configuration for Appwrite Tables
const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID!; // Appwrite database (or tables) ID
const tableId = process.env.NEXT_PUBLIC_TABLE_ID!; // Table/collection ID for user profiles

// Shape of a user profile row in the table
interface UserProfile extends Models.Row {
    username: string;
    displayName?: string;
    bio: string;
    avatarUrl: string;
    userId: string; // Appwrite userId reference
};

export function useUserProfile() {

    const [current, setCurrent] = useState<UserProfile[]>()
    const [loading, setLoading] = useState(true);

    const fetch = async (username: string): Promise<void> => {
        try {
            const response = await tablesDB.listRows(
                databaseId,
                tableId,
                [Query.equal("username", [username])]
            );
            setCurrent(response.rows as unknown as UserProfile[]);
        } catch (error) {
            console.error('Error fetching user profile: ', error);
        } finally {
            setLoading(false);
        }
    }

    const add = async (userProfile: Omit<UserProfile, '$id' | '$createdAt' |'$updatedAt' | '$permissions' | '$sequence' | '$tableId' | '$databaseId' >): Promise<void> => {
        try {
            const response = await tablesDB.createRow(
                databaseId,
                tableId,
                ID.unique(),
                userProfile,
                [
                    Permission.read('any'),
                    Permission.update(`user:${userProfile.userId}`),
                    Permission.delete(`user:${userProfile.userId}`)
                ]
            )
            setCurrent(response as unknown as UserProfile[])
        } catch (error) {
            console.error('Error adding user profile: ', error);
        }
    }


    return {
        current,
        loading,
        fetch,
        add,
    };
};