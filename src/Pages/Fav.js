import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";
import chow from "../assets/chow.png";
import bgImg from "../assets/rec1.png";
import FoodSlider from "../Components/FoodSlider";

const Fav = () => {
  return (
    <div className="w-full ">
      <Navbar1 />
      <div className="relative top-[70px] w-full  ">
        {/* first section */}
        <div className="w-full h-[500px] relative  ">
          <img
            src={bgImg}
            className=" w-full h-[365px] md:h-[325px] md:object-fill absolute top-0 z-[-1]"
            alt="heroImage"
          ></img>
          <div className="flex flex-row items-center absolute top-5 left-7">
            <FaArrowLeft className="w-10 h-6 " />
            <p className="font-bold text-[20px]">Recommendation</p>
          </div>
          <div className="flex flex-col w-full space-y-7 absolute top-[20%] lg:top-[25%]  ">
            <div className=" font-semibold ml-4 md:ml-10 text-[50px] md:text-[65px] lg:text-[80px] leading-[54px] ">
              Unlock Delicious Deals with SnackBae!
            </div>
            <p className="font-sans ml-4 md:ml-10 font-normal text-[15px] md:text-[22px] md:leading-6">
              Treat yourself to discounts, offers, and exclusive deals on your
              next dining adventure.
            </p>
          </div>
        </div>
      </div>
      <div className=" -mt-10 w-[94%] mx-auto">
        <FoodSlider size={290} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Fav
