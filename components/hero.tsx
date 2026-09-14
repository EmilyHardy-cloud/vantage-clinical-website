'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full min-h-screen bg-clinical-white flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent -z-10" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-strategic-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-midnight-navy/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 px-4 py-1.5 bg-strategic-gold/10 border border-strategic-gold/30 rounded-full"
            >
              <span className="text-sm font-semibold text-midnight-navy tracking-tight">ISO 45003 Aligned Governance</span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-midnight-navy mb-8 leading-[1.1] tracking-tighter text-balance">
              High Performance, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-midnight-navy to-strategic-gold">
                Systemically Protected.
              </span>
            </h1>

            <p className="text-xl text-forensic-charcoal/80 mb-10 leading-relaxed max-w-lg font-light">
              Forensic Psychosocial Audits and ISO 45003 Strategy for Law, Finance, and Tech Firms.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <button
                onClick={scrollToContact}
                className="btn-primary flex items-center justify-center gap-3 group shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Request Strategic Briefing
                <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button className="btn-secondary hover:bg-slate-50">
                Download ISO Framework
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 pt-8 border-t border-gray-200/60 flex gap-12"
            >
              <div>
                <p className="text-4xl font-bold font-display text-midnight-navy">90+</p>
                <p className="text-sm text-architectural-grey mt-2 uppercase tracking-wider font-medium">Engagements</p>
              </div>
              <div>
                <p className="text-4xl font-bold font-display text-midnight-navy">5 Years</p>
                <p className="text-sm text-architectural-grey mt-2 uppercase tracking-wider font-medium">Specialist Practice</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:grid grid-rows-2 gap-6 h-[600px]"
          >
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-white shadow-xl hover:shadow-2xl transition-all p-10 flex flex-col justify-center group">
              <div className="text-strategic-gold mb-6 p-4 bg-strategic-gold/10 rounded-xl w-fit group-hover:scale-110 transition-transform">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-midnight-navy mb-3">Evidence-Led</h3>
              <p className="text-forensic-charcoal/80 leading-relaxed">Clinical psychology grounded in regulatory alignment, ensuring every strategy is defensible and data-driven.</p>
            </div>

            <div className="bg-midnight-navy text-clinical-white rounded-2xl shadow-xl hover:shadow-2xl transition-all p-10 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-strategic-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform group-hover:scale-125" />
              <div className="relative z-10">
                <div className="text-clinical-white mb-6 p-4 bg-white/10 rounded-xl w-fit">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">Discreet Advisory</h3>
                <p className="text-clinical-white/80 leading-relaxed">Boardroom-ready insight with confidential rigor, protecting your firm's reputation while addressing structural risks.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
