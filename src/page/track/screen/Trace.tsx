import img from '../../../assets/image/image_logo6.png';
import img2 from '../../../assets/image/image_logo5.png';
import img3 from '../../../assets/image/image_logo4.png';
import img5 from '../../../assets/image/image_logo3.png';
import img6 from '../../../assets/image/image_logo2.png';
import img7 from '../../../assets/image/image_logo1.png';


const Trace: React.FC = () => {
    return (
        <section  className="min-h-[30rem] flex md:flex-row grid-col-2 items-center justify-center ">
            <div>
       <div className='py-2'>              
                <p className='font-bold p-4 text-2xl text-[--primary-color]'>TRACK YOUR SHIPMENT</p>   
                <p className='px-4'>Find the status of your in transit shipment</p>
             <div className=' max-w-[50rem]  gap-4 flex justify-start items-center md:grid-cols-2 px-4 '>  
             <div className="flex gap-1 mt-4">
              <input type="text" placeholder="Tracking Number" className="h-full bg-transparent border-2 border-[--primary-color] py-3 pl-2 pr-22 text-gray-500 sm:text-sm" />
              <button className="bg-[--primary-color] text-[--bg-color]  py-[0.6rem] px-5">Track</button>
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

export default Trace
