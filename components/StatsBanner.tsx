'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  IconCloud,
  IconTrendingUp,
  IconCurrencyDollar,
  IconCalendar,
} from '@tabler/icons-react';

const STATS = [
  { number: 4, suffix: '+', label: 'Years of Experience', icon: IconCalendar },
  { number: 12, suffix: '', label: 'AWS Accounts Managed', icon: IconCloud },
  { number: 40, suffix: '%+', label: 'AWS Cost Reduction', icon: IconCurrencyDollar },
  { number: 3, suffix: '×', label: 'Release Velocity Gain', icon: IconTrendingUp },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * to));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular">
      {val}{suffix}
    </span>
  );
}

export default function StatsBanner() {
  return (
    <div className="border-y border-[#1a1a1a] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#1a1a1a]">
          {STATS.map(({ number, suffix, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const }}
              className="px-8 py-9 flex flex-col gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#111] border border-[#1e1e1e] flex items-center justify-center text-[#3b82f6]">
                <Icon size={16} stroke={1.5} />
              </div>
              <div>
                <p className="gradient-text-blue text-[38px] sm:text-[44px] font-bold leading-none tracking-tight">
                  <Counter to={number} suffix={suffix} />
                </p>
                <p className="text-[#444] text-[11px] font-medium uppercase tracking-widest mt-1.5">
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
