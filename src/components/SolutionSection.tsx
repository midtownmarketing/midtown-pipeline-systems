import { motion } from "framer-motion";
import { Zap, MessageSquare, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    step: "01",
    title: "Paid Acquisition Engine",
    description:
      "Exclusive Meta + Google lead campaigns built for mortgage. Geo-targeted. Rate-focused creative. Every inquiry is yours alone — no shared leads, no recycled lists.",
    features: [
      "Geo-targeted campaigns",
      "Mortgage-specific creatives",
      "40–60 exclusive inquiries/mo",
      "Continuous A/B testing",
    ],
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "5-Minute Automation Engine",
    description:
      "The moment a lead submits, they receive an SMS and email within minutes. No manual effort. No leads sitting untouched. The system buys you time — you call within 5–10 minutes to close.",
    features: [
      "Instant SMS + email on inquiry",
      "Multi-touch nurture sequences",
      "80% contact rate",
      "Broker calls within 5–10 min",
    ],
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Backend CRM Control",
    description:
      "Full pipeline visibility. See every lead, every stage, every cost. Track renewals. Automate follow-up sequences. Know your numbers — always.",
    features: [
      "Pipeline dashboard",
      "Renewal tracking",
      "Automated follow-up",
      "Performance analytics",
    ],
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">The System</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-bright mb-4 tracking-tight">
            The Midtown Pipeline System
          </h2>
          <p className="text-secondary-foreground text-lg max-w-2xl mb-16">
            Three integrated components. One predictable outcome. We install the
            entire system — you focus on calling leads and closing deals.
          </p>
        </motion.div>

        <div className="space-y-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glow-card bg-card rounded-lg p-8 border border-border"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <span className="text-xs font-mono text-primary">
                    {pillar.step}
                  </span>
                  <div className="mt-2 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-bright mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-secondary-foreground mb-4 leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {pillar.features.map((feature) => (
                      <p
                        key={feature}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
