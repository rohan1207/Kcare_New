import React from 'react';
import { Ribbon } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import ProcedureTimeline from '../components/Timeline';



const BreastSurgeryPage = () => {
  const serviceData = {
    title: "Breast Surgery",
    subtitle: "Compassionate, expert care for benign and malignant breast conditions.",
    image: "/breast.jpg",
    Icon: Ribbon,
    overview: [
      "A breast condition diagnosis can be an overwhelming experience. At K-Care, we provide comprehensive surgical care for a range of breast issues, from benign lumps to breast cancer. Our approach is rooted in providing not only the most effective medical treatment but also compassionate support throughout your journey.",
      "We specialize in procedures such as lumpectomy (breast-conserving surgery) and mastectomy, always with a dual focus: complete removal of diseased tissue and achieving the best possible cosmetic outcome."
    ],
    benefits: [
      {
        title: "Breast Conservation",
        description: "Whenever possible, we prioritize lumpectomy and other breast-conserving techniques to preserve your natural breast tissue."
      },
      {
        title: "Aesthetic Focus",
        description: "Using oncoplastic techniques, we reshape the breast during surgery to maintain a natural look and symmetry."
      },
      {
        title: "Minimally Invasive Options",
        description: "We utilize sentinel node biopsy and other minimally invasive methods to reduce side effects and speed up recovery."
      },
      {
        title: "Holistic Care",
        description: "Our care extends beyond surgery, with a focus on your emotional well-being and long-term health."
      }
    ],
    technology: {
      description: "Oncoplastic surgery is a sophisticated approach that combines the principles of cancer surgery with plastic surgery. By strategically placing incisions and remodeling breast tissue, we can effectively treat the cancer while minimizing visible scarring and deformity. This technique is central to our philosophy of treating the whole person, not just the disease."
    },
    timeline: [
        {
            title: "Consultation & Triple Assessment",
            description: "Your journey begins with a clinical examination, imaging (mammogram/ultrasound), and biopsy to ensure an accurate diagnosis."
        },
        {
            title: "Multidisciplinary Team Review",
            description: "Our team of surgeons, oncologists, and radiologists collaborates to create a personalized treatment plan tailored to your specific condition."
        },
        {
            title: "Surgical Planning & Counseling",
            description: "We discuss all surgical options with you, including breast conservation and oncoplastic techniques, ensuring you are fully informed and comfortable."
        },
        {
            title: "The Surgical Procedure",
            description: "The surgery is performed with a focus on both complete cancer removal and optimal aesthetic results, often using minimally invasive approaches."
        },
        {
            title: "Post-Operative Recovery & Care",
            description: "You will receive dedicated care in our recovery unit, with a focus on pain management and comfort. We provide detailed post-op instructions."
        },
        {
            title: "Adjuvant Therapy & Survivorship",
            description: "We coordinate any necessary follow-up treatments (like radiation or chemotherapy) and provide a long-term survivorship plan for ongoing health."
        }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default BreastSurgeryPage;