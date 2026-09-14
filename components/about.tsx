'use client'

import { motion } from 'framer-motion'
import { Check, Target, Shield, Scale, Microscope, Activity } from 'lucide-react'

export default function About() {
  const principles = [
    {
      title: 'Precision',
      description: 'Every assessment grounded in clinical evidence and regulatory standards. No surface-level generalizations.',
      icon: Target
    },
    {
      title: 'Discretion',
      description: 'Boardroom-ready confidentiality. Your organisational vulnerabilities are treated with institutional respect.',
      icon: Shield
    },
    {
      title: 'Accountability',
      description: 'Defensible insights aligned to ISO 45003 and legal risk frameworks.',
      icon: Scale
    },
    {
      title: 'Evidence',
      description: 'Clinical psychology and systemic analysis. Strategy built on demonstrable patterns, not intuition.',
      icon: Microscope
    },
    {
      title: 'Resilience',
      description: 'Sustainable high performance through intelligent work design.',
      icon: Activity
    }
  ]

  return (
    <section id="about" className="w-full py-24 md:py-32 bg-clinical-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 bg-strategic-gold/10 border border-strategic-gold/30 rounded-full">
              <span className="text-sm font-semibold text-midnight-navy">About Vantage</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-midnight-navy mb-8 text-balance leading-tight">
              Turning Psychosocial Risk into <span className="text-transparent bg-clip-text bg-gradient-to-r from-midnight-navy to-strategic-gold">Defensible Resilience</span>
            </h1>

            <p className="text-xl text-forensic-charcoal mb-6 leading-relaxed font-light">
              We bridge the gap between clinical safety and corporate liability. Vantage provides the forensic framework to identify systemic hazards before they become legal or financial burdens.
            </p>

            <div className="mt-12 bg-white/50 border border-gray-100 p-8 rounded-3xl shadow-sm">
              <h2 className="font-display text-2xl font-bold text-midnight-navy mb-2">
                Strategic Governance. Forensic Clinical Insight.
              </h2>
              <p className="text-lg text-forensic-charcoal/80 mb-8 leading-relaxed border-b border-gray-100 pb-6">
                Vantage bridges the gap between clinical safety and corporate liability. Founded by a systemic clinical practitioner, we provide CEOs and Managing Partners with the evidence-based framework needed to secure organizational resilience.
              </p>

              <div className="space-y-6 pt-2">
                <h3 className="text-xs font-bold text-strategic-gold uppercase tracking-widest mb-6">The Vantage Edge</h3>
                {[
                  {
                    title: "Forensic Risk Mapping",
                    description: "Identify the hidden psychosocial hazards that drive cognitive capital loss and regulatory exposure."
                  },
                  {
                    title: "ISO 45003 Alignment",
                    description: 'Move beyond "wellness perks" toward a defensible, standard-aligned operational structure.'
                  },
                  {
                    title: "Executive Strategic Advisory",
                    description: "Expert-led insight designed to protect your people, your reputation, and your profit."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex items-start gap-4 text-forensic-charcoal"
                  >
                    <div className="w-6 h-6 mt-1 rounded-full bg-strategic-gold/20 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-midnight-navy" />
                    </div>
                    <div>
                      <span className="text-lg font-bold text-midnight-navy block mb-1">{item.title}:</span>
                      <span className="text-md text-forensic-charcoal/80 leading-relaxed">{item.description}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 h-full min-h-[500px]"
          >
            <div className="space-y-4 pt-12">
              <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all h-64 w-full relative group">
                <img src="/headshots/headshot2.jpg" alt="Vantage Clinical Strategy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all h-48 w-full relative bg-midnight-navy p-6 flex flex-col justify-center text-white group">
                <p className="text-4xl font-bold font-display mb-1">ISO</p>
                <p className="text-sm opacity-80 uppercase tracking-widest">45003:2021</p>
                <p className="text-xs mt-2 opacity-60">Aligned Standards</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all h-40 w-full relative bg-strategic-gold p-6 flex flex-col justify-center text-midnight-navy group">
                <p className="text-4xl font-bold font-display mb-1">10+</p>
                <p className="text-sm opacity-80 uppercase tracking-widest">Years</p>
                <p className="text-xs mt-2 opacity-60">Specialised Practice</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all h-80 w-full relative group">
                <img src="/headshots/headshot1.jpg" alt="Vantage Clinical Strategy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          id="values"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-100 pt-20 scroll-mt-24"
        >
          <h3 className="font-display text-3xl font-bold text-midnight-navy mb-12 text-center">Our Values</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="w-full md:max-w-xs p-8 bg-slate-50 rounded-2xl border border-transparent hover:border-strategic-gold/30 hover:bg-white hover:shadow-xl transition-all group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-strategic-gold mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <principle.icon size={32} strokeWidth={1.5} />
                </div>
                <h4 className="font-display text-xl font-bold text-midnight-navy mb-3">
                  {principle.title}
                </h4>
                <p className="text-forensic-charcoal/80 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
