export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center space-y-6 max-w-prose mx-auto px-6">
      <h1 className="text-4xl font-semibold tracking-tight">Ethan Frost</h1>
      <p className="text-neutral-400 text-lg">
        I work on tools and systems that bridge analysis and execution.  
        This site is a quiet archive of work and process — occasionally updated, always mine.
      </p>

      <div className="flex gap-4 pt-4">
        <a
          href="/work"
          className="px-4 py-2 bg-white text-black font-medium rounded hover:bg-neutral-200 transition"
        >
          View Work
        </a>
        <a
          href="/about"
          className="px-4 py-2 border border-white font-medium rounded hover:bg-white hover:text-black transition"
        >
          About Me
        </a>
      </div>

      <footer className="pt-12 text-sm text-neutral-500">
        © Ethan Frost — Last updated June 2025
      </footer>
    </section>
  )
}
