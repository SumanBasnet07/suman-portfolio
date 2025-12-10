import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  // Import your metadata objects
  const { metadata, metadataJP } = await import("@/app/layout-config");

  return lang === "ja" ? metadataJP : metadata;
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  return children;
}
