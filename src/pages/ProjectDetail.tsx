import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Code2, Layers, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { projects } from "@/data/projects";
import { useEffect } from "react";

const GooglePlayBadge = ({ onClick, className = "" }: { onClick: () => void, className?: string }) => (
  <button 
    onClick={onClick}
    className={`w-fit inline-flex items-center gap-3 bg-[#f2f4f7] hover:bg-[#e2e6ea] text-black px-4 sm:px-5 py-2.5 rounded-[12px] sm:rounded-[14px] transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] border border-gray-200/60 group ${className}`}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 466 511.98" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform group-hover:scale-105 duration-300">
      <g fillRule="nonzero">
        <path fill="#EA4335" d="M199.9 237.8 1.4 470.17c7.22 24.57 30.16 41.81 55.8 41.81 11.16 0 20.93-2.79 29.3-8.37l244.16-139.46L199.9 237.8z"/>
        <path fill="#FBBC04" d="m433.91 205.1-104.65-60-111.61 110.22 113.01 108.83 104.64-58.6c18.14-9.77 30.7-29.3 30.7-50.23-1.4-20.93-13.95-40.46-32.09-50.22z"/>
        <path fill="#34A853" d="M199.42 273.45 329.27 145.1 87.9 8.37C79.53 2.79 68.36 0 57.2 0 30.7 0 6.98 18.14 1.4 41.86l198.02 231.59z"/>
        <path fill="#4285F4" d="M1.39 41.86C0 46.04 0 51.63 0 57.2v397.64c0 5.57 0 9.76 1.4 15.34l216.27-214.86L1.39 41.86z"/>
      </g>
    </svg>
    <div className="flex flex-col items-start justify-center text-left">
      <span className="text-[8px] sm:text-[9px] leading-[1.1] text-gray-500 font-bold tracking-[0.05em] uppercase">GET IT ON</span>
      <span className="text-[16px] sm:text-[19px] leading-[1.1] font-semibold text-gray-900 tracking-tight" style={{ fontFamily: 'Product Sans, Inter, sans-serif' }}>Google Play</span>
    </div>
  </button>
);
const ProjectDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = projects.find((p) => p.slug === slug);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Button onClick={() => navigate("/works")}>Back to Works</Button>
            </div>
        );
    }

    const isMobileApp = project.category === "Mobile App" || project.platform?.toLowerCase().includes("mobile") || project.platform?.toLowerCase().includes("android") || ["expense-tracker", "ron-bot", "prevention"].includes(project.slug);

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <Button
                            variant="outline"
                            className="border-white/20 hover:bg-white/10 hover:border-white/50 hover:text-white transition-all"
                            onClick={() => navigate("/works")}
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Works
                        </Button>

                        {project.liveUrl && (
                            <Button
                                variant="default"
                                className="bg-primary hover:bg-primary/90"
                                onClick={() => window.open(project.liveUrl, "_blank")}
                            >
                                <ExternalLink className="mr-2 h-4 w-4" /> Live Preview
                            </Button>
                        )}
                        
                        {isMobileApp && (
                            <GooglePlayBadge onClick={() => alert("Google Play Store link coming soon! The app is currently undergoing store review.")} />
                        )}

                        {project.behanceUrl && (
                            <a
                                href={project.behanceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-md border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                                </svg>
                                Behance
                            </a>
                        )}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge variant="secondary" className="mb-4 text-sm px-3 py-1">
                            {project.category}
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12">
                            {project.description}
                        </p>

                        {/* Project Metadata Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 rounded-2xl glass-panel border-white/5">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                    <Layers className="w-4 h-4" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Role</span>
                                </div>
                                <p className="font-medium">{project.role || "N/A"}</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                    <Code2 className="w-4 h-4" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Tech Stack</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack?.map(tech => (
                                        <Badge key={tech} variant="outline" className="bg-white/5">{tech}</Badge>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Status</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <p className="font-medium">{project.status || "Completed"}</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                    <Monitor className="w-4 h-4" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Platform</span>
                                </div>
                                <p className="font-medium">{project.platform || "Web"}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="container mx-auto px-4 py-20 space-y-24"
            >
                {/* Overview */}
                {project.overview && (
                    <motion.section variants={item} className="grid md:grid-cols-12 gap-8">
                        <div className="md:col-span-3">
                            <h2 className="text-2xl font-bold gradient-text sticky top-32">Overview</h2>
                        </div>
                        <div className="md:col-span-9">
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                {project.overview}
                            </p>
                        </div>
                    </motion.section>
                )}

                {/* Image Showcase */}
                {project.images && project.images.length > 0 && (
                    <motion.section variants={item}>
                        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Project Showcase</h2>
                        <div className={`grid gap-6 ${
                            isMobileApp 
                                ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto" 
                                : "grid-cols-1 md:grid-cols-2"
                        }`}>
                            {project.images.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all group"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <img
                                        src={img}
                                        alt={`${project.title} screenshot ${idx + 1}`}
                                        className="w-full h-auto object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* Problem & Solution */}
                {(project.problem || project.solution) && (
                    <div className="grid md:grid-cols-2 gap-12">
                        {project.problem && (
                            <motion.div variants={item} className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 smooth-transition" />
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <span className="text-red-400">The Problem</span>
                                </h3>
                                <ul className="space-y-4">
                                    {project.problem.map((point, i) => (
                                        <li key={i} className="flex gap-3 text-muted-foreground">
                                            <span className="text-red-400 mt-1">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {project.solution && (
                            <motion.div variants={item} className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 smooth-transition" />
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <span className="text-green-400">The Solution</span>
                                </h3>
                                <ul className="space-y-4">
                                    {project.solution.map((point, i) => (
                                        <li key={i} className="flex gap-3 text-muted-foreground">
                                            <span className="text-green-400 mt-1">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>
                )}

                {/* Key Features */}
                {project.keyFeatures && (
                    <motion.section variants={item}>
                        <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Key Features</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {project.keyFeatures.map((feature, idx) => (
                                <div key={idx} className="glass-panel p-6 rounded-xl hover:bg-white/5 smooth-transition">
                                    <h3 className="text-xl font-bold mb-4 text-primary">{feature.title}</h3>
                                    <ul className="space-y-3">
                                        {feature.items.map((item, i) => (
                                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                                <span className="text-primary/50 text-lg leading-none">›</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* Design Philosophy & Tech Highlights */}
                <div className="grid md:grid-cols-2 gap-16">
                    {project.designPhilosophy && (
                        <motion.section variants={item}>
                            <h2 className="text-2xl font-bold mb-8 gradient-text">Design Philosophy</h2>
                            <div className="space-y-6 text-muted-foreground">
                                {project.designPhilosophy.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {project.technicalHighlights && (
                        <motion.section variants={item}>
                            <h2 className="text-2xl font-bold mb-8 gradient-text">Technical Highlights</h2>
                            <ul className="space-y-4">
                                {project.technicalHighlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.section>
                    )}
                </div>

                {/* Outcome */}
                {project.outcome && (
                    <motion.section variants={item} className="glass-panel p-10 rounded-3xl border-primary/20 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5" />
                        <h2 className="text-3xl font-bold mb-8 gradient-text relative z-10">Project Outcome</h2>
                        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
                            {project.outcome.map((p, i) => (
                                <p key={i} className="text-lg text-muted-foreground">{p}</p>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* Why Different */}
                {project.whyDifferent && (
                    <motion.section variants={item} className="mb-20">
                        <h2 className="text-2xl font-bold mb-8 text-center">What Makes It Different</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {project.whyDifferent.map((diff, i) => (
                                <div key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium">
                                    {diff}
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}

            </motion.div>

            {/* CTA Footer */}
            <section className="py-20 border-t border-white/10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Have a similar project in mind?</h2>
                    <Button size="lg" onClick={() => window.location.href = '/#connect'}>
                        Let's Discuss
                    </Button>
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default ProjectDetail;
