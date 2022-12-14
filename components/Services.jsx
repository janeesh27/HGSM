import React from "react";
import Image from "next/image";
const Services = () => {
  return (
    <div id="services" className="w-full lg:h-screen p-2">   {/* background image not working */}
      <div className="max-w-[1240px] mx-auto flex flex-col text-center h-full">
        <h1 className="text-yellow-500 mb-20">We Offer</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
       
       
        <div className="p-6 pl-6 shadow-xl rounded-md hover:scale-105 ease-in duration-300">
            <div >
              <div className="m-auto">
                <Image 
                  src="/media/cbse.png"
                  alt="/"
                  width="100px"
                  height="100px"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>Boards Preparations</h3>
                </div>
              </div>
            </div>
        </div>
        
         
        <div className="p-6 shadow-xl rounded-md hover:scale-105 ease-in duration-300">
            {/* <div > */}
              <div className="m-auto">
                <Image
                  src="/media/jeemains.png"
                  alt="/"
                  width="100px"
                  height="100px"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>JEE Mains</h3>
                </div>
              </div>
            
        </div>
        

 
        <div className="p-6 shadow-xl rounded-md hover:scale-105 ease-in duration-300">
            <div >
              <div className="m-auto">
                <Image
                  src="/media/neet.jpg"
                  alt="/"
                  width="100px"
                  height="100px"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>NEET UG</h3>
                </div>
              </div>
            </div>
        </div>
        
 
        <div className="p-6 shadow-xl rounded-md hover:scale-105 ease-in duration-300">
            <div >
              <div className="m-auto">
                <Image
                  src="/media/overall.jpg"
                  alt="/"
                  width="100px"
                  height="100px"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>Overall Devlopment</h3>
                </div>
              </div>
            </div>
        </div>
        

 
        <div className="p-6 shadow-xl rounded-md hover:scale-105 ease-in duration-300">
            <div >
              <div className="m-auto">
                <Image
                  src="/media/testseries.jpg"
                  alt="/"
                  width="100px"
                  height="100px"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>Regular Tests</h3>
                </div>
              </div>
            </div>
        </div>
        
         
        <div className="p-6 shadow-xl rounded-md hover:scale-105 ease-in duration-300">
            <div >
              <div className="m-auto">
                <Image
                  src="/media/notes.jpg"
                  alt="/"
                  width="100px"
                  height="100px"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>Personalized Notes</h3>
                </div>
              </div>
            </div>
        </div>
        
         
        <div className="p-6 shadow-xl rounded-md hover:scale-105 ease-in duration-300">
            <div >
              <div className="m-auto">
                <Image
                  src="/media/attention.png"
                  alt="/"
                  width="100px"
                  height="100px"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>Individual Attention</h3>
                </div>
              </div>
            </div>
        </div>
        
         
        <div className="p-6 shadow-xl rounded-md hover:scale-105 ease-in duration-300">
            <div >
              <div className="m-auto">
                <Image
                  src="/media/faculty.png"
                  alt="/"
                  width="100px"
                  height="100px"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>Experienced Faculty</h3>
                </div>
              </div>
            </div>
        </div>
        

        </div>
      </div>
    </div>
  );
};

export default Services;
