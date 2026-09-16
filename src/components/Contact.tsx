"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/language";
import { siteConfig } from "@/data/site";
import AnimatedSection from "./AnimatedSection";
import { Send, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission would be configured with an external provider
    setStatus("success");
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.contact.sectionTitle}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t.contact.description}
            </p>
          </div>
        </AnimatedSection>
        <div className="grid gap-12">
          {/* Display contact information side by side if the secreen is large enough */}
          <AnimatedSection className="lg:col-span-3">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent-fill group-hover:text-accent-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-foreground break-all">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent-fill group-hover:text-accent-foreground">
                  <GithubIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    GitHub
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    ZaidAlKallas
                  </p>
                </div>
              </a>

              {siteConfig.linkedin !== "YOUR_LINKEDIN_URL" && (
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent-fill group-hover:text-accent-foreground">
                  <LinkedinIcon className="h-5 w-5" />
                </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      LinkedIn
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      Zaid Al Kallas
                    </p>
                  </div>
                </a>
              )}
            </div>
          </AnimatedSection>
{/* 
          <AnimatedSection className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-xl border border-border bg-card p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder={t.contact.namePlaceholder}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {t.contact.subjectLabel}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  placeholder={t.contact.subjectPlaceholder}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-fill px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent-fill/90 hover:shadow-lg hover:shadow-accent/25 sm:w-auto"
              >
                <Send className="h-4 w-4" />
                {t.contact.sendButton}
              </button>

              {status === "success" && (
                <p className="text-sm text-green-600 dark:text-green-400">
                  {t.contact.successMessage}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {t.contact.errorMessage}
                </p>
              )}
            </form>
          </AnimatedSection> */}
        </div>
      </div>
    </section>
  );
}
