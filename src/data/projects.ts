export interface ArchitectureItem {
  id: string;
  name: string;
  description: string;
  tag: string;
}

export interface ArchitectureLayer {
  layer: string;
  title: string;
  subtitle: string;
  accent: string;
  items: ArchitectureItem[];
}

export interface CaseStudySection {
  title: string;
  label?: string;
  content: string[];
  bulletPoints?: string[];
  takeaway?: string;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  year: string;
  tagline: string;
  summary: string;
  accentColor: string;
  accentHex: string;
  links: {
    live?: string;
    caseStudy: string;
    github?: string;
  };
  technologies: string[];
  systemsExplored: string[];
  architectureLayers?: ArchitectureLayer[];
  caseStudy: {
    heroHeading: string;
    heroSubheading: string;
    overview: string[];
    problem: {
      heading: string;
      description: string[];
      points: string[];
    };
    productSolution: {
      heading: string;
      description: string[];
      features: { title: string; desc: string }[];
    };
    systemArchitecture: {
      heading: string;
      description: string[];
    };
    aiAndAgents?: {
      heading: string;
      description: string[];
      capabilities: string[];
    };
    mcpAndTools?: {
      heading: string;
      description: string[];
      protocolDetails: string[];
    };
    businessOperations?: {
      heading: string;
      description: string[];
    };
    technologyStack: {
      category: string;
      items: string[];
    }[];
    whatNext: {
      heading: string;
      description: string[];
      milestones: string[];
    };
    learnings: string[];
    currentStatus: string;
  };
}

