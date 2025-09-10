// hooks/useAOS.js
'use client';

import { useEffect } from 'react';

export default function useAOS() {
  useEffect(() => {
    let mounted = true;

    async function setup() {
      // dynamic import of AOS JS + CSS so it runs only on client
      const AOS = (await import('aos')).default;
      await import('aos/dist/aos.css');

      const initAOS = () => {
        if (!mounted) return;
        AOS.init({
          duration: 800,
          easing: 'ease-out-cubic',
          once: true,
          offset: 50,
          disableMutationObserver: true,
        });
        // ensure correct measurements after paint
        requestAnimationFrame(() => AOS.refresh());
      };

      if (document.readyState === 'complete') {
        // tiny delay so mobile paints first
        setTimeout(initAOS, 50);
      } else {
        window.addEventListener('load', () => setTimeout(initAOS, 50), { once: true });
      }
    }

    setup();

    return () => { mounted = false; };
  }, []);
}
