import links from "../../content/links";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import content from "../../content/content";
import bgHeroImg from "../../assets/imgs/hero/bgHero.webp";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import Button from "../interactives/Button";
import ScrollDownIndicator from "../sectionElements/ScrollDownIndicator";

// import ButtonCTAWithIcon from "../interactives/ButtonCTAWithIcon";

const whatsappContactLink = `https://wa.me/` + `${links.ctaWhatsapp}`;

export default function Hero() {
  return (
    <div
      className="w-full h-auto bg-center bg-no-repeat bg-cover font-mainFont"
      style={{ backgroundImage: `url(${bgHeroImg})` }}
      id="home"
    >
      <div className="relative z-10 flex w-full bg-black bg-opacity-50 items-left desktop1:pl desktop3:pl-0">
        <SectionArea pad >
          <SectionWrapper>
            <div className="w-full justify-evenly">
              <div className="h-[125px] desktop3:h-[45px]" />
              <div className="flex phone1:flex-col">
                <div className="flex flex-col w-full pt-[20px] pb-[0px] tablet1:pt-[80px] tablet1:pb-[20px] desktop1:pt-[40px]">
                  <MotionDivLeftToRight>
                    <div className="text-white flex justify-center font-bold leading-[46px] phone3:leading-[50px] tablet1:leading-[60px] desktop1:leading-[110px] text-center text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title7 desktop1:text-[72px]">
                      <h1 className="pb-[16px]  desktop1:w-[80%] [text-shadow:_2px_3px_0_rgb(0_0_0_/_50%)]">
                        {content.texts.hero.title}
                      </h1>
                    </div>
                  </MotionDivLeftToRight>
                  <MotionDivLeftToRight>
                    <div className="flex justify-center text-center phone1:w-full font-secondFont text-paragraph4 phone3:text-paragraph5 ">
                      <p className="text-white pb-[54px] tablet1:w-[70%] [text-shadow:_1.8px_1.8px_2px_rgb(0_0_0_/_150%)]">
                        {content.texts.hero.subtitle}
                      </p>
                    </div>
                  </MotionDivLeftToRight>
                  <div className="w-full phone2:w-full tablet2:w-auto">
                    <MotionDivLeftToRight>
                      <div className="flex justify-center w-full desktop1:justify-center">
                        <Button
                          className=" bg-yellow-400 hover:bg-white text-black hover:text-bg-yellow-400 hover:border-bg-yellow-400 hover:border-solid border-[1px] border-yellow-400 hover:border-white"
                          aria-label={content.texts.hero.ctaButtonAriaLabel}
                          label={content.texts.hero.ctaButtonText}
                          buttonLink={whatsappContactLink}
                          icon={
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              className="bi bi-whatsapp"
                              viewBox="0 0 16 16"
                            >
                              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                          }
                        />
                      </div>
                    </MotionDivLeftToRight>
                    <ScrollDownIndicator />
                  </div>
                </div>
                <div className="hidden desktop1:flex desktop3:w-[1200px] desktop3:relative desktop3:left-[5%]"></div>
              </div>
            </div>{" "}
          </SectionWrapper>
        </SectionArea>
      </div>
    </div>
  );
}
