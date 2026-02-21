/*
 * Footer — Site footer with disclaimers, links, and RUO notice
 * Design: "Cold Lab" dark technical interface
 * Gradient background, two-column layout
 */

import { RUO_DISCLAIMER } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-12"
      role="contentinfo"
      aria-label="Footer"
      style={{
        background: `linear-gradient(180deg, oklch(0.13 0.015 255), oklch(0.10 0.012 255))`,
      }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
          {/* Left: disclaimers */}
          <div className="flex flex-col gap-4">
            <p className="text-[12.5px] text-muted-foreground leading-relaxed">
              Information on this website is provided for general informational
              purposes only. Service availability and deliverables vary by
              contract and jurisdiction.
            </p>

            {/* RUO footer notice */}
            <div className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl border border-[oklch(0.65_0.12_80/0.20)] bg-[oklch(0.65_0.12_80/0.05)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.10_80)] shrink-0 mt-1.5" />
              <p className="text-[12px] text-[oklch(0.78_0.06_80)] leading-relaxed">
                {RUO_DISCLAIMER.medium}
              </p>
            </div>

            <p className="text-[12.5px] text-muted-foreground">
              &copy; {year} Axion Scientific. All rights reserved.
            </p>
          </div>

          {/* Right: link columns */}
          <div
            className="grid grid-cols-2 gap-3.5"
            aria-label="Footer columns"
          >
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
              <strong className="text-[12.5px] font-semibold tracking-tight text-foreground block mb-2">
                Contact
              </strong>
              <a
                href="mailto:comms@axionscientific.com"
                className="block text-[12.5px] text-muted-foreground py-1.5 transition-colors hover:text-foreground"
              >
                comms@axionscientific.com
              </a>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4">
              <strong className="text-[12.5px] font-semibold tracking-tight text-foreground block mb-2">
                Links
              </strong>
              <a
                href="/#divisions"
                className="block text-[12.5px] text-muted-foreground py-1.5 transition-colors hover:text-foreground"
              >
                Divisions
              </a>
              <a
                href="/#governance"
                className="block text-[12.5px] text-muted-foreground py-1.5 transition-colors hover:text-foreground"
              >
                Governance
              </a>
              <a
                href="/#leadership"
                className="block text-[12.5px] text-muted-foreground py-1.5 transition-colors hover:text-foreground"
              >
                Leadership
              </a>
              <a
                href="/contact"
                className="block text-[12.5px] text-muted-foreground py-1.5 transition-colors hover:text-foreground"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
