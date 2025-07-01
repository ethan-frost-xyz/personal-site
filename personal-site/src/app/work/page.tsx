import Card from '@/components/ui/card';
import { Section, H2, P } from "@/components/primitives";

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto mt-50 space-y-2">
      <Section>
        <H2>Resume & Selected Work</H2>
        <P className="max-w-2xl">
          Here are some of my recent projects and analyses from my professional experiences. For more, see about page or reach out directly.        
          Click here for resume.
        </P>
      </Section>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Rocket Lab Project */}
        <Card
          title="RKLB Launch Efficiency Model"
          description="High-fidelity launch efficiency analysis of Rocket Lab using Python."
          href="/work/rocket-lab-model"
        />

        {/* CCA Opportunity Analysis */}
        <Card
          title="CCA Opportunity Analysis"
          description="Under Construction"
          href="/work/cca-opportunity-analysis"
        />
      </div>
      {/* ---------------- Footer ---------------- */}
      <footer className="py-8 text-center text-sm text-neutral-500">
      © Ethan Frost — Last updated June 2025 — Built with Next.js & Tailwind CSS
      </footer>
    </main>
  );
}