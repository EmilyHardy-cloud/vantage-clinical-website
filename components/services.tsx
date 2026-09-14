'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Hexagon, Activity, Infinity as InfinityIcon, CheckCircle2 } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="w-full py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B2151 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm">
            <span className="text-sm font-semibold text-midnight-navy tracking-tight">The Solution (The Vantage Menu)</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-midnight-navy mb-6 text-balance leading-tight">
            We identify the <span className="text-strategic-gold decoration-4 underline-offset-4">'Hidden Peaks'</span> in your organizational architecture.
          </h2>

          <p className="text-lg text-architectural-grey max-w-2xl mx-auto">
            The structural frictions that drive burnout, talent loss, and legal risk—resolved through forensic inquiry.
          </p>
        </motion.div>

        {/* 1. Forensic Psychosocial Audit (Premium) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-midnight-navy rounded-[3rem] p-10 md:p-16 relative overflow-hidden text-white shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-strategic-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                <Hexagon className="w-8 h-8 text-strategic-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-bold mb-4">The Forensic Psychosocial Audit</h3>
              <p className="text-strategic-gold text-sm font-bold uppercase tracking-widest mb-8">The Definitive Systemic Risk Diagnostic for High-Stakes Organisations.</p>

              <div className="prose prose-invert prose-lg text-white/80 mb-10 text-base leading-relaxed">
                <p className="mb-4">
                  Standard employee surveys provide snapshots of sentiment; the Vantage Forensic Audit provides a map of liability. This is an intensive, principal-led investigation designed for organisations where "burnout" is not just a HR issue, but a threat to operational continuity and regulatory standing.
                </p>
                <p>
                  <strong className="text-white">We don't just measure stress—we identify the structural hazards in your work-design that create it.</strong>
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
                <h4 className="font-bold text-lg mb-4 text-white">The Deliverable: The Vantage Forensic Briefing</h4>
                <p className="text-white/80 text-sm mb-4">At the conclusion of the audit, you receive a Strategic Roadmap presented directly to your Board or Executive Team, including:</p>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-strategic-gold shrink-0 mt-0.5" /> <span><strong className="text-white">The Risk Heat-Map:</strong> A visual breakdown of liability zones across your departments.</span></li>
                  <li className="flex gap-3 text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-strategic-gold shrink-0 mt-0.5" /> <span><strong className="text-white">Clinical Correlations:</strong> Evidence-based insights linking work-design to absenteeism and turnover.</span></li>
                  <li className="flex gap-3 text-sm text-white/80"><CheckCircle2 className="w-5 h-5 text-strategic-gold shrink-0 mt-0.5" /> <span><strong className="text-white">Remediation Architecture:</strong> A step-by-step systemic plan to mitigate identified risks and secure your "Defensible Resilience" status.</span></li>
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-10 text-sm">
                <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                  <span className="text-white/60 block mb-1 uppercase tracking-wider text-xs font-bold">Investment</span>
                  <span className="text-white font-medium text-lg">From £7,500</span>
                </div>
                <div className="bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                  <span className="text-white/60 block mb-1 uppercase tracking-wider text-xs font-bold">Timeline</span>
                  <span className="text-white font-medium text-lg">4–6 Weeks</span>
                </div>
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 bg-strategic-gold text-midnight-navy px-8 py-4 rounded-xl font-bold hover:bg-white transition-colors">
                Request a Strategic Briefing <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="space-y-10 lg:pt-8">
              <div>
                <h4 className="font-display text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">The Three Pillars of the Audit</h4>
                <div className="space-y-8">
                  <div>
                    <h5 className="text-lg font-bold text-strategic-gold mb-2 flex items-center gap-2"><span className="text-white/30 text-sm">I.</span> Structural Hazard Mapping</h5>
                    <p className="text-white/70 text-sm leading-relaxed">We go beyond surface-level symptoms to uncover the root causes of systemic risk, including role ambiguity, unsustainable workload architecture, and "hidden" cultural friction points.</p>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-strategic-gold mb-2 flex items-center gap-2"><span className="text-white/30 text-sm">II.</span> ISO 45003 Regulatory Alignment</h5>
                    <p className="text-white/70 text-sm leading-relaxed">A gap-analysis of your current psychological health and safety protocols against international standards. We ensure your governance is not just compliant, but defensible.</p>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-strategic-gold mb-2 flex items-center gap-2"><span className="text-white/30 text-sm">III.</span> Cognitive Capital Protection</h5>
                    <p className="text-white/70 text-sm leading-relaxed">High-performance environments rely on cognitive output. We diagnose the systemic "leaks" where your firm is losing top-tier talent and productivity due to unmitigated psychosocial stressors.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-2">Who This Is For</h4>
                <p className="text-white/70 text-sm leading-relaxed">This audit is specifically designed for Law Firms, Financial Institutions, and Private Healthcare Groups—organisations where the cost of a single "people-risk" event outweighs the investment in forensic prevention.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Strategic Pulse Audit */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white rounded-[3rem] border border-gray-200 p-10 md:p-16 relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <h4 className="font-display text-2xl font-bold mb-6 text-midnight-navy border-b border-gray-100 pb-4">The Pulse Framework</h4>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <span className="font-bold text-strategic-gold text-lg">1</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-midnight-navy mb-1 text-lg">Rapid Sentiment Mapping</h5>
                    <p className="text-forensic-charcoal/70 text-sm leading-relaxed">A targeted, anonymous digital assessment designed to identify immediate psychosocial "hotspots" and cultural friction.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <span className="font-bold text-strategic-gold text-lg">2</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-midnight-navy mb-1 text-lg">ISO 45003 Health Check</h5>
                    <p className="text-forensic-charcoal/70 text-sm leading-relaxed">A high-level review of your current compliance against the international standard for psychological safety.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <span className="font-bold text-strategic-gold text-lg">3</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-midnight-navy mb-1 text-lg">Executive Summary</h5>
                    <p className="text-forensic-charcoal/70 text-sm leading-relaxed">A concise briefing document highlighting the three most critical areas for immediate leadership attention.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-gray-100 shadow-sm">
                <Activity className="w-8 h-8 text-midnight-navy" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-midnight-navy mb-4">The Strategic Pulse Audit</h3>
              <p className="text-strategic-gold text-sm font-bold mb-8 uppercase tracking-widest">The High-Impact Diagnostic for Immediate Risk Clarity.</p>

              <div className="prose prose-lg text-forensic-charcoal/80 mb-10 text-base leading-relaxed font-light">
                <p className="mb-4">
                  The Vantage Pulse Audit is an entry-level, high-velocity diagnostic tool designed for smaller firms or specific departments within larger organisations.
                </p>
                <p>
                  It provides a rapid "temperature check" on psychosocial risk, giving leadership an objective view of their team's resilience without the 6-week commitment of a full forensic investigation.
                </p>
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 bg-midnight-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-strategic-gold transition-colors hover:text-midnight-navy">
                Enquire Now <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3. Strategic Partnership Retainer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-slate-100 rounded-[3rem] p-10 md:p-16 relative overflow-hidden"
        >
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <InfinityIcon className="w-8 h-8 text-strategic-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-midnight-navy mb-4">The Strategic Partnership Retainer</h3>
              <p className="text-strategic-gold text-sm font-bold mb-8 uppercase tracking-widest">Continuous Principal-Led Oversight & Systemic Resilience.</p>

              <div className="prose prose-lg text-forensic-charcoal/80 mb-10 text-base leading-relaxed font-light">
                <p className="mb-4">
                  The most successful organizations recognize that psychosocial risk management is not a one-time event, but a continuous governance requirement.
                </p>
                <p>
                  Our Retainer provides your leadership team with a dedicated External Clinical Strategist to oversee the long-term implementation of ISO 45003 standards and provide real-time advisory as new organizational hazards emerge.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 mb-10 shadow-sm border border-gray-100">
                <h4 className="font-bold text-midnight-navy mb-4">The Investment</h4>
                <p className="text-sm text-forensic-charcoal/80 mb-6">Our retainers are tailored to the headcount and complexity of your firm. They are designed to act as an extension of your Executive Board or Risk Committee.</p>

                <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                  <span className="text-strategic-gold font-bold text-2xl">From £2,000</span>
                  <span className="text-sm text-forensic-charcoal/60 uppercase tracking-widest font-bold">/ Month<br /><span className="text-xs font-normal normal-case opacity-70">(Min 6-month commitment)</span></span>
                </div>
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 bg-midnight-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-strategic-gold hover:text-midnight-navy transition-colors">
                Request a Partnership Proposal <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="space-y-10 lg:pt-8 xl:pl-8">
              <h4 className="font-display text-2xl font-bold mb-6 text-midnight-navy border-b border-gray-200 pb-4">Retainer Pillars</h4>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h5 className="font-bold text-midnight-navy mb-3 flex items-start gap-2">
                    <span className="text-strategic-gold font-black mt-0.5">I.</span>
                    <span>Quarterly Systemic Reviews</span>
                  </h5>
                  <p className="text-sm text-forensic-charcoal/70 leading-relaxed">Every 90 days, we conduct a "Risk Refresher" to ensure that as your team grows or restructuring occurs, your work-design remains resilient and compliant.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h5 className="font-bold text-midnight-navy mb-3 flex items-start gap-2">
                    <span className="text-strategic-gold font-black mt-0.5">II.</span>
                    <span>Principal 'On-Call' Advisory</span>
                  </h5>
                  <p className="text-sm text-forensic-charcoal/70 leading-relaxed">Direct access to Emily Hardy for "just-in-time" advice. Whether navigating a grievance, merger, or cultural shift, you have clinical expertise to mitigate liability.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h5 className="font-bold text-midnight-navy mb-3 flex items-start gap-2">
                    <span className="text-strategic-gold font-black mt-0.5">III.</span>
                    <span>Bespoke Leadership Workshops</span>
                  </h5>
                  <p className="text-sm text-forensic-charcoal/70 leading-relaxed">Monthly or quarterly high-impact sessions. We teach your managers how to identify and "design out" psychosocial hazards in real-time.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h5 className="font-bold text-midnight-navy mb-3 flex items-start gap-2">
                    <span className="text-strategic-gold font-black mt-0.5">IV.</span>
                    <span>Incident Post-Mortem</span>
                  </h5>
                  <p className="text-sm text-forensic-charcoal/70 leading-relaxed">In the event of a critical psychosocial incident, we provide forensic analysis to understand the systemic failure and prevent recurrence.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

