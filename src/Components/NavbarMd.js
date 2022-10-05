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
      <div className=" flex ml-[-180px] text-center py-[100px] md:hidden ">
        <div className="flex justify-center">
          {openNav ? (
            <MdOutlineClear
              onClick={openNavHandler}
              className=" toggler-cancel z-50 md:hidden"
            />
          ) : (
            <TiThMenuOutline
              onClick={openNavHandler}
              className="toggler z-50 md:hidden"
            />
          )}
        </div>

        {openNav && (
          <ul
            className=" side-nav z-50 bg-black/60 md:hidden"

            data-aos="fade-down"
            data-aos-duration="md:10000"
          >
            <li className="text-white hover:text-orange-400 py-5">Albums</li>
            <li className="text-white hover:text-orange-400 py-5">Artists</li>
            <li className="text-white hover:text-orange-400 py-5">Category</li>
            <li className="text-white hover:text-orange-400 py-5">Videos</li>
            <li className="text-white hover:text-orange-400 py-5">Contact</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavbarMd;
