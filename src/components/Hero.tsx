'use client';

import { ArrowRight, Download, Sparkles, Code, Globe, Server, ExternalLink, Zap, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Language } from '@/types/language';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  language: Language;
}

export function Hero({ language }: HeroProps) {
  const content = {
    en: {
      greeting: "Hi, I'm Suman Basnet 👋",
      headline: 'Product Engineer',
      headlineAccent: '& SaaS Builder',
      subheadline:
        'Building scalable AI-powered web systems and exploring localized digital infrastructure for Nepalese businesses.',
      viewProjects: 'View My Work',
      contactMe: "Let's Connect",
      downloadCV: 'Download CV',
      stats: [
        { value: '5+', label: 'SaaS Systems Built' },
        { value: '10+', label: 'AI Workflow Projects' },
        { value: '20+', label: 'Product Experiments' },
      ],
      techStack: 'Product Strategy • AI Workflows • SaaS Architecture',
      hamrolinkBadge: 'Product Engineer',
      hamrolinkHeadline: 'Building HamroLink — AI website builder for Nepali SMEs',
      hamrolinkSub: 'Used by 10+ businesses',
      hamrolinkCTA: 'View Platform',
      hamrolinkPricing: 'See Pricing',
      hamrolinkPriceHint: 'NPR 199/mo',
      notAvailable: 'Not Available for work',
    },
    ja: {
      greeting: 'こんにちは、バスネット・スーマンです 👋',
      headline: 'プロダクトエンジニア',
      headlineAccent: '& SaaSビルダー',
      subheadline:
        'スケーラブルなAI搭載ウェブシステムを構築し、ネパールのビジネス向けのローカライズされたデジタルインフラを探求しています。',
      viewProjects: 'プロジェクトを見る',
      contactMe: 'コンタクト',
      downloadCV: '履歴書をダウンロード',
      stats: [
        { value: '5+', label: '構築したSaaS' },
        { value: '10+', label: 'AIプロジェクト' },
        { value: '20+', label: '製品実験' },
      ],
      techStack: 'Product Strategy • AI Workflows • SaaS Architecture',
      hamrolinkBadge: 'プロダクトエンジニア',
      hamrolinkHeadline: 'HamroLink構築中 — ネパールSME向けAIウェブサイトビルダー',
      hamrolinkSub: '10社以上の企業が利用',
      hamrolinkCTA: 'プラットフォームを見る',
      hamrolinkPricing: '料金を見る',
      hamrolinkPriceHint: 'NPR 199/月',
      notAvailable: '現在求職中ではありません',
    },
  };

  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-suman-basnet.pdf';
    link.download = 'Suman-Basnet-CV.pdf';
    link.click();
  };

  const c = content[language];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-24 bg-gradient-to-br from-white via-blue-50/40 to-teal-50/40 dark:from-gray-950 dark:via-gray-900/90 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Mesh background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(20,184,166,0.12),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_20%_50%,rgba(20,184,166,0.07),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.1),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_80%_20%,rgba(59,130,246,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_80%,rgba(139,92,246,0.07),transparent_60%)]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* ── HamroLink announcement banner ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mb-10">
        <div className="relative group rounded-2xl overflow-hidden border border-blue-200/60 dark:border-blue-800/40 bg-gradient-to-r from-blue-50 via-teal-50 to-blue-50 dark:from-blue-950/40 dark:via-teal-950/40 dark:to-blue-950/40 shadow-lg shadow-blue-100/50 dark:shadow-blue-950/30">
          {/* Animated left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-teal-500 to-blue-500 rounded-l-2xl" />

          <div className="pl-6 pr-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Badge + text */}
            <div className="flex items-start sm:items-center gap-3 flex-1 min-w-0 flex-wrap">
              <span className="flex-shrink-0 inline-flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-[10px] font-bold tracking-widest uppercase rounded-full shadow-sm">
                <Sparkles className="w-2.5 h-2.5" />
                {c.hamrolinkBadge}
              </span>
              <div className="min-w-0">
                <p className="text-xs sm:text-base font-bold text-gray-900 dark:text-white leading-snug truncate">
                  {c.hamrolinkHeadline}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {c.hamrolinkSub}
                  <span className="ml-2 font-semibold text-teal-600 dark:text-teal-400">{c.hamrolinkPriceHint}</span>
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href="https://hamrolink.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white text-xs font-bold rounded-xl shadow-md shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Zap className="w-3 h-3" />
                {c.hamrolinkCTA}
              </a>
              <a
                href="https://hamrolink.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-300"
              >
                {c.hamrolinkPricing}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main hero ── */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce [animation-delay:0ms]" />
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:150ms]" />
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
              <p className="text-teal-600 dark:text-teal-400 font-semibold tracking-wide text-lg">
                {c.greeting}
              </p>
            </div>

            {/* Headline */}
            <div className="space-y-5">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.05] tracking-tight">
                {c.headline}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-600 to-purple-600 dark:from-teal-400 dark:via-blue-400 dark:to-purple-400">
                  {c.headlineAccent}
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                {c.subheadline}
              </p>

              {/* Tech stack pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gray-900/5 dark:bg-white/5 rounded-full border border-gray-200/60 dark:border-gray-700/60">
                <Server className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span className="text-sm font-mono text-gray-700 dark:text-gray-300">{c.techStack}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 py-6 border-y border-gray-200/70 dark:border-gray-700/70">
              {c.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-2xl px-7 py-6 shadow-xl shadow-teal-600/25 hover:shadow-teal-600/40 transition-all duration-300 hover:-translate-y-1 font-bold text-[15px]"
              >
                <Code className="mr-2" size={18} />
                {c.viewProjects}
                <ArrowRight className="ml-2" size={18} />
              </Button>

              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-950/20 hover:text-teal-700 dark:hover:text-teal-400 rounded-2xl px-7 py-6 transition-all duration-300 hover:-translate-y-1 font-bold text-[15px]"
              >
                <Globe className="mr-2" size={18} />
                {c.contactMe}
              </Button>

              <Button
                onClick={downloadCV}
                variant="ghost"
                className="rounded-2xl px-7 py-6 text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-all duration-300 font-bold text-[15px]"
              >
                <Download className="mr-2" size={18} />
                {c.downloadCV}
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              {/* Background glow rings */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-blue-500/20 to-purple-600/20 rounded-[2.5rem] blur-3xl animate-pulse" />
              <div className="absolute -inset-6 bg-gradient-to-br from-teal-400/10 to-blue-500/10 rounded-[3rem] blur-2xl" />

              {/* Image card */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-teal-500/15 dark:shadow-teal-400/10 border-4 border-white dark:border-gray-800 group transform hover:scale-[1.02] transition-all duration-500">
                <ImageWithFallback
                  src="/my-image.png"
                  alt="Suman Basnet - Full Stack Developer"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* Availability badge */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <div className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-md rounded-full px-4 py-2 shadow-xl border border-white/20 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-gray-900 dark:text-white">{c.notAvailable}</span>
                  </div>
                  <div className="bg-black/80 dark:bg-white/90 backdrop-blur-md rounded-full px-3 py-2 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-white dark:bg-gray-900 rounded-full" />
                    <span className="text-xs font-bold text-white dark:text-gray-900">Next.js</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}