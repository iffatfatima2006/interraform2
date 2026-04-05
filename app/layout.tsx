import type { Metadata } from 'next'
import './globals.css'
import PageLoader from '@/components/PageLoader'
import SmoothScroller from '@/components/SmoothScroller'

export const metadata: Metadata = {
  title: 'InterraForm | Workspace Design & Construction',
  description:
    'Interraform designs and builds modern workspaces, offices, and commercial interiors that improve productivity, efficiency, and business environment through strategic design and complete project execution.',
  openGraph: {
    title: 'InterraForm | Workspace Design & Construction',
    description:
      'Interraform designs and builds modern workspaces, offices, and commercial interiors.',
    siteName: 'InterraForm',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroller>
          <PageLoader />
          <div id="page-content">
            {children}
          </div>
        </SmoothScroller>
      </body>
    </html>
  )
}
