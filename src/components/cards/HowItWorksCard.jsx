import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function HowItWorksCard({
  number,
  title,
  description,
  animation = true,
}) {
  const Content = (
    <div className="flex flex-col items-center justify-center h-auto transition desktop1:items-start font-mainFont desktop1:hover:scale-110">
      <div className="bg-yellow-400 mb-[32px] p-[25px] flex justify-center items-center rounded-full h-[48px] w-[48px] text-primary  text-title1 font-secondFont font-bold">
        {number}
      </div>
      <h1 className="text-[20px] text-lighte font-secondFont font-bold mb-[24px]">
        {title}
      </h1>
      <p className="text-[16px] font-secondFont text-darker opacity-70 text-center desktop1:text-left w-full">
        {description}
      </p>
    </div>
  );

  const ContentStatic = (
    <div className="flex flex-col items-center justify-center tablet1:w-[45%] transition desktop1:items-start font-mainFont desktop1:hover:scale-110 h-auto">
      <div className="bg-yellow-400 mb-[32px] p-[25px] flex justify-center items-center rounded-full h-[48px] w-[48px] text-primary text-title1 font-secondFont font-bold">
        {number}
      </div>
      <h1 className="text-[20px] text-lighter font-secondFont font-bold mb-[24px]">
        {title}
      </h1>
      <p className="text-[16px] font-secondFont text-darker opacity-70 text-center desktop1:text-left w-full">
        {description}
      </p>
    </div>
  );

  return animation ? (
    <MotionDivDownToUp className="tablet1:w-[45%]">{Content}</MotionDivDownToUp>
  ) : (
    ContentStatic
  );
}
