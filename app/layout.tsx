import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { CartProvider } from '@/contexts/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Leela's Kitchen - Authentic Indian Cuisine",
  description: "Experience the finest Indian cuisine at Leela's Kitchen. Serving delicious dosa, idli, and traditional Indian dishes.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Leela&apos;s Kitchen</h3>
              <p className="text-gray-400">Authentic Indian Cuisine</p>
              <p className="text-gray-300 mt-4">
                <a href="tel:+13197774665" className="hover:text-primary-400 transition-colors">
                  📞 +1 (319) 777-4665
                </a>
              </p>
              <p className="text-gray-500 mt-4 text-sm">
                © {new Date().getFullYear()} Leela&apos;s Kitchen. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
        </CartProvider>
      </body>
    </html>
  )
}





