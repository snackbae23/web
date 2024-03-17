import React from "react";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";

import bg5 from "../assets/bg-5.png";

import app1 from "../assets/rectangle-1@2x.png";
import app from "../assets/appstore.png";
import bg1 from "../assets/rectangle-2@2x.png";
import bg2 from "../assets/rectangle-16@2x.png";
import bg3 from "../assets/rectangle-16@2x.png";
import bg4 from "../assets/rectangle-16@2x.png";
import bg6 from "../assets/rectangle-3@2x.png";

const Blogs = () => {
  return (
    <div className=" w-full h-fit">
      {/* our blog */}
      <div className="w-full flex flex-col h-fit items-center gap-2">
        <h1 className="text-[2.63rem] mt-[100px] ">Our Blogs</h1>
        <p className="text-[0.88rem] text-slate-500 px-2">
          Dive into a World of Flavors, Trends, and Behind-the-Scenes Stories
        </p>
      </div>
      {/* trending Blogs */}
      <div className="w-full h-fit mt-[2rem] mx-auto">
        <div className="md:w-[90%] mx-auto ">
          <p className="font-bold text-[1.2rem] my-[1rem]">Trending Blogs</p>
          <div className="flex flex-col gap-2 md:flex-row justify-between items-center">
            <div className="relative min-w-[280px] w-[90%] mx-auto md:w-[60%] h-[400px]">
              <img
                src={app1}
                alt="bg"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  w-[90%]  h-[90%] flex flex-col justify-between">
                <p className="bg-black text-white w-fit px-3 py-1 rounded-xl">
                  May 23,2023
                </p>
                <div className="flex flex-col flex-wrap md:w-[40%]">
                  <p className="text-white">Fish & Tips, Places</p>
                  <p className="text-white font-bold md:text-[1.2rem]">
                    How to Go Salmon Fishing in Washington: An Angler's Guide
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-w-[280px] w-[90%] mx-auto md:w-[33%] h-[400px]">
              <img
                src={bg6}
                alt="bg"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  w-[90%]  h-[90%] flex flex-col justify-between">
                <p className="bg-black text-white w-fit px-3 py-1 rounded-xl">
                  May 23,2023
                </p>
                <div className="flex flex-col flex-wrap lg:w-[40%]">
                  <p className="text-white">Fish & Tips, Places</p>
                  <p className="text-white font-bold md:text-[1.2rem]">
                    How to Go Salmon Fishing in Washington: An Angler's Guide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit mt-[2rem]">
        <div className="md:w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row gap-2 justify-between">
            <div className="relative min-w-[280px] w-[90%] mx-auto md:w-[30%] h-[353px]">
              <img
                src={bg1}
                alt="bg"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  w-[90%]  h-[90%] flex flex-col justify-between">
                <p className="bg-black text-white w-fit px-3 py-1 rounded-xl">
                  May 23,2023
                </p>
                <div className="flex flex-col flex-wrap lg:w-[40%]">
                  <p className="text-white">Fish & Tips, Places</p>
                  <p className="text-white font-bold md:text-[1.2rem]">
                    How to Go Salmon Fishing in Washington: An Angler's Guide
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-w-[280px] w-[90%] mx-auto md:w-[30%] h-[353px]">
              <img
                src={bg5}
                alt="bg"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  w-[90%]  h-[90%] flex flex-col justify-between">
                <p className="bg-black text-white w-fit px-3 py-1 rounded-xl">
                  May 23,2023
                </p>
                <div className="flex flex-col flex-wrap lg:w-[40%]">
                  <p className="text-white">Fish & Tips, Places</p>
                  <p className="text-white font-bold md:text-[1.2rem]">
                    How to Go Salmon Fishing in Washington: An Angler's Guide
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-w-[280px] w-[90%] mx-auto md:w-[30%] h-[353px]">
              <img
                src={bg5}
                alt="bg"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  w-[90%]  h-[90%] flex flex-col justify-between">
                <p className="bg-black text-white w-fit px-3 py-1 rounded-xl">
                  May 23,2023
                </p>
                <div className="flex flex-col flex-wrap lg:w-[40%]">
                  <p className="text-white">Fish & Tips, Places</p>
                  <p className="text-white font-bold md:text-[1.2rem]">
                    How to Go Salmon Fishing in Washington: An Angler's Guide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto md:mt-[2rem] m">
        <p className="font-bold text-[1.2rem] my-[1rem]">Trending Blogs</p>
        <div className="flex flex-col md:flex-row  justify-around">
          <div className="md:w-[31%]">
            <div className="w-full h-[353px] relative">
              <img
                src={bg2}
                alt="img"
                className="w-full h-full rounded-xl object-cover"
              />
              <p className="bg-black text-white w-fit px-3 py-1 rounded-xl absolute bottom-[1rem] right-[1rem]">
                May 23,2023
              </p>
            </div>
            <div className="w-full mt-3">
              <p>Name Surname</p>
              <p className="text-[1.3rem]">
                How To go salmon fishing in Washington: ans Angle's Guide
              </p>
            </div>
          </div>

          <div className="md:w-[31%]">
            <div className="w-full h-[353px] relative">
              <img
                src={bg3}
                alt="img"
                className="w-full h-full rounded-xl object-cover"
              />
              <p className="bg-black text-white w-fit px-3 py-1 rounded-xl absolute bottom-[1rem] right-[1rem]">
                May 23,2023
              </p>
            </div>
            <div className="w-full mt-3">
              <p>Name Surname</p>
              <p className="text-[1.3rem]">
                How To go salmon fishing in Washington: ans Angle's Guide
              </p>
            </div>
          </div>
          <div className="md:w-[31%]">
            <div className="w-full h-[353px] relative">
              <img
                src={bg4}
                alt="img"
                className="w-full h-full rounded-xl object-cover"
              />
              <p className="bg-black text-white w-fit px-3 py-1 rounded-xl absolute bottom-[1rem] right-[1rem]">
                May 23,2023
              </p>
            </div>
            <div className="w-full mt-3">
              <p>Name Surname</p>
              <p className="text-[1.3rem]">
                How To go salmon fishing in Washington: ans Angle's Guide
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto md:mt-[2rem]">
        <div className="flex flex-col md:flex-row justify-around">
          <div className="md:w-[31%]">
            <div className="w-full h-[353px] relative">
              <img
                src={bg2}
                alt="img"
                className="w-full h-full rounded-xl object-cover"
              />
              <p className="bg-black text-white w-fit px-3 py-1 rounded-xl absolute bottom-[1rem] right-[1rem]">
                May 23,2023
              </p>
            </div>
            <div className="w-full mt-3">
              <p>Name Surname</p>
              <p className="text-[1.3rem]">
                How To go salmon fishing in Washington: ans Angle's Guide
              </p>
            </div>
          </div>

          <div className="md:w-[31%]">
            <div className="w-full h-[353px] relative">
              <img
                src={bg3}
                alt="img"
                className="w-full h-full rounded-xl object-cover"
              />
              <p className="bg-black text-white w-fit px-3 py-1 rounded-xl absolute bottom-[1rem] right-[1rem]">
                May 23,2023
              </p>
            </div>
            <div className="w-full mt-3">
              <p>Name Surname</p>
              <p className="text-[1.3rem]">
                How To go salmon fishing in Washington: ans Angle's Guide
              </p>
            </div>
          </div>
          <div className="md:w-[31%]">
            <div className="w-full h-[353px] relative">
              <img
                src={bg4}
                alt="img"
                className="w-full h-full rounded-xl object-cover"
              />
              <p className="bg-black text-white w-fit px-3 py-1 rounded-xl absolute bottom-[1rem] right-[1rem]">
                May 23,2023
              </p>
            </div>
            <div className="w-full mt-3">
              <p>Name Surname</p>
              <p className="text-[1.3rem]">
                How To go salmon fishing in Washington: ans Angle's Guide
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mt-[1rem]">
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;
