import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";



const Footer: React.FC= () => {
  return (
    <section id="join" className="min-h-[20rem] bg-[--primary-color] ">
    <div className="flex  md:flex-row grid-col-1 items-center py-6" >
    <div className='w-[1300px] mx-auto grid  items-center md:grid-cols-2 gap-4 px-8 mt-4'>

<div className='grid items-center gap-4'>

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

<div className=' mx-auto  flex md:grid-rows-3 gap-20 px-8 text-start'>

<div className=''>
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
</div>
    </div>
    
    <div className="flex border-t-2  mt-6 border-[--button-color] border-t-[#EBEBEB] px-10  md:flex-row grid-col-1 items-center " >
    <div className='w-[1300px] mx-auto grid py-4  items-center md:grid-cols-2 gap-4 px-8 mt-4'>

    <div>
     <p className='text-[#EBEBEB50] text-sm '>Copyright © 1998-2024, Grand  Express Delivery Services </p>
     </div> 

   
     
     </div>
    </div>

         

</section>
  )
}

export default Footer
