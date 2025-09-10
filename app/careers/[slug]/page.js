import JobDetail from '@/components/Careers/JobDetail';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

async function fetchJobBySlug(slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/jobs/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Job not found');
  return res.json();
}

export default async function JobDetailPage({ params }) {
  const { slug } = params;
  const job = await fetchJobBySlug(slug);

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white text-gray-800 px-4">
        <section className="max-w-4xl mx-auto py-4">
          <JobDetail job={job} />
        </section>
      </main>
      <Footer  />
    </>
  );
}
