'use client';

import { motion } from 'framer-motion';
import {
  IconCloud, IconCode, IconServer, IconBrandDocker,
  IconDatabase, IconBrain, IconEye, IconTerminal2,
} from '@tabler/icons-react';

type SkillGroup = {
  category: string;
  icon: React.ElementType;
  skills: string[];
  colSpan?: number;
  accent?: 'blue' | 'purple';
  badge?: string;
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Cloud & AWS',
    icon: IconCloud,
    colSpan: 2,
    accent: 'blue',
    badge: '25+ services in production',
    skills: [
      'EC2', 'ECS', 'EKS', 'S3', 'RDS', 'Lambda', 'SQS', 'SNS', 'CloudFront',
      'CloudWatch', 'CDK', 'DMS', 'OpenSearch', 'IAM', 'KMS', 'GuardDuty',
      'Security Hub', 'Inspector', 'Cognito', 'Route53', 'GCP (ACE Certified)',
    ],
  },
  {
    category: 'Languages',
    icon: IconTerminal2,
    skills: ['Python', 'Ruby', 'Go', 'TypeScript', 'JavaScript', 'Bash', 'SQL'],
  },
  {
    category: 'Infrastructure as Code',
    icon: IconServer,
    skills: ['Terraform', 'AWS CDK', 'CDKTF', 'Pulumi', 'CloudFormation', 'Ansible'],
  },
  {
    category: 'CI/CD & Containers',
    icon: IconBrandDocker,
    skills: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'Docker', 'Kubernetes', 'ECS Fargate', 'EKS', 'Helm'],
  },
  {
    category: 'AI & LLM Systems',
    icon: IconBrain,
    accent: 'purple',
    skills: [
      'Multi-model Orchestration', 'Agentic Workflows', 'Prompt Engineering',
      'Tiered Model Routing', 'Tool-use Pipelines', 'FastAPI Inference', 'RAG Pipelines', 'SSE Streaming',
    ],
  },
  {
    category: 'Backend & APIs',
    icon: IconCode,
    skills: ['Ruby on Rails', 'Go', 'Python', 'FastAPI', 'Node.js', 'Sidekiq', 'BullMQ / Redis', 'GraphQL'],
  },
  {
    category: 'Frontend',
    icon: IconCode,
    skills: ['React', 'Next.js App Router', 'TypeScript', 'TanStack Query', 'React Hook Form', 'Zod', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    icon: IconDatabase,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'RDS', 'OpenSearch / Elasticsearch'],
  },
  {
    category: 'Observability & Security',
    icon: IconEye,
    colSpan: 2,
    skills: ['CloudWatch', 'Grafana', 'Prometheus', 'Datadog', 'ELK', 'SOC 2 Readiness', 'WAF', 'Rack::Attack', 'AWS Inspector', 'DevSecOps'],
  },
];

function Pill({ label, accent }: { label: string; accent?: 'blue' | 'purple' }) {
  if (accent === 'purple') {
    return (
      <span className="inline-flex items-center px-2.5 py-1 rounded-lg border border-purple-500/20 bg-purple-500/10 text-purple-300 text-[12px] font-medium">
        {label}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-lg border border-[#252525] bg-[#1a1a1a] text-[#999] text-[12px] font-medium hover:border-[#333] hover:text-[#bbb] transition-colors duration-150">
      {label}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.45, ease: 'easeOut' as const },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 border-t border-[#111]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#3b82f6] text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">Stack</p>
          <h2 className="text-[36px] sm:text-[44px] font-bold text-[#f0f0f0] tracking-tight leading-[1.08] mb-16">
            Skills &amp; Technologies
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SKILL_GROUPS.map((group, i) => {
            const { category, icon: Icon, skills, colSpan, accent, badge } = group;
            const isBlue = accent === 'blue';
            const isPurple = accent === 'purple';

            return (
              <motion.div
                key={category}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`
                  rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-0.5
                  ${colSpan === 2 ? 'sm:col-span-2' : ''}
                  ${isBlue
                    ? 'bg-[#0d1220] border-blue-500/20'
                    : isPurple
                    ? 'bg-[#110d1a] border-purple-500/20'
                    : 'bg-[#0e0e0e] border-[#1e1e1e] hover:border-[#2a2a2a] hover:bg-[#111]'
                  }
                `}
                style={
                  isBlue
                    ? { boxShadow: '0 0 30px rgba(59,130,246,0.05)' }
                    : isPurple
                    ? { boxShadow: '0 0 30px rgba(168,85,247,0.05)' }
                    : undefined
                }
              >
                {/* Card header */}
                <div className="flex items-start justify-between mb-4">
                  <p className={`text-[10.5px] font-semibold uppercase tracking-[0.15em] ${
                    isBlue ? 'text-[#3b82f6]/70' : isPurple ? 'text-purple-400/70' : 'text-[#444]'
                  }`}>
                    {category}
                  </p>
                  <div className="flex items-center gap-2">
                    {badge && (
                      <span className="text-[10px] font-medium text-[#3b82f6] border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 rounded-full">
                        {badge}
                      </span>
                    )}
                    <Icon
                      size={14}
                      stroke={1.5}
                      className={isBlue ? 'text-[#3b82f6]/50' : isPurple ? 'text-purple-400/50' : 'text-[#333]'}
                    />
                  </div>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <Pill key={skill} label={skill} accent={isPurple ? 'purple' : undefined} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
