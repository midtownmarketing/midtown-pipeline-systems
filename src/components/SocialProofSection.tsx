import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Within 3 months I had a full pipeline for the first time in my career. No more chasing referrals — leads come to me now.",
    name: "Licensed Broker",
    location: "Ontario",
  },
  {
    quote: "The automation changed everything. I used to lose leads because I couldn't follow up fast enough. That problem is gone.",
    name: "Broker Team Lead",
    location: "Alberta",
  },
  {
    quote: "I was skeptical about paying for leads. But these aren't random names — they're people actively looking for a mortgage. Completely different.",
    name: "Independent Agent",
    location: "British Columbia",
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
          <p className="section-label mb-5">Testimonials</p>
          <h2 className="font-display text-section text-bright">
            Brokers Trust Us With Their Pipeline.
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
              className="glow-card bg-card rounded-xl p-8 border border-border"
            >
              <p className="text-secondary-foreground text-sm leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-bright">{t.name}</p>
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
