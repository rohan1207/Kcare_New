import React from 'react';
import { Droplets } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';




const HydroceleSurgeryPage = () => {
  const serviceData = {
    title: "Hydrocele Surgery",
    subtitle: "A simple, effective procedure for lasting relief and comfort.",
    image: "/hydrocele.jpg",
    Icon: Droplets,
    overview: [
      "A hydrocele is a type of swelling in the scrotum that occurs when fluid collects in the thin sheath surrounding a testicle. While often painless, larger hydroceles can cause discomfort, a feeling of heaviness, or embarrassment.",
      "Hydrocele surgery, or hydrocelectomy, is a straightforward and highly effective procedure to remove the fluid collection and the sac that produces it, providing a permanent solution to the problem."
    ],
    benefits: [
      {
        title: "Permanent Solution",
        description: "The surgery removes the hydrocele sac, which prevents the fluid from re-accumulating."
      },
      {
        title: "Relief from Discomfort",
        description: "Eliminates the feeling of heaviness, swelling, and any associated pain or discomfort."
      },
      {
        title: "Quick Outpatient Procedure",
        description: "The surgery is typically performed on an outpatient basis, allowing you to return home the same day."
      },
      {
        title: "Minimal Downtime",
        description: "Recovery is generally quick, with most patients able to resume normal, non-strenuous activities within a few days."
      }
    ],
    technology: {
      description: "The procedure is performed with a focus on minimizing tissue trauma and ensuring patient comfort. A small incision is made in the scrotum or lower abdomen, through which the hydrocele is accessed. The fluid is drained, and the sac is removed or repositioned to prevent recurrence. We use fine sutures that dissolve on their own, ensuring a clean and comfortable healing process with minimal scarring."
    }
  };

  return <ServicePageLayout service={serviceData} />;
};

export default HydroceleSurgeryPage;
