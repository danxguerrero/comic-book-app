'use client';

import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import AuthForm from '../../components/AuthForm';

export default function LoginPage() {
    const { login, register } = useAuth();
    const [isSignUp, setIsSignUp] = useState(false);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        
        await login(
            formData.get('email') as string,
            formData.get('password') as string
        );
        
        form.reset();
    };

    const handleRegistration = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        
        await register(
            formData.get('email') as string,
            formData.get('password') as string
        );
        
        form.reset();
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                        {isSignUp ? 'Create your account' : 'Welcome back'}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        {isSignUp 
                            ? 'Join the ComicUnity community' 
                            : 'Sign in to your ComicUnity account'
                        }
                    </p>
                </div>
                
                <div className="bg-white py-8 px-6 shadow-xl rounded-lg sm:px-10">
                    <AuthForm 
                        handleSubmit={isSignUp ? handleRegistration : handleLogin}
                        submitType={isSignUp ? 'Sign Up' : 'Log In'}
                    />
                    
                    <div className="mt-6">
                        <button 
                            onClick={() => setIsSignUp(!isSignUp)}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                        >
                            {isSignUp 
                                ? 'Already have an account? Sign in' 
                                : "Don't have an account? Sign up"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
