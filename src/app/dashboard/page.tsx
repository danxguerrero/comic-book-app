'use client';

import { useAuth } from '../../hooks/useAuth';
import { ProtectedRoute } from '../../components/ProtectedRoute';
import Image from 'next/image';

export default function Dashboard() {
    const { current, logout } = useAuth();

    // Sample comic data - in a real app, this would come from your backend
    const featuredComics = [
        {
            id: 1,
            title: "Galactic Guardians",
            author: "Alex Chen",
            image: "/hero.png", // Using existing image
            description: "A thrilling space adventure"
        },
        {
            id: 2,
            title: "Mystery of the Silent City",
            author: "Maria Garcia",
            image: "/alien_warrior.png", // Using existing image
            description: "An ancient mystery unfolds"
        },
        {
            id: 3,
            title: "Chronos Academy",
            author: "Kenji Tanaka",
            image: "/robot.png", // Using existing image
            description: "Magic and time collide"
        }
    ];

    const continueReading = [
        {
            id: 1,
            title: "Cyberpunk Ronin: Chapter 3",
            author: "Eva Rostova",
            image: "/hero.png",
            progress: 37.5, // 15/40 pages
            currentPage: 15,
            totalPages: 40
        },
        {
            id: 2,
            title: "Whispering Woods: Part 1",
            author: "Leo Valdez",
            image: "/alien_warrior.png",
            progress: 80, // 24/30 pages
            currentPage: 24,
            totalPages: 30
        }
    ];

    const myComics = [
        {
            id: 1,
            title: "Starfall",
            image: "/robot.png",
            status: "Published",
            statusColor: "text-green-400"
        },
        {
            id: 2,
            title: "City of Shadows",
            image: "/hero.png",
            status: "Draft",
            statusColor: "text-orange-400"
        }
    ];

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-gray-900 text-white">
                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                    {/* Featured Comics */}
                    <section className="mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Featured Comics</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {featuredComics.map((comic) => (
                                <div key={comic.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
                                    <div className="relative h-40 sm:h-48">
                                        <Image
                                            src={comic.image}
                                            alt={comic.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-3 sm:p-4">
                                        <h3 className="text-base sm:text-lg font-semibold mb-1">{comic.title}</h3>
                                        <p className="text-gray-400 text-xs sm:text-sm mb-3">By {comic.author}</p>
                                        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base">
                                            Read Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Continue Reading */}
                    <section className="mb-8 sm:mb-12">
                        <div className="flex justify-between items-center mb-4 sm:mb-6">
                            <h2 className="text-2xl sm:text-3xl font-bold">Continue Reading</h2>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base">View All</a>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                            {continueReading.map((comic) => (
                                <div key={comic.id} className="bg-gray-800 rounded-lg p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4 hover:bg-gray-750 transition-colors">
                                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                                        <Image
                                            src={comic.image}
                                            alt={comic.title}
                                            fill
                                            className="object-cover rounded"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-base sm:text-lg font-semibold truncate">{comic.title}</h3>
                                        <p className="text-gray-400 text-xs sm:text-sm">By {comic.author}</p>
                                        <div className="mt-1 sm:mt-2">
                                            <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                                                <div 
                                                    className="bg-blue-500 h-1.5 sm:h-2 rounded-full transition-all duration-300"
                                                    style={{ width: `${comic.progress}%` }}
                                                ></div>
                                            </div>
                                            <p className="text-gray-400 text-xs mt-1">
                                                Page {comic.currentPage} of {comic.totalPages}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* My Comics */}
                    <section>
                        <div className="flex justify-between items-center mb-4 sm:mb-6">
                            <h2 className="text-2xl sm:text-3xl font-bold">My Comics</h2>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base">View All</a>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {/* Add New Comic Card */}
                            <div className="bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center hover:border-gray-500 transition-colors cursor-pointer min-h-[200px] sm:min-h-[240px]">
                                <svg className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                <span className="text-white font-medium text-sm sm:text-base">Add New Comic</span>
                            </div>

                            {/* User's Comics */}
                            {myComics.map((comic) => (
                                <div key={comic.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-colors">
                                    <div className="relative h-40 sm:h-48">
                                        <Image
                                            src={comic.image}
                                            alt={comic.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-3 sm:p-4">
                                        <h3 className="text-base sm:text-lg font-semibold mb-1">{comic.title}</h3>
                                        <p className={`text-xs sm:text-sm ${comic.statusColor}`}>{comic.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </ProtectedRoute>
    )
}