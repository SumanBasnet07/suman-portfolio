'use client';

import { ArrowRight, Download, Sparkles, Code, Globe, Server } from 'lucide-react';
import { Button } from './ui/button';
import { Language } from '@/app/page';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  language: Language;
}

export function Hero({ language }: HeroProps) {
  const content = {
    en: {
      greeting: "Hi, I'm Suman Basnet 👋",
      headline: 'Full-Stack Developer & Digital Craftsman',
      subheadline: 'I transform complex problems into elegant, high-performance web solutions. Specializing in MERN Stack & Next.js, I build scalable applications that deliver exceptional user experiences.',
      viewProjects: 'Explore My Work',
      contactMe: 'Let\'s Connect',
      downloadCV: 'Download CV',
      stats: [
        { value: '50+', label: 'Projects Completed' },
        { value: '3+', label: 'Years Experience' },
        { value: '100%', label: 'Client Satisfaction' }
      ],
      techStack: 'MERN • Next.js • TypeScript • Tailwind'
    },
    jp: {
      greeting: 'こんにちは、スマン・バスネットです 👋',
      headline: 'フルスタック開発者 & デジタルクリエイター',
      subheadline: '複雑な問題をエレガントで高性能なWebソリューションに変えます。MERNスタックとNext.jsを専門とし、卓越したユーザー体験を提供するスケーラブルなアプリケーションを構築します。',
      viewProjects: '作品を見る',
      contactMe: 'コンタクト',
      downloadCV: '履歴書をダウンロード',
      stats: [
        { value: '50+', label: '完成プロジェクト' },
        { value: '3+', label: '年の経験' },
        { value: '100%', label: '顧客満足度' }
      ],
      techStack: 'MERN • Next.js • TypeScript • Tailwind'
    }
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-suman-basnet.pdf';
    link.download = 'Suman-Basnet-CV.pdf';
    link.click();
  };

  const currentContent = content[language];

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-20 pb-28 px-6 bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30 dark:from-gray-900 dark:via-gray-800/90 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern - Light Mode */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(94,234,212,0.05)_25%,rgba(94,234,212,0.05)_50%,transparent_50%,transparent_75%,rgba(94,234,212,0.05)_75%)] bg-[length:20px_20px] dark:opacity-0"></div>
      
      {/* Background Pattern - Dark Mode */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_50%,transparent_50%,transparent_75%,rgba(59,130,246,0.05)_75%)] bg-[length:20px_20px] opacity-0 dark:opacity-100"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl animate-pulse dark:bg-teal-600/10"></div>
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse dark:bg-blue-600/10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl animate-pulse dark:bg-purple-600/5"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
              <p className="text-teal-600 dark:text-teal-400 font-medium tracking-wide text-lg">
                {currentContent.greeting}
              </p>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {currentContent.headline.split('&')[0]}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 dark:from-teal-400 dark:via-blue-400 dark:to-purple-400">
                  {currentContent.headline.split('&')[1]}
                  <Sparkles className="inline w-8 h-8 mb-2 ml-2" />
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                {currentContent.subheadline}
              </p>

              {/* Tech Stack */}
              <div className="flex items-center gap-3 py-4">
                <Server className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                <span className="text-lg font-mono text-gray-700 dark:text-gray-300">
                  {currentContent.techStack}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8 py-6 border-y border-gray-200 dark:border-gray-700">
              {currentContent.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-full px-8 py-6 shadow-lg shadow-teal-600/30 hover:shadow-teal-600/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 font-semibold"
              >
                <Code className="mr-2" size={20} />
                {currentContent.viewProjects}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-teal-600 dark:hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/20 hover:text-teal-600 dark:hover:text-teal-400 rounded-full px-8 py-6 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
              >
                <Globe className="mr-2" size={20} />
                {currentContent.contactMe}
              </Button>

              <Button
                onClick={downloadCV}
                variant="ghost"
                className="rounded-full px-8 py-6 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-semibold"
              >
                <Download className="mr-2" size={20} />
                {currentContent.downloadCV}
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-20 animate-pulse dark:opacity-30"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-400/30 to-blue-500/30 rounded-3xl blur-xl opacity-30 dark:opacity-20"></div>
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/20 dark:shadow-teal-400/10 border-4 border-white dark:border-gray-800 transform hover:scale-105 transition-transform duration-500 group">
                <ImageWithFallback
                  src="/my-image.png"
                  alt="Suman Basnet - Full Stack Developer"
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Available for work
                    </span>
                  </div>
                </div>

                {/* Next.js Badge */}
                <div className="absolute top-6 right-6 bg-black/80 dark:bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-xs font-bold text-white dark:text-gray-900">
                      Next.js
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl dark:bg-teal-400/10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl dark:bg-blue-400/10"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-purple-500/10 rounded-full blur-lg dark:bg-purple-400/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}