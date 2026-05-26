'use client';

import {
  Rocket,
  Brain,
  Globe2,
  Layers3,
  ArrowUpRight,
} from 'lucide-react';
import { Language } from '@/types/language';

interface SocialProofProps {
  language: Language;
}

export function SocialProof({ language }: SocialProofProps) {
  const content = {
    en: {
      eyebrow: 'Building in Public',
      title: 'Focused on scalable products, AI workflows, and digital systems',
      description:
        'I enjoy building practical software systems that combine product thinking, automation, and localized digital experiences for emerging markets like Nepal.',

      metrics: [
        {
          label: 'SaaS & Product Experiments',
          value: '5+',
          icon: Rocket,
        },
        {
          label: 'AI-Powered Workflows',
          value: 'Multiple',
          icon: Brain,
        },
        {
          label: 'Localization & SEO Systems',
          value: 'Growing',
          icon: Globe2,
        },
      ],

      highlights: [
        'Building HamroLink — an AI-powered platform for Nepalese businesses',
        'Exploring AI-assisted product workflows and automation systems',
        'Interested in scalable infrastructure, SaaS architecture, and localization',
        'Combining engineering, product thinking, and growth-focused systems',
      ],

      quote:
        'I’m passionate about simplifying digital adoption through practical systems, scalable architecture, and user-focused product experiences.',

      footer:
        'Currently exploring how AI and localized software can shape the future of digital businesses in Nepal.',
    },

    ja: {
      eyebrow: '開発中のプロダクト',
      title: 'スケーラブルなプロダクトとAIワークフローを構築',
      description:
        'プロダクト思考、AI、自動化を組み合わせながら、ネパール市場向けの実用的なデジタルシステムを開発しています。',

      metrics: [
        {
          label: 'SaaS・プロダクト実験',
          value: '5+',
          icon: Rocket,
        },
        {
          label: 'AIワークフロー',
          value: '複数',
          icon: Brain,
        },
        {
          label: 'ローカライズ・SEOシステム',
          value: '成長中',
          icon: Globe2,
        },
      ],

      highlights: [
        'HamroLink — ネパール企業向けAIプラットフォームを開発中',
        'AI支援型ワークフローと自動化システムを研究',
        'SaaSアーキテクチャとスケーラブルなインフラに関心',
        'エンジニアリングとプロダクト思考を組み合わせた開発',
      ],

      quote:
        '実用的なシステムとスケーラブルなプロダクトを通して、デジタル導入をよりシンプルにすることに興味があります。',

      footer:
        'AIとローカライズされたソフトウェアが、ネパールのデジタルビジネスをどう変えるかを探求しています。',
    },
  };

  const c = content[language];

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-800">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
            <Layers3 size={16} />
            {c.eyebrow}
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
            {c.title}
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {c.description}
          </p>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {c.metrics.map((metric, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-[2rem] bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                <metric.icon size={28} />
              </div>

              <div className="text-4xl font-black text-gray-900 dark:text-white mb-2">
                {metric.value}
              </div>

              <div className="text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Left */}
          <div className="rounded-[2.5rem] p-10 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-100 dark:border-blue-900/30">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Current Focus
            </h3>

            <div className="space-y-5">
              {c.highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 text-gray-700 dark:text-gray-300"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    <ArrowUpRight size={14} />
                  </div>

                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="rounded-[2.5rem] p-10 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="text-6xl font-black text-blue-400/20 mb-6">
                  ”
                </div>

                <p className="text-2xl leading-relaxed font-medium text-gray-100 mb-10">
                  {c.quote}
                </p>
              </div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-xl font-bold mb-4">
                  <img src="/unnamed.png" alt="Suman Basnet" className='rounded-2xl'/>
                </div>

                <div className="font-semibold text-lg">
                  Suman Basnet
                </div>

                <div className="text-sm text-gray-400 mt-1">
                  Product Engineer • SaaS Builder
                </div>

                <p className="mt-6 text-gray-300 leading-relaxed text-sm">
                  {c.footer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}