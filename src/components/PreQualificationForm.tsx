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
  monthlyVolume: z.string().min(1, "Please select your monthly volume"),
  avgCommission: z.string().min(1, "Please select your average commission"),
  responseTime: z.string().min(1, "Please select your response time"),
  inquiryCapacity: z.string().min(1, "Please select your capacity"),
});

type FormData = z.infer<typeof qualifySchema>;

const selectOptions = {
  monthlyVolume: [
    { value: "0-2", label: "0–2 deals/month" },
    { value: "3-5", label: "3–5 deals/month" },
    { value: "6-10", label: "6–10 deals/month" },
    { value: "10+", label: "10+ deals/month" },
  ],
  avgCommission: [
    { value: "1500-2500", label: "$1,500–$2,500" },
    { value: "2500-4000", label: "$2,500–$4,000" },
    { value: "4000-6000", label: "$4,000–$6,000" },
    { value: "6000+", label: "$6,000+" },
  ],
  responseTime: [
    { value: "under-5", label: "Under 5 minutes" },
    { value: "5-15", label: "5–15 minutes" },
    { value: "15-60", label: "15–60 minutes" },
    { value: "60+", label: "Over 1 hour" },
  ],
  inquiryCapacity: [
    { value: "yes-ready", label: "Yes — ready to handle 40+" },
    { value: "yes-with-help", label: "Yes — may need support" },
    { value: "not-sure", label: "Not sure yet" },
    { value: "no", label: "No — currently at capacity" },
  ],
};

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
              We'll review your details and reach out within 24 hours to
              schedule your strategy call.
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
          <span className="gold-line mx-auto mb-5" />
          <p className="section-label mb-5">Get Started</p>
          <h2 className="font-display text-section font-bold text-bright mb-4">
            Apply for a Strategy Call
          </h2>
          <p className="text-secondary-foreground text-lg max-w-xl mx-auto">
            We work with a limited number of brokers at a time. Tell us about
            your brokerage so we can prepare a relevant pipeline plan.
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

            <div className="border-t border-border pt-6">
              <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-5">
                Pipeline Qualification
              </p>

              <div className="space-y-5">
                <div>
                  <label className={labelClasses}>Current monthly funded deal volume</label>
                  <select
                    className={inputClasses}
                    value={formData.monthlyVolume || ""}
                    onChange={(e) => handleChange("monthlyVolume", e.target.value)}
                  >
                    <option value="">Select your volume</option>
                    {selectOptions.monthlyVolume.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {errors.monthlyVolume && <p className={errorClasses}>{errors.monthlyVolume}</p>}
                </div>

                <div>
                  <label className={labelClasses}>Average commission per funded deal</label>
                  <select
                    className={inputClasses}
                    value={formData.avgCommission || ""}
                    onChange={(e) => handleChange("avgCommission", e.target.value)}
                  >
                    <option value="">Select your avg commission</option>
                    {selectOptions.avgCommission.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {errors.avgCommission && <p className={errorClasses}>{errors.avgCommission}</p>}
                </div>

                <div>
                  <label className={labelClasses}>How quickly do you currently respond to new leads?</label>
                  <select
                    className={inputClasses}
                    value={formData.responseTime || ""}
                    onChange={(e) => handleChange("responseTime", e.target.value)}
                  >
                    <option value="">Select your response time</option>
                    {selectOptions.responseTime.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {errors.responseTime && <p className={errorClasses}>{errors.responseTime}</p>}
                </div>

                <div>
                  <label className={labelClasses}>Can you handle 40+ inbound inquiries per month?</label>
                  <select
                    className={inputClasses}
                    value={formData.inquiryCapacity || ""}
                    onChange={(e) => handleChange("inquiryCapacity", e.target.value)}
                  >
                    <option value="">Select your capacity</option>
                    {selectOptions.inquiryCapacity.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {errors.inquiryCapacity && <p className={errorClasses}>{errors.inquiryCapacity}</p>}
                </div>
              </div>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full text-base py-6">
              Submit & Book Strategy Call
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
