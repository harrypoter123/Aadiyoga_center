import React, { useState, useEffect } from "react";

import Nav from "../Navbar/Nav";
import NavMobile from "../Navbar/NavMobile";

import Logo from "../../assets/img/logo.png";

const Header = () => {
  const [isHeader, setIsHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 36 ? setIsHeader(true) : setIsHeader(false);
    });
  });
  return (
    <header
      className={`${
        isHeader ? "top-0" : "top-9"
      } fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all duration-500 flex items-center justify-between`}
    >
      <div className="flex items-center">
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        <div className="hidden lg:flex">
          <Nav />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex gap-x-4 lg:gap-x-9">
          <button className="text-heading font-medium text-sm lg:text-base hover:text-green-300 transition">
            Sign In
          </button>
          <button className="btn btn-md lg:px-[30px] bg-green-300 border border-green text-green-300 font-medium text-sm lg:text-base hover:bg-green-200 hover:text-white text-white transition">
            Sign Up
          </button>
        </div>
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
