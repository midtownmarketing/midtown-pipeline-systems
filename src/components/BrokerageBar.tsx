const brokerages = [
  "Dominion Lending Centres",
  "Mortgage Alliance",
  "Mortgage Architects",
  "VERICO",
  "Centum Financial",
  "TMG The Mortgage Group",
  "Invis",
  "Premiere Mortgage Centre",
  "Multi-Prêts Mortgages",
  "Radius Financial",
];

const BrokerageBar = () => {
  return (
    <section className="py-10 border-y border-border overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-8">
        Trusted by Brokers From Leading Networks
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll">
          {[...brokerages, ...brokerages].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-8 flex items-center justify-center"
            >
              <span className="text-sm font-medium text-muted-foreground/60 whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrokerageBar;
