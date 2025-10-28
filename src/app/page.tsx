'use client'

import { useAuth } from '../hooks/useAuth';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const { current, logout } = useAuth();
  
  // Sample featured comics data
  const featuredComics = [
    {
      id: 1,
      title: "Galactic Guardians",
      author: "Alex Chen",
      image: "/hero.png",
      rating: "4.8",
      readers: "12.5K"
    },
    {
      id: 2,
      title: "Mystery of the Silent City",
      author: "Maria Garcia",
      image: "/alien_warrior.png",
      rating: "4.9",
      readers: "8.3K"
    },
    {
      id: 3,
      title: "Chronos Academy",
      author: "Kenji Tanaka",
      image: "/robot.png",
      rating: "4.7",
      readers: "15.2K"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-[url('/CU_Hero_image.png')] bg-cover bg-center bg-no-repeat h-[60vh] sm:h-[70vh]">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl sm:text-4xl">C</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">ComicUnity</h1>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">For the Community</h2>
              <p className="text-sm sm:text-base text-gray-200 mb-6 leading-relaxed">
                ComicUnity is a community-driven platform for sharing comic and art creations. Join thousands of creators and readers exploring new stories every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/login" 
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors text-center font-medium"
                >
                  Get Started
                </Link>
                <Link 
                  href="/dashboard" 
                  className="bg-white/10 text-white border border-white/30 px-6 py-3 rounded-lg hover:bg-white/20 transition-colors text-center font-medium"
                >
                  Explore Comics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Comics Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Featured Comics</h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Discover trending stories from talented indie creators
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredComics.map((comic) => (
              <Link href="/dashboard" key={comic.id} className="group">
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:scale-105">
                  <div className="relative h-48 sm:h-56 lg:h-64">
                    <Image
                      src={comic.image}
                      alt={comic.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {comic.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">By {comic.author}</p>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{comic.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>{comic.readers} readers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Why ComicUnity?</h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Everything you need to create, share, and discover amazing comics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Upload Your Comics</h3>
              <p className="text-gray-400 leading-relaxed">
                Share your creations with the comic community. Easy upload and management tools.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Read Indie Comics</h3>
              <p className="text-gray-400 leading-relaxed">
                Discover new talent and support indie creators. Thousands of comics at your fingertips.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Join the Community</h3>
              <p className="text-gray-400 leading-relaxed">
                Connect with other comic enthusiasts and share your thoughts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Start Your Comic Journey?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Join ComicUnity today and become part of a vibrant community of creators and readers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={current ? "/dashboard" : "/login"} 
              className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              {current ? "Go to Dashboard" : "Sign Up Free"}
            </Link>
            <Link 
              href="/dashboard" 
              className="bg-gray-800 text-white border border-gray-600 px-8 py-4 rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              Browse Comics
            </Link>
      </div>
      </div>
      </section>
    </main>
  )
}
