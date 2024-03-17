import React from "react";
import arrow from "../assets/arrow.png";
import ellipse from "../assets/Ellipse 422.png";
import ellipse2 from "../assets/ellipse1.png";
import ellipse_sm from "../assets/ellip-sm.png";
import ellipse_sm1 from "../assets/ellipse-sm2.png";
import ellipse_sm2 from "../assets/ellipse-sm3.png";
import ellipse_sm3 from "../assets/ellipse-sm4.png";
import rectbig from "../assets/rect1.png";
import rectsm from "../assets/rect-sm.png";
import rectsm2 from "../assets/rect-sm2.png";
import rect3 from "../assets/rect3.png";
import star from "../assets/star.png";
import Slider from "../Components/Slider";
import Faq from "../Components/Faq";
import bg5 from "../assets/bg-5.png";
import app from "../assets/appstore.png";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide3.jpg";
import slide3 from "../assets/slide2.jpg";
import slide4 from "../assets/slide8.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";
import imageBase from "../assets/Image Base.png";
import { IoClose } from "react-icons/io5";
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import OtpInput from "otp-input-react";
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase.config";
import { useToast } from "@chakra-ui/react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import axios from "axios";
import { Link } from "react-router-dom";
// import { toast, Toaster } from "react-hot-toast";

