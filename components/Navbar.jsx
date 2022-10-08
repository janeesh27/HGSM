import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed bg-white w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center h-full w-full px-2 2xl:px-16">
        <Image src='/../public/media/Logo1.png' alt="/" width='120' height='60' />
        <h2>MANDOLIA INSTITUTE</h2>
        <div>
        <ul>
            <Link href="/aboutus">
              <li className="ml-10 text-3xl hover:border-b">About us</li>
            </Link>
            <Link href="/gallery">
              <li className="ml-10 text-3xl hover:border-b">gallery</li>
            </Link>
            <Link href="/contactus">
              <li className="ml-10 text-3xl hover:border-b">contact us</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
