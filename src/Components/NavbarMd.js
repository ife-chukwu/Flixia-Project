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
        <div className="flex absolute mt-[-80%] ml-[150px] cursor-pointer text-4xl text-white justify-center md:hidden">
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
            className=" px-20 ml-[-25px]  z-50 bg-black/50  mt-[-70%] cursor-pointer absolute md:hidden"
            data-aos="fade-down"
            data-aos-duration="md:10000"
          >
            <li className="text-white text-lg  hover:text-orange-400 py-10 md:hidden">
              <a
                href="#categories"
                className="md:text-white md:hover:text-orange-400 scroll-smooth"
              >
                Albums
              </a>
            </li>
            <li className="text-white text-lg hover:text-orange-400 py-10 md:hidden">
              <a
                href="#artist-sec"
                className="md:text-white md:hover:text-orange-400 scroll-smooth"
              >
                Artists
              </a>
            </li>

            <li className="text-white text-lg hover:text-orange-400 py-10 md:hidden">
            <a
                href="#videos"
                className="md:text-white md:hover:text-orange-400 "
              >
                Videos
              </a>
            </li>
            <li className="text-white text-lg hover:text-orange-400 py-10 md:hidden">
              <a
                href="#contact"
                className="md:text-white md:hover:text-orange-400 "
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavbarMd;
