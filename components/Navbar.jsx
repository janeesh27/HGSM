import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed bg-white w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center h-full w-full px-2 2xl:px-16">
       <span> <Image src='/../public/media/Logo2.png' alt="/" width='100' height='70' />
        </span>
        <h2>MANDOLIA INSTITUTE</h2>
        <div>
        <ul className="">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
