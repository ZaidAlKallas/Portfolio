import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import { LanguageProvider } from "@/lib/language";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const arabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalUrl),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    ".NET Developer",
    "C# Developer",
    "ASP.NET Core",
    "Full-Stack Developer",
    "Backend Developer",
    "API Design",
    "Zaid Al Kallas",
    "ZaidAlkallas",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    languages: {
      "en-US": siteConfig.canonicalUrl,
      "ar": `${siteConfig.canonicalUrl}/ar`,
      "x-default": siteConfig.canonicalUrl,
    },
    canonical: siteConfig.canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    url: siteConfig.canonicalUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.canonicalUrl}/images/social-preview.svg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.canonicalUrl}/images/social-preview.svg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  mainEntity: {
    "@type": "Person",
    "@id": `${siteConfig.canonicalUrl}/#person`,
    name: siteConfig.name,
    alternateName: siteConfig.titleAr.split(" — ")[0],
    jobTitle: "Full-Stack .NET Developer",
    description: siteConfig.description,
    email: `mailto:${siteConfig.email}`,
    url: siteConfig.canonicalUrl,
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: [
      ".NET",
      "C#",
      "ASP.NET Core",
      "Web APIs",
      "Full-Stack Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full-Stack .NET Developer",
    },
    image: `${siteConfig.canonicalUrl}${siteConfig.profileImage}`,
    knowsLanguage: [
      { "@type": "Language", name: "English" },
      { "@type": "Language", name: "Arabic", alternateName: "العربية" },
    ]
  },
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.canonicalUrl}/#website`,
      url: siteConfig.canonicalUrl,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: ["en", "ar"],
      publisher: { "@id": `${siteConfig.canonicalUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.canonicalUrl}/#profile`,
      url: siteConfig.canonicalUrl,
      name: siteConfig.name,
      about: { "@id": `${siteConfig.canonicalUrl}/#person` },
      inLanguage: "en",
      isPartOf: { "@id": `${siteConfig.canonicalUrl}/#website` },
    },
  ],
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.classList.add("dark");var p=window.location.pathname;if(p==="/ar"||p.startsWith("/ar/")){document.documentElement.lang="ar";document.documentElement.dir="rtl"}else{document.documentElement.lang="en";document.documentElement.dir="ltr"}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${arabic.variable} min-h-screen antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}