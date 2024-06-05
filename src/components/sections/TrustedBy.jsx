import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import imagem1 from "../../assets/imgs/trustedBy/item1.webp";
import imagem2 from "../../assets/imgs/trustedBy/item2.webp";
import imagem3 from "../../assets/imgs/trustedBy/item3.webp";
import imagem4 from "../../assets/imgs/trustedBy/item4.webp";
import imagem5 from "../../assets/imgs/trustedBy/item5.webp";
import imagem6 from "../../assets/imgs/trustedBy/item6.webp";
import LogoDisplay from "../sectionElements/LogoDisplay";
import content from "../../abstractions/content";

const images = [
  { src: imagem1, alt: "" },
  { src: imagem2, alt: "" },
  { src: imagem3, alt: "" },
  { src: imagem4, alt: "" },
  { src: imagem5, alt: "" },
  { src: imagem6, alt: "" },
];

export default function TrustedBy() {
  return (
    <SectionArea className="bg-quinary">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle={content.texts.trustedBy.title}
        sectionHeaderSubtitle={content.texts.trustedBy.subtitle}
      />
      <SectionWrapper>
        <MotionDivDownToUp className="w-full">
          <LogoDisplay images={images} />
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
