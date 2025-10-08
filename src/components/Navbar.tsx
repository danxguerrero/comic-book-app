'use client';

import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
    const { current, logout } = useAuth();

    return (
        <nav className="u-padding-inline-end-0 flex justify-between items-center p-3">
            <h3 className="u-stretch eyebrow-heading-1">ComicUnity</h3>
            {current ? (
                <div className="main-header-end u-margin-inline-end-16 flex gap-4">
                    <button 
                        className="border-2 rounded-lg p-2 hover:bg-gray-200 hover:text-gray-500 hover:border-gray-500 active:bg-gray-500 active:text-gray-300 active:border-gray-300" 
                        type="button" 
                        onClick={logout}
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <Link 
                    href="/login" 
                    className="u-margin-inline-end-16 border-2 rounded-lg p-2 hover:bg-gray-200 hover:text-black hover:border-2 hover:border-gray-500"
                >
                    Login
                </Link>
            )}
        </nav>
    );
}
