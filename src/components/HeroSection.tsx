/*
 * HeroSection — Full-width hero with spectral background
 * Design: "Cold Lab" dark technical interface
 * Bioluminescent radial gradients, glass panel with division overview
 * RUO disclaimer uses soft amber tone (not red)
 */

import { DIVISIONS, IMAGES, RUO_DISCLAIMER } from "@/lib/data";
import { ArrowRight, FlaskConical } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
      aria-label="Hero"
    >
      {/* Background image + gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt=""
          className="w-full h-full object-cover opacity-30 dark:opacity-30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-background/60 dark:bg-transparent"
          style={{
            background: `
              radial-gradient(1200px 680px at 20% 10%, oklch(0.55 0.18 250 / 0.12), transparent 60%),
              radial-gradient(900px 520px at 70% 5%, oklch(0.72 0.12 210 / 0.08), transparent 55%),
              linear-gradient(180deg, var(--background-alpha, oklch(0.13 0.015 255 / 0.40)), var(--background))
            `,
          }}
        />
      </div>

      <div className="container relative z-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-stretch">
          {/* Copy */}
          <div className="pt-2">
            <div className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground font-medium mb-4">
              About Us
            </div>
            <h1 className="text-[clamp(40px,6vw,72px)] leading-[1.03] font-extrabold tracking-[-0.03em] text-foreground">
              Axion Scientific
            </h1>
            <p className="mt-4 text-[16.5px] leading-relaxed text-muted-foreground max-w-[60ch]">
              Axion Scientific is the company behind Axion Peptides and also
              provides scientific products and services including:{" "}
              <strong className="text-foreground font-semibold">
                Chemical Analysis
              </strong>{" "}
              and{" "}
              <strong className="text-foreground font-semibold">
                Filtration consumables
              </strong>
              .
            </p>

            {/* RUO Banner — soft amber tone */}
            <div className="mt-5 flex items-start gap-3 px-4 py-3 rounded-xl border border-[oklch(0.65_0.12_80/0.35)] bg-[oklch(0.65_0.12_80/0.08)]">
              <FlaskConical
                size={18}
                className="text-[oklch(0.72_0.10_80)] shrink-0 mt-0.5"
              />
              <p className="text-[13px] leading-relaxed text-[oklch(0.78_0.06_80)]">
                {RUO_DISCLAIMER.short} Peptide products are supplied exclusively
                for research purposes.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <a
                href="#divisions"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-[13.5px] font-medium text-white/90 border border-[oklch(0.55_0.18_250/0.45)] transition-all hover:-translate-y-px hover:shadow-xl"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.18 250 / 0.72), oklch(0.72 0.12 210 / 0.72))",
                  boxShadow: "0 10px 26px oklch(0 0 0 / 0.20)",
                }}
              >
                Explore divisions
                <ArrowRight size={14} />
              </a>
              <a
                href="#governance"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[13.5px] font-medium text-foreground border border-border bg-card/50 transition-all hover:-translate-y-px hover:bg-card hover:shadow-lg"
              >
                Companies House
              </a>
            </div>
          </div>

          {/* At a glance panel */}
          <aside
            className="relative rounded-2xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden h-full"
            aria-label="At a glance"
            style={{
              boxShadow: "0 24px 64px oklch(0 0 0 / 0.20)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute inset-[-2px] opacity-40 pointer-events-none"
              style={{
                background: `
                  radial-gradient(900px 420px at 30% 5%, oklch(0.55 0.18 250 / 0.15), transparent 55%),
                  radial-gradient(900px 420px at 70% 20%, oklch(0.72 0.12 210 / 0.10), transparent 58%)
                `,
              }}
            />

            <div className="relative p-5">
              <div className="flex flex-col gap-1 mb-4">
                <strong className="text-[13px] font-semibold tracking-tight text-foreground">
                  At a glance
                </strong>
                <span className="text-[12.5px] text-muted-foreground">
                  Operating categories
                </span>
              </div>

              <div className="grid gap-2.5">
                {DIVISIONS.map((d) => (
                  <div
                    key={d.slug}
                    className="grid grid-cols-[1fr_1.35fr] gap-3 items-start px-3 py-2.5 rounded-xl border border-border/60 bg-card/40"
                  >
                    <div className="text-[12.5px] text-muted-foreground">
                      {d.name}
                    </div>
                    <div className="text-[12.5px] text-foreground font-mono text-right leading-snug">
                      {d.category}
                      {d.ruo && (
                        <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full bg-[oklch(0.65_0.12_80/0.15)] text-[oklch(0.72_0.10_80)] border border-[oklch(0.65_0.12_80/0.25)] font-sans font-medium">
                          RUO
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-[12px] text-muted-foreground/80 leading-relaxed">
                Peptide reagents are supplied for Research Use Only. Service
                availability varies by contract and jurisdiction.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
