'use client';

import { Download, Code2, Rocket, Heart, MapPin, Calendar, Award, Users, BookOpen, Coffee, Sparkles } from 'lucide-react';
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
      description: `I'm a passionate Full-Stack Developer with over 3 years of experience crafting digital solutions that make a difference. My journey in web development started with curiosity and has evolved into a career dedicated to creating exceptional user experiences.

I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and modern frameworks like Next.js. My approach combines technical expertise with creative problem-solving to build scalable, performant applications that solve real-world challenges.

When I'm not coding, you'll find me contributing to open-source projects, exploring new technologies, writing technical blogs, or mentoring aspiring developers. I believe in continuous learning and staying at the forefront of web development trends.`,
      downloadCV: 'Download Resume',
      experience: 'Years Experience',
      projectsCompleted: 'Projects Completed',
      happyClients: 'Happy Clients',
      codeCommits: 'Code Commits',
      location: 'Based in Osaka, Japan',
      availability: 'Coding is fun',
      education: 'Computer Science Graduate',
      passion: 'Clean Code Advocate',
      currentFocus: 'Currently focused on building scalable web applications with Next.js 14 and TypeScript',
      philosophy: 'I believe in writing code that not only works but is maintainable, scalable, and a joy to work with.',
      professional: 'Professional',
      developer: 'Developer'
    },
    ja: {
      title: '私について',
      subtitle: 'コードの背後にあるストーリー',
      description: `私は3年以上の経験を持つ情熱的なフルスタック開発者で、変化をもたらすデジタルソリューションを創り上げています。Web開発への旅は好奇心から始まり、卓越したユーザー体験を創造することに専念するキャリアへと進化しました。

MERNスタック（MongoDB、Express.js、React、Node.js）とNext.jsのようなモダンフレームワークを専門としています。私のアプローチは、技術的専門知識と創造的問題解決を組み合わせ、実際の課題を解決するスケーラブルで高性能なアプリケーションを構築することです。

コーディングをしていないときは、オープンソースプロジェクトへの貢献、新しい技術の探求、技術ブログの執筆、または志望する開発者のメンタリングを行っています。継続的な学習とWeb開発トレンドの最先端にいることを信じています。`,
      downloadCV: '履歴書をダウンロード',
      experience: '年の経験',
      projectsCompleted: '完了プロジェクト',
      happyClients: '満足なクライアント',
      codeCommits: 'コードコミット',
      location: '大阪、日本',
      availability: 'Coding is fun',
      education: 'コンピューターサイエンス卒業',
      passion: 'クリーンコード提唱者',
      currentFocus: '現在はNext.js 14とTypeScriptを使用したスケーラブルなWebアプリケーションの構築に注力しています',
      philosophy: '単に動作するだけでなく、保守性が高く、スケーラブルで、作業が楽しいコードを書くことを信じています。',
      professional: 'プロフェッショナル',
      developer: '開発者'
    }
  };

  const stats = [
    { number: '3+', label: content[language].experience, icon: Calendar, color: 'from-blue-500 to-cyan-500' },
    { number: '10+', label: content[language].projectsCompleted, icon: Rocket, color: 'from-purple-500 to-pink-500' },
    { number: '20+', label: content[language].happyClients, icon: Users, color: 'from-green-500 to-teal-500' },
    { number: '2K+', label: content[language].codeCommits, icon: Code2, color: 'from-orange-500 to-red-500' }
  ];

  const personalInfo = [
    { icon: MapPin, text: content[language].location },
    { icon: Award, text: content[language].education },
    { icon: Coffee, text: content[language].availability },
    { icon: Heart, text: content[language].passion }
  ];

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/suman-basnet-resume.pdf';
    link.download = `Suman-Basnet-Resume-${language.toUpperCase()}.pdf`;
    link.click();
  };

  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100/30 dark:bg-teal-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100/20 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Photos - Before/After Style */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-3xl blur-xl opacity-30"></div>
              
              {/* Main Container */}
              <div className="relative flex items-center justify-center min-h-[400px]">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('/coding.jpg')] bg-cover bg-center rounded-3xl shadow-inner"></div>
                
                {/* Professional Image */}
                <div className="relative z-20 transform -rotate-3 hover:rotate-0 transition-all duration-500 group">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                    <ImageWithFallback
                      src="/my-image-2.jpg"
                      alt="Suman Basnet - Professional Headshot"
                      className="w-64 h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-lg border border-gray-200 dark:border-gray-600">
                    {content[language].professional}
                  </div>
                </div>
                
                {/* Coding Image */}
                <div className="absolute z-10 -left-4 top-1/2 -translate-y-1/2 transform rotate-6 hover:rotate-0 transition-all duration-500 group">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                    <ImageWithFallback
                      src="/suman3.jpg"
                      alt="Suman Basnet - Coding Session"
                      className="w-56 h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -bottom-3 -left-3 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-lg border border-gray-200 dark:border-gray-600">
                    {content[language].developer}
                  </div>
                </div>

                {/* Connecting Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-ping"></div>
                </div>
              </div>
              
              {/* Availability Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {content[language].availability}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 order-1 lg:order-2">
            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {content[language].description}
              </p>
              
              {/* Current Focus */}
              <div className="p-4 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-xl border border-teal-100 dark:border-teal-800">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {content[language].currentFocus}
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-800">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    {content[language].philosophy}
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <info.icon className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                    {info.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100 dark:border-gray-700"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="text-white" size={20} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button 
              onClick={downloadCV}
              className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-full px-8 py-6 shadow-lg shadow-teal-600/30 hover:shadow-teal-600/50 transition-all duration-300 transform hover:-translate-y-1 font-semibold group"
            >
              <Download className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              {content[language].downloadCV}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}