export const projects: Project[] = [
  {
    id: "hamrolink",
    number: "01",
    name: "HamroLink",
    category: "Product & Infrastructure Platform",
    year: "2025–Present",
    tagline:
      "A connected digital platform for businesses in Nepal — combining websites, commerce, CRM, payments, marketing and AI-powered business operations.",
    summary:
      "Most local businesses operate across a fragmented mesh of disjointed tools: social media DMs for sales, spreadsheets for inventory, paper invoices, and manual bank slip verification. HamroLink unifies business storefronts, real-time inventory, local payment gateways, and autonomous AI agents through an integrated Model Context Protocol (MCP) backbone.",
    accentColor: "blue",
    accentHex: "#2563EB",
    links: {
      caseStudy: "/work/hamrolink",
      live: "https://hamrolink.com",
    },
    technologies: [
      "Next.js App Router",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Model Context Protocol (MCP)",
      "Tailwind CSS",
      "Framer Motion",
      "Prisma ORM",
      "Khalti / eSewa Payment APIs",
    ],
    systemsExplored: [
      "AI AGENTS",
      "MODEL CONTEXT PROTOCOL (MCP)",
      "BUSINESS STATE ENGINE",
      "MULTI-TENANT ARCHITECTURE",
      "LOCAL COMMERCE & PAYMENTS",
      "EVENT-DRIVEN AUTOMATION",
      "UNIFIED CRM",
      "REAL-TIME TOOL CALLING",
    ],
    architectureLayers: [
      {
        layer: "01",
        title: "BUSINESS LAYER",
        subtitle: "Customer-facing touchpoints and operational surfaces",
        accent: "#2563EB",
        items: [
          {
            id: "website",
            name: "Custom Storefronts",
            description: "High-performance storefronts with local localization and instant checkout.",
            tag: "FRONTEND",
          },
          {
            id: "products",
            name: "Unified Catalog",
            description: "Synchronized variant, pricing, and inventory ledger across physical and web sales.",
            tag: "INVENTORY",
          },
          {
            id: "customers",
            name: "Central CRM",
            description: "Unified customer identity across WhatsApp, Viber, Instagram, and web store.",
            tag: "CRM",
          },
          {
            id: "orders",
            name: "Order Lifecycle Engine",
            description: "Automated status transitions, courier dispatch, and fulfillment tracking.",
            tag: "WORKFLOW",
          },
          {
            id: "payments",
            name: "Payment Gateway Hub",
            description: "Direct integration with Nepal digital wallets (eSewa, Khalti) and card processors.",
            tag: "FINTECH",
          },
          {
            id: "marketing",
            name: "Campaigns & Retargeting",
            description: "SMS and Viber broadcast automations triggered by purchase events.",
            tag: "GROWTH",
          },
        ],
      },
      {
        layer: "02",
        title: "AI & AGENTIC LAYER",
        subtitle: "Autonomous execution, context distillation, and tool invocation",
        accent: "#7C3AED",
        items: [
          {
            id: "agent",
            name: "Business Copilot Agent",
            description: "Autonomous agent operating over live tenant data with scoped permissions.",
            tag: "ORCHESTRATION",
          },
          {
            id: "context",
            name: "Structured Business Context",
            description: "Real-time state assembly converting relational records into actionable prompt contexts.",
            tag: "KNOWLEDGE",
          },
          {
            id: "automation",
            name: "Event-Driven Triggers",
            description: "Deterministic background tasks executing recurring audits and customer triage.",
            tag: "RUNNER",
          },
          {
            id: "tools",
            name: "Tool Calling Registry",
            description: "Strictly typed tool signatures allowing LLMs to mutate inventory, issue refunds, and adjust orders safely.",
            tag: "EXECUTION",
          },
        ],
      },
      {
        layer: "03",
        title: "INFRASTRUCTURE LAYER",
        subtitle: "Multi-tenant persistence, protocol layer, and distributed reliability",
        accent: "#059669",
        items: [
          {
            id: "mcp",
            name: "Model Context Protocol (MCP)",
            description: "Standardized client-server protocol bridging AI models directly to the database and external APIs.",
            tag: "PROTOCOL",
          },
          {
            id: "apis",
            name: "Modular Core APIs",
            description: "REST & WebSocket endpoints handling real-time storefront events and merchant management.",
            tag: "GATEWAY",
          },
          {
            id: "database",
            name: "PostgreSQL Multi-Tenant",
            description: "Row-level tenant isolation ensuring bulletproof data separation and zero cross-talk.",
            tag: "STORAGE",
          },
          {
            id: "caching",
            name: "Distributed Redis Cache",
            description: "Sub-millisecond query caches for catalog hot paths and idempotent webhook handlers.",
            tag: "PERFORMANCE",
          },
          {
            id: "multitenancy",
            name: "Tenant Isolation Runtime",
            description: "Subdomain and custom domain DNS routing with instant SSL provisioning.",
            tag: "SYSTEMS",
          },
        ],
      },
    ],
    caseStudy: {
      heroHeading:
        "Building a Connected Operating System for Emerging Commerce",
      heroSubheading:
        "HamroLink bridges storefronts, inventory, payment verification, and autonomous AI agents through an integrated Model Context Protocol architecture.",
      overview: [
        "In developing economies like Nepal, digital commerce is experiencing rapid adoption, but merchant tooling remains severely fragmented.",
        "A typical store merchant uses Instagram or TikTok for lead generation, exchanges bank transfer screenshots over Viber or WhatsApp, manually checks bank balances on their phone, writes orders in physical notebooks, and coordinates with independent delivery riders individually.",
        "HamroLink is built from the ground up as a unified business operating system: giving merchants a headless storefront, real-time stock sync, localized digital payment gateways, and an autonomous AI agent capable of handling operational busywork.",
      ],
      problem: {
        heading: "The Disconnected Stack Dilemma",
        description: [
          "When software tools don't communicate with each other, human beings become the glue between systems. In emerging markets, this results in significant revenue leakage and operational paralysis.",
        ],
        points: [
          "Manual Payment Verification: Merchants spend hours matching bank deposit screenshots with order numbers, causing shipment delays and fraud vulnerability.",
          "Ghost Inventory: Selling across physical storefronts and social channels without unified synchronization creates constant stockouts and overselling.",
          "Siloed Customer Data: Zero retention mechanisms; customer contact info is locked inside disparate social messaging apps with no lifetime value tracking.",
          "High Tech Barrier: Western SaaS platforms like Shopify or Salesforce are priced in USD, lack native Nepali payment SDKs, and assume sophisticated technical overhead.",
        ],
      },
      productSolution: {
        heading: "An Integrated System, Not Isolated Tools",
        description: [
          "HamroLink replaces this disjointed stack with an interconnected platform designed specifically for the operational reality of local merchants.",
        ],
        features: [
          {
            title: "Instant Storefront Engine",
            desc: "Lightweight, mobile-first web storefronts engineered to load in under 1.2 seconds even on spotty 3G/4G connections.",
          },
          {
            title: "Direct Gateway Settlement",
            desc: "Native integration with eSewa, Khalti, and Fonepay QR, automating instant transaction verification and order tagging.",
          },
          {
            title: "Living Catalog & State Ledger",
            desc: "A centralized data store where physical POS scans, online checkouts, and agent-processed requests update the same atomic inventory ledger.",
          },
          {
            title: "Omnichannel Customer Memory",
            desc: "Consolidated purchase histories, preferences, and communication logs across all client touchpoints.",
          },
        ],
      },
      systemArchitecture: {
        heading: "Architected for Isolation, Scale, and Reliability",
        description: [
          "The system is architected across three distinct layers: the Business Presentation & Operational Layer, the AI & Context Orchestration Layer, and the Multi-Tenant Infrastructure Layer.",
          "Every merchant tenant operates within isolated database schemas using PostgreSQL row-level security (RLS), while sharing high-throughput distributed workers for webhook ingestion and asynchronous order processing.",
        ],
      },
      aiAndAgents: {
        heading: "Autonomous Agents Powered by Business Context",
        description: [
          "Rather than a generic chatbot that provides canned replies, HamroLink's AI layer is an operational agent integrated directly into the merchant's business state.",
          "When a customer asks 'Is the navy blue jacket in size L available in Kathmandu?', the agent queries the live inventory system, checks courier coverage for that postal area, and can generate a pre-filled checkout link within milliseconds.",
        ],
        capabilities: [
          "Natural Language Querying: Merchants can ask 'What were my top 3 grossing items this week?' and receive instant aggregations.",
          "Automated Customer Support: Handles first-touch inquiries on delivery times, return policies, and stock availability 24/7.",
          "Low-Stock Forecasting: Monitors sales velocity and alerts merchants before high-demand items run out.",
        ],
      },
      mcpAndTools: {
        heading: "Model Context Protocol (MCP) Integration",
        description: [
          "HamroLink implements the Model Context Protocol (MCP) as its foundational interface between LLMs and business databases. MCP provides a standardized, type-safe contract that prevents hallucinations and guarantees deterministic tool invocation.",
        ],
        protocolDetails: [
          "Strict JSON Schema validation for all mutative operations (e.g., issue_refund, update_stock, cancel_order).",
          "Scoped RBAC tokens ensuring AI agents can never read credentials or alter financial balances beyond established thresholds.",
          "Complete audit trails logging every agent inference, tool call input, and database state mutation.",
        ],
      },
      businessOperations: {
        heading: "End-to-End Commerce Workflows",
        description: [
          "From customer discovery to payment capture and courier handover, HamroLink minimizes human touchpoints without sacrificing merchant control.",
          "Local logistics partners are tied into the dispatch pipeline, generating tracking codes and dispatch labels automatically upon payment confirmation.",
        ],
      },
      technologyStack: [
        {
          category: "Frontend & Interface",
          items: ["Next.js App Router", "React 19", "Tailwind CSS", "Framer Motion", "Lucide React", "Radix UI Primitives"],
        },
        {
          category: "Backend & Services",
          items: ["Node.js", "TypeScript", "Prisma ORM", "tRPC", "WebSocket Events"],
        },
        {
          category: "AI & Protocol",
          items: ["Model Context Protocol (MCP)", "Anthropic / OpenAI API", "Vector Context Assembly", "Structured Tool Calling"],
        },
        {
          category: "Database & Infrastructure",
          items: ["PostgreSQL", "Supabase", "Redis (Upstash)", "Docker", "Vercel Edge Network"],
        },
      ],
      whatNext: {
        heading: "Active Exploration & Roadmap",
        description: [
          "The immediate focus is deepening the MCP tool ecosystem and hardening the offline-first sync capability for brick-and-mortar storefronts with intermittent internet.",
        ],
        milestones: [
          "Expanding native courier API integrations (Nepal Can Move, Pathao, CourierEx).",
          "Offline-first POS Progressive Web App with indexedDB synchronization.",
          "Multi-currency support for Nepali diaspora businesses selling overseas.",
          "Fine-tuned localized language models for Nepali and Romanized Nepali customer interactions.",
        ],
      },
      learnings: [
        "In emerging markets, software adoption fails when it requires users to change their behavior. The software must adapt to existing WhatsApp/cash habits rather than forcing Western enterprise workflows.",
        "AI agents without deterministic tool boundaries are liabilities; MCP provides the exact guardrail framework required for commercial adoption.",
        "Fast page load times (< 1.5s) directly correlate with checkout conversion when customers are on mobile networks with high packet loss.",
      ],
      currentStatus: "In active development and merchant testing.",
    },
  },
  {
    id: "distrya",
    number: "02",
    name: "Distrya",
    category: "AI Tools, Tech News & Digital Utilities",
    year: "2024–Present",
    tagline:
      "A comprehensive digital platform delivering AI productivity tools, curated technology insights, and smart utilities for modern operators.",
    summary:
      "Built and launched at https://distrya.com, Distrya serves as a fast, full-scale digital ecosystem combining curated AI tool discovery, editorial technology journalism, practical productivity utilities, and high-performance content delivery. Engineered with Next.js, Cloudinary dynamic image pipelines, and edge caching for sub-second delivery worldwide.",
    accentColor: "violet",
    accentHex: "#8B5CF6",
    links: {
      caseStudy: "/work/distrya",
      live: "https://distrya.com",
    },
    technologies: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Lucide React",
      "Node.js",
      "Cloudinary CDN",
      "Cloudflare Edge",
      "PostgreSQL",
    ],
    systemsExplored: [
      "AI TOOLS DIRECTORY",
      "EDITORIAL CONTENT PIPELINES",
      "EDGE CACHING & PERFORMANCE",
      "SMART WORKSPACE UTILITIES",
      "SEO & METRIC OPTIMIZATION",
      "CLOUDINARY MEDIA PIPELINES",
    ],
    caseStudy: {
      heroHeading:
        "Building Distrya: An AI-Driven Content & Productivity Utility Platform",
      heroSubheading:
        "Live at https://distrya.com — unifying cutting-edge AI tool discovery, deep technology analysis, and accessible digital utilities.",
      overview: [
        "Distrya (https://distrya.com) is an active, production digital media and utility platform founded and built by Suman Basnet. The platform covers the frontiers of technology: artificial intelligence tools, industrial tech analysis, future-of-work paradigms, and practical browser-based utilities.",
        "Rather than a standard blog, Distrya combines high-performance server-rendered editorial content with an interactive tool directory, advanced search, categorized deep dives, and automated reader engagement telemetry.",
      ],
      problem: {
        heading: "The Signal-to-Noise Problem in Tech & AI",
        description: [
          "With thousands of AI tools launching monthly and technical media fragmented across unverified sources, operators waste hours trying to find reliable tools and verified architectural insights.",
        ],
        points: [
          "AI Tool Overload: Finding vetted, practical AI software that genuinely improves productivity rather than novelty wrappers.",
          "Slow, Bloated News Sites: Mainstream tech blogs plagued by intrusive ads, trackers, and megabytes of JavaScript that compromise readability.",
          "Disconnected Utilities: Users jumping between five separate bookmarklets to analyze documents, convert media, or inspect tech trends.",
        ],
      },
      productSolution: {
        heading: "Speed, Curated Discovery, and Built-In Utilities",
        description: [
          "Distrya solves this through an integrated, blazingly fast platform built with modern Next.js and edge optimization.",
        ],
        features: [
          {
            title: "Curated AI Tool Index",
            desc: "Systematic directory of productivity tools, email copilots, document analyzers, and business workflow software.",
          },
          {
            title: "Editorial Technology Journalism",
            desc: "In-depth articles covering hybrid work, robotics infrastructure, agentic workflows, and emerging hardware.",
          },
          {
            title: "Cloudinary Dynamic Media Engine",
            desc: "Automated progressive image optimization, responsive srcSets, and edge asset transformations for instant rendering.",
          },
          {
            title: "Reader Telemetry & Fast Search",
            desc: "Real-time view counters, instant multi-category search, and trending story tracking.",
          },
        ],
      },
      systemArchitecture: {
        heading: "Engineered for Core Web Vitals & Global Scale",
        description: [
          "Distrya uses Next.js App Router on top of Cloudflare and Vercel Edge networks to deliver sub-second first contentful paint worldwide.",
          "Articles and media assets leverage automatic WebP/AVIF generation, preloaded critical font weights (Sora & Outfit), and lightweight Lucide React iconography.",
        ],
      },
      technologyStack: [
        {
          category: "Frontend & UI",
          items: ["Next.js App Router", "React", "TypeScript", "Tailwind CSS", "Lucide React", "Radix UI Primitives"],
        },
        {
          category: "Media & Optimization",
          items: ["Cloudinary CDN", "AVIF/WebP Compression", "Next/Image Responsive Sets"],
        },
        {
          category: "Backend & Data",
          items: ["Node.js API Routes", "PostgreSQL", "Full-text Search Indexing", "Edge Caching"],
        },
        {
          category: "Infrastructure",
          items: ["Cloudflare Edge DNS & SSL", "Google Analytics 4", "Vercel Edge Network"],
        },
      ],
      whatNext: {
        heading: "Future Direction & Product Evolution",
        description: [
          "Continuously expanding Distrya's browser-based utility suite and community knowledge base.",
        ],
        milestones: [
          "Launching interactive in-browser AI utility sandboxes.",
          "Automated weekly AI industry trend digest newsletters.",
          "Deeper integration with HamroLink's emerging merchant and creator ecosystem.",
        ],
      },
      learnings: [
        "Performance is content: a 40% reduction in FCP immediately boosted reader retention and pageview depth across mobile visitors.",
        "Curated, high-signal technical writing establishes durable authority far better than programmatic clickbait.",
        "A platform that combines content with actual actionable utilities converts readers into recurring users.",
      ],
      currentStatus: "Live and active at https://distrya.com with continuous editorial and tool updates.",
    },
  },
];
