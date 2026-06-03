'use client';

import { motion } from 'framer-motion';
import { IconMail, IconBrandLinkedin, IconBrandGithub, IconBrandMedium, IconArrowRight } from '@tabler/icons-react';

const CONTACT_METHODS = [
  {
    label: 'Email',
    value: 'sk800489@gmail.com',
    href: 'mailto:sk800489@gmail.com',
    desc: 'Primary — best way to reach me',
    icon: IconMail,
    primary: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sivakumark1',
    href: 'https://linkedin.com/in/sivakumark1',
    desc: 'Connect for professional inquiries',
    icon: IconBrandLinkedin,
    primary: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/AmbitiousSam',
    href: 'https://github.com/AmbitiousSam',
    desc: 'Open-source & personal projects',
    icon: IconBrandGithub,
    primary: false,
  },
  {
    label: 'Medium',
    value: 'medium.com/@sk800489',
    href: 'https://medium.com/@sk800489',
    desc: 'Technical writing & articles',
    icon: IconBrandMedium,
    primary: false,
  },
];

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-[#222] bg-[#0e0e0e] text-[#f0f0f0] text-[14px] placeholder:text-[#333] focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 transition-all duration-200';

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 border-t border-[#111] relative overflow-hidden">
      {/* Blue glow behind title */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'rgba(59,130,246,0.04)', filter: 'blur(80px)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#3b82f6] text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">Contact</p>
          <h2 className="text-[36px] sm:text-[44px] font-bold text-[#f0f0f0] tracking-tight leading-[1.08] mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-[#555] text-[16px] leading-relaxed max-w-xl mb-16">
            Open to remote contract roles and full-time remote positions. I work across India/US and India/EU
            timezones. Response time typically within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact method cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {CONTACT_METHODS.map(({ label, value, href, desc, icon: Icon, primary }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className={`group rounded-2xl border p-5 hover:-translate-y-0.5 hover:border-[#2a2a2a] transition-all duration-150 flex flex-col gap-3 ${
                  primary ? 'border-blue-500/20 bg-[#0d1220]' : 'border-[#1a1a1a] bg-[#0e0e0e]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-colors duration-150 ${
                    primary
                      ? 'bg-blue-500/10 border-blue-500/20 text-[#3b82f6]'
                      : 'bg-[#161616] border-[#222] text-[#444] group-hover:text-[#888]'
                  }`}>
                    <Icon size={16} stroke={1.75} />
                  </div>
                  <IconArrowRight
                    size={13}
                    stroke={2}
                    className="text-[#222] group-hover:text-[#444] group-hover:translate-x-0.5 transition-all duration-150 mt-0.5"
                  />
                </div>
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-[#333] mb-0.5">{label}</p>
                  <p className={`text-[13px] font-medium mb-1 truncate transition-colors duration-150 ${
                    primary ? 'text-[#60a5fa]' : 'text-[#888] group-hover:text-[#ccc]'
                  }`}>
                    {value}
                  </p>
                  <p className="text-[11.5px] text-[#333]">{desc}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#1a1a1a] bg-[#0e0e0e] p-7"
          >
            <p className="text-[12px] font-semibold text-[#444] mb-6 uppercase tracking-wide">Send a message</p>
            <form
              action="https://formspree.io/f/xlgkrwrr"
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-semibold text-[#333] uppercase tracking-wide mb-1.5">Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11px] font-semibold text-[#333] uppercase tracking-wide mb-1.5">Email</label>
                  <input id="email" name="email" type="email" required placeholder="your@email.com" className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-[11px] font-semibold text-[#333] uppercase tracking-wide mb-1.5">Message</label>
                <textarea id="message" name="message" required rows={5} placeholder="Tell me about the role or project..." className={`${inputClass} resize-none`} />
              </div>
              <button
                type="submit"
                className="w-full px-5 py-3 rounded-xl bg-[#3b82f6] text-white text-[14px] font-semibold hover:bg-[#2563eb] transition-colors duration-150"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
