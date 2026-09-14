'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

// ... imports ...

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-clinical-white/80 backdrop-blur-md border-b border-gray-200/50 py-4' : 'bg-transparent py-6'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/logos/logo-white-background.png"
              alt="Vantage Clinical Strategy"
              width={180}
              height={50}
              className="h-10 md:h-12 w-auto object-contain transition-all"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-forensic-charcoal hover:text-strategic-gold transition-colors font-medium relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-strategic-gold transition-all group-hover:w-full" />
          </Link>
          <a href="#services" className="text-forensic-charcoal hover:text-strategic-gold transition-colors font-medium relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-strategic-gold transition-all group-hover:w-full" />
          </a>
          <a href="#about" className="text-forensic-charcoal hover:text-strategic-gold transition-colors font-medium relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-strategic-gold transition-all group-hover:w-full" />
          </a>
          <a href="#values" className="text-forensic-charcoal hover:text-strategic-gold transition-colors font-medium relative group">
            Values
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-strategic-gold transition-all group-hover:w-full" />
          </a>
          <a href="#team" className="text-forensic-charcoal hover:text-strategic-gold transition-colors font-medium relative group">
            Leadership
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-strategic-gold transition-all group-hover:w-full" />
          </a>
          <a
            href="#contact"
            className="btn-primary text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Enquire
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-midnight-navy"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-clinical-white border-t border-gray-200 py-4 px-6 flex flex-col gap-4 shadow-xl"
        >
          <Link href="/" className="text-forensic-charcoal hover:text-midnight-navy transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <a href="#services" className="text-forensic-charcoal hover:text-midnight-navy transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#about" className="text-forensic-charcoal hover:text-midnight-navy transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#values" className="text-forensic-charcoal hover:text-midnight-navy transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Values</a>
          <a href="#team" className="text-forensic-charcoal hover:text-midnight-navy transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Leadership</a>
          <a href="#contact" className="btn-primary text-sm w-full text-center" onClick={() => setIsMenuOpen(false)}>Enquire</a>
        </motion.nav>
      )}
    </motion.header>
  )
}
