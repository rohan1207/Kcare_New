import { useEffect, useState } from "react";
import {
  ArrowRightIcon,
  BeakerIcon,
  EyeIcon,
  CogIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

const TECH = [
  {
    title: "da Vinci Xi Robotic Surgical System",
    category: "Robotics",
    description:
      "World-leading robotic platform for minimally invasive procedures with unmatched precision and control.",
    features: [
      "4-arm robotic system",
      "Tremor filtration",
      "360° articulation",
      "Immersive 3D vision",
    ],
    icon: CogIcon,
    gradient: "from-teal-600 to-amber-600",
    accentColor: "teal",
  },
  {
    title: "Versius Robotic Surgical System",
    category: "Robotics",
    description:
      "Next-generation compact robotic system offering flexibility in advanced laparoscopic surgeries.",
    features: [
      "Modular design",
      "Open architecture",
      "Portable setup",
      "Enhanced dexterity",
    ],
    icon: CogIcon,
    gradient: "from-teal-600 to-amber-600",
    accentColor: "teal",
  },
  {
    title: "4K/3D Laparoscopic Tower",
    category: "Imaging",
    description:
      "Ultra-HD visualization for high-clarity minimally invasive surgeries.",
    features: [
      "4K resolution",
      "3D stereoscopic view",
      "HDR imaging",
      "Real-time enhancement",
    ],
    icon: EyeIcon,
    gradient: "from-teal-600 to-amber-600",
    accentColor: "teal",
  },
  {
    title: "Laser Surgery System",
    category: "Energy",
    description:
      "Advanced laser technology for painless treatment of varicose veins and other conditions.",
    features: [
      "Precision targeting",
      "Minimal scarring",
      "Reduced recovery",
      "Multiple wavelengths",
    ],
    icon: LightningBoltIcon,
    gradient: "from-teal-600 to-amber-600",
    accentColor: "amber",
  },
  {
    title: "Harmonic Scalpel & LigaSure",
    category: "Energy",
    description:
      "Cutting-edge energy devices for precise tissue dissection and vessel sealing.",
    features: [
      "Ultrasonic cutting",
      "Vessel sealing",
      "Minimal thermal damage",
      "Smoke reduction",
    ],
    icon: LightningBoltIcon,
    gradient: "from-teal-600 to-amber-600",
    accentColor: "amber",
  },
  {
    title: "ICG Fluorescence Imaging System",
    category: "Imaging",
    description:
      "Real-time blood flow and tissue perfusion assessment during cancer and colorectal surgeries.",
    features: [
      "Near-infrared imaging",
      "Real-time visualization",
      "Enhanced contrast",
      "Surgical guidance",
    ],
    icon: EyeIcon,
    gradient: "from-teal-600 to-amber-600",
    accentColor: "teal",
  },
  {
    title: "Endoscopic Staplers & Advanced Suturing",
    category: "Instruments",
    description:
      "Ensuring faster, safer, and minimally invasive resections and reconstructions.",
    features: [
      "Precise stapling",
      "Advanced suturing",
      "Minimal invasive",
      "Enhanced safety",
    ],
    icon: BeakerIcon,
    gradient: "from-teal-600 to-amber-600",
    accentColor: "teal",
  },
];

const CATEGORIES = ["All", "Robotics", "Imaging", "Energy", "Instruments"];

// Map category to safe Tailwind classes (no dynamic color strings)
function pillClasses(category) {
  switch (category) {
    case "Robotics":
    case "Instruments":
      return "bg-teal-50 text-teal-700 border-teal-200";
    case "Imaging":
    case "Energy":
      return "bg-amber-50 text-amber-700 border-amber-200";
    default:
      return "bg-stone-50 text-stone-700 border-stone-200";
  }
}

function dotBgClass(category) {
  switch (category) {
    case "Robotics":
    case "Instruments":
      return "bg-teal-500";
    case "Imaging":
    case "Energy":
      return "bg-amber-500";
    default:
      return "bg-stone-500";
  }
}

function TechnologyCard({ item, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = item.icon;

  return (
    <div
      className="group relative overflow-hidden rounded-3xl bg-white border border-stone-200/70 shadow-lg hover:shadow-xl transition-all duration-700 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Soft amber/teal wash */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-amber-50 to-teal-50 opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
      />

      <div className="relative bg-white rounded-3xl p-8">
        {/* Icon and Category */}
        <div className="flex items-center justify-between mb-6">
          <div
            className={`p-3 rounded-2xl bg-gradient-to-br from-teal-600 to-amber-600 shadow-lg`}
          >
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${pillClasses(
              item.category
            )}`}
          >
            {item.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-stone-900 mb-4 leading-tight group-hover:text-stone-800 transition-colors">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-stone-600 text-sm leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Features - Show on hover */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-stone-100 pt-4 mb-6">
            <div className="grid grid-cols-2 gap-2">
              {item.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-xs text-stone-600"
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0 ${dotBgClass(
                      item.category
                    )}`}
                  />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl font-medium text-sm transition-all duration-300 bg-teal-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 hover:bg-teal-700`}
        >
          Learn More
          <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export default function Technology() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const filteredTech =
    activeCategory === "All"
      ? TECH
      : TECH.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-24 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Premium badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-stone-200 shadow-sm mb-8 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            <span className="text-sm font-semibold text-stone-700">
              Advanced Medical Technology
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={`text-5xl md:text-7xl leading-tight font-bold text-stone-900 mb-8 transition-all duration-1000 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Precision. Innovation.
            <br />
            Excellence.
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl text-stone-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Experience the future of surgical precision with our world-class
            robotic systems, advanced imaging technology, and cutting-edge
            energy devices designed for minimally invasive care.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button className="px-8 py-4 rounded-2xl bg-amber-500 text-white font-semibold shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-amber-600">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-stone-200 text-stone-800 font-semibold shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300">
              Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-amber-500 text-white shadow-sm transform scale-105 hover:bg-amber-600"
                    : "bg-white/80 backdrop-blur-xl border border-stone-200 text-stone-800 hover:shadow-md hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTech.map((tech, index) => (
              <div
                key={tech.title}
                className={`transition-all duration-700 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <TechnologyCard item={tech} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Ready to experience next‑generation care?
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            Speak with our specialists to learn how our technology supports
            minimally invasive, precise outcomes.
          </p>
          <button className="px-8 py-4 rounded-2xl bg-amber-500 text-white font-semibold shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 hover:bg-amber-600">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
