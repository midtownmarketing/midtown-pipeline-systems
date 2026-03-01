import { motion } from "framer-motion";

const RiskSection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-border pt-12"
        >
          <p className="text-secondary-foreground leading-relaxed max-w-xl">
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
