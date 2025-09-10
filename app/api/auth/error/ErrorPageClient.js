'use client';
import { useSearchParams } from 'next/navigation';

export default function AuthErrorPage() {
  const params = useSearchParams();
  const error = params.get('error');

  const getMessage = () => {
    if (!error) return 'An unknown error occurred.';

    if (error.includes('sign in with')) return error;
    if (error === 'OAuthAccountNotLinked') return 'This email is already registered. Please sign in with your original method.';
    if (error === 'AccessDenied') return 'Access denied.';

    return decodeURIComponent(error);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded shadow max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Login Error</h1>
        <p className="text-gray-700">{getMessage()}</p>
        <a href="/" className="mt-4 inline-block text-blue-600 underline">Go back</a>
      </div>
    </div>
  );
}
