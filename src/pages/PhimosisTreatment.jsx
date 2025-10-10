import React from 'react';
import { Droplets } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';




const PhimosisTreatmentPage = () => {
  const serviceData = {
    title: "Phimosis Treatment",
    subtitle: "Gentle, effective, and function-preserving solutions for phimosis.",
    image: "/Phymosis.png",
    Icon: Droplets,
    overview: [
      "Phimosis is a condition where the foreskin is too tight to be pulled back over the head of the penis. While common in infants, it can persist or develop in adults, leading to pain, difficulty with hygiene, and problems during intercourse.",
      "We offer a range of modern, gentle treatments designed to resolve phimosis while preserving sensation and function. Our approach is tailored to the individual, ensuring the most appropriate and effective care."
    ],
    benefits: [
      {
        title: "Preservation of Sensation",
        description: "Our techniques are designed to correct the tightness without compromising sexual function or sensation."
      },
      {
        title: "Improved Hygiene & Comfort",
        description: "A retractable foreskin allows for proper cleaning, preventing infections and improving daily comfort."
      },
      {
        title: "Painless Intercourse",
        description: "Treatment resolves the pain and tearing associated with phimosis during sexual activity."
      },
      {
        title: "Cosmetically Sensitive",
        description: "Procedures like Z-plasty are designed to provide excellent functional and cosmetic results."
      }
    ],
    technology: {
      description: "Depending on the severity of the condition, we offer several advanced options. For less severe cases, topical steroid creams may be effective. For surgical correction, we specialize in foreskin-preserving plastic surgery techniques like Z-plasty, which releases the tightness without removing the foreskin. Laser-based procedures can also be used to make precise, bloodless incisions. These methods are a significant advancement over traditional circumcision, offering patients more options and better outcomes."
    }
  };

  return <ServicePageLayout service={serviceData} />;
};

export default PhimosisTreatmentPage;
