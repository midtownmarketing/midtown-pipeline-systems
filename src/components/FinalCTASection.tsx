import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const scrollToForm = () => {
    document.getElementById("qualify")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-28 relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(38 72% 52% / 0.1), transparent 70%)",
        }}
      />
      <div className="relative container max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-bright mb-4 tracking-tight">
            Stop hoping for deals.
          </h2>
          <p className="text-secondary-foreground text-lg mb-10">
            Install a predictable pipeline.
          </p>
          <Button
            variant="hero"
            size="lg"
            className="text-base px-10 py-6"
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
