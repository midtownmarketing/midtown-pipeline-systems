import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-8">
            🇨🇦 Canadian Based · Mortgage Focused
          </p>

          <h1 className="font-display text-hero text-bright leading-[0.95] mb-8">
            Build a Predictable
            <br />
            <span className="text-gradient">Mortgage Pipeline.</span>
          </h1>

          <p className="text-subhead text-secondary-foreground max-w-[600px] mx-auto mb-12 leading-relaxed">
            We generate qualified mortgage inquiries and install automated
            follow-up systems that turn them into booked appointments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="hero"
              size="lg"
              className="text-base px-10 py-6"
              onClick={() =>
                document.getElementById("qualify")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book Strategy Call
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
              See How It Works
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
