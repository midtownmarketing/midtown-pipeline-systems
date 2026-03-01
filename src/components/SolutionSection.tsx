import { motion } from "framer-motion";

const pillars = [
  { title: "Paid Acquisition", desc: "Structured campaigns across Meta and Google to generate exclusive mortgage inquiries." },
  { title: "5-Minute Automation", desc: "Instant SMS and email contact within minutes of every new inquiry." },
  { title: "CRM Backend", desc: "Full pipeline visibility with structured stages and reporting." },
  { title: "Follow-Up Workflows", desc: "Automated sequences that keep leads engaged until conversion." },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-section relative">
      <div className="absolute inset-0 grid-pattern opacity-[0.02]" />
      <div className="relative container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="gold-line mx-auto mb-5" />
          <p className="section-label mb-5">The Solution</p>
          <h2 className="font-display text-section font-bold text-bright">
            We install pipeline infrastructure.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glow-card bg-card rounded-lg p-7 border border-border"
            >
              <h3 className="text-base font-semibold text-bright mb-2">{item.title}</h3>
              <p className="text-sm text-secondary-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-secondary-foreground max-w-lg mx-auto leading-relaxed"
        >
          This isn't a campaign. It's infrastructure — acquisition, automation,
          and backend systems installed into your brokerage.
        </motion.p>
      </div>
    </section>
  );
};

export default SolutionSection;
