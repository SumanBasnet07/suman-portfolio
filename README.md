# Suman Basnet — Portfolio & Systems Architecture

<p align="center">
  <strong>Founder & Product Engineer</strong><br>
  Building software products, business systems, and AI-powered operating infrastructure.
</p>

<p align="center">
  <a href="https://suman-basnet.com.np"><img src="https://img.shields.io/badge/Live_Portfolio-suman--basnet.com.np-2563EB?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Portfolio" /></a>
  <a href="https://hamrolink.com"><img src="https://img.shields.io/badge/Product-HamroLink.com-059669?style=for-the-badge&logo=hyper&logoColor=white" alt="HamroLink" /></a>
  <a href="https://distrya.com"><img src="https://img.shields.io/badge/Product-Distrya.com-7C3AED?style=for-the-badge&logo=safari&logoColor=white" alt="Distrya" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_16-App_Router-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-Strict_Mode-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_4-Styling-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-Gestures_&_Springs-black?style=flat-square&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas_&_ACID_Transactions-47A248?style=flat-square&logo=mongodb" alt="MongoDB" />
  <img src="https://img.shields.io/badge/i18n-Bilingual_%2Fen_%26_%2Fja-EA580C?style=flat-square" alt="i18n" />
  <img src="https://img.shields.io/badge/License-MIT-gray?style=flat-square" alt="License" />
</p>

---

## 🧭 About & Philosophy

I am a product engineer and founder based in **Osaka, Japan**, designing software specifically adapted to emerging market realities and modern cloud architectures.

My focus is the space where **user experience, business state, and autonomous AI systems meet**:
- Rather than building isolated screens, I design complete operating feedback loops: storefront → payment confirmation → atomic inventory ledger → autonomous MCP tool execution → logistics dispatch.
- I build with strict architectural boundaries: probabilistic AI models handle intent reasoning, while deterministic APIs, strict JSON Schema contracts, and transactional databases preserve data integrity.

---

## 🚀 Live Products

