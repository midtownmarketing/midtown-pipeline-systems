import { motion } from "framer-motion";

const stats = [
  { value: "40–60", label: "Qualified Inquiries / Month" },
  { value: "5-Min", label: "Automated SMS + Email Contact" },
  { value: "0", label: "Shared Leads" },
  { value: "CRM", label: "Backend Installed" },
];

const ProofBand = () => {
  return (
    <section className="py-16 bg-alt relative overflow-hidden border-y border-border">
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
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-secondary-foreground mt-10"
        >
          Built for brokers who want control over their volume.
        </motion.p>
      </div>
    </section>
  );
};

export default ProofBand;
