import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed bg-white w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center order-1 h-full w-full px-2 2xl:px-16">
        <a href="/#main"><Image
          src="/../public/media/Logo2.png"
          alt="/"
          width="100"
          height="70"
        /></a>

        <div>
          <ul className="hidden md:flex">
            <Link href="/#about">
              <li className="ml-10 text-2xl hover:border-b">About us</li>
            </Link>
            <Link href="/#gallery">
              <li className="ml-10 text-2xl hover:border-b">gallery</li>
            </Link>
            <Link href="/#form">
              <li className="ml-10 text-2xl hover:border-b">contact us</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={35} />
          </div>
          <div
            className={
              nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50" : ""
            }
          >
            <div
              className={
                nav
                  ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
                  : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
              }
            >
              <div>
                <div className="flex w-full items-center justify-between">
                  <Image
                    src="/../public/media/Logo2.png"
                    alt="reload"
                    width="100"
                    height="70"
                  />
                  <div
                    onClick={handleNav}
                    className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
                <div className="border-b border-yellow-400 my-4 font-semibold">
                  <p>Make your future with us..</p>
                </div>
                <div className="py-4 flex flex-col">
                  <ul>
                    <Link href="/#main">
                      <li className="py-4 text-sm">home</li>
                    </Link>
                    <Link href="/#about">
                      <li className="py-4 text-sm">about us</li>
                    </Link>
                    <Link href="/#gallery">
                      <li className="py-4 text-sm">gallery</li>
                    </Link>
                    <Link href="/#form">
                      <li className="py-4 text-sm">contact us</li>
                    </Link>
                  </ul>
                </div>
                <div className="flex space-x-5">
                  <Link href="https://www.instagram.com/mandoliacoachingcentre/">
                    <AiFillInstagram size={40} color="magenta" />
                  </Link>
                  <Link href="https://www.facebook.com/rajourimandoliaF">
                    <AiFillFacebook size={40} color="blue" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
