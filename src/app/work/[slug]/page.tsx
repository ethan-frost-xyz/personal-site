import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'

type FrontMatter = {
  title: string
  description: string
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'content', 'work', `${params.slug}.mdx`)

  let fileContent: string
  try {
    fileContent = await fs.readFile(filePath, 'utf8')
  } catch (err) {
    notFound()
  }

  const parsed = matter(fileContent)
  const content = parsed.content
  const data = parsed.data as FrontMatter
  
  return (
    <article className="max-w-2xl mt-20 space-y-6 prose prose-invert prose-neutral">
      <h1>{data.title}</h1>
      <p className="text-neutral-400">{data.description}</p>
      <hr className="border-neutral-700" />
      <div>
        {/* Raw MDX fallback until we wire up proper rendering */}
        <pre className="whitespace-pre-wrap text-sm">{content}</pre>
      </div>
    </article>
  )
}