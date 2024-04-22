import img from '../../../assets/image/image_logo6.png';
import img2 from '../../../assets/image/image_logo5.png';
import img3 from '../../../assets/image/image_logo4.png';
import img4 from '../../../assets/image/image_team4.png';
import img5 from '../../../assets/image/image_logo3.png';
import img6 from '../../../assets/image/image_logo2.png';
import img7 from '../../../assets/image/image_logo1.png';

const Success: React.FC = () => {
    return (
        <section  className="min-h-[30rem] flex md:flex-row grid-col-2 items-center justify-center ">
            <div>
       <div className='py-2'>              
                <p className='font-bold p-4 text-2xl text-[--primary-color]'>Our Success Stories</p>   
             <div className=' max-w-[50rem]  gap-4 flex justify-start items-center md:grid-cols-2 px-4 '>  
              <img src={img4} alt=''className='w-[5rem] rounded-[6rem]'/>            
             <div>
             <p>“GEDS Global Forwarding is a world leader in logistics, and D-Orbit is an emerging leader in the space logistics and transportation sector.”</p>
            </div>            
          </div>      
         </div>
         <div className='  mt-10 grid items-center md:grid-cols-6  mx-20 '>
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

export default Success
