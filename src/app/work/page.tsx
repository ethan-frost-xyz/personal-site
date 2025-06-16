import Card from '@/components/ui/card';
import { Section, H2, P } from "@/components/primitives";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto mt-20 space-y-12">
      <Section>
        <H2>Selected Work</H2>
        <P className="max-w-2xl">
          Here are some of my recent projects and analyses at the intersection of technology, defense, and finance. For more, see my About page or reach out directly.
        </P>
      </Section>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Rocket Lab Project */}
        <Card
          title="Rocket Lab Launch Efficiency Model"
          description="High-fidelity launch efficiency analysis of Rocket Lab using Python. Benchmarks cadence, mass-to-orbit, and turnaround time."
          href="/work/rocket-lab-model"
        />

        {/* CCA Opportunity Analysis */}
        <Card
          title="CCA Opportunity Analysis"
          description="Data-driven analysis of the Collaborative Combat Aircraft (CCA) program. Maps addressable spending across autonomy, airframes, and munitions."
          href="/work/cca-opportunity-analysis"
        />

        {/* Placeholder Project 1 */}
        <Card
          title="Cybersecurity Sector Deep Dive"
          description="Comprehensive review of leading cybersecurity firms and their defense sector impact."
          href="#"
        />

        {/* Placeholder Project 2 */}
        <Card
          title="Aerospace & Defense Market Dashboard"
          description="Interactive dashboard for tracking next-gen aerospace and defense companies."
          href="#"
        />
      </div>
    </main>
  );
}