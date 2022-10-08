import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
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
    alert("flixia feels lovely to have you here " + userNameInputState);
    setUserNameInputState("");
    setUserEmailInputState("");
    setUserPasswordInputState("");
  };
  return (
    <div>
      <div className="  bg-hero-image bg-no-repeat bg-cover h-[100%] bg-center w-full md: md:bg-no-repeat md:bg-cover md:bg-bottom md:w-[100%] md:h-[100%] relative">
        <div
          className="h-[40px] w-full flex  text-[15px] 
      md:h-[60px] md:w-[100%] md:flex md:text-[20px] md:items-center   justify-between    bg-black/60 hover:bg-black/80 transition duration-700 ease-in-out backdrop-blur-[3px] pb-3  "
        >
          <figure>
            <img
              src="Flixialogo.png"
              alt="Flixia"
              className="w-[140px] h-11 mt-1 md:w-[190px] md:h-15 px-3 items-center md:mt-3 object-fit shadow-4xl"
              data-aos="zoom-in-left"
              data-aos-duration="3000"
            />
          </figure>

          <ul className=" hidden  md:flex flex-row text-white gap-5 px-9 pt-4 items-center font-normal text-lg  cursor-pointer  ">
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
            <li>
              <a
                href="#categories"
                className="text-white hover:text-orange-400 scroll-smooth"
              >
                Category
              </a>
            </li>

            <li
              className="text-white hover:text-orange-400"
              onClick={buttonHandler}
            >
              Videos
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-orange-400 scroll-smooth"
              >
                Contact
              </a>
            </li>

            <form onSubmit={buttonHandler} className="flex items-center ">
              <input
                type="text"
                placeholder="Search"
                onChange={enteredInput}
                value={inputState}
                className="relative py-2 px-3 shadow-lg outline-none text-center text-gray-800 rounded-l-xl"
              />
              <button className=" text-black/80 bg-orange-400 hover:bg-orange-600 transition duration-500 hover:text-white py-[10.2px] px-5  font-bold  ease-in-out rounded-r-xl">
                <HiOutlineSearch />
              </button>
            </form>
          </ul>
        </div>
    
      
      <div className=" pl-0  md:flex flex-col md:   z-30">
        <button
          className="flex py-1 text-lg item- w-[105px] px-[12px] ml-[315px] mt-[-38px] rounded-sm  sm:ml-[460px] md:py-3  md:text-[16px]  md:ml-[75%]  md:flex border-2xl bg-orange-400 hover:bg-orange-500 hover:text-white transition duration-400 text-white md:pl-11  
          md:rounded-xl items-center absolute z-30 md:text-xl md:w-[140px]  md:mt-[20px]  "
          onClick={openFormHandler}
        >
          {openForm ? "cancel" : "Login here"}
        </button>
        <div>
          <div className="w-full mt-2 flex justify-center">
            {openForm && (
              <form
                onSubmit={buttonHandler}
                className="px-20 bg-black/90 rounded-2xl absolute ml-4 z-30 md:flex md:flex-col md:mt-4 md:bg-black/70 h-[65vh] md:ml-[140px] pl-11 md:px-[60px] md:rounded-2xl "
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <fieldset className="text-white w-[120px] ml-3 md:text-white border-2xl border-white tracking-wide md:w-[100%] mt-[50px]">
                  Please enter your login details{" "}
                </fieldset>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Username"
                  onChange={enteredUserNameInput}
                  value={userNameInputState}
                  className=" flex w-[300px] py-3 text-sm rounded-md ml-3 md:flex mb-[-15px] md:py-3 md:w-[400px]  outline-none md:rounded-2xl md:text-lg mt-[40px] p-4"
                />
                <input
                  required
                  name="email"
                  type="email"
                  onChange={enteredUserEmailInput}
                  value={userEmailInputState}
                  placeholder="Email"
                  className="flex w-[300px] py-3 text-sm rounded-md ml-3 md:flex mb-6 md:py-3 md:w-[400px]  outline-none md:rounded-2xl md:text-lg mt-[40px] p-4"
                />
                <input
                  required
                  name="password"
                  type="password"
                  onChange={enteredUserPasswordInput}
                  value={userPasswordInputState}
                  placeholder="Password"
                  className="flex w-[300px] py-3 text-sm rounded-md ml-3 md:w-[400px] md:py-3 outline-none  md:rounded-2xl md:text-lg p-4"
                />

                <button
                  className=" flex ml-[75px] mt-10 px-20 py-3 rounded-xl
               md:flex bg-orange-400  hover:bg-orange-500 hover:text-white  transition duration-400 text-white md:pl-[60px] md:py-3   md:rounded-xl text-center text-xl md:ml-[105px] md:w-60 md:mt-20 shadow-lg shadow-black"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="flex">
          <HeroItems className="absolute" />
          <NavbarMd />
        </div>
      </div>
      </div>
      <div id="categories" className="items-center bg-black/90">
        <h1 className="flex text-4xl pt-5 items-center uppercase font-extrabold justify-center text-white md:text-5xl md:pt-10 pb-[-100px]">
          Cate<span className="text-orange-400">gories</span>
        </h1>
        <div className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth w-full h-full flex px-10 py-10 gap-14 scroll-hidden">
          <img
            src="https://media.istockphoto.com/photos/guy-plays-guitar-girl-sings-african-american-man-with-white-girl-in-picture-id1328815944?b=1&k=20&m=1328815944&s=170667a&w=0&h=bHg3xyisEkJdRYCgHwe0a5jj4mJb6FQVxAW8KjFh70s="
            className=" w-[60%] h-[200px] rounded-2xl md:rounded-3xl md:w-[35%] md:h-[300px] relative placeholder:hello cursor-pointer"
            alt=""
          />
          <img
            src="https://media.istockphoto.com/photos/portrait-of-young-man-at-home-listening-to-the-vinyl-records-relaxing-picture-id946817228?b=1&k=20&m=946817228&s=170667a&w=0&h=Z3dklZ9iYLWYstsesCVRqt0nvxyll1eRCZegQmf3Tas="
            className="w-[60%] h-[200px] rounded-2xl  md:rounded-3xl md:w-[35%] md:h-[300px] hover:scale-100 relative placeholder:hello cursor-pointer"
            alt=""
          />
          <figcaption className="text-white  absolute overscroll-none">
            Band
          </figcaption>
          <img
            src="https://images.unsplash.com/photo-1520170975578-25bd5217bf3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBnZW5yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            className="w-[60%] h-[200px] rounded-2xl  md:rounded-3xl md:w-[35%] md:h-[300px] hover:scale-100 relative placeholder:hello cursor-pointer"
            alt=""
          />
          <figcaption className="text-white  absolute overscroll-none">
            Band
          </figcaption>

          <img
            src="https://images.unsplash.com/photo-1505964135045-cdada2f6bf43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFwJTIwbXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60 "
            alt=""
            className="w-[60%] h-[200px] rounded-2xl  md:rounded-3xl md:w-[35%] md:h-[300px] cursor-pointer"
          />
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bXVzaWMlMjBnZW5yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
            alt=""
            className="w-[60%] h-[200px] rounded-2xl  md:rounded-3xl md:w-[35%] md:h-[300px] cursor-pointer"
          />
          <img
            src="https://images.unsplash.com/photo-1445985543470-41fba5c3144a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljJTIwZ2VucmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            alt=""
            className="w-[60%] h-[200px] rounded-2xl  md:rounded-3xl md:w-[35%] md:h-[300px] cursor-pointer"
          />
          <img
            src="https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt=""
            className="w-[60%] h-[200px] rounded-2xl  md:rounded-3xl md:w-[35%] md:h-[300px]"
          />
        </div>
        <figure className="opacity-90 backdrop-blur-8xl">
          <img
            src="https://media.istockphoto.com/photos/happy-woman-wearing-headphones-outdoor-picture-id1401333246?b=1&k=20&m=1401333246&s=170667a&w=0&h=FXCiQlhHqZgawF18gClhHlrdeAQM0LT65yBipPXfA_4="
            alt="Flixia"
            className="object-cover h-[250px] md:flex  flex-reverse w-full md:h-[400px] md:object-fit"
          />
        </figure>
        <div id="contact" className="flex items-center justify-between px-5">
          <div className="flex flex-col mb-5">
            <p className="text-white tracking-widest text-xl mb-2 md:text-white pl-6 md:text-lg py-10">
              Contact Us:
            </p>
            <p className="text-white tracking-widest text-xl md:text-white pl-6 md:text-lg mt-[-40px]">
              08057480210
            </p>
          </div>
          <figure>
            <img
              src="Flixialogo.png"
              alt="Flixia"
              className="w-[110px] md:w-[190px] md:h-10 px-3 items-center md:mt-3 "
            />
          </figure>
        </div>
      </div>

      <div className="h-[60px]  bg-black md:bg-black flex items-end w-full justify-center hover:bg-black  transition duration-700 text-orange-400 md:first-letter  md:h-[80px] leading-3">
        <div className="pt-3 text-center">
          <footer className="flex pb-2 justify-center items-center gap-3 md:text-lg  cursor-pointer md:pb-2">
            <BsFacebook className=" hover:text-white md:transition md:duration-700 text-xg" />
            <AiFillGoogleCircle className="hover:text-white md:transition md:duration-700 text-lg" />
            <AiFillInstagram className="hover:text-white md:transition md:duration-700 text-lg" />
            <AiFillTwitterCircle className="hover:text-white md:transition md:duration-700 text-lg" />
          </footer>
          <p className=" md:tracking-wider pb-2 ">
            We are music{" "}
            <span className="text-white hover:text-orange  transition duration-700">
              Music is us
            </span>
          </p>
          <p className=" footer-text md: tracking-wider pb-3">
            Copyright @2021 FLIXIA
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
