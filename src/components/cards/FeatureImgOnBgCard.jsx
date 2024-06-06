import PropTypes from "prop-types";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import ButtonWithIconNavbar from "../interactives/ButtonWithIconNavbar";

export default function FeatureImgOnBgCard(props) {
  const { bgImg, title, description } = props;

  FeatureImgOnBgCard.propTypes = {
    bgImg: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
  };

  return (
    <MotionDivDownToUp className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]  tablet1:w-[47%] desktop1:w-[31%]">
      <div
        className="w-full h-[560px] rounded-2xl p-[10px] flex flex-col justify-end bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <MotionDivDownToUp className="w-full h-auto bg-white rounded-2xl p-[20px] gap-[18px] flex flex-col">
          <h3 className="font-mainFont font-medium text-[24px] desktop1:text-paragraph5 desktop2:text-[24px]">
            {title}
          </h3>
          <p className="font-secondFont text-paragraph4 text-quaternary">
            {description}
          </p>
          <div>
            <ButtonWithIconNavbar
              label="Saiba mais"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              }
            />
          </div>
        </MotionDivDownToUp>
      </div>
    </MotionDivDownToUp>
  );
}
