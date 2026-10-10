export type SkillGroup = { group: string; items: string[] }

/**
 * Tier 1 — capabilities. Transferable engineering knowledge that outlives any
 * framework: the things that stay true whether the job is backend, frontend
 * or full-stack, and whatever language the team happens to use.
 */
export const capabilities: SkillGroup[] = [
  {
    group: 'Architecture & System Design',
    items: [
      'System design',
      'Distributed systems',
      'Service boundaries',
      'Event-driven design',
      'Domain modelling',
      'API design & versioning',
      'Design patterns',
      'Scalability',
      'Fault tolerance',
      'Idempotency',
      'Caching strategy',
      'Concurrency & async',
      'Trade-off analysis',
    ],
  },
  {
    group: 'Data & Storage',
    items: [
      'Relational modelling',
      'Normalisation',
      'Indexing & query planning',
      'Transactions & ACID',
      'Document/NoSQL modelling',
      'Schema migration',
      'Replication & failover',
      'Partitioning & sharding',
      'Consistency models',
      'Backup & recovery',
    ],
  },
  {
    group: 'Backend Engineering',
    items: [
      'REST',
      'GraphQL',
      'RPC',
      'Realtime & streaming',
      'AuthN / AuthZ',
      'Rate limiting',
      'Message queues',
      'Background jobs',
      'Webhooks',
      'Pagination & filtering',
      'File & media handling',
      'Batch processing',
    ],
  },
  {
    group: 'Frontend Engineering',
    items: [
      'Semantic HTML',
      'Modern CSS & layout',
      'Accessibility (WCAG)',
      'Responsive design',
      'Component architecture',
      'State management',
      'Browser rendering model',
      'Core Web Vitals',
      'Bundling & code splitting',
      'Progressive enhancement',
      'Design systems',
    ],
  },
  {
    group: 'Platform & Delivery',
    items: [
      'CI/CD pipelines',
      'Containerisation',
      'Infrastructure as code',
      'Observability',
      'Logs, metrics & traces',
      'Zero-downtime deploys',
      'Secrets management',
      'Incident response',
      'Cost awareness',
      'Capacity planning',
    ],
  },
  {
    group: 'Engineering Practice',
    items: [
      'Clean, readable code',
      'Testing strategy',
      'Code review',
      'Debugging & profiling',
      'Refactoring legacy code',
      'Technical writing',
      'Agile delivery',
      'Mentoring',
      'AI-assisted development',
    ],
  },
  {
    group: 'Fundamentals',
    items: [
      'Data structures',
      'Algorithms & complexity',
      'Networking (HTTP, TLS, DNS)',
      'Operating systems',
      'Linux & shell',
      'Git & trunk-based flow',
      'Security basics (OWASP)',
      'Regular expressions',
      'Character encoding & time zones',
    ],
  },
]

/**
 * Tier 2 — the tools these ideas currently run on. Deliberately listed second:
 * the stack is an implementation detail and gets swapped per team.
 */
export const skills: SkillGroup[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Bash'] },
  {
    group: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'Nest.js',
      'FastAPI',
      'Django',
      'Flask',
      'REST APIs',
      'OAuth 2.0',
      'JWT / RBAC',
      'WebSockets',
      'gRPC',
      'Bull / job queues',
    ],
  },
  {
    group: 'Frontend',
    items: ['React.js', 'Next.js', 'Redux', 'Vanilla CSS', 'Tailwind CSS', 'Material-UI', 'ShadCN', 'Storybook', 'Vite'],
  },
  {
    group: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'DynamoDB', 'Cassandra', 'SQLite'],
  },
  {
    group: 'Cloud',
    items: [
      'AWS Lambda',
      'EC2',
      'ECS',
      'RDS',
      'S3',
      'SQS',
      'SNS',
      'EventBridge',
      'CloudWatch',
      'Cognito',
      'SES',
      'Secrets Manager',
      'IAM',
      'Firebase',
    ],
  },
  {
    group: 'DevOps & Observability',
    items: [
      'Docker',
      'Kubernetes',
      'Nginx',
      'GitLab CI/CD',
      'GitHub Actions',
      'Git',
      'PM2',
      'Grafana',
      'Loki',
      'Prometheus',
      'Jest',
      'Swagger / OpenAPI',
      'Postman',
    ],
  },
  { group: 'AI-Assisted', items: ['GitHub Copilot', 'Claude', 'Claude Code', 'ChatGPT', 'Cursor'] },
]

/** Flat list for the marquee — capabilities and tools, mixed. */
export const allSkills = [...capabilities.flatMap((c) => c.items), ...skills.flatMap((s) => s.items)]
