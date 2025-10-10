import React from 'react';
import { HeartCrack } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import ProcedureTimeline from '../components/Timeline';

const RectalProlapseSurgeryPage = () => {
  const serviceData = {
    title: "Rectal Prolapse Surgery",
    subtitle: "Restoring normal anatomy and function with advanced surgical techniques.",
    image: "/rectal_prolapse.jpg",
    Icon: HeartCrack,
    overview: [
      "Rectal prolapse is a condition where the rectum, the last part of the large intestine, loses its normal attachments inside the body and protrudes out of the anus. This can cause significant discomfort, fecal incontinence, and a major disruption to quality of life.",
      "Surgical correction is the only definitive treatment for rectal prolapse. We specialize in modern, minimally invasive abdominal procedures that offer the most durable and effective repair, restoring both normal anatomy and function."
    ],
    benefits: [
      {
        title: "Restores Normal Function",
        description: "The primary goal is to correct the prolapse and improve or resolve issues like fecal incontinence."
      },
      {
        title: "Durable, Long-Lasting Repair",
        description: "Abdominal repair procedures have a lower rate of recurrence compared to older perineal approaches."
      },
      {
        title: "Minimally Invasive Approach",
        description: "Using robotic or laparoscopic techniques means less pain, a shorter hospital stay, and faster recovery."
      },
      {
        title: "Improved Quality of Life",
        description: "A successful repair allows you to regain confidence and return to a normal, active lifestyle."
      }
    ],
    technology: {
      description: "Our preferred technique is the Robotic-Assisted Ventral Mesh Rectopexy. Using the da Vinci surgical system, we lift the rectum and secure it back into its correct anatomical position using a piece of surgical mesh. The robotic platform's precision and 3D visualization are critical for performing this delicate procedure safely and effectively through small incisions, ensuring an excellent and lasting outcome."
    },
    timeline: [
      {
        title: "Diagnostic Evaluation",
        description: "A thorough clinical exam, often supplemented by tests like defecography, is done to assess the severity of the prolapse and pelvic floor function."
      },
      {
        title: "Tailored Surgical Planning",
        description: "We determine the most appropriate surgical approach (e.g., robotic rectopexy) based on your health and the specifics of the prolapse."
      },
      {
        title: "Pre-Operative Optimization",
        description: "Bowel preparation and a pre-anesthesia check-up are completed to ensure you are ready for surgery."
      },
      {
        title: "Minimally Invasive Surgery",
        description: "The prolapse is repaired through small abdominal incisions using robotic or laparoscopic techniques to restore the rectum's natural position."
      },
      {
        title: "Post-Surgical Recovery",
        description: "You will be monitored in the hospital for a few days, with a focus on pain management and a gradual return to a normal diet."
      },
      {
        title: "Rehabilitation and Follow-Up",
        description: "We provide guidance on pelvic floor exercises and dietary management to support a full recovery and prevent recurrence."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default RectalProlapseSurgeryPage;