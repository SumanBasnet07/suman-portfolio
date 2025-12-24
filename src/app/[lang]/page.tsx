"use client";

import { use } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Language } from "@/types/language";

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export default function HomePage({ params }: HomePageProps) {
  // Use React.use() to unwrap the params promise
  const resolvedParams = use(params);

  // Validate and ensure language is either 'en' or 'ja', default to 'en'
  const language: Language =
    resolvedParams.lang === "en" || resolvedParams.lang === "ja"
      ? resolvedParams.lang
      : "en";

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} />
      <Hero language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <About language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}