### 01. [HamroLink](https://hamrolink.com) — Connected Commerce Operating System
> **Live Platform:** [https://hamrolink.com](https://hamrolink.com) · *In Active Production*

A unified digital operating system engineered for local commerce, brick-and-mortar storefronts, and independent merchants in Nepal.

- **Unified State Ledger**: Atomically links online storefronts, catalog state, and stock quantities across physical locations using MongoDB multi-document transactions.
- **Localized Fintech Rail**: Direct cryptographic verification of local digital wallet QR payments (**eSewa** & **Khalti**) without human reconciliation delay.
- **Autonomous Business Agent (MCP)**: Implements Anthropic’s **Model Context Protocol (MCP)** with strictly typed JSON Schema contracts for stock queries, return handling, and automated courier manifest dispatch.
- **Network Resilient**: Engineered for low-bandwidth mobile environments with under **1.2s** First Contentful Paint on 3G connections.
- **Tech Stack**: Next.js App Router, TypeScript, Node.js, MongoDB Atlas, Redis, Model Context Protocol (MCP), Tailwind CSS, Framer Motion.

---

### 02. [Distrya](https://distrya.com) — AI Tools Directory & Tech Publication
> **Live Platform:** [https://distrya.com](https://distrya.com) · *In Active Production*

A high-performance digital discovery platform and editorial publication covering the frontiers of artificial intelligence, workspace tools, and emerging software paradigms.

- **Curated AI Tools Directory**: Systematically categorized, vetted productivity software, document analysis utilities, and coding copilots.
- **Top-Read Flagship Publications**:
  - [Solo Founder AI Workflow 2026: Run a One-Person Business](https://distrya.com/blog/solo-founder-ai-workflow-2026) (**47,000+ Reads**) — Detailed breakdown of 7-hour weekly routines, AI tooling costs, and autonomous systems.
  - [AI Agentic Workflows for SMEs: 2026 Report](https://distrya.com/blog/ai-agentic-workflows-for-smes-2026-report) (**25,000+ Reads**) — Real enterprise adoption data, ROI benchmarks, and step-by-step implementation.
  - [AI Agents Went Rogue — OpenAI Paused Training](https://distrya.com) (**17,900+ Reads**) — Analysis of agent autonomy, FTC investigations, and builder implications.
- **Extreme Performance**: Global sub-second first contentful paint (**<0.8s FCP**) powered by Cloudflare Edge DNS, Next.js server components, and Cloudinary dynamic AVIF/WebP responsive media pipelines.
- **Tech Stack**: Next.js App Router, React, Node.js API Routes, MongoDB, Cloudinary Media CDN, Cloudflare Edge Network, Tailwind CSS.

---

## ✍️ In-Depth Engineering & Product Essays

This portfolio includes 4 comprehensive, production-grade architectural essays (700–850+ words each) available in both **English (`/en`)** and **Japanese (`/ja`)**:

1. **[Building with MCP: Bridging AI Agents and Real-World Business Context](https://suman-basnet.com.np/en/writing/building-with-mcp-ai-agents-business-context)**  
   *Why naive LLM wrappers fail in commerce, and how Anthropic’s Model Context Protocol provides deterministic contracts and audit trails over real business data.*
2. **[Why Local Businesses Need Connected Systems, Not Disconnected Tools](https://suman-basnet.com.np/en/writing/connected-systems-vs-disconnected-tools)**  
   *The hidden human cost of fragmented SaaS apps in emerging markets, and how unified document state eliminates manual spreadsheet reconciliations.*
3. **[Engineering for Low-Bandwidth Networks: What Testing on 3G Taught Me](https://suman-basnet.com.np/en/writing/engineering-for-low-bandwidth-networks)**  
   *Moving beyond fiber development environments: payload budgeting, font sub-setting, resilient network fallbacks, and real-world testing on low-spec Android devices.*
4. **[Lessons From Building Distrya: Typography, Restraint, and Speed](https://suman-basnet.com.np/en/writing/lessons-from-building-distrya)**  
   *Design decisions behind building an editorial tech platform from scratch: typographic hierarchy with Sora, zero layout shift, and disciplined aesthetic restraint.*

---

## 🛠️ Repository Architecture & Design System

This codebase is built as a custom, high-craft editorial application rather than a generic developer template:

```
src/
├── app/
│   ├── [lang]/               # Dynamic path-based i18n (/en and /ja)
│   │   ├── layout.tsx        # Root HTML shell, JSON-LD Schema, Navbar & Footer
│   │   ├── page.tsx          # Dominant Homepage (Hero, Radar, Showcases, Notes, About, Contact)
│   │   ├── about/page.tsx    # Complete Founder Journey & Builder Philosophy
│   │   ├── contact/page.tsx  # Direct Message Window & Conversation Routing
│   │   ├── work/             # Detailed Case Studies (HamroLink & Distrya)
│   │   └── writing/          # Full 4-Essay Reader with Syntax Highlighting & FAQs
│   ├── robots.ts             # Search crawler directives
│   └── sitemap.ts            # Dynamic bilingual XML sitemap for Google indexing
├── components/
│   ├── home/                 # Dominant Hero, Living Ecosystem Visual, Showcases
│   ├── layout/               # Dynamic Navbar (Avatar Brand Logo) & Detailed Footer
│   ├── ui/                   # Magnetic buttons, Section labels, System marquee, Transitions
│   └── work/                 # 3-Tier Living Architecture subsystem inspector
├── context/
│   └── LanguageContext.tsx   # React Language provider with seamless route preservation
├── data/
│   ├── portfolio.ts          # Core bilingual strings & ecosystem topology
│   ├── projects.ts           # Case studies, technology stacks & subsystem trees
│   ├── site.ts               # Metadata, social handles & navigation links
│   └── writing.ts            # Production essay schemas, code snippets & key takeaways
└── lib/
    ├── animations.ts         # Framer Motion spring physics & editorial easings
    └── utils.ts              # Tailwind class merge utilities
```

### Highlights
- **Bilingual Route Strategy**: Clean `/en` and `/ja` paths maintaining search engine indexation across multiple languages with automatic canonical headers.
- **Living Ecosystem Topology**: Mouse-reactive 3D perspective spring physics visualizing data signals between Storefront, AI Agents, Systems Core, MongoDB, and Event Automation.
- **SEO & Structured Data**: Built-in Schema.org `Person` JSON-LD metadata, OpenGraph cards, Twitter preview cards, and semantic HTML5 hierarchy.

---

## 💻 Getting Started Locally

### Prerequisites
- **Node.js**: v18.18+ or v20+ recommended
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SumanBasnet07/suman-portfolio.git
   cd suman-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**  
   Navigate to [http://localhost:3000](http://localhost:3000) (auto-redirects to `/en`).

### Production Build

```bash
npm run build
npm run start
```

---

## 📬 Connect & Collaborate

- **Live Website**: [https://suman-basnet.com.np](https://suman-basnet.com.np)
- **Email**: [suman@distrya.com](mailto:suman@distrya.com)
- **GitHub**: [@SumanBasnet07](https://github.com/SumanBasnet07)
- **LinkedIn**: [Suman Basnet](https://www.linkedin.com/in/suman-basnet-73a07037a/)
- **X / Twitter**: [@distrya_online](https://x.com/distrya_online)
- **Location**: Osaka, Japan · *Available for technical discussions, AI system architecture, and founder collaborations.*

---

<p align="center">
  <sub>Designed &amp; engineered by Suman Basnet. Built with Next.js, TypeScript, and Tailwind CSS.</sub>
</p>