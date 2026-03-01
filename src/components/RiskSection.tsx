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
          className="border-t border-border pt-14 text-center"
        >
          <p className="text-secondary-foreground leading-relaxed max-w-lg mx-auto">
            No long-term contracts. No lock-in. No hidden fees. Month-to-month
            structure built on alignment — not obligation. If it's not working,
            you leave.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RiskSection;
