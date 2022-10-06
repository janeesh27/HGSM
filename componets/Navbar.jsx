import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center h-full w-full px-2 2xl:px-16">
        <h2>Janeesh Pal Singh</h2>
      </div>
      <div>
        <ul>
          <Link href="/about">
            <li >About</li>
          </Link>
          <Link href="/skills">
            <li className="ml-10 text-sm hover:border-b">skills</li>
          </Link>
          <Link href="/projects">
            <li className="ml-10 text-sm hover:border-b">projects</li>
          </Link>
        </ul>
      </div>
    
    </div>

  );
};

export default Navbar;
