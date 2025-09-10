import { Suspense } from 'react';
import ResetPageClient from './ResetPageClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPageClient />
    </Suspense>
  );
}
