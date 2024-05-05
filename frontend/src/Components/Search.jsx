import React, { useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";

import { IoLocation } from "react-icons/io5";

const Search = () => {
  
  
  return (
    <div>
      <div className="main">
        <div className="flex  justify-around items-center p-3 ">
          <div className=" sm:block hidden  border  p-3 items-center gap-2 bg-black rounded-full text-white">
            <IoLocation className="text-2xl cursor-pointer" />
          </div>
          <div className=" w-[800px]  flex h-[50px]  gap-3 rounded-full pr-4 border hover:shadow-xl hover:shadow-slate-300">
            <input
              type="text"
              name=""
              id=""
              placeholder="Malppuram,Kerala,India"
              className=" w-full rounded-full outline-none pl-6"
              
            />
            <button>
              <FaLocationCrosshairs className="text-2xl" />
            </button>
          </div>
          <div className="sm:block hidden border  p-2 items-center  bg-black rounded-full text-white">
            <BiSolidOffer className="text-2xl cursor-pointer" />
            
          </div>
          <div className=" border sm:block hidden p-2 items-center bg-black rounded-full text-white cursor-pointer">
          <IoMdCall className="text-2xl sm:block hidden" />
          </div>
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default Search;
