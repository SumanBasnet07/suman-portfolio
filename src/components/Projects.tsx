'use client';

import { ExternalLink, Github, ArrowUpRight, Star, Users, Calendar, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Language } from '@/app/page';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectsProps {
  language: Language;
}

export function Projects({ language }: ProjectsProps) {
  const content = {
    en: {
      title: 'Featured Projects',
      subtitle: 'A showcase of my recent work and innovative solutions',
      viewProject: 'View Project',
      viewCode: 'View Code',
      techUsed: 'Technologies Used',
      featured: 'Featured',
      liveDemo: 'Live Demo',
      githubRepo: 'GitHub Repo'
    },
    jp: {
      title: '主なプロジェクト',
      subtitle: '最近の作品と革新的なソリューションの展示',
      viewProject: 'プロジェクトを見る',
      viewCode: 'コードを見る',
      techUsed: '使用技術',
      featured: '注目',
      liveDemo: 'ライブデモ',
      githubRepo: 'GitHubリポジトリ'
    }
  };

  const projects = [
    {
      
  title: { en: 'Distrya Blog & Tools', jp: 'Distrya ブログとツール' },
  description: {
    en: 'A modern blog and tools platform featuring AI-powered content, dynamic categories, SEO-optimized articles, utilities, and a seamless reading experience.',
    jp: 'AI搭載コンテンツ、動的カテゴリー、SEO最適化記事、便利ツール、スムーズな閲覧体験を備えた最新のブログ・ツールプラットフォーム。'
  },
  image: '/distrya-logo.png',
  tech: ['Next.js', 'Tailwind CSS', 'MongoDB', 'NextAuth', 'TypeScript'],
  githubUrl: '#',
  liveUrl: 'https://distrya.com',
  featured: true,
  stats: {
    stars: 210,
    users: 5400,
    completed: 32000
  }
},

{
  title: { en: 'Realtime Chat App', jp: 'リアルタイムチャットアプリ' },
  description: {
    en: 'Fast and secure real-time chat application with live messaging, typing indicators, online status, and group conversations.',
    jp: 'リアルタイムメッセージング、タイピングインジケーター、オンラインステータス、グループチャットに対応した高速で安全なチャットアプリ。'
  },
  image: '/chatapp.png',
  tech: ['React', 'Node.js', 'Socket.io', 'Express', 'MongoDB'],
  githubUrl: '#',
  liveUrl: 'https://chat-app-x0zi.onrender.com/',
  featured: true,
  stats: {
    stars: 178,
    users: 200,
    completed: 27000
  }
},

    // {
    //   title: { en: 'Instagram Clone', jp: 'Instagram クローン' },
    //   description: {
    //     en: 'Full-stack social media platform with real-time messaging, photo sharing, stories, and advanced user interactions.',
    //     jp: 'リアルタイムメッセージング、写真共有、ストーリー機能、高度なユーザーインタラクションを備えたフルスタックソーシャルメディアプラットフォーム。'
    //   },
    //   image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMDYyMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    //   tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'JWT'],
    //   githubUrl: '#',
    //   liveUrl: '#',
    //   featured: true,
    //   stats: {
    //     stars: 89,
    //     users: 1800,
    //     completed: 12000
    //   }
    // },
    // {
    //   title: { en: 'EduManage System', jp: 'EduManage システム' },
    //   description: {
    //     en: 'Comprehensive school management solution with student tracking, grade management, and automated reporting systems.',
    //     jp: '生徒追跡、成績管理、自動レポートシステムを備えた包括的な学校管理ソリューション。'
    //   },
    //   image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzA3MjgwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    //   tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux', 'Material-UI'],
    //   githubUrl: '#',
    //   liveUrl: '#',
    //   featured: false,
    //   stats: {
    //     stars: 67,
    //     users: 1500,
    //     completed: 8000
    //   }
    // },
   
    
    {
      title: { en: 'Mirai Language Institute', jp: '未来語学学院' },
      description: {
        en: 'Comprehensive abroad study consultancy platform with course management, student enrollment, and progress tracking.',
        jp: 'コース管理、生徒登録、進捗追跡を備えた包括的な留学コンサルタントプラットフォーム。'
      },
      image: 'https://mirai.info.np/img/mirai-circle.png',
      tech: ['HTML', 'CSS', 'Framer Motion', 'JavaScript', 'Vercel'],
      githubUrl: '#',
      liveUrl: 'https://mirai.info.np',
      featured: true,
      stats: {
        stars: 41,
        users: 1200,
        completed: 6000
      }
    },
    {
  title: { en: 'The Bichar Buzz', jp: 'TheBicharBuzz ブログ' },
  description: {
    en: 'A fast, minimal, and engaging news & article platform delivering trending stories, opinions, culture updates, and daily informative content.',
    jp: 'トレンドニュース、意見記事、カルチャー更新、日々の有益なコンテンツを提供する高速でミニマルかつ魅力的なニュース・記事プラットフォーム。'
  },
  image: '/bicharbuzz.png',
  tech: ['MERN', 'Tailwind CSS', 'MDX', 'TypeScript', 'SEO Optimization'],
  githubUrl: '#',
  liveUrl: 'https://bichar-buzz.vercel.app/',
  featured: true,
  stats: {
    stars: 165,
    users: 4800,
    completed: 29000
  }
}

  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/20 dark:bg-teal-900/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {content[language].subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 dark:border-gray-700"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    {content[language].featured}
                  </div>
                </div>
              )}

              {/* Image Container */}
              <div className="relative overflow-hidden h-56">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quick Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex justify-between text-white text-xs">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                      <Star className="w-3 h-3" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                      <Users className="w-3 h-3" />
                      <span>{project.stats.users}+</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                      <Eye className="w-3 h-3" />
                      <span>{project.stats.completed}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-blue-600 transition-all duration-300">
                  {project.title[language]}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {project.description[language]}
                </p>
                
                {/* Tech Stack */}
                <div className="space-y-2">
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                    {content[language].techUsed}:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-xs font-medium border border-teal-100 dark:border-teal-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    className="flex-1 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-xl py-3 transition-all duration-300 group/btn"
                    variant="default"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      {content[language].liveDemo}
                      <ArrowUpRight className="ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" size={16} />
                    </a>
                  </Button>
                
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-200 dark:group-hover:border-teal-800 rounded-3xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {language === 'en' 
              ? 'Interested in collaborating or seeing more projects?'
              : 'コラボレーションや他のプロジェクトにも興味がありますか？'
            }
          </p>
          <Button
            className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-full px-8 py-6 shadow-lg shadow-teal-600/30 hover:shadow-teal-600/50 transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {language === 'en' ? "Let's Work Together" : '一緒に働きましょう'}
            <ExternalLink className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
}