/*
 * DisclaimerDialog — Full site notice with RUO disclaimer
 * Design: "Cold Lab" dark technical interface
 * Comprehensive legal/RUO language for peptide vendor compliance
 */

import { SITE_NOTICE, RUO_DISCLAIMER } from "@/lib/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AlertTriangle, Shield, X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DisclaimerDialog({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="w-[min(720px,calc(100vw-24px))] max-h-[calc(100svh-24px)] p-0 rounded-2xl border border-white/[0.08] bg-[oklch(0.15_0.018_255/0.96)] shadow-2xl overflow-hidden flex flex-col gap-0">
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
                Site Notice
              </DialogTitle>
              <DialogDescription className="text-[13px] text-muted-foreground">
                Legal information and disclaimers
              </DialogDescription>
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
        <div className="flex-1 overflow-y-auto overscroll-contain p-5 flex flex-col gap-4">
          {/* General notice */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-muted-foreground" />
              <h4 className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground font-bold">
                General Notice
              </h4>
            </div>
            <p className="text-[14px] text-foreground/90 leading-relaxed">
              {SITE_NOTICE.general}
            </p>
          </div>

          {/* RUO Disclaimer */}
          <div className="rounded-2xl border border-[oklch(0.65_0.12_80/0.25)] bg-[oklch(0.65_0.12_80/0.06)] p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <AlertTriangle size={16} className="text-[oklch(0.72_0.10_80)]" />
              <h4 className="text-[12px] tracking-[0.14em] uppercase text-[oklch(0.78_0.08_80)] font-bold">
                Research Use Only (RUO) Disclaimer
              </h4>
            </div>
            <div className="text-[14px] text-[oklch(0.78_0.06_80)] leading-relaxed whitespace-pre-line">
              {RUO_DISCLAIMER.full}
            </div>
          </div>

          {/* Liability */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 flex flex-col gap-3">
            <h4 className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground font-bold">
              Limitation of Liability
            </h4>
            <p className="text-[14px] text-foreground/90 leading-relaxed">
              {SITE_NOTICE.liability}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
