import { motion } from "framer-motion";
import { ShieldAlert, MessageCircleWarning, MapPin, PhoneOff } from "lucide-react";

const objections = [
  {
    icon: ShieldAlert,
    objection: '"Online leads are junk."',
    response:
      "Unfiltered leads from generic campaigns are. Ours are geo-targeted, mortgage-specific inquiries from people actively searching for rate quotes or pre-approvals. Quality depends on campaign structure — which is what we build.",
  },
  {
    icon: MessageCircleWarning,
    objection: '"I\'ve worked with agencies before. They overpromised."',
    response:
      "Most agencies sell reach and impressions. We install a pipeline system with measurable inputs and outputs. You see every lead, every cost, every conversion. If the numbers don't work, you leave. Month-to-month.",
  },
  {
    icon: MapPin,
    objection: '"My market is different."',
    response:
      "We run campaigns across Canadian markets — urban, suburban, and regional. Campaign structure adapts to local conditions. The system is the same; the targeting is customized.",
  },
  {
    icon: PhoneOff,
    objection: '"I tried paid leads and they didn\'t convert."',
    response:
      "Leads without follow-up infrastructure don't convert. That's not a lead quality problem — it's a response time and CRM problem. The Midtown system solves both. But results still require broker commitment: you must call within 5–10 minutes.",
  },
];

const SkepticSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Objections Addressed</p>
          <h2 className="text-3xl md:text-5xl font-bold text-bright mb-4 tracking-tight">
            For brokers who've been burned before.
          </h2>
          <p className="text-secondary-foreground text-lg max-w-2xl mb-16">
            We've heard every objection. Here's our honest response to each one.
          </p>
        </motion.div>

        <div className="space-y-6">
          {objections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card bg-card rounded-lg p-8 border border-border"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mt-0.5">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-base font-semibold text-bright mb-2">
                    {item.objection}
                  </p>
                  <p className="text-sm text-secondary-foreground leading-relaxed">
                    {item.response}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-12 max-w-md mx-auto"
        >
          Transparency is our default. If we're not the right fit, we'll tell
          you on the strategy call.
        </motion.p>
      </div>
    </section>
  );
};

export default SkepticSection;
