import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "antd";
import "../../index.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import imgTestimonial1 from "../../assets/imgs/testimonialsHero/imgTestimonial1.webp";
import imgTestimonial2 from "../../assets/imgs/testimonialsHero/imgTestimonial2.webp";
import imgTestimonial3 from "../../assets/imgs/testimonialsHero/imgTestimonial3.webp";
import imgTestimonial4 from "../../assets/imgs/testimonialsHero/imgTestimonial4.webp";
import imgTestimonial5 from "../../assets/imgs/testimonialsHero/imgTestimonial5.webp";
import imgTestimonial6 from "../../assets/imgs/testimonialsHero/imgTestimonial6.webp";
import imgTestimonial7 from "../../assets/imgs/testimonialsHero/imgTestimonial7.webp";
import imgTestimonial8 from "../../assets/imgs/testimonialsHero/imgTestimonial8.webp";
import imgTestimonial9 from "../../assets/imgs/testimonialsHero/imgTestimonial9.webp";
import imgTestimonial10 from "../../assets/imgs/testimonialsHero/imgTestimonial10.webp";
import imgTestimonial11 from "../../assets/imgs/testimonialsHero/imgTestimonial11.webp";
import imgTestimonial12 from "../../assets/imgs/testimonialsHero/imgTestimonial12.webp";

const CarouselHero = () => {

  const responsiveOptions = [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const defaultSettings = {
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  //função para as telas acima de 3000px
  const currentSettings = () => {
    const width = window.innerWidth;
    if (width > 3000) return defaultSettings;
    return (
      responsiveOptions.find((option) => width <= option.breakpoint)
        ?.settings || defaultSettings
    );
  };

  const carouselRef = useRef(null); // Referência para o carrossel
  const autoplaySpeed = 25000;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 100 / (autoplaySpeed / 100)
      );
    }, 20);
    return () => clearInterval(interval);
  }, [autoplaySpeed]);

  useEffect(() => {
    if (progress >= 100) {
      carouselRef.current.next();
      setProgress(0);
    }
  }, [progress]);

  const handleBeforeChange = () => {
    setProgress(0);
  };

  // Funções para controlar as setas
  const goToPrevSlide = () => {
    carouselRef.current.prev();
  };

  const goToNextSlide = () => {
    carouselRef.current.next();
  };

  return (
    <div className="carousel-container" style={{ position: "relative" }}>
      
      <div
        onClick={goToPrevSlide}
        style={{
          position: "absolute",
          top: "40%",
          left: "-10px",
          transform: "translateY(-50%)",
          fontSize: "32px",
          color: "#facc15",
          zIndex: 10,
          cursor: "pointer",
        }}
      >
        <LeftOutlined />
      </div>

      <div
        onClick={goToNextSlide}
        style={{
          position: "absolute",
          top: "40%",
          right: "-10px",
          transform: "translateY(-50%)",
          fontSize: "32px",
          color: "#facc15",
          zIndex: 10,
          cursor: "pointer",
        }}
      >
        <RightOutlined />
      </div>

      <Carousel
        ref={carouselRef}
        dots={true}
        {...currentSettings()}
        responsive={responsiveOptions}
        beforeChange={handleBeforeChange}
        autoplay={false}
        className="mb-[80px]"
      >
        <div className="carousel-item">
          <img src={imgTestimonial1} alt="Testimonial 1" />
        </div>
        <div className="carousel-item">
          <img src={imgTestimonial2} alt="Testimonial 2" />
        </div>
        <div className="carousel-item">
          <img src={imgTestimonial3} alt="Testimonial 3" />
        </div>
        <div className="carousel-item">
          <img src={imgTestimonial4} alt="Testimonial 4" />
        </div>
        <div className="carousel-item">
          <img src={imgTestimonial5} alt="Testimonial 5" />
        </div>
        <div className="carousel-item">
          <img src={imgTestimonial6} alt="Testimonial 6" />
        </div>
        <div className="carousel-item">
          <img src={imgTestimonial7} alt="Testimonial 7" />
        </div>
        <div className="carousel-item">
          <img src={imgTestimonial8} alt="Testimonial 8" />
        </div>
        <div className="carousel-item">
          <img src={imgTestimonial9} alt="Testimonial 9" />
        </div>
        <div className="carousel-item">
          <img src={imgTestimonial10} alt="Testimonial 10" />
        </div>
        <div className="carousel-item">
          <img src={imgTestimonial11} alt="Testimonial 11" />
        </div>
        <div className="carousel-item">
          <img src={imgTestimonial12} alt="Testimonial 12" />
        </div>
      </Carousel>

      {/* Barra de progresso */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

export default CarouselHero;
