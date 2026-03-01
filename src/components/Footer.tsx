const Footer = () => {
  return (
    <footer className="border-t border-border py-14">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-display text-bright font-bold text-lg tracking-tight">
              Midtown<span className="text-primary">.</span>
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
