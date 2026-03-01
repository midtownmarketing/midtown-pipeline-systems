import { motion } from "framer-motion";

const audience = [
  "Solo agents building their book",
  "Small teams seeking stability",
  "Brokers tired of referral dependence",
  "Professionals ready for structured growth",
];

const WhoSection = () => {
  return (
    <section className="py-section">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="gold-line mb-5" />
          <p className="section-label mb-5">Who This Is For</p>
          <h2 className="font-display text-section font-bold text-bright mb-10">
            Built for brokers who want control.
          </h2>

          <div className="space-y-5">
            {audience.map((item) => (
              <p
                key={item}
                className="text-secondary-foreground text-lg flex items-center gap-4"
              >
                <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoSection;
