import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import "./scrollDownIndicator.css";

export default function ScrollDownIndicator() {
  return (
    <div className="flex justify-center phone2:flex">
      <MotionDivRightToLeft>
        <div className="flex flex-col items-center">
          <p className="mb-[22px] text-white mt-[40%] desktop1:mt-[50%] opacity-80 font-secondFont">
            Deslize para baixo
          </p>
          <div className="scrollDown"></div>
        </div>
      </MotionDivRightToLeft>
    </div>
  );
}
