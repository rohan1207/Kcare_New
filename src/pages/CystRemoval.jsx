import React from 'react';
import { ShieldHalf } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import ProcedureTimeline from '../components/Timeline';



const CystRemovalPage = () => {
  const serviceData = {
    title: "Cyst Removal",
    subtitle: "Simple and effective removal of common skin cysts with minimal scarring.",
    image: "/cyst.jpg",
    Icon: ShieldHalf,
    overview: [
      "Skin cysts, such as sebaceous or epidermoid cysts, are common, non-cancerous lumps that develop under the skin. While usually harmless, they can become inflamed, infected, or cosmetically bothersome.",
      "Surgical excision is the most effective way to remove a cyst completely and prevent it from recurring. We perform this minor procedure with a focus on achieving the best possible cosmetic result, leaving a fine-line scar that often becomes nearly invisible over time."
    ],
    benefits: [
      {
        title: "Complete Removal",
        description: "Surgically removing the entire cyst wall is the best way to ensure it does not grow back."
      },
      {
        title: "Excellent Cosmetic Results",
        description: "Careful surgical technique and fine sutures are used to minimize scarring."
      },
      {
        title: "Prevention of Infection",
        description: "Removing the cyst eliminates the risk of future inflammation, infection, and painful rupture."
      },
      {
        title: "Quick and Painless",
        description: "The procedure is performed quickly under local anesthesia with minimal discomfort."
      }
    ],
    technology: {
      description: "The key to a successful cyst removal is meticulous surgical technique. After numbing the area, a small incision is carefully planned, often along natural skin creases to hide the scar. The cyst is then dissected out intact, ensuring the entire sac is removed. The wound is closed with fine sutures, which are typically removed in about a week. This approach ensures complete removal and provides the best possible long-term cosmetic outcome."
    },
    timeline: [
      {
        title: "Clinical Evaluation",
        description: "We examine the lump to confirm it is a benign cyst and rule out other conditions."
      },
      {
        title: "Procedure Planning",
        description: "We discuss the simple excision procedure, which is scheduled at your convenience as an outpatient."
      },
      {
        title: "Cyst Excision",
        description: "Under local anesthesia, the cyst is completely removed through a small, carefully placed incision."
      },
      {
        title: "Wound Closure",
        description: "The skin is closed with fine sutures to ensure a neat, clean scar and optimal cosmetic result."
      },
      {
        title: "Dressing and Home Care",
        description: "A simple dressing is applied, and you are given instructions on how to care for the wound at home."
      },
      {
        title: "Suture Removal & Follow-Up",
        description: "You'll return in about a week for suture removal and a final check-up to ensure proper healing."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default CystRemovalPage;