'use client';

import { useSession, signOut } from 'next-auth/react';

export default function LogoutButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') return null;
  if (!session) return null;

  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="text-sm text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
    >
      Log Out
    </button>
  );
}
