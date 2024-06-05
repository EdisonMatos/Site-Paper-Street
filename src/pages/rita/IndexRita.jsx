import Faq from "../../components/sections/Faq";
import Footer from "../../components/sections/Footer";
import Numbers from "../../components/sections/Numbers";
import Features from "../../components/sections/Features";
import TrustedBy from "../../components/sections/TrustedBy";
import Featuresv2 from "../../components/sections/Featuresv2";
import CtaWhatsapp from "../../components/sections/CtaWhatsapp";
import HeroSection from "../../components/sections/HeroSection";
import AboutImgLeft from "../../components/sections/AboutImgLeft";
import NavbarSection from "../../components/sections/NavbarSection";
import BackToTopButton from "../../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../../components/interactives/FloatingWhatsappButton";

export default function IndexRita() {
  return (
    <div>
      <NavbarSection />
      <HeroSection />
      <TrustedBy />
      <Numbers />
      <AboutImgLeft />
      <Features />
      <Featuresv2 />
      <CtaWhatsapp />
      <Faq />
      <Footer />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
