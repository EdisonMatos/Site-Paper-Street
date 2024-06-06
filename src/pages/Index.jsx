import Faq from "../components/sections/Faq";
import About from "../components/sections/About";
import Footer from "../components/sections/Footer";
import Features from "../components/sections/Features";
import TrustedBy from "../components/sections/TrustedBy";
import AboutSocial from "../components/sections/AboutSocial";
import CtaWhatsapp from "../components/sections/CtaWhatsapp";
import HeroSection from "../components/sections/HeroSection";
import NavbarSection from "../components/sections/NavbarSection";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";

export default function Index() {
  return (
    <div>
      <NavbarSection />
      <HeroSection />
      <Features />
      <About />
      <AboutSocial />
      <CtaWhatsapp />
      <TrustedBy />
      <Faq />
      <Footer />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
