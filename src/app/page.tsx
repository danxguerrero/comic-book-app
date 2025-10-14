'use client'

import { useAuth } from '../hooks/useAuth';
import Link from 'next/link';
import { ContentBox } from '../components/ContentBox'; 
import homepageContent from "./data/homepageContent.json"

export default function Home() {
  const { current, logout } = useAuth();
  const homepageContents = homepageContent.contents;
  const contentMap = homepageContents.map((content, idx) => <ContentBox key={idx} content={content}/>);

  return (
      <main className="min-h-screen">
        <div className="relative bg-[url('/CU_Hero_image.png')] bg-cover bg-top bg-no-repeat h-[50vh] w-full">
           <div className="absolute left-4 top-1/3 md:top-1/2 md:left-12">
                <div className="flex flex-col gap-y-2 text-white max-w-xs sm:max-w-sm md:max-w-md bg-white/10 backdrop-blur-xs border border-white/20 rounded-lg p-4">
                 <div className="h-16 w-16 md:h-32 md:w-32 bg-red-500 flex items-center justify-center text-xs">Logo</div>
                 <h2 className="text-xl md:text-3xl text-neutral-100 font-bold">For the Community</h2>
                 <p className="text-sm text-neutral-100">ComicUnity is a community-driven platform for sharing comic and art creations.</p>
              </div>
          </div>
        </div>
        <div className="flex flex-col min-h-[50vh] flex-grow">
          {contentMap}
        </div>
      </main>
  )
}
