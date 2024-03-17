import React from 'react'
import { useState } from 'react';
import logo from '../assets/logo.png';
import github from '../assets/logo-github 1.png';
import insta from '../assets/logo-instagram 1.png';
import twitter from '../assets/logo-twitter 2.png';
import fb from '../assets/Vector.png';
import { Link } from "react-router-dom";
function Footer() {
    const [email, setEmail] = useState("");

    function emailHandler(e) {
        setEmail(e.target.value);
    }

    function submitEmailHandler() {
        console.log(email);
        setEmail("");
    }

    function scrolltoTop(){
        document.documentElement.scrollTop=0;
    }
    return (
        <div>
            {/* section */}
            <div className='w-full h-fit bg-[#1E2833] text-gray-200 pb-[1rem]'>
                <div className='w-[80%] mx-auto'>
                    <div className=''>
                        <img src={logo} alt="logo" width={100} className='py-[2rem]' />
                        <p className='bg-gray-400 w-[100%] mx-auto h-[.08px] mb-[1rem] '></p>
                    </div>

                    <div className='w-full py-[2rem] flex lg:flex-row flex-col justify-between items-center'>
                        <div className='w-[100%] lg:w-[30%] flex flex-col justify-center sm:items-center lg:items-start mb-[1rem] lg:mb-0'>
                            <p className='text-[1.4rem] leading-tight mb-[1rem]'>Subscribe to our<br className='lg:block hidden' /> newsletter</p>
                            <div className='w-full text-center'>
                                <input
                                    className='h-[3rem] sm:w-[50%] lg:w-[80%] mx-auto bg-transparent border-b-2'
                                    type="email"
                                    value={email}
                                    onChange={emailHandler}
                                    placeholder="Email Address"
                                    required
                                />
                                <button
                                onClick={submitEmailHandler}
                                    className='bg-[#EAB308] h-[3rem] px-2 rounded-t-md text-black font-semibold'>
                                    Send
                                </button>
                            </div>
                        </div>
                        <div className='flex sm:justify-around justify-between w-full lg:w-[70%]'>
                            <div className='flex flex-col gap-[.5rem]'>
                                <p className='text-[#8b7430]'>Services</p>
                                <Link onClick={scrolltoTop} to="/"><div className='text-[.9rem]'>Discover Restaurants</div></Link>
                                <Link onClick={scrolltoTop}  to="/"><div className='text-[.9rem]'>Book Tables</div></Link>
                                <Link  onClick={scrolltoTop} to="/"><div className='text-[.9rem]'>Recommand Restaurants</div></Link>
                            </div>
                            <div className='flex flex-col gap-[.5rem]'>
                                <p className='text-[#8b7430]'>About</p>
                                <Link onClick={scrolltoTop}  to="/"><div className='text-[.9rem]'>Home</div></Link>
                                <Link onClick={scrolltoTop}  to="/blog"><div className='text-[.9rem]'>Blogs</div></Link>
                                <Link onClick={scrolltoTop}  to="/aboutUs" ><div className='text-[.9rem]'>About Us</div></Link>
                                <Link  onClick={scrolltoTop} to="/contact" ><div className='text-[.9rem]'>Contact Us</div></Link>
                            </div>
                            <div className='flex flex-col gap-[.5rem]'>
                                <p className='text-[#8b7430] text-nowrap'>For Restaurants</p>
                                <Link onClick={scrolltoTop}  to="/joinpartner"><div className='text-[.9rem]'>Join as Partner</div></Link>
                                <Link onClick={scrolltoTop}  to="/login"><div className='text-[.9rem]'>Partner Login</div></Link>
                                <Link onClick={scrolltoTop}  to='/adminlogin' className='text-[.9rem]'><div>Admin Login</div></Link>
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex md:flex-row flex-col justify-between items-center '>
                        <div className='flex gap-[1rem] my-[1rem] text-[.9rem]'>
                            <Link onClick={scrolltoTop}  to="/termsCondition" >Terms & Conditions</Link>
                            <Link onClick={scrolltoTop}  to="/privacyPolicy">Privacy Policy</Link>
                        </div>
                        <div className='flex gap-[1rem] my-[1rem]'>
                            <Link onClick={scrolltoTop}  to="/"  ><img src={fb} ></img></Link>
                            <Link onClick={scrolltoTop}  to="/"><img src={twitter}></img></Link>
                            <Link onClick={scrolltoTop}  to="/"><img src={insta}></img></Link>
                        </div>
                    </div>

                </div>
                    <p className='bg-gray-400 w-[90%] mx-auto h-[.08px] mb-[1rem] '></p>

                    <div className='w-[90%] mx-auto text-[.9rem] flex justify-between items-center '>
                        <p>All Rights Reserved © SNACKBAE PRIVATE LIMITED,2023</p>
                        <p>made with 💛 with city of joy</p>
                    </div>
            </div>
        </div>
    )
}

export default Footer
