import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";
import chow from "../assets/chow.png";
import bgImg from "../assets/rec1.png";

const Offers = () => {
  const reedem = [
    {
      text: "Reedem Now",
    },
  ];

const datanew = [
  {
    id: 1,
    image: chow, // Replace with your image URL
    text1: "Chowman",
    text2: "240",
    text3: "* on your dining bills",
  },
  {
    id: 2,
    image: chow, // Replace with your image URL
    text1: "Chowman",
    text2: "240",
    text3: "* on your dining bills",
  },
  {
    id: 3,
    image: chow, // Replace with your image URL
    text1: "Chowman",
    text2: "240",
    text3: "* on your dining bills",
  },
  {
    id: 4,
    image: chow, // Replace with your image URL
    text1: "Chowman",
    text2: "240",
    text3: "* on your dining bills",
  },
  {
    id: 5,
    image: chow, // Replace with your image URL
    text1: "Chowman",
    text2: "240",
    text3: "* on your dining bills",
  },
  {
    id: 6,
    image: chow, // Replace with your image URL
    text1: "Chowman",
    text2: "240",
    text3: "* on your dining bills",
  },
  {
    id: 7,
    image: chow, // Replace with your image URL
    text1: "Chowman",
    text2: "240",
    text3: "* on your dining bills",
  },
  {
    id: 8,
    image: chow, // Replace with your image URL
    text1: "Chowman",
    text2: "240",
    text3: "* on your dining bills",
  },
  {
    id: 9,
    image: chow, // Replace with your image URL
    text1: "Chowman",
    text2: "240",
    text3: "* on your dining bills",
  },
  {
    id: 10,
    image: chow, // Replace with your image URL
    text1: "Chowman",
    text2: "240",
    text3: "* on your dining bills",
  },

  // ... Add more data objects here
];


  return (
    <div className="w-full ">
      <Navbar1 />
      <div className="relative top-[70px] w-full -mb-10  md:-mb-16 ">
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
      <div className="flex space-x-2 mx-8 lg:mx-10  ">
        <button className="rounded-md  font-sans font-semibold w-[110px] h-[51px] md:w-[12rem] md:h-[3rem] bg-[#FFD601] text-black md:px-6 py-1 md:py-2">
          <p className="font-sans">All Offers</p>
        </button>
        <button className="rounded-md w-[110px] h-[51px] md:w-[12rem] md:h-[3rem] border-2 border-black bg-[#ffffff] text-black px-4 md:px-6 py-1 md:py-2">
          <p className="font-sans font-semibold">No Offers</p>
        </button>
      </div>
      <div className="map ">
        <div className=" flex flex-wrap justify-center gap-4 p-4">
       
          {datanew.map((data) => (
            <div className="p-2 border-2 w-[150px] md:w-[200px] lg:w-[250px] rounded-xl relative shadow-lg flex flex-col items-center">
              <div className="absolute top-0 left-0 rounded-t-xl w-full h-3 bg-yellow-300 z-[-1]"></div>
              <img className="h-12 w-12 z-[10]" src={data.image}></img>
              <div className="text-md font-bold">{data.text1}</div>
              <div className="text-3xl font-bold border border-yellow-500 py-2 px-2 rounded-xl">
                {data.text2}
              </div>
              <div className="text-xs">{data.text3}</div>
              {reedem.map((data) => (
                <div className="py-8">
                  <button className="border-2 text-sm px-2 py-2 rounded-lg bg-yellow-500">
                    {data.text}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Offers;
