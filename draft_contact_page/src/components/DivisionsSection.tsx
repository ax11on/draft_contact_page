/*
 * DivisionsSection — Grid of division cards with detail dialog
 * Design: "Cold Lab" dark technical interface
 */

import { useState } from "react";
import { DIVISIONS } from "@/lib/data";
import DivisionCard from "./DivisionCard";
import DivisionDialog from "./DivisionDialog";

export default function DivisionsSection() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const selectedDivision = DIVISIONS.find((d) => d.slug === selectedSlug) || null;

  return (
    <section
      id="divisions"
      className="py-16 lg:py-20 border-b border-white/[0.06]"
      aria-label="Divisions"
    >
      <div className="container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8">
          <div className="flex flex-col gap-2.5 max-w-[78ch]">
            <div className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground font-medium">
              Divisions
            </div>
            <h2 className="text-[clamp(28px,3.5vw,44px)] leading-[1.06] font-bold tracking-[-0.03em] text-foreground">
              Operating categories
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <button
              type="button"
              onClick={() => setSelectedSlug("axion-peptides")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13.5px] font-medium text-foreground border border-white/[0.08] bg-white/[0.04] transition-all hover:-translate-y-px hover:bg-white/[0.08] hover:shadow-lg"
            >
              Visit Axion Peptides
            </button>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13.5px] font-medium text-foreground border border-white/[0.08] bg-white/[0.04] transition-all hover:-translate-y-px hover:bg-white/[0.08] hover:shadow-lg"
            >
              Request a quote
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DIVISIONS.map((d) => (
            <DivisionCard
              key={d.slug}
              division={d}
              onOpenDetail={setSelectedSlug}
            />
          ))}
        </div>
      </div>

      {/* Dialog */}
      <DivisionDialog
        division={selectedDivision}
        open={!!selectedSlug}
        onClose={() => setSelectedSlug(null)}
      />
    </section>
  );
}
