import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import ServicesModal from "./ServicesModal";
import FeatureCard from "../cards/FeatureCard";
import services from "../../content/services";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";

export default function Services() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleButtonClick = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setVisible(true);
  };

  return (
    <SectionArea className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle="Nossos Seguros"
        sectionHeaderSubtitle="Descubra nossas especialidades em proteção e assistência"
      />
      <SectionWrapper>
        <div className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px] desktop1:flex-row">
          <FeatureCard
            img={services.main.card1.img}
            title="Seguro Automóvel"
            description="Proteção completa para seu veículo, com assistência 24 horas e serviços personalizados."
          />
          <FeatureCard
            img={services.main.card2.img}
            title="Seguro Residencial e Condomínios"
            description="Coberturas abrangentes para sua casa ou apartamento, incluindo danos estruturais e responsabilidade civil."
          />
          <FeatureCard
            img={services.main.card3.img}
            title="Seguro de Vida e Acidentes"
            description="Segurança financeira para sua família em casos de imprevistos, com coberturas adaptadas às suas necessidades."
          />
          <FeatureCard
            img={services.main.card4.img}
            title="Seguro Empresarial"
            description="Segurança financeira para sua família em casos de imprevistos, com coberturas adaptadas às suas necessidades."
          />
          <FeatureCard
            img={services.main.card5.img}
            title="Planos de Saúde"
            description="Segurança financeira para sua família em casos de imprevistos, com coberturas adaptadas às suas necessidades."
          />
          <MotionDivDownToUp className="bg-white p-[36px] rounded-2xl desktop1:w-[30%] flex flex-col tablet1:flex-row gap-[36px] desktop1:flex-col w-full h-full">
            <img
              src={services.main.card6.img}
              alt=""
              className=" tablet1:w-[50%] desktop1:w-full rounded-2xl"
            />
            <div className="">
              <h1 className=" font-mainFont font-semibold text-[32px] tablet1:text-title3 desktop2:text-[32px] leading-[36px] mb-[16px]">
                <MotionDivDownToUp>Demais seguros</MotionDivDownToUp>
              </h1>
              <p className=" font-secondFont text-paragraph4 mb-[36px] text-quaternary">
                <MotionDivDownToUp>
                  Confira todos os nosso seguros clicando abaixo.
                </MotionDivDownToUp>
              </p>
              <MotionDivDownToUp>
                <ServicesModal />
              </MotionDivDownToUp>
            </div>
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
      <Dialog
        className=" font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        <p className="m-0">{modalContent}</p>
      </Dialog>
    </SectionArea>
  );
}
