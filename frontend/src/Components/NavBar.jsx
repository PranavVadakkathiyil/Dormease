import React from 'react'
import { SiHomebridge } from "react-icons/si";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoMdContact } from "react-icons/io";


const NavBar = () => {
  return (
    <nav>
      <div className="flex items-center justify-around p-3">
        <div className="flex items-center gap-1 cursor-pointer">
        <SiHomebridge className='text-5xl'/>
        <p className='text-3xl font-semibold '>Dormease</p>
        </div>
        <div className="flex gap-5 text-lg font-normal  ">
          <p className='cursor-pointer hover:bg-gray-100 p-2 rounded-full sm:block hidden'>HomeStay</p>
          <p className='cursor-pointer hover:bg-gray-100 p-2  rounded-full sm:block hidden'>Hostel</p>
          <p className='cursor-pointer hover:bg-gray-100 p-2 rounded-full sm:block hidden'>Pods</p>
        </div>
        <div className="flex items-center gap-2  p-3 cursor-pointer sm:border ">
        <MdOutlineAddHomeWork className='text-3xl transition ease-in-out delay-100  hover:-translate-y-1  duration-300 sm:block hidden'/>
        <p className='text-small font-normal sm:block hidden'>Add Your Property</p>
          
        </div>
        <div className="sm:flex hidden">
        <FaHeart  className='text-2xl cursor-pointer sm:block hidden'/>
        <p className='bg-black text-white text-[0.6rem] w-[14px] h-[14px] rounded-full grid place-items-center translate-y-[-5px] translate-x-[-1px]'>2</p>
        </div>
        <div className="sm:flex hidden">
        <FaBookmark className='text-2xl cursor-pointer sm:block hidden'/>
        <p className='bg-black text-white text-[0.6rem]  w-[14px] h-[14px] rounded-full grid place-items-center translate-y-[-5px] translate-x-[-3px] '>2</p>
        </div>
        <div className="flex gap-2 border p-3 rounded-full cursor-pointer transition ease-in-out delay-1  hover:-translate-y-1 hover:shadow-xl hover:shadow-black-500 duration-1">
        <TiThMenu className='text-2xl ' />
        <IoMdContact className='text-2xl ' />

        </div>
      </div>
      
    </nav>
  )
}

export default NavBar