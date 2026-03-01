import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Target, BarChart } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "2–4",
    unit: "deals/mo",
    label: "Additional Funded Deals",
    detail: "Consistent monthly volume from inbound leads",
  },
  {
    icon: DollarSign,
    value: "$15–35",
    unit: "CPL",
    label: "Average Cost Per Lead",
    detail: "Qualified mortgage leads at scale",
  },
  {
    icon: Target,
    value: "$8K–20K",
    unit: "revenue",
    label: "Monthly Revenue Impact",
    detail: "Based on average commission per funded deal",
  },
  {
    icon: BarChart,
    value: "5–10x",
    unit: "ROI",
    label: "Return on Ad Spend",
    detail: "Typical return within first 90 days",
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
          <p className="section-label mb-4">Results</p>
          <h2 className="text-3xl md:text-5xl font-bold text-bright mb-4 tracking-tight">
            Numbers. Not narratives.
          </h2>
          <p className="text-secondary-foreground text-lg max-w-2xl mb-16">
            Every claim is backed by data from real broker campaigns. 
            Here's what our system delivers.
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
                <span className="text-sm font-mono text-muted-foreground">{metric.unit}</span>
              </div>
              <h3 className="text-base font-semibold text-bright mb-1">{metric.label}</h3>
              <p className="text-sm text-secondary-foreground">{metric.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Revenue impact callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 border-gradient rounded-lg"
        >
          <div className="bg-card rounded-lg p-8 text-center">
            <p className="text-sm font-mono text-primary mb-2">REVENUE IMPACT MODEL</p>
            <p className="text-secondary-foreground max-w-xl mx-auto">
              2 extra deals/month × $4,000 avg commission = <span className="text-bright font-semibold">$96,000/year</span> in additional revenue.
              At 4 deals/month, that's <span className="text-bright font-semibold">$192,000/year</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
