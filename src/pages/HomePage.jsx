import Hero from "../components/Hero";

import MainFounder from "../components/MainFounder";
// import Testimonials from "../components/Testimonials";
// import FAQ from "../components/FAQ";
import New_Services from "../components/New_Services";
import AboutSection from "../components/AboutSection";
import ModernDentistrySection from "../components/ModernDentistrySection";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MainFounder />
      <Services/>
      <New_Services />
      <AboutSection />
      <ModernDentistrySection />
     
      
      <Testimonials />
    </>
  );
}
