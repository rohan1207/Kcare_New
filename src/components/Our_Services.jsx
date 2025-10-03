import { Brain, HeartPulse, Stethoscope, Syringe, Activity, Bone, Eye, Tooth } from 'lucide-react';

export default function OurServices() {
  const services = [
    {
      icon: <HeartPulse className="h-8 w-8 text-blue-600" />,
      title: "Cardiology",
      description: "Comprehensive heart care with advanced diagnostics and treatment for all cardiac conditions.",
      color: "bg-blue-100"
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Neurology",
      description: "Expert care for disorders of the nervous system with cutting-edge treatment options.",
      color: "bg-blue-100"
    },
    {
      icon: <Tooth className="h-8 w-8 text-blue-600" />,
      title: "Dental Care",
      description: "Complete dental solutions for a healthy smile, from routine checkups to cosmetic procedures.",
      color: "bg-blue-100"
    },
    {
      icon: <Bone className="h-8 w-8 text-blue-600" />,
      title: "Orthopedics",
      description: "Specialized care for bones, joints, and muscles with personalized treatment plans.",
      color: "bg-blue-100"
    },
    {
      icon: <Activity className="h-8 w-8 text-blue-600" />,
      title: "Physiotherapy",
      description: "Rehabilitation and pain management through specialized physical therapy techniques.",
      color: "bg-blue-100"
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "Eye Care",
      description: "Comprehensive eye examinations and treatments for all vision-related conditions.",
      color: "bg-blue-100"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-slate-600 text-lg">
            We provide a wide range of healthcare services to meet all your medical needs with expert care and advanced technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-blue-200 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className={`${service.color} h-16 w-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              
              {/* Read More Link */}
              <a 
                href="#" 
                className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
              >
                Read More
                <svg 
                  className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              {/* Hover Effect Elements */}
              <div className="absolute -right-10 -bottom-10 h-20 w-20 rounded-full bg-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -right-5 -bottom-5 h-10 w-10 rounded-full bg-blue-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
