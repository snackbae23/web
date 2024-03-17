import React from "react";
import burger from "../assets/burger.png";
import rec from "../assets/recommend.png";
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
      <div className="menu-div flex flex-row py-8 sm:-ml-7 sm:px-2">
        {texts.map((text, index) => (
          <div
            key={index}
            className="my-div border-2 mr-4 rounded-xl px-2 py-2 cursor-pointer"
          >
            {text}
          </div>
        ))}
      </div>
      {/* menu ite */}
      <div className="menu-img">
        <div className="flex gap-1 sm:gap-3 md:gap-6 flex-wrap">
          {allMenuItem &&
            allMenuItem.map((item, index) => (
              <div
                key={index}
                className="relative mt-24 flex justify-center items-center"
              >
                <img
                  src={item.pic}
                  alt="Image description"
                  className="w-26 h-24 absolute -top-20 "
                />
                {/* <img
                                src={burger}
                                alt="Image description"
                                className="w-26 h-24 absolute -top-20  "
                            /> */}
                <div className="p-2 md:p-4 rounded-xl shadow-lg overflow-hidden w-fit">
                  <p className="text-lg font-medium pt-3 text-center">
                    {item.menuItem}
                  </p>
                  <div className=" px-2 py-2 cursor-pointer font-bold justify-center flex">
                    ₹ {item.price}
                  </div>

                  <div className="div-rec">
                    <div className="">
                      {/* {item.users.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex flex-row justify-center mx-4"
                                            >
                                                <img
                                                    src={rec}
                                                    alt="Image description"
                                                    className="w-12 h-6 "
                                                />
                                                <div className="">
                                                    <p className="text-lg font-medium text-slate-500 justify-center ">
                                                        {item.text}
                                                    </p>
                                                </div>
                                            </div>
                                        ))} */}
                      <div className="flex flex-row justify-center mx-4">
                        <img src={rec} alt="" className="w-12 h-6 " />
                        <div className="">
                          <p className="text-lg font-medium text-slate-500 justify-center ">
                            {item.users.length}+
                          </p>
                        </div>
                      </div>
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
