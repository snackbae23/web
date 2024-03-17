import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { IoStorefrontOutline } from "react-icons/io5";
import group117 from "../assets/group-117.svg"
import rect54 from "../assets/rectangle54.png"
import group752 from "../assets/group-752.svg"
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import { ImCross } from 'react-icons/im';
import { useState } from 'react';
import LeftBar from '../Components/LeftBar';

const Pricing = () => {

    let resId = JSON.parse(localStorage.getItem("userData")).details;
    console.log(resId);

    function openPopup() {
        document.getElementById('popup').style.display = "block";
        document.getElementById('background').style.filter = "blur(2Px)";

    }
    function closePopup() {
        document.getElementById('popup').style.display = "none";
        document.getElementById('background').style.filter = "blur(0px)";

    }

    const [formData, setFormData] = useState({
        brandName: '',
        numberOfOutlets: '',
        contactNumber: ''
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform any further actions with the form data here
        console.log('Form submitted:', formData);
        handleReset();
    };

    // Function to handle changes in form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function to reset form fields
    const handleReset = () => {
        setFormData({
            brandName: '',
            numberOfOutlets: '',
            contactNumber: ''
        });
    };

    let user = JSON.parse(localStorage.getItem("userData"));
    console.log(user.username);

    return (
        <div className='w-full h-fit flex flex-col'>
            {/* popup */}
            <div className='absolute top-28 left-[30%]  z-[100] shadow-inner hidden' id='popup'>
                <div className='w-[40vw]   bg-white pb-8 rounded-md flex  '>
                    <div className='w-[40vw] mx-aut  h-fit flex flex-col gap-10'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col font-roboto pt-2 mt-6 ml-8 justify-start'>
                                <div className='text-xl font-semibold '>Get Premium Pro</div>
                                <p className='text-slate-500 mt-2'>Explore the exclusive brand building tools in your finger tips !</p>
                            </div>

                            <button onClick={closePopup} className='text-right p-2 mr-4'><ImCross /></button>
                        </div>
                        <div className=' bg-white rounded-md p-4 h-fit ml-4'>

                            <form className='flex flex-col text-lg font-semibold ' onSubmit={handleSubmit}>

                                <label className=' mb-2' htmlFor="brandName">Brand Name:</label>
                                <input
                                    className='w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md'
                                    type="text"
                                    id="brandName"
                                    name="brandName"
                                    value={formData.brandName}
                                    onChange={handleChange}
                                    required
                                />


                                <label className='mt-4 mb-2' htmlFor="numberOfOutlets">Number of Outlets:</label>
                                <select
                                    className='w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md'
                                    id="numberOfOutlets"
                                    name="numberOfOutlets"
                                    value={formData.numberOfOutlets}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="more_than_10">More than 10</option>
                                    <option value="more_than_20">More than 20</option>
                                </select>


                                <label className='mt-4 mb-2' htmlFor="contactNumber">Contact Number:</label>
                                <input
                                    className='w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md'
                                    type="tel"
                                    id="contactNumber"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    required
                                />

                                <div>
                                    <button className='w-[137px] h-[42px] bg-[#EAB308] border rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] mx-auto mt-4' type="submit">Submit</button>
                                    {/* <button type="button" onClick={handleReset}>Reset</button> */}
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            <div className='' id='background'>
                <div className="fixed mt-8  w-full h-[20px]  flex flex-row items-center justify-between  px-6 box-border  max-w-full  text-zinc-700 font-sans">
                    {/* <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 bg-white" /> */}
                    <div className="flex flex-row items-start left-1 py-0 px-6">
                        <img
                            className="relative w-28 h-16 object-cover z-20"
                            loading="lazy"
                            alt=""
                            src={logo}
                        />
                    </div>
                    <div className="flex flex-row items-start justify-start gap-4 max-w-full z-1">
                        <img
                            className="relative w-12 h-12 min-h-12"
                            loading="lazy"
                            alt=""
                            src={group117}
                        />
                        <Link to="/profilesettings">
                            <img
                                className="relative w-12 h-12 min-h-12"
                                loading="lazy"
                                alt=""
                                src={group752}
                            /></Link>
                        <Link to="/profile">
                            <div className="flex flex-row items-center justify-start gap-2">
                                <img
                                    className="relative rounded-2xl w-12 h-12 object-cover"
                                    loading="lazy"
                                    alt=""
                                    src={rect54}
                                />
                                <div className="flex flex-col items-start justify-start gap-0.5">
                                    <div className="relative tracking-[-0.02em] font-semibold whitespace-nowrap">
                                        {user.restaurantName}
                                    </div>
                                    <div className="relative text-sm tracking-[-0.02em] whitespace-nowrap">
                                        {user.email}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='flex  w-full mt-20 h-fit'>

                    {/* left */}
                    <div className="md:w-[20%] w-[10%]  bg-white flex flex-col fixed md:text-[1.15rem] text-[1.6rem] font-roboto  text-slate-600 ml-2">
                        <LeftBar />
                    </div>

                    {/* right */}
                    <div className='md:w-[75%] w-[85%] bg-slate-100  rounded-md flex flex-col items-center  relative  md:ml-[22%] ml-[12%]' >
                        <div className='w-full h-[300px] bg-yellow-500 flex flex-col text-white relative'>
                            <button className='bg-black w-[130px]  px-4 py-1 rounded-full mt-6 ml-[850px] '>Need Help?</button>
                            <p className='text-[2.7rem] font-bold mx-auto'>Simple pricing for your business</p>
                            <p className='mx-auto '>Plans that are carefully crafted to suit business.</p>

                            <button className='bg-black w-[60px] absolute mt-36  px-2 py-1 rounded-full  ml-[810px] '>Years</button>
                            <button className='bg-yellow-100  text-black w-[130px]  px-4 py-1 rounded-full  ml-[850px] '>Half-Yearly</button>

                        </div>
                        <div className='w-[70%] h-[250px] bg-white absolute mt-[190px] flex rounded-md shadow-md p-1 '>
                            <div className='w-[250px] bg-yellow-100 flex flex-col justify-center items-center text-black'>
                                <h1 className='font-bold '>Premium PRO</h1>
                                <p className='font-bold text-[2rem]'>$999 <span className='text-[1rem]'>/month</span></p>
                                <p>billed annually</p>
                                <button className='bg-black text-white px-12 py-2 rounded-md mt-4 ' onClick={openPopup} >Get Started</button>
                            </div>
                            <div className='flex flex-col p-6 text-[.8rem]'>
                                <p className='mb-3'>Access these features when you get this pricing package for your business.</p>
                                <div className='flex '>
                                    <div className='bg-yellow-400 size-4 rounded-full mr-2'></div>
                                    <p>Unlock exclusive marketing tools for customer Loyalty</p>
                                </div>
                                <div className='flex mt-3'>
                                    <div className='bg-yellow-400 size-4 rounded-full mr-2'></div>
                                    <p>Get valuable insights for your business</p>
                                </div>
                                <div className='flex mt-3 '>
                                    <div className='bg-yellow-400 size-4 rounded-full mr-2'></div>
                                    <p>Zero comission standard payment charges</p>
                                </div>
                                <div className='flex mt-3 '>
                                    <div className='bg-yellow-400 size-4 rounded-full mr-2'></div>
                                    <p>24/7 support and consulting</p>
                                </div>
                                <div className='flex mt-3 '>
                                    <div className='bg-yellow-400 size-4 rounded-full mr-2'></div>
                                    <p>Free 500 credits every month for marketing tools</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-1 h-[100px] w-[80%]  mt-[180px]'>
                            <div className='flex items-center'>
                                <img src='/Group.png' alt=''></img>
                                <p className='font-bold ml-2 flex-wrap'>30 days free Trial Guarantee</p>
                            </div>
                            <div className='flex items-center'>
                                <img src='/Vector.png' alt=''></img>
                                <p className='font-bold ml-2 flex-wrap'>No setup fees<br />
                                    100% hassle-free</p>
                            </div>
                            <div className='flex items-center'>
                                <img src='/Group (1).png' alt=''></img>
                                <p className='font-bold ml-2 flex-wrap'>Easy Yearly subscription
                                    Pay once and for all</p>
                            </div>
                        </div>









                    </div>

                </div>
            </div>

        </div>
    )
}

export default Pricing