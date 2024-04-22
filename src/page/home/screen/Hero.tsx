import React from 'react';
import img from '../../../assets/image/image_1.png';


const Hero: React.FC = () => {

  return (
    <section id="home" className="min-h-screen overflow-hidden">
      <div>
        <div  className="keen-slider" >
          <div className="keen-slider__slide">
            <img src={img} className="w-screen object-cover h-screen" alt="" />
          </div>
          
        </div>

        <div className="absolute top-[20rem] left-[4rem] grid gap-4 overflow-hidden">
          <div className="grid justify-center">
            <div className="grid gap-2">
              <h1 className="font-bold text-[--bg-color] text-3xl text-balance md:text-balance">
                Welcome To Grand Express Delivery Service
              </h1>
              <p className="text-2xl text-[--bg-color] py-2 text-balance md:text-balance">For your Safe & Reliable shipping</p>
            </div>
            <div className="flex gap-1">
              <input type="text" placeholder="Tracking Number" className="h-full bg-[--bg-color] pl-2 w-[14rem] text-gray-500 sm:text-sm" />
              <button className="bg-[--button-color] py-[0.6rem] px-5">Track</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
