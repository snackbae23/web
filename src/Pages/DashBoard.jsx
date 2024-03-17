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
import frame33 from "../assets/frame33.svg"
import { FiSearch } from 'react-icons/fi'
import ellipse4 from "../assets/ellipse403.png"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import axios from 'axios';
import LeftBar from '../Components/LeftBar';


const Payout = () => {

    const [bookingDate, setBookingDate] = useState(new Date().toISOString().slice(0, 10));
    const [bookings, setBookings] = useState([]);

    const [paymentDate, setPaymentDate] = useState(new Date().toISOString().slice(0, 10));
    const [payments, setPayments] = useState([]);

    // function changeHandler(e) {
    //     e.preventDefault();
    //     setBookingDate(e.target.value);
    //     // dateSubmit();
    //     console.log(bookingDate);
    // }
    const changeHandler = (e) => {
        setBookingDate(e.target.value);
        // dateSubmit(e.target.value);
    };

    let resId = JSON.parse(localStorage.getItem("userData")).details;
    console.log(resId);

    // function dateSubmit(e) {
    //     e.preventDefault();
    //     let config = {
    //         method: 'get',
    //         maxBodyLength: Infinity,
    //         url: `https://coral-app-mvtxg.ondigitalocean.app/api/bookings/find/${resId}/${bookingDate}`,
    //         headers: {}
    //     };

    //     axios.request(config)
    //         .then((response) => {
    //             console.log(JSON.stringify(response.data));
    //             setBookings(response.data?.bookings);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }

    const dateSubmit = (date) => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://coral-app-mvtxg.ondigitalocean.app/api/bookings/find/${resId}/${date}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setBookings(response.data?.bookings);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Fetch bookings data for the initial render
    useEffect(() => {
        dateSubmit(bookingDate);
    }, []);

    // useEffect(() => {
    //     dateSubmit();
    // }, []);

    const handleDateSubmit = (e) => {
        e.preventDefault();
        dateSubmit(bookingDate);
    };

    function paymentChangeHandler(e) {
        setPaymentDate(e.target.value);
        // paymentSubmit();

        console.log(paymentDate);
    }

    const paymentSubmit = (paymentDate) => {
        console.log(paymentDate);
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://coral-app-mvtxg.ondigitalocean.app/api/payment/${resId}/${paymentDate}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setPayments(response.data?.payments);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(()=>{
        paymentSubmit(paymentDate);
    }, []);
    
    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        paymentSubmit(paymentDate);
    };

    // const book = [
    //     { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    //     { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    //     { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    //     { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    //     { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    //     { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    //     { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    //     { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    //     { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    //     { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    //     { id: "Am123", img: ellipse4, name: "Amanda Cooper", slot: " 9:30 AM -10:30 AM EST", table: "Table no. 42", time: "09:30 AM", bill: "233$" },
    // ];

    let user = JSON.parse(localStorage.getItem("userData"));
    console.log(user.username);

    return (
        <div className='w-full h-[100vh] flex flex-col'>


            <div className="z-10 bg-white fixed   w-full h-20 flex flex-row items-center justify-between  px-6 box-border  max-w-full  text-zinc-700 font-sans">

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
            <div className='flex  w-full mt-20 h-full '>
                {/* left */}
                <div className="md:w-[20%] w-[10%]  bg-white flex flex-col fixed md:text-[1.15rem] text-[1.6rem] font-roboto  text-slate-600 ml-2">
                    <LeftBar />
                </div>
                {/* right */}
                <div className="md:w-[75%] w-[85%] bg-slate-200  h-fit rounded-md p-6 md:ml-[22%] ml-[12%]">
                    <div className=' top-16 left-56'>
                        <h3 className=" mt-5 text-xl font-bold font-inherit mb-3 ">
                            Dashboard
                        </h3>
                        <div className='flex justify-evenly gap-2'>
                            <div className='bg-white w-60 h-28 mt-2 rounded-2xl flex flex-col justify-evenly'>
                                <div className='flex justify-between p-2'>
                                    <p className='text-slate-950 text-base font-medium'>
                                        Profile Visit
                                    </p>
                                    <p className='text-slate-500 font-normal text-sm'>
                                        Last 30 days
                                    </p>
                                </div>
                                <div className='flex justify-between p-2'>
                                    <p className='font-roboto text-2xl font-semibold'>
                                        25.1k
                                    </p>
                                    <div className='border-none py-1 pl-px bg-green-100 rounded-2xl flex flex-row items-end justify-start gap-0.5'>
                                        <img
                                            className='w-4 h-4 overflow-hidden min-h-4'
                                            alt=''
                                            src={frame33}
                                        />
                                        <p className='font-roboto px-2 text-green-700 text-left'>
                                            0.3pt
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white w-60 h-28 mt-2 rounded-2xl flex flex-col justify-evenly'>
                                <div className='flex justify-between p-2'>
                                    <p className='text-slate-950 text-base font-medium'>
                                        Total Bookings
                                    </p>
                                    <p className='text-slate-500 font-normal text-sm'>
                                        Last 30 days
                                    </p>
                                </div>
                                <div className='flex justify-between p-2'>
                                    <p className='font-roboto text-2xl font-semibold'>
                                        35
                                    </p>
                                    <div className='border-none py-1 pl-px px-2  bg-green-100 rounded-2xl flex flex-row items-end justify-start gap-0.5'>
                                        <img
                                            className='w-4 h-4 overflow-hidden min-h-4'
                                            alt=''
                                            src={frame33}
                                        />
                                        <p className='font-roboto text-green-700 text-left'>
                                            0.3pt
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white w-60 h-28 mt-2 rounded-2xl flex flex-col justify-evenly'>
                                <div className='flex justify-between p-2'>
                                    <p className='text-slate-950 text-base font-medium'>
                                        Total Revenue
                                    </p>
                                    <p className='text-slate-500 font-normal text-sm'>
                                        Last 30 days
                                    </p>
                                </div>
                                <div className='flex justify-between p-2'>
                                    <p className='font-roboto text-2xl font-semibold'>
                                        92.4k
                                    </p>
                                    <div className='border-none py-1 pl-px px-2 bg-green-100 rounded-2xl flex flex-row items-end justify-start gap-0.5'>
                                        <img
                                            className='w-4 h-4 overflow-hidden min-h-4'
                                            alt=''
                                            src={frame33}
                                        />
                                        <p className='font-roboto text-green-700 text-left'>
                                            0.3pt
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white w-60 h-28 mt-2 rounded-2xl flex flex-col justify-evenly'>
                                <div className='flex justify-between p-2'>
                                    <p className='text-slate-950 text-base font-medium'>
                                        New Customer
                                    </p>
                                    <p className='text-slate-500 font-normal text-sm'>
                                        Last 30 days
                                    </p>
                                </div>
                                <div className='flex justify-between p-2'>
                                    <p className='font-roboto text-2xl font-semibold'>
                                        43
                                    </p>
                                    <div className='border-none py-1 pl-px px-2 bg-green-100 rounded-2xl flex flex-row items-end justify-start gap-0.5'>
                                        <img
                                            className='w-4 h-4 overflow-hidden min-h-4'
                                            alt=''
                                            src={frame33}
                                        />
                                        <p className='font-roboto text-green-700 text-left'>
                                            0.3pt
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6 flex justify-center'>
                            <div className=' w-[550px] flex flex-col rounded-xl mt-4 ml-10'>
                                <div className='bg-slate-100 h-36 flex items-center flex-col'>
                                    <div className=" font-semibold z-[2] flex justify-center text-xl mt-4 ">Bookings</div>
                                    <div className=''>
                                        <form className='flex flex-row gap-3 items-center justify-center mt-4' onSubmit={handleDateSubmit}>
                                            <input type='date' className='py-2 px-6 bg-[#e7e6e6] rounded-md' value={bookingDate} onChange={changeHandler}></input>
                                            <button type='submit'>
                                                <FiSearch fontSize={25} />
                                            </button>
                                        </form>
                                    </div>

                                </div>
                                <div className='bg-white  rounded-md'>
                                    <div className="overflow-y-auto no-scrollbar h-[300px] mt-6  z-10">
                                        <ul className="flex flex-col pl-5 gap-2 mt-4 ">
                                            {bookings && bookings.map((booking) => (
                                                <li key={booking.id} className="">
                                                    <div className='bg-slate-100 h-14 flex flex-row items-center justify-between box-border py-5 px-0 rounded-3xl'>
                                                        <div className='flex flex-row items-center justify-start '>
                                                            <img
                                                                className="relative ml-4 rounded-[50%] w-12 h-12 object-contain min-h-11"
                                                                alt=""
                                                                loading='lazy'
                                                                src={booking.user?.additionalDetails?.image}
                                                            />
                                                            <div className='flex flex-col ml-3 items-start justify-center gap-0.5'>
                                                                <div className='leading-6 font-medium pr-5 '>
                                                                    {booking.user?.additionalDetails?.fullName}
                                                                </div>
                                                                <div>
                                                                    {booking.time} on {booking.date}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='mr-4 font-semibold'>
                                                            Table for {booking.numofpeople}
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className=' w-[550px] flex flex-col rounded-xl ml-12 mt-4'>
                                <div className='bg-slate-100 h-36'>
                                    <div className=" font-semibold z-[2] flex justify-center text-xl mt-4">Payments</div>
                                    <div className=''>
                                        <form className='flex flex-row gap-3 items-center justify-center mt-4' onSubmit={handlePaymentSubmit}>
                                            <input type='date' className='py-2 px-6 bg-[#e7e6e6] rounded-md' value={paymentDate} onChange={paymentChangeHandler}></input>
                                            <button type='submit'>
                                                <FiSearch fontSize={25} />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className='bg-white rounded-md'>
                                    <div className="overflow-y-auto h-[300px] mt-6 z-10">
                                        <ul className="flex flex-col pl-5 gap-1 ">
                                            {payments && payments.map((payment) => (
                                                <li key={payment.id} className="">
                                                    <div className='bg-slate-100 h-14 flex flex-row items-center justify-between box-border py-5 px-0 rounded-3xl '>
                                                        <div className='flex flex-row items-center justify-start '>
                                                            <img
                                                                className="relative ml-4 rounded-[50%] w-12 h-12 object-contain min-h-11"
                                                                alt=""
                                                                loading='lazy'
                                                                src={payment.user?.additionalDetails?.image}
                                                            />
                                                            <div className='ml-3 items-start'>
                                                                <div className='leading-6 font-medium pr-5 '>
                                                                    {payment.user?.additionalDetails?.fullName}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='mr-4 font-semibold'>
                                                            {payment.amount}
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payout
