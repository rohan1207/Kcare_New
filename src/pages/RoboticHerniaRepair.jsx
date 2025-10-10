import React from 'react';
import { Shield } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

const RoboticHerniaRepairPage = () => {
  const serviceData = {
    title: "Robotic Hernia Repair",
    subtitle: "The most advanced and durable solution for complex hernias.",
    image: "/hernia.webp",
    Icon: Shield,
    overview: [
      "A hernia occurs when an organ pushes through a weak spot in the surrounding muscle or connective tissue. While some hernias are simple, others can be large, complex, or recurrent, requiring a more advanced surgical approach.",
      "Robotic hernia repair represents the pinnacle of minimally invasive surgery. Using the da Vinci system, we can perform highly complex repairs with unmatched precision, leading to a stronger, more durable result and a smoother recovery for the patient."
    ],
    benefits: [
      {
        title: "Unmatched Precision",
        description: "The robotic platform provides 3D visualization and wristed instruments, allowing for intricate suturing and mesh placement."
      },
      {
        title: "Reduced Recurrence Rate",
        description: "The strength and precision of the robotic repair can lead to a lower chance of the hernia returning."
      },
      {
        title: "Minimal Pain & Scarring",
        description: "Like laparoscopy, the procedure is performed through tiny incisions, resulting in less pain and better cosmetic outcomes."
      },
      {
        title: "Faster Return to Activity",
        description: "Patients can often return to non-strenuous activities faster than with traditional open surgery."
      }
    ],
    technology: {
      title: "Advanced Technology",
      description: "The da Vinci Surgical System is the cornerstone of our robotic hernia repair. I control the robotic arms from a console, translating my movements into extremely precise actions inside the body. This technology allows us to dissect tissues and place surgical mesh with a level of accuracy that is beyond the capability of the human hand alone, which is especially beneficial for complex abdominal wall reconstructions."
    },
    timeline: {
      title: "Procedure Timeline",
      steps: [
        {
          title: "Comprehensive Evaluation",
          description: "Your journey starts with a physical exam and often imaging (like a CT scan) to understand the size and complexity of the hernia."
        },
        {
          title: "Surgical Planning",
          description: "We determine the best approach for your specific hernia, planning the robotic procedure for optimal mesh placement and reinforcement."
        },
        {
          title: "Pre-Operative Anesthesia Check",
          description: "You will have a consultation with our anesthesia team to ensure you are fully prepared and safe for surgery."
        },
        {
          title: "Robotic-Assisted Surgery",
          description: "The hernia is repaired using the da Vinci system through small incisions, allowing for a meticulous and durable reconstruction of the abdominal wall."
        },
        {
          title: "Post-Operative Recovery",
          description: "You'll be monitored in our recovery unit. Most patients are discharged within 1-2 days, depending on the complexity of the repair."
        },
        {
          title: "Guided Return to Activity",
          description: "We provide a structured plan for your recovery, including when to resume walking, work, and exercise to ensure a strong, lasting repair."
        }
      ]
    }
  };

  return <ServicePageLayout service={serviceData} />;
};

export default RoboticHerniaRepairPage;