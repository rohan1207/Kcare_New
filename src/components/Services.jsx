import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    title: "Laparoscopic Gallbladder Surgery",
    image: "/gall_bladder.jpg",
    description:
      "Advanced laparoscopic gallbladder removal ensuring quick recovery and minimal scarring.",
    category: "General Surgery",
    path: "/services/gall-bladder-removal",
  },
  {
    title: "Laparoscopic Appendectomy",
    image: "/appendix.jpg",
    description:
      "Minimally invasive appendix removal with fast healing and reduced postoperative pain.",
    category: "General Surgery",
    path: "/services/laparoscopic-appendectomy",
  },
  {
    title: "Robotic Hernia Repair",
    image: "/hernia.webp",
    description:
      "Precision robotic-assisted hernia surgery offering faster recovery and minimal discomfort.",
    category: "General Surgery",
    path: "/services/robotic-hernia-repair",
  },
  {
    title: "Hydrocele Surgery",
    image: "/hydrocele.jpg",
    description:
      "Safe and effective hydrocele correction with minimal invasive techniques.",
    category: "Urology",
    path: "/services/hydrocele-surgery",
  },
  {
    title: "Diabetic Foot Care",
    image: "/diabetic_foot.jpg",
    description:
      "Comprehensive diabetic foot management for faster healing and infection prevention.",
    category: "Specialized Care",
    path: "/services/diabetic-foot-care",
  },
  {
    title: "Breast Surgery",
    image: "/breast.jpg",
    description:
      "Comprehensive breast procedures with advanced surgical precision and care.",
    category: "Oncology",
    path: "/services/breast-surgery",
  },
  {
    title: "Advanced Thyroid Surgery",
    image: "/thyroid.jpg",
    description:
      "State-of-the-art thyroid surgery using advanced and safe techniques for precise outcomes.",
    category: "Endocrine",
    path: "/services/advanced-thyroid-surgery",
  },
  {
    title: "Pilonidal Sinus Care",
    image: "/pilonidal_sinus.jpg",
    description:
      "Expert treatment for pilonidal sinus with focus on complete healing and recurrence prevention.",
    category: "Specialized Care",
    path: "/services/pilonidal-sinus-care",
  },
  {
    title: "Rectal Prolapse Surgery",
    image: "/rectal_prolapse.jpg",
    description:
      "Comprehensive surgical care for rectal prolapse using modern, minimally invasive methods.",
    category: "Proctology",
    path: "/services/rectal-prolapse-surgery",
  },
  {
    title: "Phimosis Treatment",
    image: "/Phymosis.png",
    description:
      "Gentle and effective phimosis treatment ensuring comfort and quick recovery.",
    category: "Urology",
    path: "/services/phimosis-treatment",
  },
  {
    title: "Abscess Drainage",
    image: "/Abscess.jpg",
    description:
      "Safe and sterile abscess drainage procedure for quick relief and proper healing.",
    category: "General Surgery",
    path: "/services/abscess-drainage",
  },
  {
    title: "Cyst Removal",
    image: "/cyst.jpg",
    description:
      "Precise and scar-minimizing cyst removal with advanced surgical care.",
    category: "General Surgery",
    path: "/services/cyst-removal",
  },
  {
    title: "Anal Fissure Treatment",
    image: "/fissure.jpg",
    description:
      "Modern laser and surgical treatments for fissures with minimal discomfort and fast recovery.",
    category: "Proctology",
    path: "/services/laser-fissure-treatment",
  },
  {
    title: "Piles Treatment",
    image: "/piles.jpg",
    description:
      "Advanced laser and surgical hemorrhoid treatments for pain-free recovery.",
    category: "Proctology",
    path: "/services/piles-treatment",
  },
  {
    title: "Fistula Treatment",
    image: "/fistula.jpg",
    description:
      "Minimally invasive fistula surgery ensuring complete healing and minimal recurrence.",
    category: "Proctology",
    path: "/services/fistula-treatment",
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
        damping: 15,
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
      <div className="absolute inset-0 p-7 pr-24 flex flex-col justify-end">
        {/* Default state content */}
  <div className="transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-12">
          <span className="inline-flex rounded-full bg-emerald-500/90 text-white backdrop-blur-md px-4 py-1.5 text-xs font-medium tracking-wide mb-3.5 shadow-lg shadow-emerald-500/20">
            {service.category}
          </span>
          <h3 className="text-white text-[1.7rem] font-light tracking-tight drop-shadow-lg">
            {service.title}
          </h3>
        </div>

        {/* Hover state content */}
  <div className="absolute inset-0 p-7 flex flex-col justify-end opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:-translate-y-12">
          <div className="flex items-center gap-2.5 text-sm mb-3.5">
            <span className="inline-flex rounded-full bg-emerald-500/90 text-white backdrop-blur-md px-4 py-1.5 font-medium tracking-wide shadow-lg shadow-emerald-500/20">
              {service.category}
            </span>
            <span className="text-emerald-300 font-medium tracking-wide">
              {service.duration}
            </span>
          </div>
          <h3 className="text-white text-[1.7rem] font-light tracking-tight mb-3">
            {service.title}
          </h3>
          <p className="text-slate-300/90 leading-relaxed line-clamp-2 text-[15px] mb-5 font-light">
            {service.description}
          </p>
        </div>

        {/* Morphing CTA button */}
        <Link
          to={service.path}
          aria-label={`Learn more about ${service.title}`}
          className="absolute bottom-7 right-7 inline-flex items-center justify-center gap-2 h-14 w-14 rounded-full bg-white group-hover:bg-emerald-400 text-slate-900 group-hover:text-white shadow-lg overflow-hidden px-0 transition-all duration-300 ease-out group-hover:w-44 group-hover:px-5"
        >
          <span className="mr-1 text-sm font-medium opacity-0 w-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:w-auto">
            Learn more
          </span>
          <ArrowRight
            className="h-6 w-6 transition-transform duration-300"
            strokeWidth={2.5}
          />
        </Link>
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
      setVisibleRows((prev) => prev + 1);
    }
  };

  return (
    <section
      id="services"
      className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 50,
            damping: 15,
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
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
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
              damping: 15,
            }}
            className="text-center"
          >
            <button
              onClick={handleViewMore}
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 px-10 py-4 text-[15px] font-medium tracking-wide text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              View More Services
              <ChevronDown
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
                strokeWidth={2.5}
              />
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
