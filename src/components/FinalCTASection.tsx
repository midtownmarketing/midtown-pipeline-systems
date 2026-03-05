import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const scrollToForm = () => {
    document.getElementById("qualify")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-section relative bg-alt">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />
      <div className="relative container max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-section md:text-[3.5rem] text-bright mb-5">
            Ready to Control Your Pipeline?
          </h2>
          <p className="text-secondary-foreground text-lg mb-12">
            Apply for a strategy call. We'll assess your market, walk through the system, and determine if there's a fit.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="text-base px-12 py-6"
            onClick={scrollToForm}
          >
            See If You Qualify
            <ArrowRight className="ml-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
