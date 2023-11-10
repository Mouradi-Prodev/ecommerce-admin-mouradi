import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ThemeProvider } from "@/providers/theme-provider"
import { ModalProvider } from '@/providers/modal-provider'


import './globals.css'
import { ToasterProvider } from '@/providers/toast-provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin dashboard',
  description: 'Ecommerce admin dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
        <ModalProvider />  
        <ToasterProvider />
       
        {children}
        </ThemeProvider>
       
        
      </body>
    </html>
    </ClerkProvider>
  )
}
