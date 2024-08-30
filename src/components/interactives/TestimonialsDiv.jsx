import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import "../../index.css";

export default function TestimonialsDiv({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsiveOptions = [
    {
      breakpoint: "2500px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "1199px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const itemTemplate = (item) => {
    return (
      <div className="border-1 surface-border rounded text-center py-5 px-3 h-full w-auto">
        <div className="flex justify-center items-center h-full">{item}</div>
      </div>
    );
  };

  return (
    <div className="p-carousel-container">
      <div className="w-full max-w-[80%]">
        <Carousel
          value={children}
          numVisible={1}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          showIndicators={false}
          className="text-black"
          circular={true}
          autoplayInterval={8000}
          itemTemplate={itemTemplate}
          showNavigators={true}
          prevIcon={<span style={{ color: "black", fontSize: "200%" }}>❮</span>}
          nextIcon={<span style={{ color: "black", fontSize: "200%" }}>❯</span>}
        />
      </div>
    </div>
  );
}
