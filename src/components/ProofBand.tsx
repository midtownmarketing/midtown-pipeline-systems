import { motion } from "framer-motion";

const stats = [
  { value: "2–4", label: "Additional Funded Deals / Month" },
  { value: "<5 Min", label: "Automated Lead Response" },
  { value: "100%", label: "Exclusive Leads" },
  { value: "Ontario", label: "Market-Specific Targeting" },
];

const ProofBand = () => {
  return (
    <section className="py-16 relative overflow-hidden border-b border-border">
      <div className="relative container max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-3xl md:text-4xl text-bright mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofBand;
