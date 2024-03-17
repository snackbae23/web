import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = ({ login, setlogin }) => {

  function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }

  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }


  return (
    <div className="relative w-full">
      <nav className="bg-[#ffffff]">
        <div className="fixed w-full h-[60px] flex flex-row bg-[#ffffff] justify-between lg:px-20 items-center z-[100] ">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" loading="lazy" className="object-fit h-[50px]"></img>
            </Link>
          </div>
          <div className=" ">
            <ul className="sidebar flex space-x-6">
              <li className="relative">
                <div className="flex justify-between">
                  <Link className="hidden" to="/">
                    <img src={logo} alt="Logo" loading="lazy"></img>
                  </Link>
                  <RxCross2
                    onClick={hideSidebar}
                    className=" absolute right-0 top-6 w-[80px] h-[30px]"
                  />
                </div>
              </li>
              <li className="h-[50px] mt-10 px-[30px]  hover:text-amber-600">
                <Link to="/">Home</Link>
              </li>
              <li className=" h-[50px] px-[30px]  hover:text-amber-600">
                <Link to="/joinpartner">Join as partner</Link>
              </li>
              <li className="h-[50px] px-[30px]   hover:text-amber-600">
                <Link to="/blog">Blogs</Link>
              </li>
              <li className="h-[50px] px-[30px] hover:text-amber-600">
                <Link to="/aboutUs">About Us</Link>
              </li>
            </ul>
            <ul className=" flex space-x-10 items-center">
              <li className=" lg:block hidden hover:text-amber-600">
                <Link to="/">Home</Link>
              </li>
              <li className=" lg:block hidden hover:text-amber-600">
                <Link to="/joinpartner">Join as partner</Link>
              </li>
              <li className="lg:block hidden hover:text-amber-600">
                <Link to="/blog">Blogs</Link>
              </li>
              <li className="lg:block hidden hover:text-amber-600">
                <Link to="/aboutUs">About Us</Link>
              </li>


              {/* //change */}
              <button
                onClick={() => {
                  setlogin(prev => !prev);
                }}
                className=" border  h-[34px] w-[140px] px-5 text-white text-sm font-bold text-center rounded-md bg-[#EAB308]">
                Login
              </button>

              <li className="lg:hidden ">
                <GiHamburgerMenu
                  onClick={showSidebar}
                  className="  w-[80px] h-[30px]"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;