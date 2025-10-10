import React from 'react';
import { Scan } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import ProcedureTimeline from '../components/Timeline';



const LaparoscopicCholecystectomyPage = () => {
  const serviceData = {
    title: "Laparoscopic Cholecystectomy",
    subtitle: "The gold standard for gallbladder removal.",
    image: "/gallbladder.jpg",
    Icon: Scan,
    overview: [
      "The gallbladder is a small organ that stores bile, a digestive fluid. Gallstones can form in the gallbladder, leading to inflammation, pain, and other complications. When this happens, surgical removal of the gallbladder (cholecystectomy) is the most effective treatment.",
      "Laparoscopic cholecystectomy is a minimally invasive surgical procedure that has become the gold standard for gallbladder removal. It offers significant advantages over traditional open surgery, including a faster recovery and less pain."
    ],
    benefits: [
      {
        title: "Minimal Pain",
        description: "Patients experience significantly less postoperative pain compared to open surgery."
      },
      {
        title: "Short Hospital Stay",
        description: "Most patients can go home the same day or the day after the procedure."
      },
      {
        title: "Quick Recovery",
        description: "You can expect to return to your normal daily activities within a week."
      },
      {
        title: "Excellent Cosmetic Results",
        description: "The small 'keyhole' incisions result in minimal and often barely visible scars."
      }
    ],
    technology: {
      description: "The procedure is performed using a laparoscope, a thin tube with a high-definition camera, which is inserted through a small incision near the navel. The abdomen is inflated with carbon dioxide gas to create space for the surgeon to work. Specialized instruments are inserted through 2-3 other small incisions to carefully detach and remove the gallbladder. The surgeon is guided by the magnified, clear view on a video monitor, allowing for extreme precision."
    },
    timeline: [
      {
        title: "Consultation & Ultrasound",
        description: "Your symptoms are evaluated, and an abdominal ultrasound is performed to confirm the presence of gallstones and assess the gallbladder."
      },
      {
        title: "Pre-Operative Assessment",
        description: "A fitness check, including blood tests and an anesthesia consultation, is done to ensure you are ready for surgery."
      },
      {
        title: "The Laparoscopic Procedure",
        description: "The minimally invasive surgery is performed under general anesthesia and typically takes about 45-90 minutes."
      },
      {
        title: "Post-Anesthesia Care",
        description: "You will be monitored in a recovery unit as you wake up from anesthesia. Pain is managed with medication."
      },
      {
        title: "Discharge & Home Care",
        description: "Most patients are discharged within 24 hours with instructions for wound care, diet, and a gradual return to activity."
      },
      {
        title: "Follow-Up Visit",
        description: "A follow-up appointment is scheduled about a week after surgery to check on your recovery and ensure the incision sites are healing well."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default LaparoscopicCholecystectomyPage;