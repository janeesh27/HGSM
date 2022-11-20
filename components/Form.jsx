import React from "react";

const form = () => {
  return (
  <div id="form" className="bg-[grey]">
    <div className=" bg-gradient-to-b from-yellow-600 to-yellow-300 p-5 min-h-full w-80">
      <div className="flex justify-start items-start  ">
        <h1 className="uppercase text-4xl text-black">contact us</h1>
      </div>
      <div>
        <form>
          <div className="my-4 mx-auto">
            <p className="text-2xl">Name</p>
            <input type="text" className="w-60 my-2" />
            <p className="text-2xl">Class</p>
            <input type="text" className="w-60 my-2" />
            <p className="text-2xl">Mobile</p>
            <input type="text" className="w-60 my-2" />
            <p className="text-2xl">Email</p>
            <input type="text" className="w-60 my-2" />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default form;
