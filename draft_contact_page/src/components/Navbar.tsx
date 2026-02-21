/*
 * Navbar — Sticky frosted-glass navigation
 * Design: "Cold Lab" dark technical interface
 * Hairline bottom border, backdrop blur, bioluminescent brand mark
 */

import { useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[oklch(0.13_0.015_255/0.72)] backdrop-blur-xl backdrop-saturate-[1.8]">
      <div className="container flex items-center justify-between gap-4 py-2.5">
        {/* Brand */}
        <a
          href="/#top"
          className="flex items-center gap-2.5 shrink-0"
          aria-label="Axion Scientific Home"
        >
          <span
            className="w-7 h-7 rounded-[9px] shrink-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(120% 120% at 30% 30%, oklch(0.72 0.12 210 / 0.38), oklch(0.55 0.18 250 / 0.82) 35%, oklch(0.72 0.12 210 / 0.58) 62%, oklch(0.15 0.015 255 / 0.80) 100%)",
              boxShadow: "0 10px 24px oklch(0.55 0.18 250 / 0.30)",
              border: "1px solid oklch(1 0 0 / 0.08)",
            }}
          />
          <span className="flex flex-col gap-px">
            <strong className="text-[13px] font-semibold tracking-tight text-foreground">
              Axion Scientific
            </strong>
            <span className="text-[12px] text-muted-foreground tracking-tight">
              Research enablement
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[12.5px] text-muted-foreground px-3 py-2 rounded-full transition-colors hover:bg-white/[0.06] hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <a
            href="/#divisions"
            className="text-[12.5px] px-3 py-2 rounded-full border border-white/[0.08] bg-white/[0.04] text-foreground transition-all hover:-translate-y-px hover:bg-white/[0.08] hover:shadow-lg"
          >
            Explore
          </a>
          <a
            href="/contact"
            className="text-[12.5px] px-3 py-2 rounded-full border border-[oklch(0.55_0.18_250/0.45)] text-white/90 transition-all hover:-translate-y-px hover:shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.55 0.18 250 / 0.72), oklch(0.72 0.12 210 / 0.72))",
            }}
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg border border-white/[0.08] bg-white/[0.04] text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-[oklch(0.13_0.015_255/0.95)] backdrop-blur-xl">
          <nav className="container py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground px-3 py-2.5 rounded-lg transition-colors hover:bg-white/[0.06] hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 mt-3 px-3">
              <a
                href="/#divisions"
                className="text-[13px] px-4 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                Explore
              </a>
              <a
                href="/contact"
                className="text-[13px] px-4 py-2.5 rounded-full border border-[oklch(0.55_0.18_250/0.45)] text-white/90"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.18 250 / 0.72), oklch(0.72 0.12 210 / 0.72))",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
