import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Solo Broker — GTA",
    situation: "Averaging 1–2 referral deals/month. No marketing. No CRM. Income unpredictable.",
    implementation: "Launched geo-targeted Meta campaigns + 5-minute automation engine. Full CRM pipeline installed.",
    results: "3 funded deals in first 60 days from inbound leads. 100% of leads contacted within 4 minutes.",
    revenue: "+$12,000/month in additional commission revenue.",
  },
  {
    title: "2-Person Team — Alberta",
    situation: "Running their own Facebook ads with no follow-up system. Burning budget. Low conversion.",
    implementation: "Rebuilt campaigns. Installed automated SMS/email sequences. Migrated pipeline to CRM.",
    results: "Cost per lead dropped 40%. Lead-to-appointment rate doubled. 4 funded deals/month within 90 days.",
    revenue: "+$16,000/month. Paid for the system 5x over.",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Case Studies</p>
          <h2 className="text-3xl md:text-5xl font-bold text-bright mb-4 tracking-tight">
            Installed. Measured. Proven.
          </h2>
          <p className="text-secondary-foreground text-lg max-w-2xl mb-16">
            Structured breakdowns from real broker engagements.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glow-card bg-card rounded-lg border border-border overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold text-bright mb-6">{study.title}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: "Situation", value: study.situation },
                    { label: "Implementation", value: study.implementation },
                    { label: "Results", value: study.results },
                    { label: "Revenue Impact", value: study.revenue },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-xs font-mono text-primary uppercase tracking-wider mb-2">{item.label}</p>
                      <p className="text-sm text-secondary-foreground leading-relaxed">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
