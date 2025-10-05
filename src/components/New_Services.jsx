import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight,
  HeartPulse, // General Health
  HeartCrack, // Replaces Stomach for internal ailments
  Shield, // Hernia, Protection
  Footprints, // Diabetic Foot
  Ribbon, // Oncology (Breast)
  Droplets, // Urology
  Bandage, // Replaces Bone for wound care
  Activity // General purpose
} from 'lucide-react';

const SERVICES = [
  {
    title: "Diabetic Foot Care",
    image: "/diabetic_foot.jpg",
    description: "Specialized treatment to prevent complications and promote healing in diabetic patients, reducing the risk of amputation.",
    benefit: "Preserves limb function & mobility.",
    technology: "Advanced wound care & hyperbaric oxygen therapy.",
    Icon: Footprints
  },
  {
    title: "Breast Surgery",
    image: "/breast.jpg",
    description: "From lumpectomy to mastectomy, we offer compassionate care with a focus on aesthetic outcomes and rapid recovery.",
    benefit: "Minimally invasive options available.",
    technology: "Oncoplastic techniques for better cosmetic results.",
    Icon: Ribbon
  },
  {
    title: "Advanced Thyroid Surgery",
    image: "/thyroid.jpg",
    description: "Precise removal of thyroid nodules or glands with minimal scarring, protecting vocal cord function.",
    benefit: "Tiny incision, virtually scarless.",
    technology: "Nerve monitoring & robotic-assisted options.",
    Icon: Activity
  },
  {
    title: "Laser Fissure Treatment",
    image: "/fissure.jpg",
    description: "A quick, painless laser procedure to treat anal fissures, offering immediate relief and faster healing without cuts.",
    benefit: "95% success rate, minimal discomfort.",
    technology: "Diode Laser Ablation.",
    Icon: HeartCrack
  },
  {
    title: "Piles (Hemorrhoids)",
    image: "/piles.jpg",
    description: "Advanced, minimally invasive solutions for hemorrhoids, ensuring a comfortable and quick return to daily life.",
    benefit: "Painless procedure, rapid recovery.",
    technology: "Laser Hemorrhoidoplasty (LHP).",
    Icon: HeartCrack
  },
  {
    title: "Fistula Treatment",
    image: "/fistula.jpg",
    description: "Effective fistula treatment using advanced techniques that preserve sphincter function and prevent recurrence.",
    benefit: "High success rate, sphincter-saving.",
    technology: "Fistula-tract Laser Closure (FiLaC).",
    Icon: HeartCrack
  },
  {
    title: "Laparoscopic Appendectomy",
    image: "/appendix.jpg",
    description: "Emergency and elective appendix removal using a keyhole approach for minimal scarring and a swift recovery.",
    benefit: "Less pain, back to normal in days.",
    technology: "Minimally Invasive Laparoscopy.",
    Icon: HeartCrack
  },
  {
    title: "Robotic Hernia Repair",
    image: "/hernia.webp",
    description: "State-of-the-art robotic surgery for complex hernias, providing a durable repair with enhanced precision.",
    benefit: "Reduced recurrence, minimal pain.",
    technology: "da Vinci Robotic Surgical System.",
    Icon: Shield
  },
  {
    title: "Gall Bladder Removal",
    image: "/gall_bladder.jpg",
    description: "Laparoscopic gallbladder removal to treat gallstones and related pain, performed through tiny incisions.",
    benefit: "Same-day discharge possible.",
    technology: "Advanced Laparoscopic Surgery.",
    Icon: HeartCrack
  },
  {
    title: "Hydrocele Surgery",
    image: "/hydrocele.jpg",
    description: "A simple, effective procedure to correct hydroceles with a focus on patient comfort and minimal downtime.",
    benefit: "Quick, outpatient procedure.",
    technology: "Minimally Invasive Techniques.",
    Icon: Droplets
  },
  {
    title: "Pilonidal Sinus Care",
    image: "/pilonidal_sinus.jpg",
    description: "Advanced laser treatment for pilonidal sinus that closes the tract without large incisions, promoting faster healing.",
    benefit: "No stitches, back to work sooner.",
    technology: "Pilonidal Sinus Laser-Assisted Closure (PiLaC).",
    Icon: Bandage
  },
  {
    title: "Rectal Prolapse Surgery",
    image: "/rectal_prolapse.jpg",
    description: "Robotic and laparoscopic techniques to correct rectal prolapse, restoring normal function and quality of life.",
    benefit: "Restores anatomy and function.",
    technology: "Robotic-Assisted Ventral Mesh Rectopexy.",
    Icon: HeartCrack
  },
  {
    title: "Phimosis Treatment",
    image: "/Phymosis.png",
    description: "Gentle and effective procedures, including Z-plasty and laser treatments, to resolve phimosis with expert care.",
    benefit: "Preserves sensation and function.",
    technology: "Laser-based and plastic surgery techniques.",
    Icon: Droplets
  },
  {
    title: "Abscess Drainage",
    image: "/Abscess.jpg",
    description: "Prompt and sterile drainage of abscesses to relieve pain, prevent spread of infection, and support healing.",
    benefit: "Immediate pain and pressure relief.",
    technology: "Ultrasound-guided drainage for precision.",
    Icon: HeartPulse
  },
  {
    title: "Cyst Removal",
    image: "/cyst.jpg",
    description: "Minimally invasive removal of skin cysts for medical or cosmetic reasons, with an emphasis on minimal scarring.",
    benefit: "Improved comfort and appearance.",
    technology: "Minimal Excision Technique.",
    Icon: HeartPulse
  },
];

