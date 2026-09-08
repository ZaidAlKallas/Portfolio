import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const baseUrl = siteConfig.canonicalUrl;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/`,
          ar: `${baseUrl}/ar`,
        },
      },
    },
    {
      url: `${baseUrl}/ar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/`,
          ar: `${baseUrl}/ar`,
        },
      },
    },
  ];
}
