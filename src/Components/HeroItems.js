import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const HeroItems = () => {
  return (
    <div className="md:text-white leading-[5rem] bg-black/10 h-[100vh] backdrop-blur-[6px]   w-screen">
      <div
        className="jumbo-text "
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="3000"
      >
        <h1
          className=" jumbotron md:text-shadow text-[4rem] font-extrabold 
      text-orange-400 
       pt-2  px-12 mt-11"
        >
          {" "}
          FLIXIA
          <span className=" Jumbotron-span md:text-[4rem] md:text-white block font-extrabold   leading-[4rem]">
            GLOBAL{" "}
          </span>{" "}
          STREAMS
        </h1>
      </div>
      <div className="mt-5">
        <h1 className=" query md:text-shadow text-white flex   text-[2rem] font-bold pl-[55px] leading-9">
          Who Are We?
        </h1>
        <p className="query-asw  md:leading-[18px]  md:text-[14px] pl-[55px] md:font-thin">
          We are known as Flixia Streaming Music platform round the globe,
          <br /> we make absolute sure to bring the latest hit to our
          patronizers.
          <br /> We are rated highly among the rest of other Streaming platforms
        </p>
      </div>

      <div className="footer md:bg-black flex items-end w-full justify-center hover:bg-black  transition duration-700 text-orange-400 md:first-letter:mt-[13%] md:h-[80px] leading-3">
        <div className="pt-3 text-center">
          <footer className="footer-icon  md:flex justify-center items-center gap-3 md:text-lg  cursor-pointer md:pb-2">
            <BsFacebook className="icon md:hover:text-white md:transition md:duration-700 text-lg" />
            <AiFillGoogleCircle className="icon md:hover:text-white md:transition md:duration-700 text-lg" />
            <AiFillInstagram className=" icon md:hover:text-white md:transition md:duration-700 text-lg" />
            <AiFillTwitterCircle className=" icon placeholder:md:hover:text-white md:transition md:duration-700 text-lg" />
          </footer>
          <p className="footer-text md:tracking-wide md:pb-2">
            We are music{" "}
            <span className="text-white hover:text-orange  transition duration-700">
              Music is us
            </span>
          </p>
          <p className=" footer-text md:pb-3">
            Copyright @2021 FLIXIA
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroItems;
