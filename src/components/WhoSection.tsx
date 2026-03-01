import { motion } from "framer-motion";

const audience = [
  "Solo agents building their book",
  "Small teams seeking stability",
  "Brokers tired of referral dependence",
  "Professionals ready for structured growth",
];

const WhoSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="relative container max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Who This Is For</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bright mb-8 tracking-tight">
            Built for brokers who want control.
          </h2>

          <div className="space-y-3">
            {audience.map((item) => (
              <p
                key={item}
                className="text-secondary-foreground text-lg flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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
