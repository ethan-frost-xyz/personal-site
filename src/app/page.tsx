import headshot from '../components/headshot.jpeg';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Card from '@/components/ui/card';
import { Modal } from '@/components/ui/modal';
import { Section, H2, P, Button } from "../components/primitives"
import {Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription} from "@/components/ui/dialog"

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
            <Button asChild variant="secondary">
              <Link href="/about">About Me</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/work">View Work</Link>
            </Button>
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
            {/* ---- Rocket Lab --------------------------------------------------- */}
            <Dialog>
              <DialogTrigger asChild>
                <Card
                  title="Launch Efficiency Model"
                  description="High-fidelity launch efficiency analysis of Rocket Lab using Python."
                />
              </DialogTrigger>

              <DialogContent className="max-w-xl rounded-2xl border border-neutral-700 bg-neutral-900 p-6">
                <DialogHeader>
                  <DialogTitle className="text-lg font-semibold">
                    Launch Efficiency Model
                  </DialogTitle>
                  <DialogDescription className="text-sm text-neutral-400">
                    High-fidelity launch efficiency analysis of Rocket Lab.
                  </DialogDescription>
                </DialogHeader>

                <P className="mt-4">
                  I built a pandas pipeline that ingests launch logs, normalises cadence, and
                  benchmarks Rocket Lab against ULA, SpaceX, and Arianespace. The model surfaces
                  efficiency deltas in both mass-to-orbit and turnaround time, driving a more nuanced
                  revenue forecast.
                </P>

                <Button asChild variant="secondary" size="sm" className="mt-6">
                  <Link href="/work/rocket-lab-model">Read full case →</Link>
                </Button>
              </DialogContent>
            </Dialog>

            {/* ---- CCA Opportunity --------------------------------------------- */}
            <Dialog>
              <DialogTrigger asChild>
                <Card
                  title="CCA Opportunity Analysis"
                  description="Data-driven analysis of the Collaborative Combat Aircraft (CCA) program."
                />
              </DialogTrigger>

              <DialogContent className="max-w-xl rounded-2xl border border-neutral-700 bg-neutral-900 p-6">
                <DialogHeader>
                  <DialogTitle className="text-lg font-semibold">
                    CCA Opportunity Analysis
                  </DialogTitle>
                  <DialogDescription className="text-sm text-neutral-400">
                    Data-driven view of the Collaborative Combat Aircraft market.
                  </DialogDescription>
                </DialogHeader>

                <P className="mt-4">
                  Using DoD budget docs and open-source flight-test data, I mapped addressable
                  spending across autonomy software, airframes, and munitions for CCA. Result:
                  a bottom-up TAM of ≈ $17 B by FY30—well above consensus sell-side models.
                </P>

                <Button asChild variant="secondary" size="sm" className="mt-6">
                  <Link href="/work/cca-opportunity-analysis">Read full case →</Link>
                </Button>
              </DialogContent>
            </Dialog>
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
