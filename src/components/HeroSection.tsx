import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

      <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-hero font-bold text-bright leading-[0.95] mb-10">
            REFERRALS ARE
            <br />
            <span className="text-gradient">NOT A SYSTEM.</span>
          </h1>

          <p className="text-subhead text-secondary-foreground max-w-[560px] mx-auto mb-12 leading-relaxed">
            Build a stable inbound mortgage pipeline with structured
            follow-up and controlled growth.
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
              How It Works
              <ChevronDown className="ml-1" />
            </Button>
          </div>

          <p className="text-[11px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
            Canada-Only · Mortgage-Focused · Month-to-Month
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
