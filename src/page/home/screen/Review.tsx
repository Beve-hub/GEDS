
import {useState} from 'react'
import img from '../../../assets/image/image_logo6.png';
import img2 from '../../../assets/image/image_logo5.png';
import img3 from '../../../assets/image/image_logo4.png';
import img4 from '../../../assets/image/image_logo3.png';
import img5 from '../../../assets/image/image_logo2.png';
import img6 from '../../../assets/image/image_logo1.png';
import { test } from './../../../utils/data/Testimonia';
import { useEffect } from 'react';


const Review: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevSlide) => 
        prevSlide === test.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };


  return (
    <section  className="min-h-[30rem]  py-20 flex  md:flex-row grid-col-2 items-center justify-center ">
      <div className='max-w-[80rem] grid justify-center gap-32'>

      <div>

        <div className='grid items-center justify-center'>

          <div className='flex justify-center'>
              <img src={test[current].imgSrc} alt='' className='w-[5rem]'/>
          </div>

          <div className='grid justify-center'>

            <div>
              <p className='text-balance text-center'>{test[current].description}</p>
            </div>

            <div className='grid justify-center mt-7'>
              <p className='text-2xl font-bold text-[--primary-color]'>{test[current].name}</p>
              <p className='text-[--button-color]'>{test[current].position}</p>
            </div>
          </div>

        </div>

        <div className="relative top-4 left-0 right-0 flex justify-center">
        {test.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 rounded-full mx-1 ${
              index === current ? 'bg-[--primary-color]' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>

      </div>
      


    <div className=' grid  items-center md:grid-cols-6  mx-20 '>
        <img src={img} alt='' className='w-[7rem]'/>
        <img src={img2} alt='' className='w-[7rem]'/>
        <img src={img3} alt='' className='w-[7rem]'/>
        <img src={img4} alt='' className='w-[7rem]'/>
        <img src={img5} alt='' className='w-[7rem]'/>
        <img src={img6} alt='' className='w-[7rem]'/>
    </div>  
      </div>    
   </section>
  )
}

export default Review
