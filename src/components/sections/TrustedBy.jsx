import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import LogoDisplay from "../sectionElements/LogoDisplay";
import content from "../../content/content";

const images = [
  {
    src: content.texts.trustedBy.images.img1.img.trustedByImg1,
    alt: content.texts.trustedBy.images.img1.alt,
  },
  {
    src: content.texts.trustedBy.images.img2.img.trustedByImg2,
    alt: content.texts.trustedBy.images.img2.alt,
  },
  {
    src: content.texts.trustedBy.images.img3.img.trustedByImg3,
    alt: content.texts.trustedBy.images.img3.alt,
  },
  {
    src: content.texts.trustedBy.images.img4.img.trustedByImg4,
    alt: content.texts.trustedBy.images.img4.alt,
  },
  {
    src: content.texts.trustedBy.images.img5.img.trustedByImg5,
    alt: content.texts.trustedBy.images.img5.alt,
  },
  {
    src: content.texts.trustedBy.images.img6.img.trustedByImg6,
    alt: content.texts.trustedBy.images.img6.alt,
  },
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
