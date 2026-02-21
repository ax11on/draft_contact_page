/*
 * ContactSection — Contact cards with email links and site notice
 * Design: "Cold Lab" dark technical interface
 */

import { Mail, FileText } from "lucide-react";

interface Props {
  onOpenDisclaimer: () => void;
}

export default function ContactSection({ onOpenDisclaimer }: Props) {
  return (
    <section
      id="contact"
      className="py-14 lg:py-16 border-b border-white/[0.06]"
      aria-label="Contact"
    >
      <div className="container">
        <div className="flex flex-col gap-2.5 max-w-[78ch] mb-8">
          <div className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground font-medium">
            Contact
          </div>
          <h2 className="text-[clamp(28px,3.5vw,44px)] leading-[1.06] font-bold tracking-[-0.03em] text-foreground">
            Talk to Axion Scientific
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Partnerships, corporate information, and division enquiries — we'll
            route you to the right team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* General enquiries */}
          <div
            className="relative rounded-2xl border border-white/[0.08] bg-white/[0.04] overflow-hidden p-5 flex flex-col justify-between gap-5 min-h-[220px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:bg-white/[0.06]"
            style={{ boxShadow: "0 12px 40px oklch(0 0 0 / 0.25)" }}
          >
            <div
              className="absolute inset-[-1px] opacity-35 pointer-events-none"
              style={{
                background: `
                  radial-gradient(480px 220px at 20% 20%, oklch(0.55 0.18 250 / 0.20), transparent 60%),
                  radial-gradient(520px 240px at 70% 10%, oklch(0.72 0.12 210 / 0.18), transparent 62%)
                `,
              }}
            />
            <div className="relative flex flex-col gap-2.5">
              <span className="text-[12px] px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.03] text-muted-foreground w-fit">
                General
              </span>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                General enquiries
              </h3>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed">
                Partnerships, corporate information, company structure, and
                governance queries.
              </p>
            </div>
            <div className="relative flex flex-wrap gap-2.5 items-center">
              <a
                href="mailto:comms@axionscientific.com"
                className="inline-flex items-center gap-2 text-[13px] px-3 py-2 rounded-full border border-[oklch(0.55_0.18_250/0.30)] bg-white/[0.03] text-[oklch(0.72_0.12_250)] transition-all hover:-translate-y-px hover:bg-white/[0.06] hover:shadow-lg"
              >
                <Mail size={13} />
                comms@axionscientific.com
              </a>
              <button
                type="button"
                onClick={onOpenDisclaimer}
                className="inline-flex items-center gap-2 text-[13px] px-3 py-2 rounded-full border border-white/[0.06] bg-white/[0.03] text-muted-foreground transition-all hover:-translate-y-px hover:bg-white/[0.06] hover:text-foreground"
              >
                <FileText size={13} />
                Site notice
              </button>
            </div>
          </div>

          {/* Request routing */}
          <div
            className="relative rounded-2xl border border-white/[0.08] bg-white/[0.04] overflow-hidden p-5 flex flex-col justify-between gap-5 min-h-[220px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:bg-white/[0.06]"
            style={{ boxShadow: "0 12px 40px oklch(0 0 0 / 0.25)" }}
          >
            <div
              className="absolute inset-[-1px] opacity-35 pointer-events-none"
              style={{
                background: `
                  radial-gradient(480px 220px at 80% 80%, oklch(0.55 0.18 250 / 0.18), transparent 60%),
                  radial-gradient(520px 240px at 30% 90%, oklch(0.72 0.12 210 / 0.16), transparent 62%)
                `,
              }}
            />
            <div className="relative flex flex-col gap-2.5">
              <div className="flex gap-2">
                <span className="text-[12px] px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.03] text-muted-foreground">
                  Divisions
                </span>
                <span className="text-[12px] px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.03] text-muted-foreground">
                  Routing
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Request routing
              </h3>
              <p className="text-[13.5px] text-muted-foreground leading-relaxed">
                Direct your enquiry to a division: Chemical Analysis, Axion
                Peptides, or Filtration. We'll route you to the right team.
              </p>
            </div>
            <div className="relative flex flex-wrap gap-2.5 items-center">
              <a
                href="mailto:comms@axionscientific.com"
                className="inline-flex items-center gap-2 text-[13px] px-3 py-2 rounded-full border border-[oklch(0.55_0.18_250/0.30)] bg-white/[0.03] text-[oklch(0.72_0.12_250)] transition-all hover:-translate-y-px hover:bg-white/[0.06] hover:shadow-lg"
              >
                <Mail size={13} />
                comms@axionscientific.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
