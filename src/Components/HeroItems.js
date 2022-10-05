import React from "react";

const HeroItems = () => {
  return (
      <div className="md:leading-[5rem]  bg-black/10 h-[100vh] backdrop-blur-[6px] flex flex-col  w-[95%]">
        <div
          className="jumbo-text "
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="3000"
        >
          <h1
            className=" jumbotron md: text-[4rem] font-extrabold 
      text-orange-400 text-shadow
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
          <p className="query-asw  md:leading-[18px]  md:text-[14px] pl-[55px] md:font-thin text-white">
            We are known as Flixia Streaming Music platform round the globe,
            <br /> we make absolute sure to bring the latest hit to our
            patronizers.
            <br /> We are rated highly among the rest of other Streaming
            platforms
          </p>
        </div>
      </div>
  );
};

export default HeroItems;
