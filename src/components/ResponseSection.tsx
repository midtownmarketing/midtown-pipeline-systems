import { motion } from "framer-motion";

const ResponseSection = () => {
  return (
    <section className="py-24">
      <div className="container max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Response Advantage</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bright mb-8 tracking-tight">
            Speed changes everything.
          </h2>
          <p className="text-secondary-foreground text-lg leading-relaxed max-w-xl mb-4">
            Automated SMS and email contact the lead within minutes of inquiry.
            When the broker follows up quickly, conversion compounds.
          </p>
          <p className="text-secondary-foreground leading-relaxed max-w-xl">
            The system handles the first touch. You handle the conversation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResponseSection;
