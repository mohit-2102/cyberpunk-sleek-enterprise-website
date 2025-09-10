'use client';
import { useState, useEffect, useRef } from 'react';

export default function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target); // only once
      }
    }, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}
