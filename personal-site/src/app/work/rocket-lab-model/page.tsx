import Link from 'next/link';
import { Section, H2, P, Button } from '@/components/primitives';

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto mt-20 space-y-8">
      <Section>
        <H2>Rocket Lab Launch Efficiency Model</H2>
        <P className="text-neutral-400 mb-4">
          High-fidelity launch efficiency analysis of Rocket Lab using Python. Benchmarks cadence, mass-to-orbit, and turnaround time.
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