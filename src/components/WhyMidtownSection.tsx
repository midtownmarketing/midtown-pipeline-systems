import { motion } from "framer-motion";
import { Shield, BarChart3, Lock, Eye, Users, Zap, MapPin, Calendar } from "lucide-react";

const leftColumn = [
  { icon: Shield, label: "Mortgage-only focus" },
  { icon: Users, label: "No shared leads" },
  { icon: MapPin, label: "Canada-specific targeting" },
  { icon: Lock, label: "Built for solo brokers & small teams" },
];

const rightColumn = [
  { icon: BarChart3, label: "Installed CRM backend" },
  { icon: Eye, label: "Transparent performance tracking" },
  { icon: Calendar, label: "Month-to-month structure" },
  { icon: Zap, label: "Fast response automation" },
];

const WhyMidtownSection = () => {
  return (
    <section className="py-section bg-alt">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="gold-line mb-5" />
          <p className="section-label mb-5">Why Midtown</p>
          <h2 className="font-display text-section font-bold text-bright">
            Why Midtown.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
          <div className="space-y-7">
            {leftColumn.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4"
              >
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground text-lg">{item.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="space-y-7">
            {rightColumn.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 + 0.2 }}
                className="flex items-center gap-4"
              >
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground text-lg">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMidtownSection;
