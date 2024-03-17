import React from "react";
import { Link } from "react-router-dom";
import chinesse from "../assets/chinesee.png";
import foodHome from "../assets/foodHome.png";
import allstudent from "../assets/allstudent.png";

const FoodSlider = ({ size }) => {
  const items = [
    {
      name: "Oh!Calcutta",
      location: "Chinar Park",
      image: foodHome,
      logo: chinesse,
      recommendationImage: allstudent,
      recommendations: 100,
    },
    {
      name: "Oh!Calcutta",
      location: "Chinar Park",
      image: foodHome, 
      logo: chinesse, 
      recommendationImage: allstudent, 
      recommendations: 150,
    },
    {
      name: "Oh! Calcutta",
      location: "Chinar Park",
      image: foodHome,
      logo: chinesse,
      recommendationImage: allstudent,
      recommendations: 100,
    },
    {
      name: "Oh!Calcutta",
      location: "Chinar Park",
      image: foodHome, 
      logo: chinesse, 
      recommendationImage: allstudent, 
      recommendations: 150,
    },
    {
      name: "Oh!Calcutta",
      location: "Chinar Park",
      image: foodHome,
      logo: chinesse,
      recommendationImage: allstudent,
      recommendations: 100,
    },
    {
      name: "Oh!Calcutta",
      location: "Chinar Park",
      image: foodHome, 
      logo: chinesse, 
      recommendationImage: allstudent, 
      recommendations: 150,
    },
    {
      name: "Oh!Calcutta",
      location: "Chinar Park",
      image: foodHome,
      logo: chinesse,
      recommendationImage: allstudent,
      recommendations: 100,
    },
    {
      name: "Oh!Calcutta",
      location: "Chinar Park",
      image: foodHome, 
      logo: chinesse, 
      recommendationImage: allstudent, 
      recommendations: 150,
    },
    {
      name: "Oh!Calcutta",
      location: "Chinar Park",
      image: foodHome,
      logo: chinesse,
      recommendationImage: allstudent,
      recommendations: 100,
    },
    {
      name: "Oh!Calcutta",
      location: "Chinar Park",
      image: foodHome, 
      logo: chinesse, 
      recommendations: 150,
    },
    {
      name: "Oh!Calcutta",
      location: "Chinar Park",
      image: foodHome,
      logo: chinesse,
      recommendationImage: allstudent,
      recommendations: 100,
    },
    {
      name: "Oh! Calcutta",
      location: "Chinar Park",
      image: foodHome, 
      logo: chinesse, 
      recommendationImage: allstudent, 
      recommendations: 150,
    },
    // Add more items as needed
  ];

  return (
    <div className="overflow-x-auto whitespace-nowrap scroll-wheel">
      <div
        className="flex gap-[1rem] my-[1rem]"
        style={{ width: items.length * size }}
      >
        {items.map((item, index) => (
          <Link key={index} to={`/details/${item.name}`}>
            <div className={`w-[${size}px]`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full object-contain"
              />
              {/* mid */}
              <div className="relative w-full flex justify-around items-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="relative top-[-15px]"
                />
                <div>
                  <p className="font-[700] text-[#0000008C] text-[1.6rem]">
                    {item.name}
                  </p>
                  <p className="font-[400] text-[#0000008C] text-[1.2rem]">
                    {item.location}
                  </p>
                </div>
              </div>
              {/* last */}
              <div className="relative bg-[#FFD601] w-full rounded-b-md flex justify-around items-center py-[.5rem]">
                <div className="relative h-full ">
                  <img
                    src={item.recommendationImage}
                    alt="allstudent"
                    className="w-[65.61px]"
                  />
                </div>
                <p className="font-[700] text-[#0000008C] text-[1.1rem] ">
                  {item.recommendations}
                </p>
                <p className="font-[700] text-[#0000008C] text-[1.1rem] ">
                  Recommendation
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodSlider;
