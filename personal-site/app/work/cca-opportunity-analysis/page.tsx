import Link from 'next/link';
import { Section, H2, P, Button } from '@/components/primitives';

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto mt-20 space-y-8">
      <Section>
        <H2>CCA Opportunity Analysis</H2>
        <P className="text-neutral-400 mb-4">
          Data-driven analysis of the Collaborative Combat Aircraft (CCA) program. Maps addressable spending across autonomy, airframes, and munitions.
        </P>
        <P>
          [Project writeup goes here. Add your analysis, charts, and findings.]
        </P>
        <Button asChild variant="secondary" className="mt-8">
          <Link href="/work">← Back to Work</Link>
        </Button>
      </Section>
    </main>
  );
} 