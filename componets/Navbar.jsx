import React from "react";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center h-full w-full px-2 2xl:px-16'>
      <Image src='/../public/media/Logo.gif' alt='/' width='140' height='70' />

      </div>
    </div>
  );
};

export default Navbar;
