import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "For the first time, I know where my next deal is coming from. It's not hope anymore — it's a system.",
    name: "Licensed Broker",
    location: "Ontario",
  },
  {
    quote: "We went from inconsistent referrals to a steady flow of inbound inquiries. The automation alone was worth it.",
    name: "Broker Team Lead",
    location: "Alberta",
  },
  {
    quote: "Month-to-month, transparent, and it actually works. I wish I'd done this a year ago.",
    name: "Independent Agent",
    location: "British Columbia",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-section">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="gold-line mx-auto mb-5" />
          <p className="section-label mb-5">Social Proof</p>
          <h2 className="font-display text-section font-bold text-bright">
            Real brokers. Real pipeline stability.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card bg-card rounded-lg p-8 border border-border"
            >
              <p className="text-secondary-foreground text-sm leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium text-bright">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
