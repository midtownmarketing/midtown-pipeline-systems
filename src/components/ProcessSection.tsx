import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Strategy & Fit Review",
    description: "We assess your market, capacity, and goals to determine fit.",
  },
  {
    num: "02",
    title: "System Installation",
    description: "Campaigns, automation, and CRM infrastructure built and configured.",
  },
  {
    num: "03",
    title: "Launch & Optimization",
    description: "System goes live. Continuous optimization based on real performance data.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-section bg-alt">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-5">Process</p>
          <h2 className="font-display text-section text-bright">
            Simple. Structured. Installed.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-primary/20" />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative text-center"
            >
              <span className="font-display text-[7rem] text-bright/[0.03] leading-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 pointer-events-none select-none">
                {s.num}
              </span>

              <div className="relative pt-6">
                <p className="text-xs font-semibold text-primary mb-4 tracking-wider">{s.num}</p>
                <h3 className="text-lg font-bold text-bright mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-secondary-foreground leading-relaxed max-w-[240px] mx-auto">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
