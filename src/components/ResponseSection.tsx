import { motion } from "framer-motion";

const ResponseSection = () => {
  return (
    <section className="py-section bg-alt relative overflow-hidden">
      {/* Background "Speed" watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-display text-[12rem] md:text-[18rem] font-bold text-bright/[0.02] leading-none">
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
          <span className="gold-line mx-auto mb-5" />
          <p className="section-label mb-5">Response Advantage</p>
          <h2 className="font-display text-section md:text-[3.5rem] font-bold text-bright mb-8">
            Speed wins the deal.
          </h2>
          <p className="text-secondary-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Mortgage inquiries convert highest in the first 5–10 minutes.
            Our automation ensures immediate engagement.
            Your call closes the gap.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResponseSection;
