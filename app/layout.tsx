import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oussama Elhaddad - Full-Stack Developer & Software Engineer',
  description: 'Software Engineering student and Full-Stack Developer with expertise in AI integration, geospatial applications, React, FastAPI, and modern web technologies. Available for opportunities in Tunis, Tunisia.',
  keywords: 'Oussama Elhaddad, full-stack developer, software engineer, React, FastAPI, MongoDB, TypeScript, AI integration, geospatial, chatbot development, Tunisia',
  authors: [{ name: 'Oussama Elhaddad' }],
  creator: 'Oussama Elhaddad',
  openGraph: {
    title: 'Oussama Elhaddad - Full-Stack Developer & Software Engineer',
    description: 'Software Engineering student with expertise in AI integration and modern web technologies',
    type: 'website',
    locale: 'en_US',
    siteName: 'Oussama Elhaddad Portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
