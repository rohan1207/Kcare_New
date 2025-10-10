import React from 'react';
import { Footprints } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import ProcedureTimeline from '../components/Timeline';

const Blur = () => (
  <>
    <div className="absolute top-0 right-0 -z-10 h-[700px] w-[600px] rounded-full bg-gradient-to-br from-emerald-50 to-sky-50/70 blur-3xl opacity-80" />
    <div className="absolute bottom-1/2 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-50 to-emerald-50/70 blur-3xl opacity-60" />
  </>
);



const DiabeticFootCarePage = () => {
  const serviceData = {
    title: "Diabetic Foot Care",
    subtitle: "Specialized care to protect your foundation and preserve mobility.",
    image: "/diabetic_foot.jpg",
    Icon: Footprints,
    overview: [
      "Diabetes can have a significant impact on foot health, leading to complications like nerve damage (neuropathy) and poor circulation. These issues make the feet vulnerable to sores, ulcers, and infections that can be difficult to heal.",
      "Our Diabetic Foot Care program is a comprehensive service designed to manage and prevent these complications. We focus on early detection, advanced wound care, and patient education to reduce the risk of serious outcomes, including amputation."
    ],
    benefits: [
      {
        title: "Prevent Amputation",
        description: "Proactive care and advanced treatments drastically reduce the risk of limb loss, preserving your independence."
      },
      {
        title: "Promote Faster Healing",
        description: "We utilize specialized techniques to create an optimal healing environment for chronic wounds and ulcers."
      },
      {
        title: "Pain & Risk Reduction",
        description: "Regular check-ups and proper care minimize the risk of infection and alleviate discomfort from neuropathy."
      },
      {
        title: "Improve Quality of Life",
        description: "By keeping your feet healthy, we help you stay active, mobile, and engaged in your daily life."
      }
    ],
    technology: {
      description: "Our clinic is equipped with advanced wound care technologies, including debridement tools, specialized dressings, and non-invasive vascular assessments to monitor blood flow. For severe cases, we coordinate with facilities offering Hyperbaric Oxygen Therapy (HBOT), a treatment that enhances the body's natural healing processes by delivering 100% oxygen in a pressurized environment."
    },
    timeline: [
        {
            title: "Comprehensive Foot Examination",
            description: "A detailed assessment of nerve function, circulation, and skin integrity to identify risk factors and existing issues."
        },
        {
            title: "Personalized Management Plan",
            description: "Based on the assessment, we create a tailored plan including wound care protocols, footwear recommendations, and glucose management strategies."
        },
        {
            title: "Advanced Wound Care & Debridement",
            description: "For existing ulcers, we perform meticulous cleaning and debridement to remove non-viable tissue and promote a healthy wound bed."
        },
        {
            title: "Offloading & Pressure Reduction",
            description: "Customized offloading devices or footwear are provided to relieve pressure from vulnerable areas, preventing ulcer formation and aiding healing."
        },
        {
            title: "Patient Education & Self-Care Training",
            description: "We empower you with the knowledge to perform daily foot checks and manage your foot health proactively at home."
        },
        {
            title: "Long-Term Monitoring & Prevention",
            description: "Regular follow-up appointments are scheduled to monitor progress, prevent recurrence, and ensure lasting foot health."
        }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default DiabeticFootCarePage;