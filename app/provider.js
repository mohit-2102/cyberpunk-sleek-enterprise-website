'use client';

import { SessionProvider } from 'next-auth/react';
import { CartProvider } from '../context/CartContext'; // ✅ import it

export function Providers({ children }) {
  return (
    <SessionProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </SessionProvider>
  );
}


// 'use client';

// import { SessionProvider } from 'next-auth/react';

// export function Providers({ children }) {
//   return <SessionProvider>{children}</SessionProvider>;
// }
