'use client';

import {
  Code2, Database, Palette, GitBranch, Layers, Globe, Boxes, Smartphone,
  Workflow, Blocks, Cpu, Server, Zap, Shield, Terminal,
} from 'lucide-react';
import { Language } from '@/types/language';

interface SkillsProps {
  language: Language;
}

export function Skills({ language }: SkillsProps) {
  const content = {
    en: {
      title: 'Technical Expertise',
      subtitle: 'Comprehensive toolkit for building modern, scalable applications',
      proficiency: 'Proficiency',
      categories: {
        frontend: 'Frontend Development',
        backend: 'Backend Development',
        tools: 'Tools & DevOps',
        design: 'UI/UX & Design',
      },
      learning: 'Continuously learning and adapting to new technologies and best practices.',
    },
    ja: {
      title: '技術専門知識',
      subtitle: 'モダンでスケーラブルなアプリケーション構築のための包括的なツールキット',
      proficiency: '習熟度',
      categories: {
        frontend: 'フロントエンド開発',
        backend: 'バックエンド開発',
        tools: 'ツール & DevOps',
        design: 'UI/UX & デザイン',
      },
      learning: '新しい技術とベストプラクティスを継続的に学習し、適応しています。',
    },
  };

  const c = content[language];

  const skillCategories = [
    {
      title: c.categories.frontend,
      accent: 'teal',
      skills: [
        { icon: Code2, name: { en: 'HTML5 & CSS3', ja: 'HTML5 & CSS3' }, level: 95, color: 'from-orange-500 to-red-500', desc: { en: 'Semantic markup & modern CSS', ja: 'セマンティックマークアップとモダンCSS' } },
        { icon: Code2, name: { en: 'TypeScript', ja: 'TypeScript' }, level: 90, color: 'from-blue-500 to-indigo-600', desc: { en: 'Type-safe JavaScript development', ja: 'タイプセーフなJavaScript開発' } },
        { icon: Blocks, name: { en: 'React.js', ja: 'React.js' }, level: 92, color: 'from-cyan-400 to-blue-500', desc: { en: 'Component-based architecture', ja: 'コンポーネントベースアーキテクチャ' } },
        { icon: Globe, name: { en: 'Next.js 14', ja: 'Next.js 14' }, level: 88, color: 'from-slate-700 to-slate-900', desc: { en: 'Full-stack React framework', ja: 'フルスタックReactフレームワーク' } },
        { icon: Layers, name: { en: 'Tailwind CSS', ja: 'Tailwind CSS' }, level: 94, color: 'from-teal-400 to-cyan-500', desc: { en: 'Utility-first CSS framework', ja: 'ユーティリティファーストCSSフレームワーク' } },
      ],
    },
    {
      title: c.categories.backend,
      accent: 'blue',
      skills: [
        { icon: Workflow, name: { en: 'Node.js', ja: 'Node.js' }, level: 85, color: 'from-green-500 to-emerald-600', desc: { en: 'Server-side JavaScript runtime', ja: 'サーバーサイドJavaScriptランタイム' } },
        { icon: Database, name: { en: 'MongoDB', ja: 'MongoDB' }, level: 82, color: 'from-green-600 to-teal-700', desc: { en: 'NoSQL database management', ja: 'NoSQLデータベース管理' } },
        { icon: Server, name: { en: 'Express.js', ja: 'Express.js' }, level: 80, color: 'from-gray-500 to-gray-700', desc: { en: 'Web application framework', ja: 'Webアプリケーションフレームワーク' } },
        { icon: Shield, name: { en: 'RESTful APIs', ja: 'RESTful API' }, level: 88, color: 'from-purple-500 to-pink-500', desc: { en: 'API design & development', ja: 'API設計と開発' } },
      ],
    },
    {
      title: c.categories.tools,
      accent: 'purple',
      skills: [
        { icon: GitBranch, name: { en: 'Git & GitHub', ja: 'Git & GitHub' }, level: 90, color: 'from-orange-500 to-red-600', desc: { en: 'Version control & collaboration', ja: 'バージョン管理とコラボレーション' } },
        { icon: Terminal, name: { en: 'CLI & DevOps', ja: 'CLI & DevOps' }, level: 75, color: 'from-gray-500 to-gray-700', desc: { en: 'Command line & deployment', ja: 'コマンドラインとデプロイメント' } },
        { icon: Zap, name: { en: 'Vercel & Netlify', ja: 'Vercel & Netlify' }, level: 85, color: 'from-yellow-500 to-orange-500', desc: { en: 'Modern deployment platforms', ja: 'モダンデプロイメントプラットフォーム' } },
      ],
    },
    {
      title: c.categories.design,
      accent: 'rose',
      skills: [
        { icon: Palette, name: { en: 'UI/UX Design', ja: 'UI/UX デザイン' }, level: 78, color: 'from-purple-400 to-pink-500', desc: { en: 'User interface & experience design', ja: 'ユーザーインターフェースと体験設計' } },
        { icon: Smartphone, name: { en: 'Responsive Design', ja: 'レスポンシブデザイン' }, level: 95, color: 'from-indigo-400 to-purple-500', desc: { en: 'Mobile-first responsive layouts', ja: 'モバイルファーストレスポンシブレイアウト' } },
        { icon: Cpu, name: { en: 'Figma & Adobe XD', ja: 'Figma & Adobe XD' }, level: 70, color: 'from-pink-500 to-rose-500', desc: { en: 'Design prototyping tools', ja: 'デザインプロトタイピングツール' } },
      ],
    },
  ];

  const accentMap: Record<string, string> = {
    teal: 'bg-teal-50 dark:bg-teal-950/40 border-teal-100 dark:border-teal-900/50 text-teal-700 dark:text-teal-300',
    blue: 'bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900/50 text-blue-700 dark:text-blue-300',
    purple: 'bg-purple-50 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900/50 text-purple-700 dark:text-purple-300',
    rose: 'bg-rose-50 dark:bg-rose-950/40 border-rose-100 dark:border-rose-900/50 text-rose-700 dark:text-rose-300',
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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

                    {/* Progress bar */}
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                          {c.proficiency}
                        </span>
                        <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full bg-gradient-to-r ${skill.color}`}
                          style={{ width: `${skill.level}%` }}
                        />
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