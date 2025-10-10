import React from 'react';
import { Zap } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import ProcedureTimeline from '../components/Timeline';



const LaserFissureTreatmentPage = () => {
  const serviceData = {
    title: "Laser Fissure Treatment",
    subtitle: "A minimally invasive, highly effective solution for anal fissures.",
    image: "/fissure.jpg",
    Icon: Zap,
    overview: [
      "An anal fissure is a small tear in the lining of the anus, which can cause significant pain and bleeding during bowel movements. While many fissures heal with conservative treatment, chronic fissures often require surgical intervention.",
      "Laser Fissure Treatment, specifically Laser Sphincterotomy, is a state-of-the-art procedure that offers a precise and minimally invasive alternative to traditional surgery. It provides rapid pain relief and promotes quick healing with minimal side effects."
    ],
    benefits: [
      {
        title: "Minimally Invasive",
        description: "No cuts or stitches are required, resulting in less pain and a much faster recovery period."
      },
      {
        title: "High Precision",
        description: "The laser precisely targets the internal sphincter muscle, reducing spasm without damaging surrounding tissue."
      },
      {
        title: "Low Risk of Incontinence",
        description: "Laser surgery offers better control and significantly lowers the risk of incontinence compared to conventional surgery."
      },
      {
        title: "Quick Procedure",
        description: "The treatment is typically completed as a day-care procedure, allowing you to return home the same day."
      }
    ],
    technology: {
      description: "We use a sophisticated diode laser to perform the Lateral Internal Sphincterotomy (LIS). The laser energy is delivered through a fine probe, allowing for a highly controlled and targeted release of the internal anal sphincter. This reduces the hypertonia (excessive muscle tone) that prevents the fissure from healing, all without the need for a scalpel. The result is immediate relief and a faster, more comfortable recovery."
    },
    timeline: [
      {
        title: "Consultation and Diagnosis",
        description: "A gentle physical examination is conducted to confirm the diagnosis of a chronic anal fissure and rule out other conditions."
      },
      {
        title: "Trial of Conservative Management",
        description: "We may first recommend dietary changes, topical creams, and sitz baths. If these fail, laser surgery is considered."
      },
      {
        title: "Pre-Procedure Assessment",
        description: "A brief assessment is done to ensure you are fit for the day-care procedure, which is performed under short anesthesia."
      },
      {
        title: "Laser Sphincterotomy",
        description: "The minimally invasive laser procedure is performed, taking only about 15-20 minutes to complete."
      },
      {
        title: "Immediate Post-Op Care",
        description: "After a short observation period, you are discharged on the same day with instructions for pain management and sitz baths."
      },
      {
        title: "Full Recovery & Follow-Up",
        description: "Most patients return to normal activities within a few days. A follow-up visit ensures complete healing and provides long-term dietary advice."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default LaserFissureTreatmentPage;