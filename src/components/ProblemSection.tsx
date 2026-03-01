import { motion } from "framer-motion";
import { AlertTriangle, Clock, Eye, UserX } from "lucide-react";

const problems = [
  {
    icon: UserX,
    title: "Referral Dependency",
    description:
      "Your pipeline depends on other people's schedules. One quiet month from a partner and your income drops with no warning.",
  },
  {
    icon: Clock,
    title: "Slow Lead Response",
    description:
      "Industry average response time is 30–60 minutes. By then, the lead has contacted 2 other brokers. Speed is the conversion multiplier you're ignoring.",
  },
  {
    icon: AlertTriangle,
    title: "No CRM Infrastructure",
    description:
      "Leads in spreadsheets. No automated follow-up. No renewal tracking. You're losing deals you already paid for.",
  },
  {
    icon: Eye,
    title: "Zero Pipeline Visibility",
    description:
      "You can't forecast next month. You don't know your cost per deal. You can't optimize what you can't measure.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">The Problem</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-bright mb-4 tracking-tight">
            Hope is not a growth strategy.
          </h2>
          <p className="text-secondary-foreground text-lg max-w-2xl mb-16">
            Most mortgage brokers run their business on inconsistent referrals,
            manual follow-up, and zero infrastructure. The result: unpredictable
            income and wasted opportunity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card bg-card rounded-lg p-6 border border-border"
            >
              <problem.icon className="w-5 h-5 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-bright mb-2">
                {problem.title}
              </h3>
              <p className="text-secondary-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
