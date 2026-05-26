'use client';

import {
  Code2, Database, Palette, Layers, Globe, 
  Workflow, Server, Zap, Terminal, TrendingUp, Users, Settings, 
  Sparkles, Cloud, Layout, BarChart, Bot, Search, Network, MonitorSmartphone
} from 'lucide-react';
import { Language } from '@/types/language';

interface SkillsProps {
  language: Language;
}

export function Skills({ language }: SkillsProps) {
  const content = {
    en: {
      title: 'Technical Arsenal',
      subtitle: 'The systems, tools, and strategies I use to build scalable products.',
      context: 'Context',
      categories: {
        product: 'Product Engineering',
        ai: 'AI & Automation',
        fullstack: 'Full-Stack Development',
        seo: 'SEO & Growth',
        infrastructure: 'Infrastructure & Deployment',
      },
      learning: 'Continuously refining how to build scalable digital infrastructure efficiently.',
    },
    ja: {
      title: '技術的な強み',
      subtitle: 'スケーラブルな製品を構築するためのシステム、ツール、戦略。',
      context: 'コンテキスト',
      categories: {
        product: '製品エンジニアリング',
        ai: 'AIと自動化',
        fullstack: 'フルスタック開発',
        seo: 'SEOと成長',
        infrastructure: 'インフラと展開',
      },
      learning: 'スケーラブルなデジタルインフラを効率的に構築する方法を継続的に改善しています。',
    },
  };

  const c = content[language];

  const skillCategories = [
    {
      title: c.categories.product,
      accent: 'teal',
      skills: [
        { icon: Workflow, name: { en: 'SaaS Architecture', ja: 'SaaS アーキテクチャ' }, context: 'Used in HamroLink', color: 'from-blue-500 to-indigo-600', desc: { en: 'System foundation', ja: 'システム基盤' } },
        { icon: Network, name: { en: 'Multi-Tenant Systems', ja: 'マルチテナントシステム' }, context: 'Scalable platforms', color: 'from-cyan-400 to-blue-500', desc: { en: 'Data isolation', ja: 'データ分離' } },
        { icon: Globe, name: { en: 'Product Strategy', ja: '製品戦略' }, context: 'Distribution-first', color: 'from-teal-400 to-cyan-500', desc: { en: 'User-focused planning', ja: 'ユーザー中心の計画' } },
        { icon: MonitorSmartphone, name: { en: 'UI/UX Systems', ja: 'UI/UX システム' }, context: 'Design architecture', color: 'from-emerald-400 to-teal-500', desc: { en: 'Consistent experiences', ja: '一貫した体験' } },
      ],
    },
    {
      title: c.categories.ai,
      accent: 'purple',
      skills: [
        { icon: Zap, name: { en: 'AI Workflow Design', ja: 'AIワークフロー設計' }, context: 'Production AI features', color: 'from-purple-500 to-pink-500', desc: { en: 'Beyond chatbots', ja: 'チャットボットを超えて' } },
        { icon: Bot, name: { en: 'Prompt Engineering', ja: 'プロンプトエンジニアリング' }, context: 'LLM integration', color: 'from-fuchsia-500 to-purple-600', desc: { en: 'Optimized outputs', ja: '最適化された出力' } },
        { icon: Sparkles, name: { en: 'AI-Assisted UX', ja: 'AI支援 UX' }, context: 'Smart generation', color: 'from-violet-500 to-fuchsia-500', desc: { en: 'Frictionless flows', ja: 'スムーズなフロー' } },
        { icon: Settings, name: { en: 'Automation Logic', ja: '自動化ロジック' }, context: 'Business efficiency', color: 'from-indigo-400 to-purple-500', desc: { en: 'Workflow optimization', ja: 'ワークフロー最適化' } },
      ],
    },
    {
      title: c.categories.fullstack,
      accent: 'blue',
      skills: [
        { icon: Layers, name: { en: 'Next.js 14', ja: 'Next.js 14' }, context: 'Used in HamroLink', color: 'from-slate-700 to-slate-900', desc: { en: 'React framework', ja: 'Reactフレームワーク' } },
        { icon: Code2, name: { en: 'TypeScript', ja: 'TypeScript' }, context: 'Default for projects', color: 'from-blue-500 to-indigo-600', desc: { en: 'Type-safe development', ja: 'タイプセーフ開発' } },
        { icon: Database, name: { en: 'MongoDB & NoSQL', ja: 'MongoDB / NoSQL' }, context: 'Data architecture', color: 'from-sky-500 to-blue-600', desc: { en: 'Flexible documents', ja: '柔軟なドキュメント' } },
        { icon: Server, name: { en: 'API Systems', ja: 'API システム' }, context: 'REST & GraphQL', color: 'from-cyan-500 to-blue-500', desc: { en: 'Robust endpoints', ja: '堅牢なエンドポイント' } },
      ],
    },
    {
      title: c.categories.seo,
      accent: 'orange',
      skills: [
        { icon: TrendingUp, name: { en: 'Programmatic SEO', ja: 'プログラマティックSEO' }, context: 'Scalable acquisition', color: 'from-orange-500 to-red-500', desc: { en: 'Search-driven growth', ja: '検索主導の成長' } },
        { icon: Layout, name: { en: 'Content Systems', ja: 'コンテンツシステム' }, context: 'Used in Distrya', color: 'from-amber-400 to-orange-500', desc: { en: 'Publishing workflows', ja: '公開ワークフロー' } },
        { icon: Search, name: { en: 'Technical SEO', ja: 'テクニカルSEO' }, context: 'Platform visibility', color: 'from-red-400 to-rose-500', desc: { en: 'Architecture optimization', ja: 'アーキテクチャ最適化' } },
        { icon: Zap, name: { en: 'Performance Optimization', ja: 'パフォーマンス最適化' }, context: 'Core Web Vitals', color: 'from-yellow-500 to-orange-500', desc: { en: 'Fast load times', ja: '高速な読み込み' } },
      ],
    },
    {
      title: c.categories.infrastructure,
      accent: 'rose',
      skills: [
        { icon: Layers, name: { en: 'Scalable Architecture', ja: 'スケーラブルアーキテクチャ' }, context: 'Cloud foundation', color: 'from-rose-500 to-pink-600', desc: { en: 'System design', ja: 'システム設計' } },
        { icon: Terminal, name: { en: 'Deployment Pipelines', ja: '展開パイプライン' }, context: 'CI/CD flows', color: 'from-pink-500 to-rose-400', desc: { en: 'Automated delivery', ja: '自動化された配信' } },
        { icon: Database, name: { en: 'Database Design', ja: 'データベース設計' }, context: 'Schema strategy', color: 'from-fuchsia-500 to-pink-500', desc: { en: 'Efficient queries', ja: '効率的なクエリ' } },
        { icon: Cloud, name: { en: 'Cloud Workflows', ja: 'クラウドワークフロー' }, context: 'AWS, Vercel', color: 'from-red-500 to-rose-600', desc: { en: 'Modern hosting', ja: 'モダンなホスティング' } },
      ],
    },
  ];

  const accentMap: Record<string, string> = {
    teal: 'bg-teal-50 dark:bg-teal-950/40 border-teal-100 dark:border-teal-900/50 text-teal-700 dark:text-teal-300',
    blue: 'bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900/50 text-blue-700 dark:text-blue-300',
    purple: 'bg-purple-50 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900/50 text-purple-700 dark:text-purple-300',
    rose: 'bg-rose-50 dark:bg-rose-950/40 border-rose-100 dark:border-rose-900/50 text-rose-700 dark:text-rose-300',
    orange: 'bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900/50 text-orange-700 dark:text-orange-300',
  };

  return (
    <section id="skills" className="py-28 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-100/30 dark:bg-teal-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            {c.title}
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{c.subtitle}</p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, ci) => (
            <div key={ci} className="space-y-6">
              {/* Category header */}
              <div className="flex items-center gap-4">
                <h3 className={`text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full border ${accentMap[category.accent]}`}>
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {category.skills.map((skill, si) => (
                  <div
                    key={si}
                    className="group relative bg-white dark:bg-gray-800/80 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700/60 overflow-hidden"
                  >
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <skill.icon className="text-white" size={22} />
                    </div>

                    {/* Name */}
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-blue-600 transition-all duration-300">
                      {skill.name[language]}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                      {skill.desc[language]}
                    </p>

                    {/* Context string instead of progress bar */}
                    <div>
                      <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-100 dark:border-gray-700">
                        <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                          {c.context}
                        </span>
                        <span className="text-[11px] font-bold text-gray-700 dark:text-gray-300">
                          {skill.context}
                        </span>
                      </div>
                    </div>

                    {/* Hover border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-200 dark:group-hover:border-teal-800/60 rounded-2xl transition-all duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-950/30 rounded-2xl border border-gray-200 dark:border-gray-700">
            <Zap className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
            <p className="text-base text-gray-600 dark:text-gray-300 font-medium">{c.learning}</p>
          </div>
        </div>
      </div>
    </section>
  );
}