import MotionDivDownToUp from "../../animation/MotionDivDownToUp";

export default function FeatureCardLP({
  icon,
  title,
  description,
  className,
  animate = true,
}) {
  return animate ? (
    <MotionDivDownToUp className="w-full tablet2:w-[45%] flex flex-col items-center  ">
      <div
        className={`bg-neutral-100 rounded-xl w-full flex flex-col items-center desktop1:hover:scale-110 transition px-[18px] py-[32px] ${className}`}
      >
        <div className="h-[64px] w-[64px] mb-[24px] bg-primary rounded-md flex justify-center items-center text-secondary">
          {icon}
        </div>
        <h1 className="h-auto w-full leading-[28px] font-bold font-mainFont text-title3 text-center mb-[16px] text-secondary">
          {title}
        </h1>
        <p className="text-center text-black opacity-70 font-mainFont w-[90%]">
          {description}
        </p>
      </div>
    </MotionDivDownToUp>
  ) : (
    <div>
      <div
        className={`bg-neutral-100 rounded-xl w-full flex tablet2:w-[45%] flex-col items-center desktop1:hover:scale-110 transition px-[18px] py-[32px] ${className}`}
      >
        <div className="h-[64px] w-[64px] mb-[24px] bg-primary rounded-md flex justify-center items-center text-secondary">
          {icon}
        </div>
        <h1 className="h-auto leading-[28px] font-bold font-mainFont text-title3 text-center mb-[16px] text-secondary">
          {title}
        </h1>
        <p className="text-center text-black opacity-70 font-mainFont w-[90%]">
          {description}
        </p>
      </div>
    </div>
  );
}
