import { LocalizedString } from "@/data/site";

export interface CorePhilosophy {
  number: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface EngineeringInterest {
  tag: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  accent: string;
}

export interface PortfolioData {
  hero: {
    eyebrow: LocalizedString;
    name: string;
    title: LocalizedString;
    headline: {
      part1: LocalizedString;
      part2: LocalizedString;
      part3: LocalizedString;
    };
    subheadline: LocalizedString;
    primaryCta: {
      label: LocalizedString;
      href: string;
    };
    secondaryCta: {
      label: LocalizedString;
      href: string;
    };
    ecosystemNodes: {
      id: string;
      label: LocalizedString;
      sublabel: LocalizedString;
      color: string;
      accentHex: string;
      x: number;
      y: number;
    }[];
  };
  intro: {
    label: LocalizedString;
    statement: LocalizedString;
    body: LocalizedString;
    locationNote: LocalizedString;
  };
  about: {
    headline: LocalizedString;
    lead: LocalizedString;
    story: {
      title: LocalizedString;
      paragraphs: LocalizedString[];
    }[];
    locationAndFocus: {
      heading: LocalizedString;
      base: LocalizedString;
      baseDetails: LocalizedString;
      focus: LocalizedString;
      focusDetails: LocalizedString;
    };
    engineeringInterests: EngineeringInterest[];
    philosophies: CorePhilosophy[];
  };
  contact: {
    eyebrow: LocalizedString;
    heading: LocalizedString;
    subheading: LocalizedString;
    primaryButton: LocalizedString;
    directEmailLabel: LocalizedString;
    responseExpectation: LocalizedString;
  };
}

export const portfolioData: PortfolioData = {
  hero: {
    eyebrow: {
      en: "FOUNDER & PRODUCT ENGINEER",
      ja: "創業者 & プロダクトエンジニア",
    },
    name: "SUMAN BASNET",
    title: {
      en: "Founder & Product Engineer",
      ja: "創業者 & プロダクトエンジニア",
    },
    headline: {
      part1: {
        en: "I build products,",
        ja: "実体あるプロダクトと、",
      },
      part2: {
        en: "systems and the",
        ja: "それを支えるシステム基盤を",
      },
      part3: {
        en: "infrastructure behind them.",
        ja: "一から設計・開発しています。",
      },
    },
    subheadline: {
      en: "Currently building HamroLink — a connected business platform exploring what happens when software, AI agents and business infrastructure work together.",
      ja: "現在は「HamroLink」を開発中。ソフトウェア、AIエージェント、そして業務インフラがシームレスに連動する次世代ビジネス基盤を探求しています。",
    },
    primaryCta: {
      label: {
        en: "EXPLORE WORK",
        ja: "プロジェクトを見る",
      },
      href: "/work",
    },
    secondaryCta: {
      label: {
        en: "ABOUT ME",
        ja: "経歴・哲学",
      },
      href: "/about",
    },
    ecosystemNodes: [
      {
        id: "product",
        label: { en: "PRODUCT", ja: "プロダクト" },
        sublabel: { en: "Storefronts & UI", ja: "ストアフロント & UI" },
        color: "blue",
        accentHex: "#2563EB",
        x: 18,
        y: 26,
      },
      {
        id: "ai",
        label: { en: "AI", ja: "AI / AGENTS" },
        sublabel: { en: "Agents & MCP", ja: "自律エージェント & MCP" },
        color: "violet",
        accentHex: "#7C3AED",
        x: 78,
        y: 22,
      },
      {
        id: "systems",
        label: { en: "SYSTEMS", ja: "システム" },
        sublabel: { en: "State & Sync", ja: "分散台帳 & 同期" },
        color: "emerald",
        accentHex: "#059669",
        x: 50,
        y: 52,
      },
      {
        id: "data",
        label: { en: "DATA", ja: "データ" },
        sublabel: { en: "Postgres Ledger", ja: "PostgreSQL & 台帳" },
        color: "orange",
        accentHex: "#EA580C",
        x: 22,
        y: 78,
      },
      {
        id: "automation",
        label: { en: "AUTOMATION", ja: "自動化" },
        sublabel: { en: "Tool Execution", ja: "イベント & ツール実行" },
        color: "cyan",
        accentHex: "#0891B2",
        x: 82,
        y: 74,
      },
    ],
  },
  intro: {
    label: { en: "01 / PERSPECTIVE", ja: "01 / 視点" },
    statement: {
      en: "I’m interested in the space between an idea and the system that makes it work.",
      ja: "「アイデア」と「それを機能させるシステム」の間にある領域を探求しています。",
    },
    body: {
      en: "I’m Suman Basnet, a product engineer and founder building software products, business systems and AI-powered infrastructure. I design and ship systems that bridge human intention and reliable technical execution.",
      ja: "私はスーマン・バスネットです。ソフトウェアプロダクト、業務システム、AIインフラを構築するプロダクトエンジニア兼創業者です。人間の意図と確実な技術的実行を結ぶシステムを設計・提供しています。",
    },
    locationNote: {
      en: "Based in Osaka, Japan · Building for Nepal & beyond",
      ja: "日本・大阪を拠点に、ネパールおよび世界へ展開中",
    },
  },
  about: {
    headline: {
      en: "Engineering Products from the Foundation Up",
      ja: "基盤から一貫して創り上げるエンジニアリング",
    },
    lead: {
      en: "I’m Suman Basnet, a product engineer and founder building software products, business systems, and AI-powered infrastructure.",
      ja: "ソフトウェアプロダクト、業務システム、そしてAI基盤を設計・実装するプロダクトエンジニア兼創業者です。",
    },
    story: [
      {
        title: {
          en: "Current Focus: HamroLink",
          ja: "現在の注力: HamroLink（ハムロリンク）",
        },
        paragraphs: [
          {
            en: "My primary focus today is HamroLink, a platform I’m building to give local businesses in emerging markets a connected digital system rather than a collection of disconnected tools.",
            ja: "現在最も注力しているのは「HamroLink」です。新興市場の地域事業者に、バラバラに分断されたツールではなく、統合された一貫したデジタルシステムを提供しています。",
          },
          {
            en: "Rather than treating software as disparate islands of apps, HamroLink unifies storefronts, inventory ledgers, local QR payments, and autonomous AI agents through an integrated Model Context Protocol (MCP) architecture.",
            ja: "アプリの孤島をつなぎ合わせるのではなく、Webストア、リアルタイム在庫台帳、現地QR決済、自律型AIエージェントをMCP（Model Context Protocol）を通じて単一の台帳で統合しています。",
          },
        ],
      },
      {
        title: {
          en: "Beyond the Interface: AI & Protocols",
          ja: "インターフェースの先へ: AIとプロトコル",
        },
        paragraphs: [
          {
            en: "Beyond user-facing screens, my technical work focuses on the infrastructure that makes software resilient: AI agents with deterministic tool boundaries, structured business context assembly, Model Context Protocol (MCP) integration, and event-driven automation.",
            ja: "UI画面だけでなく、確定的なツール実行境界を持つAIエージェント、構造化されたビジネスコンテキスト構築、MCPプロトコルの実装、イベント駆動型自動化に力を注いでいます。",
          },
          {
            en: "I believe the next generation of software won't just display data to users — it will autonomously execute operational workflows while maintaining human oversight.",
            ja: "次世代のソフトウェアは単にデータを表示するだけでなく、人間の監督下で日々の運用タスクを自律的かつ正確に代行するものになると確信しています。",
          },
        ],
      },
      {
        title: {
          en: "The Journey & Distrya",
          ja: "歩みとDistrya（ディストリア）",
        },
        paragraphs: [
          {
            en: "My engineering journey began with web development and steadily progressed toward full-stack application architecture, relational databases, distributed caching, API design, and AI systems.",
            ja: "Web制作から始まった開発の旅は、フルスタック設計、リレーショナルDB、分散キャッシュ、API設計、そしてAIエージェント基盤へと深化してきました。",
          },
          {
            en: "Building Distrya was an essential chapter in understanding design systems, typographic restraint, and developer-centric workflows from first principles.",
            ja: "Distryaの開発は、デザインシステム、タイポグラフィの規律、開発者体験を第一原理から体得する重要な節目となりました。",
          },
        ],
      },
    ],
    locationAndFocus: {
      heading: {
        en: "Global Perspective, Local Roots",
        ja: "グローバルな視座とローカルな根幹",
      },
      base: {
        en: "Osaka, Japan",
        ja: "日本・大阪",
      },
      baseDetails: {
        en: "Living and operating in Japan has deeply influenced my appreciation for precision, craft, and architectural reliability.",
        ja: "日本での生活と制作活動を通じて、細部へのこだわり、丁寧なものづくり、システムの高信頼性に対する深い敬意が育まれました。",
      },
      focus: {
        en: "Nepal & Emerging Markets",
        ja: "ネパール & 新興デジタル市場",
      },
      focusDetails: {
        en: "Directing technological ambition toward solving practical operational hurdles for merchants and creators in developing digital economies.",
        ja: "急成長する新興デジタル市場において、商店や事業者が直面する極めて現実的な運用課題の解決に技術を注いでいます。",
      },
    },
    engineeringInterests: [
      {
        tag: { en: "AI & PROTOCOLS", ja: "AI & プロトコル" },
        title: {
          en: "Model Context Protocol (MCP)",
          ja: "Model Context Protocol (MCP)",
        },
        description: {
          en: "Designing type-safe, auditable contracts between large language models and commercial database schemas.",
          ja: "大規模言語モデルと商用DBスキーマ間に型安全で監査可能な契約を設計。",
        },
        accent: "#2563EB",
      },
      {
        tag: { en: "AGENTIC WORKFLOWS", ja: "自律エージェント" },
        title: {
          en: "Tool Calling & Autonomous Execution",
          ja: "ツール実行と自律運用",
        },
        description: {
          en: "Building bounded agent runtimes that safely trigger financial, inventory, and logistics operations.",
          ja: "在庫・決済・配送の安全なミューテーションを実行するエージェント基盤。",
        },
        accent: "#7C3AED",
      },
      {
        tag: { en: "SYSTEMS", ja: "システム台帳" },
        title: {
          en: "Unified Business State",
          ja: "統合ビジネスステート",
        },
        description: {
          en: "Replacing spreadsheet-and-DM glue with single-source-of-truth transactional ledgers.",
          ja: "手作業の貼り付け運用を排除し、単一の信頼できる台帳で全業務を同期。",
        },
        accent: "#059669",
      },
      {
        tag: { en: "ARCHITECTURE", ja: "エッジ基盤" },
        title: {
          en: "Multi-Tenant Edge Infrastructure",
          ja: "マルチテナント・エッジ基盤",
        },
        description: {
          en: "Designing high-availability data layers and edge middleware optimized for spotty network environments.",
          ja: "不安定なモバイル通信網でも軽快に動作する高信頼マルチテナント構成。",
        },
        accent: "#EA580C",
      },
    ],
    philosophies: [
      {
        number: "01",
        title: {
          en: "Software Must Reflect Operational Reality",
          ja: "現場の現実に寄り添うソフトウェア",
        },
        description: {
          en: "Enterprise templates fail in emerging markets because they demand behavioral shifts. Software should mold around existing human communication patterns.",
          ja: "ユーザーに無理な行動変容を迫る複雑なツールは定着しません。現地に根づく自然な商習慣に溶け込むソフトウェアこそが力を発揮します。",
        },
      },
      {
        number: "02",
        title: {
          en: "Typography and Whitespace Over Visual Noise",
          ja: "視覚的ノイズを削ぎ落としたタイポグラフィ",
        },
        description: {
          en: "Confidence is expressed through proportion, restraint, and deliberate typographic rhythm — not arbitrary gradients and decorative chrome.",
          ja: "確かな自信は、過剰な装飾ではなく、綿密な比率、余白、研ぎ澄まされた文字の造形によって表現されます。",
        },
      },
      {
        number: "03",
        title: {
          en: "Deterministic Contracts for Probabilistic Intelligence",
          ja: "確率的知能に対する確定的契約",
        },
        description: {
          en: "AI models are reasoning engines, not databases. Real utility comes from grounding models in strict protocol contracts like MCP.",
          ja: "AIは推論エンジンであり、データベースではありません。MCPのような厳格なプロトコル契約で囲い込むことで、商用の信頼性が生まれます。",
        },
      },
    ],
  },
  contact: {
    eyebrow: { en: "INITIATE DIALOGUE", ja: "コンタクト" },
    heading: {
      en: "LET'S TALK ABOUT PRODUCTS, SYSTEMS AND WHAT'S NEXT.",
      ja: "プロダクト、システム、そしてこれからの可能性について対話しましょう。",
    },
    subheading: {
      en: "If you're building something interesting, working on a difficult technical problem, or want to talk about products and systems, I'd like to hear about it.",
      ja: "興味深いプロジェクトを進めている方、難度の高い技術課題に取り組んでいる方、プロダクトやシステム設計に関心がある方からのご連絡をお待ちしています。",
    },
    primaryButton: {
      en: "GET IN TOUCH",
      ja: "メールで問い合わせる",
    },
    directEmailLabel: {
      en: "Direct Inquiries",
      ja: "直接のお問い合わせ",
    },
    responseExpectation: {
      en: "Usually replies within 24 hours · Japan Standard Time",
      ja: "通常24時間以内にご返信いたします（日本標準時）",
    },
  },
};
