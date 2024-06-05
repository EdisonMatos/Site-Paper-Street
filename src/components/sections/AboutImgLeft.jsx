import React, { useState } from "react";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgAboutPerson from "../../assets/imgs/about/aboutPerson.webp";
import ButtonWithIcon from "../interactives/ButtonWithIcon";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../abstractions/content";

export default function AboutImgLeft() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  // const onClick = () => {
  //   setModalTitle("Sobre mim");
  //   setModalContent(
  //     <p>
  //       Creci: 11798/PE<br></br> Ensino Superior: Administração - Facape
  //       <br></br>
  //       <br></br> Olá, me chamo Rita Almeida, sou corretora de imóveis há mais
  //       de 10 anos e sou formada em Administração há 30. Decidi entrar no ramo
  //       quando um colega me fez um elogio: "Rita, você é tão comunicativa,
  //       deveria ser corretora de imóveis." Eu ainda fiquei receosa: "Ah, isso
  //       não é para mim," mas decidi arriscar. Fiz o curso quando minha filha
  //       ainda era pequena e não me arrependo da decisão que tomei.<br></br>
  //       <br></br> Com a minha formação em Administração, percebi rapidamente que
  //       muitas das habilidades adquiridas durante o curso eram essenciais no
  //       mercado imobiliário. A capacidade de negociar, organizar finanças e
  //       entender os fundamentos econômicos são apenas algumas das competências
  //       que me ajudaram a destacar-me na profissão.<br></br>
  //       <br></br> Nos primeiros anos, equilibrar a vida pessoal com a
  //       profissional foi um desafio, especialmente sendo mãe de uma criança
  //       pequena. Contudo, sempre busquei manter um alto padrão de ética e
  //       dedicação, o que me permitiu construir uma reputação sólida e uma base
  //       de clientes fiéis.<br></br>
  //       <br></br> Ao longo dos anos, vi muitas mudanças no setor imobiliário. A
  //       tecnologia transformou a maneira como interagimos com clientes e como os
  //       imóveis são apresentados e comercializados. Adaptar-me a essas mudanças
  //       foi essencial, e sempre procurei estar atualizada, seja através de
  //       cursos de formação continuada ou participando de seminários e workshops.
  //       <br></br>
  //       <br></br> Hoje, posso dizer que minha carreira é uma grande paixão. Cada
  //       dia traz um novo desafio e a oportunidade de ajudar alguém a encontrar o
  //       lugar ideal para chamar de lar. Continuo empregando as habilidades de
  //       administração no meu dia a dia, gerenciando não apenas propriedades, mas
  //       também sonhos e expectativas.
  //     </p>
  //   );
  //   setVisible(true);
  // };

  return (
    <SectionArea className="">
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop1:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="w-[100%] desktop1:w-[415px] desktop2:w-[485px]">
          <img src={imgAboutPerson} alt="Foto de pessoa" className="w-full" />
        </MotionDivDownToUp>

        <div className="desktop1:w-[450px] desktop2:w-[570px]" id="about">
          <MotionDivDownToUp>
            <SectionTitles className="mb-[18px] desktop1:mb-[26px]">
              {content.texts.about.title}
            </SectionTitles>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <Paragraphs className="">
              {content.texts.about.paragraph}
            </Paragraphs>
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            {/* <ButtonWithIcon
              label="Leia mais"
              onClick={onClick}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              }
            /> */}
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
        <p className="m-0 ">{modalContent}</p>
      </Dialog>
    </SectionArea>
  );
}
