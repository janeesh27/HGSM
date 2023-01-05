import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-3xl font-semibold mb-8">About Us</p>
          <p>
            HGS Mandolia Coaching Centre founded in year 2002 by Prof. Haqeeqat
            Singh Ishar serves as best coaching in twin districts of Rajouri &
            Poonch for more than two decades.The best educational institutes are
            those that provide students with a well-rounded and high quality
            education. They should have knowledgeable and experienced teachers,
            a variety of academic programs and extracurricular activities, and a
            strong support system for students.Here at HGSM we have a proven
            track record of helping students succeed academically and in their
            future endeavors.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-300">
          <Image src="/media/bg.jpg" alt="Reload" height="500" width="800" />
        </div>
      </div>
    </div>
  );
};

export default About;
