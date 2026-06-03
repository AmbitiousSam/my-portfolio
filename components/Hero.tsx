import HeroTerminal from './HeroTerminal';

const TAGS = [
  'Remote-Ready',
  'AWS SA Professional',
  'Rails · Go · Python',
  'Open to Contracts & Full-Time',
];

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MediumIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}

const SOCIALS = [
  { name: 'GitHub', href: 'https://github.com/AmbitiousSam', icon: <GitHubIcon /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/sivakumark1', icon: <LinkedInIcon /> },
  { name: 'Medium', href: 'https://medium.com/@sk800489', icon: <MediumIcon /> },
  { name: 'Email', href: 'mailto:sk800489@gmail.com', icon: <MailIcon /> },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-[60px]">
      {/* Dot grid */}
      <div className="absolute inset-0 hero-grid opacity-[0.35]" aria-hidden="true" />
      {/* Radial fade from center */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #0a0a0a 100%)',
        }}
        aria-hidden="true"
      />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 w-full py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text content */}
          <div>
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1e3a24] bg-[#0d1f11] mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" aria-hidden="true" />
              <span className="text-[#4ade80] text-[12px] font-medium tracking-wide">Available for new roles</span>
            </div>

            {/* Headline */}
            <h1 className="text-[48px] sm:text-[60px] lg:text-[68px] font-extrabold text-[#f5f5f5] tracking-[-0.03em] leading-[1.02] mb-6">
              Platform &amp;<br />
              Full&#8209;Stack<br />
              <span className="text-[#3b82f6]">Engineer</span>
            </h1>

            <p className="text-[#777777] text-[16px] sm:text-[18px] leading-relaxed max-w-[500px] mb-9 font-normal">
              I build production AWS infrastructure, ship full-stack features, and architect AI workflow systems.{' '}
              <span className="text-[#999999]">4+ years delivering for a US product company, fully remote.</span>
            </p>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-[#2a2a2a] bg-[#111111] text-[#777777] text-[12.5px] font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#3b82f6] text-white text-[14.5px] font-semibold hover:bg-[#2563eb] transition-colors duration-150"
              >
                View My Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#2a2a2a] text-[#c0c0c0] text-[14.5px] font-semibold hover:border-[#3a3a3a] hover:bg-[#111111] hover:text-[#f5f5f5] transition-all duration-150"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-1">
              {SOCIALS.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="flex items-center justify-center w-9 h-9 rounded-lg text-[#555555] hover:text-[#f5f5f5] hover:bg-[#1a1a1a] transition-all duration-150"
                  aria-label={name}
                >
                  {icon}
                </a>
              ))}
              <span className="ml-2 text-[#333333] text-[13px]">sk800489@gmail.com</span>
            </div>
          </div>

          {/* Right — animated terminal */}
          <div className="hidden lg:flex justify-end items-center">
            <HeroTerminal />
          </div>

        </div>
      </div>
    </section>
  );
}
