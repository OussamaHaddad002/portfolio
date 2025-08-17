import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Oussama Elhaddad - Full-Stack Developer',
  description: 'Professional portfolio showcasing full-stack development expertise in React, Node.js, and modern web technologies.',
  keywords: 'full-stack developer, React, Node.js, TypeScript, web development, software engineer',
  authors: [{ name: 'Oussama Elhaddad' }],
  creator: 'Oussama Elhaddad',
  openGraph: {
    title: 'Oussama Elhaddad - Full-Stack Developer',
    description: 'Professional portfolio showcasing full-stack development expertise',
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
