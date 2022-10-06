import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between shadow-text-3px items-center h-full w-full px-2 2xl:px-16">
        <h2>Mandolia Institute</h2>
        <div className="flex-initial">
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
