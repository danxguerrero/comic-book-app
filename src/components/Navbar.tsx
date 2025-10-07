'use client';

import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
    const { current, logout } = useAuth();

    return (
        <nav className="u-padding-inline-end-0 flex justify-between items-center">
            <h3 className="u-stretch eyebrow-heading-1">Comic Book</h3>
            {current ? (
                <div className="main-header-end u-margin-inline-end-16 flex gap-4">
                    <p>{current.email}</p>
                    <button 
                        className="button" 
                        type="button" 
                        onClick={logout}
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <Link 
                    href="/login" 
                    className="button u-margin-inline-end-16"
                >
                    Login
                </Link>
            )}
        </nav>
    );
}
