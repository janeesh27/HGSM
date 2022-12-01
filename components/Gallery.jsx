import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <div id="gallery" className="text-center tracking-wider m-8 uppercase">
        <h1>Gallery</h1>
      </div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {/* Images will go here */}
          <Image
            src="/gallery/5.jpg"
            width="500"
            height="500"
            alt="main buliding"
          />
          <Image
            src="/gallery/1.jpg"
            width="500"
            height="500"
            alt="main buliding"
          />
          <Image
            src="/gallery/3.jpg"
            width="500"
            height="500"
            alt="main buliding"
          />
          <Image
            src="/gallery/8.jpg"
            width="500"
            height="500"
            alt="main buliding"
          />
          <Image
            src="/gallery/5.jpg"
            width="500"
            height="500"
            alt="main buliding"
          />
          <Image
            src="/gallery/6.jpg"
            width="500"
            height="500"
            alt="main"
          />
          <Image
            src="/gallery/7.jpg"
            width="500"
            height="500"
            alt="main buliding"
          />
          <Image
            src="/gallery/8.jpg"
            width="500"
            height="500"
            alt="main buliding"
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
