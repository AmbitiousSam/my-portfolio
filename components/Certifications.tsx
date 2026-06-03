'use client';

import { motion } from 'framer-motion';
import { IconExternalLink, IconAward, IconSchool } from '@tabler/icons-react';

const CERTS = [
  {
    name: 'AWS Certified Solutions Architect',
    level: 'Professional',
    issuer: 'Amazon Web Services',
    issued: 'Mar 2025',
    valid: 'Mar 2028',
    active: true,
    verifyUrl: 'https://www.credly.com/badges/b64da9d5-0cb9-49ce-8e75-795d24327691',
    accent: '#FF9900',
    accentBg: 'bg-[#FF9900]/10',
    accentBorder: 'border-[#FF9900]/25',
    accentText: 'text-[#FF9900]',
    shortName: 'AWS',
  },
  {
    name: 'Associate Cloud Engineer',
    level: 'Associate',
    issuer: 'Google Cloud',
    issued: 'Jun 2024',
    valid: 'Jun 2027',
    active: true,
    verifyUrl: 'https://www.credly.com/badges/0935016b-55d9-4a65-bbba-3267df5fc036/',
    accent: '#4285F4',
    accentBg: 'bg-[#4285F4]/10',
    accentBorder: 'border-[#4285F4]/25',
    accentText: 'text-[#4285F4]',
    shortName: 'GCP',
  },
];

const SECONDARY_CERTS = [
  {
    name: 'Network Security & Database Vulnerabilities',
    issuer: 'IBM / Coursera',
    issued: 'Apr 2020',
  },
  {
    name: 'Cybersecurity IT Fundamentals Specialist',
    issuer: 'Coursera',
    issued: 'Jun 2020',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' as const },
  }),
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 md:py-36 border-t border-[#111]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#3b82f6] text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">Credentials</p>
          <h2 className="text-[36px] sm:text-[44px] font-bold text-[#f0f0f0] tracking-tight leading-[1.08] mb-16">
            Certifications
          </h2>
        </motion.div>

        {/* Primary cert cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`rounded-2xl border ${cert.accentBorder} bg-[#0e0e0e] p-6 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden relative`}
            >
              {/* Left accent stripe */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
                style={{ background: cert.accent }}
                aria-hidden="true"
              />

              <div className="pl-3">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`${cert.accentBg} ${cert.accentBorder} border rounded-xl px-3 py-1.5`}>
                    <span className={`${cert.accentText} text-[13px] font-black tracking-tight`}>
                      {cert.shortName}
                    </span>
                  </div>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#333] hover:text-[#888] transition-colors"
                      aria-label="Verify credential on Credly"
                    >
                      <IconExternalLink size={14} stroke={1.75} />
                    </a>
                  )}
                </div>

                <p className="text-[15px] font-semibold text-[#e0e0e0] leading-snug mb-1">{cert.name}</p>
                <p className={`${cert.accentText} text-[12px] font-medium mb-3`}>{cert.level}</p>

                <p className="text-[12px] text-[#444] mb-2">{cert.issuer}</p>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[#333]">{cert.issued} — {cert.valid}</span>
                  {cert.active && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10.5px] font-semibold">
                      <span className="w-1 h-1 rounded-full bg-green-400" aria-hidden="true" />
                      Active
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary certs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {SECONDARY_CERTS.map((cert, i) => (
            <motion.div
              key={cert.name}
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-[#1a1a1a] bg-[#0e0e0e] p-5 flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-[#161616] border border-[#222] flex items-center justify-center text-[#333] shrink-0 mt-0.5">
                <IconAward size={15} stroke={1.5} />
              </div>
              <div>
                <p className="text-[13.5px] font-medium text-[#bbb] leading-snug mb-0.5">{cert.name}</p>
                <p className="text-[11.5px] text-[#333]">{cert.issuer} · {cert.issued}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-[#1a1a1a] bg-[#0e0e0e] p-6"
        >
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#2a2a2a] mb-5">Education</p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#161616] border border-[#1e1e1e] flex items-center justify-center text-[#333] shrink-0">
                <IconSchool size={17} stroke={1.5} />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[#e0e0e0] mb-0.5">
                  B.Tech, Computer Science &amp; Engineering
                </p>
                <p className="text-[13px] text-[#444]">CMR Institute of Technology, Hyderabad</p>
              </div>
            </div>
            <div className="flex items-center gap-6 shrink-0">
              <div className="text-right">
                <p className="text-[11px] text-[#333] uppercase tracking-wide">Graduated</p>
                <p className="text-[16px] font-bold text-[#888]">2022</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-[#333] uppercase tracking-wide">GPA</p>
                <p className="text-[16px] font-bold gradient-text-blue tabular">
                  8.27<span className="text-[12px] text-[#444] font-normal"> / 10</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
