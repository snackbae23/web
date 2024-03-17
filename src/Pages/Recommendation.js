import React from "react";
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";
import bgImg from "../assets/rec1.png";
import { FaArrowLeft } from "react-icons/fa6";
import Faq from "../Components/Faq";
import FoodSlider from "../Components/FoodSlider";

const Recommendation = () => {
  return (
    <div className="w-full h-fit">
      <Navbar1 />
      <div className="relative top-[70px] w-full h-fit ">
        {/* first section */}
        <div className="w-full h-[400px] md:h-[370px] relative rounded-b-[30px] bg-[#FFD601]  ">
          {/* <img
            src={bgImg}
            className=" h-full md:object-fill relative top-0 z-[-1]"
            alt="heroImage"
          ></img> */}
          <div className="flex flex-row  items-center absolute top-5 left-7">
            <FaArrowLeft className="w-10 h-6 " />
            <p className="font-bold text-[20px]">Recommendation</p>
          </div>
          <div className="flex flex-col md:w-[80%] w-full space-y-7 absolute top-[20%] lg:top-[30%] left-0 md:left-[15%]  ">
            <div className=" font-semibold ml-4 lg:ml-0 text-[50px] md:text-[65px] lg:text-[80px] leading-[54px] ">
              Become the Ultimate Food Critic
            </div>
            <p className="font-sans font-normal ml-4 lg:ml-0 text-[15px] md:text-[22px] md:leading-6">
              Recommend dishes, eateries, and make dining experiences more
              enjoyable.
            </p>
            <div className="flex space-x-2 ml-4 lg:ml-0">
              <button className="rounded-md  font-sans font-semibold w-[160px] h-[51px] md:w-[15rem] md:h-[3rem] bg-[#0A191E] text-white md:px-6 py- md:py-2">
                <p className="font-sans">Recommend Now</p>
              </button>
              <button className="rounded-md  w-[160px] h-[51px] md:w-[15rem] md:h-[3rem] border-4 border-black bg-[#FFD601] text-black px-4 md:px-6 py-1 md:py-2">
                <p className="font-sans font-semibold">View Rewards</p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 mx-6 lg:mx-12 my-3  ">
          <button className="rounded-md  font-sans font-semibold w-[110px] h-[51px] md:w-[12rem] md:h-[3rem] bg-[#FFD601] text-black md:px-6 py-1 md:py-2">
            <p className="font-sans">All Offers</p>
          </button>
          <button className="rounded-md w-[110px] h-[51px] md:w-[12rem] md:h-[3rem] border-2 border-black bg-[#ffffff] text-black px-4 md:px-6 py-1 md:py-2">
            <p className="font-sans font-semibold">No Offers</p>
          </button>
        </div>
        <div className="my-[2rem] w-[94%] mx-auto">
          <FoodSlider size={290} />
        </div>

        {/* FAQ */}
        <div>
          <div>
            <Faq />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
