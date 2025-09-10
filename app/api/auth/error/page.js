import { Suspense } from "react";
import ErrorPageClient from "./ErrorPageClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorPageClient />
    </Suspense>
  );
}
