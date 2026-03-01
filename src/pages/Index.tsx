import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import PipelineMathSection from "@/components/PipelineMathSection";
import ResponseTimeSection from "@/components/ResponseTimeSection";
import SolutionSection from "@/components/SolutionSection";
import ResultsSection from "@/components/ResultsSection";
import PricingSection from "@/components/PricingSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SkepticSection from "@/components/SkepticSection";
import RiskCompressionSection from "@/components/RiskCompressionSection";
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
        "Midtown Marketing installs predictable inbound pipeline systems for Canadian mortgage brokers. 40–60 exclusive inquiries/month. 5-minute automation. 2–4 funded deals/month. From $2,000/mo."
      );
    }
  }, []);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="problem">
        <ProblemSection />
      </div>
      <PipelineMathSection />
      <div id="response-time">
        <ResponseTimeSection />
      </div>
      <div id="solution">
        <SolutionSection />
      </div>
      <div id="results">
        <ResultsSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <DifferentiatorsSection />
      <div id="cases">
        <CaseStudiesSection />
      </div>
      <div id="skeptic">
        <SkepticSection />
      </div>
      <RiskCompressionSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
