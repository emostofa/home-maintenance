import './globals.css'
import { Inter } from 'next/font/google'
import { connectToMongo } from '@/dbconfig/dbConfig';


connectToMongo();
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home Maintenace',
  description: 'Home Maintenace for your home maintenance needs',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
