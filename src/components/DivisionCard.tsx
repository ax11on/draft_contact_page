/*
 * DivisionCard — Individual division card with image, RUO badge, and actions
 * Design: "Cold Lab" dark technical interface
 * Only Axion Peptides gets "View details" button
 * RUO badge uses soft amber tone (not red)
 */

import type { Division } from "@/lib/data";
import { ArrowRight } from "lucide-react";

interface Props {
  division: Division;
  onOpenDetail: (slug: string) => void;
}

export default function DivisionCard({ division, onOpenDetail }: Props) {
  const showViewDetails = division.slug === "axion-peptides";

  return (
    <article
      className="group relative rounded-2xl border border-border bg-card/60 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:bg-card/80"
      style={{ boxShadow: "0 12px 40px oklch(0 0 0 / 0.15)" }}
      aria-label={division.name}
    >
      {/* Glow */}
      <div
        className="absolute inset-[-1px] opacity-25 pointer-events-none"
        style={{
          background: `
            radial-gradient(480px 220px at 20% 20%, oklch(0.55 0.18 250 / 0.20), transparent 60%),
            radial-gradient(520px 240px at 70% 10%, oklch(0.72 0.12 210 / 0.18), transparent 62%)
          `,
        }}
      />

      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={division.image}
          alt={`${division.name} laboratory`}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

        {/* RUO badge on image — soft amber */}
        {division.ruo && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[oklch(0.65_0.12_80/0.20)] border border-[oklch(0.65_0.12_80/0.40)] backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.10_80)] animate-pulse" />
            <span className="text-[11px] font-semibold text-[oklch(0.78_0.08_80)] tracking-wide">
              RUO
            </span>
          </div>
        )}
      </div>

      <div className="relative p-5 flex flex-col gap-4">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <span className="text-[12px] px-2.5 py-1 rounded-full border border-border/60 bg-card/40 text-muted-foreground whitespace-nowrap">
              {division.category}
            </span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            {division.name}
          </h3>
          <p className="text-[13.5px] text-muted-foreground leading-relaxed max-w-[56ch]">
            {division.blurb}
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 items-center">
          {showViewDetails && (
            <button
              type="button"
              onClick={() => onOpenDetail(division.slug)}
              className="inline-flex items-center gap-2 text-[13px] px-3 py-2 rounded-full border border-[oklch(0.55_0.18_250/0.30)] bg-card/40 text-[oklch(0.72_0.12_250)] transition-all hover:-translate-y-px hover:bg-card/60 hover:shadow-lg"
              aria-label={`Open ${division.name} details`}
            >
              View details
              <ArrowRight size={13} />
            </button>
          )}
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-[13px] px-3 py-2 rounded-full border border-border/60 bg-card/40 text-muted-foreground transition-all hover:-translate-y-px hover:bg-card/60 hover:text-foreground"
            aria-label={`Contact about ${division.name}`}
          >
            Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
