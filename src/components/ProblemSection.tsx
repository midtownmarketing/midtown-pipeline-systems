import { motion } from "framer-motion";

const painPoints = [
  "Referrals dry up without warning — your pipeline empties overnight",
  "You close 3–5 deals one month, then scramble the next",
  "No structured system to generate inbound inquiries on demand",
  "You're dependent on realtor relationships you don't control",
  "Ad spend without backend infrastructure wastes capital",
];

const ProblemSection = () => {
  return (
    <section className="py-section bg-alt">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="section-label mb-5">The Problem</p>
          <h2 className="font-display text-section text-bright mb-6">
            Referral Dependency Is Not a Growth Strategy.
          </h2>
          <p className="text-secondary-foreground text-lg leading-relaxed mb-10">
            Most Ontario brokers funding 3–8 deals per month have no structured acquisition system. Income is unpredictable because pipeline is uncontrolled.
          </p>

          <div className="space-y-5 mb-10">
            {painPoints.map((point) => (
              <p
                key={point}
                className="text-secondary-foreground text-lg flex items-start gap-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2.5" />
                {point}
              </p>
            ))}
          </div>

          <p className="text-bright text-lg font-semibold leading-relaxed">
            The brokers who scale past this ceiling are the ones who install systems — not the ones who wait for the phone to ring.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
