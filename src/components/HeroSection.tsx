import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[100px]"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-bright leading-[0.95] mb-8">
            REFERRALS ARE
            <br />
            <span className="text-gradient">NOT A SYSTEM.</span>
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground max-w-lg mx-auto mb-10 leading-relaxed">
            Build a stable inbound mortgage pipeline with structured
            follow-up and controlled growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="hero"
              size="lg"
              className="text-base px-8 py-6"
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
              className="text-base px-8 py-6"
              onClick={() =>
                document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              How It Works
              <ChevronDown className="ml-1" />
            </Button>
          </div>

          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
            Canada-Only · Mortgage-Focused · Month-to-Month
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
