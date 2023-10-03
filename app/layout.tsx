import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './components/Navbar'
import { ThemeProvider } from '@/provider/themeProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alwi Rifa',
  description: 'Next13 Alwi Rifa portfolio',
  icons: {
    icon:     '/images/favicon/favicon.ico?v=4',
    apple:    '/images/favicon/apple-touch-icon.png?v=4',
    shortcut: '/images/favicon/apple-touch-icon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
 
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
