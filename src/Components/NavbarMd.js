import React from "react";
const NavbarMd = () => {
  return (
    <div className="flex justify-end text-center ">
      <ul className=" text-2xl text-white  px-[70px] font-semibold items-start bg-black/60 hover:bg-black/80 transition duration-700 ease-in-out backdrop-blur-[3px] md:hidden relative cursor-pointer">
        <li className="text-white hover:text-orange-400 py-5">Albums</li>
        <li className="text-white hover:text-orange-400 py-5">Artists</li>
        <li className="text-white hover:text-orange-400 py-5">Genres</li>
        <li className="text-white hover:text-orange-400 py-5">Videos</li>
        <li className="text-white hover:text-orange-400 py-5">Bio</li>
        <li className="text-white hover:text-orange-400 py-5">Contact</li>
      </ul>
    </div>
  );
};

export default NavbarMd;
