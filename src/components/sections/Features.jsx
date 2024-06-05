import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgCardBackground1 from "../../assets/imgs/features/cardBackground1.webp";
import imgCardBackground2 from "../../assets/imgs/features/cardBackground2.webp";
import imgCardBackground3 from "../../assets/imgs/features/cardBackground3.webp";
import imgCardBackground4 from "../../assets/imgs/features/cardBackground4.webp";
import content from "../../abstractions/content";

export default function Features() {
  return (
    <SectionArea className="bg-quinary desktop1:pb-[0px]">
      <SectionHeader
        className="text-center"
        sectionHeaderTitle={content.texts.actuation.title}
        sectionHeaderSubtitle={content.texts.actuation.subtitle}
      />
      <SectionWrapper>
        <div
          className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]"
          id="service"
        >
          <FeatureImgOnBgCard
            bgImg={imgCardBackground1}
            title={content.texts.actuation.card1Title}
            description={content.texts.actuation.card1Description}
          />
          <FeatureImgOnBgCard
            bgImg={imgCardBackground2}
            title={content.texts.actuation.card2Title}
            description={content.texts.actuation.card2Description}
          />
          <FeatureImgOnBgCard
            bgImg={imgCardBackground3}
            title={content.texts.actuation.card3Title}
            description={content.texts.actuation.card3Description}
          />
          <FeatureImgOnBgCard
            bgImg={imgCardBackground4}
            title={content.texts.actuation.card4Title}
            description={content.texts.actuation.card4Description}
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
