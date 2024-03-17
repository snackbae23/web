import React, { useState } from 'react'
import icon1 from '../assets/table-svgrepo-com 1.png';
import icon2 from '../assets/up-trend-svgrepo-com 1.png';
import icon3 from '../assets/users-group-svgrepo-com 1.png';
import section3 from '../assets/Rectangle 55210.png';
import Footer from '../Components/Footer';
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { ImCross } from 'react-icons/im';
import bgjoin from "../assets/bgjoin.png"
import joinpartner2 from "../assets/joinpartner2.png"
import joinpartner3 from "../assets/joinpartner3.png"
import check from "../assets/check.png"
import { Link } from 'react-router-dom';

function Joinpartner() {

    function openPopup() {
        document.getElementById('popup').style.display = "block";
        document.getElementById('background').style.filter = "blur(6Px)";
        document.getElementById('filter').style.opacity = "1";
        document.documentElement.scrollTop = 0;
    }
    function closePopup() {
        document.getElementById('popup').style.display = "none";
        document.getElementById('background').style.filter = "blur(0px)";
        document.getElementById('filter').style.opacity = "0";
    }

    const toast = useToast();
    const [formData, setFormData] = useState({ rname: "", email: "", outlet: "", phone: "", loc: "" });
    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    function resetForm() {
        setFormData({ rname: "", email: "", outlet: "", phone: "", loc: "" });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };

            const { data } = await axios.post(
                "https://coral-app-mvtxg.ondigitalocean.app/api/saveBecomePartnerData",
                formData,
                config
            );
            resetForm();
            closePopup();
            toast({
                title: "Message Sent",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "top-right",
            });

        } catch (error) {
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top-right",
            });
        }
    }

    return (
        <div className='relative top-[60px] w-[100%] h-fit '>
            {/* <Navbar/> */}
            {/* popup */}
            <div className='absolute top-20 lg:top-[60px] left-[5%] lg:left-[15%] z-[100] shadow-inner hidden' id='popup'>
                <div className='w-[90vw] lg:w-[70vw] mx-auto bg-[rgba(248,250,252,0.82)] pb-8 rounded-md flex justify-center items-center'>
                    <div className='w-[95vw] mx-auto lg:w-[90vw] h-fit flex flex-col gap-10'>
                        <div className='flex justify-between'>
                            <div></div>
                            <div className='text-2xl lg:text-4xl text-center font-semibold font-roboto pt-2'>Become a partner</div>
                            <button onClick={closePopup} className='text-right p-2'><ImCross /></button>
                        </div>
                        <div className='w-[90%] lg:w-[80%] mx-auto bg-[#ffffff] rounded-md p-4 h-fit'>
                            <form onSubmit={submitHandler}>
                                <div className='flex flex-col gap-10'>
                                    <div className='flex flex-row justify-between'>
                                        <div className='w-[49%] flex flex-col gap-3'>
                                            <label className='text-xs font-semibold font-roboto'>Restaurant name</label>
                                            <input required type='text' name='rname' onChange={changeHandler} value={formData.rname} className='w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md'></input>
                                        </div>
                                        <div className='w-[49%] flex flex-col gap-3'>
                                            <label className='text-xs font-semibold font-roboto'>Email address</label>
                                            <input required type='email' name='email' onChange={changeHandler} value={formData.email} className='w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md'></input>
                                        </div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='w-[49%] flex flex-col gap-3'>
                                            <label className='text-xs font-semibold font-roboto'>Number of Outlets</label>
                                            <input required type='text' name='outlet' onChange={changeHandler} value={formData.outlet} className='w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md'></input>
                                        </div>
                                        <div className='w-[49%] flex flex-col gap-3'>
                                            <label className='text-xs font-semibold font-roboto'>Point of Contact</label>
                                            <input required type='text' name='phone' onChange={changeHandler} value={formData.phone} className='w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md'></input>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='w-full flex flex-col gap-3'>
                                            <label className='text-xs font-semibold font-roboto'>Location</label>
                                            <input required type='text' name='loc' onChange={changeHandler} value={formData.loc} className='w-full h-[50px] p-3 border border-[#E2E8F0] rounded-md focus:outline-none focus:shadow-md'></input>
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-center'>
                                        <button className='w-[137px] h-[42px] bg-[#EAB308] border rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] font-roboto font-semibold tracking-tighter'>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            {/* first section  top-[15vh]*/}

            <div className=' w-[100%]  mb-[1rem] h-fit min-h-[80vh] flex flex-col justify-center items-center'>
                <div className='w-full h-full bg-[#000000df] opacity-0' id='filter'></div>
                <div id='background' className=' flex lg:flex-row flex-col-reverse w-[90%] mx-auto  justify-around items-center '>
                    <div className='lg:w-[70%] h-full flex flex-col gap-[1rem] justify-center lg:items-start items-center'>
                        <p className='text-[#020617] text-[2.6rem] leading-[2.6rem] xl:text-7xl font-roboto font-semibold'>Join as Partner</p>
                        <div className='font-opensans font-bold text-[#020617] -tracking-2 xl:text-lg '>Elevate Dining Experience with SnackBae</div>
                        <div className='font-normal text-sm xl:text-lg text-[#020617]  lg:w-[510px] font-opensans -tracking-2 text-center lg:text-start'>
                            At SnackBae, we believe in the transformative power of exceptional dining experiences. Our mission is to empower restaurants to elevate their offerings, connect with a vibrant community, and enhance customer retention. Join us on this culinary journey and let SnackBae be your partner in success.
                        </div>
                        <div className='mx-auto lg:mx-0'>
                            <button className='w-[137px] h-[42px] bg-[#EAB308] border rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] font-roboto font-semibold tracking-tighter' onClick={openPopup}>
                                Get Started
                            </button>
                        </div>
                    </div>
                    <img src={bgjoin} alt="bgjoinpartner" className='w-[80%] md:w-[60%] lg:w-[40%] aspect-square ' />
                </div>
            </div>

            {/* second section feature */}
            <div className='relative w-full h-fit sm:mt-[121px] bg-[#1E2833] py-[4rem] text-white flex justify-center items-center'>
                <div className='clip-path-polygon absolute top-[-120px] sm:h-[121px] w-[100%] bg-[#1E2833]'></div>
                <div className='w-[90%] mx-auto'>
                    <div className='flex flex-col gap-11 '>
                        {/* first part */}
                        <div className='flex flex-col lg:w-[515px] lg:h-[204px] gap-5'>
                            <div className='w-[111px] h-[37px] bg-[#FFFBEB] border rounded-full'>
                                <div className='text-[#EAB308] font-roboto leading-9 font-semibold text-sm text-center'>Features</div>
                            </div>
                            <div className='text-[#020617] lg:w-[515px] text-3xl lg:text-4xl font-roboto font-semibold'>Our Offerings</div>
                            <div className='lg:w-[515px] lg:h-[75px] text-xs lg:text-sm text-gray-400'>SnackBae is here to elevate your business to new heights with a suite of innovative offerings designed just for you.</div>
                        </div>
                        {/* second part */}
                        <div className='w-[100%] mx-auto flex flex-wrap md:flex-row gap-[1rem] justify-between items-center'>
                            {/* first box */}
                            <div className='flex flex-col  md:w-[30%]'>
                                <img src={icon1} alt='icons' className='w-[42px] h-[42px]'></img>
                                <div className='font-bold leading-10'>Marketing Services:</div>
                                <div className='lg:w-full text-sm font-opensans font-normal text-[##020617] -tracking-2 text-gray-400'>Boost your visibility and attract more customers. SnackBae provides a range of marketing tools, including push notifications, banner ads, social media promotions, and profile boosters, ensuring your business stands out in the crowd.</div>
                            </div>
                            {/* second box */}
                            <div className='flex flex-col md:w-[30%]'>
                                <img src={icon2} alt='icons' className='w-[42px] h-[42px]'></img>
                                <div className='font-bold leading-10'>Commissionless Payments:</div>
                                <div className='lg:w-full text-sm font-opensans font-normal text-[##020617] -tracking-2  text-gray-400'>Keep more of what you earn. SnackBae believes in fair partnerships, offering a commission-free payment solution. Enjoy a seamless transaction experience without unnecessary deductions.</div>
                            </div>
                            {/* third box */}
                            <div className='flex flex-col md:w-[30%]'>
                                <img src={icon3} alt='icons' className='w-[42px] h-[42px]'></img>
                                <div className='font-bold leading-10'>Customer Insights for Better Retention:</div>
                                <div className='lg:w-full text-sm font-opensans font-normal text-[##020617] -tracking-2 text-gray-400'>Unlock the power of data! Gain valuable insights into customer preferences and behaviors, allowing you to tailor your offerings and services for maximum satisfaction.</div>
                            </div>
                            {/* forth box */}
                            <div className='flex flex-col md:w-[30%]'>
                                <img src={icon3} alt='icons' className='w-[42px] h-[42px]'></img>
                                <div className='font-bold leading-10'>Customer Insights for Better Retention:</div>
                                <div className='lg:w-full text-sm font-opensans font-normal text-[##020617] -tracking-2 text-gray-400'>Unlock the power of data! Gain valuable insights into customer preferences and behaviors, allowing you to tailor your offerings and services for maximum satisfaction.</div>
                            </div>
                            {/* five box */}
                            <div className='flex flex-col md:w-[30%]'>
                                <img src={icon3} alt='icons' className='w-[42px] h-[42px]'></img>
                                <div className='font-bold leading-10'>Customer Insights for Better Retention:</div>
                                <div className='lg:w-full text-sm font-opensans font-normal text-[##020617] -tracking-2 text-gray-400'>Unlock the power of data! Gain valuable insights into customer preferences and behaviors, allowing you to tailor your offerings and services for maximum satisfaction.</div>
                            </div>
                            {/* six box */}
                            <div className='flex flex-col md:w-[30%]'>
                                <img src={icon3} alt='icons' className='w-[42px] h-[42px]'></img>
                                <div className='font-bold leading-10'>Customer Insights for Better Retention:</div>
                                <div className='lg:w-full text-sm font-opensans font-normal text-[##020617] -tracking-2 text-gray-400'>Unlock the power of data! Gain valuable insights into customer preferences and behaviors, allowing you to tailor your offerings and services for maximum satisfaction.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* third section What to upscale your business? Register as partner.*/}
            {/* <div className='relative w-full  h-[350px] md:h-[300px] lg:h-[680px] xl:h-[800px] my-auto'>
                <img src={section3} alt='image1' className='w-full h-full absolute top-0 z-20'></img>
                <div className='bg-[#000000] w-full h-full absolute top-0 z-30 opacity-50'></div>
                <div className='lg:w-[515px] lg:h-[382px] absolute lg:top-[24%] lg:left-[10%] p-7 lg:p-0 flex flex-col gap-6 z-40'>
                    <div className='w-[115px] h-[35px] bg-[#FFFBEB] rounded-full hidden lg:flex justify-center items-center'>
                        <div className='text-[#EAB308] font-roboto leading-8 font-semibold text-sm text-center'>Join us!</div>
                    </div>
                    <div className='w-full lg:w-[490px] -tracking-2 text-[#ffffff] text-2xl lg:text-4xl font-roboto font-semibold'>Discover new possibilities with SnackBae – where your success is our priority!</div>
                    <div className='w-full lg:w-[515px] lg:h-[75px] text-sm -tracking-2 text-[#ffffff] font-normal text-left opacity-70 lg:opacity-100'>At SnackBae, we understand the unique needs of merchants like you. Join our platform to not only streamline your operations but also to create meaningful connections with your customers.</div>
                    <button onClick={openPopup} className='mx-auto lg:mx-0 mt-3 lg:mt-0 w-[137px] h-[42px] bg-[#EAB308]  rounded-md px-[19px] py-[10px] flex justify-center items-center text-[#ffffff] font-roboto font-semibold tracking-tighter '>
                        Get Started
                    </button>
                </div>
            </div> */}

            <div className='w-full h-full mb-[1rem] relative'>
                <p className=' font-roboto font-[600] leading-[38px] px-6 py-2 bg-[#eab208b4] inline rounded-3xl relative lg:top-[70px] lg:left-[110px] top-[10px] opacity-80'>About Us</p>
                <div className='w-[100%] flex md:flex-row flex-col-reverse justify-around items-center'>
                    <div className='md:w-[40%] text-center md:text-start'>
                        <p className='text-[2.6rem] font-roboto font-[600] leading-[60px]'>Vision</p>
                        <p className=' font-opensans font-[700] leading-[25px]'>Elevate Dining Experience with SnackBae</p>
                        <p className=' font-opensans font-[400] leading-[25px] w-[80%] mx-auto md:m-0'>At SnackBae, we believe in the transformative power of exceptional dining experiences. Our mission is to empower restaurants to elevate their offerings, connect with a vibrant community, and enhance customer retention. Join us on this culinary journey and let SnackBae be your partner in success.</p>
                    </div>
                    <img src={joinpartner2} alt='joinpartner2' className='w-[50%] md:w-[30%] aspect-square'></img>
                </div>
                <div className='w-[100%] flex md:flex-row-reverse flex-col-reverse justify-around items-center'>
                    <div className='md:w-[40%] text-center md:text-start'>
                        <p className='text-[2.6rem] font-roboto font-[600] leading-[60px]'>Mission</p>
                        <p className=' font-opensans font-[400] leading-[25px] w-[80%] mx-auto md:m-0 '>At SnackBae, we believe in the transformative power of exceptional dining experiences. Our mission is to empower restaurants to elevate their offerings, connect with a vibrant community, and enhance customer retention. Join us on this culinary journey and let SnackBae be your partner in success.</p>
                    </div>
                    <img src={joinpartner3} alt='joinpartner3' className='w-[50%] md:w-[30%] aspect-square'></img>
                </div>
            </div>

            {/* fourth section  */}


            <div className='w-full h-fit relative'>
                <div className='relative w-full h-fit  flex flex-col items-center '>
                    <div className='w-full  bg-[#EAB308] pt-[2rem] pb-[10rem] text-center'>
                        <p className='font-roboto text-white font-[600] text-[2.6rem]'>Simple Pricing for your business</p>
                        <p className='font-roboto text-gray-200 font-[100] text-[1.3rem]'>plans that are carefully crafted to suit your business</p>
                    </div>
                    <div className='md:w-[80%] relative top-[-120px] mx-auto text-center  '>
                        <div className='mt-[2rem] lg:h-[600px] h-fit flex flex-row flex-wrap  gap-[2rem] justify-center '>
                            {/* white Part */}
                            <div className='w-[100%]  max-w-[400px] h-fit  min-h-[600px] mx-auto p-[2rem] flex flex-col bg-white justify-center items-center rounded-md shadow-lg'>
                                <div className='border-b-2 text-start'>
                                    <p className=' font-roboto font-[500] leading-[51px] text-[2.8rem] tracking-[-1px] '>Starter plan</p>
                                    <p className='text-gray-400 font-roboto  leading-[32px]'>Unleash the Power of Your Business with Free Plan.</p>
                                    <p className=' font-roboto font-[600] leading-[71px] text-[3rem] tracking-[-1px] '>FREE <span className='font-roboto font-[300] text-gray-400 leading-[29px] text-[1.3rem] tracking-[-1px]'>Forever</span></p>
                                </div>
                                <div className='w-[100%]'>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Listing</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Enhanced Menu Visibility</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Manage Table Booking </p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Payment Integration</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Custom Offers</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Business Analytics</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Marketing Services</p>
                                    </div>
                                    <div className='mt-[1rem]'></div>
                                    <Link><p className=' py-1 border-2 border-black font-roboto font-[400] rounded-md leading-[40px]'>Get Started</p></Link>
                                </div>
                            </div>

                            {/* yellow part */}
                            <div className='w-[100%] h-fit max-w-[400px] mx-auto p-[2rem] flex flex-col bg-[#EAB308] justify-center items-center rounded-md shadow-xl'>
                                <div className='border-b-2 text-start'>
                                    <p className=' font-roboto font-[500] leading-[51px] text-[2.8rem] tracking-[-1px] '>Premium</p>
                                    <p className='text-[#3C3C3C] font-roboto  leading-[32px]'>Take Your Business to the Next Level with Business Plan.</p>
                                    <p className=' font-roboto font-[600] leading-[71px] text-[3rem] tracking-[-1px] '>₹699 <span className='font-roboto font-[300] text-[#3C3C3C] leading-[29px] text-[1.3rem] tracking-[-1px]'>per month</span></p>
                                </div>
                                <div className='w-[100%]'>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>All Free features</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Complete Business Analytics</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Customer Insights</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Commission-less Payments</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Loyalty Tools</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>Advanced Marketing Tools</p>
                                    </div>
                                    <div className='flex gap-[1rem] items-center py-2'>
                                        <img src={check} alt="check" className='w-[1.2rem] h-[90%]' />
                                        <p className='font-[500] text-[1.1rem] '>24/7 Priority Support</p>
                                    </div>
                                    <div className='mt-[1rem]'></div>
                                    <Link><p className=' py-1 bg-[#1B223C] text-[#EAB308] font-roboto font-[400] rounded-md leading-[40px]'>contact sales</p></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  footer */}
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Joinpartner