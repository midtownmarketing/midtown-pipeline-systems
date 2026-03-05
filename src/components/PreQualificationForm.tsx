import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const qualifySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(1, "Phone number is required").max(20),
  brokerage: z.string().trim().min(1, "Brokerage name is required").max(200),
  dealsPerMonth: z.string().min(1, "Please select your deal volume"),
  leadSources: z.string().trim().min(1, "Please describe your current lead sources").max(500),
});

type FormData = z.infer<typeof qualifySchema>;

const dealOptions = [
  { value: "0-2", label: "0–2 deals / month" },
  { value: "3-5", label: "3–5 deals / month" },
  { value: "6-8", label: "6–8 deals / month" },
  { value: "8+", label: "8+ deals / month" },
];

const PreQualificationForm = () => {
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = qualifySchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
    toast.success("Application received. We'll be in touch within 24 hours.");
  };

  if (submitted) {
    return (
      <section id="qualify" className="py-section relative">
        <div className="container max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glow-card bg-card rounded-lg p-12 text-center border border-border"
          >
            <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-bright mb-3">
              Application Received
            </h3>
            <p className="text-secondary-foreground">
              We'll review your details and reach out within 24 hours to schedule your strategy call.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  const inputClasses =
    "w-full bg-muted border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all";
  const errorClasses = "text-xs mt-1.5 text-destructive";
  const labelClasses = "block text-sm font-medium text-bright mb-1.5";

  return (
    <section id="qualify" className="py-section relative">
      <div className="absolute inset-0 grid-pattern opacity-[0.02]" />
      <div className="relative container max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-5">Get Started</p>
          <h2 className="font-display text-section font-bold text-bright mb-4">
            See If You Qualify
          </h2>
          <p className="text-secondary-foreground text-lg max-w-xl mx-auto">
            We partner with a limited number of Ontario brokers at a time. Tell us about your practice so we can assess fit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <form
            onSubmit={handleSubmit}
            className="glow-card bg-card rounded-lg border border-border p-8 md:p-10 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClasses}>Full Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className={inputClasses}
                  value={formData.name || ""}
                  onChange={(e) => handleChange("name", e.target.value)}
                  maxLength={100}
                />
                {errors.name && <p className={errorClasses}>{errors.name}</p>}
              </div>
              <div>
                <label className={labelClasses}>Email</label>
                <input
                  type="email"
                  placeholder="john@brokerage.ca"
                  className={inputClasses}
                  value={formData.email || ""}
                  onChange={(e) => handleChange("email", e.target.value)}
                  maxLength={255}
                />
                {errors.email && <p className={errorClasses}>{errors.email}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClasses}>Phone Number</label>
                <input
                  type="tel"
                  placeholder="(416) 555-0100"
                  className={inputClasses}
                  value={formData.phone || ""}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  maxLength={20}
                />
                {errors.phone && <p className={errorClasses}>{errors.phone}</p>}
              </div>
              <div>
                <label className={labelClasses}>Mortgage Brokerage</label>
                <input
                  type="text"
                  placeholder="Your brokerage name"
                  className={inputClasses}
                  value={formData.brokerage || ""}
                  onChange={(e) => handleChange("brokerage", e.target.value)}
                  maxLength={200}
                />
                {errors.brokerage && <p className={errorClasses}>{errors.brokerage}</p>}
              </div>
            </div>

            <div>
              <label className={labelClasses}>Deals Funded Per Month</label>
              <select
                className={inputClasses}
                value={formData.dealsPerMonth || ""}
                onChange={(e) => handleChange("dealsPerMonth", e.target.value)}
              >
                <option value="">Select your deal volume</option>
                {dealOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {errors.dealsPerMonth && <p className={errorClasses}>{errors.dealsPerMonth}</p>}
            </div>

            <div>
              <label className={labelClasses}>Current Lead Sources</label>
              <textarea
                placeholder="e.g. Referrals, realtor partnerships, past clients, online ads..."
                className={`${inputClasses} min-h-[80px] resize-none`}
                value={formData.leadSources || ""}
                onChange={(e) => handleChange("leadSources", e.target.value)}
                maxLength={500}
              />
              {errors.leadSources && <p className={errorClasses}>{errors.leadSources}</p>}
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full text-base py-6">
              See If You Qualify
              <ArrowRight className="ml-1" />
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              No commitment. We'll review and respond within 24 hours.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default PreQualificationForm;
