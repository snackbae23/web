import React, { useEffect, useState } from 'react';
import { useSnackBae } from "../context/SnackBae";
import { useParams } from 'react-router-dom';
import axios from 'axios';

//image
import logo from '../assets/logo.png';
import logo1 from '../assets/logo1.png';

const FlashScreen = () => {
    const {
        User,
        restaurentdata,
        setRestaurentData,
        setRecommend } = useSnackBae();
    const { id } = useParams();
    // console.log('id', id);

    useEffect(() => {
        fetchRestaurentData();
        console.log("restaurentdata", restaurentdata);

    }, []);

    const fetchRestaurentData = async () => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://seashell-app-lgwmg.ondigitalocean.app/api/getRestaurantDetails/${id}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                // console.log(JSON.stringify(response.data));
                setRestaurentData(response.data.restaurant);
                const a = response.data.restaurant?.recommendedBy;
                // console.log(a);
                const userId = User._id;

                if (userId) {
                    if (a) {
                        const containsString = (a, userId) => a.some((element) => element.includes(userId));
                        // console.log(userId);
                        if (containsString(a, userId)) {
                            // console.log(containsString(a, userId));
                            // let recommand = document.getElementById("recommand");
                            // recommand.style.backgroundColor = "#FFD628";
                            setRecommend(true);
                        } else {
                            // let recommand = document.getElementById("recommand");
                            // recommand.style.backgroundColor = "";
                            setRecommend(false);
                        }
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            });

    };

    return (
        <div className='w-full h-[100vh] flex flex-col items-center justify-center relative'>
            <div className=' flex flex-col items-center justify-center w-full h-full'>
                {
                    restaurentdata?.name ?
                        (<img src={restaurentdata.image} alt="logo" className='w-[100px] aspect-auto rounded-xl object-cover' />)
                        : (<img src={logo1} alt="logo" className='w-[100px] aspect-auto rounded-xl object-cover animate-ping' />)
                }
                <p
                    className=' font-Roboto font-[500] text-[1.5rem] leading-[1.2rem] mt-[.5rem]'>
                    {restaurentdata?.name}-{restaurentdata?.outletAddress?.split(",")[1]}
                </p>
            </div>
            <div className='absolute bottom-[5rem] left-[50%] translate-x-[-50%] w-fit h-fit '>
                <p className=' font-Roboto font-[500] text-[.9rem] leading-[1rem] ml-[2rem] z-[1]'>Powered by</p>
                <img src={logo} alt="logo" className='w-[120px] aspect-auto rounded-xl object-cover relative top-[-1rem] z-[-1]' />
            </div>
        </div>
    )
}

export default FlashScreen
