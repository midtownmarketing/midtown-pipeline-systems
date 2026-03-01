import { motion } from "framer-motion";

const PositioningStrip = () => {
  return (
    <section className="py-section-sm">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-section font-bold text-bright mb-5">
            Designed for brokers closing $25K+/month.
          </h2>
          <p className="text-secondary-foreground text-lg leading-relaxed max-w-xl mx-auto">
            If you're relying on referrals, inconsistent realtor relationships,
            or unpredictable renewals — this is the upgrade.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PositioningStrip;
