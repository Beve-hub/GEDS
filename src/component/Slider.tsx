import React from 'react';
import SliderComponent from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../assets/image/image_1.png'
import img2 from '../assets/image/image_1.png'
import img3 from '../assets/image/image_1.png'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CustomSlider: React.FC = () => {
  return (
    <SliderComponent {...settings}>
      <div>
        <img src={img} className="w-screen object-cover h-screen" alt="" />
      </div>
      <div>
        <img src={img2} className="w-screen object-cover h-screen" alt="" />
      </div>
      <div>
        <img src={img3} className="w-screen object-cover h-screen" alt="" />
      </div>
    </SliderComponent>
  );
};

export default CustomSlider;
