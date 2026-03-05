import { motion } from "framer-motion";

const RiskSection = () => {
  return (
    <section className="py-section-sm">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="section-label mb-5">Structure</p>
          <h2 className="font-display text-section text-bright mb-6">
            ROI-Backed. No Long-Term Contracts.
          </h2>
          <p className="text-secondary-foreground text-lg leading-relaxed max-w-lg mx-auto mb-4">
            Month-to-month structure. No shared leads. No lock-in. The system pays for itself — or you walk. That's the discipline we operate with.
          </p>
          <p className="text-sm text-primary font-semibold">
            If the math doesn't work, we'll tell you before you spend a dollar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RiskSection;
