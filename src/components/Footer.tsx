"use client";

import { useLanguage } from "@/lib/language";
import { siteConfig } from "@/data/site";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-start">
            <p className="text-sm font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            {siteConfig.linkedin !== "YOUR_LINKEDIN_URL" && (
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            )}

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
              aria-label={
                language === "ar" ? "البريد الإلكتروني" : "Email"
              }
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}.{" "}
            {t.footer.copyright}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
