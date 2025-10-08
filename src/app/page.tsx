'use client'

import { useAuth } from '../hooks/useAuth';
import Link from 'next/link';

export default function Home() {
  const { current, logout } = useAuth();

  return (
      <main className="flex justify-start min-h-screen min-w-screen">
        <div className="bg-[url('/CU_Hero_image.png')] bg-cover bg-top bg-no-repeat h-[40vh] w-full"></div>
      </main>
  );
}
