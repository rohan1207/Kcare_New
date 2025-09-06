import Hero from "../components/Hero";

import Founder from "../components/Founder";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Services from "../components/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />

      <Founder />
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="faq">
        <FAQ />
      </section>
    </>
  );
}
