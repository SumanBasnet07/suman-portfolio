'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Send, MessageCircle, Zap, Facebook, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Language } from '@/types/language';

interface ContactProps {
  language: Language;
}

export function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      successTitle: "Message sent! 🎉",
      successMsg: "I'll get back to you within 24 hours.",
      sendAnother: 'Send Another Message',
      location: 'Location',
      locationValue: 'Osaka, Japan',
      email: 'Email',
      emailValue: 'suman@hamrolink.com',
      phone: 'Phone',
      phoneValue: '+81 080 8542 4538',
      responseTime: 'Typically responds within 2 hours',
      availability: 'Available for new projects',
      followMe: 'Follow my journey',
      connectWithMe: 'Connect with me',
      quickResponse: 'Quick Response Guaranteed',
      quickResponseSub: 'I understand the importance of timely communication. You can expect a response within 2 hours during business hours.',
      socialCaption: "Follow my coding journey and see what I'm building next.",
    },
    ja: {
      title: 'コンタクト',
      subtitle: 'あなたのアイデアを実現する準備はできていますか？あなたのプロジェクトについて話し合い、一緒に素晴らしいものを作りましょう。',
      namePlaceholder: 'お名前',
      emailPlaceholder: 'your.email@example.com',
      subjectPlaceholder: 'プロジェクト相談 / コラボレーション',
      messagePlaceholder: 'プロジェクトの内容、タイムライン、特定の要件について教えてください...',
      sendMessage: 'メッセージを送信',
      sending: '送信中...',
      successTitle: 'メッセージが送信されました！🎉',
      successMsg: '24時間以内に返信いたします。',
      sendAnother: '別のメッセージを送信',
      location: '所在地',
      locationValue: '大阪、日本',
      email: 'メール',
      emailValue: 'suman@distrya.com',
      phone: '電話',
      phoneValue: '+81 080 8542 4538',
      responseTime: '通常2時間以内に返信',
      availability: '新しいプロジェクトを受付中',
      followMe: '私の旅をフォロー',
      connectWithMe: 'コンタクト',
      quickResponse: '迅速な返信を保証',
      quickResponseSub: 'タイムリーなコミュニケーションの重要性を理解しています。営業時間中は2時間以内の返信をお約束します。',
      socialCaption: '私のコーディングの旅をフォローして、次に何を作っているか見てください。',
    },
  };

  const c = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
  };

  const contactInfo = [
    { icon: MapPin, label: c.location, value: c.locationValue, color: 'from-rose-400 to-pink-500', desc: c.availability },
    { icon: Mail, label: c.email, value: c.emailValue, color: 'from-blue-400 to-cyan-500', desc: c.responseTime },
    { icon: Phone, label: c.phone, value: c.phoneValue, color: 'from-green-400 to-teal-500', desc: c.quickResponse },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sumanbasnet07', name: 'GitHub', hoverBg: 'hover:bg-gray-900 dark:hover:bg-gray-700' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sumanbasnet', name: 'LinkedIn', hoverBg: 'hover:bg-blue-600' },
    { icon: Instagram, href: 'https://instagram.com/distrya_online', name: 'Instagram', hoverBg: 'hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-500' },
    { icon: Facebook, href: 'https://www.facebook.com/suman.basnet.5095110/', name: 'Facebook', hoverBg: 'hover:bg-blue-700' },
  ];

  return (
    <section id="contact" className="py-28 px-6 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100/30 dark:bg-teal-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            {c.title}
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">{c.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info + social */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-gray-100 dark:border-gray-800 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <info.icon className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-0.5">{info.label}</p>
                  <p className="text-gray-900 dark:text-white font-bold text-base mb-1">{info.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{info.desc}</p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">{c.followMe}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">{c.socialCaption}</p>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    className={`w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-all duration-300 ${social.hoverBg} hover:text-white hover:scale-110 text-gray-600 dark:text-gray-400`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick response guarantee */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-6 text-white shadow-xl shadow-teal-600/20">
              <div className="flex items-center gap-2.5 mb-2">
                <Zap className="w-5 h-5" />
                <h3 className="font-bold">{c.quickResponse}</h3>
              </div>
              <p className="text-sm text-teal-100 leading-relaxed">{c.quickResponseSub}</p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center shadow-lg">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{c.connectWithMe}</h3>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-950/40 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{c.successTitle}</h4>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{c.successMsg}</p>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                >
                  {c.sendAnother}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 flex flex-col flex-1">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder={c.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="rounded-xl border-gray-200 dark:border-gray-700 focus:border-teal-500 dark:focus:border-teal-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 transition-all duration-300"
                  />
                  <Input
                    type="email"
                    placeholder={c.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="rounded-xl border-gray-200 dark:border-gray-700 focus:border-teal-500 dark:focus:border-teal-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 transition-all duration-300"
                  />
                </div>

                <Input
                  type="text"
                  placeholder={c.subjectPlaceholder}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="rounded-xl border-gray-200 dark:border-gray-700 focus:border-teal-500 dark:focus:border-teal-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 transition-all duration-300"
                />

                <Textarea
                  placeholder={c.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="rounded-xl border-gray-200 dark:border-gray-700 focus:border-teal-500 dark:focus:border-teal-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 resize-none transition-all duration-300 flex-1"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-2xl py-6 shadow-xl shadow-teal-600/25 hover:shadow-teal-600/40 transition-all duration-300 hover:-translate-y-0.5 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      {c.sending}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      {c.sendMessage}
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}