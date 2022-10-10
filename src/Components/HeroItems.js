import React from "react";

const HeroItems = () => {
  return (
    <div className="bg-black/10 flex-col relative flex w-[100%] h-[100%] mt-[-6px] backdrop-blur-sm md:leading-[5rem]   md:bg-black/10 md:h-[100%]  md:mt-[-45px] md:flex md:flex-col md:backdrop-blur-sm  md:w-[100%]">
      <div
        className="flex items-start "
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="3000"
      >
        <h1
          className=" mt-40  ml-5 flex  mb-5 flex-col  text-[4rem] w-[100%]  md:text-[7rem] font-extrabold 
      text-orange-400 text-shadow
          md:mt-40 md:ml-20 md:flex md:mb-5  md:flex-col"
        >
          {" "}
          FLIXIA
          <span className=" text-[4rem] leading-[4rem] text-white md:text-[7rem] md:text-white font-extrabold   md:leading-[9rem]">
            GLOBAL{" "}
          </span>{" "}
          STREAMS
        </h1>
      </div>
      <div className="pb-10 ml-[-30px] w-[400px]  md:ml-[9px]   md:w-[42%] md:px-2  md:pb-10">
        <h1 className="text-white font-bold text-3xl pb-2 ml-[55px] md:text-white md:ml-[55px]   md:text-[2rem]  md:font-bold md:pb-2">
          Who Are We?
        </h1>
        <p className="text-md w-96 text-white leading-[14px] pl-[55px] md:leading-[15px]  md:text-[13px] md:pl-[55px] md:text-white md:w-[400px]">
          We are known as Flixia Streaming Music platform round the globe,
          <br /> we make absolute sure to bring the latest hit to our
          patronizers.
          <br /> We are rated highly among the rest of other Streaming platforms
        </p>
      </div>
    </div>
  );
};

export default HeroItems;
