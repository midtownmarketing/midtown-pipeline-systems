import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const scrollToForm = () => {
    document.getElementById("qualify")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 relative">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(38 72% 52% / 0.12), transparent 70%)",
        }}
      />
      <div className="relative container max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-bright mb-6 tracking-tight leading-tight">
            Stop Hoping For Deals.
            <br />
            <span className="text-gradient">Start Owning Your Pipeline.</span>
          </h2>
          <p className="text-secondary-foreground text-lg mb-10 max-w-xl mx-auto">
            Apply for a strategy call. We'll audit your current pipeline and
            show you exactly how The Midtown System would work for your
            brokerage.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="text-base px-10 py-6"
            onClick={scrollToForm}
          >
            Apply Now
            <ArrowRight className="ml-1" />
          </Button>
          <p className="text-xs font-mono text-muted-foreground mt-6">
            No commitment. No pitch deck. Just strategy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
