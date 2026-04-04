import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Service Plus Aquatics | Luxury Aquatic Design & Construction',
  description:
    "Canada's premier aquatic experts, reshaping luxury one custom-built project at a time. Where passion meets precision, and every ripple begins with a vision.",
  openGraph: {
    title: 'Service Plus Aquatics | Luxury Aquatic Design & Construction',
    description:
      "Canada's premier aquatic experts, reshaping luxury one custom-built project at a time.",
    url: 'https://www.serviceplusaquatics.com',
    siteName: 'Service Plus Aquatics',
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
      <body>{children}</body>
    </html>
  )
}
