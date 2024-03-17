import React from "react";
import ellipse from "../assets/Ellipse 422.png";
import ellipseA from "../assets/Ellipse 426.png";
import Footer from "../Components/Footer";
import rect from "../assets/Rectangle 55207.png";
import ellipseB from "../assets/Ellipse 424.png";
import TeamSlider from "../Components/TeamSlider";
import bg5 from "../assets/bg-5.png";
import app from "../assets/appstore.png";
import team from "../Components/Team";

const AboutUs = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="">
        {/* First Part */}
        <div className="lg:h-[650px] h-[90vh] sm:h-[75vh] md:h-[60vh] w-[100%] my-auto overflow-hidden bg-slate-50 relative">
          {/* Left Part */}
          <div className="lg:w-[39.75rem] w-full mx-auto lg:h-[22rem] flex gap-[1.5rem] flex-col absolute lg:top-[28vh] top-36 lg:left-[7vw] text-center lg:text-left">
            <div className="w-[7.125rem] h-12 rounded-3xl py-1 px-4 gap-2.5 bg-amber-50 hidden lg:flex ">
              <div className=" font-roboto text-lg leading-9 font-semibold items-center text-[#EAB308] z-50">
                About Us
              </div>
            </div>
            <div className="lg:hidden mx-auto text-5xl font-roboto font-semibold">
              About Us
            </div>
            <div className="text-[#020617] text-2xl lg:text-5xl  font-roboto font-semibold">
              Vision
            </div>
            <div className="font-opensans font-bold text-[#020617] -tracking-[2%] xl:text:lg">
              Empowering Merchants, Enriching Communities
            </div>
            <div className="font-normal text-sm text-[#020617] w-full font-opensans -tracking-[2%] xl:text-lg text-center lg:text-left mx-auto lg:mx-0">
              SnackBae envisions a future where merchants thrive, empowered by innovative solutions, fostering vibrant and connected communities.
            </div>
            <button className="mx-auto lg:mx-0 w-36 h-11 bg-[#EAB308] border rounded-md px-5 py-3 flex justify-center items-center text-[#ffffff] font-roboto text-base font-semibold tracking-tighter ">
              Get Started
            </button>
          </div>

          {/* Right Part */}
          <div className="hidden lg:flex absolute -bottom-4 -right-2">
            <img
              src={ellipse} alt="image1"
              className="w-[48vw] min-h-[52vh] h-[62%]"
              loading="lazy"
            ></img>
            {/* width={756} height={696}  */}
          </div>
          <div className="hidden lg:flex absolute -bottom-4 right-0">
            <img
              src={ellipseA}
              alt="image1"
              className="w-[45vw] min-h-[50vh] h-[60%]"
              loading="lazy"
            ></img>
            {/* height={626} width={716} */}
          </div>
        </div>

        {/* Second Part */}
        <div class=" bg-white relative mt-12 hidden lg:flex">
          <div class="flex justify-center">
            {/* left Part */}
            <div className="lg:ml-[10vw] pr-10">
              <div className="">
                <img src={rect} className="" alt="Img" loading="lazy"></img>
                <img
                  className=" absolute h-[47vh] left-1 rounded-full top-[1vh] w-[22vw] z-50"
                  src={ellipseB}
                  alt="Img"
                  loading="lazy"
                ></img>
              </div>
            </div>

            {/* Right Part */}
            <div className="w-[33.75rem] h-[35rem] my-auto mx-auto gap-6 left-[35vw] mt-36">
              <div className="w-[7.125rem] h-12 rounded-3xl py-1 px-4 gap-2.5 bg-amber-50 ">
                <div className=" font-roboto text-lg leading-9 font-semibold items-center text-[#EAB308] z-50">
                  Discover
                </div>
              </div>
              <div className="text-[#020617] text-5xl font-roboto font-semibold mt-4 mb-1">
                Mission
              </div>
              <div className="font-roboto text-sm mb-1 font-semibold">Empowering Dining Experiences</div>
              <div className="font-normal text-sm text-[#020617] w-[31.875rem] font-opensans -tracking-[2%]">
                SnackBae fosters seamless connections between diners and merchants, redefining the way people experience and enjoy their favorite eateries.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col border rounded-xl border-gray-400 py-10 px-7 my-10 w-full mx-auto mt-24 lg:hidden ">
          <div>
            <div className="mx-4">
              <img src={rect} className="" alt="Img" loading="lazy"></img>
              <img
                className="hidden lg:absolute z-50 top-[60vh] -left-2  h-[44vw]"
                src={ellipseB}
                alt="Img"
                loading="lazy"
              ></img>
            </div>
          </div>
          <div className="w-full my-auto mx-auto mt-10">
            <div className="text-[#020617] text-5xl font-roboto font-semibold my-4 text-center mx-auto">
              Mission
            </div>
            <div className="font-roboto text-sm mb-1 font-semibold text-center mx-auto">Empowering Dining Experiences</div>
            <div className="font-normal text-sm text-[#020617]  font-opensans -tracking-[2%] text-center mx-auto ">
              SnackBae fosters seamless connections between diners and merchants, redefining the way people experience and enjoy their favorite eateries.
            </div>
          </div>
        </div>

        {/* Third Part */}
        <div className="bg-white">
          <div className="flex gap-[1.5rem] flex-col lg:ml-24 ml-8">
            <div className="w-[7.125rem] h-12 rounded-3xl py-1 px-4 gap-2.5 bg-amber-50 hidden lg:flex">
              <div className=" font-roboto text-lg leading-9 font-semibold items-center text-[#EAB308] z-50 ">
                Discover
              </div>
            </div>
            <div className="text-[#020617] text-2xl md:text-4xl lg:text-5xl font-roboto font-semibold">
              Meet the Team
            </div>
          </div>
          <div className="lg:mx-24 mt-8 mx-5">
            <TeamSlider team={team} size={295}/>
          </div>
        </div>

        {/* Fourth Part */}
        {/* <div className="relative h-[400px] w-full md:h-[100vh] overflow-hidden">
          <img src={bg5} alt="image1" className="w-full h-full absolute z-10"></img>
          <div className="bg-[#000000] w-full h-full absolute z-20 opacity-50"></div>
          <div className=" absolute top-[7%] md:top-[10%] lg:top-[25%] w-[100%] h-[281px] flex flex-col gap-6 justify-center items-center  z-30">
            <button className="w-[130px] h-[50px]  md:w-[130px]  rounded-3xl py-1 px-6  bg-amber-50 text-amber-500 ">
              <p className="w-[7 mx-auto font-roboto  font-semibold text-base leading-10">
                App Links
              </p>
            </button>

            <div className=" w-[360px] md:w-[750px] md:h-[112px] font-roboto font-semibold text-[20px] md:text-[42px] text-center items-center leading-[32px] md:leading-[56px] text-white">
              Flavorful Experiences Await – Download the SnackBae App Today
            </div>
            <p className="sm:h-[25px] w-[360px] md:w-[515px] font-normaltext-[12px] md:text[14px] leading-[25px] font-sans text-center items-center text-white opacity-70">
              Download for android and iOS now
            </p>

            <img className="w-[340px] h-[47px] z-[100]" src={app} alt="image1"></img>
          </div>
        </div> */}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;

