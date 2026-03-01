import { motion } from "framer-motion";

const reasons = [
  "Mortgage-only focus",
  "Structured backend automation",
  "Transparent performance",
  "Month-to-month structure",
  "No shared leads",
];

const WhyMidtownSection = () => {
  return (
    <section className="py-24">
      <div className="container max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Why Midtown</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bright mb-8 tracking-tight">
            Why Midtown.
          </h2>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
            {reasons.map((item) => (
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

export default WhyMidtownSection;
