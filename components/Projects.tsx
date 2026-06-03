'use client';

import { motion } from 'framer-motion';
import { IconLock, IconExternalLink } from '@tabler/icons-react';

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a0a] border-b border-[#1a1a1a] rounded-t-2xl">
      <div className="flex gap-1.5 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex-1 mx-3 flex items-center gap-1.5 bg-[#161616] border border-[#222] rounded-md px-3 py-1 max-w-[260px]">
        <div className="w-2 h-2 rounded-full border border-[#3a3a3a] shrink-0" />
        <span className="text-[11.5px] text-[#444] truncate">{url}</span>
      </div>
    </div>
  );
}

const TECH_COLORS: Record<string, string> = {
  'Next.js': 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  'TypeScript': 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  'React': 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  'Auth.js / RBAC': 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  'Python FastAPI': 'bg-green-500/10 border-green-500/20 text-green-400',
  'Go': 'bg-green-500/10 border-green-500/20 text-green-400',
  'BullMQ / Redis': 'bg-green-500/10 border-green-500/20 text-green-400',
  'MongoDB': 'bg-orange-500/10 border-orange-500/20 text-orange-400',
  'AWS': 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
  'Terraform': 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
};

function TechPill({ label }: { label: string }) {
  const cls = TECH_COLORS[label] ?? 'bg-[#1a1a1a] border-[#252525] text-[#777]';
  return (
    <span className={`inline-flex px-2.5 py-1 rounded-lg border text-[11.5px] font-medium ${cls}`}>
      {label}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 border-t border-[#111]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#3b82f6] text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">Work</p>
          <h2 className="text-[36px] sm:text-[44px] font-bold text-[#f0f0f0] tracking-tight leading-[1.08] mb-16">
            Projects
          </h2>
        </motion.div>

        {/* Sygnific — featured */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-5 group"
        >
          <div className="glow-blue rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#0f1420] to-[#080808] overflow-hidden hover:-translate-y-0.5 hover:border-blue-500/30 transition-all duration-200">
            <BrowserChrome url="withsygnific.com" />

            <div className="p-7 sm:p-10">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-[22px] font-bold text-[#f0f0f0] tracking-tight">Sygnific</h3>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-[11.5px] font-semibold">
                    <span className="relative flex w-1.5 h-1.5" aria-hidden="true">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                      <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-green-400" />
                    </span>
                    Live
                  </span>
                </div>
                <a
                  href="https://withsygnific.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#3b82f6] text-[13px] font-medium hover:text-[#60a5fa] transition-colors"
                >
                  withsygnific.com <IconExternalLink size={13} stroke={2} />
                </a>
              </div>

              <p className="text-[#555] text-[13.5px] font-medium mb-4">AI-powered career &amp; job platform</p>

              <p className="text-[#555] text-[14px] leading-[1.75] mb-7 max-w-3xl">
                A multi-service career platform built and deployed as lead developer and architect. The core is an
                AI agentic workflow engine with tiered LLM routing across multiple providers (Claude, GPT, and
                others), tool-use orchestration, prompt engineering per use-case, persisted async pipeline runs,
                and a Python FastAPI inference service with session/chat persistence.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {[
                  'Multi-model LLM orchestration with tiered routing and handoff logic',
                  'AI resume analysis, tailoring, company intelligence, cover letter & outreach workflows',
                  'Python FastAPI interview-intelligence service with LLM routing and chat persistence',
                  'Go job scraper with concurrent source adapters, deduplication, location normalization & scoring',
                  'TypeScript/React browser extension for ATS job detection and platform integration',
                  'AWS + Terraform deployment infrastructure · ~75,000+ lines across all services',
                ].map((feat, i) => (
                  <div key={i} className="flex gap-2.5 text-[12.5px] text-[#555] leading-snug">
                    <svg className="w-3.5 h-3.5 text-[#3b82f6] mt-[1px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feat}
                  </div>
                ))}
              </div>

              {/* Footer row */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {['Next.js', 'TypeScript', 'React', 'Auth.js / RBAC', 'Python FastAPI', 'Go', 'BullMQ / Redis', 'MongoDB', 'AWS', 'Terraform'].map((t) => (
                    <TechPill key={t} label={t} />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[#2a2a2a] text-[12px]">
                  <IconLock size={12} stroke={1.75} />
                  <span>Architecture overview on request</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Rentspaces */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="group rounded-2xl border border-[#1a1a1a] bg-[#0e0e0e] overflow-hidden hover:-translate-y-0.5 hover:border-[#2a2a2a] transition-all duration-200 flex flex-col"
          >
            {/* Green top accent */}
            <div className="h-[3px] bg-gradient-to-r from-green-500/60 to-transparent" />
            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-[17px] font-bold text-[#e0e0e0] mb-0.5">Rentspaces</h3>
                  <p className="text-[12.5px] text-[#444]">Cloud environment rental platform</p>
                </div>
                <span className="px-2 py-0.5 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 text-[10.5px] font-semibold mt-1 shrink-0">
                  Prototype
                </span>
              </div>
              <p className="text-[#4a4a4a] text-[13.5px] leading-[1.7] mb-6 flex-1">
                A cloud environment rental system with per-tenant workspace management. Explored DinD, Lima, and
                Firecracker approaches for VM-level isolation, built concurrent environment provisioning, network
                boundary controls, and live code/deploy view synchronization.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Go', 'Linux', 'Firecracker', 'Lima', 'Docker', 'Networking'].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg border border-[#222] bg-[#141414] text-[#666] text-[11.5px]">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Parking Occupancy Predictor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="group rounded-2xl border border-[#1a1a1a] bg-[#0e0e0e] overflow-hidden hover:-translate-y-0.5 hover:border-[#2a2a2a] transition-all duration-200 flex flex-col"
          >
            {/* Orange top accent */}
            <div className="h-[3px] bg-gradient-to-r from-orange-500/60 to-transparent" />
            <div className="p-7 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-[17px] font-bold text-[#e0e0e0] mb-0.5">Parking Occupancy Predictor</h3>
                  <p className="text-[12.5px] text-[#444]">Internal ML model for rate prediction</p>
                </div>
                <span className="px-2 py-0.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-[10.5px] font-semibold mt-1 shrink-0">
                  Internal R&D
                </span>
              </div>
              <p className="text-[#4a4a4a] text-[13.5px] leading-[1.7] mb-6 flex-1">
                Designed and prototyped an ML-based parking rate prediction and occupancy forecasting system using
                historical transaction data, time-slot patterns, peak-hour signals, and location features.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['Python', 'XGBoost', 'Prophet', 'ML', 'Data Analysis'].map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-lg border border-[#222] bg-[#141414] text-[#666] text-[11.5px]">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
