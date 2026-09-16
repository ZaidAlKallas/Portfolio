"use client";

import { useLanguage } from "@/lib/language";
import { siteConfig } from "@/data/site";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import ProcessPipeline from "./ProcessPipeline";

export default function Hero() {
  const { language, t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-accent/3" />

      <div className="relative flex flex-1 items-center">
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 pt-20 pb-10">
          <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex-1 text-center lg:text-start">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
              {t.hero.greeting}
            </p>

            <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {language === "ar" ? siteConfig.nameAr : siteConfig.name}
            </h1>

            <p className="mb-6 text-xl font-semibold text-muted-foreground sm:text-xl">
              {t.hero.title}
            </p>

            <p className="mb-8 max-w-xl text-2xl font-semibold leading-relaxed text-foreground mx-auto lg:mx-0">
              {t.hero.description}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row mx-auto lg:mx-0 w-fit">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-fill px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent-fill/90 hover:shadow-lg hover:shadow-accent/25"
              >
                {t.hero.viewProjects}
                <ArrowDown className="h-4 w-4" />
              </a>

              <a
                href={siteConfig.cvPath}
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent/50 hover:bg-accent/5"
              >
                <Download className="h-4 w-4" />
                {t.hero.downloadCV}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 mx-auto lg:mx-0 w-fit">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-accent/50 hover:text-foreground hover:bg-accent/5"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>

              {siteConfig.linkedin !== "YOUR_LINKEDIN_URL" && (
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-accent/50 hover:text-foreground hover:bg-accent/5"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              )}

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-accent/50 hover:text-foreground hover:bg-accent/5"
                aria-label={
                  language === "ar" ? "البريد الإلكتروني" : "Email"
                }
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="shrink-0">
            <div className="relative">
              <div className="h-48 w-48 overflow-hidden rounded-full border-2 border-border bg-accent/10 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={siteConfig.profileImage}
                  alt={
                    language === "ar"
                      ? "صورة زيد الكلاس"
                      : "Photo of Zaid Alkallas"
                  }
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector(".fallback-icon")) {
                      const fallback = document.createElement("div");
                      fallback.className =
                        "fallback-icon flex h-full w-full items-center justify-center";
                      fallback.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
              <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-full border border-accent/20 bg-accent/5 blur-sm sm:-bottom-4 sm:-right-4 sm:h-32 sm:w-32" />
            </div>
          </div>
          </div>
        </div>
      </div>
      <ProcessPipeline />
    </section>
  );
}
