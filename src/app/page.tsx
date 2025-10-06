'use client'
import { useAuth } from '../../hooks/useAuth';
import Link from 'next/link';

export default function Home() {
  const { current, login, logout } = useAuth();
  if (current) {
      console.log(current)
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {current ? (
          <div>
            <h1>Welcome {current.email}</h1>
            <button className="border-2 rounded-lg p-2" onClick={logout}>Logout</button>
          </div>
        ): (<div>
          <Link href="/login" className="border-2 rounded-lg p-2" >Login</Link>
        </div>)}
        
      </main>
    </div>
  );
}
