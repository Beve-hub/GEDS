import { useState } from 'react';
import { BiMenu, BiWorld } from 'react-icons/bi';
import { AiOutlineClose } from "react-icons/ai";
import Logo from '../assets/image/logo.png';
import { navbar } from './../utils/data/data';
import { NavLink } from 'react-router-dom';

interface Props {}

const Navbar = (props: Props) => {
  const [nav, setNav ] = useState<boolean>(true);
  const flexBetween = 'flex items-center justify-between';

  const handleNav = (): void => {
    setNav(!nav)
  } 
  return (
    <div className={`${flexBetween} fixed top-0 z-30 w-full bg-[#ededed90]`}>
      <div className='mx-auto w-[80rem]'>
        <div className='flex items-center  '>
          <div onClick={handleNav} className='block md:hidden ml-4 '>
            {!nav ? <AiOutlineClose size={30}  className='bg-[--primary-t-color]' /> : <BiMenu  size={30}  className='bg-[--primary-t-color]' /> }
          </div>
        <div className='flex items-center gap-[2rem]'>
          <img alt='logo' src={Logo} className='w-[7rem]' />
          <div className='flex items-center gap-4 '>
            <BiWorld color='white' size={30} className='bg-[#300193]' />
            <div>
              <p className='text-sm text-[#300193]'>OPENING HOURS</p>
              <p className='text-sm text-[#FF9900]'>24/7</p>
            </div>
          </div>
        </div>
          
        <div>

        </div>
        </div>

        <div className='w-full p-6 bg-[--primary-color] md:flex hidden'>
          <div className='mx-[10rem]'>
            <ul className={`${flexBetween} mx-[8rem] w-[40rem]`}>
              {navbar.map((item) => (
                <li
                  key={item.path}
                  className={`text-md font-semibold text-[#fff] hover:text-[--button-color] $`}
                >
                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={!nav ? 'fixed right-0 top-0 w-[60%] h-full  border-r-gray-900 bg-[--primary-color] z-10 ease-in-out duration-500': 'fixed left-[-400%]'}>
        <ul className=' text-color grid items-center justify-center uppercase pt-24'>
         
          {navbar.map(({ name, path }, index) => (
            <li key={index} className='p-4'>
              <NavLink to={path} className='text-[#fff]'>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
