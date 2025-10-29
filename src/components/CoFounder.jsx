import { motion } from "framer-motion";
import { Award, Phone, GraduationCap, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const STATS = [
  {
    icon: <Award className="h-5 w-5 text-amber-600" />,
    label: "13+ Years Experience",
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-amber-600" />,
    label: "MBA, PGDEMS, BAMS",
  },
  {
    icon: <Heart className="h-5 w-5 text-amber-600" />,
    label: "AHA BLS/ACLS Instructor",
  },
];

const SPECIALITIES = [
  "Emergency Medicine",
  "Hospital Administration",
  "ACLS/BLS Training",
  "Patient Care Coordination",
  "Female Anorectal Physician",
];

export default function CoFounder() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-amber-50/20 to-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-yellow-100/20 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0 items-center shadow-2xl shadow-amber-500/20 ring-1 ring-amber-100/50"
        >
          {/* Image Content - 2 columns (left) */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-2 relative h-[380px] sm:h-[420px] lg:h-[460px] overflow-hidden order-last lg:order-first"
          >
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-amber-100/20 via-transparent to-transparent z-10" />
            <img
              src="/sharma.png"
              alt="Dr. Shital Sharma"
              className="absolute bottom-0 left-0 w-full h-full object-contain object-bottom lg:object-left-bottom scale-110 lg:scale-100"
            />
           
          </motion.div>

          {/* Text Content - 3 columns */}
          <div className="lg:col-span-3 p-8 sm:p-10 lg:p-12">
            <motion.div variants={itemVariants}>
              <span className="inline-block text-sm font-semibold text-amber-700 tracking-wide uppercase bg-amber-50 px-3 py-1 rounded-full">
                Meet Our Co‑founder & CEO
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-stone-900 leading-tight">
                Dr. Shital Satish{" "}
                <span className="font-semibold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                  Sharma
                </span>
              </h2>
              <p className="mt-3 text-sm text-stone-600">MMC Reg. No. I‑70646‑A</p>
              <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
                BAMS, PGDEMS, MBA (Hospital Administration & Healthcare Management). AHA‑certified BLS & ACLS Instructor with 13+ years in Emergency Medicine and hospital operations.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-4">
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 bg-gradient-to-br from-amber-50/80 to-orange-50/50 px-4 py-2.5 rounded-xl border border-amber-200/60 group hover:border-amber-300 transition-all"
                >
                  <div className="flex-shrink-0">{stat.icon}</div>
                  <span className="font-medium text-stone-700 text-sm whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Specialities */}
            <motion.div variants={itemVariants} className="mt-6">
              <h4 className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-3">
                Key Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {SPECIALITIES.map((spec, i) => (
                  <span
                    key={i}
                    className="bg-white/80 text-stone-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-stone-200/60 hover:border-amber-300 hover:bg-amber-50/50 transition-all"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/founders/shital-sharma"
                className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-sm font-semibold rounded-full shadow-lg shadow-amber-500/30 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:9373619006"
                className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-amber-300 text-amber-700 hover:bg-amber-50 text-sm font-semibold rounded-full transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                9373619006
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
