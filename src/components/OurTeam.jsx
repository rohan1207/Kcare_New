import React from "react";
import { motion } from "framer-motion";

const doctors = [
  {
    name: "Dr. Alex Richardson",
    qualifications: "MD, FRCS",
    specialization: "Robotic & Laparoscopic Surgeon",
    image: "/team/doc1.jpg",
  },
  {
    name: "Dr. Samantha Chen",
    qualifications: "MBBS, MS",
    specialization: "Minimally Invasive & Robotic Surgery",
    image: "/team/doc2.jpg",
  },
  {
    name: "Dr. Ben Carter",
    qualifications: "MD, FACS",
    specialization: "Advanced Laparoscopic & Robotic Surgery",
    image: "/team/doc3.jpg",
  },
  {
    name: "Dr. Olivia Rodriguez",
    qualifications: "MBBS, DNB",
    specialization: "Consultant, Robotic Surgery",
    image: "/team/doc4.jpg",
  },
  {
    name: "Dr. Marcus Thorne",
    qualifications: "MD",
    specialization: "Laparoscopic & Bariatric Surgeon",
    image: "/team/doc5.jpg",
  },
  {
    name: "Dr. Evelyn Reed",
    qualifications: "MBBS, FRCS",
    specialization: "Robotic Urological Surgeon",
    image: "/team/doc6.jpg",
  },
  {
    name: "Dr. Julian Alvarez",
    qualifications: "MD, PhD",
    specialization: "Head of Robotic Surgical Oncology",
    image: "/team/doc7.jpg",
  },
  {
    name: "Dr. Isabella Grant",
    qualifications: "MBBS, MS",
    specialization: "Laparoscopic Gynecological Surgeon",
    image: "/team/doc8.jpg",
  },
];

const OurTeam = () => {
  return (
    <div className="bg-stone-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-4 font-display">
            Meet Our Consulting Doctors
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Our team of highly skilled surgeons are pioneers in the field of
            robotic and laparoscopic surgery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="h-64 bg-stone-200">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-stone-800 mb-1 font-display">
                  {doctor.name}
                </h3>
                <p className="text-sm text-teal-600 font-medium mb-2 h-10">
                  {doctor.specialization}
                </p>
                <p className="text-stone-600 text-sm">
                  {doctor.qualifications}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
