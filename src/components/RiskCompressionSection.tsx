import { motion } from "framer-motion";
import { ShieldCheck, Eye, CalendarX, BarChart } from "lucide-react";

const guarantees = [
  {
    icon: CalendarX,
    title: "Month-to-Month",
    description:
      "No 6-month lock-ins. No termination fees. We earn your business every 30 days. If the system isn't delivering, you leave.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "You own your ad accounts. You see every dollar spent, every lead generated, every cost metric. Nothing is hidden.",
  },
  {
    icon: BarChart,
    title: "CRM Visibility",
    description:
      "Your pipeline is always visible. Every lead, every stage, every follow-up — tracked in your CRM dashboard in real time.",
  },
  {
    icon: ShieldCheck,
    title: "Performance Accountability",
    description:
      "Weekly reporting. Data-backed optimization. If something isn't working, we fix it — with evidence, not excuses.",
  },
];

const RiskCompressionSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Risk Compression</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-bright mb-4 tracking-tight">
            Zero lock-in. Full control.
          </h2>
          <p className="text-secondary-foreground text-lg max-w-2xl mx-auto">
            We don't hold your data hostage. We don't hide behind contracts. The
            system works or you walk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {guarantees.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card bg-card rounded-lg p-6 border border-border"
            >
              <item.icon className="w-5 h-5 text-primary mb-3" />
              <h3 className="text-base font-semibold text-bright mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-secondary-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskCompressionSection;
