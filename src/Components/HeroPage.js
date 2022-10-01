import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { TiThMenuOutline } from "react-icons/ti";
import {BsFacebook} from 'react-icons/bs'
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
    alert("Flixia is glad to meet you " + userNameInputState + " please wait");
    setUserNameInputState("");
    setUserEmailInputState("");
    setUserPasswordInputState("");
  };
  return (
    <div className="bg-hero-image bg-no-repeat bg-cover bg-bottom w-full h-[100vh]">
      <div className="flex text-[20px] items-center   justify-between  w-[100%]  bg-black/60 hover:bg-black/80 transition duration-700 ease-in-out backdrop-blur-[3px] pt-2 pb-5 ">
        <figure className="">
          <img
            src="Flixialogo.png"
            alt="Flixia"
            className="px-3 w-[190px] h-15  items-center mt-3  shadow-2xl  "
            data-aos="zoom-in-left"
            data-aos-duration="3000"
          />
        </figure>

        <TiThMenuOutline className="text-white  hover:text-orange-400 mr-[19%] transition duration-500 ease-in-out text-[40px] cursor-pointer  md:hidden" />

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
      <div className="flex flex-col pl-[60%] absolute  z-30">
        <button
          className="flex   border-2xl bg-orange-400 hover:bg-orange-500 hover:text-white transition duration-400 text-white pl-11 py-2 mr-11
          rounded-xl items-center text-base w-40 mt-[50px] ml-[10px] "
          onClick={openFormHandler}
        >
          {openForm ? "Close form" : "Login here"}
        </button>
        <div>
          {openForm && (
            <form
              onSubmit={buttonHandler}
              className="flex flex-col mt-2 bg-black/70 h-[60vh] pt-16 pl-11 px-[40px] rounded-2xl "
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

              <button className="flex   border-2xl bg-orange-400  hover:bg-orange-500 hover:text-white  transition duration-400 text-white pl-[50px] py-3   rounded-xl items-center text-base ml-[120px] w-40 mt-11 shadow-lg shadow-black">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
      <NavbarMd />
      <HeroItems className="relative" />
      <div className="bg-black/50 absolute mt-[-50px] w-full py-5 hover:bg-black hover:text-white  transition duration-700">
        <footer className="flex justify-center">
       <BsFacebook />
       <AiFillGoogleCircle />
        </footer>
      </div>
    </div>
  );
}

export default Hero;
