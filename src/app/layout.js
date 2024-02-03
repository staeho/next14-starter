import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JPMS',
  description: 'JPMS whith AI and ML',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
      <h1>{metadata.title}</h1>
        {children}
        </body>
    </html>
  )
}