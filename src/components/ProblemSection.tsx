import { motion } from "framer-motion";

const painPoints = [
  "Volume fluctuates",
  "Follow-up slips",
  "Marketing feels unclear",
  "Income becomes unpredictable",
];

const ProblemSection = () => {
  return (
    <section className="py-section bg-alt">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="gold-line mb-5" />
          <p className="section-label mb-5">The Problem</p>
          <h2 className="font-display text-section font-bold text-bright mb-10">
            Referrals don't scale.
          </h2>

          <div className="space-y-5 mb-10">
            {painPoints.map((point) => (
              <p
                key={point}
                className="text-secondary-foreground text-lg flex items-center gap-4"
              >
                <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                {point}
              </p>
            ))}
          </div>

          <p className="text-secondary-foreground text-lg leading-relaxed">
            Predictable income requires predictable lead flow.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
