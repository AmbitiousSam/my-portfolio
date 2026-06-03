'use client';

import { useState, useEffect } from 'react';

type Line = { text: string; color: string };
type Scene = { title: string; lines: Line[] };

const SCENES: Scene[] = [
  {
    title: 'bash — prod-cluster · us-east-1',
    lines: [
      { text: '$ aws ecs update-service --cluster prod \\', color: '#e0e0e0' },
      { text: '    --service api --force-new-deployment', color: '#e0e0e0' },
      { text: '', color: '' },
      { text: '  status         ACTIVE', color: '#666666' },
      { text: '  runningCount   3 / 3', color: '#666666' },
      { text: '  pendingCount   0', color: '#666666' },
      { text: '  region         us-east-1', color: '#666666' },
      { text: '', color: '' },
      { text: '✓ Deployed in 38s · 0 errors · 99.9% uptime', color: '#4ade80' },
    ],
  },
  {
    title: 'terraform — cognito-sso-migration',
    lines: [
      { text: '$ terraform apply -target=module.cognito', color: '#e0e0e0' },
      { text: '', color: '' },
      { text: '  + aws_cognito_user_pool.main', color: '#60a5fa' },
      { text: '  + aws_cognito_user_pool_client.web', color: '#60a5fa' },
      { text: '  ~ aws_cognito_identity_pool.main', color: '#fbbf24' },
      { text: '', color: '' },
      { text: '  Plan: 2 to add, 1 to change, 0 to destroy', color: '#555555' },
      { text: '', color: '' },
      { text: 'Apply complete! 2 added, 1 changed, 0 destroyed.', color: '#4ade80' },
    ],
  },
  {
    title: 'rails console — production',
    lines: [
      { text: '$ rails console -e production', color: '#e0e0e0' },
      { text: 'Loading production environment...', color: '#444444' },
      { text: '', color: '' },
      { text: '> EmailCampaign.scheduled.count', color: '#e0e0e0' },
      { text: '=> 847', color: '#60a5fa' },
      { text: '', color: '' },
      { text: '> Deployment.last.attributes', color: '#e0e0e0' },
      { text: '=> { status: "success", duration: 42 }', color: '#4ade80' },
    ],
  },
  {
    title: 'github-actions — ci/cd pipeline',
    lines: [
      { text: '$ git push origin feature/textpay-sms', color: '#e0e0e0' },
      { text: '', color: '' },
      { text: '  ✓ rspec        142 examples, 0 failures', color: '#4ade80' },
      { text: '  ✓ rubocop      no offenses detected', color: '#4ade80' },
      { text: '  ✓ cdk synth    no infrastructure drift', color: '#4ade80' },
      { text: '  ✓ ecs deploy   2m 14s · 3 tasks healthy', color: '#4ade80' },
      { text: '', color: '' },
      { text: '  → staging.premium-parking.com', color: '#60a5fa' },
    ],
  },
];

export default function HeroTerminal() {
  const [sceneIdx, setSceneIdx] = useState(0);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const scene = SCENES[sceneIdx];
  const totalLines = scene.lines.length;
  const done = lineIdx >= totalLines;

  useEffect(() => {
    if (done) {
      const pause = setTimeout(() => {
        setOpacity(0);
        const next = setTimeout(() => {
          setSceneIdx((s) => (s + 1) % SCENES.length);
          setLineIdx(0);
          setCharIdx(0);
          setOpacity(1);
        }, 500);
        return () => clearTimeout(next);
      }, 2500);
      return () => clearTimeout(pause);
    }

    const line = scene.lines[lineIdx];

    if (charIdx >= line.text.length) {
      const gap = line.text === '' ? 60 : line.text.startsWith('✓') ? 80 : 130;
      const t = setTimeout(() => {
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      }, gap);
      return () => clearTimeout(t);
    }

    const speed = line.text.startsWith('$') ? 38 : line.text.startsWith(' ') ? 16 : 22;
    const t = setTimeout(() => setCharIdx((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [done, lineIdx, charIdx, scene]);

  const activeLine = !done ? scene.lines[lineIdx] : null;

  return (
    <div
      className="w-full max-w-[520px] transition-opacity duration-500"
      style={{ opacity }}
      aria-hidden="true"
    >
      <div className="rounded-xl border border-[#1e1e1e] bg-[#0c0c0c] overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.06)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#161616] bg-[#0f0f0f]">
          <div className="flex gap-1.5 shrink-0">
            <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
            <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
          </div>
          <span
            className="ml-2 text-[#383838] text-[11.5px] font-mono truncate"
            style={{ fontFamily: "'SF Mono', 'Fira Code', monospace" }}
          >
            {scene.title}
          </span>
          {/* Blinking indicator */}
          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse shrink-0" />
        </div>

        {/* Output */}
        <div
          className="p-5 text-[12.5px] leading-[1.75] min-h-[256px]"
          style={{ fontFamily: "'SF Mono', 'Fira Code', 'Cascadia Code', monospace" }}
        >
          {/* Completed lines */}
          {scene.lines.slice(0, lineIdx).map((line, i) => (
            <div key={i} style={{ color: line.color || 'transparent' }}>
              {line.text || ' '}
            </div>
          ))}

          {/* Currently typing line */}
          {activeLine && (
            <div style={{ color: activeLine.color || '#e0e0e0' }}>
              {activeLine.text.slice(0, charIdx)}
              {charIdx < activeLine.text.length && (
                <span
                  className="inline-block align-middle ml-px"
                  style={{
                    width: '7px',
                    height: '15px',
                    background: '#3b82f6',
                    animation: 'pulse 1s ease-in-out infinite',
                    opacity: 0.9,
                  }}
                />
              )}
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center gap-4 px-5 py-2 border-t border-[#141414] bg-[#0a0a0a]">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
            <span className="text-[10.5px] text-[#2a2a2a] font-mono">prod</span>
          </div>
          <span className="text-[10.5px] text-[#1e1e1e] font-mono">AWS · ECS · Fargate</span>
          <span className="ml-auto text-[10.5px] text-[#1e1e1e] font-mono">10K+ req/s</span>
        </div>
      </div>
    </div>
  );
}
