import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-8">
            🇨🇦 Canadian Based · Mortgage Specialized
          </p>

          <h1 className="font-display text-hero text-bright leading-[0.95] mb-8">
            Mortgage Specialized
            <br />
            <span className="text-gradient">Marketing</span>
          </h1>

          <p className="text-subhead text-secondary-foreground max-w-[600px] mx-auto mb-6 leading-relaxed">
            Canadian based agency working with mortgage brokers across Canada. All services done in-house. We get you deals. It's that simple!
          </p>

          <div className="glow-card bg-card border border-border rounded-xl px-6 py-4 max-w-lg mx-auto mb-10">
            <p className="text-sm font-semibold text-bright uppercase tracking-wide">Performance-Guaranteed Partnerships</p>
            <p className="text-xs text-secondary-foreground mt-1">Results within your agreement, or we refund your investment!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="hero"
              size="lg"
              className="text-base px-10 py-6"
              onClick={() =>
                document.getElementById("qualify")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book Discovery Call
              <ArrowRight className="ml-1" />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="text-base px-10 py-6"
              onClick={() =>
                document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
              <ChevronDown className="ml-1" />
            </Button>
          </div>

          <p className="text-[11px] font-medium text-muted-foreground tracking-[0.3em] uppercase">
            Canada-Only · Mortgage-Focused · Month-to-Month
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
