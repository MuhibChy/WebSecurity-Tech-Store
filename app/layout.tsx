import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './backup-styles.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebSecurity.com - Leading Security & Tech Solutions',
  description: 'Professional security solutions, computers, laptops, and tech products with glassmorphism design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              background: linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%);
              color: white;
              min-height: 100vh;
              background-attachment: fixed;
            }
          `
        }} />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
