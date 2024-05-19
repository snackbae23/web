import React, { useRef, useEffect } from 'react'
import { useSnackBae } from '../context/SnackBae';

//image
import tick from '../assets/tick.mp4';
import successsound from '../assets/successsound.mp3';


//icons
import { IoClose } from "react-icons/io5";

const SuccessPayment = ({ amountToPay }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const paymentAudio = new Audio(successsound);

        const handleVideoEnd = () => {
            const videoElement = videoRef.current;
            // Keep the video at the last frame
            videoElement.currentTime = videoElement.duration;
            // videoElement.pause();
            paymentAudio.pause();
            paymentAudio.currentTime = 0;  // Reset the audio to the start
        };

        const handleVideoPlay = () => {
            paymentAudio.play();
        };

        const videoElement = videoRef.current;
        videoElement.addEventListener('ended', handleVideoEnd);
        videoElement.addEventListener('play', handleVideoPlay);

        return () => {
            videoElement.removeEventListener('ended', handleVideoEnd);
            videoElement.removeEventListener('play', handleVideoPlay);
        };
    }, []);



    const {
        successPayment,
        setsuccesspayment,
    } = useSnackBae();
    return (
        <div className='w-full h-[100vh] z-[3000] flex justify-center items-center  absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]'>
            <div className='w-full h-full bg-black opacity-45 absolute z-[-1]'></div>
            <div className='w-full  max-w-[320px] h-fit bg-white border-2  p-[2rem] relative'>
                <IoClose
                    onClick={() => {
                        setsuccesspayment(!successPayment);
                    }}
                    className="absolute right-[1rem] top-[1rem] text-[#426CFF] text-[1.5rem] cursor-pointer "
                />
                {/* <img
                src={tick}
                alt="merchant-logo"
                className="w-[100px] aspect-square rounded-full mx-auto"
            /> */}
                <video
                    ref={videoRef}
                    src={tick}
                    className="w-[100px] aspect-square rounded-full mx-auto"
                    autoPlay
                    muted
                />
                <p className="font-inter font-[600] text-[1.1rem] leading-[32px] text-center">
                    Paid to FOODOOS
                </p>
                <p className="font-inter font-[400] leading-[32px] text-center">
                    AMP Baisakhi Mall,Salt Lake
                </p>

                <div className="w-[90%] mx-auto border-2 rounded-xl p-[1rem]">
                    <div className="flex justify-between items-center my-[.25rem]">
                        <p className="font-[400] font-inter leading-[19.36px] uppercase">
                            Bill Amount{" "}
                        </p>
                        <p className="text-[#262627C7]">₹ {amountToPay}</p>
                    </div>

                    <div className="flex justify-between items-center my-[.25rem] ">
                        <p className="font-[400] font-Roboto leading-[19.36px] text-[#004AAD]">
                            offers
                        </p>
                        <p className="text-[#004AAD]">-₹ 0</p>
                    </div>

                    <div className="flex justify-between items-center my-[.25rem] ">
                        <p className="font-[400] font-Roboto leading-[19.36px]">
                            Convenience fee
                        </p>
                        <p className="text-[#262627C7]">₹ 0</p>
                    </div>

                    <div className="w-full h-[1px] bg-[#00000057] my-[1rem]"></div>

                    <div className="flex justify-between items-center my-[.25rem] ">
                        <p className="font-[600] font-inter leading-[19.36px]">
                            To be paid
                        </p>
                        <p className="text-[#262627C7]">₹ {amountToPay}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SuccessPayment