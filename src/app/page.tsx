'use client'

import { useAuth } from '../hooks/useAuth';
import Link from 'next/link';

export default function Home() {
  const { current, logout } = useAuth();

  return (
      <main className="min-h-screen">
        <div className="relative bg-[url('/CU_Hero_image.png')] bg-cover bg-top bg-no-repeat h-[50vh] w-full">
           <div className="absolute left-4 top-1/2 md:top-1/2 md:left-12">
                <div className="flex flex-col gap-y-2 text-white max-w-xs sm:max-w-sm md:max-w-md bg-white/10 backdrop-blur-xs border border-white/20 rounded-lg p-4 sm:p-6">
                 <div className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 bg-red-500 flex items-center justify-center text-xs sm:text-sm">Logo</div>
                 <h2 className="text-xl sm:text-2xl md:text-3xl text-neutral-100 font-bold">For the Community</h2>
                 <p className="text-sm sm:text-base text-neutral-100">ComicUnity is a community-driven platform for sharing comic and art creations.</p>
              </div>
          </div>
        </div>
      </main>
  )
}
