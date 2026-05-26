'use client';

import {
  Download, Code2, Rocket, Heart, MapPin, Calendar, Award, Users, BookOpen, Coffee, Sparkles, Building2,
} from 'lucide-react';
import { Button } from './ui/button';
import { Language } from '@/types/language';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutProps {
  language: Language;
}

export function About({ language }: AboutProps) {
  const content = {
    en: {
      title: 'About Me',
      subtitle: 'The story behind the code',
      description: `I’m a product-focused full-stack engineer interested in building scalable digital systems and AI-powered web platforms.

Currently, I’m exploring how localized software and automation can improve digital adoption for businesses in Nepal through projects like HamroLink.

I enjoy combining product thinking, engineering, and user-focused design to create practical solutions.`,
      downloadCV: 'Download Resume',
      experience: 'Years Experience',
      projectsCompleted: 'Products Shipped',
      happyClients: 'Businesses Reached',
      codeCommits: 'Private Commits',
      location: 'Osaka, Japan',
      availability: 'Building for Nepal',
      education: 'Systems Thinker',
      passion: 'Product Strategy',
      hamrolinkTag: 'Founder · HamroLink Digital',
      interestedInTitle: 'What I’m Interested In',
      interestedIn: [
        'Product Engineering',
        'SaaS Systems',
        'AI-Assisted UX',
        'Scalable Infrastructure',
        'Localization & Digital Adoption',
        'Full-Stack Development'
      ],
      professional: 'Product Engineer',
      developer: 'Builder',
    },
    ja: {
      title: '私について',
      subtitle: 'コードの背後にあるストーリー',
      description: `私は、スケーラブルなデジタルシステムやAI搭載のWebプラットフォームの構築に関心を持つ、製品重視のフルスタックエンジニアです。
      
現在、HamroLinkのようなプロジェクトを通じて、ローカライズされたソフトウェアと自動化がネパールのビジネスのデジタル導入をどのように改善できるかを探求しています。

製品思考、エンジニアリング、ユーザー中心のデザインを組み合わせて、実践的なソリューションを生み出すことを楽しんでいます。`,
      downloadCV: '履歴書をダウンロード',
      experience: '年の経験',
      projectsCompleted: '出荷製品',
      happyClients: '到達企業数',
      codeCommits: 'プライベートコミット',
      location: '大阪、日本',
      availability: 'ネパール向けに構築',
      education: 'システム思考者',
      passion: '製品戦略',
      hamrolinkTag: '創設者 · HamroLink Digital',
      interestedInTitle: '関心があること',
      interestedIn: [
        '製品エンジニアリング',
        'SaaSシステム',
        'AI支援UX',
        'スケーラブルなインフラ',
        'ローカリゼーションとデジタル導入',
        'フルスタック開発'
      ],
      professional: 'プロダクトエンジニア',
      developer: 'ビルダー',
    },
  };

  const c = content[language];

  const stats = [
    { number: '3+', label: c.experience, icon: Calendar, color: 'from-blue-500 to-cyan-500' },
    { number: '10+', label: c.projectsCompleted, icon: Rocket, color: 'from-purple-500 to-pink-500' },
    { number: '20+', label: c.happyClients, icon: Users, color: 'from-green-500 to-teal-500' },
    { number: '2K+', label: c.codeCommits, icon: Code2, color: 'from-orange-500 to-red-500' },
  ];

  const personalInfo = [
    { icon: MapPin, text: c.location },
    { icon: Award, text: c.education },
    { icon: Coffee, text: c.availability },
    { icon: Heart, text: c.passion },
    { icon: Building2, text: c.hamrolinkTag },
  ];

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/suman-basnet-resume.pdf';
    link.download = `Suman-Basnet-Resume-${language.toUpperCase()}.pdf`;
    link.click();
  };

  return (
    <section id="about" className="py-28 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100/30 dark:bg-teal-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            {c.title}
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{c.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Profile Photos */}
          <div className="relative order-2 lg:order-1 h-full">
            <div className="sticky top-32 relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-20 animate-pulse" />

              <div className="relative flex items-center justify-center min-h-[420px]">
                <div className="absolute inset-0 bg-[url('/coding.jpg')] bg-cover bg-center rounded-3xl shadow-inner opacity-60 dark:opacity-40" />

                {/* Main professional image */}
                <div className="relative z-20 transform -rotate-2 hover:rotate-0 transition-all duration-500 group">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                    <ImageWithFallback
                      src="/my-image-2.png"
                      alt="Suman Basnet - Professional Headshot"
                      className="w-64 h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full text-xs font-bold text-gray-700 dark:text-gray-300 shadow-lg border border-gray-200 dark:border-gray-600">
                    {c.professional}
                  </div>
                </div>

                {/* Secondary coding image */}
                <div className="absolute z-10 -left-4 top-1/2 -translate-y-1/2 transform rotate-5 hover:rotate-0 transition-all duration-500 group">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                    <ImageWithFallback
                      src="/suman4.png"
                      alt="Suman Basnet - Coding Session"
                      className="w-52 h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-3 -left-3 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full text-xs font-bold text-gray-700 dark:text-gray-300 shadow-lg border border-gray-200 dark:border-gray-600">
                    {c.developer}
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5">
                  <div className="w-3 h-3 bg-teal-500 rounded-full animate-ping" />
                </div>
              </div>

              {/* Availability badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full px-5 py-2.5 shadow-xl border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{c.availability}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-7 order-1 lg:order-2">
            {/* Description */}
            <div className="space-y-5">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {c.description}
              </p>

              {/* What I'm Interested In */}
              <div className="pt-4">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">{c.interestedInTitle}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {c.interestedIn.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width content section */}
        <div className="w-full space-y-12 border-t border-gray-100 dark:border-gray-800 pt-12">
          {/* Personal info */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {personalInfo.map((info, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3.5 rounded-xl transition-colors duration-300 ${
                    info.icon === Building2
                      ? 'bg-blue-50 dark:bg-blue-950/20 hover:bg-blue-100 dark:hover:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 col-span-2 md:col-span-1'
                      : 'bg-gray-50 dark:bg-gray-800/60 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700/60'
                  }`}
                >
                  <info.icon className={`w-4 h-4 flex-shrink-0 ${info.icon === Building2 ? 'text-blue-600 dark:text-blue-400' : 'text-teal-600 dark:text-teal-400'}`} />
                  <span className={`text-sm font-semibold ${info.icon === Building2 ? 'text-blue-700 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}>
                    {info.text}
                  </span>
                </div>
              ))}
            </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Stats */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-5 bg-gray-50 dark:bg-gray-800/60 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100 dark:border-gray-700/60"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <stat.icon className="text-white" size={20} />
                  </div>
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">{stat.number}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold leading-tight uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Download CTA */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-end">
              <Button
                onClick={downloadCV}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-2xl px-8 py-7 shadow-xl shadow-teal-600/25 hover:shadow-teal-600/40 transition-all duration-300 hover:-translate-y-1 font-bold group w-full sm:w-auto text-lg"
              >
                <Download className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                {c.downloadCV}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}