import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Endpoint Graveyard — Monitor Deprecated API Usage',
  description: 'Scan GitHub repositories to detect deprecated API endpoint usage, track sunset timelines, and get alerts before your integrations break.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c2f1686f-cf7d-4979-8942-f2a429501880"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
