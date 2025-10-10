import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, HeartPulse, Stethoscope, ArrowRight } from 'lucide-react';
import ProcedureTimeline from './Timeline';

const Blur = () => (
  <>
    <div className="absolute top-0 right-0 -z-10 h-[700px] w-[600px] rounded-full bg-gradient-to-br from-emerald-50 to-sky-50/70 blur-3xl opacity-80" />
    <div className="absolute bottom-1/2 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-emerald-50/70 blur-3xl opacity-60" />
  </>
);

const ServicePageLayout = ({ service }) => {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1, bounce: 0.4 },
    },
  };

  return (
    <div className="bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden -mt-20">
      <Blur />
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] min-h-[450px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#041f1c] via-[#041f1c]/80 to-transparent"></div>
        <div className="relative z-10 text-center px-4">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-4"
          >
            <service.Icon className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4, type: 'spring' }}
            className="text-4xl md:text-6xl font-light tracking-tight"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.6, type: 'spring' }}
            className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-white/90 font-light"
          >
            {service.subtitle}
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column (Main Details) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview Section */}
            <motion.div 
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-lg ring-1 ring-emerald-100/80"
            >
              <h2 className="text-3xl font-light text-stone-900 mb-4">Overview</h2>
              <div className="prose prose-lg max-w-none text-stone-600/90 font-light leading-relaxed">
                {service.overview.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </motion.div>

            {/* Benefits Section */}
            {service.benefits && (
              <motion.div 
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-lg ring-1 ring-emerald-100/80"
              >
                <h2 className="text-3xl font-light text-stone-900 mb-6">Key <span className="font-medium">Benefits</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-emerald-100/70 rounded-full">
                        <ShieldCheck className="w-6 h-6 text-emerald-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-stone-800">{benefit.title}</h3>
                        <p className="text-stone-600/90 font-light">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Technology Section */}
            {service.technology && (
              <motion.div 
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-lg ring-1 ring-emerald-100/80"
              >
                <h2 className="text-3xl font-light text-stone-900 mb-4">Advanced <span className="font-medium">Technology</span></h2>
                <div className="prose prose-lg max-w-none text-stone-600/90 font-light leading-relaxed">
                  <p>{service.technology.description}</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column (CTA & Info) */}
          <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-28 h-fit">
            <motion.div 
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-[2rem] shadow-xl ring-1 ring-emerald-100/90"
            >
              <h3 className="text-2xl font-light text-stone-900 mb-4 text-center">Book a <span className="font-medium">Consultation</span></h3>
              <p className="text-center text-stone-600/90 mb-6 font-light">Take the first step towards better health. Our team is here to help.</p>
              <Link 
                to="/contact"
                className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-emerald-600 transform transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/20"
              >
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div 
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-emerald-50/50 backdrop-blur-sm p-8 rounded-[2rem] ring-1 ring-emerald-100/80"
            >
              <h3 className="text-xl font-medium text-stone-900 mb-4">Why Choose K-Care?</h3>
              <ul className="space-y-4 text-stone-700 font-light">
                <li className="flex items-start gap-3"><Stethoscope className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />Expert surgical team with years of experience.</li>
                <li className="flex items-start gap-3"><HeartPulse className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />Patient-centric approach with compassionate care.</li>
                <li className="flex items-start gap-3"><ShieldCheck className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />State-of-the-art technology for better outcomes.</li>
              </ul>
            </motion.div>
          </aside>
        </div>
      </div>

      {/* Timeline Section */}
      {service.timeline && <ProcedureTimeline steps={service.timeline} />}
    </div>
  );
};

export default ServicePageLayout;
