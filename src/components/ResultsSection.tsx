import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Target, BarChart } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "40–60",
    unit: "inquiries/mo",
    label: "Exclusive Inbound Inquiries",
    detail: "Mortgage-specific, geo-targeted, yours alone",
  },
  {
    icon: DollarSign,
    value: "$15–35",
    unit: "CPL",
    label: "Average Cost Per Lead",
    detail: "Qualified mortgage inquiries at scale",
  },
  {
    icon: Target,
    value: "2–4",
    unit: "deals/mo",
    label: "Additional Funded Deals",
    detail: "Conservative projection at 20–30% close rate",
  },
  {
    icon: BarChart,
    value: "3–6x",
    unit: "ROI",
    label: "Return on System Investment",
    detail: "Breakeven at 1 funded deal per month",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Performance Benchmarks</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-bright mb-4 tracking-tight">
            Numbers. Not narratives.
          </h2>
          <p className="text-secondary-foreground text-lg max-w-2xl mb-16">
            Every metric below is from live broker campaigns.
            Conservative projections only.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card bg-card rounded-lg p-8 border border-border"
            >
              <metric.icon className="w-5 h-5 text-primary mb-4" />
              <div className="flex items-baseline gap-2 mb-1">
                <span className="stat-number">{metric.value}</span>
                <span className="text-sm font-mono text-muted-foreground">
                  {metric.unit}
                </span>
              </div>
              <h3 className="text-base font-semibold text-bright mb-1">
                {metric.label}
              </h3>
              <p className="text-sm text-secondary-foreground">
                {metric.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
