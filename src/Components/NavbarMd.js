import React from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineClear } from "react-icons/md";
import { useState } from "react";
const NavbarMd = () => {
  const [openNav, setOpenNav] = useState(false);
  const openNavHandler = () => {
    setOpenNav((currentnav) => !currentnav);
  };
  return (
    <div className="flex justify-end text-center ">
      {openNav ? (
        <MdOutlineClear
          onClick={openNavHandler}
          className=" flex justify-end text-white  hover:text-orange-400 transition duration-100 ease-in-out text-[30px] cursor-pointer mt-[-30px] z-50 lg:hidden  mr-[-60px]"
        />
      ) : (
        < TiThMenuOutline
          onClick={openNavHandler}
          className="mt-[-5px] text-[20px] mt-[-35px] md:flex justify-end text-white  hover:text-orange-400 transition duration-100 ease-in-out text-[30px] cursor-pointer mt-[-60px] z-50 md:hidden  mr-[50px]"
        />
      )}

      {openNav && (
        <ul className=" md:absolute text-1xl text-white  px-[30px] font-semibold items-start bg-black/60 transition duration-700 ease-in-out backdrop-blur-[3px] lg:hidden relative z-20 cursor-pointer">
          <li className="text-white hover:text-orange-400 py-5">Albums</li>
          <li className="text-white hover:text-orange-400 py-5">Artists</li>
          <li className="text-white hover:text-orange-400 py-5">Genres</li>
          <li className="text-white hover:text-orange-400 py-5">Videos</li>
          <li className="text-white hover:text-orange-400 py-5">Bio</li>
          <li className="text-white hover:text-orange-400 py-5">Contact</li>
        </ul>
      )}
    </div>
  );
};

export default NavbarMd;
