import { motion } from "framer-motion";

const ResponseSection = () => {
  return (
    <section className="py-section bg-alt relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-display text-[12rem] md:text-[18rem] text-bright/[0.02] leading-none">
          Speed
        </span>
      </div>

      <div className="relative container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="section-label mb-5">Your Advantage</p>
          <h2 className="font-display text-section md:text-[3.5rem] text-bright mb-8">
            The First 5 Minutes Win the Deal.
          </h2>
          <p className="text-secondary-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Most brokers respond in hours. Our system responds in seconds. 
            Automated SMS and email hit every lead instantly — so when you call, they already know your name.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResponseSection;
