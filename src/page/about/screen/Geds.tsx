import img from '../../../assets/image/image_6.png';
import { BiWorld } from "react-icons/bi";
import { MdTimer } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa";


const Geds: React.FC = () => {
    return (
        <section  className="min-h-[30rem] my-16 flex md:flex-row grid-col-2 items-center justify-center ">

        <div>
        <div className='p-6'>              
                <p className='font-bold py-4 text-2xl text-[--primary-color]'>GRAND EXPRESS DELIVERY SERVICE (GEDS)</p>
                    <p className='py-4 text-lg text-[#121212] font-medium '>The undisputed global leader in international express shipping</p>
                    <p className='max-w-[75rem] text-light text-[#121212] text-balance md:text-balance'>When your shipment needs to be there fast, choose the International Specialists for quick, reliable expedited shipments to and from more than 220 countries and territories.</p>
                 
        </div>
        <div>

      
          <div className='flex items-center gap-2 md:grid-cols-2 '> 
            
           
    
              <div className='  grid  items-center md:grid-cols-2 gap-4 px-10 '>


               <div className='bg-[--bg-color] drop-shadow-xl py-4 max-w-[15rem] '>
                 <div className='grid items-center gap-4 p-4'>
                  <BiWorld color='#2f0095' size={30} />
                    <p className='font-bold text-md text-[#FD715E]'>International Expertise</p>
                    <div>
                        <p>With more than a half-century of experience and a team of more than 100,000 Certified International Specialists, no other provider knows the world like we do.</p>
                    </div>
                  </div>                           
             
               </div>

              
               <div className='bg-[--bg-color] drop-shadow-xl py-4 max-w-[15rem] '>
                 <div className='grid items-center gap-4 p-4'>
                  <RiCustomerServiceFill color='#2f0095' size={30} />
                    <p className='font-bold text-md text-[#FD715E]'>Service Excellence</p>
                    <div>
                        <p>Our “can-do” approach is built on innovative thinking to provide intelligent, sustainable, tailored solutions for your specific logistics challenges including express shipping.</p>
                    </div>
                  </div>                           
             
               </div>

               <div className='bg-[--bg-color] drop-shadow-xl py-4 max-w-[15rem] '>
                 <div className='grid items-center gap-4 p-4'>
                  <FaUserTie color='#2f0095' size={30} />
                    <p className='font-bold text-md text-[#FD715E]'>Trusted Advice</p>
                    <div>
                        <p>We are passionate about helping GEDS customers succeed by guiding you into new markets to achieve international growth and maximize your cross-border potential.</p>
                    </div>
                  </div>                           
             
               </div>


               <div className='bg-[--bg-color] drop-shadow-xl py-4 max-w-[15rem] '>
                 <div className='grid items-center gap-4 p-4'>
                  <MdTimer color='#2f0095' size={30} />
                    <p className='font-bold text-md text-[#FD715E]'>Extraordinary Speed</p>
                    <div>
                        <p>We leverage our unrivaled global expertise and Customs know-how to keep your shipments moving swiftly – providing door-to-door expedited shipment delivery on the next possible business day.</p>
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

export default Geds
