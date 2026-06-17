import Hero from "@/components/Hero";
import { Brands } from "@/components/Brands";
import About from "@/components/About";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import { WhyChooseUs, Testimonials, MapSection } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <About />
      <Services />
      <Fleet />
      <WhyChooseUs />
      <Testimonials />
      <MapSection />
    </>
  );
}
