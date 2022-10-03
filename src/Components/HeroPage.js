import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useState } from "react";
import NavbarMd from "./NavbarMd";
import HeroItems from "./HeroItems";

function Hero() {
  const [inputState, setInputState] = useState("");
  const [openForm, setFormOpen] = useState(false);
  const [userNameInputState, setUserNameInputState] = useState("");
  const [userEmailInputState, setUserEmailInputState] = useState("");
  const [userPasswordInputState, setUserPasswordInputState] = useState("");
  const openFormHandler = () => {
    setFormOpen((currentForm) => !currentForm);
  };

  const enteredUserNameInput = (e) => {
    setUserNameInputState(e.target.value);
  };
  const enteredUserEmailInput = (e) => {
    setUserEmailInputState(e.target.value);
  };
  const enteredUserPasswordInput = (e) => {
    setUserPasswordInputState(e.target.value);
  };

  const enteredInput = (e) => {
    setInputState(e.target.value);
  };

  const buttonHandler = (e) => {
    e.preventDefault();
    setInputState("");
    alert(inputState + "is processing");
    alert("Flixia is glad to meet you " + userNameInputState + " please wait");
    setUserNameInputState("");
    setUserEmailInputState("");
    setUserPasswordInputState("");
  };
  return (
    <div
      className=" xs:bg-hero-image bg-hero-image bg-no-repeat bg-cover h-[100%] bg-center w-full 
                     md:bg-hero-image md:bg-no-repeat md:bg-cover md:bg-bottom md:w-full md:h-[100vh]"
    >
      <div
        className="mobile-nav
      md:h-[80px] md:w-[100%] md:flex md:text-[20px] md:items-center   justify-between    bg-black/60 hover:bg-black/80 transition duration-700 ease-in-out backdrop-blur-[3px] pt-2 pb-5 "
      >
        <figure>
          <img
            src="Flixialogo.png"
            alt="Flixia"
            className="logo md:w-[190px] md:h-15 px-3 items-center md:mt-3  shadow-4xl"
            data-aos="zoom-in-left"
            data-aos-duration="3000"
          />
        </figure>

        <ul className=" hidden  md:flex flex-row text-white gap-5 px-9 pt-4 items-center font-normal text-base  cursor-pointer  ">
          <li
            className="text-white hover:text-orange-400"
            onClick={buttonHandler}
          >
            Albums
          </li>
          <li
            className="text-white hover:text-orange-400"
            onClick={buttonHandler}
          >
            Artists
          </li>
          <li
            className="text-white hover:text-orange-400"
            onClick={buttonHandler}
          >
            Genres
          </li>
          <li
            className="text-white hover:text-orange-400"
            onClick={buttonHandler}
          >
            Videos
          </li>
          <li
            className="text-white hover:text-orange-400"
            onClick={buttonHandler}
          >
            Bio
          </li>
          <li
            className="text-white hover:text-orange-400"
            onClick={buttonHandler}
          >
            Contact
          </li>

          <form onSubmit={buttonHandler} className="flex items-center ">
            <input
              type="text"
              placeholder="Search"
              onChange={enteredInput}
              value={inputState}
              className="relative py-1 px-3 shadow-lg outline-none text-center text-gray-800 rounded-l-xl"
            />
            <button className=" text-black/80 bg-orange-400 hover:bg-orange-600 transition duration-500 hover:text-white py-2 px-5  font-bold transition duration-500 ease-in-out rounded-r-xl">
              <HiOutlineSearch />
            </button>
          </form>
        </ul>
      </div>
      <div className=" pl-0  md:flex flex-col md:pl-[60%] absolute  z-30">
      <button
          className="button md:py-6 flex md:text-[16px] h-8 px-11 md:ml-[50px] md:w-40 md:flex border-2xl bg-orange-400 hover:bg-orange-500 hover:text-white transition duration-400 text-white pl-11 py-2 mr-11
          rounded-xl items-center text-base  mt-[50px] ml-[10px] "
          onClick={openFormHandler}
        >
          {openForm ? "Close form" : "Login here"}
        </button>
        <div>
          {openForm && (
            <form
              onSubmit={buttonHandler}
              className=" mobile-form bg-black/50"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <fieldset className="text-white border-2xl border-white tracking-wide mt-[-50px]">
                Please enter your login details{" "}
              </fieldset>
              <input
                required
                name="name"
                type="text"
                placeholder="Username"
                onChange={enteredUserNameInput}
                value={userNameInputState}
                className=" flex mb-[-15px] py-2 w-[400px]  outline-none rounded-2xl text-lg mt-[40px] p-4"
              />
              <input
                required
                name="email"
                type="email"
                onChange={enteredUserEmailInput}
                value={userEmailInputState}
                placeholder="Email"
                className=" flex mb-6 py-2 w-[400px]  outline-none rounded-2xl text-lg mt-[40px] p-4"
              />
              <input
                required
                name="password"
                type="password"
                onChange={enteredUserPasswordInput}
                value={userPasswordInputState}
                placeholder="Password"
                className=" w-[400px] py-2 outline-none  rounded-2xl text-lg p-4"
              />

              <button className="lg:flex border-2xl bg-orange-400  hover:bg-orange-500 hover:text-white  transition duration-400 text-white pl-[50px] py-3   rounded-xl items-center text-base ml-[120px] w-40 mt-11 shadow-lg shadow-black">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="flex">
        <HeroItems className="relative" />
        <NavbarMd />
      </div>
      <div className="bg-black/50 absolute mt-[25px] w-full  hover:bg-black  transition duration-700 text-orange-400">
        <div className="pt-3">
          <footer className="flex justify-center items-center gap-3 text-lg  cursor-pointer">
            <BsFacebook className="hover:text-white transition duration-700 text-lg" />
            <AiFillGoogleCircle className="hover:text-white transition duration-700 text-lg" />
            <AiFillInstagram className="hover:text-white transition duration-700 text-lg" />
            <AiFillTwitterCircle className="hover:text-white transition duration-700 text-lg" />
          </footer>
          <div className="flex flex-col justify-center mt-1 ml-[45%]">
            <p className="tracking-wide">
              We are music{" "}
              <span className="text-white hover:text-orange  transition duration-700">
                Music is us
              </span>
            </p>
            <p className="tracking-wide text-orange-400 hover:text-white transition duration-700 pb-3">
              Copyright @2021 FLIXIA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
