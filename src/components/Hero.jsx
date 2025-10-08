import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

// Background slides & feature labels that will appear at the head of the extending line
const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    feature: "PRECISION-DRIVEN ROBOTIC SURGERY",
    color: "#7dd3c0",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    feature: "MINIMALLY INVASIVE • MAXIMUM CARE",
    color: "#ffd97d",
  },
  {
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop",
    feature: "FASTER RECOVERY THROUGH MODERN LAPAROSCOPY",
    color: "#c5b3ff",
  },
];



// SVG path definitions (short curvy segments that will progressively extend)
// We'll morph by revealing more of each path via stroke-dashoffset
const PATHS = [
  // start short, becomes long
  "M0 60 C 120 20, 260 100, 380 60 C 500 20, 640 100, 780 60",
  "M0 90 C 140 140, 300 40, 460 110 C 640 180, 760 40, 900 90",
  "M0 120 C 200 40, 360 180, 540 80 C 720 0, 880 160, 950 100",
];

// We'll progressively extend one line per slide; once a line finishes extending we reveal the pill at its head.
const Hero = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const lineRefs = useRef([]); // store path elements
  const dotRefs = useRef([]); // store moving dot heads
  const pillRef = useRef(null);
  const masterTl = useRef(null);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // 6s cycle
    return () => clearInterval(interval);
  }, []);

  // Build GSAP timeline for progressive line growth triggered on index change
  useEffect(() => {
    if (!containerRef.current) return;

    // kill previous timeline to avoid memory leak
    if (masterTl.current) masterTl.current.kill();

    masterTl.current = gsap.timeline();

    // Decide which line to extend this cycle (cycle through PATHS)
    const lineToExtend = index % PATHS.length; // which line
    const pathEl = lineRefs.current[lineToExtend];
    const dotEl = dotRefs.current[lineToExtend];

    if (pathEl) {
      const length = pathEl.getTotalLength();
      // Prepare stroke-dash values (start hidden -> reveal)
      gsap.set(pathEl, {
        strokeDasharray: length,
        strokeDashoffset: length * 0.7, // start partially short (~30% visible)
        opacity: 1,
      });
      gsap.set(dotEl, { opacity: 0, scale: 0.4 });
      gsap.set(pillRef.current, { autoAlpha: 0 });

      masterTl.current
        .to(pathEl, {
          strokeDashoffset: 0, // reveal full path
          duration: 2.4,
          ease: "power2.out",
          onUpdate: () => {
            // Move dot along the visible portion
            const progress = 1 - gsap.getProperty(pathEl, "strokeDashoffset") / length;
            const point = pathEl.getPointAtLength(length * progress);
            if (dotEl) {
              gsap.set(dotEl, { x: point.x, y: point.y });
            }
          },
        })
        .to(dotEl, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)" }, "<70%")
        .add(() => {
          // position pill near dot
            if (!dotEl) return;
            const rect = dotEl.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();
            const offsetX = rect.left - containerRect.left + 16; // small shift right of dot
            const offsetY = rect.top - containerRect.top - 10; // slight above line
            gsap.set(pillRef.current, { x: offsetX, y: offsetY });
        })
        .to(pillRef.current, { autoAlpha: 1, y: "+=0", duration: 0.5, ease: "power2.out" }, "-=0.2");
    }

    return () => {
      if (masterTl.current) masterTl.current.kill();
    };
  }, [index]);

  return (
    <div ref={containerRef} className="relative h-screen bg-gray-900 text-white overflow-hidden select-none">
      {/* Background image crossfade */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          style={{
            backgroundImage: `url(${slides[index].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-[#041f1c]/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-24">
        <motion.h1
          key={index + "title"}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-[64px] font-light leading-[1.05] tracking-tight max-w-3xl"
        >
          <span className="font-medium">Redefining</span> surgery with technology and <span className="italic font-serif">trust</span>
        </motion.h1>
        <motion.p
          key={index + "sub"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-2xl text-white/90 max-w-xl"
        >
          Delivering precision-driven care with compassion and excellence.
        </motion.p>
        <div className="mt-10 flex gap-4">
          <button className="bg-emerald-400 hover:bg-emerald-300 text-stone-900 font-semibold px-8 py-3 rounded-full transition-colors">
            Book appointment
          </button>
          <button className="border border-emerald-400/70 text-emerald-300 hover:bg-white hover:text-stone-900 font-semibold px-8 py-3 rounded-full transition-colors backdrop-blur-sm">
           Enquiry
          </button>
        </div>
      </div>

      {/* Progressive Wavy Lines Layer */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-56 md:h-64">
        <svg
          className="w-full h-full"
          viewBox="0 0 1080 200"
          preserveAspectRatio="none"
        >
          {PATHS.map((d, i) => (
            <g key={i}>
              <path
                ref={(el) => (lineRefs.current[i] = el)}
                d={d}
                fill="none"
                strokeWidth={2}
                strokeLinecap="round"
                stroke={
                  i === 0
                    ? "#45d6c3"
                    : i === 1
                    ? "#ffc857"
                    : "#b59bff"
                }
                style={{ opacity: 0.6 }}
              />
              {/* moving dot */}
              <circle
                ref={(el) => (dotRefs.current[i] = el)}
                r={5}
                fill={
                  i === 0
                    ? "#45d6c3"
                    : i === 1
                    ? "#ffc857"
                    : "#b59bff"
                }
                filter="url(#glow)"
              />
            </g>
          ))}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Feature Pill */}
        <div
          ref={pillRef}
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-[11px] tracking-wide px-4 py-2 rounded-full border border-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] text-white font-medium whitespace-nowrap"
          style={{ pointerEvents: "none" }}
        >
          {slides[index].feature}
        </div>
      </div>
    </div>
  );
};

export default Hero;
