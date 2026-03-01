import { motion } from "framer-motion";

const painPoints = [
  "Your pipeline dries up without warning",
  "Leads go cold because nobody follows up fast enough",
  "You're spending on ads with no system behind them",
  "Income swings month to month",
];

const ProblemSection = () => {
  return (
    <section className="py-section bg-alt">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="section-label mb-5">The Problem</p>
          <h2 className="font-display text-section text-bright mb-10">
            Hoping For Referrals Isn't a Growth Strategy.
          </h2>

          <div className="space-y-5 mb-10">
            {painPoints.map((point) => (
              <p
                key={point}
                className="text-secondary-foreground text-lg flex items-center gap-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {point}
              </p>
            ))}
          </div>

          <p className="text-bright text-lg font-semibold leading-relaxed">
            You don't need more leads. You need a system that turns them into closings.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
