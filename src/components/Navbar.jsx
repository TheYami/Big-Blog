import React from 'react'
import logo from '.././assets/img/hh.png'
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <nav className='flex justify-between my-3 lg:my-4 mx-6 lg:mx-32'>
        <img src={logo} alt="logo image"  className='object-contain'/>
        <RxHamburgerMenu className='size-5 text-[#75716B] lg:hidden'/>

        <div className='hidden lg:flex gap-2'>
          <button 
            className='px-10 py-3 rounded-full border border-[#75716B] text-base font-[Poppins] font-medium leading-6'
              >Log in
          </button>

          <button 
            className='px-10 py-3 rounded-full border border-[#26231E] bg-[#26231E] text-white text-base font-[Poppins] font-medium leading-6'
              >Sign up
          </button>
        </div>
    </nav>
  )
}

export default Navbar