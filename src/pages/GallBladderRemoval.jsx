import React from 'react';
import { HeartCrack } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import ProcedureTimeline from '../components/Timeline';



const GallBladderRemovalPage = () => {
  const serviceData = {
    title: "Gall Bladder Removal",
    subtitle: "Minimally invasive surgery to resolve gallstone pain and complications.",
    image: "/gall_bladder.jpg",
    Icon: HeartCrack,
    overview: [
      "The gallbladder is a small organ that stores bile, a fluid that aids in digestion. Gallstones can form in the gallbladder and cause severe pain, inflammation, or blockages, a condition known as cholecystitis.",
      "A laparoscopic cholecystectomy, or gallbladder removal, is the definitive treatment for symptomatic gallstones. This minimally invasive procedure is one of the most common surgeries performed, offering a safe and effective solution with a rapid recovery time."
    ],
    benefits: [
      {
        title: "Complete Pain Resolution",
        description: "Removing the gallbladder permanently resolves the pain and discomfort caused by gallstones."
      },
      {
        title: "Fast Recovery",
        description: "Most patients can go home the same day or the next day and resume normal activities within a week."
      },
      {
        title: "Minimal Scarring",
        description: "The procedure is performed through 3-4 tiny incisions, leaving behind very small, often unnoticeable scars."
      },
      {
        title: "Low Complication Rate",
        description: "Laparoscopic gallbladder removal is an extremely safe procedure with a very low risk of complications."
      }
    ],
    technology: {
      description: "The surgery is performed using advanced laparoscopic instruments passed through small abdominal incisions. A camera provides a magnified view of the internal organs, allowing the surgeon to carefully dissect and remove the gallbladder. The use of 'keyhole' surgery minimizes trauma to the abdominal wall, which is the primary reason for the fast and comfortable recovery."
    },
    timeline: [
      {
        title: "Diagnosis & Ultrasound",
        description: "Your symptoms are evaluated, and an abdominal ultrasound is performed to confirm the presence of gallstones."
      },
      {
        title: "Consultation & Surgical Planning",
        description: "We discuss the findings with you and schedule the laparoscopic cholecystectomy as the definitive treatment."
      },
      {
        title: "Pre-Operative Assessment",
        description: "A standard health check and anesthesia consultation are done to ensure you are ready for surgery."
      },
      {
        title: "Laparoscopic Cholecystectomy",
        description: "The gallbladder is removed through a few small incisions using a camera and specialized surgical tools."
      },
      {
        title: "Post-Anesthesia Care",
        description: "You will be monitored in the recovery unit for a short period as you wake up from anesthesia."
      },
      {
        title: "Discharge & Home Care",
        description: "Most patients are discharged the same or the next day with instructions for diet and a quick return to normal life."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default GallBladderRemovalPage;