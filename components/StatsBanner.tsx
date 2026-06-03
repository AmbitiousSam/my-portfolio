const STATS = [
  { number: '4+', label: 'Years of Experience' },
  { number: '12', label: 'AWS Accounts Managed' },
  { number: '40%+', label: 'AWS Cost Reduction' },
  { number: '3×', label: 'Release Velocity Gain' },
];

export default function StatsBanner() {
  return (
    <div className="border-y border-[#1a1a1a] bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#1a1a1a]">
          {STATS.map(({ number, label }) => (
            <div key={label} className="px-8 py-10 flex flex-col gap-1.5">
              <span className="tabular text-[38px] sm:text-[44px] font-extrabold text-[#f5f5f5] tracking-tight leading-none">
                {number}
              </span>
              <span className="text-[#555555] text-[12.5px] font-medium uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
