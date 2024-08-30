import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import TestimonialsDiv from "../../components/interactives/TestimonialsDiv";

export default function Testimonials() {
  return (
    <div className="relative bg-bgSectionDark">
      <SectionArea className="" paddingbot={false}>
        <SectionHeader
          className="text-center"
          miniTitle={content.texts.testimonials.miniTag}
          sectionHeaderTitle={content.texts.testimonials.title}
          sectionHeaderSubtitle={content.texts.testimonials.subtitle}
          titleColor="text-white"
          subtitleColor="text-white opacity-70"
        />

        <SectionWrapper className="flex justify-center">
          <MotionDivDownToUp className="flex justify-center w-full">
            <div className=" desktop1:w-[80%]">
              <TestimonialsDiv>
                <div className="flex items-center justify-center">
                  <div className="flex justify-center">
                    <img
                      src={content.texts.testimonials.images.img1.img}
                      alt={content.texts.testimonials.images.img1.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img2.img}
                      alt={content.texts.testimonials.images.img2.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img3.img}
                      alt={content.texts.testimonials.images.img3.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img4.img}
                      alt={content.texts.testimonials.images.img4.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img5.img}
                      alt={content.texts.testimonials.images.img5.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img6.img}
                      alt={content.texts.testimonials.images.img6.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img7.img}
                      alt={content.texts.testimonials.images.img7.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img8.img}
                      alt={content.texts.testimonials.images.img8.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img9.img}
                      alt={content.texts.testimonials.images.img9.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img10.img}
                      alt={content.texts.testimonials.images.img10.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img11.img}
                      alt={content.texts.testimonials.images.img11.alt}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div>
                    <img
                      src={content.texts.testimonials.images.img12.img}
                      alt={content.texts.testimonials.images.img12.alt}
                    />
                  </div>
                </div>
              </TestimonialsDiv>
            </div>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
