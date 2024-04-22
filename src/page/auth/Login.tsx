import logo from '../../assets/image/logo.png'

const Login: React.FC = () => {
    return (
        <section  className=" h-screen w-screen grid  items-center justify-center ">
        <div className='grid justify-center border-2 mx-10 p-6 border-[--primary-color] rounded-md '>
            <img src={logo} alt="" className='w-[10rem]'/>
         <div className=''>              
            <p className='font-bold px-4 text-4xl text-[--primary-color]'> Login</p>   
            <p className='max-w-[24rem] p-4'>Please enter email and password to continue</p>
         <div className=' max-w-[50rem]  gap-4 flex justify-start items-center md:grid-cols-2 px-4 '>  
         <div className="grid gap-3 mt-4">
       
            <div className="grid ">
                <label className="font-bold py-2">Email *</label>
            <input type="text" placeholder="Enter email" className="h-full bg-transparent border-2 border-[--primary-color] py-3 pl-2 pr-[7rem] text-gray-500 sm:text-sm" />
            
            </div>
            <div className="grid ">
                <label className="font-bold py-2">Password *</label>
            <input type="text" placeholder="Enter Password" className="h-full bg-transparent border-2 border-[--primary-color] py-3 pl-2 pr-[7rem] text-gray-500 sm:text-sm" />
            <p className='text-[--primary-color] font-medium'>forget Password? </p>
            </div>

            <div className='mt-6'>
            <button className='w-[21rem] text-[--bg-color] bg-[--primary-color] py-3'>Submit</button>
            </div>
        
        </div>           
      </div>      
     </div>
    
</div>    
       </section>
    )
}

export default Login
