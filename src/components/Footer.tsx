const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-bright font-semibold text-lg tracking-tight">
              midtown<span className="text-primary">.</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Mortgage pipeline systems for Canadian brokers.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <span>© {new Date().getFullYear()} Midtown Marketing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
