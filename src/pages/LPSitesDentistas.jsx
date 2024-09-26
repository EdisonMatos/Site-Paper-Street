import LPFloatingWhatsappButton from "../components/interactives/LPFloatingWhatsappButton";
import AboutParalaxeLP from "../components/sections/ladingPageDentistas/AboutParalaxeLP";
import ContactLP from "../components/sections/ladingPageDentistas/ContactLP";
import CtaLP from "../components/sections/ladingPageDentistas/CtaLP";
import FeaturesLP from "../components/sections/ladingPageDentistas/FeaturesLP";
import FooterLP from "../components/sections/ladingPageDentistas/FooterLP";
import HeroLP from "../components/sections/ladingPageDentistas/HeroLP";
import WhyUs from "../components/sections/ladingPageDentistas/WhyUs";
import { Helmet } from "react-helmet";

export default function LPSitesDentistas() {
  return (
    <div>
      <Helmet>
        <title>
          Sites para Dentistas - Use a internet para captar clientes!
        </title>
        <meta
          name="description"
          content="A melhor forma de captar cliente é através da internet. Tenha um site que te proporcione isso."
        />
        <meta
          name="keywords"
          content="sites, criação de sites, sites para dentistas, sites para marketing digital, landing pages, landing pages de vendas, landing pages de alta conversão"
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
