import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./custom-gallery.css"; 

export default function ImagesGallerySlides(props) {
  const { slide1, slide2, slide3, slide4, slide5 } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3, slide4, slide5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`image-gallery-slide-wrapper ${
            index === currentSlide ? "current" : ""
          }`}
        >
          <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}

ImagesGallerySlides.propTypes = {
  slide1: PropTypes.string.isRequired,
  slide2: PropTypes.string.isRequired,
  slide3: PropTypes.string.isRequired,
  slide4: PropTypes.string.isRequired,
  slide5: PropTypes.string.isRequired,
};
