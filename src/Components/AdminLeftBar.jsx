import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function AdminLeftBar() {
    const [open, setOpen] = useState(false);
    function dropDown() {
        setOpen(!open);
    }
    const navigate = useNavigate();
    function logOutHandler() {
        localStorage.removeItem("adminData");
        navigate('/');
    }
    return (
        <div>
            <div className=''>
                <div className='w-full bg-white flex flex-col h-fit '>
                    <Link to='/admin/dashboard' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2 ' >
                        <FaHome /> <p>Dashboard</p>
                    </Link>
                    <div className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2' >
                        <div className='flex flex-row w-full justify-between items-center'>
                            <div className='flex flex-row gap-2 items-center'>
                                <div><FaRegStar /></div>
                                <div>Sales</div>
                            </div>
                            <div onClick={dropDown} className='cursor-pointer'>
                                {!open && <RiArrowDropDownLine size={26} />}
                                {open && <RiArrowDropUpLine size={26} />}
                            </div>
                        </div>
                    </div>
                    <div>
                        {open &&
                            <div className='w-full  flex flex-col'>
                                <div className='w-full h-[50px] bg-slate-100 hover:bg-yellow-600 hover:text-white mb-1 flex items-center pl-16'><Link to='/admin/merchant'>Merchants</Link></div>
                                <div className='w-full h-[50px] bg-slate-100 hover:bg-yellow-600 hover:text-white mb-1 flex items-center pl-16'><Link to='/admin/bookings'>Bookings</Link></div>
                                <div className='w-full h-[50px] bg-slate-100 hover:bg-yellow-600 hover:text-white mb-1 flex items-center pl-16'><Link to='/admin/sales'>Payments</Link></div>
                            </div>
                        }
                    </div>
                    <Link to='/offer' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2'>
                        <HiOutlineSpeakerphone /><p>App Control</p>
                    </Link>
                    <Link to='/pricing' className='w-full h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2'>
                        <HiOutlineSpeakerphone /><p>Admin Control</p>
                    </Link>
                    <div className='w-[50%] h-[50px] bg-slate-100 mb-1 flex items-center p-4 hover:bg-yellow-600 hover:text-white gap-2 mt-48 justify-center rounded-xl ml-16' onClick={logOutHandler}>
                        <IoIosLogOut /> <p>Log out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLeftBar