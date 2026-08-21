import FloatingVideo from "@/components/FloatingVideo";

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AnimatedCards from "@/components/Animate";
import ConceptToCustomer from "@/components/conceptToCustomer";
import IndustriesSection from "@/components/IndustriesSection";
import AutoExperience from "@/components/AutomotiveExperience";
import EvolutionExcellence from "@/components/EvolutionExcellence";
import AutoPlayYouTube from "@/components/AutoPlayYouTube";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <AnimatedCards />
      <ConceptToCustomer />
      <IndustriesSection />
      <AutoExperience />
      <EvolutionExcellence />
      <AutoPlayYouTube />
      <ContactForm />
       <FloatingVideo />
    </main>
  );
}