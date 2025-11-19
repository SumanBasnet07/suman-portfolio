'use client';

import { Code2, Database, Palette, GitBranch, Layers, Globe, Boxes, Smartphone, Workflow, Blocks, Cpu, Server, Zap, Type, Shield, Terminal } from 'lucide-react';
import { Language } from '@/app/page';

interface SkillsProps {
  language: Language;
}

export function Skills({ language }: SkillsProps) {
  const content = {
    en: {
      title: 'Technical Expertise',
      subtitle: 'Comprehensive toolkit for building modern, scalable applications',
      categories: {
        frontend: 'Frontend Development',
        backend: 'Backend Development',
        tools: 'Tools & DevOps',
        design: 'UI/UX & Design'
      }
    },
    jp: {
      title: '技術専門知識',
      subtitle: 'モダンでスケーラブルなアプリケーション構築のための包括的なツールキット',
      categories: {
        frontend: 'フロントエンド開発',
        backend: 'バックエンド開発',
        tools: 'ツール & DevOps',
        design: 'UI/UX & デザイン'
      }
    }
  };

  const skillCategories = [
    {
      title: content[language].categories.frontend,
      skills: [
        {
          icon: Code2,
          name: { en: 'HTML5 & CSS3', jp: 'HTML5 & CSS3' },
          level: 95,
          color: 'from-orange-500 to-red-500',
          description: { en: 'Semantic markup & modern CSS', jp: 'セマンティックマークアップとモダンCSS' }
        },
        {
          icon: Code2,
          name: { en: 'TypeScript', jp: 'TypeScript' },
          level: 90,
          color: 'from-blue-500 to-indigo-600',
          description: { en: 'Type-safe JavaScript development', jp: 'タイプセーフなJavaScript開発' }
        },
        {
          icon: Blocks,
          name: { en: 'React.js', jp: 'React.js' },
          level: 92,
          color: 'from-cyan-400 to-blue-500',
          description: { en: 'Component-based architecture', jp: 'コンポーネントベースアーキテクチャ' }
        },
        {
          icon: Globe,
          name: { en: 'Next.js 14', jp: 'Next.js 14' },
          level: 88,
          color: 'from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800',
          description: { en: 'Full-stack React framework', jp: 'フルスタックReactフレームワーク' }
        },
        {
          icon: Layers,
          name: { en: 'Tailwind CSS', jp: 'Tailwind CSS' },
          level: 94,
          color: 'from-teal-400 to-cyan-500',
          description: { en: 'Utility-first CSS framework', jp: 'ユーティリティファーストCSSフレームワーク' }
        }
      ]
    },
    {
      title: content[language].categories.backend,
      skills: [
        {
          icon: Workflow,
          name: { en: 'Node.js', jp: 'Node.js' },
          level: 85,
          color: 'from-green-500 to-emerald-600',
          description: { en: 'Server-side JavaScript runtime', jp: 'サーバーサイドJavaScriptランタイム' }
        },
        {
          icon: Database,
          name: { en: 'MongoDB', jp: 'MongoDB' },
          level: 82,
          color: 'from-green-600 to-teal-700',
          description: { en: 'NoSQL database management', jp: 'NoSQLデータベース管理' }
        },
        {
          icon: Server,
          name: { en: 'Express.js', jp: 'Express.js' },
          level: 80,
          color: 'from-gray-600 to-gray-800',
          description: { en: 'Web application framework', jp: 'Webアプリケーションフレームワーク' }
        },
        {
          icon: Shield,
          name: { en: 'RESTful APIs', jp: 'RESTful API' },
          level: 88,
          color: 'from-purple-500 to-pink-500',
          description: { en: 'API design & development', jp: 'API設計と開発' }
        }
      ]
    },
    {
      title: content[language].categories.tools,
      skills: [
        {
          icon: GitBranch,
          name: { en: 'Git & GitHub', jp: 'Git & GitHub' },
          level: 90,
          color: 'from-orange-500 to-red-600',
          description: { en: 'Version control & collaboration', jp: 'バージョン管理とコラボレーション' }
        },
        {
          icon: Terminal,
          name: { en: 'CLI & DevOps', jp: 'CLI & DevOps' },
          level: 75,
          color: 'from-gray-500 to-gray-700',
          description: { en: 'Command line & deployment', jp: 'コマンドラインとデプロイメント' }
        },
        {
          icon: Zap,
          name: { en: 'Vercel & Netlify', jp: 'Vercel & Netlify' },
          level: 85,
          color: 'from-yellow-500 to-orange-500',
          description: { en: 'Modern deployment platforms', jp: 'モダンデプロイメントプラットフォーム' }
        }
      ]
    },
    {
      title: content[language].categories.design,
      skills: [
        {
          icon: Palette,
          name: { en: 'UI/UX Design', jp: 'UI/UX デザイン' },
          level: 78,
          color: 'from-purple-400 to-pink-500',
          description: { en: 'User interface & experience design', jp: 'ユーザーインターフェースと体験設計' }
        },
        {
          icon: Smartphone,
          name: { en: 'Responsive Design', jp: 'レスポンシブデザイン' },
          level: 95,
          color: 'from-indigo-400 to-purple-500',
          description: { en: 'Mobile-first responsive layouts', jp: 'モバイルファーストレスポンシブレイアウト' }
        },
        {
          icon: Cpu,
          name: { en: 'Figma & Adobe XD', jp: 'Figma & Adobe XD' },
          level: 70,
          color: 'from-pink-500 to-rose-500',
          description: { en: 'Design prototyping tools', jp: 'デザインプロトタイピングツール' }
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-100/30 dark:bg-teal-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
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

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                    
                    {/* Skill Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <skill.icon className="text-white" size={28} />
                    </div>
                    
                    {/* Skill Info */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-blue-600 dark:group-hover:from-teal-400 dark:group-hover:to-blue-400 transition-all duration-300">
                        {skill.name[language]}
                      </h4>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {skill.description[language]}
                      </p>
                      
                      {/* Skill Level Indicator */}
                      <div className="pt-2">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                            {language === 'en' ? 'Proficiency' : '習熟度'}
                          </span>
                          <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-200 dark:group-hover:border-teal-800 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl border border-gray-200 dark:border-gray-700">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {language === 'en' 
              ? 'Continuously learning and adapting to new technologies and best practices.'
              : '新しい技術とベストプラクティスを継続的に学習し、適応しています。'
            }
          </p>
        </div>
      </div>
    </section>
  );
}