import { Section, H2, P } from "@/components/primitives"
import Card from "@/components/ui/card"

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto mt-50 space-y-0">
      <Section>
        <H2>Get in Touch</H2>
        <P className="max-w-2xl">
          Feel free to reach out through any of the channels below.
        </P>
      </Section>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Email Section */}
        <Card
          title="Email"
          description="For professional inquiries and collaborations"
          href="mailto:ethanfrostbvt@gmail.com"
        />

        {/* LinkedIn Section */}
        <Card
          title="LinkedIn"
          description="Connect professionally"
          href="https://www.linkedin.com/in/ethan-frost-/"
        />

        {/* RYM Section */}
        <Card
          title="Rate Your Music (RYM)"
          description="Goodreads for music"
          href="rateyourmusic.com/ethanfrost"
        />

        {/* GitHub Section */}
        <Card
          title="GitHub"
          description="Check out my projects"
          href="https://github.com/ethan-frost-xyz"
        />
      </div>

      {/* ---------------- Footer ---------------- */}
      <footer className="py-8 text-center text-sm text-neutral-500">
        © Ethan Frost — Last updated June 2025 — Built with Next.js & Tailwind CSS
      </footer>
    </main>
  )
}  