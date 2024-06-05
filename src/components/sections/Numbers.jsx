import React, { useEffect, useState } from "react";
import imgOfficeGreenBackground from "../../assets/imgs/paralaxe/bgOffice.webp";
import AnimatedCounter from "../util/AnimatedCounter";
import { Handshake, Building, Box, Truck } from "lucide-react";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import content from "../../abstractions/content";

export default function Numbers() {
  const [yearsOfService, setYearsOfService] = useState(0);

  useEffect(() => {
    const startDate = new Date("2003-01-01");
    const currentDate = new Date();
    const differenceInYears =
      currentDate.getFullYear() - startDate.getFullYear();

    if (
      currentDate.getMonth() < startDate.getMonth() ||
      (currentDate.getMonth() === startDate.getMonth() &&
        currentDate.getDate() < startDate.getDate())
    ) {
      setYearsOfService(differenceInYears - 1);
    } else {
      setYearsOfService(differenceInYears);
    }
  }, []);

  return (
    <div
      className="flex justify-center bg-center bg-cover"
      style={{
        backgroundImage: `url(${imgOfficeGreenBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-[90%] max-w-[1215px] gap-[46px] flex flex-col text-center desktop1:flex-row justify-between items-center py-[64px] desktop1:py-[96px] text-white [text-shadow:_2px_3px_0_rgb(0_0_0_/_50%)]">
        <div className="flex flex-col items-center w-[90%] desktop1:w-[30%] ">
          <h1 className="text-[72px] font-mainFont leading-[76px] font-bold">
            <MotionDivDownToUp>
              <AnimatedCounter endValue={content.texts.numbers.number1} />+
            </MotionDivDownToUp>
          </h1>
          <p className=" font-secondFont text-title1 tablet1:text-title3">
            <MotionDivDownToUp>
              {content.texts.numbers.number1Description}
            </MotionDivDownToUp>
          </p>
        </div>
        <div className="flex flex-col items-center w-[90%] desktop1:w-[30%]">
          <h1 className="text-[72px] font-mainFont leading-[76px] font-bold">
            <MotionDivDownToUp>
              <AnimatedCounter endValue={content.texts.numbers.number2} />+
            </MotionDivDownToUp>
          </h1>
          <p className="font-secondFont text-title1 tablet1:text-title3">
            <MotionDivDownToUp>
              {content.texts.numbers.number2Description}
            </MotionDivDownToUp>
          </p>
        </div>
        <div className="flex flex-col items-center w-[90%] desktop1:w-[30%]">
          <h1 className="text-[72px] font-mainFont leading-[76px] font-bold">
            <MotionDivDownToUp>
              <AnimatedCounter endValue={content.texts.numbers.number3} />%
            </MotionDivDownToUp>
          </h1>
          <p className="font-secondFont text-title1 tablet1:text-title3">
            <MotionDivDownToUp>
              {content.texts.numbers.number3Description}
            </MotionDivDownToUp>
          </p>
        </div>
      </div>
    </div>
  );
}
