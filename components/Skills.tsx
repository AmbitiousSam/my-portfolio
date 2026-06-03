'use client';

import { useInView } from '@/hooks/useInView';

const SKILL_GROUPS = [
  {
    category: 'Cloud & AWS',
    skills: [
      'EC2', 'ECS', 'EKS', 'S3', 'RDS', 'Lambda', 'SQS', 'SNS', 'CloudFront',
      'CloudWatch', 'CDK', 'DMS', 'OpenSearch', 'IAM', 'KMS', 'GuardDuty',
      'Security Hub', 'Inspector', 'Cognito', 'Route53', 'GCP (ACE Certified)',
    ],
  },
  {
    category: 'Infrastructure as Code',
    skills: ['Terraform', 'AWS CDK', 'CDKTF', 'Pulumi', 'CloudFormation', 'Ansible'],
  },
  {
    category: 'CI/CD & Containers',
    skills: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'Docker', 'Kubernetes', 'ECS Fargate', 'EKS', 'Helm'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Ruby on Rails', 'Go', 'Python', 'FastAPI', 'Node.js', 'Sidekiq', 'BullMQ / Redis', 'REST / JSON', 'GraphQL'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js App Router', 'TypeScript', 'TanStack Query', 'React Hook Form', 'Zod', 'Tailwind CSS'],
  },
  {
    category: 'AI & LLM Systems',
    skills: [
      'Multi-model Orchestration', 'Agentic Workflows', 'Prompt Engineering',
      'Tiered Model Routing', 'Tool-use Pipelines', 'FastAPI Inference Services',
      'RAG Pipelines', 'SSE Streaming',
    ],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'RDS', 'OpenSearch / Elasticsearch'],
  },
  {
    category: 'Observability & Security',
    skills: ['CloudWatch', 'Grafana', 'Prometheus', 'Datadog', 'ELK', 'SOC 2 Readiness', 'WAF', 'Rack::Attack', 'AWS Inspector', 'DevSecOps'],
  },
  {
    category: 'Languages',
    skills: ['Python', 'Ruby', 'Go', 'TypeScript', 'JavaScript', 'Bash', 'SQL'],
  },
];

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md border border-[#1e1e1e] bg-[#111111] text-[#888888] text-[12.5px] font-medium hover:border-[#2a2a2a] hover:text-[#aaaaaa] transition-colors duration-150">
      {label}
    </span>
  );
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-28 md:py-36 border-t border-[#111111]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <p className="text-[#3b82f6] text-[11.5px] font-semibold uppercase tracking-[0.15em] mb-3">
          Stack
        </p>
        <h2 className="text-[36px] sm:text-[44px] font-bold text-[#f5f5f5] tracking-tight leading-[1.1] mb-16">
          Skills &amp; Technologies
        </h2>

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`space-y-8 reveal ${inView ? 'visible' : ''}`}
        >
          {SKILL_GROUPS.map(({ category, skills }) => (
            <div key={category} className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-3 sm:gap-6 items-start">
              <div className="flex items-center gap-3 pt-0.5">
                <div className="w-0.5 h-4 rounded-full bg-[#3b82f6] opacity-60 shrink-0" aria-hidden="true" />
                <p className="text-[13px] font-semibold text-[#666666] uppercase tracking-wide">
                  {category}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Pill key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
