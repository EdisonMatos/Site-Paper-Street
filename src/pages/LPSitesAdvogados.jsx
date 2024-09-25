import LPFloatingWhatsappButton from "../components/interactives/LPFloatingWhatsappButton";
import AboutParalaxeLP from "../components/sections/ladingPage/AboutParalaxeLP";
import ContactLP from "../components/sections/ladingPage/ContactLP";
import CtaLP from "../components/sections/ladingPage/CtaLP";
import FeaturesLP from "../components/sections/ladingPage/FeaturesLP";
import FooterLP from "../components/sections/ladingPage/FooterLP";
import HeroLP from "../components/sections/ladingPage/HeroLP";
import WhyUs from "../components/sections/ladingPage/WhyUs";
import { Helmet } from "react-helmet";

export default function LPSitesAdvogados() {
  return (
    <div>
      <Helmet>
        <title>
          Sites para advogados - Use a internet para captar clientes
        </title>
        <meta
          name="description"
          content="A melhor forma de captar cliente é através da internet. Tenha um site que te proporcione isso."
        />
        <meta
          name="keywords"
          content="sites, criação de sites, sites para advogados, sites para marketing digital, landing pages, landing pages de vendas, landing pages de alta conversão"
        />
      </Helmet>
      <HeroLP />
      <FeaturesLP />
      <AboutParalaxeLP />
      <WhyUs />
      <CtaLP />
      <ContactLP />
      <FooterLP />
      <LPFloatingWhatsappButton />
      {/* <BackToTopButton /> */}
    </div>
  );
}
