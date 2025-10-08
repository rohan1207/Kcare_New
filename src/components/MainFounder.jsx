import { motion } from 'framer-motion';
import { Award, Stethoscope, Zap, ArrowRight } from 'lucide-react';

const STATS = [
  { icon: <Award className="h-6 w-6 text-emerald-500" />, label: "10+ Years of Experience" },
  { icon: <Stethoscope className="h-6 w-6 text-emerald-500" />, label: "Board-Certified Surgeon" },
  { icon: <Zap className="h-6 w-6 text-emerald-500" />, label: "Robotic & Laser Specialist" },
];

const SPECIALITIES = [
  "Hernia Repair",
  "Gallbladder Surgery",
  "Advanced Laparoscopy",
  "Laser Proctology",
  "Diabetic Foot Care",
  "Benign & Cancer Surgeries",
];

const MainFounder = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring',
        stiffness: 80,
        damping: 15
      } 
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      transition: { 
        type: 'spring',
        stiffness: 45,
        damping: 20,
        delay: 0.4 
      } 
    },
  };

  return (
    <section className="bg-gradient-to-b from-white to-emerald-50/30 py-20 sm:py-28">
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="bg-gradient-to-br from-sky-50/60 to-emerald-50/40 rounded-[2.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center shadow-xl ring-1 ring-emerald-100/80 backdrop-blur-sm"
        >
        {/* Text Content */}
        <div className="p-10 lg:p-14">
          <motion.div variants={itemVariants}>
            <span className="text-base font-medium text-emerald-500 tracking-wider uppercase">Meet Our Founder</span>
            <h2 className="mt-3 text-4xl sm:text-[56px] font-light tracking-tight text-stone-900 leading-[1.1]">
              Dr. Pramod <span className="font-medium">Kadam</span>
            </h2>
            <p className="mt-6 text-lg text-stone-600 leading-relaxed font-light max-w-xl">
              A distinguished and board-certified general surgeon with over a decade of experience, dedicated to pioneering advanced surgical procedures with a commitment to exceptional patient care.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 space-y-4">
            {STATS.map((stat, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="p-2.5 rounded-xl bg-emerald-100/50 group-hover:bg-emerald-100 transition-colors">
                  {stat.icon}
                </div>
                <span className="font-medium text-stone-700 text-lg">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10">
            <h4 className="text-sm font-medium text-emerald-600 uppercase tracking-wider">Key Specialities</h4>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {SPECIALITIES.map((spec, index) => (
                <span 
                  key={index} 
                  className="bg-gradient-to-br from-emerald-50 to-sky-50 text-stone-700 text-sm font-medium px-4 py-2 rounded-xl border border-emerald-100/80 hover:border-emerald-200 transition-colors"
                >
                  {spec}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex gap-4">
            <a 
              href="/about-founder" 
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-medium rounded-full shadow-lg shadow-emerald-200/50 transition-all duration-300"
            >
              Know More
              <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/book-appointment" 
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-emerald-200 text-emerald-700 hover:bg-emerald-50 font-medium rounded-full transition-colors duration-300"
            >
              Book Consultation
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div variants={imageVariants} className="relative w-full h-[600px] sm:h-[750px] lg:h-[700px] self-end">
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-emerald-100/30 z-10" />
            <img
              src="/pramod3.png"
              alt="Dr. Pramod Kadam"
              className="absolute bottom-16 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 w-full h-full max-w-xl object-contain object-bottom drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-200/10 via-transparent to-transparent opacity-60" />
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
};

export default MainFounder;