const Homepage = ({ login, setlogin, onScrollChange }) => {

  const [pic, setPic] = useState();
  const postDetails = async (pics) => {
    const formData = new FormData();
    formData.append("someExpressFiles", pics);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://coral-app-mvtxg.ondigitalocean.app/api/gallery",
      data: formData,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log(response?.data?.image_url);
        setPic(response.data.image_url);
        profileData.profileImage = response.data.image_url;
        console.log(profileData.profileImage);
        console.log(pic);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  // const [currentImage, setCurrentImage] = useState(0);
  const toast = useToast();
  const team = [
    { src: slide1 },
    { src: slide2 },
    { src: slide3 },
    { src: slide4 },
    { src: slide5 },
    { src: slide6 },
  ];

  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  // const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  //restaurantName form

  // login data
  const [formData, setFormData] = useState({
    ph: '',
    // keepLoggedIn: false,
  });

  const [mobile, setMobile] = useState(true);
  const [password, setPassword] = useState(false);
  const [profile, setProfile] = useState(false);
  // const passwordValue = parseInt(otp.join(''), 10);

  //current date
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  const [profileData, setProfileData] = useState({
    profileImage: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1709387339~exp=1709390939~hmac=2bbe2e46b4676e1e7592d5557de6c4768adbf2da781cd9c59e6660fd2b1dbba3&w=740',
    fullName: 'user',
    gender: 'male',
    dob: currentDate,
    email: 'abc@gmail.com',
    foodPreference: 'veg',
    anniversary: '',
    terms: false,
  });

  const handleChangeProfile = (e) => {
    const { name, value, type, checked, files } = e.target;

    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const onSignup = async () => {
    console.log("inside onsignup");
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {});
      const formatPh = "+" + ph;
      const confirmation = await signInWithPhoneNumber(auth, formatPh, recaptcha);
      console.log(confirmation);
      setUser(confirmation);
      // setMobile(false);
      setShowOTP(true);
    }
    catch (err) {
      console.log(err);
    }
  }

  const onOTPVerify = async () => {
    // setLoading(true);
    try {
      await user.confirm(otp);
      toast({
        title: "OTP verified",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
      setMobile(false);
      setShowOTP(false);

      // finding if user exists
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://coral-app-mvtxg.ondigitalocean.app/api/user/search?search=${ph}`,
        headers: {}
      };

      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));

          if (response.data.length != 0) {
            // if user exists
            console.log("inside if user exists");
            localStorage.setItem(
              "user",
              JSON.stringify({
                id: response.data[0]?._id,
                name: response.data[0]?.additionalDetails?.fullName,
                image: response.data[0]?.additionalDetails?.image,
                phone: response.data[0]?.contactNumber
              })
            );
            console.log(JSON.stringify({
              id: response.data[0]?._id,
              name: response.data[0]?.additionalDetails?.fullName,
              image: response.data[0]?.additionalDetails?.image,
              phone: response.data[0]?.contactNumber
            }));
            navigate('/home');
          }
          else {
            //create user profile
            formData.ph = ph;
            console.log(formData);
            const data = JSON.stringify(formData);
            console.log(data);
            let config1 = {
              method: 'post',
              maxBodyLength: Infinity,
              url: 'https://coral-app-mvtxg.ondigitalocean.app/api/user/create',
              headers: {
                'Content-Type': 'application/json'
              },
              data: data
            };

            axios.request(config1)
              .then((response) => {
                console.log(JSON.stringify(response.data));

              })
              .catch((error) => {
                console.log(error);
              });
            setProfile(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    catch (e) {
      console.log(e);
    }
  }

  //handle only the mobile number submit
  const handleSubmitMobileNumber = (e) => {
    e.preventDefault();
    // Handle form submission logic here with formData
    console.log('Form Data:', formData);
    setMobile(false);
    setPassword(true);
  };

  //handle naviagate to profile and add move to home
  const handleSubmitProfile = async (e) => {
    e.preventDefault();
    console.log('Profile data :', profileData);

    //posting data
    const data = JSON.stringify(profileData);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://coral-app-mvtxg.ondigitalocean.app/api/user/profile/create?search=${ph}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        localStorage.setItem(
                "user",
                JSON.stringify({
                  id: response.data?._id,
                  name: response.data?.additionalDetails?.fullName,
                  image: response.data?.additionalDetails?.image,
                  phone: response.data?.contactNumber
                })
              );

              console.log(JSON.stringify({
                id: response.data?._id,
                name: response.data?.additionalDetails?.fullName,
                image: response.data?.additionalDetails?.image,
                phone: response.data?.contactNumber
              }));

        //navigate to home 
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });

    setMobile(false);
    setPassword(false);
    setProfile(false);
    setlogin(false);
  };

  // chatgpt
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Check your scroll conditions here
  //     // For example, if you want to set login to false when scrolling occurs
  //     const shouldSetLogin = false; // Adjust the conditions as needed
  //     onScrollChange(shouldSetLogin);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [onScrollChange]);

  return (
    <div
      className="relative bg-white-A70 w-full  overflow-x-hidden overflow-y-hidden">
      <div className={`absolute w-full h-[90vh] top-[60px] `}>
        {
          login &&
          <div className="w-full">
            {/* blur */}
            <div className='absolute z-[100] w-full h-[92vh] bg-[rgba(95,95,95,0.82)] '></div>
          </div>
        }
        {
          login && mobile &&
          <div className="w-full">
            <div className="z-[200] max-w-[380px] w-[100%]  p-5  rounded-md flex flex-col  bg-white absolute top-[25%] left-[50%] z translate-x-[-50%] translate-y-[-50%] ">
              <div className="flex justify-between">
                <p className="font-[600] font-sans text-[1.8rem]">Login Or SignUp</p>
                <IoClose className="text-[1.4rem] cursor-pointer"
                  onClick={() => {
                    setlogin(prev => !prev);
                    setMobile(true)
                    setPassword(false)
                  }} />
              </div>
              <p className="font-[400] font-sans text-[.9rem] text-gray-400 mb-[.5rem]">Enter Mobile Number</p>
              <div className="relative w-full flex flex-col mx-auto">
                {/* mobileNo */}
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button className="bg-[#EAB308] font-sen font-[500] px-6 py-3 rounded-md uppercase mb-[.5rem] mt-4" onClick={onSignup}>Continue</button>
              </div>
              <div id="recaptcha-container"></div>
            </div>
          </div>
        }
        {
          login && showOTP &&
          <div className="z-[200] max-w-[380px] w-[100%] p-5 rounded-md flex flex-col bg-white absolute top-[70%] left-[50%] z translate-x-[-50%] translate-y-[-50%] ">
            <div className="flex justify-between">
              <p className="font-[600] font-sans text-[1.8rem]">Enter OTP</p>
              <IoClose className="text-[1.4rem] cursor-pointer"
                onClick={() => {
                  setlogin(prev => !prev);
                  setMobile(true)
                  setPassword(false)
                }} />
            </div>
            <p className="font-[400] font-sans text-[.9rem] text-gray-400 mb-[.5rem]">An OTP has been sent to +91 {ph}</p>
            <OtpInput
              value={otp}
              onChange={setOtp}
              OTPLength={6}
              otpType="number"
              disabled={false}
              autoFocus
              className="opt-container mb-3"
            ></OtpInput>

            <button className="bg-[#EAB308] font-sen font-[500] px-6 py-3 rounded-md uppercase mb-[.5rem]"
              onClick={onOTPVerify}
            >Verify</button>
            <p className=" capitalize">Didn't recieve code? <span className=" cursor-pointer text-[#EAB308]" onClick={handleSubmitMobileNumber}>Resend Code</span></p>
          </div>
        }
        {
          login && profile &&
          <div className="z-[200] max-w-[400px] w-[100%]  p-5  rounded-md flex flex-col  bg-white absolute top-[50%] left-[50%] z translate-x-[-50%] translate-y-[-50%] ">

            <p className="font-[600] font-sans text-[1.8rem]">Create Profile</p>

            {/* form */}
            <form className="flex flex-col">
              {/* image */}

              <label htmlFor="profileImage" className="relative inline-block w-20 h-20 overflow-hidden bg-gray-300 rounded-full cursor-pointer">
                {profileData.profileImage ? (
                  <div className="">
                    <img src={profileData.profileImage} alt="Profile" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <FaEdit size={20} className=" text-white" /> {/* Edit icon */}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-gray-600">Upload</span>
                  </div>
                )}
                <input
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  accept="image/*"
                  required
                  className="absolute inset-0 opacity-0"
                  onChange={({ target: { files } }) => {
                    // if (files)
                    //     setImage(URL.createObjectURL(files[0]))
                    postDetails(files[0]);
                    // handleChangeProfile(files);
                    // handleImagePreview(files);
                  }
                  }
                />
              </label>



              {/* fullName */}
              <div className="relative w-full flex flex-col">
                <label className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]" htmlFor="fullName">Full Name:</label>
                <input
                  className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                  type="text" id="fullName" name="fullName" required onChange={handleChangeProfile} />
              </div>
              {/* gender */}
              <label className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                htmlFor="gender">Gender:</label>
              <select
                className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                id="gender" name="gender" value={profileData.gender} onChange={handleChangeProfile} required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              {/* dob */}

              <label className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                htmlFor="dob">Date of Birth:</label>
              <input className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                type="date" id="dob" name="dob" required onChange={handleChangeProfile} />

              {/* Anniversary */}

              <label className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                htmlFor="anniversary">Anniversary :</label>
              <input className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                type="date" id="anniversary" name="anniversary" onChange={handleChangeProfile} />

              {/* email */}

              <label className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                htmlFor="email">Email ID:</label>
              <input className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                type="email" id="email" name="email" required onChange={handleChangeProfile} />

              {/* foodPreference */}
              <label className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                htmlFor="foodPreference" >Food Preference:</label>
              <select
                className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                id="foodPreference" name="foodPreference" value={profileData.foodPreference} onChange={handleChangeProfile} required>
                <option value="veg">Veg</option>
                <option value="nonveg">NonVeg</option>
                <option value="Both">Both</option>
              </select>
              {/* terms */}
              <div className="mb-[.5rem]">
                <input type="checkbox" id="terms" name="terms" checked={profileData.terms} onChange={handleChangeProfile} required />
                <label className="ml-[.5rem]" htmlFor="terms">
                  I accept the terms and conditions</label>
              </div>

              <button className="bg-[#EAB308] font-sen font-[500] px-6 py-3 rounded-md uppercase mb-[.5rem]" type="button" onClick={handleSubmitProfile}>Continue</button>
            </form>
          </div>
        }

      </div>

      {/* first part new */}

      <div className="min-h-[94vh] pb-[1rem] md:pb-0 h-fit w-[100%] mt-[63px] flex justify-between items-center bg-[#EAB308] relative ">
        {/* left */}
        <div className="px-[1rem] sm:px-[2rem] lg:w-[60%] z-[2]">
          {/* title */}
          <div className="h-full md:w-[85%] leading-tight">
            <p className="text-[2.8rem] sm:text-[3.2rem] text-white">Explore the hidden gems of <span className="text-black">Kolkata</span> with <span className="text-black">Snackbae</span></p>
            <p className="text-gray-100 md:text-black">Within a few clicks, find  & book the best  eateries in Town</p>
          </div>
          {/* <input box */}
          <div className="bg-white sm:w-[85%] mt-[2rem] rounded-md">
            <div className="border-b-2 p-4">
              <p className="bg-[#FFCA0B1F] inline p-1 text-[#EAB308] text-[.9rem] font-semibold rounded-md">Dine-in</p>
            </div>
            <div className="flex flex-row flex-wrap gap-[0.5rem] justify-around py-[2rem] px-[1rem]">
              {/* search box */}
              <div className="flex flex-col w-[100%] md:w-[65%]">
                <div className="w-full">
                  <input
                    className="border-2 rounded-md h-[3rem] w-full px-1 mr-1 bg-gray-100"
                    type="text"
                    value={restaurantName}
                    onChange={changeRestaurantNameHandler}
                    placeholder="Search By Restaurant Name"
                    required />
                </div>
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
              {/* button */}
              <div className="">
                <button
                  onClick={changeRestaurantNameHandler}
                  className="rounded-md h-[3rem] bg-black text-white px-6 py-2"
                >Find Restaurant</button>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        {/* < className="aspect-square w-[100%] lg:w-[40%] absolute lg:relative border-2"> */}
        <img src={imageBase} alt="newImage" className="md:h-[80%]  aspect-square z-[1] absolute bottom-0 right-0" />

      </div>


      {/* first part new end */}

      <div className="relative w-full h-[100vh] overflow-x-hidden overflow-y-hidden  bg-slate-50 border-2">
        <div className=" ">
          {/* /left part */}
          <div className="flex flex-col mx-auto absolute h-[35rem] left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 lg:left-[1px] lg:translate-x-[15%] pt-16 lg:pt-32 gap-4">
            <div className=" hidden lg:block w-[14rem] h-[3rem] border rounded-md py-[0.25rem] px-[1rem] gap-2.5 bg-amber-50">
              <div className="w-[12rem] h-[2.3rem] font-roboto text-lg leading-9 font-semibold items-center text-[#EAB308] z-50">
                Welcome to SnackBae
              </div>
            </div>
            <div className="w-[23rem] mx-auto lg:mx-0 md:w-[40rem] md:h-[14rem]  flex flex-col lg:text-left z-40">
              <div className="w-[60%] mx-auto lg:m-0 font-roboto font-semibold text-[28px] md:text-[36px] md:leading-[60px] lg:text-left text-center  text-slate-950 lg:-tracking-[2%]">
                Tap the Table !!
              </div>
              <div className=" w-[362px] h-[75px] text-center lg:text-left md:w-[35rem] lg:h-[4rem] font-opensans font-normal text-[12px] lg:text-base leading-6 -tracking-[2%] text-slate-950 mt-5 mb-4">
                Instantly book a personalized reservation in a restaurant of your choice for a stress-free dining experience.
              </div>
              <div className=" flex flex-row mx-auto lg:mx-0 w-[22rem] h-[3.5rem] space-x-6  items-center mb-3">
                <button className=" flex py-3 px-3 w-[10rem] relative  h-[2.8rem] border rounded-lg space-x-2 items-start justify-start bg-[#EAB308]">
                  <img
                    className="absolute w-[1.2rem] h-[1.2rem]"
                    src={arrow}
                    alt="Logo"
                    loading="lazy"
                  ></img>
                  <p className="font-Roboto font-medium w-[9rem] h-[0.75rem] text-white text-base leading-4 ">
                    Download App
                  </p>
                </button>
                <button className="w-[158px] h-[42px] border rounded-lg gap-1 text-slate-950">
                  <p className="font-Roboto font-medium text-base leading-5 items-center -tracking-tight justify-center">
                    More Details
                  </p>
                </button>
              </div>
              <div className="flex flex-row mx-auto lg:mx-0 font-opensans w-[379px] md:w-[21rem] gap-3 items-center justify-center ">
                <div className="flex relative w-[112px] md:w-[10rem]">
                  <div className="flex my-auto w-[79%]">
                    <div className="flex my-auto w-[74%]">
                      <img
                        src={ellipse_sm}
                        alt="newimage"
                        className="rounded-[50%] my-auto  w-[40px] h-[40px] md:w-14 md:h-14 border-2 border-[#ffffff]"
                      ></img>
                      <img
                        src={ellipse_sm1} alt="newimage"
                        className="  w-[40px] h-[40px] md:w-14 md:h-14 ml-[-25%] my-auto rounded-[50%] z-[1] border-2 border-[#ffffff]"
                      ></img>
                    </div>
                    <img
                      src={ellipse_sm2} alt="newimage"
                      className="  w-[40px] h-[40px] md:w-14 md:h-14 ml-[-23%] my-auto rounded-[50%] z-[1]  border-2 border-[#ffffff]"
                    ></img>
                  </div>
                  <img
                    src={ellipse_sm3} alt="newimage"
                    className=" w-[40px] h-[40px] md:w-14 md:h-14 ml-[-18%] rounded-[50%] my-auto z-[1] border-2 border-[#ffffff]"
                  ></img>
                </div>
                <div className="flex flex-col items-start justify-start w-[135px] md:w-auto">
                  <p className="text-left text-[22px] md:text[2rem] lg:text-[3rem] text-black-900 w-auto font-bold font-opensans">
                    1000+
                  </p>
                  <div className="flex items-start justify-start w-full">
                    <p className="text-left text-[12px]  md:text-base text-black-900 md:w-auto font-normal md:font-bold font-opensans">
                      Downloads on Appstore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right part */}
          <div className="absolute hidden lg:block -bottom-4 -right-2">
            <img
              src={ellipse} alt="newimage"
              className="w-[53vw] h-[88vh]"
              loading="lazy"
            ></img>
            {/* width={756} height={696}  */}
          </div>
          <div className="absolute hidden lg:block -bottom-4 right-0">
            <img
              src={ellipse2} alt="newimage"
              className="w-[50vw] h-[84vh]"
              height={626}
              width={716}
              loading="lazy"
            ></img>
            {/* height={626} width={716} */}
          </div>
        </div>
      </div>

      {/* // ------------------------------------------------FIRST PART ENDED----------------------------------------------------------------
      // ------------------------------------------------SECOND PART STARTED----------------------------------------------------------------- */}
      <div className="w-[100vw] flex-col lg:flex-row items-center justify-center py-12 bg-[#1E2833]">
        <button className="lg:hidden w-[100px] mx-auto mb-7 flex justify-center items-center rounded-3xl py-1 px-6  bg-amber-50 text-amber-500">
          <p className=" font-roboto  font-semibold text-base leading-10">Discover</p>
        </button>
        <div class="w-[85vw] flex justify-center items-center relative mx-auto">
          <div class="flex flex-col-reverse lg:flex-row justify-between w-11/12 mx-auto">
            {/* .---left part---- */}
            <div className="w-[90%] lg:w-[40%] my-auto">
              <button className="hidden w-[100px] lg:flex justify-center items-center rounded-3xl py-1 px-6  bg-amber-50 text-amber-500">
                <p className=" font-roboto  font-semibold text-base leading-10">
                  Discover
                </p>
              </button>
              <div className="w-[90vw] md:w-[80vw] lg:w-[33vw] flex flex-col gap-2 lg:gap-5 mt-7 lg:mt-0 justify-center items-center pr-6 lg:pr-0">
                <div className="w-full text-center text-white lg:text-left font-semibold text-xl lg:text-[42px] lg:leading-[56px] ">
                  Scratch Your Itch to Save
                </div>

                <p className="w-full text-center text-white lg:text-left font-opensans font-normal text-sm lg:leading-6 mb-3">
                  Earn Scratch Cards and Coupons availing attractive discounts and rewards by making payments and inviting friends through the app.
                </p>
              </div>
              <button className="py-1 px-1 w-[10rem] h-[2.8rem] border rounded-lg bg-[#EAB308] hidden lg:flex justify-center items-center">
                <p className="font-Roboto font-medium w-[9rem] text-white text-base leading-4">
                  Get Started
                </p>
              </button>
              <div className="w-full mx-auto flex justify-center lg:hidden">
                <button className="py-1 px-1 w-[10rem] h-[2.8rem] border rounded-lg bg-[#EAB308] mx-auto">
                  <p className="font-Roboto font-medium w-[9rem]  text-white text-base leading-4">
                    Get Started
                  </p>
                </button>
              </div>
            </div>
            {/* ---right part----- */}
            <div className="relative w-[80%] md:w-[50%] lg:w-[40%] h-[300px] lg:h-[600px] mx-auto">
              <img
                src={rectbig} alt="newimage"
                className="w-full h-full"
              ></img>
              <img
                className="absolute rounded-[50%] md:top-1 md:-left-36 lg:top-6 lg:-left-44 lg:w-80 md:w-60 w-44 top-1 -left-24"
                src={rectsm}
                alt="loading"
                loading="lazy"
              ></img>

              <div className="absolute w-[240px] md:w-[290px] lg:w-[330px] bg-white bottom-[35%] md:bottom-[32%] lg:bottom-[29%] drop-shadow-2xl items-center justify-start p-[0.5rem] -right-32 md:-right-40 rounded-[15px]">
                <div className="flex flex-row gap-1 lg:gap-2 items-center justify-start my-0.5 w-full">
                  <img
                    className="h-[60px] md:h-auto object-cover rounded-[12px] lg:w-[26%] w-[20%]"
                    src={rectsm2}
                    alt="loading"
                    loading="lazy"
                  ></img>
                  <div className="flex flex-col lg:gap-[5px] items-start justify-start w-[71%]">
                    <div className="flex flex-row font-roboto items-center justify-between w-full">
                      <p className="text-left text-xs lg:text-base text-black tracking-[-0.16px] font-medium font-roboto">
                        Carls's Cafe
                      </p>
                      <p className="text-left text-xs lg:text-base text-black tracking-[-0.16px] font-medium font-roboto">
                        Flat 40% off
                      </p>
                    </div>
                    <p className="text-left leading-[22px] text-blue_gray-500  text-xs lg:text-sm tracking-[-0.28px] w-[91%] sm:w-full font-normal font-opensans">
                      Review, pay, book, and invite friends to earn coupons.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute  w-[240px] md:w-[290px] lg:w-[330px] bg-gray-100 bottom-[4%] lg:bottom-[8%] -right-20 md:-right-28 flex flex-col items-center drop-shadow-2xl justify-start p-[5px] lg:p-[11px]  rounded-[13px]">
                <div className="flex flex-row gap-1 lg:gap-2 items-center justify-start w-full">
                  <img
                    className="h-[60px] md:h-auto object-cover rounded-[10px] lg:w-[26%] w-[20%]"
                    src={rectsm2}
                    alt="loading"
                    loading="lazy"
                  ></img>
                  <div className="flex flex-col gap-[5px] items-start justify-start w-[71%]">
                    <div className="flex flex-row font-roboto items-center justify-between w-full">
                      <p className="text-left text-xs lg:text-base text-black tracking-[-0.16px] font-medium font-roboto">
                        Carls's Cafe
                      </p>
                      <p className="text-left text-xs lg:text-base text-black tracking-[-0.16px] font-medium font-roboto">
                        Flat 40% off
                      </p>
                    </div>
                    <p className="text-left leading-[22px] text-blue_gray-500 text-xs lg:text-sm tracking-[-0.28px] sm:w-full font-normal font-opensans">
                      Review, pay, book, and invite friends to earn coupons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------SECOND PART ENDED--------------------------------------------------
        ------------------------------------------THIRD PART STARTED------------------------------------------------------------- */}
      <div className="w-[100vw] flex-col lg:flex-row items-center justify-center mx-auto py-12 bg-[#1E2833]">
        <button className="lg:hidden w-[100px] mx-auto mb-7 flex justify-center items-center rounded-3xl py-1 px-6  bg-amber-50 text-amber-500">
          <p className=" font-roboto  font-semibold text-base leading-10">
            Coupons
          </p>
        </button>
        <div className="">
          <div class="flex flex-col lg:flex-row justify-between items-center w-11/12 mx-auto">
            {/* ---left part-----*/}
            <div className="relative w-[80%] md:w-[50%] lg:w-[40%]  h-[300px] lg:h-[600px]">
              <img
                src={rect3} alt="newimage"
                className="w-full h-full"
              ></img>
              {/* <div className="absolute w-[240px] md:w-[290px] lg:w-[330px] bg-white top-[15%] md:top-[20%] lg:top-[25%] drop-shadow-2xl items-center justify-start p-[0.5rem] -right-32 md:-right-40 rounded-[15px]"> */}
              <div className="absolute w-[200px] bg-white top-[13%] -left-[15%] lg:top-[16%] lg:-left-[10%] items-center drop-shadow-2xl justify-start p-[7px] rounded-[43px]">
                <div className="flex flex-row gap-[4px] items-center justify-start w-[98%] md:w-full">
                  <img
                    className="rounded-[50%] w-[26%]"
                    src={rectsm2}
                    alt="loading"
                    loading="lazy"
                  ></img>
                  <div className="flex flex-col gap-[1px] items-start justify-start w-[71%]">
                    <p className="text-left  text-base text-black tracking-[-0.16px] font-medium font-roboto">
                      Amanda Cooper
                    </p>
                    <img
                      className=""
                      src={star}
                      alt="loading"
                      loading="lazy"
                    ></img>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>

            {/* ----right part----- */}
            <div className="w-[90%] lg:w-[40%] my-auto ">
              <button className="w-[110px] rounded-3xl py-1 px-6  bg-amber-50 text-amber-500 hidden lg:flex justify-center items-center">
                <p className="  font-roboto  font-semibold text-base leading-10">
                  Coupons
                </p>
              </button>
              <div className="w-[90vw] md:w-[80vw] lg:w-[33vw] flex flex-col gap-2 lg:gap-5 mt-7 lg:mt-0 pr-9 lg:pr-0">
                <div className="w-full text-center text-white lg:text-left font-semibold text-xl lg:text-[42px] lg:leading-[56px] ">
                  You Pay, You Earn
                </div>

                <p className="w-full text-center text-white lg:text-left font-opensans font-normal text-sm lg:leading-6 mb-3">
                  Make secure and convenient payments through the app and earn rewards everytime you pay. Make your dining experience a saving opportunity for yourself.
                </p>
              </div>
              <button className="  py-1 px-1 w-[10rem] lg:flex items-center justify-center h-[2.8rem] border rounded-lg bg-[#EAB308] hidden">
                <p className="font-Roboto font-medium w-[9rem] text-white text-base leading-4 ">
                  Explore Coupons
                </p>
              </button>
              <div className="w-full mx-auto flex justify-center items-center lg:hidden">
                <button className="  py-1 px-1 w-[10rem] h-[2.8rem] border rounded-lg bg-[#EAB308] mx-auto">
                  <p className="font-Roboto font-medium w-[9rem] text-white text-base leading-4 ">
                    Explore Coupons
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------THIRD PART ENDED------------------------------------------------- */}
      {/*-------------------------------------- FOURTH PART STARTED------------------------------------------------ */}
      <div className="mt-[20rem]  md:block hidden">
        <Slider />
      </div>

      <div className="my-12 p-3 block md:hidden w-[90vw] mx-auto border border-gray-400 rounded-md">
        <div>
          <button className="lg:hidden w-[100px] mx-auto mb-7 flex justify-center items-center rounded-3xl py-1 px-6  bg-amber-50 text-amber-500">
            <p className=" font-roboto  font-semibold text-base leading-10">
              Coupons
            </p>
          </button>
        </div>
        <div className="overflow-x-auto whitespace-nowrap scroll-wheel">
          <div className="flex" style={{ width: team.length * 275 }}>
            {team.map((image, index) => (
              <div key={index} className="relative w-[17rem] h-[17rem] m-1">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-[17rem] h-[15.75rem] mr-3"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mx-auto flex flex-col gap-1">
          <div className="text-center font-bold text-xl">Community-Driven Recommendations </div>
          <div className="text-md text-center">
            Discover hidden gems and must-try delicacies suggested by a diverse community of food lovers.
          </div>
        </div>
      </div>

      {/* ------------------------------------FOURTH PART ENDED--------------------------------------------------------- */}

      {/* ---------------------------FIFTH PART STARTED----------------- */}
      {/* <div className="relative w-full  h-[92vh] mb-8 overflow-hidden">
          <img src={bg5} alt="newimage" className=" w-[100%] h-full  absolute z-10 object-cover"></img>
          <div className="bg-[#000000] w-full h-full absolute z-20 opacity-50"></div>
          <div className=" absolute  w-[100%] h-[100%] flex flex-col gap-6 justify-center items-center  z-30">
            <button className="w-[130px] h-[50px]  md:w-[130px]  rounded-3xl py-1 px-6  bg-amber-50 text-amber-500 ">
              <p className=" mx-auto font-roboto  font-semibold text-base leading-10">
                App Links
              </p>
            </button>

            <div className=" w-[360px] h-[64px] md:w-[750px] md:h-[112px] font-roboto font-semibold text-[20px] md:text-[42px] text-center items-center leading-[32px] md:leading-[56px] text-white">
              Flavorful Experiences Await – Download the SnackBae App Today
            </div>
            <p className="sm:h-[25px] w-[360px] md:w-[515px] font-normaltext-[12px] md:text[14px] leading-[25px] font-sans text-center items-center text-white opacity-70">
              Download for android and iOS now
            </p>

            <img className="w-[340px] h-[47px] z-[100]" src={app} alt="newimage"></img>
          </div>
        </div> */}
      {/* ----------------------------FIFTH PART ENDED-------------------- */}
      {/* ------------------------SIXTH PART STARTED----------------------- */}
      <div className="md:mt-[3rem]">
        <Faq />
      </div>

      {/* ---------------------footer---------------- */}
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Homepage;