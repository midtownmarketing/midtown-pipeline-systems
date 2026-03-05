import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrokerageBar from "@/components/BrokerageBar";
import ProofBand from "@/components/ProofBand";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ResponseSection from "@/components/ResponseSection";
import WhyMidtownSection from "@/components/WhyMidtownSection";
import RiskSection from "@/components/RiskSection";
import ProcessSection from "@/components/ProcessSection";
import PreQualificationForm from "@/components/PreQualificationForm";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title =
      "Midtown — Control Your Mortgage Pipeline | Ontario Broker Growth System";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Midtown installs structured acquisition systems for Ontario mortgage brokers. Predictable inbound deal flow, automated follow-up, and full CRM infrastructure. See if you qualify."
      );
    }
  }, []);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <BrokerageBar />
      <ProofBand />
      <div id="problem"><ProblemSection /></div>
      <SolutionSection />
      <ResponseSection />
      <div id="why"><WhyMidtownSection /></div>
      <RiskSection />
      <div id="process"><ProcessSection /></div>
      <PreQualificationForm />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
