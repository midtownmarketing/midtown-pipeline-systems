import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""}`}>
      <div className="container max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="text-bright font-semibold text-lg tracking-tight">
          midtown<span className="text-primary">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Problem</a>
          <a href="#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">System</a>
          <a href="#results" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Results</a>
          <a href="#cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Case Studies</a>
          <Button variant="hero" size="sm">
            Book a Call <ArrowRight className="ml-1 w-3 h-3" />
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-6 space-y-4">
          <a href="#problem" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Problem</a>
          <a href="#solution" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>System</a>
          <a href="#results" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Results</a>
          <a href="#cases" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Case Studies</a>
          <Button variant="hero" size="sm" className="w-full">Book a Call</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
