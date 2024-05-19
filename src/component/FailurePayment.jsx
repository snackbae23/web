import React, { useEffect } from 'react'
import { useSnackBae } from '../context/SnackBae';


//image
import eventnofound from "../assets/eventnofound.png";
import failuresound from '../assets/errorsound.mp3';



//icons
import { IoClose } from "react-icons/io5";

const FailurePayment = ({ paymentVisible, setPaymentVisible }) => {

  const {
    failurePayment,
    setfailurepayment,
  } = useSnackBae();

  useEffect(() => {
    const paymentAudio = new Audio(failuresound);
    paymentAudio.play();

    return () => {
      paymentAudio.pause();
      paymentAudio.currentTime = 0; // Reset the audio to the start
    };
  }, []);

  return (
    <div className='w-full h-[100vh] z-[3000] flex justify-center items-center  absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]'>

      <div className='w-full h-full bg-black opacity-45 absolute z-[-1]'></div>
      <div className='w-full  max-w-[320px] h-fit bg-white border-2  p-[2rem] relative'>

        <IoClose
          onClick={() => {
            setfailurepayment(!failurePayment);
          }}
          className="absolute right-[1rem] top-[1rem] text-[#426CFF] text-[1.5rem] cursor-pointer"
        />
        <img
          src={eventnofound}
          alt="payment-failure"
          className="w-[140px] aspect-square rounded-full mx-auto"
        />

        <p className="font-inter font-[600] text-[1.4rem] leading-[32px] text-center">
          Opps! Payment Failed
        </p>
        <p className="font-inter font-[400] leading-[28px] text-center text-[#525C67]">
          Your Payment Transaction failed
          Please Try again !
        </p>

        <button onClick={
          () => {
            setfailurepayment(!failurePayment);
            setPaymentVisible(!paymentVisible);
          }
        } className='bg-[#FFD601] font-inter font-[700] uppercase w-[100%] mt-[3rem]  py-[1rem] rounded-md'>Try Again</button>

        <p className="font-inter font-[400] leading-[20px] text-[12px] text-center text-[#525C67] mt-[1rem]">In case of any debit the amount will be credited to source within 48 hours</p>

      </div>

    </div>
  )
}

export default FailurePayment