"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import {
  Lightbulb,
  Palette,
  BarChart3,
  Code2,
  Bug,
  Rocket,
  type LucideIcon,
} from "lucide-react";

type Step = { icon: LucideIcon; en: string; ar: string };

const steps: Step[] = [
  { icon: Lightbulb, en: "Idea", ar: "الفكرة" },
  { icon: Palette, en: "Design", ar: "التصميم" },
  { icon: BarChart3, en: "Analytics", ar: "التحليل" },
  { icon: Code2, en: "Implementation", ar: "التنفيذ" },
  { icon: Bug, en: "Testing", ar: "الاختبار" },
  { icon: Rocket, en: "Deployment", ar: "النشر" },
];

type Segment = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

type NodeProps = {
  step: Step;
  index: number;
  visible: boolean;
  circleClass: string;
  iconClass: string;
  labelClass: string;
  cellClass?: string;
  dataNode?: number;
};

function StepNode({
  step,
  index,
  visible,
  circleClass,
  iconClass,
  labelClass,
  cellClass = "",
  dataNode,
}: NodeProps) {
  const { language } = useLanguage();
  return (
    <div
      data-node={dataNode}
      className={`relative z-10 flex flex-col items-center justify-center ${cellClass}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(0.75rem)",
        transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${
          index * 120
        }ms`,
      }}
    >
      <div
        className={`glow-march flex ${circleClass} items-center justify-center rounded-full border-2 border-border bg-card`}
        style={{ animationDelay: `${index * 1000}ms` }}
      >
        <step.icon className={`${iconClass} text-accent`} strokeWidth={1.5} />
      </div>
      <p className={`mt-2 text-xs font-semibold text-foreground ${labelClass}`}>
        {language === "ar" ? step.ar : step.en}
      </p>
    </div>
  );
}

type ZGridProps = {
  visible: boolean;
  areas: string[];
  rowCount: number;
  labelClass: string;
  className: string;
  minHeight?: number;
};

// Z-shape flow: 0→1→2→3→4→5.
const flow: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
];

function ZGrid({
  visible,
  areas,
  rowCount,
  labelClass,
  className,
  minHeight,
}: ZGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [geo, setGeo] = useState<{
    w: number;
    h: number;
    segs: (Segment | null)[];
  } | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => {
      const base = el.getBoundingClientRect();
      const w = base.width;
      const h = base.height;
      if (w === 0 || h === 0) return;

      const center = (idx: number) => {
        const node = el.querySelector(`[data-node="${idx}"]`);
        if (!node) return null;
        const r = node.getBoundingClientRect();
        return {
          x: r.left - base.left + r.width / 2,
          y: r.top - base.top + r.height / 2,
        };
      };

      const segs = flow.map(([a, b]) => {
        const pa = center(a);
        const pb = center(b);
        if (!pa || !pb) return null;
        return {
          x1: pa.x,
          y1: pa.y,
          x2: pb.x,
          y2: pb.y,
        } as Segment;
      });

      setGeo({ w, h, segs });
    };

    measure();

    // Re-measure once the entrance animation (0.5s + stagger) settles.
    const settle = window.setTimeout(measure, visible ? 1400 : 0);

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      window.clearTimeout(settle);
      ro.disconnect();
    };
  }, [visible]);

  return (
    <div
      ref={ref}
      className={`relative grid ${className}`}
      style={{
        gridTemplateRows: `repeat(${rowCount}, minmax(0, 1fr))`,
        minHeight,
      }}
    >
      {geo && geo.segs.length === flow.length && (
        <svg
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
          viewBox={`0 0 ${geo.w} ${geo.h}`}
          fill="none"
        >
          {geo.segs.filter(Boolean).map((seg, i) => (
            <g key={i}>
              <line
                {...seg}
                stroke="var(--border)"
                strokeWidth="2.5"
                strokeLinecap="round"
                pathLength={100}
                strokeDasharray={100}
                strokeDashoffset={0}
              />
              <line
                {...seg}
                stroke="var(--accent)"
                strokeOpacity={0.4}
                strokeWidth="2.5"
                strokeLinecap="round"
                pathLength={100}
                strokeDasharray={100}
                strokeDashoffset={visible ? 0 : 100}
                style={{
                  transition: `stroke-dashoffset 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${
                    600 + i * 130
                  }ms`,
                }}
              />
            </g>
          ))}
        </svg>
      )}

      {areas.map((area, i) => (
        <StepNode
          key={i}
          step={steps[i]}
          index={i}
          visible={visible}
          cellClass={`h-full ${area}`}
          circleClass="h-12 w-12"
          iconClass="h-5 w-5"
          labelClass={labelClass}
          dataNode={i}
        />
      ))}
    </div>
  );
}

export default function ProcessPipeline() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative z-10 w-full border-t border-border/50 bg-background/30 backdrop-blur-md">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 py-5 sm:py-7">
        <p
          className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground sm:text-sm"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(0.5rem)",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {t.hero.processTitle}
        </p>

        <div ref={ref} className="relative">
          {/* Desktop: single horizontal row */}
          <div className="relative hidden lg:flex lg:items-start lg:justify-between">
            <div className="absolute left-[8.33%] right-[8.33%] top-7 h-px bg-border">
              <div
                className="pipeline-line-fill h-full bg-accent/25"
                style={{
                  transform: visible ? "scaleX(1)" : "scaleX(0)",
                  transition:
                    "transform 1s cubic-bezier(0.16, 1, 0.3, 1) 500ms",
                }}
              />
            </div>
            {steps.map((step, i) => (
              <StepNode
                key={i}
                step={step}
                index={i}
                visible={visible}
                cellClass="flex-1"
                circleClass="h-14 w-14"
                iconClass="h-6 w-6"
                labelClass="sm:text-sm"
              />
            ))}
          </div>

          {/* Tablet Z: 1 2 3 / diagonal / 4 5 6 */}
          <ZGrid
            visible={visible}
            className="hidden grid-cols-3 md:grid lg:hidden"
            rowCount={2}
            minHeight={320}
            areas={[
              "[grid-area:1/1]",
              "[grid-area:1/2]",
              "[grid-area:1/3]",
              "[grid-area:2/1]",
              "[grid-area:2/2]",
              "[grid-area:2/3]",
            ]}
            labelClass="sm:text-xs"
          />

          {/* Mobile Z: nodes 3 & 4 exactly on the diagonal (15-col grid so
              centers are collinear at 90%→63.3%→36.7%→10%)
              1 ----- 2
                        \
                          3
                            \
                              4
                                \
              5 -------- 6     */}
          <ZGrid
            visible={visible}
            className="grid-cols-15 md:hidden"
            rowCount={4}
            areas={[
              "[grid-area:1/2]",
              "[grid-area:1/14]",
              "[grid-area:2/10]",
              "[grid-area:3/6]",
              "[grid-area:4/2]",
              "[grid-area:4/14]",
            ]}
            labelClass="text-[11px] sm:text-xs"
          />
        </div>
      </div>
    </div>
  );
}