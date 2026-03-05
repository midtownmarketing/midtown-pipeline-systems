import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Before Midtown, I was doing 4 deals a month and scrambling for each one. Within 90 days I had a consistent pipeline and closed 7 deals in a single month for the first time.",
    name: "Ontario Broker",
    detail: "Went from 4 to 7 funded deals/month",
    metric: "+75%",
    metricLabel: "Deal Volume",
  },
  {
    quote: "The automated follow-up alone changed my business. I was losing leads because I couldn't respond fast enough. Now every inquiry gets contacted in under 5 minutes — before I even pick up the phone.",
    name: "GTA Mortgage Agent",
    detail: "5-minute response automation installed",
    metric: "<5 min",
    metricLabel: "Response Time",
  },
  {
    quote: "I spent $3,000/month on ads with another agency and got nothing. Midtown installed the backend infrastructure I was missing. The leads actually convert because there's a system behind them.",
    name: "Independent Broker",
    detail: "Switched from wasted ad spend to structured ROI",
    metric: "3.2x",
    metricLabel: "ROI on Spend",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-section">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-5">Results</p>
          <h2 className="font-display text-section text-bright">
            What Brokers Are Saying.
          </h2>
          <p className="text-secondary-foreground mt-4 max-w-lg mx-auto text-sm">
            Real outcomes from Ontario mortgage professionals using the Midtown Growth System.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card bg-card rounded-xl p-8 border border-border flex flex-col"
            >
              <Quote className="w-5 h-5 text-primary/40 mb-4" />
              <p className="text-secondary-foreground text-sm leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>

              <div className="border-t border-border pt-4 mb-4">
                <p className="text-sm font-semibold text-bright">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.detail}</p>
              </div>

              <div className="bg-muted rounded-lg px-4 py-3 text-center">
                <p className="font-display text-2xl text-primary">{t.metric}</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{t.metricLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
