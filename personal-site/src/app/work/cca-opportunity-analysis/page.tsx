import Link from 'next/link';
import { Section, H2, P, Button } from '@/components/primitives';

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto mt-20 space-y-8">
      <Section>
        <H2>CCA Opportunity Analysis</H2>
        <P className="text-neutral-400 mb-4">
          Data-driven analysis of the Collaborative Combat Aircraft (CCA) program.
        </P>
        <P>
          [Under Construction]
        </P>
        <Button asChild variant="secondary" className="mt-8">
          <Link href="/work">← Back to Work</Link>
        </Button>
      </Section>
      {/* ---------------- Footer ---------------- */}
      <footer className="py-8 text-center text-sm text-neutral-500">
      © Ethan Frost — Last updated June 2025 — Built with Next.js & Tailwind CSS
      </footer>
    </main>
  );
} 