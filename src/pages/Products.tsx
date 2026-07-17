import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { storeProducts, StoreProduct } from "@/data/storeProducts";
import { Globe, Smartphone, Puzzle, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// ── Star Rating ──────────────────────────────────────────────────────────────
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg key={s} viewBox="0 0 20 20" fill="none" className="w-3 h-3">
        <path
          d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z"
          fill={s <= Math.round(rating) ? "#FBBF24" : "none"}
          stroke="#FBBF24"
          strokeWidth="1.5"
        />
      </svg>
    ))}
  </div>
);


// ── App Icon ─────────────────────────────────────────────────────────────────
const AppIcon = ({ product, size = "md" }: { product: StoreProduct; size?: "sm" | "md" | "lg" | "xl" }) => {
  const sizes: Record<string, string> = {
    sm: "w-12 h-12 rounded-xl",
    md: "w-16 h-16 rounded-2xl",
    lg: "w-20 h-20 rounded-2xl",
    xl: "w-24 h-24 rounded-3xl",
  };
  return (
    <div className={`${sizes[size]} flex items-center justify-center shadow-md shrink-0 overflow-hidden`}>
      <img src={product.logoPath} alt={product.name} loading="lazy" className="w-full h-full object-cover" />
    </div>
  );
};

// ── Type Badge ────────────────────────────────────────────────────────────────
const TypeBadge = ({ type }: { type: StoreProduct["type"] }) => {
  const config = {
    web: { label: "Web App", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    mobile: { label: "Android", color: "bg-green-500/10 text-green-400 border-green-500/20" },
    extension: { label: "Extension", color: "bg-teal-500/10 text-teal-400 border-teal-500/20" },
  };
  const c = config[type];
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${c.color}`}>{c.label}</span>;
};

// ── Status Badge ──────────────────────────────────────────────────────────────
const StatusBadge = ({ status }: { status: StoreProduct["status"] }) => {
  const config = {
    Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Beta: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "Coming Soon": "bg-slate-500/10 text-slate-400 border-slate-500/20",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${config[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === "Live" ? "bg-emerald-400 animate-pulse" : status === "Beta" ? "bg-amber-400" : "bg-slate-400"}`} />
      {status}
    </span>
  );
};

// ── Featured Banner ───────────────────────────────────────────────────────────
const FeaturedBanner = ({ onProductClick }: { onProductClick: (id: string) => void }) => {
  const featured = storeProducts.filter((p) => ["peerhire", "markitdown", "markitdown-companion"].includes(p.id));
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % featured.length), 5000);
    return () => clearInterval(t);
  }, [isHovered, featured.length]);

  const product = featured[current];

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden border border-white/8 shadow-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div key={product.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="absolute inset-0">
          <img src={product.heroImage} alt={product.name} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, hsl(220 15% 6% / 0.97) 0%, hsl(220 15% 6% / 0.82) 55%, hsl(220 15% 6% / 0.35) 100%)" }} />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col justify-end p-8 md:p-12 h-[380px] md:h-[440px]">
        <AnimatePresence mode="wait">
          <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }} className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <AppIcon product={product} size="md" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <TypeBadge type={product.type} />
                  <StatusBadge status={product.status} />
                </div>
                <p className="text-white/40 text-xs">{product.publisher} · v{product.version}</p>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">{product.name}</h2>
            <p className="text-white/55 text-base mb-6 leading-relaxed line-clamp-2">{product.tagline}</p>
            <div className="flex items-center gap-3">
              <button onClick={() => onProductClick(product.id)} className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:brightness-110 hover:scale-105 shadow-lg" style={{ background: product.accentColor, color: product.iconBg === '#111827' || product.iconBg === '#F9F6F0' ? '#fff' : '#fff' }}>
                View Details <ArrowRight className="w-4 h-4" />
              </button>
              {product.liveUrl && (
                <a href={product.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white/70 border border-white/15 hover:border-white/40 hover:text-white transition-all duration-300 backdrop-blur-sm">
                  <ExternalLink className="w-4 h-4" /> Open App
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-6 right-8 flex items-center gap-2">
          {featured.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/30 hover:bg-white/60"}`} />
          ))}
        </div>

        <button onClick={() => setCurrent((c) => (c - 1 + featured.length) % featured.length)} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={() => setCurrent((c) => (c + 1) % featured.length)} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-black/60 transition-all opacity-0 group-hover:opacity-100">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

// ── Product Card ──────────────────────────────────────────────────────────────
const ProductCard = ({ product, onClick }: { product: StoreProduct; onClick: () => void }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
    onClick={onClick}
    className="group cursor-pointer bg-[hsl(220_15%_8%)] border border-white/6 hover:border-white/16 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex flex-col"
  >
    <div className="relative h-44 overflow-hidden bg-[hsl(220_15%_5%)] shrink-0">
      <img src={product.heroImage} alt={product.name} loading="lazy" className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${product.type === "mobile" ? "object-contain object-center py-3" : "object-cover object-top"}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_15%_8%)] via-transparent to-transparent" />
      <div className="absolute top-3 right-3"><StatusBadge status={product.status} /></div>
    </div>
    <div className="p-5 flex flex-col gap-3 flex-1">
      <div className="flex items-start gap-3">
        <AppIcon product={product} size="sm" />
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-white text-base leading-tight truncate">{product.name}</h3>
          <p className="text-white/40 text-xs mt-0.5">{product.publisher}</p>
        </div>
      </div>
      <p className="text-white/55 text-sm leading-relaxed line-clamp-2 flex-1">{product.tagline}</p>
      <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-auto">
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-white/40 text-xs">{product.rating}</span>
        </div>
        <TypeBadge type={product.type} />
      </div>
    </div>
    <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out" style={{ background: product.accentColor === '#E5E7EB' ? '#6B7280' : product.accentColor === '#374151' ? '#9CA3AF' : product.accentColor }} />
  </motion.div>
);

