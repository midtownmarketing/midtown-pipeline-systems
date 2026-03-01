import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProofBand from "@/components/ProofBand";
import PositioningStrip from "@/components/PositioningStrip";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ResponseSection from "@/components/ResponseSection";
import WhyMidtownSection from "@/components/WhyMidtownSection";
import SocialProofSection from "@/components/SocialProofSection";
import RiskSection from "@/components/RiskSection";
import ProcessSection from "@/components/ProcessSection";
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
        "Midtown Marketing generates qualified mortgage inquiries and installs automated follow-up systems for Canadian brokers. Structured acquisition, automated contact, and controlled growth."
      );
    }
  }, []);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <ProofBand />
      <PositioningStrip />
      <div id="problem"><ProblemSection /></div>
      <SolutionSection />
      <ResponseSection />
      <div id="why"><WhyMidtownSection /></div>
      <SocialProofSection />
      <RiskSection />
      <div id="process"><ProcessSection /></div>
      <PreQualificationForm />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
