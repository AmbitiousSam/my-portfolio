'use client';

import { motion } from 'framer-motion';
import {
  IconMapPin, IconClock, IconBriefcase, IconBuilding,
  IconWorld, IconMailFast,
} from '@tabler/icons-react';

const QUICK_FACTS = [
  { icon: IconMapPin, label: 'Location', value: 'Hyderabad, India' },
  { icon: IconClock, label: 'Timezone', value: 'IST (UTC+5:30)' },
  { icon: IconBriefcase, label: 'Experience', value: '4+ years' },
  { icon: IconBuilding, label: 'Current', value: 'Platform & Full-Stack at Xebia (client: Premium Parking, US)' },
  { icon: IconWorld, label: 'Open to', value: null },
  { icon: IconMailFast, label: 'Response', value: 'Within 24 hours' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-[#3b82f6] text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">About</p>
          <h2 className="text-[36px] sm:text-[44px] font-bold text-[#f0f0f0] tracking-tight leading-[1.08] mb-16">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
          {/* Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-l-2 border-[#1e1e1e] pl-6 space-y-5 text-[15.5px] leading-[1.8] text-[#666]"
          >
            <p>
              I&apos;m a platform and full-stack engineer with 4+ years of production experience building and operating
              cloud systems for a US-based parking technology company — entirely remote across India/US timezones.
            </p>
            <p>
              My work sits at the intersection of infrastructure and product engineering. I manage AWS production
              systems across 12 accounts and 10 applications serving millions of users, while also shipping full-stack
              Rails and React features that business teams depend on daily. I don&apos;t hand off between roles — I own
              problems end to end.
            </p>
            <p>
              Outside my day job, I built{' '}
              <a
                href="https://withsygnific.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f0f0f0] hover:text-[#3b82f6] transition-colors border-b border-[#2a2a2a] hover:border-[#3b82f6]"
              >
                Sygnific
              </a>{' '}
              — a multi-service AI-powered career platform — as lead developer and architect, which is where I&apos;ve
              gone deepest on multi-model LLM orchestration, agentic workflows, and distributed system design.
            </p>
            <p>
              I&apos;m based in Hyderabad, India, and am available for remote contract roles (strong India/US/EU
              timezone overlap) and full-time remote positions.
            </p>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glow-blue rounded-2xl border border-[#1e1e1e] bg-[#0e0e0e] p-6 h-fit"
          >
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#333] mb-5">
              Quick Facts
            </p>
            <div className="space-y-4">
              {QUICK_FACTS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-3">
                  <div className="w-7 h-7 rounded-md bg-[#161616] border border-[#222] flex items-center justify-center text-[#444] shrink-0 mt-0.5">
                    <Icon size={13} stroke={1.75} />
                  </div>
                  <div>
                    <p className="text-[10.5px] font-semibold text-[#333] uppercase tracking-wide mb-0.5">{label}</p>
                    {label === 'Open to' ? (
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        <span className="px-2 py-0.5 rounded-full bg-[#0d1f11] border border-[#1e3a24] text-[#4ade80] text-[11px] font-medium">
                          Remote contracts
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-[#0d1628] border border-[#1a2e4a] text-[#60a5fa] text-[11px] font-medium">
                          Full-time remote
                        </span>
                      </div>
                    ) : (
                      <p className="text-[13px] text-[#bbb] leading-snug">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
