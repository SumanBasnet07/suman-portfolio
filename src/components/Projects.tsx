'use client';

import {
  ExternalLink,
  ArrowUpRight,
  Star,
  Users,
  Eye,
  Zap,
  Sparkles,
  Globe,
  Building2,
  TrendingUp,
  Activity,
  FileText,
  CloudUpload,
  Plus
} from 'lucide-react';
import { Button } from './ui/button';
import { Language } from '@/types/language';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectsProps {
  language: Language;
}

export function Projects({ language }: ProjectsProps) {
  const content = {
    en: {
      title: 'Featured Projects',
      subtitle: 'A showcase of my recent work and innovative solutions',
      techUsed: 'Tech Stack',
      featured: 'Featured',
      liveDemo: 'Live Demo',
      myProduct: 'My Product',
      collaborate: 'Interested in collaborating or seeing more projects?',
      workTogether: "Let's Work Together",
      hamrolink: {
        badge: 'AI-Powered • My Startup',
        tagline: 'I built this for Nepal',
        headline: 'HamroLink — The AI Website Builder for Nepali SMEs',
        description:
          "HamroLink is my most ambitious product: an AI-powered business presence platform built specifically for Nepal's small and medium businesses — shops, restaurants, schools, freelancers. Get a stunning website, WhatsApp integration, and Google Maps listing in minutes.",
        cta1: 'Try for Free',
        cta2: 'View Pricing',
        pricing: 'From NPR 199/month',
        stat1: { val: '10+', label: 'Businesses Onboarded' },
        stat2: { val: '500+', label: 'Monthly Users' },
        stat3: { val: 'NPR 199/mo', label: 'Starting Price' },
      },
    },
    ja: {
      title: '主なプロジェクト',
      subtitle: '最近の作品と革新的なソリューションの展示',
      techUsed: '使用技術',
      featured: '注目',
      liveDemo: 'ライブデモ',
      myProduct: '自社製品',
      collaborate: 'コラボレーションや他のプロジェクトにも興味がありますか？',
      workTogether: '一緒に働きましょう',
      hamrolink: {
        badge: 'AI搭載 • 自社スタートアップ',
        tagline: 'ネパールのために作りました',
        headline: 'HamroLink — ネパールSME向けAIウェブサイトビルダー',
        description:
          'HamroLinkは私の最も野心的な製品です。ネパールの中小企業向けに構築されたAI搭載のビジネスプレゼンスプラットフォーム。数分で素晴らしいウェブサイト、WhatsApp統合、Googleマップリスティングを取得できます。',
        cta1: '無料で試す',
        cta2: '料金を見る',
        pricing: 'NPR 199/月〜',
        stat1: { val: '10+', label: '導入企業' },
        stat2: { val: '500+', label: '月間ユーザー' },
        stat3: { val: 'NPR 199/月', label: '開始価格' },
      },
    },
  };

  const projects = [
    {
      title: { en: 'Distrya Blog & Tools', ja: 'Distrya ブログとツール' },
      description: {
        en: 'A modern blog and tools platform featuring AI-powered content, dynamic categories, SEO-optimized articles, utilities, and a seamless reading experience.',
        ja: 'AI搭載コンテンツ、動的カテゴリー、SEO最適化記事、便利ツール、スムーズな閲覧体験を備えた最新のブログ・ツールプラットフォーム。',
      },
      image: '/distrya-logo.png',
      tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'NextAuth', 'TypeScript'],
      liveUrl: 'https://distrya.com',
      featured: true,
      stats: { stars: 210, users: 5400, views: 32000 },
      accent: 'from-violet-500 to-purple-600',
    },
    {
      title: { en: 'AI Resume Generator', ja: 'AI履歴書ビルダー' },
      description: {
        en: 'A smart tool that leverages AI to generate professional, tailored resumes instantly. Features ATS optimization and modern templates.',
        ja: 'AIを活用してプロフェッショナルな履歴書を即座に生成するスマートツール。ATS最適化とモダンなテンプレートを備えています。',
      },
      image: '/og-resume-generator.png',
      tech: ['Next.js', 'OpenAI', 'Tailwind CSS', 'TypeScript'],
      liveUrl: 'https://distrya.com/tools/ai-resume-generator',
      featured: true,
      stats: { stars: 124, users: 3100, views: 18000 },
      accent: 'from-blue-500 to-indigo-500',
    },
    {
      title: { en: 'Mirai Language Institute', ja: '未来語学学院' },
      description: {
        en: 'Comprehensive abroad study consultancy platform with course management, student enrollment, and progress tracking.',
        ja: 'コース管理、生徒登録、進捗追跡を備えた包括的な留学コンサルタントプラットフォーム。',
      },
      image: 'https://mirai.info.np/img/mirai-circle.png',
      tech: ['HTML', 'CSS', 'Framer Motion', 'JavaScript', 'Vercel'],
      liveUrl: 'https://mirai.info.np',
      featured: true,
      stats: { stars: 41, users: 1200, views: 6000 },
      accent: 'from-emerald-500 to-teal-600',
    },
    {
      title: { en: 'The Bichar Buzz', ja: 'TheBicharBuzz ブログ' },
      description: {
        en: 'A fast, minimal, and engaging news & article platform delivering trending stories, opinions, culture updates, and daily informative content.',
        ja: 'トレンドニュース、意見記事、カルチャー更新、日々の有益なコンテンツを提供する高速でミニマルなプラットフォーム。',
      },
      image: '/bicharbuzz.png',
      tech: ['MERN', 'Tailwind CSS', 'MDX', 'TypeScript', 'SEO'],
      liveUrl: 'https://bicharbuzz.hamrolink.com/',
      featured: true,
      stats: { stars: 165, users: 4800, views: 29000 },
      accent: 'from-rose-500 to-pink-600',
    },
  ];

  const h = content[language].hamrolink;
  const c = content[language];

  return (
    <section id="projects" className="py-28 px-6 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/20 dark:bg-teal-900/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            {c.title}
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{c.subtitle}</p>
        </div>

        {/* ── HamroLink Hero Card ── */}
        <div className="mb-12 relative rounded-3xl overflow-hidden border border-blue-200/50 dark:border-blue-900/30 shadow-2xl shadow-blue-100/40 dark:shadow-blue-950/20">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-teal-50/80 to-blue-50 dark:from-gray-900 dark:via-blue-950/30 dark:to-teal-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(59,130,246,0.15),transparent_60%)]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-teal-500/10 rounded-full blur-3xl" />

          {/* Decorative pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative z-10 grid lg:grid-cols-5 gap-0">
            {/* Left content - 3 cols */}
            <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-between">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-xs font-bold rounded-full shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  {h.badge}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 dark:bg-gray-800/80 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
                  <Globe className="w-3 h-3" />
                  {h.tagline}
                </span>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
                  {h.headline}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-lg">
                  {h.description}
                </p>

                {/* Mini stats */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {[h.stat1, h.stat2, h.stat3].map((stat, i) => (
                    <div
                      key={i}
                      className="flex flex-col px-4 py-3 bg-white/70 dark:bg-gray-800/50 rounded-2xl border border-blue-100 dark:border-blue-900/40 backdrop-blur-sm"
                    >
                      <span className="text-xl font-black text-gray-900 dark:text-white">{stat.val}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">{stat.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'AI'].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-blue-100/70 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-semibold border border-blue-200/50 dark:border-blue-800/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://hamrolink.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 text-sm"
                  >
                    <Zap className="w-4 h-4" />
                    {h.cta1}
                  </a>
                  <a
                    href="https://hamrolink.com/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-gray-900 border-2 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-400 font-bold rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300 hover:-translate-y-1 text-sm"
                  >
                    {h.cta2}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                    {h.pricing}
                  </span>
                </div>
              </div>
            </div>

            {/* Right visual - 2 cols */}
            <div className="lg:col-span-2 relative overflow-hidden bg-[#fafafa] dark:bg-gray-900 flex flex-col pt-6 px-6 pb-0 rounded-r-[1.5rem] border-l border-blue-100/50 dark:border-blue-900/30 shadow-inner">
              
              {/* The dashboard mockup container */}
              <div className="flex-1 w-full bg-[#f8fafc] dark:bg-gray-950 rounded-t-2xl shadow-xl border-x border-t border-gray-200/60 dark:border-gray-800 overflow-hidden flex flex-col relative select-none">
                
                {/* Dashboard Header */}
                <div className="px-5 pt-5 pb-4">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1 tracking-tight">Welcome back, Suman!</h4>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">Here's what's happening with your websites today</p>
                </div>

                {/* 4 Cards Grid */}
                <div className="px-5 grid grid-cols-2 gap-3 mb-5">
                  {/* Card 1: Total Visits */}
                  <div className="bg-[#eef4ff] dark:bg-blue-900/20 rounded-xl p-3 flex flex-col border border-blue-100 dark:border-blue-800/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer group">
                    <div className="flex justify-between items-start mb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Activity className="w-4 h-4 text-white" />
                      </div>
                      <div className="px-2 py-0.5 bg-blue-500 text-white text-[9px] font-bold rounded-full group-hover:bg-blue-600 transition-colors">+12%</div>
                    </div>
                    <div className="text-2xl font-black text-gray-900 dark:text-white mb-0.5">0</div>
                    <div className="text-[10px] font-bold text-gray-700 dark:text-gray-300">Total Visits</div>
                    <div className="text-[8px] text-gray-500 dark:text-gray-400">Last 30 days</div>
                  </div>

                  {/* Card 2: Active Credits */}
                  <div className="bg-[#fff9eb] dark:bg-amber-900/10 rounded-xl p-3 flex flex-col border border-amber-100 dark:border-amber-900/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer group">
                    <div className="flex justify-between items-start mb-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <div className="px-2 py-0.5 border border-amber-300 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[9px] font-bold rounded-full group-hover:bg-amber-200 dark:group-hover:bg-amber-800/40 transition-colors">Available</div>
                    </div>
                    <div className="text-2xl font-black text-amber-900 dark:text-amber-100 mb-0.5">628</div>
                    <div className="text-[10px] font-bold text-gray-700 dark:text-gray-300">Active Credits</div>
                    <div className="text-[8px] text-gray-500 dark:text-gray-400">1 Credit = रू 1</div>
                  </div>

                  {/* Card 3: Total Pages */}
                  <div className="bg-[#eafff5] dark:bg-emerald-900/10 rounded-xl p-3 flex flex-col border border-emerald-100 dark:border-emerald-900/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer group">
                    <div className="flex justify-between items-start mb-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <FileText className="w-4 h-4 text-white" />
                      </div>
                      <div className="px-2 py-0.5 bg-emerald-500 text-white text-[9px] font-bold rounded-full group-hover:bg-emerald-600 transition-colors">0 created</div>
                    </div>
                    <div className="text-2xl font-black text-gray-900 dark:text-white mb-0.5">0</div>
                    <div className="text-[10px] font-bold text-gray-700 dark:text-gray-300">Total Pages</div>
                    <div className="text-[8px] text-gray-500 dark:text-gray-400">Across all sites</div>
                  </div>

                  {/* Card 4: Cloud Storage */}
                  <div className="bg-[#eef2ff] dark:bg-indigo-900/20 rounded-xl p-3 flex flex-col border border-indigo-100 dark:border-indigo-800/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer group">
                    <div className="flex justify-between items-start mb-2">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <CloudUpload className="w-4 h-4 text-white" />
                      </div>
                      <div className="px-2 py-0.5 bg-indigo-500 text-white text-[9px] font-bold rounded-full group-hover:bg-indigo-600 transition-colors">Available</div>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="relative w-9 h-9 rounded-full border-4 border-indigo-100 dark:border-indigo-900 flex items-center justify-center">
                         <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-indigo-500 border-t-transparent border-r-transparent transform -rotate-45" />
                         <span className="text-[7px] font-bold text-indigo-700 dark:text-indigo-300 relative z-10">9%</span>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-gray-900 dark:text-white mb-0.5">Cloud Storage</div>
                        <div className="text-[7px] text-gray-500 dark:text-gray-400 font-semibold">21.8 MB / 250.0 MB</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="px-5 mb-4">
                  <div className="flex items-center bg-gray-100 dark:bg-gray-800/50 p-1 rounded-xl">
                    <div className="flex-1 flex items-center justify-center gap-1.5 py-1.5 bg-blue-500 text-white rounded-lg shadow-sm">
                      <Globe className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold">My Websites</span>
                      <span className="w-3.5 h-3.5 bg-white/20 rounded-full flex items-center justify-center text-[8px]">0</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center gap-1.5 py-1.5 text-gray-500 dark:text-gray-400">
                      <FileText className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-bold">My Pages</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="flex-1 bg-white dark:bg-gray-900 mx-3 mb-3 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-start gap-2">
                       <Globe className="w-4 h-4 text-blue-500 mt-0.5" />
                       <div>
                         <h5 className="text-[13px] font-bold text-gray-900 dark:text-white leading-none mb-1">My Websites</h5>
                         <p className="text-[9px] text-gray-500 dark:text-gray-400">Manage your published sites</p>
                       </div>
                    </div>
                    <a href="https://hamrolink.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white px-3 py-2 rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group">
                      <Plus className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-300" />
                      <span className="text-[11px] font-bold leading-none">Create your own site</span>
                    </a>
                  </div>

                  <div className="flex-1 flex items-center justify-center pb-2">
                    <div className="w-14 h-14 bg-[#dffff8] dark:bg-cyan-900/30 rounded-full flex items-center justify-center">
                       <Globe className="w-6 h-6 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Other Projects Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-800 flex flex-col"
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-3 left-3 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-md">
                    <Star className="w-2.5 h-2.5 fill-current" />
                    {c.featured}
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden h-44">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                <ImageWithFallback
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Quick stats overlay */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex justify-between text-white text-[10px]">
                    <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                      <Star className="w-2.5 h-2.5" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                      <Users className="w-2.5 h-2.5" />
                      <span>{project.stats.users}+</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                      <Eye className="w-2.5 h-2.5" />
                      <span>{project.stats.views}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 space-y-3">
                <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-blue-600 transition-all duration-300 leading-snug">
                  {project.title[language]}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                  {project.description[language]}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-[10px] font-semibold border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 text-gray-400 text-[10px] font-semibold">+{project.tech.length - 3}</span>
                  )}
                </div>

                {/* CTA */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1.5 py-2.5 bg-gradient-to-r ${project.accent} text-white text-xs font-bold rounded-xl hover:opacity-90 transition-opacity duration-300 group/btn mt-auto`}
                >
                  {c.liveDemo}
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-200 dark:group-hover:border-teal-800 rounded-2xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 dark:text-gray-400 mb-5 text-base">{c.collaborate}</p>
          <Button
            className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-2xl px-8 py-6 shadow-xl shadow-teal-600/25 hover:shadow-teal-600/40 transition-all duration-300 hover:-translate-y-1 font-bold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {c.workTogether}
            <ExternalLink className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}