import { motion } from "framer-motion";

const pillars = [
  { title: "Lead Generation", desc: "Facebook, Instagram, and Google campaigns designed to generate high-quality mortgage inquiries in your market.", checks: ["Multi-platform advertising", "Mortgage-targeted campaigns", "ROI-focused strategies"] },
  { title: "Automated Follow-Up", desc: "Instant SMS + email sequences that engage every lead within minutes — so nothing slips through the cracks.", checks: ["5-minute automated contact", "24/7 lead engagement", "Appointment booking"] },
  { title: "CRM & Nurturing", desc: "Custom CRM setup with long-term follow-up sequences to convert leads that aren't ready today into future closings.", checks: ["Custom pipeline setup", "Automated sequences", "Long-term nurturing"] },
  { title: "Done-For-You Marketing", desc: "Complete marketing service including landing pages, ad creative, and full-funnel management.", checks: ["Landing pages", "Ad creative", "Full-service management"] },
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
          <p className="section-label mb-5">What We Do</p>
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
      </div>
    </section>
  );
};

export default SolutionSection;
