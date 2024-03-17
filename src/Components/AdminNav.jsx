import React from "react";
import logo from "../assets/logo.png"
import rect54 from "../assets/rectangle54.png"
// import logo from "../assets/logo.png";
import { Navigate, useNavigate } from "react-router-dom";
function AdminNav() {
    const navigate = useNavigate();
    function logOutHandler()
    {
        localStorage.removeItem("adminData");
        navigate('/adminlogin');
    }
    return (
        <div className="absolute top-0 mt-8 w-full h-[20px]  flex flex-row items-center justify-between px-7 box-border  max-w-full  text-zinc-700 font-sans">
            <div className="flex flex-row items-start left-1 py-0 px-6">
                <img
                    className="relative w-28 h-16 object-cover z-20"
                    loading="lazy"
                    alt=""
                    src={logo}
                />
            </div>
            <div className="flex flex-row items-start justify-start gap-4 max-w-full z-1">
                <div>
                    <div className="flex flex-row items-center justify-start gap-2">
                        <img
                            className="relative rounded-2xl w-12 h-12 object-cover"
                            loading="lazy"
                            alt=""
                            src={rect54}
                        />
                        <div className="flex flex-col items-start justify-start gap-0.5">
                            <div className="relative tracking-[-0.02em] font-semibold whitespace-nowrap">
                                Admin
                            </div>
                            <div className="relative text-sm tracking-[-0.02em] whitespace-nowrap">
                                adminSnackbae@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNav