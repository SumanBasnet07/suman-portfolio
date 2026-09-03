import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/data/writing";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Calendar,
  User,
  CheckCircle2,
  HelpCircle,
  Code2,
  Share2,
  Tag,
  BookOpen,
} from "lucide-react";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  const locales = ["en", "ja"];
  const params: { lang: string; slug: string }[] = [];

  for (const lang of locales) {
    for (const article of articles) {
      params.push({ lang, slug: article.slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, lang } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.seoTitle || article.title} — Suman Basnet`,
    description: article.metaDescription || article.excerpt,
    alternates: {
      canonical:
        article.seo.canonical ||
        `https://suman-basnet.com.np/${lang}/writing/${slug}`,
      languages: {
        en: `https://suman-basnet.com.np/en/writing/${slug}`,
        ja: `https://suman-basnet.com.np/ja/writing/${slug}`,
      },
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug, lang } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const isJa = lang === "ja";
  const otherArticles = articles.filter((a) => a.slug !== slug);

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-36">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href={`/${lang}/writing`}
            className="inline-flex items-center gap-2 font-mono text-xs text-[#666666] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isJa ? "エッセイ一覧へ戻る" : "BACK TO ALL ESSAYS"}</span>
          </Link>
        </div>

        {/* Metadata Badges & Read Time */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full font-mono text-[10px] font-semibold tracking-wider bg-blue-50 text-blue-700 border border-blue-200/50">
            {article.category}
          </span>
          <span className="text-[#111111]/20">/</span>
          <span className="flex items-center gap-1.5 font-mono text-xs text-[#666666]">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span className="text-[#111111]/20">/</span>
          <span className="flex items-center gap-1.5 font-mono text-xs text-[#666666]">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime} ({article.wordCount} words)
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-[#111111] tracking-tight leading-[1.18] mb-8">
          {article.title}
        </h1>

        {/* Author Byline */}
        <div className="flex items-center gap-3 pb-8 border-b border-[#111111]/10 mb-10">
          <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center font-mono text-sm font-semibold">
            SB
          </div>
          <div>
            <div className="text-sm font-medium text-[#111111]">
              {article.author.name}
            </div>
            <div className="font-mono text-xs text-[#666666]">
              {article.author.role} · Osaka, Japan
            </div>
          </div>
        </div>

        {/* Excerpt Lead */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#111111]/10 text-lg sm:text-xl text-[#111111] font-light leading-relaxed mb-12 shadow-sm">
          {article.excerpt}
        </div>

        {/* Main Article Content */}
        <div className="space-y-12 text-[#111111] leading-relaxed">
          {article.content.map((section, idx) => (
            <div key={idx} className="space-y-6">
              {section.sectionHeading && (
                <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-[#111111] pt-8 border-t border-[#111111]/10">
                  {section.sectionHeading}
                </h2>
              )}

              {section.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="text-base sm:text-lg text-[#333333] leading-relaxed font-light"
                >
                  {p}
                </p>
              ))}

              {/* Styled Callout */}
              {section.callout && (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#F0EFEB] border-l-4 border-[#2563EB] text-base sm:text-lg font-normal text-[#111111] my-8 shadow-xs">
                  <p className="italic">“{section.callout}”</p>
                </div>
              )}

              {/* Code / JSON Schema Snippet */}
              {section.codeSnippet && (
                <div className="my-8 rounded-2xl overflow-hidden border border-[#111111]/15 bg-[#0F1117] text-[#F7F7F4] shadow-md">
                  {section.codeSnippet.caption && (
                    <div className="px-5 py-3 border-b border-white/10 bg-white/5 flex items-center justify-between font-mono text-xs text-white/60">
                      <span className="flex items-center gap-2">
                        <Code2 className="w-3.5 h-3.5 text-blue-400" />
                        <span>{section.codeSnippet.caption}</span>
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-white/40">
                        {section.codeSnippet.language}
                      </span>
                    </div>
                  )}
                  <div className="p-5 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed">
                    <pre>
                      <code>{section.codeSnippet.code}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Key Points */}
              {section.keyPoints && (
                <div className="p-6 rounded-2xl bg-white border border-[#111111]/10 my-8 space-y-3 shadow-xs">
                  <span className="font-mono text-xs text-[#2563EB] uppercase tracking-wider block mb-2 font-semibold">
                    {isJa ? "アーキテクチャの要点" : "KEY ARCHITECTURAL TAKEAWAYS"}
                  </span>
                  <ul className="space-y-2.5">
                    {section.keyPoints.map((point, kIdx) => (
                      <li
                        key={kIdx}
                        className="text-sm text-[#111111] font-light flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Takeaways Card */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="mt-16 p-8 rounded-3xl bg-white border border-[#111111]/10 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h3 className="font-mono text-xs uppercase tracking-widest font-semibold text-[#111111]">
                {isJa ? "まとめと実践の要点" : "SUMMARY & KEY TAKEAWAYS"}
              </h3>
            </div>
            <ul className="space-y-3.5">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li
                  key={idx}
                  className="text-sm sm:text-base text-[#333333] font-light flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2.5 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Genuine FAQ Section */}
        {article.faq && article.faq.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#111111]/10">
            <div className="flex items-center gap-2 mb-8">
              <HelpCircle className="w-5 h-5 text-purple-600" />
              <h3 className="text-2xl font-light text-[#111111] tracking-tight">
                {isJa ? "よくある疑問と解説" : "Frequently Explored Questions"}
              </h3>
            </div>
            <div className="space-y-6">
              {article.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#111111]/10 shadow-xs"
                >
                  <h4 className="font-medium text-base text-[#111111] mb-2.5">
                    {item.question}
                  </h4>
                  <p className="text-sm text-[#666666] leading-relaxed font-light">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-[#111111]/10 flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-[#666666] mr-2 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5" />
            <span>TAGS:</span>
          </span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md bg-[#F7F7F4] border border-[#111111]/10 font-mono text-[11px] text-[#111111]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Related Case Studies & Writing */}
        <div className="mt-20 pt-12 border-t border-[#111111]/10">
          <SectionLabel
            label={isJa ? "その他の考察" : "MORE ESSAYS"}
            icon={<BookOpen className="w-3.5 h-3.5 text-blue-600" />}
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherArticles.slice(0, 2).map((other) => (
              <Link
                key={other.slug}
                href={`/${lang}/writing/${other.slug}`}
                className="group p-6 rounded-2xl bg-white border border-[#111111]/10 hover:border-[#111111]/40 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-[10px] text-[#666666] mb-3 uppercase tracking-wider">
                    {other.category} · {other.date}
                  </div>
                  <h4 className="text-lg font-normal text-[#111111] group-hover:text-[#2563EB] transition-colors leading-snug mb-3">
                    {other.title}
                  </h4>
                  <p className="text-xs text-[#666666] font-light line-clamp-2 leading-relaxed">
                    {other.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#111111]/10 flex items-center justify-between font-mono text-xs text-[#111111] group-hover:text-[#2563EB]">
                  <span>{isJa ? "読む" : "READ NOTE"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
