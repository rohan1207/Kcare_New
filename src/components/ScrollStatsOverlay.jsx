import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollStatsOverlay = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);
  const statsContentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const stats = statsRef.current;
    const statsContent = statsContentRef.current;

    // Pin the image when scrolling
    ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      pin: image,
      pinSpacing: false,
    });

    // Animate stats overlay
    gsap.fromTo(
      stats,
      { y: '100%' },
      {
        y: '0%',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'center top',
          scrub: 1,
        },
      }
    );

    // Fade in stats content
    gsap.fromTo(
      statsContent,
      { opacity: 1 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'center top',
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const statItems = [
    {
      percentage: '27%',
      description: 'Up to 27% lower NICU admissions',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      percentage: '57%',
      description: 'Up to 57% of members report Maven helped them return to work after having a baby',
      color: 'from-blue-400 to-blue-500',
    },
    {
      percentage: '30%',
      description: 'Among fertility members, 30% achieve pregnancy without Assisted Reproductive Technology',
      color: 'from-emerald-600 to-teal-700',
    },
    {
      percentage: '21%',
      description: 'Up to 21% of members reported an improved state of maternal mental health',
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <div className="bg-gray-100">
     

      {/* Main scroll component */}
      <div ref={containerRef} className="relative h-[200vh]">
        {/* Fixed background image */}
        <div ref={imageRef} className="absolute inset-0 w-full h-screen">
          <img
            src="/stats.jpeg"
            alt="Family moment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        {/* Stats overlay that scrolls over image */}
        <div
          ref={statsRef}
          className="absolute inset-0 w-full h-screen flex items-center justify-center"
        >
          <div
            ref={statsContentRef}
            className="bg-gray-50 rounded-t-3xl w-full h-full flex flex-col items-center justify-start pt-20 px-8"
          >
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl">
              <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-4">
                Lowering costs by
              </h2>
              <h2 className="text-5xl md:text-6xl italic font-light text-gray-700 mb-8">
                improving care
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                By guiding members through more intuitive paths to health,
                <br />
                we help reduce costly interventions and improve outcomes.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
              {statItems.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Circular progress indicator */}
                  <div className="relative w-48 h-48 mb-6">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="url(#gradient-${index})"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${parseInt(stat.percentage) * 5.5} 552`}
                        className="transition-all duration-1000"
                      />
                      <defs>
                        <linearGradient
                          id={`gradient-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            className={stat.color.includes('emerald') ? 'text-emerald-500' : stat.color.includes('blue-4') ? 'text-blue-400' : stat.color.includes('emerald-6') ? 'text-emerald-600' : 'text-cyan-500'}
                            stopColor="currentColor"
                          />
                          <stop
                            offset="100%"
                            className={stat.color.includes('teal-6') ? 'text-teal-600' : stat.color.includes('blue-5') ? 'text-blue-500' : stat.color.includes('teal-7') ? 'text-teal-700' : 'text-blue-600'}
                            stopColor="currentColor"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-light text-gray-800">
                        {stat.percentage}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-center text-sm text-gray-600 leading-relaxed max-w-xs">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default ScrollStatsOverlay;