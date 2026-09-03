import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://suman-basnet.com.np";
  const now = new Date();

  const paths = [
    { subpath: "", priority: 1.0 },
    { subpath: "/work", priority: 0.9 },
    { subpath: "/work/hamrolink", priority: 0.95 },
    { subpath: "/work/distrya", priority: 0.85 },
    { subpath: "/writing", priority: 0.8 },
    {
      subpath: "/writing/building-with-mcp-ai-agents-business-context",
      priority: 0.75,
    },
    {
      subpath: "/writing/connected-systems-vs-disconnected-tools",
      priority: 0.75,
    },
    {
      subpath: "/writing/engineering-for-low-bandwidth-networks",
      priority: 0.75,
    },
    {
      subpath: "/writing/lessons-from-building-distrya",
      priority: 0.75,
    },
    { subpath: "/about", priority: 0.8 },
    { subpath: "/contact", priority: 0.7 },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const item of paths) {
    // EN Entry
    sitemapEntries.push({
      url: `${baseUrl}/en${item.subpath}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: item.priority,
      alternates: {
        languages: {
          en: `${baseUrl}/en${item.subpath}`,
          ja: `${baseUrl}/ja${item.subpath}`,
          "x-default": `${baseUrl}/en${item.subpath}`,
        },
      },
    });

    // JA Entry
    sitemapEntries.push({
      url: `${baseUrl}/ja${item.subpath}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: item.priority,
      alternates: {
        languages: {
          en: `${baseUrl}/en${item.subpath}`,
          ja: `${baseUrl}/ja${item.subpath}`,
          "x-default": `${baseUrl}/en${item.subpath}`,
        },
      },
    });
  }

  return sitemapEntries;
}