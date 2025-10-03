import Hero from "../components/Hero";

import Founder from "../components/Founder";
// import Testimonials from "../components/Testimonials";
// import FAQ from "../components/FAQ";
import Services from "../components/Services";
import AboutSection from "../components/AboutSection";
import ModernDentistrySection from "../components/ModernDentistrySection";
import Testimonials from "../components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ModernDentistrySection />
      <Services />
      <Founder />
      <Testimonials />
    </>
  );
}
