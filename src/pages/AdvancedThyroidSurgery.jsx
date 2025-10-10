import React from 'react';
import { ShieldPlus } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import ProcedureTimeline from '../components/Timeline';



const AdvancedThyroidSurgeryPage = () => {
  const serviceData = {
    title: "Advanced Thyroid Surgery",
    subtitle: "Precision and expertise in treating thyroid conditions.",
    image: "/thyroid.jpg",
    Icon: ShieldPlus,
    overview: [
      "The thyroid gland, located in your neck, plays a crucial role in regulating your body's metabolism. Conditions such as thyroid nodules, goiter, or thyroid cancer may require surgical intervention.",
      "Our advanced surgical approach to thyroidectomy (removal of the thyroid) prioritizes safety and precision. We focus on minimizing scarring, preserving vocal cord function, and ensuring the best possible outcomes for our patients."
    ],
    benefits: [
      {
        title: "Nerve Preservation",
        description: "We use intraoperative nerve monitoring to protect the delicate laryngeal nerves, preserving your voice."
      },
      {
        title: "Parathyroid Gland Safety",
        description: "Meticulous surgical technique ensures the preservation of parathyroid glands, which regulate calcium levels."
      },
      {
        title: "Minimally Invasive",
        description: "We utilize the smallest possible incision, often hidden in a natural skin crease, to ensure an excellent cosmetic result."
      },
      {
        title: "Faster Recovery",
        description: "Our precise and efficient surgical methods lead to less postoperative pain and a quicker return to normal activities."
      }
    ],
    technology: {
      description: "Intraoperative Nerve Monitoring (IONM) is a key technology we use to enhance the safety of thyroid surgery. This system provides real-time feedback on nerve function during the procedure, allowing the surgeon to identify and protect the recurrent and external laryngeal nerves, which are critical for voice and swallowing. This significantly reduces the risk of nerve injury."
    },
    timeline: [
        {
            title: "Initial Evaluation & Diagnostics",
            description: "A thorough consultation, physical exam, neck ultrasound, and potentially a fine-needle biopsy to accurately diagnose your condition."
        },
        {
            title: "Surgical Decision & Planning",
            description: "We review your results and discuss the best surgical approach (e.g., lobectomy vs. total thyroidectomy), including the use of nerve monitoring."
        },
        {
            title: "Pre-Operative Preparation",
            description: "You'll receive standard pre-surgical instructions regarding fasting and medication, along with an anesthesia consultation to ensure your safety."
        },
        {
            title: "The Surgical Procedure",
            description: "The thyroidectomy is performed using a minimally invasive technique, with careful preservation of the laryngeal nerves and parathyroid glands."
        },
        {
            title: "Post-Operative Monitoring",
            description: "Close observation in the recovery unit, focusing on monitoring your calcium levels and assessing voice quality."
        },
        {
            title: "Recovery & Follow-Up",
            description: "Discharge with clear instructions on wound care and hormone replacement therapy. Follow-up appointments ensure proper healing and hormonal balance."
        }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default AdvancedThyroidSurgeryPage;