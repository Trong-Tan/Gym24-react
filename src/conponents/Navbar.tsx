import { useState } from 'react';
import logo from '../assets/images/logo.png';
import hbg from "../assets/svgs/hamburger.svg"

export default function Navbar() {
  const [isTG,setisTG] = useState(false)
   const handleToggle = () =>{
    setisTG(isTG  => !isTG)
   }
  return (
    <div className="relative ">
      <div className="mt-[60px] mb-[90px]  text-[24px] font-normal font-[400]  text-[#FFF] grid grid-rows-1 grid-cols-2 relative ">
        <img src={logo} alt="" className='p-1.5'/>
        <div className="hidden lg:block">
        <ul className='option-navbar ml-auto  grid grid-flow-col gap-4.5 '>
            <li className='text-[12px] font-normal font-[300] '>Advantages</li>
            <li className='text-[12px] font-normal font-[300] '>Membership</li>
            <li className='text-[12px] font-normal font-[300] '>About</li>
            <li className='text-[12px] font-normal font-[300] '>Trainer</li>
        </ul>
        </div>
        <div className="ml-auto mr-4 block lg:hidden cursor-pointer">
          <img src={hbg} onClick={handleToggle} alt="" />
        </div>
      </div>
      <div className="absolute -z-10 top-[0] left-[130px] lg:top-[-200px] lg:left-[400px] trainer-image">
        <img src="../src/assets/images/person-header.jpg " alt="" />
      </div>
    </div>
  );
}

