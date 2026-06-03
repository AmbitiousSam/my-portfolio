'use client';

import { useInView } from '@/hooks/useInView';

function ExternalLinkIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    Live: 'bg-[#0d1f11] border-[#1a3a22] text-[#4ade80]',
    Prototype: 'bg-[#1a1a0d] border-[#2e2e0f] text-[#d4c44a]',
    'Internal R&D': 'bg-[#110d1f] border-[#2a1a3e] text-[#c084fc]',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[11.5px] font-semibold ${colors[status] ?? colors['Prototype']}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" aria-hidden="true" />
      {status}
    </span>
  );
}

function TechPill({ label }: { label: string }) {
  return (
    <span className="px-2 py-0.5 rounded-md bg-[#161616] border border-[#222222] text-[#666666] text-[11.5px] font-medium">
      {label}
    </span>
  );
}

export default function Projects() {
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

  return (
    <section id="projects" className="py-28 md:py-36 border-t border-[#111111]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="text-[#3b82f6] text-[11.5px] font-semibold uppercase tracking-[0.15em] mb-3">
          Work
        </p>
        <h2 className="text-[36px] sm:text-[44px] font-bold text-[#f5f5f5] tracking-tight leading-[1.1] mb-16">
          Projects
        </h2>

        {/* Sygnific — Featured */}
        <div
          ref={ref1 as React.RefObject<HTMLDivElement>}
          className={`reveal ${inView1 ? 'visible' : ''} mb-6`}
        >
          <div className="group rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] overflow-hidden hover:border-[#2a2a2a] transition-colors duration-200">
            {/* Blue top accent */}
            <div className="h-px bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent opacity-70" aria-hidden="true" />

            <div className="p-7 sm:p-10">
              {/* Header row */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-[#f5f5f5] tracking-tight">
                    Sygnific
                  </h3>
                  <StatusBadge status="Live" />
                </div>
                <a
                  href="https://withsygnific.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#3b82f6] text-[13px] font-medium hover:text-[#60a5fa] transition-colors"
                >
                  withsygnific.com <ExternalLinkIcon />
                </a>
              </div>

              <p className="text-[#888888] text-[14px] font-medium mb-4">
                AI-powered career &amp; job platform
              </p>

              <p className="text-[#666666] text-[14.5px] leading-[1.75] mb-7 max-w-3xl">
                A multi-service career platform built and deployed as lead developer and architect. The core is an
                AI agentic workflow engine with tiered LLM routing across multiple providers (Claude, GPT, and
                others), tool-use orchestration, prompt engineering per use-case, persisted async pipeline runs,
                and a Python FastAPI inference service with session/chat persistence.
              </p>

              {/* Feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {[
                  'Multi-model LLM orchestration with tiered routing and handoff logic',
                  'AI resume analysis, tailoring, company intelligence, cover letter & outreach workflows',
                  'Python FastAPI interview-intelligence service with LLM routing and chat persistence',
                  'Go job scraper with concurrent source adapters, deduplication, location normalization & scoring',
                  'TypeScript/React browser extension for ATS job detection and platform integration',
                  'AWS + Terraform deployment infrastructure · ~75,000+ lines across all services',
                ].map((feat, i) => (
                  <div key={i} className="flex gap-2.5 text-[13px] text-[#666666] leading-snug">
                    <svg className="w-3.5 h-3.5 text-[#3b82f6] mt-[2px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feat}
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[11px] font-medium text-[#3a3a3a] uppercase tracking-wide mr-1">Stack</span>
                {['Next.js', 'TypeScript', 'MongoDB', 'Auth.js / RBAC', 'BullMQ / Redis', 'Python FastAPI', 'Go', 'React', 'AWS', 'Terraform'].map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>

              <p className="mt-5 text-[12px] text-[#333333]">
                GitHub: private — architecture overview available on request
              </p>
            </div>
          </div>
        </div>

        {/* Secondary projects */}
        <div
          ref={ref2 as React.RefObject<HTMLDivElement>}
          className={`reveal ${inView2 ? 'visible' : ''} grid grid-cols-1 md:grid-cols-2 gap-5`}
        >
          {/* Rentspaces */}
          <div className="group rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] p-7 hover:border-[#2a2a2a] transition-colors duration-200 flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <h3 className="text-[18px] font-bold text-[#f5f5f5]">Rentspaces</h3>
                  <StatusBadge status="Prototype" />
                </div>
                <p className="text-[#555555] text-[13px]">Cloud environment rental platform</p>
              </div>
              <a
                href="https://github.com/AmbitiousSam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#444444] hover:text-[#888888] transition-colors mt-0.5"
                aria-label="GitHub"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>

            <p className="text-[#585858] text-[13.5px] leading-[1.7] mb-6 flex-1">
              A cloud environment rental system with per-tenant workspace management. Explored DinD, Lima, and
              Firecracker approaches for VM-level isolation, built concurrent environment provisioning, network
              boundary controls, and live code/deploy view synchronization.
            </p>

            <div className="flex flex-wrap gap-1.5">
              {['Go', 'Linux', 'Firecracker', 'Lima', 'Docker', 'Networking'].map((t) => (
                <TechPill key={t} label={t} />
              ))}
            </div>
          </div>

          {/* Parking Occupancy Predictor */}
          <div className="group rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] p-7 hover:border-[#2a2a2a] transition-colors duration-200 flex flex-col">
            <div className="mb-4">
              <div className="flex items-center gap-2.5 mb-1">
                <h3 className="text-[18px] font-bold text-[#f5f5f5]">Parking Occupancy Predictor</h3>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-[#555555] text-[13px]">Internal ML model for rate prediction</p>
                <StatusBadge status="Internal R&D" />
              </div>
            </div>

            <p className="text-[#585858] text-[13.5px] leading-[1.7] mb-6 flex-1">
              Designed and prototyped an ML-based parking rate prediction and occupancy forecasting system using
              historical transaction data, time-slot patterns, peak-hour signals, and location features.
            </p>

            <div className="flex flex-wrap gap-1.5">
              {['Python', 'XGBoost', 'Prophet', 'ML', 'Data Analysis'].map((t) => (
                <TechPill key={t} label={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
