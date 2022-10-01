import React from "react";

const HeroItems = () => {
  return (
    <div className=" text-white leading-[5rem]  py-[2rem] bg-black/10 backdrop-blur-[3px] h-[85vh] relative">
      <div className="flex " data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="3000"
     >
        
        <h1
          className=" text-shadow text-[4rem] font-extrabold 
      text-orange-400 rounded-lg bg-black/0 backdrop-blur-[5px]
       pt-2 pb-11  px-12 w-[50%]"
        >
          {" "}
          FLIXIA
          <span className="block font-extrabold text-white text-[4rem]">
            GLOBAL{" "}
          </span>{" "}
          STREAMS
        </h1>
      </div>
      <div className=" bg-black/20 backdrop-blur-[5px] w-[50%] py-10">
        <h1 className="text-shadow text-white flex   text-[2rem] font-bold pl-[55px] leading-9">
          Who Are We?
        </h1>
        <p className="leading-[18px]  text-[14px] pl-[55px] font-thin">
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
