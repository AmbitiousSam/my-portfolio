'use client';

import { useInView } from '@/hooks/useInView';

const QUICK_FACTS = [
  { label: 'Location', value: 'Hyderabad, India' },
  { label: 'Timezone', value: 'IST (UTC+5:30)' },
  { label: 'Experience', value: '4+ years' },
  { label: 'Current', value: 'Platform & Full-Stack at Xebia (client: Premium Parking, US)' },
  { label: 'Open to', value: 'Remote contracts · Full-time remote' },
  { label: 'Response', value: 'Within 24 hours' },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section label */}
        <p className="text-[#3b82f6] text-[11.5px] font-semibold uppercase tracking-[0.15em] mb-3">
          About
        </p>
        <h2 className="text-[36px] sm:text-[44px] font-bold text-[#f5f5f5] tracking-tight leading-[1.1] mb-16">
          About Me
        </h2>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 reveal ${inView ? 'visible' : ''}`}
        >
          {/* Bio */}
          <div className="space-y-5 text-[16px] leading-[1.8] text-[#888888]">
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
                className="text-[#f5f5f5] hover:text-[#3b82f6] transition-colors"
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
          </div>

          {/* Quick facts card */}
          <div className="rounded-xl border border-[#1e1e1e] bg-[#0f0f0f] p-6 h-fit">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#444444] mb-5">
              Quick Facts
            </p>
            <div className="space-y-4">
              {QUICK_FACTS.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[11.5px] font-medium text-[#444444] uppercase tracking-wide mb-0.5">
                    {label}
                  </p>
                  <p className="text-[14px] text-[#cccccc] leading-snug">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
