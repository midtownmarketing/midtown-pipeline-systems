import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Strategy & Fit Review",
    description: "We assess your market, capacity, and goals to determine fit.",
  },
  {
    step: "02",
    title: "Pipeline Installation",
    description:
      "Campaigns, automation, and CRM infrastructure built and configured.",
  },
  {
    step: "03",
    title: "Launch & Optimization",
    description:
      "System goes live. Continuous optimization based on real performance data.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label mb-4">Process</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bright tracking-tight">
            Simple. Structured. Installed.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <p className="font-mono text-sm text-primary mb-3">{s.step}</p>
              <h3 className="text-lg font-semibold text-bright mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-secondary-foreground leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
