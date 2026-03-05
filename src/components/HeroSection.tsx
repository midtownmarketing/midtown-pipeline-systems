import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import torontoSkyline from "@/assets/toronto-skyline.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={torontoSkyline}
          alt="Toronto financial district skyline"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
      </div>

      <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-8">
            Ontario Mortgage Growth Infrastructure
          </p>

          <h1 className="font-display text-hero text-bright leading-[0.95] mb-8">
            Control Your
            <br />
            <span className="text-gradient">Mortgage Pipeline</span>
          </h1>

          <p className="text-subhead text-secondary-foreground max-w-[620px] mx-auto mb-10 leading-relaxed">
            Structured acquisition systems for Ontario mortgage brokers funding 3–8 deals per month who want predictable, inbound deal flow — not referral dependency.
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
              See If You Qualify
              <ArrowRight className="ml-1" />
            </Button>
          </div>

          <p className="text-[11px] font-medium text-muted-foreground tracking-[0.3em] uppercase">
            Ontario-Focused · ROI-Backed · Month-to-Month
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
