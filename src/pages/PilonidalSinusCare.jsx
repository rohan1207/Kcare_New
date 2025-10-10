import React from 'react';
import { Bandage } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import ProcedureTimeline from '../components/Timeline';

const PilonidalSinusCarePage = () => {
  const serviceData = {
    title: "Pilonidal Sinus Care",
    subtitle: "Advanced laser treatment for a faster, less painful recovery.",
    image: "/pilonidal_sinus.jpg",
    Icon: Bandage,
    overview: [
      "A pilonidal sinus is a small tunnel or tract in the skin at the top of the buttocks, which can become infected and form a painful abscess. Traditionally, treatment involved extensive surgery with a long and often difficult recovery period.",
      "We offer a modern, minimally invasive alternative using laser technology. This approach effectively treats the sinus tract without the need for large incisions, leading to significantly less pain, faster healing, and a lower risk of recurrence."
    ],
    benefits: [
      {
        title: "No Stitches or Large Wounds",
        description: "The laser closes the sinus tract from within, eliminating the need for surgical excision and stitches."
      },
      {
        title: "Faster Return to Work",
        description: "Recovery is remarkably fast, with most patients able to resume normal activities, including sitting, much sooner."
      },
      {
        title: "Minimal Pain",
        description: "Compared to traditional surgery, laser treatment is associated with significantly less post-operative pain."
      },
      {
        title: "Low Recurrence Rate",
        description: "The laser effectively destroys the sinus lining, which helps to prevent the condition from coming back."
      }
    ],
    technology: {
      description: "Our preferred method is Pilonidal Sinus Laser-Assisted Closure (PiLaC). This technique involves inserting a radial laser fiber into the sinus opening. The laser's energy is applied to the tract, causing it to collapse and seal shut. This is a quick, outpatient procedure that has revolutionized the treatment of pilonidal disease by making it a much less daunting experience for the patient."
    },
    timeline: [
      {
        title: "Diagnosis and Evaluation",
        description: "A clinical examination confirms the presence of a pilonidal sinus and assesses for any active infection or abscess."
      },
      {
        title: "Incision and Drainage (if needed)",
        description: "If an abscess is present, it is first drained under local anesthesia to resolve the acute infection."
      },
      {
        title: "Laser Treatment Planning",
        description: "Once any infection is clear, the PiLaC procedure is scheduled as a definitive, minimally invasive treatment."
      },
      {
        title: "PiLaC Procedure",
        description: "The quick, outpatient laser procedure is performed to clean the sinus tract and seal it closed from the inside."
      },
      {
        title: "Post-Procedure Care",
        description: "You'll be discharged with simple instructions for keeping the small wound clean. No complex packing is required."
      },
      {
        title: "Speedy Recovery",
        description: "You can expect minimal pain and a rapid return to daily activities, including sitting comfortably, within a few days."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default PilonidalSinusCarePage;