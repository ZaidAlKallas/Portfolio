import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { siteConfig } from "@/data/site";

const baseUrl = siteConfig.canonicalUrl;
const arUrl = `${baseUrl}/ar`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.titleAr,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.descriptionAr,
  applicationName: siteConfig.name,
  keywords: [
    "مطور .NET",
    "مطور سي شارب",
    "ASP.NET Core",
    "مطور الويب",
    "الواجهات الخلفية",
    "تصميم واجهات برمجة التطبيقات",
    "زيد الكلاس",
    "مطور سوري",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    languages: {
      "en-US": baseUrl,
      "ar": arUrl,
      "x-default": baseUrl,
    },
    canonical: arUrl,
  },
  openGraph: {
    type: "profile",
    locale: "ar_SA",
    alternateLocale: "en_US",
    url: arUrl,
    title: siteConfig.titleAr,
    description: siteConfig.descriptionAr,
    siteName: siteConfig.name,
    images: [
      {
        url: `${baseUrl}/images/social-preview.svg`,
        width: 1200,
        height: 630,
        alt: siteConfig.titleAr,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.titleAr,
    description: siteConfig.descriptionAr,
    images: [`${baseUrl}/images/social-preview.svg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

const arJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${arUrl}/#profile`,
  url: arUrl,
  name: siteConfig.titleAr,
  description: siteConfig.descriptionAr,
  inLanguage: "ar",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: siteConfig.name,
    inLanguage: ["en", "ar"],
  },
  mainEntity: {
    "@type": "Person",
    "@id": `${arUrl}/#person`,
    name: "زيد الكلاس",
    alternateName: siteConfig.name,
    jobTitle: "مطور .NET متكامل",
    description: siteConfig.bioAr,
    url: baseUrl,
    email: `mailto:${siteConfig.email}`,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      ".NET",
      "C#",
      "ASP.NET Core",
      "Web APIs",
      "تطوير متكامل",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "مطور .NET متكامل",
    },
    knowsLanguage: [
      { "@type": "Language", name: "العربية", alternateName: "Arabic" },
      { "@type": "Language", name: "English" },
    ],
  },
};

export default function ArabicHome() {
  return (
    <div className="min-h-screen bg-linear-to-br from-accent/5 via-transparent to-accent/3">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(arJsonLd) }}
      />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
