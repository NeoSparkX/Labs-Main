const PrivacyHero = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center px-6 overflow-hidden pt-32">
      {/* Soft background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] animate-pulse" />
      </div>
 
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="premium-gradient-text">Legal & Privacy</span>
          </h1>
 
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground font-light tracking-wide">
            Transparent. Secure. Responsible.
          </p>
 
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            NeoSparkX operates with clarity and respect for your data. This page outlines
            how we collect, use, and protect information — and the terms that guide our services.
          </p>
        </div>
 
        {/* Soft white divider */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
};
 
export default PrivacyHero;

