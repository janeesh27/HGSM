import React from "react";

const form = () => {
  return (
    <div className=" bg-[#ffff3d] ml-5 pl-4 min-h-full w-80">
      <div className="flex justify-start items-start  ">
        <h1 className="uppercase text-4xl text-black">contact us</h1>
      </div>
      <div>
        <form>
          <div className="my-4 mx-auto"><p>Name</p>
            <input type='text' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default form;
