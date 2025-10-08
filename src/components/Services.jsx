import { ArrowUpRight, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SERVICES = [
  {
    title: "Diabetic Foot",
    image: "/diabetic_foot.jpg",
    description: "Advanced care for diabetic foot complications with precision healing and preventive strategies.",
    category: "Specialized Care",
    duration: "2-3 hours"
  },
  {
    title: "Breast",
    image: "/breast.jpg",
    description: "Comprehensive breast surgery with minimally invasive techniques for optimal outcomes.",
    category: "Oncology",
    duration: "1-2 hours"
  },
  {
    title: "Thyroid",
    image: "/thyroid.jpg",
    description: "Expert thyroid procedures using advanced robotic technology for precise results.",
    category: "Endocrine",
    duration: "1.5-2 hours"
  },
  {
    title: "Fissure",
    image: "/fissure.jpg",
    description: "Modern treatment approaches for anal fissures with minimal discomfort.",
    category: "Proctology",
    duration: "30-45 mins"
  },
  {
    title: "Piles",
    image: "/piles.jpg",
    description: "Advanced hemorrhoid treatment with quick recovery time.",
    category: "Proctology",
    duration: "45-60 mins"
  },
  {
    title: "Fistula",
    image: "/fistula.jpg",
    description: "Specialized fistula procedures using latest surgical techniques.",
    category: "Proctology",
    duration: "1-1.5 hours"
  },
  {
    title: "Appendix",
    image: "/appendix.jpg",
    description: "Laparoscopic appendectomy with minimal scarring and faster healing.",
    category: "General Surgery",
    duration: "45-60 mins"
  },
  {
    title: "Hernia",
    image: "/hernia.webp",
    description: "State-of-the-art hernia repair with robotic precision.",
    category: "General Surgery",
    duration: "1-2 hours"
  },
  {
    title: "Gall Bladder",
    image: "/gall_bladder.jpg",
    description: "Advanced laparoscopic gallbladder surgery with reduced recovery time.",
    category: "General Surgery",
    duration: "1-1.5 hours"
  },
  {
    title: "Hydrocele",
    image: "/hydrocele.jpg",
    description: "Modern hydrocele treatment with minimal invasive approach.",
    category: "Urology",
    duration: "45-60 mins"
  },
  {
    title: "Pilonidal Sinus",
    image: "/pilonidal_sinus.jpg",
    description: "Expert treatment of pilonidal sinus with focus on prevention.",
    category: "Specialized Care",
    duration: "1-1.5 hours"
  },
  {
    title: "Rectal Prolapse",
    image: "/rectal_prolapse.jpg",
    description: "Comprehensive care for rectal prolapse using advanced techniques.",
    category: "Proctology",
    duration: "2-3 hours"
  },
  {
    title: "Phymosis",
    image: "/Phymosis.png",
    description: "Gentle and effective phimosis treatment with expert care.",
    category: "Urology",
    duration: "30-45 mins"
  },
  {
    title: "Abscess",
    image: "/Abscess.jpg",
    description: "Quick and effective abscess treatment with proper healing support.",
    category: "General Surgery",
    duration: "20-30 mins"
  },
  {
    title: "Cyst",
    image: "/cyst.jpg",
    description: "Professional cyst removal with minimal scarring and recovery time.",
    category: "General Surgery",
    duration: "30-45 mins"
  },
];

function ServiceCard({ service, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 50,
        damping: 15
      }}
      className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl ring-1 ring-slate-800/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
    >
      {/* Image with gradient */}
      <div className="relative aspect-[4/5]">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent mix-blend-overlay" />
      </div>

      {/* Content container */}
      <div className="absolute inset-0 p-7 flex flex-col justify-end">
        {/* Default state content */}
        <div className="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
          <span className="inline-flex rounded-full bg-emerald-500/90 text-white backdrop-blur-md px-4 py-1.5 text-xs font-medium tracking-wide mb-3.5 shadow-lg shadow-emerald-500/20">
            {service.category}
          </span>
          <h3 className="text-white text-[1.7rem] font-light tracking-tight drop-shadow-lg">
            {service.title}
          </h3>
        </div>

        {/* Hover state content */}
        <div className="absolute inset-0 p-7 flex flex-col justify-end opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <div className="flex items-center gap-2.5 text-sm mb-3.5">
            <span className="inline-flex rounded-full bg-emerald-500/90 text-white backdrop-blur-md px-4 py-1.5 font-medium tracking-wide shadow-lg shadow-emerald-500/20">
              {service.category}
            </span>
            <span className="text-emerald-300 font-medium tracking-wide">{service.duration}</span>
          </div>
          <h3 className="text-white text-[1.7rem] font-light tracking-tight mb-3">
            {service.title}
          </h3>
          <p className="text-slate-300/90 leading-relaxed line-clamp-2 text-[15px] mb-5 font-light">
            {service.description}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2.5 self-start rounded-full bg-emerald-500 text-white px-6 py-2.5 text-[15px] font-medium tracking-wide shadow-lg transition-all duration-300 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Static circle button - visible in default state */}
        <div className="absolute bottom-7 right-7 h-14 w-14 rounded-full bg-gradient-to-br from-white to-white/90 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:scale-90 shadow-lg">
          <ArrowUpRight className="h-6 w-6 text-slate-900" strokeWidth={2.5} />
        </div>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const [visibleRows, setVisibleRows] = useState(2);
  
  const ITEMS_PER_ROW = 3;
  const visibleServices = SERVICES.slice(0, visibleRows * ITEMS_PER_ROW);
  const hasMore = visibleServices.length < SERVICES.length;

  const handleViewMore = () => {
    if (visibleRows * ITEMS_PER_ROW < SERVICES.length) {
      setVisibleRows(prev => prev + 1);
    }
  };

  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Centered Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 50,
            damping: 15
          }}
          className="mb-20 text-center relative z-10"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full bg-emerald-50 px-5 py-2.5 text-sm font-medium text-emerald-700 mb-6 shadow-sm shadow-emerald-100/50">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            Our Expertise
          </span>
          <h2 className="text-5xl md:text-[4.5rem] font-light tracking-tight text-slate-900 mb-6">
            Advanced <span className="font-medium">Surgical</span> Services
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Robotic precision. Minimal invasion. Faster recovery. 
            <br className="hidden sm:block" />
            Experience world-class surgical care with cutting-edge technology.
          </p>
        </motion.div>

        {/* Cards Grid - 3 per row */}
        <div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <AnimatePresence mode="wait">
            {visibleServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        {hasMore && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.4,
              type: "spring",
              stiffness: 50,
              damping: 15
            }}
            className="text-center"
          >
            <button
              onClick={handleViewMore}
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 px-10 py-4 text-[15px] font-medium tracking-wide text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              View More Services
              <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" strokeWidth={2.5} />
            </button>
            <p className="mt-5 text-sm text-slate-500 tracking-wide">
              Showing {visibleServices.length} of {SERVICES.length} services
            </p>
          </motion.div>
        )}

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-emerald-50 to-sky-50/70 blur-3xl opacity-80" />
        <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-emerald-50/70 blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-emerald-50/40 to-transparent blur-3xl opacity-60" />
      </div>
    </section>
  );
}