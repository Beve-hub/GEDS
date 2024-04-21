import img from '../../../assets/image/image_1.png';

const Hero: React.FC = () => { 

  return (
    <section id="home" className="min-h-screen  overflow-hidden">
    <img src={img} className="w-screen object-cover h-screen" alt='' /> 
    <div className="absolute top-[17rem]  grid gap-4 overflow-hidden">
      <div className='grid justify-center w-[40rem]'>
      <div className='grid gap-2 '>
      <h1 className=" font-bold text-[--bg-color] text-2xl  text-balance md:text-balance">Welcome To Grand Express Delivery Service</h1>
      <p className="text-xl text-[--bg-color] text-start md:text-balance">For your Safe & Reliable shipping</p>
      </div>
      <div className='flex gap-1'>
        <input type='text' placeholder='Tracking Number' className="h-full  bg-[--bg-color]  pl-2 pr-19 text-gray-500  sm:text-sm"/>
        <button className='bg-[--button-color] py-[0.6rem] px-5'>Track</button>
      </div>
      </div>
      
    </div>
   </section>
  )
}

export default Hero

