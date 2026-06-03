'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['hero', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.2, rootMargin: '-60px 0px 0px 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#3b82f6] origin-left z-50"
        style={{ scaleX }}
      />

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#080808]/85 backdrop-blur-md border-b border-[#1a1a1a]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-[60px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, '#hero')}
            className="text-[#f0f0f0] font-semibold text-[15px] tracking-tight hover:text-[#3b82f6] transition-colors duration-200"
          >
            Siva Kumar
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1);
              const active = activeSection === id;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => scrollTo(e, href)}
                  className={`nav-link-hover px-3 py-1.5 text-[13.5px] font-medium transition-colors duration-150 ${
                    active ? 'text-[#f0f0f0]' : 'text-[#555555] hover:text-[#aaaaaa]'
                  }`}
                >
                  {label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="ml-4 px-4 py-1.5 rounded-md border border-[#3b82f6]/40 bg-[#3b82f6]/10 text-[#60a5fa] text-[13.5px] font-semibold hover:bg-[#3b82f6]/20 hover:border-[#3b82f6]/60 transition-all duration-150"
              style={{ boxShadow: '0 0 12px rgba(59,130,246,0.1)' }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="flex flex-col gap-[5px]">
              <span className={`block w-[18px] h-[1.5px] bg-[#888] origin-center transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-[18px] h-[1.5px] bg-[#888] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-[18px] h-[1.5px] bg-[#888] origin-center transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 border-b border-[#1a1a1a]' : 'max-h-0'
        }`}
      >
        <div className="bg-[#080808]/95 backdrop-blur-xl px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className="text-[#666] hover:text-[#f0f0f0] text-[15px] font-medium py-2 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="mt-3 px-4 py-2.5 rounded-md border border-[#3b82f6]/40 bg-[#3b82f6]/10 text-[#60a5fa] text-[14px] font-semibold text-center hover:bg-[#3b82f6]/20 transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
