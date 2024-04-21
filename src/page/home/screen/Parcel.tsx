import img from '../../../assets/image/image_4.png';
import { SlCalender } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { AiOutlineDollarCircle } from "react-icons/ai";

const Parcel = () => {
  return (
    <section  className="min-h-[30rem] py-20 flex  md:flex-row grid-col-2 items-center justify-center ">
    <div>
      <div className='flex gap-2 md:grid-cols-2 '>

        
        <div className='sm:grid hidden'>
           <img src={img} alt="" className='w-[30rem] h-[30rem]'/>
          </div>

       
          <div className='bg-[--bg-color] drop-shadow-xl py-4'>
            <div className='p-6'>              
            <p className='font-bold py-4 text-2xl text-[#121212]'>Document and Parcel Shipping</p>
                <p className='py-4 text-lg text-[#121212] font-medium '>For All Shippers</p>
                <p className='text-light text-[#121212] text-balance md:text-balance'>Learn about GEDS – the undisputed global leader in international express shipping.</p>
             
            </div>
              <div className='bg-[--secondary-t-color] my-2 py-2'>
              <p className='p-2 text-lg text-[#121212] font-medium text-start sm:text-center'>Manage your shipments</p>
              <div className='  grid  items-center md:grid-cols-2 gap-4 px-10 '>
                <div className='flex items-center gap-4'>
                <SlCalender color='white' size={24} className="p-1 rounded-lg bg-[--primary-t-color]"/>
                  <p>Book a shippment</p>
                </div>
                <div className='flex items-center gap-4'>
                <GrLocation color='white' size={24} className="p-1 rounded-lg bg-[--primary-t-color]"/>
                  <p>Find Location</p>
                </div>
                <div className='flex items-center gap-4'>
                <BsTruck color='white' size={24} className="p-1 rounded-lg bg-[--primary-t-color]"/>
                  <p>Redirect your Package</p>
                </div>
                <div className='flex items-center gap-4'>
                <AiOutlineDollarCircle color='white' size={24} className="p-1 rounded-lg bg-[--primary-t-color]"/>
                  <p>Fuel Surcharge</p>
                </div>
              </div>              
              </div>
              <div className='flex justify-center'>
                 <button className='bg-[--button-color] px-[7rem] py-2 '>
                  Explore GEDS
                </button>
              </div>
                
           
         </div>

   

     
       
      </div>
    </div>
  </section>
  )
}

export default Parcel
