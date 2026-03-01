import { motion } from "framer-motion";

const pillars = [
  { title: "Lead Generation", desc: "Targeted Facebook & Google campaigns generating mortgage-specific inquiries.", checks: ["Multi-platform ads", "Mortgage-targeted", "Exclusive leads"] },
  { title: "5-Minute Automated Contact", desc: "Instant SMS + email sequences that engage leads immediately.", checks: ["Instant SMS", "Email sequences", "24/7 automation"] },
  { title: "Backend CRM Control", desc: "Structured pipeline tracking, tagging, and follow-up automation.", checks: ["Custom CRM setup", "Automated sequences", "Pipeline visibility"] },
  { title: "Conversion Optimization", desc: "We refine messaging, targeting, and follow-up to improve appointment quality.", checks: ["A/B testing", "Audience refinement", "Quality focus"] },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-section relative">
      <div className="absolute inset-0 grid-pattern opacity-[0.02]" />
      <div className="relative container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-5">Our Services</p>
          <h2 className="font-display text-section text-bright">
            How We Help Mortgage Brokers Succeed
          </h2>
          <p className="text-secondary-foreground mt-4 max-w-xl mx-auto">
            All services done in-house by our expert team. No outsourcing, no excuses.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glow-card bg-card rounded-xl p-8 border border-border"
            >
              <h3 className="text-lg font-bold text-bright mb-2">{item.title}</h3>
              <p className="text-sm text-secondary-foreground leading-relaxed mb-5">{item.desc}</p>
              <ul className="space-y-2">
                {item.checks.map((check) => (
                  <li key={check} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary text-xs">✓</span>
                    {check}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-secondary-foreground max-w-lg mx-auto leading-relaxed"
        >
          This isn't a campaign. It's a system installed into your brokerage.
        </motion.p>
      </div>
    </section>
  );
};

export default SolutionSection;
