import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import content from "../../content/content";
import SectionHeader from "../sectionElements/SectionHeader";
import ImagesGallery3Slides from "../interactives/ImagesGallery3Slides";
import slide1 from "../../assets/imgs/pagesSpeed/slide1.png";
import slide2 from "../../assets/imgs/pagesSpeed/slide2.png";
import slide3 from "../../assets/imgs/pagesSpeed/slide3.png";
import slide4 from "../../assets/imgs/pagesSpeed/slide4.png";
import slide5 from "../../assets/imgs/pagesSpeed/slide5.png";
// import slide6 from "../../assets/imgs/pagesSpeed/slide6.jpg";
// import slide7 from "../../assets/imgs/pagesSpeed/slide7.jpg";

export default function PagesSpeed() {
  return (
    <SectionArea id="about" className="bg-bgSectionDark" paddingbot={false}>
      <SectionWrapper className="flex flex-col-reverse desktop1:flex-row-reverse gap-[40px] desktop1:gap-x-[40px] desktop2:gap-0 desktop1:justify-between">
        <MotionDivDownToUp className="w-[100%] desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
          <ImagesGallery3Slides
            slide1={slide1}
            slide2={slide2}
            slide3={slide3}
            slide4={slide4}
            slide5={slide5}
            // slide6={slide6}
            // slide7={slide7}
          />
        </MotionDivDownToUp>

        <div className="w-full desktop1:w-[550px] desktop2:w-[570px] ">
          <SectionHeader
            className="flex justify-center text-center desktop1:text-left"
            miniTitle={content.texts.pagesSpeed.miniTag}
            sectionHeaderTitle={content.texts.pagesSpeed.title}
            sectionHeaderSubtitle={content.texts.pagesSpeed.subtitle}
            color=""
            type="article"
          />
          <MotionDivDownToUp>
            <Paragraphs className="text-black text-opacity-80">
              {content.texts.pagesSpeed.paragraph}
            </Paragraphs>
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
