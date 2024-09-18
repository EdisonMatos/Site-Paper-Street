
import React from "react";
import { Carousel } from "primereact/carousel";
import "../../index.css";

export default function TestimonialsDiv({ children }) {
  const responsiveOptions = [
    {
      breakpoint: "2500px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "1023px",
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

  
  const items = React.Children.toArray(children);

  const itemTemplate = (item) => {
    return (
      <div className="border-1 rounded text-center py-5 px-3 h-full w-auto">
        <div className="flex justify-center items-center h-full">{item}</div>
      </div>
    );
  };

  return (
    <div className="">
      <Carousel
        value={items}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="text-white"
        circular
        autoplayInterval={8000}
        itemTemplate={itemTemplate}
        showNavigators={true}
        indicators={true}
        prevIcon={<span style={{ color: "white", fontSize: "200%" }}>❮</span>}
        nextIcon={<span style={{ color: "white", fontSize: "200%" }}>❯</span>}
      />
    </div>
  );
}
