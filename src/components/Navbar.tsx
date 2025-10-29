'use client';

import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
    const { current, logout } = useAuth();

    return (
        <header className="bg-gray-800 border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <Link href={current ? "/dashboard" : "/"} className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">C</span>
                            </div>
                            <span className="text-xl font-bold text-white">ComicUnity</span>
                        </Link>
                    </div>

                    {/* Navigation Links - Hidden on mobile */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link href="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
                        <Link href="/browse" className="text-white hover:text-gray-300 transition-colors">Browse</Link>
                        <Link href="/upload" className="text-white hover:text-gray-300 transition-colors">Upload</Link>
                    </nav>

                    {/* Search Bar - Responsive */}
                    <div className="flex-1 max-w-md mx-4 hidden sm:block lg:mx-8">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search Comics..."
                                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    {/* Right side icons */}
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        {/* Mobile Search Icon */}
                        <div className="sm:hidden">
                            <svg className="h-6 w-6 text-white cursor-pointer hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <svg className="h-6 w-6 text-white cursor-pointer hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>

                        {/* Notification */}
                        <div className="relative">
                            <svg className="h-6 w-6 text-white cursor-pointer hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                        </div>

                        {/* User Avatar / Login */}
                        {current ? (
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                                    <Link className="text-sm font-medium" href="/dashboard">
                                        {current?.name?.charAt(0) || current?.email?.charAt(0) || 'U'}
                                    </Link>
                                </div>
                                <button 
                                    onClick={logout}
                                    className="text-white hover:text-gray-300 transition-colors text-sm"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link 
                                href="/login" 
                                className="text-white hover:text-gray-300 transition-colors text-sm"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
