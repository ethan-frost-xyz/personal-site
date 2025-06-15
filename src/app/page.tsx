import headshot from '../components/headshot.jpeg';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Button from '../components/ui/button';
import Card from '../components/ui/card';
import { Section, H2, P } from "../components/primitives"

export const metadata: Metadata = {
  title: 'Home – Ethan Frost',
  description: 'Turning frontier-tech insight into shipped outcomes.',
};

export default function Home() {
  return (
    <>
      <main className="space-y-24">
        {/* ---------------- Hero Section ---------------- */}
        <section id="hero" className="flex flex-col items-center text-center space-y-6">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-neutral-700/50" />
            <Image
              src={headshot}
              alt="Ethan Frost"
              width={200}
              height={200}
              className="rounded-full relative z-10 aspect-square object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl font-semibold tracking-tight">Ethan Frost</h1>
          <P className="max-w-2xl mx-auto">
            Artificial Intelligence, Equity Research, and Defense Technology. Project underconstruction. Please excuse the AI slop.
          </P>
          {/* ---------------- Navigation Buttons ---------------- */}
          <div className="flex gap-4">
            <Link href="/work">
              <Button>View Work</Button>
            </Link>
            <Link href="/about">
              <Button>About Me</Button>
            </Link>
          </div>
        </section>
        {/* ---------------- Introduction ---------------- */}
        <Section id="introduction">
          <P>
            I'm a Vermont‑raised equity research analyst living in New York City, working at the
            intersection of finance, defense, and technology. By day, I cover
            next generation aerospace & defense companies, as well as cybersecurity. I've
            always been drawn to tools, ideas, and technologies that change how
            things get built. I pride myself as a life long independent learner.
          </P>
        </Section>

        {/* ---------------- Project Teasers ---------------- */}
        <Section id="projects" className="space-y-4">
          <H2>Selected Projects</H2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card
              href="/work/rocket-lab-model"
              title="Launch Efficiency Model"
              description="High‑fidelity launch efficiency analysis of Rocket Lab using Python."
            />
            <Card
              href="/work/cca-opportunity-analysis"
              title="CCA Opportunity Analysis"
              description="Data‑driven analysis of the Collaborative Combat Aircraft (CCA) program."
            />
          </div>
        </Section>
      </main>

      {/* ---------------- Footer ---------------- */}
      <footer className="py-8 text-center text-sm text-neutral-500">
        © Ethan Frost — Last updated June 2025 — Built with Next.js & Tailwind via Cursor
      </footer>
    </>
  );
}
