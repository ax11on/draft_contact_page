/*
 * DivisionDialog — Modal with full division details, bulk orders, services
 * Design: "Cold Lab" dark technical interface
 * Backdrop blur, glass panels, instrument-readout KV rows
 */

import { useState } from "react";
import type { Division } from "@/lib/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronDown, ExternalLink, AlertTriangle, X } from "lucide-react";

interface Props {
  division: Division | null;
  open: boolean;
  onClose: () => void;
}

export default function DivisionDialog({ division, open, onClose }: Props) {
  const [expandedServices, setExpandedServices] = useState<Set<number>>(new Set());

  if (!division) return null;

  const toggleService = (idx: number) => {
    setExpandedServices((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="w-[min(980px,calc(100vw-24px))] max-h-[calc(100svh-24px)] p-0 rounded-2xl border border-white/[0.08] bg-[oklch(0.15_0.018_255/0.96)] shadow-2xl overflow-hidden flex flex-col gap-0">
        {/* Header */}
        <DialogHeader
          className="px-5 pt-5 pb-4 border-b border-white/[0.06] shrink-0"
          style={{
            background: `
              radial-gradient(800px 360px at 20% 0%, oklch(0.55 0.18 250 / 0.12), transparent 60%),
              radial-gradient(800px 360px at 80% 0%, oklch(0.72 0.12 210 / 0.08), transparent 62%),
              oklch(0.13 0.015 255 / 0.42)
            `,
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-1.5">
              <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
                {division.name}
              </DialogTitle>
              <DialogDescription className="text-[13px] text-muted-foreground leading-relaxed max-w-[80ch]">
                {division.subtitle}
              </DialogDescription>
              {division.ruo && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[oklch(0.65_0.12_80/0.15)] text-[oklch(0.78_0.08_80)] border border-[oklch(0.65_0.12_80/0.30)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.10_80)] animate-pulse" />
                    RESEARCH USE ONLY
                  </span>
                </div>
              )}
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] active:bg-white/[0.10] text-muted-foreground hover:text-foreground transition"
            >
              <X size={18} />
            </button>
          </div>
        </DialogHeader>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-4 items-stretch">
            {/* Overview */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 flex flex-col gap-3 h-full">
              <h4 className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground font-bold">
                Overview
              </h4>
              <p className="text-[14px] text-foreground/90 leading-relaxed">
                {division.context}
              </p>
            </div>

            {/* KV data */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 flex flex-col gap-3 h-full">
              <h4 className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground font-bold">
                Scope + Deliverables
              </h4>
              <div className="grid gap-2.5">
                {division.kv.map(([k, v], i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1fr_1.2fr] gap-3 px-3 py-2.5 rounded-xl border border-white/[0.05] bg-white/[0.02] items-start"
                  >
                    <span className="text-[12.5px] text-muted-foreground">{k}</span>
                    <span className="text-[12.5px] text-foreground font-mono leading-snug whitespace-pre-line">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-muted-foreground/80 leading-relaxed mt-1">
                Scope, timelines, and documentation are defined per project.
              </p>
            </div>

            {/* Notes */}
            <div className="lg:col-span-2 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 flex flex-col gap-3">
              <h4 className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground font-bold">
                Notes
              </h4>
              <p className="text-[14px] text-foreground/90 leading-relaxed whitespace-pre-line">
                {division.notes}
              </p>
            </div>

            {/* RUO Warning (for peptides) */}
            {division.ruo && (
              <div className="lg:col-span-2 rounded-2xl border border-[oklch(0.65_0.12_80/0.25)] bg-[oklch(0.65_0.12_80/0.06)] p-4 flex items-start gap-3">
                <AlertTriangle size={18} className="text-[oklch(0.72_0.10_80)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[12px] tracking-[0.14em] uppercase text-[oklch(0.78_0.08_80)] font-bold mb-2">
                    Research Use Only Disclaimer
                  </h4>
                  <p className="text-[13px] text-[oklch(0.78_0.06_80)] leading-relaxed">
                    All peptide reagents are supplied exclusively for Research Use Only (RUO). Not for human consumption. Not intended for diagnostic or therapeutic use.
                  </p>
                </div>
              </div>
            )}

            {/* Bulk orders */}
            {division.bulk && (
              <div className="lg:col-span-2 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 flex flex-col gap-4">
                <h4 className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground font-bold">
                  Bulk Orders
                </h4>
                <p className="text-[14px] text-foreground/90 leading-relaxed">
                  {division.bulk.text}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-2.5 items-center">
                  {division.bulk.actions.map(([label, href], i) => (
                    <a
                      key={i}
                      href={href}
                      className="inline-flex items-center gap-2 text-[13px] px-3 py-2 rounded-full border border-[oklch(0.55_0.18_250/0.30)] bg-white/[0.03] text-[oklch(0.72_0.12_250)] transition-all hover:-translate-y-px hover:bg-white/[0.06] hover:shadow-lg"
                    >
                      {label}
                      <ExternalLink size={12} />
                    </a>
                  ))}
                </div>

                {/* Services */}
                <h4 className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground font-bold mt-2">
                  Additional Services
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {division.bulk.services.map((svc, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3"
                    >
                      <button
                        type="button"
                        className="w-full flex items-start justify-between gap-2 text-left"
                        onClick={() => toggleService(idx)}
                        aria-expanded={expandedServices.has(idx)}
                      >
                        <div className="flex items-start gap-2.5 min-w-0">
                          <span className="w-4 h-4 rounded-full border-[1.5px] border-white/[0.25] bg-white/[0.04] shrink-0 mt-0.5" />
                          <div className="flex flex-col gap-0.5 min-w-0">
                            <span className="text-[13px] font-semibold text-foreground/90 leading-snug">
                              {svc.name}
                            </span>
                            {division.bulk!.showPrices && svc.price && (
                              <span className="text-[12.5px] font-mono text-muted-foreground">
                                {svc.price}
                              </span>
                            )}
                          </div>
                        </div>
                        <ChevronDown
                          size={14}
                          className={`text-muted-foreground shrink-0 mt-0.5 transition-transform duration-200 ${
                            expandedServices.has(idx) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedServices.has(idx) && (
                        <p className="mt-2 text-[12.5px] text-muted-foreground leading-relaxed pl-6.5">
                          {svc.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <p className="text-[12px] text-muted-foreground/80 leading-relaxed">
                  {division.bulk.fineprint}
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
