import React from "react";
import Link from "next/link";
import Image from "next/image";
import {AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="fixed bg-white w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center h-full w-full px-2 2xl:px-16">
      <Image src='/../public/media/Logo2.png' alt="/" width='100' height='70' />
        
       
        <div > 
        <ul className="hidden md:flex">
            <Link href="/aboutus">
              <li className="ml-10 text-2xl hover:border-b">About us</li>
            </Link>
            <Link href="/gallery">
              <li className="ml-10 text-2xl hover:border-b">gallery</li>
            </Link>
            <Link href="/contactus">
              <li className="ml-10 text-2xl hover:border-b">contact us</li>
            </Link>
            </ul>
           <div className="md:hidden"><AiOutlineMenu size={35} /></div>
         
        </div>
      </div>

      
    </div>
  );
};

export default Navbar;
