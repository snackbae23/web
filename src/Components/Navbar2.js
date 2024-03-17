import React, { useState } from 'react'

//image
import logo from "../assets/logo.png"
import triangle from "../assets/Polygon 3.png"

//icons
import { LuMenu } from "react-icons/lu";

const Navbar2 = ({ login, setlogin }) => {

    const [dropdown, setDropdown] = useState(false);

    return (
        <div>
            <div className="z-10 bg-white fixed   w-full h-16  flex flex-row items-center justify-between px-[1rem]  font-sans">
                {/* logo */}
                <img
                    className="relative w-[6rem] object-cover z-20"
                    loading="lazy"
                    alt="logo"
                    src={logo}
                />
                {/* login & Signup button */}
                <div className=' font-semibold hidden sm:flex gap-5'>
                    <button
                        onClick={() => {
                            setlogin(prev => !prev);
                        }}
                        className="">
                        Sign Up
                    </button>
                    <button
                        onClick={() => {
                            setlogin(prev => !prev);
                        }}
                        className="w-[140px] px-5 py-2 text-white font-bold text-center rounded-md bg-[#EAB308]">
                        Login
                    </button>
                </div>

                {/* dropdown */}
                <LuMenu
                    onClick={() => {
                        setDropdown(prev => !prev)
                    }}
                    className='text-[2rem] font-bold sm:hidden block ' />

                {
                    dropdown &&
                    <div className=' absolute top-[80px] right-2 flex flex-col bg-white rounded-xl shadow-lg'>
                        <img src={triangle} alt='triangle' className='absolute top-[-10px] right-[10px] z-[-1]' />
                        <button
                            onClick={() => {
                                setlogin(prev => !prev);
                                setDropdown(false)
                            }}
                            className='py-[.5rem] text-[1.1rem] bg-[#EAB308]'>Login</button>
                        <p className='bg-[#E2E8F0] h-[1.5px] w-[90%] mx-auto'></p>
                        <button
                            onClick={() => {
                                setlogin(prev => !prev);
                                setDropdown(false)
                            }}
                            className='py-[.5rem]  px-[1rem] text-[1.1rem]'>Sign Up</button>
                    </div>
                }

            </div>

        </div>
    )
}

export default Navbar2