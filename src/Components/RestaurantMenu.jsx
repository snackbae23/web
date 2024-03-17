import React from "react";
// import burger from "../assets/burger.png";
import rec from "../assets/allstudent.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const texts = ["All", "Starter", "Burgers", "Momos", "Desserts"];

const price = ["₹240"];
const recommend = [{ image: rec, text: "1000+" }];

function RestaurantMenu({ restaurantData }) {
  const { id } = useParams();
  const [allMenuItem, setAllMenuItem] = useState();

  const fetchMenu = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://coral-app-mvtxg.ondigitalocean.app/api/menu/${id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setAllMenuItem(response.data);
        console.log("all menu data : ", allMenuItem);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div className="menu-page h-[fit]  w-[90%] mx-auto lg:px-4 sm:px-2  pb-8">
      <div className="menu-head  text-slate-600 font-bold sm:pt-4 sm:text-2xl relative sm:-ml-4 lg:text-3xl">
        Explore Menu
      </div>
      {/* types */}
      <div className="menu-div flex flex-wrap justify-center py-8 gap-[1rem]">
        {texts.map((text, index) => (
          <div
            key={index}
            className="my-div border-2  rounded-xl px-6 py-2 cursor-pointer"
          >
            {text}
          </div>
        ))}
      </div>
      {/* menu ite */}
      <div className="menu-img w-full">
        <div className=" w-full mx-auto flex gap-[50px] justify-center flex-wrap">
          {allMenuItem &&
            allMenuItem.map((item, index) => (
              <div
                key={index}
                className="relative w-[280px] mt-24  flex justify-center"
              >
                <img
                  src={item.pic}
                  alt="Image description"
                  className="w-[150px] object-contain aspect-square absolute -top-[100px]"
                />

                <div className="w-full p-2 py-[2rem] rounded-xl shadow-lg">
                  <p className="w-full text-lg font-medium my-3 text-center overflow-ellipsis">
                    {item.menuItem}
                  </p>
                  <div className="font-bold text-center my-3">
                    ₹ {item.price}
                  </div>

                  <div className="div-rec">
                      <div className="flex flex-wrap justify-center  mx-4">
                        <div className="w-20 h-9">
                        <img src={rec} alt="" className="w-full h-full object-contain " />
                          </div>
                          <p className="text-lg font-medium text-slate-500 ">
                            {item.users.length}+
                          </p>
                      </div>
                  </div>
                  <div key={index} className="text-slate-500 text-center">
                    Recommendations
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
