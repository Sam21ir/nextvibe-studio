'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#3974B8] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center h-16">
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold"
          >
            NextVibe
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto flex flex-col gap-1"
          >
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
          </button>

        </div>
      </div>

      {isOpen && (
        <div className="bg-[#2a5a8f] px-4 py-4">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/services" className="block py-2">Services</Link>
          <Link href="/about" className="block py-2">À propos</Link>
          <Link href="/contact" className="block py-2">Contact</Link>
        </div>
      )}
    </nav>
  )
}
