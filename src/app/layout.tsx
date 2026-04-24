import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Kita pindahkan bg-gray-50 ke sini agar tidak error di CSS */}
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <nav className="bg-white border-b sticky top-0 z-50">
          {/* ... isi nav tetap sama */}
        </nav>
        {children}
      </body>
    </html>
  )
}