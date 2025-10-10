import React from 'react';
import { Droplets } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import ProcedureTimeline from '../components/Timeline';



const PilesTreatmentPage = () => {
  const serviceData = {
    title: "Piles (Hemorrhoids) Treatment",
    subtitle: "Advanced laser solutions for a common and painful condition.",
    image: "/piles.jpg",
    Icon: Droplets,
    overview: [
      "Piles, or hemorrhoids, are swollen veins in the lower rectum and anus. They are a very common condition that can cause pain, itching, and bleeding, significantly affecting quality of life. While many cases can be managed with lifestyle changes, persistent or severe hemorrhoids require medical intervention.",
      "We specialize in Laser Hemorrhoidoplasty (LHP), a minimally invasive procedure that offers a quick and virtually painless solution. This advanced technique avoids the cuts and stitches of traditional surgery, leading to a much faster recovery."
    ],
    benefits: [
      {
        title: "Painless & Bloodless",
        description: "The laser procedure is precise, involves no cutting, and results in minimal to no post-operative pain."
      },
      {
        title: "Rapid Recovery",
        description: "Patients can typically resume their normal daily activities within 24-48 hours."
      },
      {
        title: "No Open Wounds",
        description: "Unlike traditional surgery, LHP leaves no open wounds, drastically reducing the risk of infection."
      },
      {
        title: "High Success Rate",
        description: "Laser treatment is highly effective for various grades of hemorrhoids, with a very low rate of recurrence."
      }
    ],
    technology: {
      description: "Laser Hemorrhoidoplasty (LHP) uses a specialized radial fiber to deliver laser energy directly into the hemorrhoidal pile. This energy seals the blood vessels from within, causing the hemorrhoid to shrink and eventually disappear. The procedure is performed with high precision, preserving the sensitive anal sphincter muscle and mucosa, which is why it is so well-tolerated by patients."
    },
    timeline: [
      {
        title: "Consultation and Proctoscopy",
        description: "A careful examination and proctoscopy are performed to accurately grade the hemorrhoids and confirm the diagnosis."
      },
      {
        title: "Personalized Treatment Plan",
        description: "We discuss your options and determine if Laser Hemorrhoidoplasty (LHP) is the right choice for your specific condition."
      },
      {
        title: "Day-Care Procedure",
        description: "The LHP procedure is performed in a day-care setting under short anesthesia and is completed in about 20-30 minutes."
      },
      {
        title: "Post-Procedure Observation",
        description: "You will be monitored for a few hours before being discharged home with medication and dietary advice."
      },
      {
        title: "Quick Return to Normalcy",
        description: "Experience minimal discomfort and return to your work and regular life within 1-2 days."
      },
      {
        title: "Follow-Up for Complete Care",
        description: "A follow-up appointment ensures everything has healed perfectly and provides an opportunity to discuss long-term prevention."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default PilesTreatmentPage;