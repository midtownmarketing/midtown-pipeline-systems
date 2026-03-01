import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#pipeline-math", label: "Pipeline Math" },
  { href: "#solution", label: "System" },
  { href: "#pricing", label: "Investment" },
  { href: "#cases", label: "Case Studies" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : ""
      }`}
    >
      <div className="container max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="text-bright font-semibold text-lg tracking-tight">
          midtown<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
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
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block text-sm text-muted-foreground"
            >
              {link.label}
            </button>
          ))}
          <Button variant="hero" size="sm" className="w-full">
            Book a Call
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
