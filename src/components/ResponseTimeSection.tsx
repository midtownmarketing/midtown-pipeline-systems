import { motion } from "framer-motion";
import { Zap, Clock } from "lucide-react";

const ResponseTimeSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Response Time Advantage</p>
          <h2 className="text-3xl md:text-5xl font-bold text-bright mb-4 tracking-tight">
            Speed multiplies conversion.
          </h2>
          <p className="text-secondary-foreground text-lg max-w-2xl mb-16">
            Online mortgage leads are a depreciating asset. Every minute that
            passes between inquiry and contact, your conversion rate drops.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Industry average */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glow-card bg-card rounded-lg p-8 border border-border"
          >
            <Clock className="w-5 h-5 text-muted-foreground mb-4" />
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
              Industry Average
            </p>
            <p className="font-mono text-5xl font-bold text-muted-foreground mb-2">
              30–60
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              minutes to first contact
            </p>
            <div className="border-t border-border pt-4 space-y-2">
              <p className="text-sm text-muted-foreground">
                • Lead has Googled 2 other brokers
              </p>
              <p className="text-sm text-muted-foreground">
                • Engagement drops 80% after 5 minutes
              </p>
              <p className="text-sm text-muted-foreground">
                • Manual follow-up = inconsistent contact
              </p>
            </div>
          </motion.div>

          {/* Midtown system */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glow-card bg-card rounded-lg p-8 border border-primary/30"
          >
            <Zap className="w-5 h-5 text-primary mb-4" />
            <p className="text-xs font-mono text-primary uppercase tracking-wider mb-3">
              Midtown System
            </p>
            <p className="font-mono text-5xl font-bold text-primary mb-2">
              &lt;5
            </p>
            <p className="text-sm text-secondary-foreground mb-4">
              minutes — fully automated
            </p>
            <div className="border-t border-border pt-4 space-y-2">
              <p className="text-sm text-secondary-foreground">
                • Instant SMS + email on submission
              </p>
              <p className="text-sm text-secondary-foreground">
                • Lead is warm and engaged
              </p>
              <p className="text-sm text-secondary-foreground">
                • Broker calls within 5–10 min to close
              </p>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-10 max-w-lg mx-auto"
        >
          The system automates initial contact. Your job is to call within 5–10
          minutes while the lead is engaged. That's the conversion multiplier.
        </motion.p>
      </div>
    </section>
  );
};

export default ResponseTimeSection;
