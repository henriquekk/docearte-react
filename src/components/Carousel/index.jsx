import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from 'images/banner-principal.png';
import slide2 from 'images/banner-2.png';
import slide3 from 'images/banner-3.png'


const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    pauseOnHover: false
  };

  const images = [
    slide1,
    slide2,
    slide3,
  ]

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img className="slide-image" src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default Carousel;