'use client';

import { useInView } from '@/hooks/useInView';

const CONTACT_METHODS = [
  {
    label: 'Email',
    value: 'sk800489@gmail.com',
    href: 'mailto:sk800489@gmail.com',
    desc: 'Primary — best way to reach me',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sivakumark1',
    href: 'https://linkedin.com/in/sivakumark1',
    desc: 'Connect for professional inquiries',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/AmbitiousSam',
    href: 'https://github.com/AmbitiousSam',
    desc: 'Open-source & personal projects',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'Medium',
    value: 'medium.com/@sk800489',
    href: 'https://medium.com/@sk800489',
    desc: 'Technical writing & articles',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-28 md:py-36 border-t border-[#111111]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="text-[#3b82f6] text-[11.5px] font-semibold uppercase tracking-[0.15em] mb-3">
          Contact
        </p>
        <h2 className="text-[36px] sm:text-[44px] font-bold text-[#f5f5f5] tracking-tight leading-[1.1] mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-[#666666] text-[16px] leading-relaxed max-w-xl mb-16">
          Open to remote contract roles and full-time remote positions. I work across India/US and India/EU
          timezones. Response time typically within 24 hours.
        </p>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${inView ? 'visible' : ''} grid grid-cols-1 lg:grid-cols-2 gap-10`}
        >
          {/* Contact methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CONTACT_METHODS.map(({ label, value, href, desc, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="group rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] p-5 hover:border-[#2a2a2a] hover:bg-[#0f0f0f] transition-all duration-150 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between">
                  <div className="w-9 h-9 rounded-lg bg-[#161616] border border-[#222222] flex items-center justify-center text-[#555555] group-hover:text-[#888888] transition-colors">
                    {icon}
                  </div>
                  <svg className="w-3.5 h-3.5 text-[#2a2a2a] group-hover:text-[#444444] transition-colors mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#3a3a3a] mb-0.5">{label}</p>
                  <p className="text-[13.5px] font-medium text-[#aaaaaa] group-hover:text-[#d0d0d0] transition-colors mb-1 truncate">
                    {value}
                  </p>
                  <p className="text-[12px] text-[#444444]">{desc}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <div className="rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] p-7">
            <p className="text-[13px] font-semibold text-[#555555] mb-6">Send a message</p>
            <form
              action="https://formspree.io/f/xlgkrwrr"
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[11.5px] font-medium text-[#444444] uppercase tracking-wide mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#1e1e1e] bg-[#111111] text-[#e0e0e0] text-[14px] placeholder-[#333333] focus:outline-none focus:border-[#3b82f6] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[11.5px] font-medium text-[#444444] uppercase tracking-wide mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#1e1e1e] bg-[#111111] text-[#e0e0e0] text-[14px] placeholder-[#333333] focus:outline-none focus:border-[#3b82f6] transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-[11.5px] font-medium text-[#444444] uppercase tracking-wide mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the role or project..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#1e1e1e] bg-[#111111] text-[#e0e0e0] text-[14px] placeholder-[#333333] focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-5 py-3 rounded-lg bg-[#3b82f6] text-white text-[14px] font-semibold hover:bg-[#2563eb] transition-colors duration-150"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
