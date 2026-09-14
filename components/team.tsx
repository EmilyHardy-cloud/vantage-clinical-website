'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'

export default function Team() {
  const team = [
    {
      name: 'Emily Hardy',
      title: 'Managing Director & Principal Consultant',
      email: 'emily.hardy@vantageclinicalstrategy.com',
      bio: 'Emily is a clinically trained systemic practitioner specializing in high-performance organizational architecture and the mitigation of psychosocial risk. With a career built at the intersection of clinical safety and corporate governance, Emily founded Vantage to provide a forensic alternative to the "wellness" status quo. She works exclusively with CEOs and Managing Partners to identify structural liabilities, bridge regulatory gaps in ISO 45003 compliance, and design defensible organizational systems that protect both people and profit.',
      image: '/headshots/headshot1.jpg'
    },
  ]

  return (
    <section id="team" className="w-full py-24 md:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-strategic-gold/10 border border-strategic-gold/30 rounded-full">
            <span className="text-sm font-semibold text-midnight-navy">Leadership</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight-navy mb-6 text-balance">
            Meet Our Principal Consultant
          </h2>

          <p className="text-lg text-architectural-grey max-w-2xl mx-auto">
            Specialist leadership with clinical rigor and executive experience across high-performance firms.
          </p>
        </motion.div>

        <div>
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-w-5xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-stretch">
                <div className="md:w-2/5 relative min-h-[400px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/10" />
                </div>

                <div className="md:w-3/5 p-10 md:p-14 flex flex-col justify-center">
                  <div className="inline-block mb-6 px-4 py-1 bg-strategic-gold text-midnight-navy rounded-full w-fit font-bold text-xs tracking-wider uppercase">
                    {member.title}
                  </div>

                  <h3 className="font-display text-4xl md:text-5xl font-bold text-midnight-navy mb-6">
                    {member.name}
                  </h3>

                  <p className="text-xl text-forensic-charcoal/80 mb-10 leading-relaxed font-light">
                    {member.bio}
                  </p>

                  <div className="space-y-6 mb-10">
                    <div>
                      <p className="text-xs text-architectural-grey uppercase tracking-wider font-bold mb-3">Specialisations</p>
                      <ul className="grid sm:grid-cols-1 gap-4 mt-2">
                        <li className="flex items-start gap-3 text-sm text-midnight-navy font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-strategic-gold mt-1.5 shrink-0" />
                          <span className="leading-relaxed"><strong className="font-bold">Forensic Psychosocial Auditing:</strong> Identifying systemic hazards before they escalate into litigation or turnover.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-midnight-navy font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-strategic-gold mt-1.5 shrink-0" />
                          <span className="leading-relaxed"><strong className="font-bold">Organizational Design & Architecture:</strong> Re-engineering work systems to foster long-term resilience and cognitive performance.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-midnight-navy font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-strategic-gold mt-1.5 shrink-0" />
                          <span className="leading-relaxed"><strong className="font-bold">Executive Strategic Advisory:</strong> High-level guidance for leadership teams on psychosocial liability and governance.</span>
                        </li>
                        <li className="flex items-start gap-3 text-sm text-midnight-navy font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-strategic-gold mt-1.5 shrink-0" />
                          <span className="leading-relaxed"><strong className="font-bold">ISO 45003 Strategic Implementation:</strong> Moving beyond compliance to achieve true operational excellence.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-100 flex gap-6">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-forensic-charcoal hover:text-strategic-gold transition-colors font-medium border border-gray-200 px-4 py-2 rounded-lg hover:border-strategic-gold"
                    >
                      <Mail size={18} />
                      <span className="text-sm">Email Me</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-forensic-charcoal hover:text-strategic-gold transition-colors font-medium border border-gray-200 px-4 py-2 rounded-lg hover:border-strategic-gold"
                    >
                      <Linkedin size={18} />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
