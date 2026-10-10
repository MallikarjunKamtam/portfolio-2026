export type Job = {
  company: string
  legal?: string
  role: string
  period: string
  place: string
  current?: boolean
  stack: string[]
  points: string[]
}

export const jobs: Job[] = [
  {
    company: 'Green Story',
    legal: 'Simplizero Sustainable Solutions Pvt Ltd',
    role: 'Senior Software Engineer',
    period: 'Jun 2022 — Present',
    place: 'Remote, India',
    current: true,
    stack: ['Node.js', 'Nest.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'GitLab CI'],
    points: [
      'Architected production microservices in Node.js, Nest.js and TypeScript serving enterprise clients with consistent uptime and sub-100ms API response times.',
      'Engineered a fault-tolerant order processing pipeline with strict ACID compliance, retryable job execution via Bull queue and Redis, and idempotent API design to stay consistent under partial failures.',
      'Integrated WhatsApp Business API so end-users interact with the platform over WhatsApp — message routing, webhook handling and multi-number credential management per phone number ID.',
      'Built a server-side template engine for instant PDF generation from dynamic HTML templates, powering compliance reports, analytics reporting and client-facing documents at scale.',
      'Developed optimized complex SQL queries, stored procedures and data-processing logic in PostgreSQL, significantly reducing query times on high-volume reporting endpoints.',
      'Designed a structured logging system for background processors capturing job lifecycle events, failures and retries with correlation IDs for full traceability across async workflows.',
      'Implemented a batch message processing pipeline for high-volume notification delivery via AWS SQS and SES, with rate limiting, dead-letter queues and retry strategies.',
      'Managed database migrations across PostgreSQL and MongoDB inside CI/CD using zero-downtime strategies and rollback scripts for safe production deploys.',
      'Designed event-driven architecture on AWS Lambda, SQS, SNS and EventBridge; secured APIs with OAuth 2.0 via Cognito, JWT and RBAC; managed secrets with AWS Secrets Manager and Parameter Store.',
      'Set up observability with Grafana, Loki and CloudWatch, and GitLab CI/CD with Docker and ECS with automated rollbacks — cutting incident detection from hours to minutes.',
      'Adopted AI tools (GitHub Copilot, Claude, ChatGPT) for code generation, review and test scaffolding, accelerating delivery without trading away code quality.',
      'Designed and enforced an API versioning strategy and internal developer guidelines across microservices, reducing integration errors and onboarding time for new engineers.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    role: 'Senior Process Associate',
    period: 'Mar 2019 — Jun 2022',
    place: 'Gandhinagar, Gujarat, India',
    stack: ['Node.js', 'Python', 'FastAPI', 'Django', 'React.js', 'Next.js', 'Redux', 'Firebase', 'MySQL'],
    points: [
      'Built backend services in Node.js and Python (FastAPI, Django, Flask) for BFSI and e-commerce clients — payment APIs, product catalogue services and order management systems.',
      'Designed and optimized schemas across PostgreSQL, MySQL, MongoDB and SQLite; built async job pipelines with Bull queue and Redis for notifications, report generation and background tasks.',
      'Built React.js and Next.js frontends with Redux, reusable component libraries documented in Storybook, functional components with custom hooks and pure utility functions.',
      'Developed responsive UI with Tailwind CSS and Material-UI; implemented lazy loading, code splitting and Web Workers for performance across banking portals and e-commerce storefronts.',
      'Integrated real-time features with Firebase Firestore for live data sync and FCM for push notifications across web applications.',
      'Received the Service and Commitment Award (2022) and On-The-Spot Team Award (2019) for consistent delivery and technical contributions.',
    ],
  },
]
