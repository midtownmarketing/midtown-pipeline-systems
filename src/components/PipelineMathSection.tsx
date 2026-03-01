import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const funnelSteps = [
  { label: "Exclusive Inquiries", range: "40–60", sublabel: "per month from Meta + Google" },
  { label: "Contacted (<5 min)", range: "80%", sublabel: "via automated SMS + email" },
  { label: "Appointments Booked", range: "35–45%", sublabel: "of contacted leads" },
  { label: "Funded Deals", range: "2–4", sublabel: "per month at 20–30% close rate" },
];

const PipelineMathSection = () => {
  return (
    <section id="pipeline-math" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">The Pipeline Math</p>
          <h2 className="text-3xl md:text-5xl font-bold text-bright mb-4 tracking-tight">
            Conservative numbers. Real math.
          </h2>
          <p className="text-secondary-foreground text-lg max-w-2xl mb-16">
            Every projection below uses conservative conversion rates from live
            broker campaigns. No inflated numbers.
          </p>
        </motion.div>

        {/* Funnel visualization */}
        <div className="max-w-lg mx-auto space-y-0">
          {funnelSteps.map((step, i) => {
            const widthPercent = 100 - i * 15;
            const isLast = i === funnelSteps.length - 1;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-full rounded-lg p-5 border text-center transition-all ${
                    isLast
                      ? "bg-primary/10 border-primary/30"
                      : "bg-card border-border"
                  }`}
                  style={{ maxWidth: `${widthPercent}%` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-sm font-medium text-bright">
                        {step.label}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {step.sublabel}
                      </p>
                    </div>
                    <span
                      className={`font-mono text-2xl font-bold ${
                        isLast ? "text-primary" : "text-bright"
                      }`}
                    >
                      {step.range}
                    </span>
                  </div>
                </div>
                {!isLast && (
                  <ArrowDown className="w-4 h-4 text-muted-foreground my-2" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ROI callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 border-gradient rounded-lg max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-lg p-8">
            <p className="text-xs font-mono text-primary mb-4 uppercase tracking-wider text-center">
              Revenue Impact
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Conservative
                </p>
                <p className="text-2xl font-mono font-bold text-bright">
                  $6,000
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  2 deals × $3,000
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Strong Month
                </p>
                <p className="text-2xl font-mono font-bold text-primary">
                  $12,000
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  4 deals × $3,000
                </p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground text-center mt-6">
              Total system investment: $2,000–$2,200/mo. Breakeven at{" "}
              <span className="text-bright font-medium">1 funded deal</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PipelineMathSection;
