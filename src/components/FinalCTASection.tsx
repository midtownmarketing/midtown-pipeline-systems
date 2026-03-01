import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const scrollToForm = () => {
    document.getElementById("qualify")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-section relative bg-alt">
      <div className="relative container max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-section md:text-[3.5rem] font-bold text-bright mb-5">
            Stop hoping for deals.
          </h2>
          <p className="text-secondary-foreground text-lg mb-12">
            Install a predictable pipeline.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="text-base px-12 py-6"
            onClick={scrollToForm}
          >
            Book Strategy Call
            <ArrowRight className="ml-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
