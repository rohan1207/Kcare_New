import React from 'react';
import { Spline } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';
import ProcedureTimeline from '../components/Timeline';



const FistulaTreatmentPage = () => {
  const serviceData = {
    title: "Fistula Treatment",
    subtitle: "Sphincter-preserving laser surgery for a complex condition.",
    image: "/fistula.jpg",
    Icon: Spline,
    overview: [
      "An anal fistula is an abnormal tunnel that forms between the inside of the anus and the skin outside. It is a complex condition that does not heal on its own and requires surgical treatment. Traditional surgeries can carry a risk of damage to the anal sphincter muscles, which control bowel movements.",
      "We specialize in advanced, sphincter-preserving laser surgery (FiLaC® - Fistula-tract Laser Closure). This minimally invasive technique effectively closes the fistula tract from the inside out, preserving muscle function and ensuring a high success rate with minimal pain."
    ],
    benefits: [
      {
        title: "Sphincter Preservation",
        description: "Our primary goal is to heal the fistula while completely preserving the integrity of the anal sphincter muscles, eliminating the risk of incontinence."
      },
      {
        title: "Minimal Pain & Discomfort",
        description: "The laser procedure is gentle, involving no large cuts, which translates to significantly less postoperative pain."
      },
      {
        title: "Faster Healing & Recovery",
        description: "Patients experience a much quicker recovery and can return to normal life faster than with conventional surgery."
      },
      {
        title: "High Success Rate",
        description: "FiLaC® has demonstrated high success rates for even complex fistulas, offering a reliable and definitive cure."
      }
    ],
    technology: {
      description: "The FiLaC® procedure involves passing a radial laser fiber through the fistula tract. The laser's energy is applied circumferentially to the tract wall, causing the tissue to shrink and close in a controlled manner. This process destroys the fistula epithelium and seals the tract without the need for cutting or stitches, making it an exceptionally safe and effective treatment."
    },
    timeline: [
      {
        title: "Consultation & Advanced Imaging",
        description: "A clinical evaluation is followed by an MRI or fistulogram to precisely map the fistula's path, which is crucial for successful treatment."
      },
      {
        title: "Strategic Treatment Planning",
        description: "We review the imaging to plan the procedure, confirming that a sphincter-preserving laser approach like FiLaC® is the optimal choice."
      },
      {
        title: "Minimally Invasive Laser Procedure",
        description: "The FiLaC® procedure is performed under anesthesia as a day-care case, gently sealing the fistula tract from within."
      },
      {
        title: "Post-Operative Care",
        description: "After a brief recovery period, you are discharged with instructions for local wound care and hygiene to support healing."
      },
      {
        title: "Healing Phase",
        description: "The treated tract heals gradually over several weeks. You will be able to resume most activities with minimal discomfort."
      },
      {
        title: "Follow-Up & Confirmation of Closure",
        description: "Follow-up visits are scheduled to monitor the healing process and confirm that the fistula has closed completely, ensuring a lasting cure."
      }
    ]
  };

  return <ServicePageLayout service={serviceData} />;
};

export default FistulaTreatmentPage;