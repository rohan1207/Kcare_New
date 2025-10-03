import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop",
    quote:
      "It was the best decision I made for my health. The team is caring and precise. They explained everything and made me comfortable every step of the way.",
    tone: "lightBlue",
  },
  {
    name: "Emily Davis",
    role: "Teacher",
    avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    quote:
      "As someone with surgical anxiety, finding a clinic where I felt at ease was crucial. The robotic approach made recovery smoother than I imagined.",
    tone: "white",
  },
  {
    name: "Michael Chen",
    role: "Financial Analyst",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote:
      "I've been a patient for years. Consistent high‑quality care keeps me coming back. Professionalism and empathy are evident in every visit.",
    tone: "mint",
  },
];

const popUp = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 220,
      damping: 20,
      mass: 0.7,
    },
  }),
};

function TestimonialCard({ t, index }) {
  const base =
    "rounded-3xl p-6 sm:p-7 shadow-sm ring-1 text-slate-700 leading-relaxed";
  const tones = {
    lightBlue: "bg-blue-50 ring-blue-100",
    white: "bg-white ring-slate-200",
    mint: "bg-teal-50 ring-teal-100",
  };
  return (
    <motion.article
      variants={popUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className={`${base} ${tones[t.tone]}`}
    >
      <div className="flex items-center gap-3">
        <img
          src={t.avatar}
          alt={t.name}
          className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
        />
        <div>
          <div className="font-semibold text-slate-900">{t.name}</div>
          <div className="text-xs text-slate-500">{t.role}</div>
        </div>
      </div>
      <p className="mt-4 text-sm">{t.quote}</p>
    </motion.article>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative isolate py-20 md:py-28 bg-slate-50">
      {/* Pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%230f172a\' fill-opacity=\'0.02\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Top header and hero image */}
        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between text-slate-500 text-sm">
              <span>Patient Stories</span>
              <span className="hidden sm:block">2024</span>
            </div>
            <h2 className="mt-3 text-slate-900 text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
              Patients Gave
              <br />
              Lots of Love
            </h2>

            {/* First row cards (visible as soon as section is in view) */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <TestimonialCard t={TESTIMONIALS[0]} index={0} />
              <TestimonialCard t={TESTIMONIALS[1]} index={0.2} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 18 }}
            viewport={{ once: true, amount: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop"
                alt="Happy patient and surgeon"
                className="w-full h-[220px] sm:h-[300px] lg:h-[360px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Second wave on scroll: pop up from below */}
        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <motion.div
            variants={popUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
            className="lg:col-span-7 overflow-hidden rounded-3xl ring-1 ring-slate-200"
          >
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1600&auto=format&fit=crop"
              alt="Medical professionals providing care"
              className="w-full h-[220px] sm:h-[260px] lg:h-[280px] object-cover"
            />
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
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            View all testimonials <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}