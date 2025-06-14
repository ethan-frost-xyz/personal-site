export default function Home() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center space-y-6 max-w-prose mx-auto px-6">
      <h1 className="text-4xl font-semibold tracking-tight">Ethan Frost</h1>
      <p className="text-neutral-400 text-lg">
        This site is an archive of work and process — occasionally updated. Work in progress. Most of this text is just AI slop to fill space so dont judge me if it sounds obnoxious.
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
    </section>
  )
}
