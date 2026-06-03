'use client';

import { useInView } from '@/hooks/useInView';

function AWSIcon() {
  return (
    <svg viewBox="0 0 80 48" fill="none" className="w-8 h-5" aria-hidden="true">
      <path d="M23.2 18.4c0 1.2.1 2.2.4 2.8.3.7.7 1.4 1.2 2.2.2.3.3.6.3.9 0 .4-.2.8-.7 1.2l-2.3 1.5c-.3.2-.6.3-.9.3-.4 0-.7-.2-1.1-.5-.5-.5-1-1.1-1.4-1.7-.4-.7-.8-1.4-1.2-2.3-3 3.5-6.7 5.3-11.2 5.3-3.2 0-5.7-.9-7.6-2.7C-.2 23.5-1 21.1-1 18.1c0-3.2 1.1-5.8 3.4-7.7C4.6 8.4 7.5 7.4 11.2 7.4c1.2 0 2.4.1 3.7.3 1.3.2 2.6.5 4 .9V5.8c0-3-.6-5.1-1.9-6.3-1.3-1.2-3.4-1.8-6.5-1.8-1.4 0-2.8.2-4.2.5-1.4.4-2.8.8-4.1 1.3-.6.3-1 .4-1.3.5-.3.1-.5.1-.7.1-.6 0-.9-.4-.9-1.3v-2c0-.7.1-1.2.3-1.5.2-.3.6-.6 1.2-.9 1.4-.7 3-1.3 5-1.7C7.9-7.9 10-8.1 12.2-8.1c4.5 0 7.8 1 10 3 2.1 2 3.2 5 3.2 9v11.5h.1zM9.4 21.5c1.2 0 2.4-.2 3.7-.6 1.3-.4 2.5-1.1 3.5-2.1.6-.7 1-1.5 1.2-2.4.2-.9.4-2 .4-3.3v-1.6c-1-.3-2.1-.5-3.2-.6-1.1-.2-2.2-.2-3.3-.2-2.4 0-4.1.5-5.3 1.4-1.2 1-1.7 2.3-1.7 4.1 0 1.7.4 2.9 1.3 3.7.8.8 2 1.6 3.4 1.6zm28.7 3.8c-.8 0-1.3-.1-1.6-.4-.3-.3-.6-.8-.8-1.6l-9.2-30.2C26.3-7.7 26.2-8.2 26.2-9c0-.7.3-1.1 1-1.1H31c.8 0 1.4.1 1.7.4.3.3.6.8.8 1.6l6.6 26 6.1-26c.2-.8.5-1.3.8-1.6.3-.3.9-.4 1.7-.4h3.2c.8 0 1.4.1 1.7.4.3.3.6.8.8 1.6l6.2 26.4 6.8-26.4c.2-.8.5-1.3.8-1.6.3-.3.9-.4 1.7-.4h3.5c.7 0 1.1.4 1.1 1.1 0 .2 0 .5-.1.8l-.3.9-9.5 30.2c-.2.8-.5 1.3-.8 1.6-.3.3-.9.4-1.6.4H59c-.8 0-1.4-.1-1.7-.4-.3-.3-.6-.8-.8-1.6l-6.1-25.3-6 25.3c-.2.8-.5 1.3-.8 1.6-.3.3-.9.4-1.7.4h-3.8zM83 25.9c-2 0-4-.2-6-.7-1.9-.5-3.4-1-4.4-1.6-.6-.3-1-.7-1.2-1-.2-.3-.3-.7-.3-1v-2.1c0-.9.3-1.3 1-1.3.2 0 .5.1.8.2.3.1.7.3 1.2.5 1.6.7 3.3 1.2 5.2 1.6 1.9.4 3.7.5 5.5.5 2.9 0 5.2-.5 6.8-1.5 1.6-1 2.4-2.5 2.4-4.3 0-1.3-.4-2.4-1.2-3.2-.8-.8-2.4-1.6-4.6-2.3l-6.6-2.1C79-4.3 76.8-6 75.5-8c-1.3-2-2-4.3-2-6.7 0-1.9.4-3.6 1.2-5.1.8-1.5 1.9-2.8 3.3-3.8 1.4-1 2.9-1.8 4.7-2.4 1.8-.5 3.7-.8 5.7-.8 1 0 2.1.1 3.1.2 1 .1 2 .3 3 .5 1 .2 1.9.5 2.8.7.9.3 1.6.6 2.1.9.7.4 1.2.8 1.5 1.2.3.4.4.9.4 1.6v1.9c0 .9-.3 1.3-1 1.3-.3 0-.8-.1-1.5-.4-2.8-1.3-5.9-1.9-9.3-1.9-2.6 0-4.7.4-6.1 1.3-1.4.9-2.1 2.2-2.1 4 0 1.3.5 2.4 1.4 3.3.9.9 2.6 1.7 5.1 2.5l6.5 2.1c3.2 1 5.5 2.4 6.9 4.3 1.4 1.8 2.1 4 2.1 6.4 0 2-.4 3.8-1.2 5.4-.8 1.6-1.9 3-3.4 4.1-1.5 1.1-3.2 2-5.2 2.6-2.1.7-4.3 1-6.6 1z" fill="#F90" transform="translate(0 8)"/>
    </svg>
  );
}

function GCPIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
      <path d="M12.19 2.38a9.344 9.344 0 00-9.234 6.893c.053-.02.12-.04.188-.06A8.341 8.341 0 0112.19 4.41c1.907 0 3.66.65 5.062 1.727l-2.183 2.183A5.136 5.136 0 0012.19 7.09a5.15 5.15 0 00-5.15 5.15c0 2.85 2.3 5.15 5.15 5.15 2.57 0 4.72-1.88 5.09-4.35h-5.09v-2.91h8.07c.072.44.11.89.11 1.35 0 4.95-3.8 8.63-8.18 8.63a9.344 9.344 0 010-18.69z" fill="#4285F4"/>
    </svg>
  );
}

const CERTS = [
  {
    name: 'AWS Certified Solutions Architect',
    level: 'Professional',
    issuer: 'Amazon Web Services',
    issued: 'Mar 2025',
    valid: 'Mar 2028',
    verifyUrl: 'https://www.credly.com/badges/b64da9d5-0cb9-49ce-8e75-795d24327691',
    icon: <AWSIcon />,
    color: '#FF9900',
    bgColor: '#1a1204',
    borderColor: '#2e1f07',
  },
  {
    name: 'Google Associate Cloud Engineer',
    level: 'Associate',
    issuer: 'Google Cloud',
    issued: 'Jun 2024',
    valid: 'Jun 2027',
    verifyUrl: 'https://www.credly.com/badges/0935016b-55d9-4a65-bbba-3267df5fc036/',
    icon: <GCPIcon />,
    color: '#4285F4',
    bgColor: '#0d1421',
    borderColor: '#162035',
  },
  {
    name: 'Network Security & Database Vulnerabilities',
    level: null,
    issuer: 'IBM / Coursera',
    issued: 'Apr 2020',
    valid: null,
    verifyUrl: null,
    icon: null,
    color: '#888888',
    bgColor: '#111111',
    borderColor: '#1e1e1e',
  },
  {
    name: 'Cybersecurity IT Fundamentals Specialist',
    level: null,
    issuer: 'Coursera',
    issued: 'Jun 2020',
    valid: null,
    verifyUrl: null,
    icon: null,
    color: '#888888',
    bgColor: '#111111',
    borderColor: '#1e1e1e',
  },
];

export default function Certifications() {
  const { ref, inView } = useInView();

  return (
    <section id="certifications" className="py-28 md:py-36 border-t border-[#111111]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="text-[#3b82f6] text-[11.5px] font-semibold uppercase tracking-[0.15em] mb-3">
          Credentials
        </p>
        <h2 className="text-[36px] sm:text-[44px] font-bold text-[#f5f5f5] tracking-tight leading-[1.1] mb-16">
          Certifications
        </h2>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${inView ? 'visible' : ''}`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {CERTS.map((cert) => (
              <div
                key={cert.name}
                className="rounded-xl border p-5 flex flex-col gap-3 hover:border-opacity-80 transition-colors"
                style={{ borderColor: cert.borderColor, backgroundColor: cert.bgColor }}
              >
                <div className="flex items-start justify-between">
                  {cert.icon ? (
                    <div className="w-8 h-8 flex items-center">{cert.icon}</div>
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                      </svg>
                    </div>
                  )}
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#444444] hover:text-[#888888] transition-colors"
                      aria-label="Verify credential"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </a>
                  )}
                </div>

                <div className="flex-1">
                  <p className="text-[13.5px] font-semibold text-[#e0e0e0] leading-snug mb-0.5">
                    {cert.name}
                  </p>
                  {cert.level && (
                    <p className="text-[11.5px] font-medium" style={{ color: cert.color }}>
                      {cert.level}
                    </p>
                  )}
                </div>

                <div>
                  <p className="text-[11.5px] text-[#444444] mb-0.5">{cert.issuer}</p>
                  <p className="text-[11px] text-[#333333]">
                    {cert.issued}
                    {cert.valid && <span className="ml-1">— Valid until {cert.valid}</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] p-6 sm:p-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#3a3a3a] mb-5">Education</p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-[16px] font-semibold text-[#e0e0e0] mb-0.5">
                  B.Tech, Computer Science &amp; Engineering
                </p>
                <p className="text-[14px] text-[#555555]">
                  CMR Institute of Technology, Hyderabad
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="text-right">
                  <p className="text-[13px] text-[#444444]">Graduated</p>
                  <p className="text-[14px] font-semibold text-[#888888]">2022</p>
                </div>
                <div className="text-right">
                  <p className="text-[13px] text-[#444444]">GPA</p>
                  <p className="text-[14px] font-semibold text-[#888888]">8.27 / 10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
