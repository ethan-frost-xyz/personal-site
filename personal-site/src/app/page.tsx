import headshot from '../components/headshot.jpeg';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Card from '@/components/ui/card';
import { Section, P, Button } from "../components/primitives"
import {Dialog, DialogTrigger} from "@/components/ui/dialog"
import { AnimatedDialogContent } from "@/components/AnimatedDialogContent"
import { ScrollAnimation } from 'src/components/ui/scroll-animations';

export const metadata: Metadata = {
  title: 'Ethan Frost',
  description: 'Finance bro on the outside, tech bro on the inside.',
};

export default function Home() {
  return (
    <>
      <main className="space-y-6">
        {/* ---------------- Hero Section ---------------- */}
        <section id="hero" className="flex flex-col items-center text-center space-y-6">
          <ScrollAnimation animation="fadeIn" delay={300} duration={800}>
            <div className="relative group">
              <div className="absolute -inset-2 rounded-full bg-neutral-700/50 transition-all duration-300 group-hover:bg-neutral-600/50 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
              <Image
                src={headshot}
                alt="Ethan Frost"
                width={200}
                height={200}
                className="rounded-full relative z-10 aspect-square object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </ScrollAnimation>
          <h1 className="text-5xl font-semibold tracking-tight">
            <ScrollAnimation animation="fadeIn" delay={500} duration={800}>
              Ethan Frost
            </ScrollAnimation>
          </h1>
          <ScrollAnimation animation="fadeIn" delay={700} duration={800}>
            <P className="max-w-2xl mx-auto">
              Artificial Intelligence, Equity Research, and Defense Technology.
            </P>
          </ScrollAnimation>
          {/* ---------------- Navigation Buttons ---------------- */}
          <ScrollAnimation animation="fadeIn" delay={900} duration={800}>
            <div className="flex gap-4">
              <Button asChild variant="secondary">
                <Link href="/about">About Me</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/work">View Work</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </section>
        {/* ---------------- Introduction ---------------- */}
        <ScrollAnimation animation="fadeIn" delay={1100} duration={800}>
          <Section id="introduction" className='py-4'>
            <P>
              I&apos;m a Vermont‑raised equity research analyst living in New York City, working at the
              intersection of finance, defense, and technology. I cover
              next generation aerospace & defense companies, as well as cybersecurity. 
              I&apos;ve always been drawn to tools, ideas, and technologies that change how
              things get built. I pride myself as a lifelong learner.
            </P>
          </Section>
        </ScrollAnimation>

        {/* ---------------- Project Teasers ---------------- */}
        <ScrollAnimation animation="fadeIn" delay={1300} duration={800}>
          <Section id="projects" className="space-y-4 py-4">

            <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
              {/* ---- Rocket Lab --------------------------------------------------- */}
              <Dialog>
                <DialogTrigger asChild>
                  <Card
                    title="Select Project: Rocket Lab Launch Efficiency Model"
                    description="High-fidelity launch efficiency analysis of Rocket Lab with Python."
                  />
                </DialogTrigger>

                <AnimatedDialogContent
                  title="Launch Efficiency Model"
                  description="High-fidelity launch efficiency analysis of Rocket Lab."
                  content="I built a pandas pipeline that ingests launch logs, normalises cadence, and benchmarks Rocket Lab against ULA, SpaceX, and Arianespace. The model surfaces efficiency deltas in both mass-to-orbit and turnaround time, driving a more nuanced revenue forecast."
                  linkHref="/work/rocket-lab-model"
                  linkText="Read full case →"
                />
              </Dialog>
            </div>
          </Section>
        </ScrollAnimation>
    </main>
      {/* ---------------- Footer ---------------- */}
      <footer className="py-8 text-center text-sm text-neutral-500">
        © Ethan Frost — Last updated June 2025 — Built with Next.js & Tailwind via Cursor
      </footer>
    </>
  );
}
