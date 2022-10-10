import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className="max-w-[1240px] w-full h-full p-2 mx-auto flex justify-center items-center">
         <div>
        <p className="text-sm tracking-widest font-semibold">
        Serving excellence since 2002...
         </p>
         <h1 className="uppercase">hgs <span className='text-[#a1982e]'>mandolia</span></h1>
         <h3>Rajouri's No.1 Honest Institute</h3>
         <div>
          <button className="mt-7 p-3 text-[black] font-semibold bg-gradient-to-r from-yellow-600 to-yellow-300">book a demo session</button>
         </div>
            </div>

         </div>       
    </div>
  );
};

export default Main;
