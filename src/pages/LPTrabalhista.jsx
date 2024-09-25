import LPFloatingWhatsappButton from "../components/interactives/LPFloatingWhatsappButton";
import AboutParalaxeLP from "../components/sections/ladingPage/AboutParalaxeLP";
import ContactLP from "../components/sections/ladingPage/ContactLP";
import CtaLP from "../components/sections/ladingPage/CtaLP";
import FeaturesLP from "../components/sections/ladingPage/FeaturesLP";
import FooterLP from "../components/sections/ladingPage/FooterLP";
import HeroLP from "../components/sections/ladingPage/HeroLP";
import WhyUs from "../components/sections/ladingPage/WhyUs";
import { Helmet } from "react-helmet";

export default function LPTrabalhista() {
  return (
    <div>
      <Helmet>
        <title>Dr. Juliano Aleixo - Especialista em Direito Trabalhista</title>
        <meta
          name="description"
          content="Dr. Juliano Aleixo é um especialista em direito trabalhista, oferecendo consultoria e assessoria para questões relacionadas a direitos dos trabalhadores, contratos de trabalho, e litígios trabalhistas."
        />
        <meta
          name="keywords"
          content="Direito Trabalhista,
          Consultoria Trabalhista,
          Assessoria Jurídica Trabalhista,
          Advogado Trabalhista Juliano Aleixo,
          Direitos dos Trabalhadores,
          Litígios Trabalhistas,
          Contratos de Trabalho,
          Defesa dos Direitos Trabalhistas"
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
