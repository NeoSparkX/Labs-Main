import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import azwadImage from "@/assets/azwad-abrar.jpg";
import ahmedImage from "@/assets/ahmed-mehedi.jpg";
import jamilImage from "@/assets/jamil-jim.png";
import rezwanImage from "@/assets/rezwan-shajib.jpg";
const founders = [{
  name: "Azwad Abrar",
  role: "CEO, Product Architect & Creative Director",
  quote: "I design how intelligence feels.",
  color: "from-white/20 to-white/5",
  image: azwadImage,
  linkedin: "https://www.linkedin.com/in/azwad-abrar/"
}, {
  name: "Ahmed Mehedi",
  role: "CMO, Business Analyst & Automation Specialist",
  quote: "I teach systems to think.",
  color: "from-white/20 to-white/5",
  image: ahmedImage,
  linkedin: "https://www.linkedin.com/in/ahmed-mehedi/"
}, {
  name: "Rezwan Shajib",
  role: "CTO, Full-Stack Lead & Technical Strategist",
  quote: "I turn ideas into living code.",
  color: "from-white/20 to-white/5",
  image: rezwanImage,
  linkedin: "https://www.linkedin.com/in/rezwan-shajib/"
}, {
  name: "Jamil Jim",
  role: "COO, AI Engine & Logic Specialist",
  quote: "I connect everything.",
  color: "from-white/20 to-white/5",
  image: jamilImage,
  linkedin: "https://www.linkedin.com/in/jamil-jim/"
}];
const AnimatedWord = ({
  children,
  delay
}: {
  children: string;
  delay: number;
}) => <motion.span initial={{
  opacity: 0,
  y: 20
}} whileInView={{
  opacity: 1,
  y: 0
}} viewport={{
  once: true
}} transition={{
  duration: 0.6,
  delay
}} className="inline-block mr-4">
    {children}
  </motion.span>;
