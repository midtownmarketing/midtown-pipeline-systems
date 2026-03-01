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
          <p className="section-label mb-5">Zero Risk</p>
          <h2 className="font-display text-section text-bright mb-6">
            No Long-Term Contracts. Ever.
          </h2>
          <p className="text-secondary-foreground text-lg leading-relaxed max-w-lg mx-auto mb-4">
            Month-to-month. No shared leads. Clear performance expectations from day one.
          </p>
          <p className="text-sm text-primary font-semibold">
            Results within your agreement, or we refund your investment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RiskSection;
