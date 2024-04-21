import IMG from '../../../assets/image/image_review.png';
import img from '../../../assets/image/image_logo6.png';
import img2 from '../../../assets/image/image_logo5.png';
import img3 from '../../../assets/image/image_logo4.png';
import img4 from '../../../assets/image/image_logo3.png';
import img5 from '../../../assets/image/image_logo2.png';
import img6 from '../../../assets/image/image_logo1.png';


const Review: React.FC = () => {
  return (
    <section  className="min-h-[30rem]  py-20 flex  md:flex-row grid-col-2 items-center justify-center ">
    <div>
    <div className=' grid items-center justify-center'>
      <div>
      <img src={IMG} alt='' className='w-[5rem]'/>
      <div>
        <p>our sea freight offering is complemented by our integrated  warehousing and haulage services, which enables us to offer true door to door services. As a company we believe in independent national carriers, This means we are able serve you global. </p>
      </div>
       
      <div>
        <p>Sarah Chu</p>
        <p>Senior Partner</p>
      </div>
      </div>
    </div>

    <div className='  grid  items-center md:grid-cols-6 gap-4 px-10 '>
        <img src={img} alt='' className='w-[10rem]'/>
        <img src={img2} alt='' className='w-[10rem]'/>
        <img src={img3} alt='' className='w-[10rem]'/>
        <img src={img4} alt='' className='w-[10rem]'/>
        <img src={img5} alt='' className='w-[10rem]'/>
        <img src={img6} alt='' className='w-[10rem]'/>
      </div>
    </div>
   </section>
  )
}

export default Review
