import { motion } from "framer-motion";
import { Shield, Zap, Database, Calendar, LineChart } from "lucide-react";

const differentiators = [
  { icon: Shield, title: "Mortgage-Only Niche", description: "We don't serve dentists, lawyers, or realtors. 100% of our focus is on mortgage broker pipeline." },
  { icon: Zap, title: "Under 5-Minute Contact", description: "Automated SMS + email the moment a lead comes in. No lead sits. No opportunity wasted." },
  { icon: Database, title: "Built-In CRM Automation", description: "Your pipeline, follow-ups, and renewals managed in one system. Not another tool — the only tool." },
  { icon: Calendar, title: "Month-to-Month Contracts", description: "No 6-month lock-ins. No termination fees. We earn your business every 30 days." },
  { icon: LineChart, title: "Data-Backed Optimization", description: "Every campaign decision is driven by performance data. We optimize weekly, not quarterly." },
];

const DifferentiatorsSection = () => {
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
          <p className="section-label mb-4">Why Midtown</p>
          <h2 className="text-3xl md:text-5xl font-bold text-bright mb-16 tracking-tight">
            Built different. On purpose.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`glow-card bg-card rounded-lg p-6 border border-border ${i >= 3 ? "md:col-span-1" : ""}`}
            >
              <item.icon className="w-5 h-5 text-primary mb-3" />
              <h3 className="text-base font-semibold text-bright mb-2">{item.title}</h3>
              <p className="text-sm text-secondary-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
