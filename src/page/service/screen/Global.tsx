import img from '../../../assets/image/image_7.png';
import { FaTruck, FaPlaneArrival } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { RiShip2Fill } from "react-icons/ri";
import { TbTrain } from "react-icons/tb";

const Global: React.FC = () => {
    return (
        <section  className="min-h-[30rem] mt-16 flex md:flex-row grid-col-2 items-center justify-center ">

        <div>
        <div className='p-6'>              
                <p className='font-bold py-4 text-2xl text-[--primary-color]'>GEDS Global Forwarding</p>
                    <p className='py-4 text-lg text-[#121212] font-medium '>Helping you connect your goods to every corner of the globe since 1815</p>
                    <p className='max-w-[60rem] text-light text-[#121212] text-balance md:text-balance'>We’re here to help simplify global trade for your business, moving your goods – however big or small – to the places they need to be. We partner with you, listen to your needs and take action, connecting and collaborating with our network and partners across the whole journey, so you can focus on running your business.</p>
                 
        </div>
        <div>

      
          <div className='flex items-center gap-2 md:grid-cols-2 '> 
            
           
    
              <div className='  grid  items-center md:grid-cols-2 gap-4 px-10 '>


               <div className='bg-[--bg-color] drop-shadow-xl py-4 max-w-[15rem] '>
                 <div className='grid items-center gap-4 p-4'>
                  <FaTruck color='#2f0095' size={30} />
                    <p className='font-bold text-md text-[#FD715E]'>Road Freight</p>
                    <div>
                        <p>Covering the gap between standard liability and the full value of your goods, so you have peace of mind regardless of what happens during transportation.</p>
                    </div>
                  </div>                           
             
               </div>

              
               <div className='bg-[--bg-color] drop-shadow-xl py-4 max-w-[15rem] '>
                 <div className='grid items-center gap-4 p-4'>
                  <FaPlaneArrival color='#2f0095' size={30} />
                    <p className='font-bold text-md text-[#FD715E]'>Air Freight</p>
                    <div>
                        <p>Providing you with the broadest and most flexible range of DHL Air Freight services to move your goods quickly and reliably.</p>
                    </div>
                  </div>                           
             
               </div>

               <div className='bg-[--bg-color] drop-shadow-xl py-4 max-w-[15rem] '>
                 <div className='grid items-center gap-4 p-4'>
                  <RiShip2Fill color='#2f0095' size={30} />
                    <p className='font-bold text-md text-[#FD715E]'>Ocean Freight</p>
                    <div>
                        <p>Providing you with the most flexible, cost-efficient and fully coordinated end-to-end ocean freight solutions.</p>
                    </div>
                  </div>                           
             
               </div>


               <div className='bg-[--bg-color] drop-shadow-xl py-4 max-w-[15rem] '>
                 <div className='grid items-center gap-4 p-4'>
                  < TbTrain color='#2f0095' size={30} />
                    <p className='font-bold text-md text-[#FD715E]'>Rail Freight</p>
                    <div>
                        <p>Providing you with cost-effective and environmentally-conscious rail logistics solutions to move your goods efficiently and reliably</p>
                    </div>
                  </div>                           
             
               </div>

                                       
             
                                      
              

             </div>
              
             <div className='sm:grid hidden'>
               <img src={img} alt="" className='w-[30rem] h-[30rem]'/>
              </div>
             <div className='bg-[--secondary-t-color] my-2 py-2'>               
           
</div>

    
         
           
          </div>
        </div>
       
        </div>
      </section>
    )
}

export default Global
