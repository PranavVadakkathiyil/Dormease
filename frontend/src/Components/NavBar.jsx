import React, { useContext, useState } from "react";
import { SiHomebridge } from "react-icons/si";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoMdContact } from "react-icons/io";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import SummaryApi from "../common";
import { FaRegCircleUser } from "react-icons/fa6";
import ROLE from "../common/role";
import Context from "../context";

const NavBar = () => {
  const [menuDisplay, setMenuDisplay] = useState(true);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  //const context = useContext(context)
  console.log(menuDisplay);
  const user = useSelector((state) => state?.user?.user);
  //console.log("userHeader",user.user.user)
  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });
    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      Navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  console.log("user?.name", user?.name);
  console.log("count", Context?.cartProductCount);
  return (
    <nav>
      <div className="flex items-center justify-around p-3 ">
        <Link to="/">
          <div className="flex items-center gap-1 cursor-pointer">
            <SiHomebridge className="text-5xl" />
            <p className="text-3xl font-semibold ">Dormease</p>
          </div>
        </Link>
        <div className="flex gap-5 text-lg font-normal  ">
          <p className="cursor-pointer hover:bg-gray-100 p-2 rounded-full sm:block hidden">
            HomeStay
          </p>
          <p className="cursor-pointer hover:bg-gray-100 p-2  rounded-full sm:block hidden">
            Hostel
          </p>
          <p className="cursor-pointer hover:bg-gray-100 p-2 rounded-full sm:block hidden">
            Pods
          </p>
        </div>
        {user?.role === ROLE.ADMIN ? (
          <div></div>
        ) : (
          <div className="">
            <Link to="/addproperty" className="flex items-center gap-2  p-3 cursor-pointer sm:border ">
              <MdOutlineAddHomeWork className="text-3xl transition ease-in-out delay-100  hover:-translate-y-1  duration-300 sm:block hidden" />
              <p className="text-small font-normal sm:block hidden">
                Add Your Property
              </p>
            </Link>
          </div>
        )}
        {/*<div className="flex items-center gap-2  p-3 cursor-pointer sm:border ">
          <MdOutlineAddHomeWork className="text-3xl transition ease-in-out delay-100  hover:-translate-y-1  duration-300 sm:block hidden" />
          <p className="text-small font-normal sm:block hidden">
            Add Your Property
          </p>
        </div>*/}

        <Link to="/cart">
          <div className="sm:flex hidden">
            <div className="sm:flex hidden">
              <button className="text-1xl cursor-pointer sm:block hidden border-2 p-2 rounded-full hover:text-white hover:bg-black">
                View Selected
              </button>
            </div>
          </div>
        </Link>
        <div className="relative flex justify-center">
          <div className=" cursor-pointer ">
            {user?._id && (
              <div
                className=" cursor-pointer relative flex justify-center"
                //onClick={() => setMenuDisplay((preve) => !preve)}
              >
                <button onClick={() => setMenuDisplay((preve) => !preve)}>
                  {user?.name}
                </button>
              </div>
            )}
          </div>

          {menuDisplay && (
            <div className="absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded">
              <nav>
                {user?.role === ROLE.ADMIN && (
                  <Link
                    to={"/admin-pannel"}
                    className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2  "
                    onClick={() => setMenuDisplay((preve) => !preve)}
                  >
                    Admin Panel
                  </Link>
                )}
              </nav>
            </div>
          )}
        </div>
        <div>
          {user?._id ? (
            <button
              onClick={handleLogout}
              className="text-sm font-medium border p-3 rounded-full cursor-pointer transition ease-in-out delay-1  hover:-translate-y-1 hover:shadow-xl hover:shadow-black-500 duration-1"
            >
              Logout
            </button>
          ) : (
            <Link to="/Login">
              <div className="flex gap-2 border p-3 rounded-full cursor-pointer transition ease-in-out delay-1  hover:-translate-y-1 hover:shadow-xl hover:shadow-black-500 duration-1">
                <TiThMenu className="text-2xl " />

                <IoMdContact className="text-2xl " />
              </div>
            </Link>
          )}
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default NavBar;
