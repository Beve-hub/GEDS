import React, { useEffect, useState } from 'react';
import img from '../../../assets/image/image_1.png';
import img2 from '../../../assets/image/image_2.png';
import img3 from '../../../assets/image/image_3.png';

const images = [img, img2, img3];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen w-screen overflow-hidden relative">
      <div className="relative h-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      <div className="absolute top-[20rem] w-full grid justify-center gap-4 overflow-hidden">
        <div className="grid justify-center mx-2">
          <div className="grid gap-2">
            <h1 className="font-bold text-[--bg-color]  text-3xl text-balance md:text-balance">
              Welcome To Grand Express Delivery Service
            </h1>
            <p className="text-2xl text-[--bg-color] py-2 text-balance md:text-balance">
              For your Safe & Reliable shipping
            </p>
          </div>
          <div className="flex gap-1">
            <input
              type="text"
              placeholder="Tracking Number"
              className="h-full bg-[--bg-color] pl-2 w-[14rem] text-gray-500 sm:text-sm"
            />
            <button className="bg-[--button-color] py-[0.6rem] px-5">Track</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
