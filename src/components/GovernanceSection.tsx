/*
 * GovernanceSection — Company information with Companies House links
 * Design: "Cold Lab" dark technical interface
 * Split layout: narrative + glass panel with company data
 */

import { COMPANY } from "@/lib/data";
import { ExternalLink } from "lucide-react";

const GOVERNANCE_FACTS: [string, string][] = [
  ["Company no.", COMPANY.number],
  ["Registered office", COMPANY.registeredOffice],
];

export default function GovernanceSection() {
  return (
    <section
      id="governance"
      className="py-16 lg:py-20 border-b border-white/[0.06]"
      aria-label="Governance"
    >
      <div className="container">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5 items-stretch">
          {/* Left: narrative */}
          <div className="flex flex-col gap-4">
            <div className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground font-medium">
              Governance
            </div>
            <h2 className="text-[clamp(28px,3.5vw,44px)] leading-[1.06] font-bold tracking-[-0.03em] text-foreground">
              Company information
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Basic registration details are published on Companies House. For
              anything formal (contracts, invoices, statutory notices), use the
              registered office address.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href={COMPANY.companiesHouseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13.5px] font-medium text-foreground border border-white/[0.08] bg-white/[0.04] transition-all hover:-translate-y-px hover:bg-white/[0.08] hover:shadow-lg"
              >
                Companies House overview
                <ExternalLink size={13} />
              </a>
              <a
                href={COMPANY.officersUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13.5px] font-medium text-foreground border border-white/[0.08] bg-white/[0.04] transition-all hover:-translate-y-px hover:bg-white/[0.08] hover:shadow-lg"
              >
                Officers
                <ExternalLink size={13} />
              </a>
              <a
                href={COMPANY.filingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[13.5px] font-medium text-foreground border border-white/[0.08] bg-white/[0.04] transition-all hover:-translate-y-px hover:bg-white/[0.08] hover:shadow-lg"
              >
                Filing history
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Right: glass panel */}
          <div
            className="relative rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm overflow-hidden"
            aria-label="Company details"
            style={{ boxShadow: "0 24px 64px oklch(0 0 0 / 0.30)" }}
          >
            <div
              className="absolute inset-[-2px] opacity-40 pointer-events-none"
              style={{
                background: `
                  radial-gradient(900px 420px at 30% 5%, oklch(0.55 0.18 250 / 0.22), transparent 55%),
                  radial-gradient(900px 420px at 70% 20%, oklch(0.72 0.12 210 / 0.16), transparent 58%)
                `,
              }}
            />
            <div className="relative p-5 flex flex-col h-full">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex flex-col gap-1">
                  <strong className="text-[13px] font-semibold tracking-tight text-foreground">
                    Company details
                  </strong>
                  <span className="text-[12.5px] text-muted-foreground">
                    Companies House
                  </span>
                </div>
                <span className="text-[12px] px-2.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-muted-foreground whitespace-nowrap">
                  AXION SCIENTIFIC LTD
                </span>
              </div>

              <div className="grid gap-2.5 mt-1">
                {GOVERNANCE_FACTS.map(([label, value], i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1fr_1.35fr] gap-3 items-start px-3 py-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03]"
                  >
                    <div className="text-[12.5px] text-muted-foreground">
                      {label}
                    </div>
                    <div className="text-[12.5px] text-foreground font-mono text-right leading-snug break-words">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
