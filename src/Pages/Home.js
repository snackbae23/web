import React, { useState, useEffect } from 'react';

//item
import Navbar1 from '../Components/Navbar1'
import Footer from '../Components/Footer';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import TeamSlider from '../Components/TeamSlider';
import team from "../Components/FoodParadiseHome"
import FoodSlider from '../Components/FoodSlider';


//image
import bgImg from "../assets/homeHero.png"
import bars from "../assets/bars.png"
import homepic from "../assets/homepic.png"
import { Link } from 'react-router-dom';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from 'axios';
import './Home.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {


  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);
  const changeRestaurantNameHandler = (event) => {
    setRestaurantName(event.target.value);

    if (restaurantName == '')
      setRestaurantData([]);
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://coral-app-mvtxg.ondigitalocean.app/api/searchRestaurant?name=${restaurantName}`,
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setRestaurantData(response.data);
        console.log("restaurantData  : ", restaurantData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => { }, [restaurantName]);

  //image for Foodie’s Paradise section
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [bars, bars, bars, bars, bars, bars, bars, bars, bars, bars, bars, bars, bars, bars, bars, bars, bars, bars]; // Replace with your actual images
  const captions = ['Roof Top 1', 'Roof Top 2', 'Roof Top 3', 'Roof Top 4', 'Roof Top 5', 'Roof Top 6', 'Roof Top 7', 'Roof Top 8', 'Roof Top 9', 'Roof Top 10', 'Roof Top 11', 'Roof Top 12', 'Roof Top 13', 'Roof Top 14', 'Roof Top 15', 'Roof Top 16', 'Roof Top 17', 'Roof Top 18']; // Replace with your actual captions

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='w-full h-fit'>
      {/* <Navbar1 /> */}
      <div className='relative top-[70px] w-full h-fit '>
        {/* hero section */}
        <div className='w-full h-[95vh] relative '>
          <img src={bgImg} className='h-full md:object-fill absolute top-0 z-[-1]' alt='heroImage'></img>
          <div className='md:w-[80%] w-full absolute top-[50%] left-[10%] translate-x-[-10%] translate-y-[-50%] '>
            <p className='md:w-[50%] w-full text-[3.6rem] md:text-[4.8rem] text-white tracking-tighter leading-[100px]'>
              Planning for your <span className='text-[#FFD601]'>next Dining ?</span></p>

            {/* input */}
            <div className='mt-[1rem] md:w-[55%] sm:w-[75%] w-full'>
              <div className="relative flex flex-col items-center w-full ">
                <AiOutlineSearch className="absolute left-4 top-4 text-gray-300 text-[1.7rem]" />
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Embark on your search adventure!"
                  className=" pl-12  w-full h-[3.6rem] border rounded-md  bg-[#FFFFFF33]  text-gray-100 text-[1.1rem] "
                  value={restaurantName}
                  onChange={changeRestaurantNameHandler}
                />
                <div className="flex flex-col gap-2 w-full">
                  {restaurantData &&
                    restaurantData.map((restaurant) => (
                      <Link to={`/user/restaurant/${restaurant._id}`}>
                        <div className="w-full flex gap-3 p-2 bg-[#d9d5d5] border-b-gray-400 z-[200] mt-1 items-center hover:bg-[#d7d6d6]" key={restaurant._id}>
                          {/* logo */}
                          <div>
                            <img src={restaurant.logo} className="w-10"></img>
                          </div>
                          {/* name and location */}
                          <div className="flex flex-col ">
                            <div className="font-bold">{restaurant.restaurantName}</div>
                            <div className="">{restaurant.location}</div>
                          </div>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Foodie’s Paradise */}
        <div className='mt-[3rem] border-b-2 border-[#0000004A]'>
          <p className='text-[2rem] font-sans font-[400] text-center'>Foodie’s Paradise</p>
          <p className='text-[1.2rem] text-[#64748B] font-sans font-[400] text-center'>Explore wide variety of Foodspots</p>

          {/* swiper */}


          <div className='my-[1rem] ml-[1rem]'>
            <TeamSlider team={team} size={130} />
          </div>

        </div>

        {/* Trending Now */}
        <div className='mt-[1rem] border-b-2 border-[#0000004A]'>
          <p className='text-[2rem] font-sans font-[700] text-[#585F6B] w-[90%] mx-auto'>Trending Now</p>

          {/* swiper2 */}
          <div className='my-[2rem] w-[94%] mx-auto'>
            <FoodSlider size={290} />
          </div>

        </div>

        {/* homepic */}
        <div className='mx-auto w-fit my-[2rem]'>
          <img src={homepic} alt="homepic" />
        </div>

        {/* Nearby */}
        <div className='mt-[1rem] border-b-2 border-[#0000004A]'>
          <p className='text-[2rem] font-sans font-[700] text-[#585F6B] w-[90%] mx-auto'>Nearby</p>

          {/* swiper2 */}
          <div className='my-[2rem] w-[94%] mx-auto'>
            <FoodSlider size={290} />
          </div>

        </div>

        {/* Newly Added */}
        <div className='my-[1rem]'>
          <p className='text-[2rem] font-sans font-[700] text-[#585F6B] w-[90%] mx-auto'>Newly Added</p>

          {/* swiper2 */}
          <div className='my-[2rem] w-[94%] mx-auto'>
            <FoodSlider size={290} />
          </div>
        </div>


        {/* Footer */}
        <Footer className=" mt-[1rem]" />
      </div>
    </div>
  )
}

export default Home