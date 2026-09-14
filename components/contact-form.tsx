'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Loader2, Mail, MapPin, Clock, Calendar, Check, Sparkles, Send, Shield } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    jobTitle: '',
    email: '',
    enquiryReason: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          company: '',
          jobTitle: '',
          email: '',
          enquiryReason: '',
          message: ''
        })
        setTimeout(() => setSubmitStatus('idle'), 8000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const enquiryOptions = [
    'Full Firm Audit',
    'Executive Briefing',
    'ISO 45003 Compliance',
    'Speaking/Workshops'
  ]

  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      content: 'enquiries@vantageclinicalstrategy.com',
      href: 'mailto:enquiries@vantageclinicalstrategy.com',
      isLink: true,
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'United Kingdom',
      isLink: false,
    },
    {
      icon: Clock,
      title: 'Availability',
      content: 'Monday – Friday (09:00 – 17:00)',
      isLink: false,
    },
    {
      icon: Calendar,
      title: 'Meetings',
      content: 'Schedule via Calendly',
      href: 'https://calendly.com/emily-hardy-vantageclinicalstrategy/30min',
      isLink: true,
      external: true,
    },
  ]

  const inputBaseClass =
    'w-full px-5 py-3.5 bg-white/[0.06] border border-white/[0.12] rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-strategic-gold/60 focus:ring-2 focus:ring-strategic-gold/20 focus:bg-white/[0.08] transition-all duration-300 font-medium backdrop-blur-sm'

  const labelClass = 'text-sm font-semibold text-white/70 ml-1 tracking-wide'

  return (
    <section id="contact" className="w-full py-24 md:py-32 relative overflow-hidden bg-clinical-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-strategic-gold/[0.03] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-midnight-navy/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-strategic-gold/10 border border-strategic-gold/30 rounded-full">
            <Sparkles className="w-4 h-4 text-strategic-gold" />
            <span className="text-sm font-semibold text-midnight-navy">Get in Touch</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-midnight-navy mb-6 text-balance leading-tight">
            Strategic Conversation<br className="hidden md:block" /> Starts Here
          </h2>
          <p className="text-lg md:text-xl text-forensic-charcoal/60 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you're exploring systemic risk mitigation, planning a forensic audit, or seeking executive guidance — let's discuss how Vantage can support your organisation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* Contact Information — Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactDetails.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-strategic-gold/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-midnight-navy/5 rounded-xl flex items-center justify-center group-hover:bg-strategic-gold/15 group-hover:scale-110 transition-all duration-300">
                  <detail.icon className="w-5 h-5 text-midnight-navy group-hover:text-strategic-gold transition-colors duration-300" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-midnight-navy mb-1 text-base">{detail.title}</h4>
                  {detail.isLink ? (
                    <a
                      href={detail.href}
                      {...(detail.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-forensic-charcoal/70 hover:text-strategic-gold transition-colors text-[15px] break-all inline-flex items-center gap-1.5"
                    >
                      {detail.content}
                      {detail.external && <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />}
                    </a>
                  ) : (
                    <p className="text-forensic-charcoal/70 text-[15px]">{detail.content}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 px-5 py-4 bg-midnight-navy/[0.03] rounded-2xl border border-midnight-navy/[0.06]"
            >
              <Shield className="w-5 h-5 text-strategic-gold flex-shrink-0" />
              <p className="text-sm text-forensic-charcoal/60 leading-relaxed">
                Your information is treated with the strictest confidence and handled in accordance with GDPR.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form — Right Column (dark premium card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 relative"
          >
            {/* Outer glow */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-strategic-gold/30 via-transparent to-strategic-gold/10 rounded-[28px] blur-[1px]" />

            {/* Card */}
            <div className="relative bg-gradient-to-br from-[#1B2151] via-[#1e2660] to-[#161d45] rounded-[26px] p-8 md:p-10 shadow-2xl overflow-hidden">
              {/* Decorative elements inside card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-strategic-gold/[0.04] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-strategic-gold/[0.03] rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />

              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="relative z-10 flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                      className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/30"
                    >
                      <Check className="w-10 h-10 text-white" strokeWidth={3} />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="font-display text-2xl md:text-3xl font-bold text-white mb-3"
                    >
                      Enquiry Received
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-white/60 text-lg max-w-sm"
                    >
                      Thank you. We'll review your enquiry and respond within one business day.
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-10"
                  >
                    {/* Form header */}
                    <div className="mb-8">
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                        Request a Strategic Briefing
                      </h3>
                      <p className="text-white/50 text-[15px]">
                        Fill in your details and we'll arrange a confidential conversation.
                      </p>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        {/* Name */}
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="space-y-2"
                        >
                          <label className={labelClass}>
                            Full Name <span className="text-strategic-gold">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className={inputBaseClass}
                            placeholder="John Doe"
                          />
                        </motion.div>

                        {/* Company */}
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.15 }}
                          className="space-y-2"
                        >
                          <label className={labelClass}>
                            Company Name <span className="text-strategic-gold">*</span>
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('company')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className={inputBaseClass}
                            placeholder="Acme Inc."
                          />
                        </motion.div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        {/* Job Title */}
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="space-y-2"
                        >
                          <label className={labelClass}>
                            Job Title <span className="text-strategic-gold">*</span>
                          </label>
                          <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('jobTitle')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className={inputBaseClass}
                            placeholder="CEO / Director"
                          />
                        </motion.div>

                        {/* Email */}
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.25 }}
                          className="space-y-2"
                        >
                          <label className={labelClass}>
                            Email Address <span className="text-strategic-gold">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className={inputBaseClass}
                            placeholder="john@example.com"
                          />
                        </motion.div>
                      </div>

                      {/* Enquiry Reason */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="space-y-2"
                      >
                        <label className={labelClass}>
                          Reason for Enquiry <span className="text-strategic-gold">*</span>
                        </label>
                        <div className="relative">
                          <select
                            name="enquiryReason"
                            value={formData.enquiryReason}
                            onChange={handleChange}
                            required
                            className={`${inputBaseClass} appearance-none cursor-pointer`}
                          >
                            <option value="" className="bg-[#1B2151] text-white/50">Select reason</option>
                            {enquiryOptions.map((option) => (
                              <option key={option} value={option} className="bg-[#1B2151] text-white">
                                {option}
                              </option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </div>
                        </div>
                      </motion.div>

                      {/* Message */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.35 }}
                        className="space-y-2"
                      >
                        <label className={labelClass}>
                          Message <span className="text-white/30">(optional)</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          rows={4}
                          className={`${inputBaseClass} resize-none`}
                          placeholder="How can we help your organisation?"
                        />
                      </motion.div>

                      {/* Error State */}
                      <AnimatePresence>
                        {submitStatus === 'error' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                            exit={{ opacity: 0, y: -10, height: 0 }}
                            className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-sm font-medium backdrop-blur-sm"
                          >
                            Unable to send your enquiry. Please try again or email us directly at{' '}
                            <a href="mailto:enquiries@vantageclinicalstrategy.com" className="underline text-red-200 hover:text-white transition-colors">
                              enquiries@vantageclinicalstrategy.com
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Submit Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group w-full relative overflow-hidden py-4 px-8 bg-gradient-to-r from-strategic-gold to-[#d4a85a] text-midnight-navy font-bold text-[15px] rounded-xl disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:shadow-strategic-gold/25 hover:scale-[1.01] active:scale-[0.99]"
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                          <span className="relative flex items-center justify-center gap-2.5">
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4" />
                                Request Strategic Briefing
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </>
                            )}
                          </span>
                        </button>
                      </motion.div>

                      {/* Privacy note */}
                      <p className="text-center text-white/30 text-xs leading-relaxed pt-1">
                        By submitting this form, you consent to Vantage Clinical Strategy contacting you regarding your enquiry. Your data is processed in accordance with GDPR.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div >
    </section >
  )
}
