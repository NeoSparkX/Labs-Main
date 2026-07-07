import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Globe, Smartphone, Puzzle, Star } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import { storeProducts, StoreProduct } from "@/data/storeProducts";

// Type Badge Component
const TypeBadge = ({ type }: { type: StoreProduct["type"] }) => {
  const config = {
    web: { label: "Web App", icon: <Globe className="w-3.5 h-3.5" />, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    mobile: { label: "Android", icon: <Smartphone className="w-3.5 h-3.5" />, color: "bg-green-500/10 text-green-400 border-green-500/20" },
    extension: { label: "Extension", icon: <Puzzle className="w-3.5 h-3.5" />, color: "bg-teal-500/10 text-teal-400 border-teal-500/20" },
  };
  const c = config[type];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${c.color}`}>
      {c.icon}
      {c.label}
    </span>
  );
};

// Status Badge Component
const StatusBadge = ({ status }: { status: StoreProduct["status"] }) => {
  const config = {
    Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Beta: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "Coming Soon": "bg-slate-500/10 text-slate-400 border-slate-500/20",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${config[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === "Live" ? "bg-emerald-400 animate-pulse" : status === "Beta" ? "bg-amber-400" : "bg-slate-400"}`} />
      {status}
    </span>
  );
};

export const ProductsSection = () => {
  return (
    <section id="products-showcase" className="py-24 relative bg-background">
      {/* Background glow effects with overflow containment */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-white/3 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40 mb-3">Our Creation Suite</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Featured Products
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Take a scroll through our high-performance suite of live applications, offline utilities, and browser extensions.
          </p>
        </div>

        {/* ScrollStack Component */}
        <div className="relative max-w-9xl mx-auto my-8">
          <ScrollStack
            useWindowScroll={true}
            itemDistance={80}
            itemScale={0.02}
            baseScale={0.88}
            stackPosition="15%"
            scaleEndPosition="8%"
            rotationAmount={0}
            blurAmount={0}
          >
            {storeProducts.map((product) => (
              <ScrollStackItem 
                key={product.id}
                itemClassName="bg-[hsl(220_15%_6%)]/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 grid md:grid-cols-12 gap-6 relative overflow-hidden transition-colors duration-300 hover:border-white/20"
                style={{ 
                  borderLeft: `4px solid ${product.accentColor}`,
                  boxShadow: `0 20px 50px rgba(0, 0, 0, 0.4), 0 0 40px ${product.accentColor}0a`
                }}
              >
                {/* Subtle color highlight in the corner */}
                <div 
                  className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: product.accentColor }}
                />

                {/* Left Column: Product Info (7 cols on md+) */}
                <div className="md:col-span-7 flex flex-col justify-between h-full z-10">
                  <div>
                    {/* Badge row */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <TypeBadge type={product.type} />
                      <StatusBadge status={product.status} />
                      {product.rating > 0 && (
                        <div className="flex items-center gap-1 bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-full text-xs text-amber-400 font-medium">
                          <Star className="w-3 h-3 fill-amber-400" />
                          {product.rating}
                        </div>
                      )}
                    </div>

                    {/* Title & Publisher */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md bg-white/5 overflow-hidden shrink-0 border border-white/10">
                        <img src={product.logoPath} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight tracking-tight">{product.name}</h3>
                        <p className="text-white/40 text-xs mt-0.5">by {product.publisher} · v{product.version}</p>
                      </div>
                    </div>

                    {/* Tagline & Description */}
                    <p className="text-white/80 font-medium text-base mb-2 italic">
                      "{product.tagline}"
                    </p>
                    <p className="text-white/55 text-sm leading-relaxed mb-6 line-clamp-3 md:line-clamp-4">
                      {product.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.highlights.slice(0, 3).map((hl, idx) => (
                        <span key={idx} className="bg-white/5 text-white/70 px-3 py-1 rounded-lg text-xs border border-white/5 font-medium">
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 mt-auto">
                    <Link 
                      to={`/products/${product.id}`}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-white text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-white/90 shadow-[0_4px_20px_rgba(255,255,255,0.1)] group"
                      style={{ 
                        boxShadow: `0 0 25px ${product.accentColor}30`
                      }}
                    >
                      View Details <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                    {product.liveUrl && (
                      <a 
                        href={product.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white/70 border border-white/10 hover:border-white/20 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Open App
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Hero Showcase (5 cols on md+) */}
                <div className="md:col-span-5 flex items-center justify-center h-48 md:h-full min-h-[180px] relative rounded-2xl overflow-hidden bg-slate-950/60 border border-white/5 transition-all duration-300">
                  <img 
                    src={product.heroImage} 
                    alt={product.name} 
                    className={`absolute inset-0 w-full h-full transition-transform duration-700 hover:scale-105 ${
                      product.type === "mobile" 
                        ? "object-contain object-center py-4 px-2" 
                        : "object-cover object-top"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* Call to Action (CTA) */}
        <div className="text-center mt-16 max-w-md mx-auto">
          <p className="text-sm text-white/40 mb-4 font-medium">Looking for a specific tool or app store link?</p>
          <Link 
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-black hover:bg-white/90 rounded-2xl font-bold text-sm shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-0.5 group"
          >
            Explore All Products 
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
