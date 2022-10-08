import React from "react";

const HeroItems = () => {
  return (
    <div className="bg-black/10 w-[100%] h-[100%]  mt-[-6px]  md:leading-[5rem]   md:bg-black/10 md:h-[100%]  flex flex-col backdrop-blur-sm  md:w-[100%] ">
      <div
        className="flex items-start "
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="3000"
        
      >
        <h1
          className=" ml-5 mb-40 text-[4rem] w-[100%]  md:text-[7rem] font-extrabold 
      text-orange-400 text-shadow
       pt-2   mt-40 md:ml-20 flex  flex-col items-start"
        >
          {" "}
          FLIXIA
          <span className=" text-[4rem] leading-[4rem] text-white md:text-[7rem] md:text-white block font-extrabold   md:leading-[9rem]">
            GLOBAL{" "}
          </span>{" "}
          STREAMS
        </h1>
      </div>
      
    </div>
  );
};

export default HeroItems;

      <div className="py-5  w-[400px] md:mt-10 rounded-l-none md:ml-[40px] bg-black/30 md:w-[42%] backdrop-blur-3xl md:px-2 rounded-3xl md:py-10">
        <h1 className=" query md:text-shadow text-white flex   text-[2rem] font-bold pl-[55px] leading-9">
          Who Are We?
        </h1>
        <p className="text-xl leading-[15px] pr-10 md:leading-[18px]  md:text-[14px] pl-[55px] md:font-thin text-white">
          We are known as Flixia Streaming Music platform round the globe,
          <br /> we make absolute sure to bring the latest hit to our
          patronizers.
          <br /> We are rated highly among the rest of other Streaming platforms
        </p>
      </div>