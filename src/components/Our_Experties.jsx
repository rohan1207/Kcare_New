import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExpertiseCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Fertility &",
      subtitle: "Family Building",
      description: "Guiding members on the quickest, safest, and most affordable path to bringing home a healthy baby.",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&h=1000&fit=crop",
      color: "cyan"
    },
    {
      id: 2,
      title: "Maternity &",
      subtitle: "Newborn Care",
      description: "Providing proactive, continuous care to help families throughout pregnancy, postpartum, and return to work.",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=1000&fit=crop",
      color: "cyan"
    },
    {
      id: 3,
      title: "Parenting &",
      subtitle: "Pediatrics",
      description: "Supporting families with expert guidance through every stage of child development and care.",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&h=1000&fit=crop",
      color: "blue"
    },
    {
      id: 4,
      title: "Menopause &",
      subtitle: "Midlife Health",
      description: "Empowering members to thrive in midlife, both personally and professionally, with holistic care.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop",
      color: "yellow"
    }
  ];

  const getCardWidth = (index) => {
    if (hoveredIndex === null) return "25%";
    if (hoveredIndex === index) return "52%";
    return "16%";
  };

  return (
    <div className="w-full py-16 sm:py-20 lg:py-24 bg-[#041f1c] relative overflow-hidden px-8">
      
      {/* Decorative background elements matching ModernDentistrySection */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-emerald-50 to-sky-50/70 blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-emerald-50/70 blur-3xl opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent mix-blend-overlay" />
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="w-full mb-8 text-center">
         
          <h2 className="mt-4 text-3xl md:text-5xl font-light tracking-tight text-white">
            Our <span className="font-medium">Expertise</span>
          </h2>
          <p className="mt-4 text-white/90 max-w-3xl mx-auto">
            Minimally invasive, precision-driven procedures for hernia, gallbladder, proctology and diabetic foot care—aimed at faster recovery, less pain and superior outcomes.
          </p>
        </div>
        <div className="w-full h-[600px] flex gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="relative rounded-[2rem] overflow-hidden cursor-pointer shadow-xl shadow-emerald-900/20"
            style={{
              width: getCardWidth(index)
            }}
            animate={{
              width: getCardWidth(index)
            }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Background Image */}
            <motion.div
              className="absolute inset-0"
              animate={{
                scale: hoveredIndex === index ? 1.05 : 1
              }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041f1c]/90 via-[#041f1c]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent mix-blend-overlay" />
            </motion.div>

            {/* Colored Indicator Dot */}
            <motion.div
              className="absolute top-6 left-6 w-3 h-3 rounded-full bg-emerald-400 shadow-lg ring-2 ring-emerald-400/30"
              animate={{
                scale: hoveredIndex === index ? 1.3 : 1
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-8">
              <motion.div
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-white text-3xl font-light leading-tight mb-1">
                  {card.title}
                </h3>
                <h3 className="text-white text-3xl font-medium leading-tight mb-6">
                  {card.subtitle}
                </h3>

                {/* Description - Fade only, reserve space to avoid bounce */}
                <div className="relative min-h-[140px]">
                  <AnimatePresence mode="wait">
                    {hoveredIndex === index && (
                      <motion.div
                        key="desc"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0"
                      >
                        <p className="text-white/90 text-lg font-light leading-relaxed mb-6 max-w-md">
                          {card.description}
                        </p>

                        <motion.button
                          className="bg-emerald-400 hover:bg-emerald-300 text-stone-900 font-semibold px-8 py-3 rounded-full transition-colors w-fit shadow-md shadow-emerald-900/20"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Learn more
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCards;