import React, { useState } from 'react';
import logo from '../assets/img/hh.png';
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [openNavMenu, setOpenNavMenu] = useState(false);

  return (
    <nav className="bg-[#F9F8F6]">

      <div className="flex justify-between border-b border-[#DAD6D1] py-3 lg:py-4 px-6 lg:px-32 relative">

        <img src={logo} alt="logo" className="object-contain" />

        <RxHamburgerMenu
          className="size-5 text-[#75716B] lg:hidden cursor-pointer"
          onClick={() => {
            setOpenNavMenu(!openNavMenu);
          }}
        />

      <div className="hidden lg:flex gap-2">

        <button 
          className="px-10 py-3 rounded-full border border-[#75716B] transition-all duration-300 ease-in-out
                    text-base font-[Poppins] font-medium leading-6 hover:scale-105"
                    >
                      Log in
        </button>

        <button 
          className="px-10 py-3 rounded-full border border-[#26231E] bg-[#26231E] transition-all duration-300 ease-in-out
                     text-white text-base font-[Poppins] font-medium leading-6 hover:scale-105"
                    >
                      Sign up
        </button>
      </div>
      </div>

      <div 
        className={`lg:hidden w-full absolute flex flex-col py-10 px-6 gap-6 border-b bg-[#F9F8F6] 
                  shadow-xl transition-opacity duration-500 ease-in-out ${openNavMenu ? 'opacity-100' : 'opacity-0'}`
        }>

          <button 
            className="px-10 py-3 rounded-full border border-[#75716B] transition-all duration-300 ease-in-out
                        text-base font-[Poppins] font-medium leading-6 hover:scale-105"
                      >
                        Log in
          </button>

          <button 
            className="px-10 py-3 rounded-full border border-[#26231E] bg-[#26231E] transition-all duration-300 ease-in-out
                       text-white text-base font-[Poppins] font-medium leading-6 hover:scale-105"
                      >
                        Sign up
          </button>
      </div>
    </nav>
  );
}

export default Navbar;