import SEO from "@/components/SEO";

// ── Main Page ─────────────────────────────────────────────────────────────────
type FilterType = "All" | "Web Apps" | "Mobile Apps" | "Extensions";

const Products = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filters: FilterType[] = ["All", "Web Apps", "Mobile Apps", "Extensions"];
  const filterMap: Record<FilterType, string> = { All: "all", "Web Apps": "web", "Mobile Apps": "mobile", Extensions: "extension" };
  const typeIcons: Record<FilterType, React.ReactNode> = {
    All: <span className="text-xs font-bold">⊞</span>,
    "Web Apps": <Globe className="w-3.5 h-3.5" />,
    "Mobile Apps": <Smartphone className="w-3.5 h-3.5" />,
    Extensions: <Puzzle className="w-3.5 h-3.5" />,
  };

  const filtered = activeFilter === "All" ? storeProducts : storeProducts.filter((p) => p.type === filterMap[activeFilter]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Products Store | App & Extension Showcase" 
        description="Browse premium client-side converters, Chrome extensions, ESP32 IoT managers, real estate platforms, and productivity suites created by NeoSparkX."
        keywords="NeoSparkX, apps, browser extensions, mobile apps, software products, offline first tools"
      />
      <Navigation />
      <div className="container mx-auto px-4 pt-36 pb-24 max-w-7xl">

        {/* Page header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-3">NeoSparkX</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">Products</h1>
          <p className="text-white/50 text-base md:text-lg max-w-2xl">
            Software built for real people. Production-grade apps, tools, and extensions — crafted by NeoSparkX Team.
          </p>
        </div>

        {/* Featured Banner */}
        <div className="mb-12">
          <FeaturedBanner onProductClick={(id) => navigate(`/products/${id}`)} />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-white whitespace-nowrap">Browse All</h2>
          <div className="h-px bg-white/8 flex-1" />
        </div>

        {/* Filter pills */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {filters.map((f) => (
            <button key={f} onClick={() => setActiveFilter(f)} className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${activeFilter === f ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]" : "bg-white/5 text-white/55 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20"}`}>
              {typeIcons[f]}{f}
            </button>
          ))}
          <span className="ml-auto text-white/30 text-sm">{filtered.length} app{filtered.length !== 1 ? "s" : ""}</span>
        </div>

        {/* Product grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onClick={() => navigate(`/products/${product.id}`)} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {[
            { label: "Products Shipped", value: "8" },
            { label: "Platforms Covered", value: "3" },
            { label: "Total Users", value: "500+" },
            { label: "Avg. Rating", value: "4.7 ★" },
          ].map((stat) => (
            <div key={stat.label} className="bg-background p-8 text-center">
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-white/40 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Products;
