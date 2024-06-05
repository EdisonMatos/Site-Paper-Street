import Faq from "../components/sections/Faq";
import Footer from "../components/sections/Footer";
import Numbers from "../components/sections/Numbers";
import Features from "../components/sections/Features";
import TrustedBy from "../components/sections/TrustedBy";
import Services from "../components/sections/Services";
import CtaWhatsapp from "../components/sections/CtaWhatsapp";
import HeroSection from "../components/sections/HeroSection";
import About from "../components/sections/About";
import NavbarSection from "../components/sections/NavbarSection";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";

export default function Index() {
  return (
    <div>
      <NavbarSection />
      <HeroSection />
      <TrustedBy />
      <Numbers />
      <About />
      <Features />
      <Services />
      <CtaWhatsapp />
      <Faq />
      <Footer />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
