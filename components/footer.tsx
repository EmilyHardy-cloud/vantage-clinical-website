'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-midnight-navy text-clinical-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Image
                src="/logos/logo-blue-background.png"
                alt="Vantage Clinical Strategy"
                width={240}
                height={80}
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-clinical-white/70">
              Strategic guidance for high-performance firms. Clinical evidence. Regulatory alignment. Operational resilience.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold font-display mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-clinical-white/70">
              <li><a href="#services" className="hover:text-strategic-gold transition-colors">Psychosocial Audits</a></li>
              <li><a href="#services" className="hover:text-strategic-gold transition-colors">Governance Review</a></li>
              <li><a href="#services" className="hover:text-strategic-gold transition-colors">Risk Mitigation</a></li>
              <li><a href="#services" className="hover:text-strategic-gold transition-colors">Resilience Design</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold font-display mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-clinical-white/70">
              <li><a href="#about" className="hover:text-strategic-gold transition-colors">About</a></li>
              <li><a href="#team" className="hover:text-strategic-gold transition-colors">Leadership</a></li>
              <li><a href="#contact" className="hover:text-strategic-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold font-display mb-4">Connect</h4>
            <div className="space-y-2 text-sm">
              <p className="text-clinical-white/70">
                <strong>Email:</strong><br />
                <a href="mailto:enquiries@vantageclinicalstrategy.com" className="text-strategic-gold hover:underline">
                  enquiries@vantageclinicalstrategy.com
                </a>
              </p>
              <p className="text-clinical-white/70 mt-3">
                <strong>LinkedIn:</strong><br />
                <a href="#" className="text-strategic-gold hover:underline">
                  Emily Hardy
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-clinical-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-clinical-white/60">
            <p>&copy; {currentYear} Vantage Clinical Strategy. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://waveapps.com" target="_blank" rel="noopener noreferrer" className="hover:text-strategic-gold transition-colors">Client Portal / Payment</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-clinical-white/10 text-center">
          <p className="text-xs text-clinical-white/50 font-semibold uppercase tracking-wider">
            Vantage Clinical Strategy is a specialist consultancy. We provide systemic auditing and strategic advisory; we do not provide individual medical or legal advice. • Aligned with ISO 45003:2021 Standards
          </p>
        </div>
      </div>
    </footer>
  )
}
