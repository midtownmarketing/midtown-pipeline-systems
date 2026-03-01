import { motion } from "framer-motion";

const stats = [
  "40–60 Qualified Inquiries / Month",
  "5-Minute Automated SMS + Email Contact",
  "No Shared Leads",
  "Backend CRM Installed",
];

const ProofBand = () => {
  return (
    <section className="py-section-sm bg-alt relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.02]" />
      <div className="relative container max-w-5xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-lg md:text-xl font-bold text-bright leading-snug">
                {stat}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center text-sm text-muted-foreground tracking-wide"
        >
          Built for brokers who want control over their volume.
        </motion.p>
      </div>
    </section>
  );
};

export default ProofBand;
