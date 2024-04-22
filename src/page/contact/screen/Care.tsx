import img from '../../../assets/image/image_logo6.png';
import img2 from '../../../assets/image/image_logo5.png';
import img3 from '../../../assets/image/image_logo4.png';
import img5 from '../../../assets/image/image_logo3.png';
import img6 from '../../../assets/image/image_logo2.png';
import img7 from '../../../assets/image/image_logo1.png';

const Care: React.FC = () => {
    return (
        <section  className="min-h-[30rem] flex md:flex-row grid-col-2 items-center justify-center ">
        <div>
   <div className='py-2'>              
            <p className='font-bold p-4 text-2xl text-[--primary-color]'> Customer care</p>   
            <p className='max-w-[24rem] p-4'>No matter what you might need, we’re always on hand to happily provide answers and assistance.</p>
         <div className=' max-w-[50rem]  gap-4 flex justify-start items-center md:grid-cols-2 px-4 '>  
         <div className="grid gap-3 mt-4">
         <div className='max-w-[20rem]   grid gap-2 items-center md:grid-cols-2  '>
            <input type="text" placeholder="Tracking Number" className="h-full bg-transparent border-2 border-[--primary-color] py-3 pl-2  text-gray-500 sm:text-sm" />
            <input type="text" placeholder="Tracking Number" className="h-full bg-transparent border-2 border-[--primary-color] py-3 pl-2  text-gray-500 sm:text-sm" />
            </div>
            <div>
            <input type="text" placeholder="Tracking Number" className="h-full bg-transparent border-2 border-[--primary-color] py-3 pl-2 pr-[9rem] text-gray-500 sm:text-sm" />
            </div>
            <div>
            <textarea  placeholder="Tracking Number" className="h-full bg-transparent border-2 border-[--primary-color] py-3 pl-2 pr-[10rem] text-gray-500 sm:text-sm" />
            </div>
            <div>
            <button className='w-[20rem] text-[--bg-color] bg-[--primary-color] py-3'>Submit</button>
            </div>
        
        </div>           
      </div>      
     </div>
     <div className='  mt-20 grid items-center md:grid-cols-6  mx-20 '>
    <img src={img} alt='' className='w-[7rem]'/>
    <img src={img2} alt='' className='w-[7rem]'/>
    <img src={img3} alt='' className='w-[7rem]'/>
    <img src={img7} alt='' className='w-[7rem]'/>
    <img src={img5} alt='' className='w-[7rem]'/>
    <img src={img6} alt='' className='w-[7rem]'/>
</div> 
</div>    
       </section>
    )
}

export default Care
