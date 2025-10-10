import React from 'react';
import { HeartPulse } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import ProcedureTimeline from '../components/Timeline';



const AbscessDrainagePage = () => {
  const serviceData = {
    title: "Abscess Drainage",
    subtitle: "Prompt, effective relief from painful skin and soft tissue infections.",
    image: "/Abscess.jpg",
    Icon: HeartPulse,
    overview: [
      "An abscess is a tender, pus-filled pocket that forms in tissue, usually due to a bacterial infection. It can be painful, swollen, and warm to the touch. Attempting to drain an abscess at home is dangerous and can worsen the infection.",
      "Professional incision and drainage (I&D) is the required medical treatment. This procedure involves safely opening the abscess to allow the pus to drain, which provides immediate pain relief and is the first step toward healing."
    ],
    benefits: [
      {
        title: "Immediate Pain Relief",
        description: "Draining the pus instantly relieves the pressure and pain caused by the abscess."
      },
      {
        title: "Prevents Spread of Infection",
        description: "Proper drainage and cleaning prevent the bacteria from spreading to other parts of the body."
      },
      {
        title: "Promotes Faster Healing",
        description: "Once drained, the body can begin the process of healing the affected tissue effectively."
      },
      {
        title: "Reduces Scarring",
        description: "Professional drainage is done with precision to minimize tissue damage and subsequent scarring."
      }
    ],
    technology: {
      description: "For deeper or more complex abscesses, we use ultrasound guidance to precisely locate the fluid pocket. This ensures that the incision is made in the optimal location for complete drainage, improving the effectiveness of the procedure and minimizing trauma to surrounding healthy tissue. The procedure is performed under local anesthesia in a sterile environment to ensure it is both painless and safe."
    },
    timeline: [
      {
        title: "Initial Consultation & Diagnosis",
        description: "Our medical team will conduct a thorough examination of the affected area to confirm the presence of an abscess and determine the best course of action."
      },
      {
        title: "Pre-Procedure Preparation",
        description: "The area is cleaned with an antiseptic solution, and a local anesthetic is administered to ensure the procedure is completely painless."
      },
      {
        title: "Incision & Drainage (I&D)",
        description: "A small, precise incision is made over the abscess, allowing the pus to drain completely. For deeper abscesses, ultrasound guidance may be used."
      },
      {
        title: "Wound Care & Packing",
        description: "The cavity is irrigated with a sterile solution. In some cases, a sterile packing is placed inside to allow it to continue draining and heal from the inside out."
      },
      {
        title: "Post-Procedure Instructions",
        description: "You will receive detailed instructions on how to care for the wound at home, including dressing changes and signs of complications to watch for."
      },
      {
        title: "Follow-up & Recovery",
        description: "A follow-up appointment is scheduled to monitor healing and remove any packing. Most patients experience rapid improvement and a smooth recovery."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default AbscessDrainagePage;