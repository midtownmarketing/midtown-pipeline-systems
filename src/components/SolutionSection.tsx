import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Paid Acquisition Engine",
    desc: "Targeted Facebook, Instagram, and Google campaigns built specifically for Ontario mortgage markets. Every dollar is tracked against funded deal outcomes.",
  },
  {
    num: "02",
    title: "Automated 5-Minute Response",
    desc: "Instant SMS and email sequences engage every inbound lead within minutes. By the time you call, they already know your name.",
  },
  {
    num: "03",
    title: "Backend CRM Control",
    desc: "Custom CRM infrastructure installed in your brokerage. Pipeline stages, lead scoring, and status tracking — built for mortgage workflows.",
  },
  {
    num: "04",
    title: "Structured Follow-Up Workflows",
    desc: "Long-term nurture sequences convert leads who aren't ready today into funded deals 30, 60, 90 days from now. Nothing falls through the cracks.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-section relative">
      <div className="absolute inset-0 grid-pattern opacity-[0.02]" />
      <div className="relative container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-5">The Midtown Growth System</p>
          <h2 className="font-display text-section text-bright">
            Four Pillars. One Integrated System.
          </h2>
          <p className="text-secondary-foreground mt-4 max-w-xl mx-auto">
            This isn't a marketing campaign. It's permanent brokerage infrastructure designed to produce predictable deal flow.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glow-card bg-card rounded-xl p-8 border border-border"
            >
              <p className="text-xs font-mono text-primary tracking-wider mb-3">{item.num}</p>
              <h3 className="text-lg font-bold text-bright mb-3">{item.title}</h3>
              <p className="text-sm text-secondary-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
