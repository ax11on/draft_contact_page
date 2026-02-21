/*
 * AboutSection — Company overview
 * Design: "Cold Lab" dark technical interface
 * Plain section (no glass panel)
 */

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 lg:py-20 border-b border-white/[0.06]"
      aria-label="About"
    >
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground font-medium">
            About
          </div>
          <h2 className="text-[clamp(28px,3.5vw,44px)] leading-[1.06] font-bold tracking-[-0.03em] text-foreground">
            About Axion Scientific
          </h2>

          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Axion Scientific is a UK-based supplier of lab consumables and
            research-use amino acid reagents.
          </p>

          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Third party HPLC CoAs are included for all catalogue peptides.
            Further analytical testing includes TFA analysis, Raw data, Variance
            testing, pH measurement, Endotoxin analysis, LCMS screening for
            sequence contamination, Sterility testing and Heavy metals analysis.
            Availability, turnaround, and final pricing are confirmed at
            quotation.
          </p>

          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Pricing is provided around the default HPLC-tested batches, with
            further testing provided by request and additional purchase.
          </p>

          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Chemical Analysis supports testing of ordered reagents using the
            analytical methods listed, with additional testing offered by
            enquiry. Axion Scientific also supplies USP vials and laboratory
            filters, with manufacturer documentation provided where available.
          </p>
        </div>
      </div>
    </section>
  );
}
