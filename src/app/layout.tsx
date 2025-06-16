import './globals.css'
import type { ReactNode } from 'react'
import LinkedIn from '../components/LinkedIn'
import { Navbar } from '../components/ui/navbar'

export const metadata = {
  title: 'Ethan Frost',
  description: 'Execution-focused strategist for frontier-tech teams',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="text-neutral-100 font-sans antialiased">
        {/* --- top nav ------------------------------------------------------ */}
        <Navbar />

        {/* --- page content ------------------------------------------------- */}
        <main className="max-w-3xl mx-auto px-6 py-12 relative">{children}</main>

        {/* --- fixed social icon ------------------------------------------- */}
        <LinkedIn />
      </body>
    </html>
  )
}
