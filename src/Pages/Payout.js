import React from 'react'
import group117 from "../assets/group-117.svg"
import rect54 from "../assets/rectangle54.png"
import group752 from "../assets/group-752.svg"
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import LeftBar from '../Components/LeftBar';

const Payout = () => {

    const data = [
        {
            "customerName": "Customer name 1",
            "tableNo": "1",
            "date": "12/17/2023",
            "time": "9:30 AM-10:30 AM EST",
            "status": "Clears in 2ds",
            "amount": "₹231"
        },
        {
            "customerName": "Amanda Cooper",
            "tableNo": "23",
            "date": "12/17/2023",
            "time": "9:30 AM-10:30 AM EST",
            "status": "Clears in 2ds",
            "amount": "₹231"
        },
        {
            "customerName": "Amanda Cooper",
            "tableNo": "23",
            "date": "12/17/2023",
            "time": "9:30 AM-10:30 AM EST",
            "status": "Clears in 2ds",
            "amount": "₹231"
        },
        {
            "customerName": "Amanda Cooper",
            "tableNo": "23",
            "date": "12/17/2023",
            "time": "9:30 AM-10:30 AM EST",
            "status": "Clears in 2ds",
            "amount": "₹231"
        },
        {
            "customerName": "Amanda Cooper",
            "tableNo": "23",
            "date": "12/17/2023",
            "time": "9:30 AM-10:30 AM EST",
            "status": "Clears in 2ds",
            "amount": "₹231"
        },
        {
            "customerName": "Amanda Cooper",
            "tableNo": "23",
            "date": "12/17/2023",
            "time": "9:30 AM-10:30 AM EST",
            "status": "Clears in 2ds",
            "amount": "₹231"
        },

    ]

    let resId = JSON.parse(localStorage.getItem("userData")).details;


    let user = JSON.parse(localStorage.getItem("userData"));
    console.log(user.username);

    return (
        <div className='w-full h-[100vh] flex flex-col'>
            <div className="z-10 bg-white fixed mt-8  w-full h-20 -top-8 flex flex-row items-center justify-between  px-6 box-border  max-w-full  text-zinc-700 font-sans">

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
                    <div className='w-full h-[100px] flex items-center '>
                        <h1 className='text-[1.5rem] font-bold w-[40%] ml-4 '>Payout</h1>
                        <div className='w-[60%] flex  gap-4 justify-end'>
                            <button className='bg-black text-white w-[90px] h-10 rounded-md'>weekly</button>
                            <button className='bg-white  w-[90px] h-10 rounded-md'>Monthly</button>
                            <button className='bg-white  w-[90px] h-10 rounded-md'>Yearly</button>
                            <input className='rounded-md'
                                type="date">
                            </input>
                        </div>


                    </div>

                    <div className='w-full h-[190px] bg-white rounded-md flex md:text-[1.2rem] text-[.9rem]'>
                        <div className='w-[25%] flex flex-col  items-center justify-center '>
                            <p className=''>Available for payout</p>
                            <p className=' font-bold md:text-[2.1rem] text-[1.4rem] text-green-600'>$1,712.00</p>
                            <button className='md:w-[200px] px-2 mt-2 bg-yellow-500 h-10 rounded-md'>Withdraw Request</button>

                        </div>
                        <div className='h-[70%] w-[2px] bg-slate-200 mt-5'></div>
                        <div className='w-[25%] flex flex-col  items-center justify-center '>
                            <p>Today's Revenue</p>
                            <p className=' font-bold md:text-[2.1rem] text-[1.4rem]'>$112.00</p>


                        </div>
                        <div className='h-[70%] w-[2px] bg-slate-200 mt-5'></div>
                        <div className='w-[25%] flex flex-col  items-center justify-center '>
                            <p>Total Earnings</p>
                            <p className=' font-bold md:text-[2.1rem] text-[1.4rem]'>$102,712.00</p>


                        </div>
                        <div className='h-[70%] w-[2px] bg-slate-200 mt-5'></div>
                        <div className='w-[25%] flex flex-col  items-center justify-center '>
                            <p>Total Reservation</p>
                            <p className=' font-bold md:text-[2.1rem] text-[1.4rem]'>$230.00</p>


                        </div>

                    </div>
                    <div className='text-[1.2rem] mt-4 font-bold'>
                        Payouts history
                    </div>
                    <div className='w-full mt-4  '>
                        <table className="min-w-full bg-white border border-gray-300 rounded-xl">
                            <thead className="bg-gray-100 py-4">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-4 text-[1rem]">Customer Name</th>
                                    <th className="border border-gray-300 px-4 py-4 text-[1rem]">Table No</th>
                                    <th className="border border-gray-300 px-4 py-4 text-[1rem]">Date</th>
                                    <th className="border border-gray-300 px-4 py-4 text-[1rem]">Time</th>
                                    <th className="border border-gray-300 px-4 py-4 text-[1rem]">Status</th>
                                    <th className="border border-gray-300 px-4 py-4 text-[1rem] ">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((reservation, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300 px-4 py-2">{reservation.customerName}</td>
                                        <td className="border border-gray-300 px-4 py-2 bg-slate-100">{reservation.tableNo}</td>
                                        <td className="border border-gray-300 px-4 py-2">{reservation.date}</td>
                                        <td className="border border-gray-300 px-4 py-2 bg-slate-100">{reservation.time}</td>
                                        <td className="border border-gray-300 px-4 py-2">{reservation.status}</td>
                                        <td className="border border-gray-300 px-4 py-2 bg-slate-100 text-green-600">{reservation.amount}</td>
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

export default Payout