import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import { TfiGoogle } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';



const Footer: React.FC= () => {
  const navigate = useNavigate(); 
  return (
    <section id="join" className="min-h-[20rem] max-w-full bg-[--primary-color] ">
     

      <div className=' mx-auto grid justify-center  items-center md:grid-cols-2 gap-4 px-8 pt-6'>

<div className='max-w-[150rem] grid justify-center items-center'>
<div className='grid  items-center md:grid-cols-3 gap-4 px-10 '>

<div className='grid gap-2'>
<p className='font-bold text-md text-[--bg-color]'>Our Company</p>
<p className='text-sm font-thin text-[--bg-color]'>About GEDS</p>
<p className='text-sm font-thin text-[--bg-color]'>Our Portfolio</p>
<p className='text-sm font-thin text-[--bg-color]'>Investor Relation</p>
<p className='text-sm font-thin text-[--bg-color]' >Career</p>
</div>


<div className='grid gap-2'>
<p className='font-bold text-md  text-[--bg-color]'>OUR SERVICES</p>
<p className='text-sm font-thin text-[--bg-color]'>Aceon Freight</p>
<p className='text-sm font-thin text-[--bg-color]'>Storage</p>
<p className='text-sm font-thin text-[--bg-color]'>Package Security</p>
<p className='text-sm font-thin text-[--bg-color]'>Air Cargo</p>
</div>



<div className='gap-2 grid'>
<p className='font-light text-sm text-[--bg-color]'>GEDS Blog</p>
<p className='text-sm font-thin text-[--bg-color]'>Coroperate Responsiblity</p>
<p className='text-sm font-thin text-[--bg-color]'>News Room</p>
<p className='text-sm font-thin text-[--bg-color]'>Contact Us</p>
</div>
</div>

<div className="flex  md:flex-row grid-col-2  gap-4 items-center py-6" >

  <p className='font-bold text-white'>FOLLOW GEDS</p>
  <div className="flex gap-3  md:flex-row grid-col-4 items-center py-6" >
  <div className='bg-[--primary-t-color]  p-2'>
<FaFacebook color="white" size={20} />
 </div>

 <div className='bg-[--primary-t-color]  p-2'>
<FaXTwitter color="white" size={20}/>
 </div>

 <div className='bg-[--primary-t-color]  p-2'>
<BsYoutube color="white" size={20}/>
 </div>

 <div className='bg-[--primary-t-color]  p-2'>
<TfiGoogle color="white" size={20}/>
 </div>

  </div>
</div>
  </div>

  <div>
    <p className='text-balance py-2 text-[--bg-color] font-bold'>Subscribe to our Newsletter</p>

    <p className='text-balance py-4 text-[--bg-color] font-light text-sm'>If you would like more information about our services we are eager to help.</p>

    <div>
    <MdOutlineMailOutline color="#121212" className="absolute mt-3 ml-2"/>

    <div className="absolute ml-[12.5rem]">
    <div className=" flex items-center justify-center gap-6 bg-[--button-color] px-2 py-1 mt-1.5 rounded-md text-[white] ">
    <p className='text-sm'>Subscribe</p>
    </div> 
    </div>
    <input  type="text"
    name="username"
    id="username"
    autoComplete="username"
    className="block w-[18rem] rounded-md border-0 py-2 pl-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"                  
    placeholder="Email address.." />
    </div>

  </div>  

     </div>

<div className="flex border-t-2  mt-6 border-[--button-color] border-t-[#EBEBEB] px-10  md:flex-row grid-col-1 items-center " >
<div className='mx-auto grid py-4  items-center md:grid-cols-2 gap-4 px-8 mt-4'>

<div>
 <button onClick={() => navigate('/Admin')}  className='text-[#EBEBEB50] text-m '>Copyright © 1998-2024, Grand  Express Delivery Services </button>
 </div> 


 
 </div>
</div>
      
    

      

</section>
  )
}

export default Footer
