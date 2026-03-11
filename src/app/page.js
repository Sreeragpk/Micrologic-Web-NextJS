import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AnimatedCards from "@/components/Animate";
import ConceptToCustomer from "@/components/conceptToCustomer";
import IndustriesSection from "@/components/IndustriesSection";
import AutoExperience from "@/components/AutomotiveExperience";
import EvolutionExcellence from "@/components/EvolutionExcellence";
import AutoPlayYouTube from "@/components/AutoPlayYouTube";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Micrologic Integrated Systems | Automated Assembly & Test Solutions",
  description:
    "Micrologic Integrated Systems delivers turnkey automated assembly, testing and traceability solutions.",
};

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
    </main>
  );
}