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
          <span className="gold-line mx-auto mb-5" />
          <h2 className="font-display text-section font-bold text-bright mb-6">
            No long-term contracts.
          </h2>
          <p className="text-secondary-foreground text-lg leading-relaxed max-w-lg mx-auto mb-6">
            Month-to-month structure. No shared leads.
            Clear performance expectations.
          </p>
          <p className="text-sm text-muted-foreground italic">
            We only work with brokers serious about growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RiskSection;
