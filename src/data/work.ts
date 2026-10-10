export type WorkItem = {
  title: string
  blurb: string
  tags: string[]
  metric: string
}

export const work: WorkItem[] = [
  {
    title: 'Fault-Tolerant Order Pipeline',
    blurb:
      'ACID-compliant order processing with retryable jobs on Bull + Redis and idempotent API design. Survives partial failure without double-charging or losing state.',
    tags: ['Node.js', 'Redis', 'Bull', 'PostgreSQL'],
    metric: 'zero duplicate writes under retry storms',
  },
  {
    title: 'Event-Driven Backbone',
    blurb:
      'Lambda + SQS + SNS + EventBridge fabric wiring independent services together. Dead-letter queues, backoff and correlation IDs end to end.',
    tags: ['AWS', 'Lambda', 'SQS', 'EventBridge'],
    metric: 'async workflows fully traceable',
  },
  {
    title: 'WhatsApp Business Integration',
    blurb:
      'Whole platform usable from a chat thread — message routing, webhook verification and per-phone-number-ID credential management for multiple tenants.',
    tags: ['WhatsApp API', 'Webhooks', 'Multi-tenant'],
    metric: 'multi-number, multi-tenant routing',
  },
  {
    title: 'HTML to PDF Template Engine',
    blurb:
      'Server-side renderer turning dynamic HTML templates into compliance reports, analytics exports and client documents on demand.',
    tags: ['Node.js', 'Templating', 'Reporting'],
    metric: 'instant generation at scale',
  },
  {
    title: 'Observability Stack',
    blurb:
      'Grafana, Loki and CloudWatch wired to structured job-lifecycle logs. Alerting that actually points at the broken service.',
    tags: ['Grafana', 'Loki', 'CloudWatch'],
    metric: 'incident detection: hours to minutes',
  },
  {
    title: 'Zero-Downtime Migrations',
    blurb:
      'PostgreSQL and MongoDB schema migrations inside GitLab CI/CD with rollback scripts and expand-contract sequencing.',
    tags: ['PostgreSQL', 'MongoDB', 'CI/CD'],
    metric: 'no maintenance windows',
  },
]
