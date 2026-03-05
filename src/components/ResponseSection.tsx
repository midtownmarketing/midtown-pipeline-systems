import { motion } from "framer-motion";

const ResponseSection = () => {
  return (
    <section className="py-section bg-alt relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-display text-[12rem] md:text-[18rem] text-bright/[0.02] leading-none">
          ROI
        </span>
      </div>

      <div className="relative container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="section-label mb-5">Expected Results</p>
          <h2 className="font-display text-section md:text-[3.5rem] text-bright mb-8">
            2–4 Additional Funded Deals Per Month.
          </h2>
          <p className="text-secondary-foreground text-lg leading-relaxed max-w-xl mx-auto mb-10">
            At an average commission of $3,000–$5,000 per deal, that's $6,000–$20,000 in additional monthly revenue from a structured system — not luck.
          </p>

          <div className="glow-card bg-card border border-border rounded-xl p-8 max-w-lg mx-auto">
            <p className="text-sm text-muted-foreground mb-3">Simple Math</p>
            <div className="space-y-2 text-left">
              <p className="text-secondary-foreground text-sm flex justify-between">
                <span>Additional funded deals</span>
                <span className="text-bright font-semibold">2–4 / month</span>
              </p>
              <p className="text-secondary-foreground text-sm flex justify-between">
                <span>Avg. commission per deal</span>
                <span className="text-bright font-semibold">$3,000–$5,000</span>
              </p>
              <div className="border-t border-border pt-2 mt-2">
                <p className="text-secondary-foreground text-sm flex justify-between">
                  <span>Additional monthly revenue</span>
                  <span className="text-primary font-bold">$6,000–$20,000</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResponseSection;
