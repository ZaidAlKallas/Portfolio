"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language";
import { projects } from "@/data/projects";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "./icons";

const categories = ["all", "web", "mobile"] as const;

export default function Projects() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"all" | "web" | "mobile">("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const categoryLabels = {
    all: t.projects.all,
    web: t.projects.web,
    mobile: t.projects.mobile,
  };

  return (
    <section id="projects" className="py-24 bg-accent/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.projects.sectionTitle}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t.projects.description}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-8 flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-accent-fill text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <AnimatedSection key={project.id}>
              <div
                className={`group rounded-xl border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 overflow-hidden ${
                  project.featured ? "ring-1 ring-accent/20" : ""
                }`}
              >
                {project.featured && (
                  <div className="flex items-center gap-2 border-b border-border bg-accent/5 px-6 py-3">
                    <Star className="h-4 w-4 text-accent fill-accent" />
                    <span className="text-sm font-semibold text-accent">
                      {t.projects.featured}
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground">
                        {language === "ar" ? project.titleAr : project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 ms-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
                          aria-label={t.projects.viewCode}
                        >
                          <GithubIcon className="h-5 w-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
                          aria-label={t.projects.viewLive}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {language === "ar" ? project.descriptionAr : project.description}
                  </p>

                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
