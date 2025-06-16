import { Section, H2, P } from "@/components/primitives"
import Card from "@/components/ui/card"

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto mt-20 space-y-12">
      <Section>
        <H2>Get in Touch</H2>
        <P className="max-w-2xl">
          I&apos;m always interested in connecting with fellow professionals in finance, defense, and technology. 
          Feel free to reach out through any of the channels below.
        </P>
      </Section>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Email Section */}
        <Card
          title="Email"
          description="For professional inquiries and collaborations"
          href="mailto:your.email@example.com"
        />

        {/* LinkedIn Section */}
        <Card
          title="LinkedIn"
          description="Connect professionally"
          href="https://linkedin.com/in/your-profile"
        />

        {/* Twitter Section */}
        <Card
          title="Twitter"
          description="Follow for industry insights"
          href="https://twitter.com/your-handle"
        />

        {/* GitHub Section */}
        <Card
          title="GitHub"
          description="Check out my code"
          href="https://github.com/your-username"
        />
      </div>

      <Section>
        <P className="text-sm text-neutral-500">
          I typically respond to emails within 24-48 hours. For urgent matters, please indicate so in the subject line.
        </P>
      </Section>
    </main>
  )
}  