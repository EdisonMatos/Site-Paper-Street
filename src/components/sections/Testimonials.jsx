import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import TestimonialsDiv from "../interactives/TestimonialsDiv";

export default function Testimonials() {
  return (
    <div className="relative bg-bgSectionDark">
      <SectionArea className="" id="feedback" paddingTopAndBottom={false}>
        <SectionWrapper className="">
          <MotionDivDownToUp className="flex justify-center w-[100%]">
            <div className=" w-full">
              <TestimonialsDiv>
                <div className="flex items-center justify-center">
                  <div className="flex justify-center">
                    <img
                      src={content.texts.testimonialsHero.images.img1.img}
                      alt={content.texts.testimonialsHero.images.img1.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonialsHero.images.img2.img}
                      alt={content.texts.testimonialsHero.images.img2.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonialsHero.images.img3.img}
                      alt={content.texts.testimonialsHero.images.img3.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonialsHero.images.img4.img}
                      alt={content.texts.testimonialsHero.images.img4.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonialsHero.images.img5.img}
                      alt={content.texts.testimonialsHero.images.img5.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonialsHero.images.img6.img}
                      alt={content.texts.testimonialsHero.images.img6.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonialsHero.images.img7.img}
                      alt={content.texts.testimonialsHero.images.img7.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonialsHero.images.img8.img}
                      alt={content.texts.testimonialsHero.images.img8.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonialsHero.images.img9.img}
                      alt={content.texts.testimonialsHero.images.img9.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonialsHero.images.img10.img}
                      alt={content.texts.testimonialsHero.images.img10.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonialsHero.images.img11.img}
                      alt={content.texts.testimonialsHero.images.img11.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonialsHero.images.img12.img}
                      alt={content.texts.testimonialsHero.images.img12.alt}
                    />
                  </div>
                </div>
              </TestimonialsDiv>
            </div>
          </MotionDivDownToUp>
          <MotionDivDownToUp></MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
