import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import "./scrollDownIndicator.css";

export default function ScrollDownIndicator() {
  return (
    <div className="flex justify-center hidden phone2:flex">
      <MotionDivRightToLeft>
        <div className="flex flex-col items-center">
          <p className="mb-[22px] desktop1:mt-[20px]  opacity-80 font-secondFont">
            Deslize para baixo
          </p>
          <div className="scrollDown">
            <span></span>
          </div>
        </div>
      </MotionDivRightToLeft>
    </div>
  );
}
