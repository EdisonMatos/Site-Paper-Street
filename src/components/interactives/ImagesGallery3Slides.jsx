import React from "react";
import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ImagesGallery3Slides(props) {
  const { slide1, slide2, slide3, slide4, slide5, slide6, slide7 } = props;

  ImagesGallery3Slides.propTypes = {
    slide1: PropTypes.any,
    slide2: PropTypes.any,
    slide3: PropTypes.any,
    slide4: PropTypes.any,
    slide5: PropTypes.any,
    slide6: PropTypes.any,
    slide7: PropTypes.any,
  };

  const images = [
    {
      original: slide1,
      thumbnail: slide1,
      originalAlt: "Logo do Google Pagespeed",
      thumbnailAlt: "Logo do Google Pagespeed",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide2,
      thumbnail: slide2,
      originalAlt: "Desempenho de site criado pela Paper Street",
      thumbnailAlt: "Desempenho de site criado pela Paper Street",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide3,
      thumbnail: slide3,
      originalAlt: "Desempenho de site criado pela Paper Street",
      thumbnailAlt: "Desempenho de site criado pela Paper Street",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide4,
      thumbnail: slide4,
      originalAlt: "Desempenho de site criado pela Paper Street",
      thumbnailAlt: "Desempenho de site criado pela Paper Street",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    {
      original: slide5,
      thumbnail: slide5,
      originalAlt: "Desempenho de site criado pela Paper Street",
      thumbnailAlt: "Desempenho de site criado pela Paper Street",
      originalHeight: 100,
      originalWidth: 100,
      thumbnailHeight: 50,
      thumbnailWidth: 50,
    },
    // {
    //   original: slide6,
    //   thumbnail: slide6,
    //   originalAlt: "0EMPTY",
    //   thumbnailAlt: "0EMPTY",
    //   originalHeight: 100,
    //   originalWidth: 100,
    //   thumbnailHeight: 50,
    //   thumbnailWidth: 50,
    // },
    // {
    //   original: slide7,
    //   thumbnail: slide7,
    //   originalAlt: "0EMPTY",
    //   thumbnailAlt: "0EMPTY",
    //   originalHeight: 100,
    //   originalWidth: 100,
    //   thumbnailHeight: 50,
    //   thumbnailWidth: 50,
    // }
  ];

  return (
    <div className=" w-full">
      <ImageGallery
        items={images}
        showBullets={true}
        autoPlay={true}
        showFullscreenButton={false}
        useBrowserFullscreen={true}
      />
    </div>
  );
}
