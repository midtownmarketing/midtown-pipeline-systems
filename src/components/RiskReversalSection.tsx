import { motion } from "framer-motion";
import { ShieldCheck, Eye, CalendarX } from "lucide-react";

const guarantees = [
  { icon: CalendarX, title: "Month-to-Month", description: "No long-term contracts. Cancel anytime. We earn your business every 30 days." },
  { icon: Eye, title: "Full Transparency", description: "You own your ad accounts. You see every dollar spent. You see every lead generated." },
  { icon: ShieldCheck, title: "Performance-First", description: "If the system isn't delivering, we fix it. No excuses. No finger-pointing." },
];

const RiskReversalSection = () => {
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
          <p className="section-label mb-4">Risk Reversal</p>
          <h2 className="text-3xl md:text-5xl font-bold text-bright mb-4 tracking-tight">
            Zero lock-in. Full control.
          </h2>
          <p className="text-secondary-foreground text-lg max-w-2xl mx-auto">
            We don't hold your data hostage. We don't hide behind contracts. 
            If we stop delivering, you leave. Simple.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {guarantees.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-bright mb-2">{item.title}</h3>
              <p className="text-sm text-secondary-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RiskReversalSection;
