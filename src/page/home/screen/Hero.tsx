import React from 'react';
import img from '../../../assets/image/image_1.png';
import img2 from '../../../assets/image/image_2.png';
import img3 from '../../../assets/image/image_3.png';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const Hero: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    { loop: true },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

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
              <h1 className="font-bold text-[--bg-color] text-2xl text-balance md:text-balance">
                Welcome To Grand Express Delivery Service
              </h1>
              <p className="text-xl text-[--bg-color] text-start md:text-balance">For your Safe & Reliable shipping</p>
            </div>
            <div className="flex gap-1">
              <input type="text" placeholder="Tracking Number" className="h-full bg-[--bg-color] pl-2 pr-19 text-gray-500 sm:text-sm" />
              <button className="bg-[--button-color] py-[0.6rem] px-5">Track</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
