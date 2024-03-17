import React, { useEffect, useState } from "react";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide3.jpg";
import slide3 from "../assets/slide2.jpg";
import slide4 from "../assets/slide8.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";
import larrow from "../assets/larrow.png";
import rarrow from "../assets/rarrow.png";

const Slider = () => {
  useEffect(() => {
    const handleNextClick = () => {
      let lists = document.querySelectorAll(".item");
      document.getElementById("slide").appendChild(lists[0]);
    };

    const handlePrevClick = () => {
      let lists = document.querySelectorAll(".item");
      document.getElementById("slide").prepend(lists[lists.length - 1]);
    };

    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");

    if (nextButton && prevButton) {
      nextButton.addEventListener("click", handleNextClick);
      prevButton.addEventListener("click", handlePrevClick);
    }

    return () => {
      if (nextButton && prevButton) {
        nextButton.removeEventListener("click", handleNextClick);
        prevButton.removeEventListener("click", handlePrevClick);
      }
    };
  }, []);

  return (
    <div className="  flex my-auto items-center  justify-evenly   transform translate-x-[0.002%] translate-y-[-40%] transition-all h-[90vh] mt-32 -mb-[17.45rem] ">
      <div id="slide">
        {/* Your item components go here */}
        <div className="item" style={{ backgroundImage: `url(${slide1})` }}>
          <div className="content">
            <button className=" rounded-3xl  px-1   text-nowrap bg-amber-50 text-amber-500">
              <p className=" font-roboto  font-semibold text-base ">Coupons</p>
            </button>

            <div className="name">Personalised Discovery</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur. Tincidunt scelerisque
              commodo proin faucibus.Lorem ipsum dolor sit amet consectetur.
              Tincidunt scelerisque commodo proin faucibus.
            </div>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${slide2})` }}>
          <div className="content">
            <button className=" px-1   text-nowrap  rounded-3xl   bg-amber-50 text-amber-500">
              <p className=" font-roboto  font-semibold text-base ">Coupons</p>
            </button>

            <div className="name">Personalised Discovery</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur. Tincidunt scelerisque
              commodo proin faucibus.Lorem ipsum dolor sit amet consectetur.
              Tincidunt scelerisque commodo proin faucibus.
            </div>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${slide3})` }}>
          <div className="content">
            <button className="w-[8vw]  rounded-3xl   bg-amber-50 text-amber-500">
              <p className=" font-roboto  font-semibold text-base ">Coupons</p>
            </button>

            <div className="name">Personalised Discovery</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur. Tincidunt scelerisque
              commodo proin faucibus.Lorem ipsum dolor sit amet consectetur.
              Tincidunt scelerisque commodo proin faucibus.
            </div>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${slide4})` }}>
          <div className="content">
            <button className=" px-1   text-nowrap rounded-3xl   bg-amber-50 text-amber-500">
              <p className=" font-roboto  font-semibold text-base ">Coupons</p>
            </button>

            <div className="name">Personalised Discovery</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur. Tincidunt scelerisque
              commodo proin faucibus.Lorem ipsum dolor sit amet consectetur.
              Tincidunt scelerisque commodo proin faucibus.
            </div>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${slide5})` }}>
          <div className="content">
            <button className=" px-1   text-nowrap  rounded-3xl   bg-amber-50 text-amber-500">
              <p className=" font-roboto  font-semibold text-base ">Coupons</p>
            </button>

            <div className="text-[42px] leading-[56px] font-semibold">
              Personalised Discovery
            </div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur. Tincidunt scelerisque
              commodo proin faucibus.Lorem ipsum dolor sit amet consectetur.
              Tincidunt scelerisque commodo proin faucibus.
            </div>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${slide6})` }}>
          <div className="content">
            <button className=" px-1   text-nowrap rounded-3xl bg-amber-50 text-amber-500">
              <p className=" font-roboto  font-semibold text-base ">Coupons</p>
            </button>

            <div className="name">Personalised Discovery</div>
            <div className="des">
              Lorem ipsum dolor sit amet consectetur. Tincidunt scelerisque
              commodo proin faucibus.Lorem ipsum dolor sit amet consectetur.
              Tincidunt scelerisque commodo proin faucibus.
            </div>
          </div>
        </div>
      </div>

      <div className=" buttons w-[87%]  bottom-[10%] absolute z-10 flex flex-row space-x-2  ">
        <button id="prev">
          <img src={larrow} className="z-[100]"></img>
        </button>
        <button id="next">
          <img src={rarrow} className="z-[100]"></img>
        </button>
      </div>
    </div>
  );
};

export default Slider;
