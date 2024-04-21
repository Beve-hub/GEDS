import img from '../../../assets/image/image_5.png';
import { TbTrain } from "react-icons/tb";
import { FaTruck } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import { RiShip2Fill } from "react-icons/ri";



const Package: React.FC = () => {
  return (
    <section  className="min-h-[30rem] py-20 flex  md:flex-row grid-col-2 items-center justify-center ">
    <div>
      <div className='flex gap-2 md:grid-cols-2 '>
       
          <div className='bg-[--bg-color] drop-shadow-xl py-4'>
            <div className='p-6'>              
            <p className='font-bold py-4 text-2xl text-[#121212]'>PACKING & STORAGE</p>
                <p className='py-4 text-lg text-[#121212] font-medium '>For Business Only</p>
                <p className='w-[35rem] text-light text-[#121212] text-balance md:text-balance'>GEDS Bringing you industry-specific expertise; whatever you’re shipping, wherever you’re shipping it.</p>
             
            </div>
              <div className='bg-[--secondary-t-color] my-2 py-2'>
              <p className='p-2 text-lg text-[#121212] font-medium text-start sm:text-center'>Services Available</p>
              <div className='  grid  items-center md:grid-cols-2 gap-4 px-10 '>
                <div className='flex items-center gap-4'>
                <FaTruck color='white' size={24} className="p-1 rounded-lg bg-[--primary-t-color]"/>
                  <p>Road Freight</p>
                </div>
                <div className='flex items-center gap-4'>
                <FaPlaneArrival   color='white' size={24} className="p-1 rounded-lg bg-[--primary-t-color]"/>
                  <p>Air Freight</p>
                </div>
                <div className='flex items-center gap-4'>
                <RiShip2Fill  color='white' size={24} className="p-1 rounded-lg bg-[--primary-t-color]"/>
                  <p>Ocean Freight</p>
                </div>
                <div className='flex items-center gap-4'>
                <TbTrain color='white' size={24} className="p-1 rounded-lg bg-[--primary-t-color]"/>
                  <p>Rail Freight</p>
                </div>
              </div>              
              </div>
              <div className='flex justify-center'>
                 <button className='bg-[--button-color] px-[7rem] py-2 '>
                  Explore GEDS
                </button>
              </div>
                
           
         </div>

   
         <div className='sm:grid hidden'>
           <img src={img} alt="" className='w-[30rem] h-[30rem]'/>
          </div>
       
      </div>
    </div>
  </section>
  )
}

export default Package
