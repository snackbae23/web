import React, { useEffect, useState } from 'react';
import { useSnackBae } from '../context/SnackBae';
import axios from 'axios';
//image
import burger from '../assets/burger.png';
import notliked from '../assets/notliked.png'
import good from '../assets/good.png'
import musttry from '../assets/musttry.png';
import recommandicons from '../assets/recommandicons.png';


// icons
import { CiStar } from "react-icons/ci";

const MenuCard = ({ items }) => {
  const { commentVisible, setCommentVisible, setMenuId, setLogin, User} = useSnackBae();
  const totalVotes = items.notLikedCount + items.likedCount + items.mustTryCount;
  const weightedSum = items.notLikedCount * 0 + items.likedCount * 2 + items.mustTryCount * 4;
  const averageRating = totalVotes > 0 ? (weightedSum / totalVotes) : 0;
  const roundedRating = parseFloat(averageRating.toFixed(1));

  return (
    <div
      onClick={() => {
        // if (User) {
          console.log(commentVisible);
          setCommentVisible(!commentVisible);
          console.log(commentVisible);
        // } else {
          // setLogin(true);
          // window.scrollTo({ top: 0, behavior: 'smooth' });
        // }
        setMenuId(items._id);
      }}
      className="min-w-[240px] w-[240px] h-fit p-[1rem] shadow-md rounded-md cursor-pointer"
    >
      <div className="w-full relative">
        <img
          src={items?.image}
          alt={items?.name}
          className=" sm:h-[150px]  h-[100px] aspect-auto object-contain mx-auto"
        />
        <div className="p-[.5rem] rounded-md flex items-center justify-start w-fit h-fit absolute top-[.3rem] sm:top-[1rem] left-[.3rem] sm:left-[1rem]  bg-white border-2">
          <div
            className={`${items.veg === "Yes" ? "bg-[#67CE67]" : "bg-[#ED4F4F]"
              } rounded-full w-[10px] aspect-square `}
          ></div>
        </div>
        <p className="w-fit px-[.5rem] rounded-xl bg-[#FFD628] font-[500] sm:text-[1.2rem] absolute bottom-[.3rem] sm:bottom-[1rem] right-[.3rem] sm:right-[1rem] ">
          ₹ {items.price}
        </p>
      </div>
      <div>
        <p className="font-Roboto font-[500] sm:text-[1.2rem] my-[.5rem] text-center text-nowrap text-ellipsis overflow-hidden">
          {items?.name}
        </p>
        {/* <div className="w-full flex justify-evenly ">
          <div className="flex flex-col items-center p-[.5rem] border-r-2">
            <p className="font-inter font-[500] text-[.9rem] sm:text-[1rem] mb-[.5rem]">
              {items.notLikedCount}
            </p>
            <img src={notliked} alt="notliked" />
            <p className="font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]">
              Not Liked
            </p>
          </div>
          <div className="flex flex-col items-center p-[.5rem] ">
            <p className="font-inter font-[500]  text-[.9rem] sm:text-[1rem] mb-[.5rem]">
              {items.likedCount}
            </p>
            <img src={good} alt="good" />
            <p className="font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]">
              Good
            </p>
          </div>
          <div className="flex flex-col items-center p-[.5rem] border-l-2">
            <p className="font-inter font-[500]  text-[.9rem] sm:text-[1rem] mb-[.5rem]">
              {items.mustTryCount}
            </p>
            <img src={musttry} alt="musttry" />
            <p className="font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]">
              Must try
            </p>
          </div>
        </div> */}

        <div className='relative mt-[.5rem]'>
          <p className='flex gap-[.1rem] items-center bg-[#004AAD] w-fit rounded-3xl text-white px-[.7rem] py-[.2rem] relative left-[75%] '>{roundedRating}<CiStar className='text-[1.2rem]' /></p>

          <div className='flex gap-[.3rem] mt-[1rem] items-center'>
            <img src={recommandicons} alt="recommandicons" className='w-[30%] aspect-auto' />
            <p className='text-[#004AAD] text-[16px] leading-[16.1px] font-inter font-[400]'>{items.notLikedCount + items.likedCount + items.mustTryCount} recommendations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard
