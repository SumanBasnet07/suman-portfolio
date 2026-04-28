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
      description: `I'm a passionate Full-Stack Developer with over 3 years of experience crafting digital solutions that make a real difference. My journey started with curiosity and has evolved into a career dedicated to exceptional user experiences.

I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and modern frameworks like Next.js 14. I also founded HamroLink Digital — an AI-powered business presence platform built for Nepal's SMEs, helping local shops and businesses go online in minutes.

When I'm not coding, you'll find me contributing to open-source, writing for Distrya, or mentoring aspiring developers.`,
      downloadCV: 'Download Resume',
      experience: 'Years Experience',
      projectsCompleted: 'Projects Completed',
      happyClients: 'Happy Clients',
      codeCommits: 'Code Commits',
      location: 'Osaka, Japan',
      availability: 'Coding is fun',
      education: 'Computer Science Graduate',
      passion: 'Clean Code Advocate',
      hamrolinkTag: 'Founder · HamroLink Digital',
      currentFocus: 'Currently focused on building HamroLink — AI-powered websites for Nepali SMEs, alongside scalable Next.js 14 applications.',
      philosophy: 'I believe in writing code that not only works but is maintainable, scalable, and a joy to work with.',
      professional: 'Professional',
      developer: 'Developer',
    },
    ja: {
      title: '私について',
      subtitle: 'コードの背後にあるストーリー',
      description: `私は3年以上の経験を持つ情熱的なフルスタック開発者で、変化をもたらすデジタルソリューションを創り上げています。Web開発への旅は好奇心から始まり、卓越したユーザー体験を創造することに専念するキャリアへと進化しました。

MERNスタックとNext.js 14を専門とし、HamroLink Digitalも創設しました。ネパールの中小企業がオンラインで存在感を示すためのAI搭載プラットフォームです。

コーディングをしていないときは、オープンソースへの貢献、Distryaへの執筆、または志望する開発者のメンタリングを行っています。`,
      downloadCV: '履歴書をダウンロード',
      experience: '年の経験',
      projectsCompleted: '完了プロジェクト',
      happyClients: '満足なクライアント',
      codeCommits: 'コードコミット',
      location: '大阪、日本',
      availability: 'Coding is fun',
      education: 'コンピューターサイエンス卒業',
      passion: 'クリーンコード提唱者',
      hamrolinkTag: '創設者 · HamroLink Digital',
      currentFocus: '現在はHamroLink（ネパールSME向けAI搭載ウェブサイト）とNext.js 14アプリの構築に注力しています。',
      philosophy: '単に動作するだけでなく、保守性が高く、スケーラブルで、作業が楽しいコードを書くことを信じています。',
      professional: 'プロフェッショナル',
      developer: '開発者',
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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Photos */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto">
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

              {/* Current focus */}
              <div className="p-5 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-950/30 dark:to-blue-950/30 rounded-2xl border border-teal-100 dark:border-teal-900/50">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{c.currentFocus}</p>
                </div>
              </div>

              {/* Philosophy */}
              <div className="p-5 bg-orange-50 dark:bg-orange-950/20 rounded-2xl border border-orange-100 dark:border-orange-900/40">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed">{c.philosophy}</p>
                </div>
              </div>
            </div>

            {/* Personal info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personalInfo.map((info, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3.5 rounded-xl transition-colors duration-300 ${
                    info.icon === Building2
                      ? 'bg-orange-50 dark:bg-orange-950/20 hover:bg-orange-100 dark:hover:bg-orange-950/40 border border-orange-100 dark:border-orange-900/40 sm:col-span-2'
                      : 'bg-gray-50 dark:bg-gray-800/60 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700/60'
                  }`}
                >
                  <info.icon className={`w-4 h-4 flex-shrink-0 ${info.icon === Building2 ? 'text-orange-500' : 'text-teal-600 dark:text-teal-400'}`} />
                  <span className={`text-sm font-semibold ${info.icon === Building2 ? 'text-orange-700 dark:text-orange-400' : 'text-gray-700 dark:text-gray-300'}`}>
                    {info.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4 bg-gray-50 dark:bg-gray-800/60 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100 dark:border-gray-700/60"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <stat.icon className="text-white" size={18} />
                  </div>
                  <div className="text-2xl font-black text-gray-900 dark:text-white mb-0.5">{stat.number}</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold leading-tight uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Download CTA */}
            <Button
              onClick={downloadCV}
              className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-2xl px-8 py-6 shadow-xl shadow-teal-600/25 hover:shadow-teal-600/40 transition-all duration-300 hover:-translate-y-1 font-bold group"
            >
              <Download className="mr-2 group-hover:scale-110 transition-transform" size={18} />
              {c.downloadCV}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}