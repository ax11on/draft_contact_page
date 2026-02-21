/*
 * Contact — Dedicated contact page with form
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[9999] focus:px-3 focus:py-2 focus:rounded-xl focus:border focus:border-white/[0.08] focus:bg-card focus:text-foreground focus:shadow-lg"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="flex-1">
        <section
          aria-label="Contact"
          className="py-16 lg:py-20 border-b border-white/[0.06]"
        >
          <div className="container">
            <div className="flex flex-col gap-2.5 mb-8">
              <div className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground font-medium">
                Contact
              </div>
              <h1 className="text-[clamp(28px,3.5vw,44px)] leading-[1.06] font-bold tracking-[-0.03em] text-foreground">
                Contact Axion Scientific
              </h1>
              <p className="text-[15px] text-muted-foreground leading-relaxed max-w-[78ch]">
                Submit an enquiry using the form below.
              </p>
            </div>

            <div
              className="rounded-2xl border border-white/[0.08] bg-white/[0.04] overflow-hidden p-5"
              style={{ boxShadow: "0 12px 40px oklch(0 0 0 / 0.25)" }}
            >
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
