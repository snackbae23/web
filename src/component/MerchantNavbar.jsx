import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSnackBae } from '../context/SnackBae';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

//image
import logo from '../assets/logo.png';
import userimgMale from '../assets/userimg.jpg';
import userimggirl from '../assets/userimggirl.jpg'

const MerchantNavbar = () => {
    const navigate = useNavigate();
    const { User, setLogin, login,
        setEditProfile,
        editprofile, } = useSnackBae();
    const [visible, setVisible] = useState();

    const [profileData, setProfileData] = useState('');
    useEffect(() => {
        // Fetch user profile data from localhost server
        setProfileData(User);

    }, [User]);

    const calculateCompletionPercentage = () => {
        const filledFieldsCount = Object.values(profileData).filter(value => value !== '').length;
        const totalFieldsCount = Object.keys(profileData).length;
        const completionPercentage = (filledFieldsCount / totalFieldsCount) * 100;
        return Math.round(completionPercentage);
    };


    return (
        <div className='relative bg-white  z-[1000] w-full h-[60px] sm:h-[70px] flex justify-between items-center px-[1rem]'>
            {/* logo */}
            <img
                onClick={
                    () => {
                        navigate('/');
                    }
                }
                src={logo}
                alt='logo'
                className='h-full aspect-auto p-[.5rem] cursor-pointer border-[60%]' />

            {
                User ? (
                    <div onClick={() => {
                        setVisible(!visible);
                    }}
                        className='relative cursor-pointer mr-[2rem]'>
                        <img src={User.gender != "female" ? (userimgMale) : (userimggirl)}
                            alt="userImage"
                            className={`w-[50px] aspect-square object-contain rounded-full absolute sm:left-[5px] sm:top-[5px] z-[-1]`} />
                        <CircularProgressbar
                            value={calculateCompletionPercentage()}
                            // text={`${calculateCompletionPercentage()}%`}
                            className='sm:size-[60px] size-[40px] '
                            strokeWidth={6}
                            styles={buildStyles({

                                // Colors
                                pathColor: `#004AAD`,
                                backgroundColor: '#004AAD',
                            })} />
                        <p className='absolute left-[50%] bottom-[-.1rem]  bg-[#FDE030] rounded-full px-[.8rem] py-[.3rem] font-Roboto font-[600] text-[.5rem]'>{`${calculateCompletionPercentage()}%`}</p>



                        <div className={`absolute right-0 top-[60px] bg-[#fde230]  rounded-sm shadow-md ${visible ? ('block') : ('hidden')}`}>
                            <button onClick={() => {
                                setEditProfile(!editprofile);
                            }}
                                className={`w-full  text-left  pt-[1rem] pb-[.5rem] pr-[2rem] pl-[1rem] font-Roboto text-[1.2rem] text-nowrap `}>Update profile</button>
                            <button onClick={() => {
                                localStorage.removeItem('user');
                                window.location.reload();
                            }}
                                className={`w-full text-left py-[1rem] pr-[2rem] pl-[1rem] font-Roboto text-[1.2rem] text-nowrap `}>Log out</button>
                        </div>

                    </div>
                ) :
                    (<button
                        onClick={() => {
                            setLogin(!login);
                        }}
                        className='sm:ml-[2rem] bg-[#FFD628] px-[1.4rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]'>Login</button>)
            }
        </div>
    )
}

export default MerchantNavbar