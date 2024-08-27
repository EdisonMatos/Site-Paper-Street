import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import "../../index.css";

export default function TestimonialsDiv({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsiveOptions = [
    {
      breakpoint: "2500px",
      numVisible: 2,
      numScroll: 2,
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

  const onPageChange = (e) => {
    setActiveIndex(e.page);
  };

  return (
    <div className="">
      <Carousel
        value={children}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="text-black"
        circular={true}
        autoplayInterval={8000}
        itemTemplate={itemTemplate}
        onPageChange={onPageChange}
        showNavigators={true}
        prevIcon={<span style={{ color: "black", fontSize: "200%" }}>❮</span>}
        nextIcon={<span style={{ color: "black", fontSize: "200%" }}>❯</span>}
      />
      <div className="flex justify-center mt-3">
        {children.map((_, index) => (
          <span
            key={index}
            className={`mx-1 w-4 h-1 ${
              index === activeIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            style={{ transition: "background-color 0.3s" }}
          ></span>
        ))}
      </div>
    </div>
  );
}
