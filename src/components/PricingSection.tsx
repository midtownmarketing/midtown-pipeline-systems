import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PricingSection = () => {
  const scrollToForm = () => {
    document.getElementById("qualify")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Investment</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-bright mb-4 tracking-tight">
            Infrastructure, not a cost.
          </h2>
          <p className="text-secondary-foreground text-lg max-w-2xl mx-auto">
            The Midtown system is priced as a business tool with clear ROI —
            not a monthly retainer with vague deliverables.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <div className="border-gradient rounded-lg">
            <div className="bg-card rounded-lg p-8 md:p-10">
              <p className="text-xs font-mono text-primary uppercase tracking-wider mb-6 text-center">
                Total Monthly Investment
              </p>
              <p className="text-center mb-8">
                <span className="font-mono text-5xl md:text-6xl font-bold text-bright">
                  $2,000
                </span>
                <span className="font-mono text-2xl text-muted-foreground">
                  –$2,200
                </span>
                <span className="text-muted-foreground text-sm block mt-1">
                  /month
                </span>
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div>
                    <p className="text-sm font-medium text-bright">
                      System Management
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Campaign build, automation, CRM, optimization
                    </p>
                  </div>
                  <p className="font-mono text-sm text-bright">
                    $1,000–$1,200
                  </p>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <div>
                    <p className="text-sm font-medium text-bright">
                      Ad Spend (Direct to Platform)
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Paid directly to Meta/Google — you own the accounts
                    </p>
                  </div>
                  <p className="font-mono text-sm text-bright">$1,000 min</p>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6 mb-8">
                <p className="text-xs font-mono text-primary uppercase tracking-wider mb-4">
                  ROI Math
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Conservative</p>
                    <p className="font-mono text-lg font-bold text-bright">
                      $6,000
                    </p>
                    <p className="text-xs text-muted-foreground">
                      2 deals × $3,000
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Strong Month</p>
                    <p className="font-mono text-lg font-bold text-primary">
                      $12,000
                    </p>
                    <p className="text-xs text-muted-foreground">
                      4 deals × $3,000
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 border-t border-border pt-3">
                  Breakeven:{" "}
                  <span className="text-bright font-medium">1 funded deal</span>.
                  Everything after that is profit.
                </p>
              </div>

              <div className="space-y-2 mb-8">
                {[
                  "Exclusive Meta + Google lead campaigns",
                  "5-minute SMS + email automation",
                  "CRM pipeline with renewal tracking",
                  "Weekly optimization + reporting",
                  "Month-to-month — cancel anytime",
                ].map((item) => (
                  <p
                    key={item}
                    className="text-sm text-secondary-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </p>
                ))}
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full text-base py-6"
                onClick={scrollToForm}
              >
                Apply for Strategy Call
                <ArrowRight className="ml-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
