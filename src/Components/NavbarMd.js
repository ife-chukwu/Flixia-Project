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
    <div>
      <div className=" flex ml-[-150px] text-center py-[100px] relative md:hidden ">
        <div className="flex mt-[-78%] ml-[130px] cursor-pointer text-4xl text-white justify-center">
          {openNav ? (
            <MdOutlineClear
              onClick={openNavHandler}
              className=" z-50 hover:text-orange-400 mt-[-20px] ml-[-45px]   md:hidden  "
            />
          ) : (
            <TiThMenuOutline
              onClick={openNavHandler}
              className="z-50   hover:text-orange-400 mt-[-20px] ml-[-45px] md:hidden"
            />
          )}
        </div>

        {openNav && (
          <ul
            className=" px-20 ml-[-13px]  z-50 bg-black/50  mt-[-67%] cursor-pointer absolute md:hidden"

            data-aos="fade-down"
            data-aos-duration="md:10000"
          >
            <li className="text-white text-lg hover:text-orange-400 py-10">Albums</li>
            <li className="text-white text-lg hover:text-orange-400 py-10">Artists</li>
            <li className="text-white text-lg hover:text-orange-400 py-10">Category</li>
            <li className="text-white text-lg hover:text-orange-400 py-10">Videos</li>
            <li className="text-white text-lg hover:text-orange-400 py-10">Contact</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavbarMd;
