import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import "./scrollDownIndicator.css";

export default function ScrollDownIndicator() {
  return (
    <div className="flex justify-center phone2:flex">
      <MotionDivRightToLeft>
        <div className="flex flex-col items-center">
          <p className="mb-[22px] text-white desktop1:mt-[20px] desktop3:pt-[30px] opacity-80 font-secondFont">
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
