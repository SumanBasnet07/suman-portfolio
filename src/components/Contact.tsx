'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Send, MessageCircle, Calendar, Zap, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Language } from '@/app/page';

interface ContactProps {
  language: Language;
}

export function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    en: {
      title: "Let's Connect",
      subtitle: "Ready to bring your ideas to life? Let's discuss your project and create something amazing together.",
      namePlaceholder: 'Your Full Name',
      emailPlaceholder: 'your.email@example.com',
      subjectPlaceholder: 'Project Discussion / Collaboration',
      messagePlaceholder: 'Tell me about your project, timeline, and any specific requirements...',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      location: 'Location',
      locationValue: 'Osaka, Japan',
      email: 'Email',
      emailValue: 'suman@distrya.com',
      phone: 'Phone',
      phoneValue: '+81 080 8542 4538',
      successMessage: '🎉 Message sent successfully! I\'ll get back to you within 24 hours.',
      responseTime: 'Typically responds within 2 hours',
      availability: 'Available for new projects',
      followMe: 'Follow my journey',
      connectWithMe: 'Connect with me',
      quickResponse: 'Quick Response Guaranteed'
    },
    jp: {
      title: 'コンタクト',
      subtitle: 'あなたのアイデアを実現する準備はできていますか？あなたのプロジェクトについて話し合い、一緒に素晴らしいものを作りましょう。',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'your.email@example.com',
      subjectPlaceholder: 'プロジェクト相談 / コラボレーション',
      messagePlaceholder: 'プロジェクトの内容、タイムライン、特定の要件について教えてください...',
      sendMessage: 'メッセージを送信',
      sending: '送信中...',
      location: '所在地',
      locationValue: '大阪、日本',
      email: 'メール',
      emailValue: 'suman@distrya.com',
      phone: '電話',
      phoneValue: '+81 080 8542 4538',
      successMessage: '🎉 メッセージが正常に送信されました！24時間以内に返信いたします。',
      responseTime: '通常2時間以内に返信',
      availability: '新しいプロジェクトを受付中',
      followMe: '私の旅をフォロー',
      connectWithMe: 'コンタクト',
      quickResponse: '迅速な返信を保証'
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert(content[language].successMessage);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: content[language].location,
      value: content[language].locationValue,
      color: 'from-red-400 to-pink-500',
      description: content[language].availability
    },
    {
      icon: Mail,
      label: content[language].email,
      value: content[language].emailValue,
      color: 'from-blue-400 to-cyan-500',
      description: content[language].responseTime
    },
    {
      icon: Phone,
      label: content[language].phone,
      value: content[language].phoneValue,
      color: 'from-green-400 to-teal-500',
      description: content[language].quickResponse
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/sumanbasnet07', 
      color: 'hover:bg-gray-900 dark:hover:bg-gray-700',
      name: 'GitHub'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/sumanbasnet', 
      color: 'hover:bg-blue-600',
      name: 'LinkedIn'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/distrya_online', 
      color: 'hover:bg-pink-600',
      name: 'Instagram'
    },
    {
      icon: Facebook, 
      href: 'https://www.facebook.com/suman.basnet.5095110/', 
      color: 'hover:bg-blue-600',
      name: 'Facebook'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100/30 dark:bg-teal-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <info.icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {info.label}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium text-lg mb-2">
                      {info.value}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {content[language].followMe}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                {language === 'en' 
                  ? 'Follow my coding journey and see what I\'m building next.'
                  : '私のコーディングの旅をフォローして、次に何を作っているか見てください。'
                }
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white hover:scale-110 group`}
                    title={social.name}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Guarantee */}
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6" />
                <h3 className="text-lg font-semibold">
                  {content[language].quickResponse}
                </h3>
              </div>
              <p className="text-sm opacity-90">
                {language === 'en' 
                  ? 'I understand the importance of timely communication. You can expect a response within 2 hours during business hours.'
                  : 'タイムリーなコミュニケーションの重要性を理解しています。営業時間中は2時間以内の返信をお約束します。'
                }
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {content[language].connectWithMe}
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    placeholder={content[language].namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="rounded-xl border-gray-200 dark:border-gray-600 focus:border-teal-600 dark:focus:border-teal-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={content[language].emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="rounded-xl border-gray-200 dark:border-gray-600 focus:border-teal-600 dark:focus:border-teal-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                  />
                </div>
              </div>
              
              <div>
                <Input
                  type="text"
                  placeholder={content[language].subjectPlaceholder}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="rounded-xl border-gray-200 dark:border-gray-600 focus:border-teal-600 dark:focus:border-teal-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder={content[language].messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="rounded-xl border-gray-200 dark:border-gray-600 focus:border-teal-600 dark:focus:border-teal-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none transition-all duration-300"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-xl py-6 shadow-lg shadow-teal-600/30 hover:shadow-teal-600/50 transition-all duration-300 transform hover:-translate-y-1 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    {content[language].sending}
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    {content[language].sendMessage}
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}