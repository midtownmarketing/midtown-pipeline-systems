import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ResponseSection from "@/components/ResponseSection";
import WhoSection from "@/components/WhoSection";
import WhyMidtownSection from "@/components/WhyMidtownSection";
import SocialProofSection from "@/components/SocialProofSection";
import ProcessSection from "@/components/ProcessSection";
import RiskSection from "@/components/RiskSection";
import PreQualificationForm from "@/components/PreQualificationForm";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title =
      "Midtown Marketing — Mortgage Pipeline Systems for Canadian Brokers";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Midtown Marketing installs stable inbound pipeline systems for Canadian mortgage brokers. Structured acquisition, automated follow-up, and controlled growth."
      );
    }
  }, []);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="problem"><ProblemSection /></div>
      <SolutionSection />
      <ResponseSection />
      <WhoSection />
      <div id="why"><WhyMidtownSection /></div>
      <SocialProofSection />
      <div id="process"><ProcessSection /></div>
      <RiskSection />
      <PreQualificationForm />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
