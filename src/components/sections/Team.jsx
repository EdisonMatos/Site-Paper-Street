import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import AccordionExpandDefault from "../interactives/AcordionTwo";
import links from "../../content/links";
import content from "../../content/content";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

export default function Team() {
  return (
    <SectionArea className="pt-[0px]">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle={content.texts.team.title}
        sectionHeaderSubtitle={content.texts.team.subtitle}
      />

      <SectionWrapper className="flex justify-center">
        <MotionDivDownToUp>
          <Paragraphs>Texto</Paragraphs>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
