"use client";

import { useLanguage } from "@/lib/language";
import { education } from "@/data/education";
import AnimatedSection from "./AnimatedSection";
import { GraduationCap, CheckCircle, Clock } from "lucide-react";

export default function Education() {
  const { language, t } = useLanguage();

  return (
    <section id="education" className="py-24 bg-accent/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.education.sectionTitle } 
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((entry, index) => (
            <AnimatedSection key={index}>
              <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 h-full">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-accent/10 text-accent">
                    <img
                      src={entry.universityLogo}
                      alt={`${entry.institution} logo`}
                      className="h-full w-full object-cover"
                      width={422}
                      height={384}
                      loading="lazy"
                    />
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                      entry.status === "ongoing"
                        ? "bg-green-500/10 text-green-600 dark:text-green-400"
                        : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                    }`}
                  >
                    {entry.status === "ongoing" ? (
                      <Clock className="h-3 w-3" />
                    ) : (
                      <CheckCircle className="h-3 w-3" />
                    )}
                    {language === "ar" ? entry.statusAr : t.education[entry.status]}
                  </span>
                </div>

                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  {language === "ar" ? entry.degreeAr : entry.degree}{" "}
                  <span className="text-accent">
                    {language === "ar" ? entry.fieldAr : entry.field}
                  </span>
                </h3>

                <p className="mb-3 text-sm text-muted-foreground">
                  {language === "ar" ? entry.institutionAr : entry.institution}
                </p>

                <p className="text-sm font-medium text-muted-foreground">
                  {language === "ar" ? entry.datesAr : entry.dates}
                </p>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
