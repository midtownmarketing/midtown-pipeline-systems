import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const idealClient = [
  "Ontario-licensed mortgage broker or agent",
  "Funding 3–8 deals per month currently",
  "Wants predictable inbound deal flow",
  "Willing to respond to leads within 15 minutes",
  "Capacity to handle 30–50+ inbound inquiries monthly",
  "Treats their practice like a business, not a side project",
];

const notForYou = [
  "Brand new to the mortgage industry with zero closings",
  "Looking for a quick fix instead of a structured system",
  "Unwilling to follow up on leads within a reasonable timeframe",
  "Not licensed to operate in Ontario",
];

const WhyMidtownSection = () => {
  return (
    <section className="py-section bg-alt">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-5">Qualification</p>
          <h2 className="font-display text-section font-bold text-bright">
            Is This Right For You?
          </h2>
          <p className="text-secondary-foreground mt-4 max-w-xl">
            We work with a limited number of brokers at a time. This system is built for disciplined operators — not everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glow-card bg-card rounded-xl p-8 border border-border"
          >
            <h3 className="text-lg font-bold text-bright mb-6">Ideal Client</h3>
            <div className="space-y-4">
              {idealClient.map((item) => (
                <p key={item} className="flex items-start gap-3 text-sm text-secondary-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glow-card bg-card rounded-xl p-8 border border-border"
          >
            <h3 className="text-lg font-bold text-bright mb-6">Not The Right Fit</h3>
            <div className="space-y-4">
              {notForYou.map((item) => (
                <p key={item} className="flex items-start gap-3 text-sm text-secondary-foreground">
                  <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyMidtownSection;
