import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ResultsSection from "@/components/ResultsSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import RiskReversalSection from "@/components/RiskReversalSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Midtown Marketing — Mortgage Pipeline Systems for Canadian Brokers";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Midtown Marketing installs predictable inbound pipeline systems for Canadian mortgage brokers. 2–4 additional funded deals per month through paid acquisition and CRM automation.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "Midtown Marketing installs predictable inbound pipeline systems for Canadian mortgage brokers. 2–4 additional funded deals per month through paid acquisition and CRM automation.";
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="problem"><ProblemSection /></div>
      <div id="solution"><SolutionSection /></div>
      <div id="results"><ResultsSection /></div>
      <DifferentiatorsSection />
      <div id="cases"><CaseStudiesSection /></div>
      <RiskReversalSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
