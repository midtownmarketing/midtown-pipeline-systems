import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px]"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="section-label mb-6">
            Midtown Marketing — Pipeline Installation for Mortgage Brokers
          </p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-bright leading-[0.95] mb-6">
            REFERRALS ARE
            <br />
            <span className="text-gradient">NOT A SYSTEM.</span>
          </h1>

          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto mb-3 leading-relaxed">
            We install predictable inbound pipeline systems that deliver
            40–60 exclusive mortgage inquiries per month — with 5-minute
            automated follow-up and structured CRM backend.
          </p>
          <p className="text-base text-secondary-foreground max-w-xl mx-auto mb-2">
            Outcome: 2–4 additional funded deals per month.
          </p>

          <p className="text-sm font-mono text-muted-foreground mb-10">
            Canada-Only · Mortgage-Only · Month-to-Month · From $2,000/mo
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              className="text-base px-8 py-6"
              onClick={() =>
                document
                  .getElementById("qualify")
                  ?.scrollIntoView({ behavior: "smooth" })
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
                document
                  .getElementById("pipeline-math")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See The Pipeline Model
              <ChevronDown className="ml-1" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "40–60", label: "Inquiries / Month" },
            { value: "<5min", label: "Automated Response" },
            { value: "2–4", label: "Funded Deals / Month" },
            { value: "$2K", label: "Total Investment / Mo" },
          ].map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="stat-number">{metric.value}</p>
              <p className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-wider">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
