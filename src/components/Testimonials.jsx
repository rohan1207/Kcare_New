import { motion } from "framer-motion";
import { ArrowRight, Star, Quote } from "lucide-react";

const VIDEO_TESTIMONIALS = [
  {
    id: "video1",
    embedId: "1SF1pCvJJnM", // Replace with actual YouTube video ID
    name: "John Smith",
    procedure: "Laparoscopic Surgery",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  {
    id: "video2",
    embedId: "Bo6Q0liuOgc", // Replace with actual YouTube video ID
    name: "Mary Johnson",
    procedure: "Robotic Surgery",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  }
];

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Recovery Patient",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop",
    quote: "It was the best decision I made for my health. The team is caring and precise. They explained everything and made me comfortable every step of the way.",
    rating: 5,
    procedure: "Laparoscopic Surgery",
    tone: "lightBlue",
  },
  {
    name: "Emily Davis",
    role: "Recent Patient",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    quote: "As someone with surgical anxiety, finding a clinic where I felt at ease was crucial. The robotic approach made recovery smoother than I imagined.",
    rating: 5,
    procedure: "Robotic Surgery",
    tone: "white",
  },
  {
    name: "Michael Chen",
    role: "Regular Patient",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "Consistent high‑quality care keeps me coming back. Professionalism and empathy are evident in every visit. The team's expertise is unmatched.",
    rating: 5,
    procedure: "General Surgery",
    tone: "mint",
  },
];

const popUp = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      type: "spring",
      stiffness: 200,
      damping: 25,
      mass: 0.5,
    },
  }),
};

function YouTubeEmbed({ embedId }) {
  return (
    <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden bg-gray-100">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

function TestimonialCard({ t, index }) {
  const base = "rounded-3xl p-8 shadow-lg ring-1 text-gray-700 leading-relaxed backdrop-blur-sm h-full flex flex-col";
  const tones = {
    lightBlue: "bg-emerald-50/90 ring-emerald-200/80 hover:bg-emerald-100/90 transition-colors",
    white: "bg-white/90 ring-stone-200/80 hover:bg-stone-50/90 transition-colors",
    mint: "bg-stone-50/90 ring-stone-200/80 hover:bg-stone-100/90 transition-colors",
  };
  return (
    <motion.article
      variants={popUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className={`${base} ${tones[t.tone]} transform hover:scale-[1.02] transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={t.avatar}
            alt={t.name}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-md"
          />
          <div>
            <div className="font-medium text-gray-900">{t.name}</div>
            <div className="text-sm text-gray-500">{t.procedure}</div>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
      <div className="mt-6 relative">
        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-emerald-200/50" />
        <p className="text-stone-700 relative z-10 leading-relaxed">{t.quote}</p>
      </div>
      <div className="mt-4 text-sm text-stone-500 font-medium">{t.role}</div>
    </motion.article>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative isolate py-20 sm:py-28 bg-gradient-to-b from-emerald-50/30 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-emerald-100/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-stone-100/20 to-transparent blur-3xl" />
      </div>
      
      {/* Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full bg-emerald-50 px-6 py-2.5 text-sm font-medium text-emerald-700 shadow-sm shadow-emerald-100/50 ring-1 ring-emerald-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            Patient Stories
          </span>
          <h2 className="mt-6 text-4xl font-extralight tracking-tight text-stone-900 sm:text-5xl">
            Trust in our <span className="font-semibold">Expertise</span>
          </h2>
          <p className="mt-4 text-lg text-stone-600/80 max-w-2xl mx-auto font-light leading-relaxed">
            Hear directly from our patients about their experiences and successful recoveries
          </p>
        </motion.div>
      </div>
      

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Top header and hero image */}
        <div className="grid items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between text-gray-500 text-sm">
              <span>Patient Stories</span>
             
            </div>
            <h2 className="mt-3 text-stone-900 text-3xl sm:text-4xl font-semibold tracking-tight">
              Patients Gave
              <br />
              <span className="font-light">Lots of Love</span>
            </h2>

            {/* First row cards (visible as soon as section is in view) */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 h-full">
              <TestimonialCard t={TESTIMONIALS[0]} index={0} />
              <TestimonialCard t={TESTIMONIALS[1]} index={0.2} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            viewport={{ once: true, amount: 0.4 }}
            className="lg:col-span-5 h-full"
          >
            <div className="rounded-3xl ring-1 ring-gray-200/80 shadow-xl overflow-hidden bg-white p-6 h-full flex flex-col">
              <div className="mb-4">
                <div className="text-lg font-medium text-gray-900 mb-1">{VIDEO_TESTIMONIALS[0].name}</div>
                <div className="text-sm text-gray-500">{VIDEO_TESTIMONIALS[0].procedure}</div>
              </div>
              <div className="flex-1">
                <YouTubeEmbed embedId={VIDEO_TESTIMONIALS[0].embedId} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second wave on scroll: pop up from below */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <motion.div
            variants={popUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
            className="lg:col-span-7 rounded-3xl ring-1 ring-gray-200/80 shadow-xl overflow-hidden bg-white p-6 h-full flex flex-col"
          >
            <div className="mb-4">
              <div className="text-lg font-medium text-gray-900 mb-1">{VIDEO_TESTIMONIALS[1].name}</div>
              <div className="text-sm text-gray-500">{VIDEO_TESTIMONIALS[1].procedure}</div>
            </div>
            <div className="flex-1">
              <YouTubeEmbed embedId={VIDEO_TESTIMONIALS[1].embedId} />
            </div>
          </motion.div>

          <div className="lg:col-span-5">
            <TestimonialCard t={TESTIMONIALS[2]} index={0.15} />
          </div>
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          className="mt-10 flex justify-end"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50 transition-colors"
          >
            View all testimonials <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}