export default function NewServices() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const tabsRef = useRef(null);
  const sectionRef = useRef(null); // Ref for the section
  const [isInView, setIsInView] = useState(false); // State to track visibility
  const selectedTab = SERVICES[selectedIndex];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Consider in view if 10% is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    // Only run the auto-scroll if the component is in view and not paused
    if (isInView && !isPaused) {
      interval = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % SERVICES.length);
      }, 3000); // Auto-scroll every 3 seconds
    }

    return () => clearInterval(interval);
  }, [isPaused, isInView]);

  useEffect(() => {
    // Only scroll the tabs if the component is visible
    if (isInView) {
      const activeTab = tabsRef.current?.children[selectedIndex];
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    }
  }, [selectedIndex, isInView]);

  const handleInteraction = (index) => {
    setSelectedIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Pause for 5 seconds on interaction
  };

  const handleArrowClick = (direction) => {
    const newIndex = direction === 'left'
      ? (selectedIndex - 1 + SERVICES.length) % SERVICES.length
      : (selectedIndex + 1) % SERVICES.length;
    handleInteraction(newIndex);
  };

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-teal-600 tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-sky-900">
            Advanced Surgical Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left: Service List */}
          <div 
            ref={tabsRef}
            className="lg:col-span-1 h-full lg:max-h-[450px] overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-sky-200 scrollbar-track-sky-50"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {SERVICES.map((item, index) => {
              const { Icon } = item;
              const isActive = selectedIndex === index;
              return (
                <button
                  key={item.title}
                  onClick={() => handleInteraction(index)}
                  className={`w-full flex items-center text-left p-3 rounded-lg transition-all duration-300 transform ${ 
                    isActive 
                      ? 'bg-sky-800 text-white shadow-md scale-105' 
                      : 'bg-sky-50/70 hover:bg-sky-100 hover:shadow-sm'
                  }`}
                >
                  <Icon className={`w-6 h-6 mr-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-teal-600'}`} />
                  <span className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-sky-900'}`}>{item.title}</span>
                </button>
              );
            })}
          </div>

          {/* Right: Content Display */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-sky-100/80">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 items-center"
              >
                <div className="relative h-64 md:h-full min-h-[280px] md:min-h-[450px]">
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={selectedTab.image}
                    alt={selectedTab.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold text-sky-900">{selectedTab.title}</h3>
                  <p className="mt-4 text-base text-sky-900/80 leading-relaxed min-h-[6rem]">{selectedTab.description}</p>
                  <div className="mt-6 space-y-3 text-sm">
                      <p><span className="font-semibold text-teal-700">Key Benefit:</span> <span className="text-sky-800/90">{selectedTab.benefit}</span></p>
                      <p><span className="font-semibold text-teal-700">Technology:</span> <span className="text-sky-800/90">{selectedTab.technology}</span></p>
                  </div>
                  <button className="mt-8 inline-block rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-teal-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