const NeuralConnection = ({
  from,
  to,
  delay
}: {
  from: number;
  to: number;
  delay: number;
}) => {
  const positions = [{
    x: 12.5,
    y: 50
  }, {
    x: 37.5,
    y: 50
  }, {
    x: 62.5,
    y: 50
  }, {
    x: 87.5,
    y: 50
  }];
  return <motion.svg className="absolute inset-0 w-full h-full pointer-events-none" initial={{
    opacity: 0
  }} whileInView={{
    opacity: 1
  }} viewport={{
    once: true
  }} transition={{
    duration: 1,
    delay
  }}>
    <motion.line x1={`${positions[from].x}%`} y1={`${positions[from].y}%`} x2={`${positions[to].x}%`} y2={`${positions[to].y}%`} stroke="hsl(var(--glow-white))" strokeWidth="1" strokeOpacity="0.2" initial={{
      pathLength: 0
    }} whileInView={{
      pathLength: 1
    }} viewport={{
      once: true
    }} transition={{
      duration: 1.5,
      delay: delay + 0.5
    }} />
    <motion.circle r="2" fill="hsl(var(--glow-white))" initial={{
      opacity: 0
    }} animate={{
      opacity: [0, 1, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity,
      delay
    }}>
      <animateMotion dur="3s" repeatCount="indefinite">
        <mpath href={`#path-${from}-${to}`} />
      </animateMotion>
    </motion.circle>
    <path id={`path-${from}-${to}`} d={`M ${positions[from].x}% ${positions[from].y}% L ${positions[to].x}% ${positions[to].y}%`} fill="none" />
  </motion.svg>;
};
export const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = {
    damping: 25,
    stiffness: 150
  };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
  return <section id="about" className="py-32 relative overflow-hidden">
    {/* Animated background particles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-white/20 rounded-full" initial={{
        x: Math.random() * 100 + "%",
        y: Math.random() * 100 + "%",
        scale: Math.random() * 0.5 + 0.5
      }} animate={{
        y: [null, `${Math.random() * 100}%`],
        opacity: [0, 1, 0]
      }} transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        delay: Math.random() * 5
      }} />)}
    </div>

    {/* Cursor follow effect */}
    {hoveredCard !== null && <motion.div className="fixed w-4 h-4 rounded-full bg-white/30 pointer-events-none blur-xl" style={{
      x,
      y,
      translateX: "-50%",
      translateY: "-50%"
    }} />}

    <div className="container mx-auto px-4 relative z-10">
      {/* Hero Title */}
      <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} className="text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-bold mb-8">
          <AnimatedWord delay={0.2}>Four</AnimatedWord>
          <AnimatedWord delay={0.4}>Minds.</AnimatedWord>
          <AnimatedWord delay={0.6}>One</AnimatedWord>
          <AnimatedWord delay={0.8}>Vision.</AnimatedWord>
        </h2>

        <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 1
        }} className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Founded in 2023 in Rangpur, Bangladesh — four co-founders engineering intelligent software that connects frontier AI with tangible human workflows.
        </motion.p>
      </motion.div>

      {/* Founder Cards with Neural Connections */}
      <div className="relative max-w-7xl mx-auto my-24">
        {/* Neural connection lines */}
        <div className="absolute inset-0">
          <NeuralConnection from={0} to={1} delay={0.5} />
          <NeuralConnection from={1} to={2} delay={0.7} />
          <NeuralConnection from={2} to={3} delay={0.9} />
          <NeuralConnection from={0} to={2} delay={1.1} />
          <NeuralConnection from={1} to={3} delay={1.3} />
        </div>

        {/* Founder Cards */}
        <div className="grid md:grid-cols-4 gap-6 relative z-10">
          {founders.map((founder, index) => <motion.div key={founder.name} initial={{
            opacity: 0,
            y: 60
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7,
            delay: index * 0.15
          }} onHoverStart={() => setHoveredCard(index)} onHoverEnd={() => setHoveredCard(null)} whileHover={{
            scale: 1.08,
            rotateY: 5,
            z: 50,
            transition: {
              type: "spring",
              stiffness: 300
            }
          }} className="glass-panel rounded-2xl p-6 text-center group cursor-pointer relative" style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}>
            {/* Glow effect on hover */}
            <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" style={{
              filter: "blur(20px)"
            }} />

            {/* Avatar with gradient border */}
            <div className="relative mb-6 group">
              <motion.div className="w-24 h-24 mx-auto rounded-full p-[2px] bg-gradient-to-br from-white/30 via-white/10 to-transparent relative overflow-hidden" whileHover={{
                scale: 1.05
              }} transition={{
                duration: 0.3
              }}>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                <img src={founder.image} alt={founder.name} loading="lazy" className="w-full h-full object-cover rounded-full relative z-10" />
              </motion.div>
            </div>

            {/* Name with gradient */}
            <motion.h3 className="text-xl font-bold mb-1 gradient-text" style={{
              fontFamily: "'Outfit', sans-serif"
            }}>
              {founder.name}
            </motion.h3>

            {/* Role */}
            <p className="text-xs text-muted-foreground mb-3 min-h-[2.5rem]">
              {founder.role}
            </p>

            {/* Clickable LinkedIn Link */}
            <div className="mb-4">
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 text-xs font-medium transition-all group/lnk"
                aria-label={`${founder.name} on LinkedIn`}
              >
                <svg className="w-3 h-3 fill-current opacity-80 group-hover/lnk:opacity-100" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
                <span className="text-[10px] opacity-70 group-hover/lnk:translate-x-0.5 transition-transform">↗</span>
              </a>
            </div>

            {/* Quote with reveal animation */}
            <motion.div initial={{
              height: 0,
              opacity: 0
            }} whileHover={{
              height: "auto",
              opacity: 1
            }} className="overflow-hidden">
              <div className="pt-3 border-t border-white/10">
                <p className="text-xs italic text-white/70">
                  "{founder.quote}"
                </p>
              </div>
            </motion.div>

            {/* Accent line */}
            <motion.div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white/50 to-transparent" initial={{
              width: 0
            }} whileHover={{
              width: "100%"
            }} transition={{
              duration: 0.4
            }} />
          </motion.div>)}
        </div>
      </div>

      {/* Mission Statement */}
      <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} className="glass-panel rounded-2xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden border border-white/10">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

        <p className="text-lg md:text-2xl text-center leading-relaxed relative z-10 text-white/90">
          Founded in 2023 in Rangpur, Bangladesh, NeoSparkX is a 4-person software and AI product startup. We build autonomous agent pipelines, developer context tools for frontier LLMs, and high-performance desktop and mobile applications. One agile team, every layer engineered for longevity.
        </p>
      </motion.div>
    </div>
  </section>;
};
