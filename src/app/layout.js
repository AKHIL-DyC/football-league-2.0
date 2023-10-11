import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/component/component/Navbar/Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'mec 26 football league',
  description: 'made by akhil',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
