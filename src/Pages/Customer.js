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

const Customer = () => {

  let resId = JSON.parse(localStorage.getItem("userData")).details;
  console.log(resId);

    const data=[
        {
          "customerName": "Customer name ",
          "customernum": "+91 9660066979",
          "type": "Regular",
          "visit": "220",
          
        },
        {
            "customerName": "Customer name ",
            "customernum": "+91 9660066979",
            "type": "Regular",
            "visit": "220",
            
          },
          {
            "customerName": "Customer name ",
            "customernum": "+91 9660066979",
            "type": "Regular",
            "visit": "220",
            
          },
          {
            "customerName": "Customer name ",
            "customernum": "+91 9660066979",
            "type": "Regular",
            "visit": "220",
            
          },
          {
            "customerName": "Customer name ",
            "customernum": "+91 9660066979",
            "type": "Regular",
            "visit": "220",
            
          },
          {
            "customerName": "Customer name ",
            "customernum": "+91 9660066979",
            "type": "Regular",
            "visit": "220",
            
          },
          {
            "customerName": "Customer name ",
            "customernum": "+91 9660066979",
            "type": "Regular",
            "visit": "220",
            
          },
          {
            "customerName": "Customer name ",
            "customernum": "+91 9660066979",
            "type": "Regular",
            "visit": "220",
            
          },
          {
            "customerName": "Customer name ",
            "customernum": "+91 9660066979",
            "type": "Regular",
            "visit": "220",
            
          },
          {
            "customerName": "Customer name ",
            "customernum": "+91 9660066979",
            "type": "Regular",
            "visit": "220",
            
          },{
            "customerName": "Customer name ",
            "customernum": "+91 9660066979",
            "type": "Regular",
            "visit": "220",
            
          },
          {
            "customerName": "Customer name ",
            "customernum": "+91 9660066979",
            "type": "Regular",
            "visit": "220",
            
          },
          {
            "customerName": "Customer name ",
            "customernum": "+91 9660066979",
            "type": "Regular",
            "visit": "220",
            
          },
          

       
        
  ]
  
  let user = JSON.parse(localStorage.getItem("userData"));
  console.log(user.username);
    return (
        <div className='w-full h-fit flex flex-col'>
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
          <Link
            to="/dashboard"
            className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3 "
          >
            <FaHome /> <p className='md:block hidden'>Dashboard</p>
          </Link>
          <Link
            to="/payout"
            className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3"
          >
            <FaBlog />
            <p className='md:block hidden'>Payout</p>
          </Link>
          <Link
            to="/menu"
            className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3"
          >
            <MdMenuBook />
            <p className='md:block hidden'>Menu</p>
          </Link>
          <Link
            to="/editstore"
            className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3"
          >
            <IoStorefrontOutline />
            <p className='md:block hidden'>Store detail</p>
          </Link>
          <Link
            to="/offer"
            className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3"
          >
            <BiSolidOffer />
            <p className='md:block hidden'>offers & campaign</p>
          </Link>
          <Link
            to="/pricing"
            className="w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-3"
          >
            <BiSolidOffer />
            <p className='md:block hidden'>Pricing</p>
          </Link>
          <Link
            to="/"
            className="md:w-[50%] h-[50px] bg-slate-100 mb-1 flex items-center md:p-4 hover:bg-yellow-600 hover:text-white gap-2 mt-48 justify-center rounded-xl md:ml-16"
          >
            <IoIosLogOut /> <p className='md:block hidden'>Log out</p>
          </Link>
        </div>

                {/* right */}
                <div className="md:w-[75%] w-[85%] bg-slate-200  h-fit rounded-md p-6 md:ml-[22%] ml-[12%]">
                    <h1 className='text-[1.2rem] font-bold  ml-4 '>Customer</h1>

                    <div className='flex justify-between mt-4 relative'>
                        <div className='mt-2'>
                            <button className='bg-black text-white rounded-full py-2 px-4'>All Customer</button>
                            <button className='rounded-full ml-4 bg-white py-2 px-4'>Insights</button>
                            
                        </div>
                        <p className=' absolute rounded-full bg-yellow-500 size-fit px-4 ml-52 mb-2 '>Pro</p>
                        <p className='bg-white flex items-center px-4 rounded-xl'>Search by name phone number</p>
                    </div>


                    <div className='w-full h-[600px] mt-4 overflow-scroll '>
                    <table className="min-w-full bg-white border border-gray-300 rounded-xl">
                        <thead className="bg-gray-100 py-4 ">
                            <tr>
                            <th className="border border-gray-300 px-4 py-4 text-[1rem]">Customer Name</th>
                            <th className="border border-gray-300 px-4 py-4 text-[1rem]">Customer Number</th>
                            <th className="border border-gray-300 px-4 py-4 text-[1rem]">Type</th>
                            <th className="border border-gray-300 px-4 py-4 text-[1rem]">Visit</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((reservation, index) => (
                            <tr className='' key={index}>
                                <td className="border border-gray-300 px-4 py-2 items-center ">{reservation.customerName}</td>
                                <td className="border border-gray-300 px-4 py-2 bg-slate-100">{reservation.customernum}</td>
                                <td className="border border-gray-300 px-4 py-2">{reservation.type}</td>
                                <td className="border border-gray-300 px-4 py-2 bg-slate-100">{reservation.visit}</td>
                                
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Customer