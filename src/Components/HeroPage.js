import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import NavbarMd from "./NavbarMd";
import HeroItems from "./HeroItems";
import { useState } from "react";

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
      className=" xs:bg-hero-image bg-hero-image bg-no-repeat bg-cover h-[100vh] bg-center w-full 
                     md:bg-hero-image md:bg-no-repeat md:bg-cover md:bg-bottom md:w-full md:h-[100%]"
    >
      <div
        className="mobile-nav
      md:h-[80px] md:w-[100%] md:flex md:text-[20px] md:items-center   justify-between    bg-black/60 hover:bg-black/80 transition duration-700 ease-in-out backdrop-blur-[3px] pt-2 pb-5 "
      >
        <figure>
          <img
            src="Flixialogo.png"
            alt="Flixia"
            className="logo md:w-[190px] md:h-10 px-3 items-center md:mt-3  shadow-4xl"
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
          className="button md:py-2 flex md:text-[16px]  px-15 md:ml-[50px] md:w-40 md:flex border-2xl bg-orange-400 hover:bg-orange-500 hover:text-white transition duration-400 text-white pl-11 py-2 mr-11
          rounded-xl items-center text-base  mt-[50px] ml-[10px] "
          onClick={openFormHandler}
        >
          {openForm ? "cancel" : "Login here"}
        </button>
        <div>
          {openForm && (
            <form
              onSubmit={buttonHandler}
              className="flex flex-col  mt-[14px] 1-[100%] px-[46px] bg-black/80 md:flex md:flex-col md:mt-2 md:bg-black/70 h-[60vh] pt-16 pl-11 md:px-[40px] md:rounded-2xl "
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <fieldset className="text-white w-[120px] md:text-white border-2xl border-white tracking-wide mt-[-50px]">
                Please enter your login details{" "}
              </fieldset>
              <input
                required
                name="name"
                type="text"
                placeholder="Username"
                onChange={enteredUserNameInput}
                value={userNameInputState}
                className=" flex w-[300px] py-1 text-sm rounded-md md:flex mb-[-15px] md:py-2 md:w-[400px]  outline-none md:rounded-2xl md:text-lg mt-[40px] p-4"
              />
              <input
                required
                name="email"
                type="email"
                onChange={enteredUserEmailInput}
                value={userEmailInputState}
                placeholder="Email"
                className="flex w-[300px] py-1 text-sm rounded-md md: md:flex mb-6 md:py-2 md:w-[400px]  outline-none md:rounded-2xl md:text-lg mt-[40px] p-4"
              />
              <input
                required
                name="password"
                type="password"
                onChange={enteredUserPasswordInput}
                value={userPasswordInputState}
                placeholder="Password"
                className="flex w-[300px] py-1 text-sm rounded-md  md:w-[400px] md:py-2 outline-none  md:rounded-2xl md:text-lg p-4"
              />

              <button className="submit-btn flex 
               md:flex border-2xl bg-orange-400  hover:bg-orange-500 hover:text-white  transition duration-400 text-white md:pl-[50px] md:py-3   md:rounded-xl text-center text-base md:ml-[120px] md:w-40 md:mt-11 shadow-lg shadow-black">
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
    </div>
  );
}

export default Hero;
