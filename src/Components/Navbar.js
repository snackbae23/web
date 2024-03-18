import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect, useRef } from "react";

const Navbar = ({ login, setlogin }) => {

  // function showSidebar() {
  //   const sidebar = document.querySelector('.sidebar');
  //   sidebar.style.display = 'flex';
  // }

  // function hideSidebar() {
  //   const sidebar = document.querySelector(".sidebar");
  //   sidebar.style.display = "none";
  // }
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1024); // Adjust the viewport width threshold as needed
    };

    handleResize(); // Set initial state based on window width
    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup event listener on unmount
    };
  }, []); 

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Attach event listener if window width is less than lg size
    if (window.innerWidth < 1024) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      // Detach event listener if window width is lg size or larger
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);


  return (
    <div ref={menuRef} className="relative w-full">
      <nav className="bg-[#ffffff]">

        <div className=" fixed flex justify-between h-[60px] w-full px-[1rem] items-center z-[100] bg-white">
          <Link to="/">
            <img src={logo} alt="Logo" loading="lazy" className="object-fit h-[50px]"></img>
          </Link>
          {/* menu */}
          <GiHamburgerMenu
            onClick={toggleMenu}
            className="lg:hidden text-[1.2rem]" />
            {
              isOpen &&
              <div className="flex lg:flex-row flex-col  py-4 px-10 absolute right-[10px] top-[65px] lg:relative lg:top-0 lg:right-0  bg-white ">
                <Link onClick={() => window.innerWidth < 1024 && toggleMenu()}  to='/' className="text-center py-1 text-nowrap px-4">Home</Link>
                <Link onClick={() => window.innerWidth < 1024 && toggleMenu()}  to='/joinpartner' className="text-center py-1 text-nowrap px-4">Join as partner</Link>
                <Link onClick={() => window.innerWidth < 1024 && toggleMenu()} to='/blog' className="text-center py-1 text-nowrap px-4">Blogs</Link>
                <Link onClick={() => window.innerWidth < 1024 && toggleMenu()}  to='aboutUs' className="text-center py-1 text-nowrap px-4">About Us</Link>
                <button
                  onClick={() => {
                    navigate('/')
                    setlogin(prev => !prev);
                    toggleMenu();
                  }}
                  className=" lg:border py-1 lg:px-[2.4rem] lg:py-[.2rem] lg:text-white  lg:font-semibold  rounded-md lg:bg-[#EAB308]">
                  Login
                </button>

              </div>
            }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;



// <div className="fixed w-full h-[60px] flex flex-row bg-[#ffffff] justify-between lg:px-20 items-center z-[100] ">
// <div>
//   <Link to="/">
//     <img src={logo} alt="Logo" loading="lazy" className="object-fit h-[50px]"></img>
//   </Link>
// </div>
// <div className=" ">
//   <ul className="sidebar flex space-x-6">
//     <li className="relative">
//       <div className="flex justify-between">
//         <Link className="hidden" to="/">
//           <img src={logo} alt="Logo" loading="lazy"></img>
//         </Link>
//         <RxCross2
//           onClick={hideSidebar}
//           className=" absolute right-0 top-6 w-[80px] h-[30px]"
//         />
//       </div>
//     </li>
//     <li className="h-[50px] mt-10 px-[30px]  hover:text-amber-600">
//       <Link to="/">Home</Link>
//     </li>
//     <li className=" h-[50px] px-[30px]  hover:text-amber-600">
//       <Link to="/joinpartner">Join as partner</Link>
//     </li>
//     <li className="h-[50px] px-[30px]   hover:text-amber-600">
//       <Link to="/blog">Blogs</Link>
//     </li>
//     <li className="h-[50px] px-[30px] hover:text-amber-600">
//       <Link to="/aboutUs">About Us</Link>
//     </li>
//   </ul>
//   <ul className=" flex space-x-10 items-center">
//     <li className=" lg:block hidden hover:text-amber-600">
//       <Link to="/">Home</Link>
//     </li>
//     <li className=" lg:block hidden hover:text-amber-600">
//       <Link to="/joinpartner">Join as partner</Link>
//     </li>
//     <li className="lg:block hidden hover:text-amber-600">
//       <Link to="/blog">Blogs</Link>
//     </li>
//     <li className="lg:block hidden hover:text-amber-600">
//       <Link to="/aboutUs">About Us</Link>
//     </li>


//     {/* //change */}
//     <button
//       onClick={() => {
//         setlogin(prev => !prev);
//       }}
//       className=" border  h-[34px] w-[140px] px-5 text-white text-sm font-bold text-center rounded-md bg-[#EAB308]">
//       Login
//     </button>

//     <li className="lg:hidden ">
//       <GiHamburgerMenu
//         onClick={showSidebar}
//         className="  w-[80px] h-[30px]"
//       />
//     </li>
//   </ul>
// </div>
// </div>
