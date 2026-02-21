/*
 * LeadershipSection — leadership narrative
 * Design: "Cold Lab" dark technical interface
 */

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="py-16 lg:py-20 border-b border-white/[0.06]"
      aria-label="Leadership"
    >
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="text-[12px] tracking-[0.14em] uppercase text-muted-foreground font-medium">
            Leadership
          </div>
          <h2 className="text-[clamp(28px,3.5vw,44px)] leading-[1.06] font-bold tracking-[-0.03em] text-foreground">
            Leadership
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Victor Muraviev serves as the Chief Executive Officer of Axion
            Scientific Ltd. He directs strategy and operations across Axion
            Peptides, Chemical Analysis, and Filtration consumables. He also
            leads the internal research division at Axion Scientific.
          </p>
        </div>
      </div>
    </section>
  );
}
