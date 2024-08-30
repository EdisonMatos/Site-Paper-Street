import Faq from "../components/sections/Faq";
import Team from "../components/sections/Team";
import About from "../components/sections/About";
import Footer from "../components/sections/Footer";
import Features from "../components/sections/Features";
import CtaWhatsapp from "../components/sections/CtaWhatsapp";
import HeroSection from "../components/sections/HeroSection";
import NavbarSection from "../components/sections/NavbarSection";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import HeroImgBackground from "../components/sections/HeroImgBackground";
import Testimonials from "../components/sections/Deposition";


export default function Index() {
  return (
    <div>
      <NavbarSection />
      <HeroImgBackground />
      <Features />
      <About />
      <Testimonials />
      <Team />
      <CtaWhatsapp />
      <HowItWorksImage />
      <Faq />
      <Footer />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
