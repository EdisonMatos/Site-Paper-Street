import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "antd";
import "../../index.css";
import imgTestimonial1 from "../../assets/imgs/testimonialsHero/imgTestimonial1.png";
import imgTestimonial2 from "../../assets/imgs/testimonialsHero/imgTestimonial2.png";
import imgTestimonial3 from "../../assets/imgs/testimonialsHero/imgTestimonial3.png";
import imgTestimonial4 from "../../assets/imgs/testimonialsHero/imgTestimonial4.png";
import imgTestimonial5 from "../../assets/imgs/testimonialsHero/imgTestimonial5.png";
import imgTestimonial6 from "../../assets/imgs/testimonialsHero/imgTestimonial6.png";
import imgTestimonial7 from "../../assets/imgs/testimonialsHero/imgTestimonial7.png";
import imgTestimonial8 from "../../assets/imgs/testimonialsHero/imgTestimonial8.png";
import imgTestimonial9 from "../../assets/imgs/testimonialsHero/imgTestimonial9.png";
import imgTestimonial10 from "../../assets/imgs/testimonialsHero/imgTestimonial10.png";
import imgTestimonial11 from "../../assets/imgs/testimonialsHero/imgTestimonial11.png";
import imgTestimonial12 from "../../assets/imgs/testimonialsHero/imgTestimonial12.png";

const CarouselHero = () => {
  const autoplaySpeed = 9000; // 9 segundos para a barra encher
  const [progress, setProgress] = useState(0);
  const carouselRef = useRef(null); // Referência para controlar o carrossel manualmente

  
//  Configurações responsivas
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
     breakpoint: 767,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 2,
     },
   },
   {
     breakpoint: 575,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
     },
   },
 ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 100 / (autoplaySpeed / 100)
      );
    }, 100); // Atualiza a cada 100ms para suavidade

    return () => clearInterval(interval);
  }, [autoplaySpeed]);

  // Quando a barra chega a 100%, muda para o próximo slide
  useEffect(() => {
    if (progress >= 100) {
      carouselRef.current.next(); // Vai para o próximo slide
      setProgress(0); // Reseta a barra de progresso
    }
  }, [progress]);

  return (
    <div className="carousel-container">
      <Carousel ref={carouselRef} dots={true} arrows responsive={responsiveOptions}>
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





