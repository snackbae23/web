import React, { useState, useEffect, useRef } from "react";
import bg from "../assets/Rectangle 3463524.png";
import arrow from "../assets/Back.png";
import like from "../assets/More.png";
import share from "../assets/More (1).png";
import recommend from "../assets/Group 1000003963.png";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import slider from "../assets/sliderimg.png";
import arrow1 from "../assets/Group 1000004020.png";
import arrow2 from "../assets/v.png";
import chow from "../assets/chow.png";
import { GoThumbsup } from "react-icons/go";
import { GoThumbsdown } from "react-icons/go";
import { CiGlass, CiSearch } from "react-icons/ci";
import burger from "../assets/burger.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import restroname from "../assets/restroimg.png";
import { IoCloseSharp } from "react-icons/io5";
import right from "../assets/right.png";
import celeb from "../assets/celeb.png";
import { FaCheck } from "react-icons/fa";
import girl from "../assets/girl.png";
import messeng from "../assets/messeng.png";
import whatsapp from "../assets/whatsapp.png";
import tele from "../assets/tele.png";
import chat from "../assets/chat.png";
import { FaClock } from "react-icons/fa";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";
import RestaurantAbout from "../Components/RestaurantAbout";
import RestaurantFooter from "../Components/RestaurantFooter";
import RestaurantMenu from "../Components/RestaurantMenu";
import RestaurantPhotos from "../Components/RestaurantPhotos";
import { useParams } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase.config";
import { IoClose } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import allStudent from "../assets/allstudent.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import like2 from "../assets/like2.png";
import confirmation from "../assets/confirmation.png";

function calculateDaysRemaining(date1, date2) {
  const diffInMilliseconds = date2.getTime() - date1.getTime();
  const daysDiff = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  return daysDiff;
}

const images = [
  { url: slider, caption: "Image 1" },
  { url: slider, caption: "Image 2" },
  { url: slider, caption: "Image 3" },
];

function RestaurantPage({ login, setlogin }) {
  const { id } = useParams();

  const [pic, setPic] = useState("");
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");

  // const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [mobile, setMobile] = useState(true);
  const [password, setPassword] = useState(false);
  const [profile, setProfile] = useState(false);
  //current date
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  const [profileData, setProfileData] = useState({
    profileImage:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1709387339~exp=1709390939~hmac=2bbe2e46b4676e1e7592d5557de6c4768adbf2da781cd9c59e6660fd2b1dbba3&w=740",
    fullName: "user",
    gender: "male",
    dob: currentDate,
    email: "abc@gmail.com",
    foodPreference: "veg",
    anniversary: "",
    terms: false,
  });

  const [allMenuItems, setAllMenuItems] = useState();
  const [discount, setDiscount] = useState(0);
  const [restaurantData, setRestaurantData] = useState();

  console.log("res id  : ", id);

  // const [user, setUser] = useState();

  const userData = JSON.parse(localStorage.getItem("user"));
  const userId = userData?.id;

  console.log(userData);
  useEffect(() => {}, [userData]);
  // setUser(userData);
  // setUserId(userData._id);

  // console.log("userdata : ", user);
  console.log("userId : ", userId);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://coral-app-mvtxg.ondigitalocean.app/api/generalinfo/${id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log("res details :", response.data);
        setRestaurantData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const datanew = [
    {
      id: 1,
      image: restaurantData?.logo, // Replace with your image URL
      text1: restaurantData?.restaurantName,
      discount: 10,
      text3: "* on your dining bills",
      constantDate1: new Date(2024, 3, 10),
      constantDate2: new Date(2024, 3, 15),
    },
    {
      id: 2,
      image: restaurantData?.logo, // Replace with your image URL
      text1: restaurantData?.restaurantName,
      discount: 10,
      text3: "* on your dining bills",
      constantDate1: new Date(2024, 3, 10),
      constantDate2: new Date(2024, 3, 15),
    },
    {
      id: 3,
      image: restaurantData?.logo, // Replace with your image URL
      text1: restaurantData?.restaurantName,
      discount: 10,
      text3: "* on your dining bills",
      constantDate1: new Date(2024, 3, 10),
      constantDate2: new Date(2024, 3, 15),
    },
    // ... Add more data objects here
  ];

  const toast = useToast();
  //login
  const navigate = useNavigate();
  const handleChangeProfile = (e) => {
    const { name, value, type, checked, files } = e.target;

    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const onSignup = async () => {
    console.log("inside onsignup");
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {});
      const formatPh = "+" + ph;
      const confirmation = await signInWithPhoneNumber(
        auth,
        formatPh,
        recaptcha
      );
      console.log(confirmation);
      setUser(confirmation);
      // setMobile(false);
      setShowOTP(true);
    } catch (err) {
      console.log(err);
    }
  };

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
      setlogin(false);

      // finding if user exists
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `https://coral-app-mvtxg.ondigitalocean.app/api/user/search?search=${ph}`,
        headers: {},
      };

      axios
        .request(config)
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
                phone: response.data[0]?.contactNumber,
              })
            );
            console.log(
              JSON.stringify({
                id: response.data[0]?._id,
                name: response.data[0]?.additionalDetails?.fullName,
                image: response.data[0]?.additionalDetails?.image,
                phone: response.data[0]?.contactNumber,
              })
            );
            // navigate('/home');
          } else {
            //create user profile
            formData.ph = ph;
            console.log(formData);
            const data = JSON.stringify(formData);
            console.log(data);
            let config1 = {
              method: "post",
              maxBodyLength: Infinity,
              url: "https://coral-app-mvtxg.ondigitalocean.app/api/user/create",
              headers: {
                "Content-Type": "application/json",
              },
              data: data,
            };

            axios
              .request(config1)
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
    } catch (e) {
      console.log(e);
    }
  };

  //handle only the mobile number submit
  const handleSubmitMobileNumber = (e) => {
    e.preventDefault();
    // Handle form submission logic here with formData
    console.log("Form Data:", formData);
    setMobile(false);
    setPassword(true);
  };

  //handle naviagate to profile and add move to home
  const handleSubmitProfile = async (e) => {
    e.preventDefault();
    console.log("Profile data :", profileData);

    //posting data
    const data = JSON.stringify(profileData);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://coral-app-mvtxg.ondigitalocean.app/api/user/profile/create?search=${ph}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: response.data?._id,
            name: response.data?.additionalDetails?.fullName,
            image: response.data?.additionalDetails?.image,
            phone: response.data?.contactNumber,
          })
        );

        console.log(
          JSON.stringify({
            id: response.data?._id,
            name: response.data?.additionalDetails?.fullName,
            image: response.data?.additionalDetails?.image,
            phone: response.data?.contactNumber,
          })
        );

        //navigate to home
        // navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });

    setMobile(false);
    setPassword(false);
    setProfile(false);
    setlogin(false);
  };

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
        setPic(response?.data?.image_url);
        profileData.profileImage = response.data.image_url;
        console.log(pic);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //recommendations

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
        setAllMenuItems(response.data);
        console.log("all menu data : ", allMenuItems);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //book a table
  const [dateSelected, setDateSelected] = useState("");
  const [timeSelected, setTimeSelected] = useState("");
  const [occassion, setOccassion] = useState("");
  const [numberSelected, setNumberSelected] = useState();

  const submitHandler = () => {
    const formData = {
      date: dateSelected,
      time: timeSelected,
      occassion: occassion,
      numofpeople: numberSelected,
    };
    console.log("formData: ", formData);
    console.log("dateSelected : ", dateSelected);
    console.log("timeSelected : ", timeSelected);
    console.log("occassion : ", occassion);
    console.log("numberSelected : ", numberSelected);

    const data = JSON.stringify(formData);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://coral-app-mvtxg.ondigitalocean.app/api/bookings/${userId}/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // setIsOpen1(false);
        closeModal1();
        toast({
          title: "Table booked successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  function calcDiscount(data, amount) {
    const disc = (data / 100) * amount;
    setDiscount(disc);
    let net = amount - disc;
    setnetAmount(net);
    // return disc;
  }

  //guest
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(Array.from({ length: 10 }, (_, i) => i + 1));
  }, []);

  //timing
  const openingTime = "11:00";
  const closingTime = "23:00";
  const [currentTime, setCurrentTime] = useState(new Date());
  const [availableHours, setAvailableHours] = useState([]);
  const [selectedHourIndex, setSelectedHourIndex] = useState(null);
  const handleTimeSelector = (index) => {
    setSelectedHourIndex(index); // Update selected index upon click
  };
  // useEffect(() => {
  //   const updateAvailableHours = () => {
  //     const now = new Date();
  //     const hours = [];

  //     // Ensure opening time is before closing time
  //     if (openingTime > closingTime) {
  //       console.warn(
  //         "Invalid opening and closing times: Opening time must be before closing time."
  //       );
  //       return; // Prevent unnecessary calculations
  //     }

  //     // Convert opening and closing times to Date objects
  //     const open = new Date();
  //     open.setHours(...openingTime.split(":"));
  //     open.setMinutes(0);
  //     open.setSeconds(0);
  //     const close = new Date();
  //     close.setHours(...closingTime.split(":"));
  //     close.setMinutes(0);
  //     close.setSeconds(0);

  //     // Iterate from opening time to closing time with 1-hour gap
  //     let current = new Date(open.getTime());
  //     while (current <= close) {
  //       const hour = current.getHours();
  //       const minutes = current.getMinutes().toString().padStart(2, "0");
  //       const timeStr = `${hour}:${minutes}`;

  //       // Determine clickability based on current time
  //       const isClickable = current > now;

  //       hours.push({ time: timeStr, isClickable });

  //       // Add 1 hour to the current time
  //       current.setHours(current.getHours() + 1);
  //     }

  //     setAvailableHours(hours);
  //   };

  //   // Update available hours initially and every minute to reflect changes
  //   updateAvailableHours();
  //   const intervalId = setInterval(updateAvailableHours, 60000); // Update every minute

  //   return () => clearInterval(intervalId); // Cleanup on unmount
  // }, [openingTime, closingTime]);
  useEffect(() => {
    const updateAvailableHours = () => {
      console.log("dateSelected : ", dateSelected);

      const currentDate = new Date();
      const [day, month, year] = dateSelected.split("-");
      const selectedDate = new Date(
        parseInt(year, 10),
        parseInt(month, 10) - 1,
        parseInt(day, 10)
      );

      console.log("selectedDate :", selectedDate);
      const isCurrentDate =
        currentDate.getDate() === selectedDate.getDate() &&
        currentDate.getMonth() === selectedDate.getMonth() &&
        currentDate.getFullYear() === selectedDate.getFullYear();

      console.log("isCurrentDate: ", isCurrentDate);
      if (isCurrentDate) {
        const now = new Date();
        const hours = [];

        // Ensure opening time is before closing time
        if (openingTime > closingTime) {
          console.warn(
            "Invalid opening and closing times: Opening time must be before closing time."
          );
          return; // Prevent unnecessary calculations
        }

        // Convert opening and closing times to Date objects
        const open = new Date();
        open.setHours(...openingTime.split(":"));
        open.setMinutes(0);
        open.setSeconds(0);
        const close = new Date();
        close.setHours(...closingTime.split(":"));
        close.setMinutes(0);
        close.setSeconds(0);

        // Iterate from opening time to closing time with 1-hour gap
        let current = new Date(open.getTime());
        while (current <= close) {
          const hour = current.getHours();
          const minutes = current.getMinutes().toString().padStart(2, "0");
          const timeStr = `${hour}:${minutes}`;

          // Determine clickability based on current time
          const isClickable = current > now;

          hours.push({ time: timeStr, isClickable });

          // Add 1 hour to the current time
          current.setHours(current.getHours() + 1);
        }
        setAvailableHours(hours);
      } else {
        const hours = [];

        const open = new Date();
        open.setHours(...openingTime.split(":"));
        open.setMinutes(0);
        open.setSeconds(0);
        const close = new Date();
        close.setHours(...closingTime.split(":"));
        close.setMinutes(0);
        close.setSeconds(0);

        let current = new Date(open.getTime());
        while (current <= close) {
          const hour = current.getHours();
          const minutes = current.getMinutes().toString().padStart(2, "0");
          const timeStr = `${hour}:${minutes}`;

          // Determine clickability based on current time
          const isClickable = true;

          hours.push({ time: timeStr, isClickable });

          // Add 1 hour to the current time
          current.setHours(current.getHours() + 1);
        }
        setAvailableHours(hours);
      }
    };

    // Update available hours initially and every minute to reflect changes
    updateAvailableHours();
    const intervalId = setInterval(updateAvailableHours, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [openingTime, closingTime, dateSelected]);

  //Date
  const [startDate, setStartDate] = useState(new Date());
  const handleScroll = (event) => {
    const scrollLeft = event.target.scrollLeft;
    const daysToScroll = Math.round(scrollLeft / 150); // Assuming 150px per day
    const newStartDate = new Date(
      startDate.getTime() - daysToScroll * 24 * 60 * 60 * 1000
    );
    setStartDate(newStartDate);
  };

  // Function to format a date object into a string
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-indexed
    const year = date.getFullYear();
    const monthInt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const monthWords = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    return `${day} ${monthWords[month - 1]}`;
  };
  const [selectedId, setSelectedId] = useState(null);

  // Generate an array of dates for the current week
  const getWeekDates = () => {
    const days = [];
    const currentDay = startDate.getDay();
    for (let i = currentDay + 4; i >= 0; i--) {
      const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);

      const d = new Date(date);

      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are 0-indexed
      const year = date.getFullYear();
      let fullDate = "";
      if (month < 10) fullDate = `${day}-0${month}-${year}`;
      else fullDate = `${day}-${month}-${year}`;
      // Extract the day of the week using getDay()
      const weekday = d.getDay();

      // Convert the numerical day (0-6) to the corresponding weekday string (Sun-Sat)
      const weekdayString = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
      ][weekday];

      // console.log("Extracted weekday:", weekdayString); // Output: "Thu"
      // console.log("day  ",weekdayString);
      days.unshift({
        date: formatDate(date),
        dd: weekdayString,
        fullDate: fullDate,
      });
      // console.log(date, " day : ", weekdayString);
    }

    return days;
  };
  const weekDates = getWeekDates();

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Popup
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (userData) {
      document.getElementById("background").style.filter = "blur(10px)";
      document.documentElement.scrollTop = 0;

      setIsOpen(true);
    } else {
      document.documentElement.scrollTop = 0;
      setlogin(true);
      setMobile(true);
    }
  };

  const closeModal = () => {
    document.getElementById("background").style.filter = "blur(0px)";
    setIsOpen(false);
  };
  const modalContainerStyle = {
    // Base styles for the modal container
  };

  if (isOpen) {
    // Apply conditional styles when modal is open
    modalContainerStyle.backgroundColor = "black";
    modalContainerStyle.opacity = 0.5;
  }
  //popup2
  const [isOpen1, setIsOpen1] = useState(false);

  const openModal1 = () => {
    if (userData) {
      setIsOpen1(true);
      document.getElementById("background").style.filter = "blur(10px)";
      document.documentElement.scrollTop = 0;
    } else {
      document.documentElement.scrollTop = 0;
      setlogin(true);
      setMobile(true);
    }
  };

  const closeModal1 = () => {
    setIsOpen1(false);
    document.getElementById("background").style.filter = "blur(0px)";
  };
  //popup3
  const [isOpen2, setIsOpen2] = useState(false);

  const openModal2 = () => {
    if (userData) {
      if (isOpen4) {
        setIsOpen4(false);
      }
      setIsOpen2(true);
      document.getElementById("background").style.filter = "blur(10px)";
      document.documentElement.scrollTop = 0;
    } else {
      document.documentElement.scrollTop = 0;
      setlogin(true);
      setMobile(true);
    }
  };

  const closeModal2 = () => {
    setIsOpen2(false);
    document.getElementById("background").style.filter = "blur(0px)";
  };
  //popup4
  const [isOpen4, setIsOpen4] = useState(false);

  const openModal4 = () => {
    if (userData) {
      setIsOpen2(false);
      setIsOpen4(true);
      document.getElementById("background").style.filter = "blur(10px)";
      document.documentElement.scrollTop = 0;
    } else {
      document.documentElement.scrollTop = 0;
      setlogin(true);
      setMobile(true);
    }
  };

  const closeModal4 = () => {
    setIsOpen4(false);
    document.getElementById("background").style.filter = "blur(0px)";
  };

  //paymentsuccessful popup

  const [isOpen5, setIsOpen5] = useState(false);

  const openModal5 = () => {
    if (userData) {
      setIsOpen5(true);
      document.getElementById("background").style.filter = "blur(10px)";
      document.documentElement.scrollTop = 0;
    } else {
      document.documentElement.scrollTop = 0;
      setlogin(true);
      setMobile(true);
    }
  };

  const closeModal5 = () => {
    setIsOpen5(false);
    document.getElementById("background").style.filter = "blur(0px)";
  };

  const [isOpen6, setIsOpen6] = useState(false);

  const openModal6 = () => {
    if (userData) {
      setIsOpen6(true);
      document.getElementById("background").style.filter = "blur(10px)";
      document.documentElement.scrollTop = 0;
    } else {
      document.documentElement.scrollTop = 0;
      setlogin(true);
      setMobile(true);
    }
  };

  const closeModal6 = () => {
    setIsOpen6(false);
    document.getElementById("background").style.filter = "blur(0px)";
  };
  //share pop-up
  const [isOpen7, setIsOpen7] = useState(false);

  const openModal7 = () => {
    setIsOpen7(true);
    document.getElementById("background").style.filter = "blur(10px)";
    document.documentElement.scrollTop = 0;
  };

  const closeModal7 = () => {
    setIsOpen7(false);
    document.getElementById("background").style.filter = "blur(0px)";
  };

  useEffect(() => {}, [
    isOpen,
    isOpen1,
    isOpen4,
    isOpen2,
    isOpen5,
    isOpen6,
    isOpen7,
  ]);

  //Search bar
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  // const modalClasses = `absolute top-8 lg:left-1/3 md:left-1/4 lg:w-[30vw] md:h-fit lg:h-fit flex justify-centre bg-white z-50 rounded-lg  md:w-[44vw] sm:h-[100%] sm:w-[100%] sm:left-0`;

  //input for pay bill popup
  const [amount, setAmount] = useState(0);
  const [amountt, setAmountt] = useState();
  const [netAmount, setnetAmount] = useState(0);
  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      console.log("hello");
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  const handleSubmit = async (event) => {
    console.log(amount);
    event.preventDefault();
    setIsOpen2(false);
    let t = amount - discount;
    console.log(t);
    setAmountt(t);
    console.log(amountt);
    console.log(amount);
    // let restaurantId = 210612;
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      console.log("jjjjjjjjjj");
      const orderResponse = await axios.post(
        "https://coral-app-mvtxg.ondigitalocean.app/api/payment/capturepayment",
        { amount: amount - discount }
      );
      console.log(orderResponse);
      // setAmount("");
      // Opening the Razorpay SDK
      const options = {
        key: process.env.RAZORPAY_KEY,
        currency: orderResponse.data.data.currency,
        amount: `${orderResponse.data.data.amount}`,
        order_id: orderResponse.data.data.id,
        name: "SnackBae",
        description: "Thank you for the payment",
        image: logo,
        handler: function (response) {
          console.log(response);
          verifypayment({ ...response, id, userId, amount: amount - discount });
        },
      };
      console.log("hello");
      const paymentObject = new window.Razorpay(options);

      paymentObject.open();
      paymentObject.on("payment.failed", function (response) {
        // toast.error("Oops! Payment Failed.");
        console.log(response.error);
      });
      //setAmount("");
    } catch (error) {}
  };

  async function verifypayment(bodydata) {
    console.log("hellohjjjjjjj");
    try {
      const verifyUrl =
        "https://coral-app-mvtxg.ondigitalocean.app/api/payment/verifypayment";
      const { data } = await axios.post(verifyUrl, {
        bodydata,
      });
      console.log("hello");
      console.log(data);
      // pay now wala popup band krna aur succesful payment wala popup kholna hai
      setIsOpen5(true);
    } catch (error) {
      console.log(error);
      //payment failed ka popup
      setIsOpen6(true);
    }
  }
  //copy link
  const [textToCopy, setTextToCopy] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      console.log("Text copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text:", err);
    } finally {
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }
  };

  const handleChange1 = (event) => {
    setTextToCopy(event.target.value);
  };

  //handle data for booking

  const [formData, setFormData] = useState({
    day: "",
    date: "",
    time: "",
    guest: "",
    occ: "",
  });

  //console.log(bookingData);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isButtonClicked1, setIsButtonClicked1] = useState(false);

  const handleNotRecommendClick = () => {
    if (isButtonClicked) {
      return;
    }

    setIsButtonClicked(true);
    setIsButtonClicked1(false);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://coral-app-mvtxg.ondigitalocean.app/api/unrecommended/restaurant/${userId}/${id}`,
      headers: {},
      data: {
        userId: userId,
        resId: id,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRecommendClick = async () => {
    if (isButtonClicked1) {
      return;
    }

    setIsButtonClicked1(true);
    setIsButtonClicked(false);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://coral-app-mvtxg.ondigitalocean.app/api/recommended/restaurant/${userId}/${id}`,
      headers: {},
      data: {
        userId: userId,
        resId: id,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //photos integration
  const [pics, setPics] = useState([]);
  const getImages = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://coral-app-mvtxg.ondigitalocean.app/api/gallery/${id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setPics(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getImages();
  }, []);

  //select

  const [selectedDate, setSelectedDate] = useState(null); // State to store selected date

  const handleClick = (day) => {
    setSelectedDate(day.fullDate); // Update selected date on click
  };

  const [selectedNumber, setSelectedNumber] = useState(null); // Initialize selected number state

  //const numbers = [1, 2, 3, 4, 5, 6]; // Array of available guest numbers

  const handleNumberSelection = (number) => {
    setSelectedNumber(number); // Update selected number state
  };

  const [isButtonClicked2, setIsButtonClicked2] = useState(false);
  const [isButtonClicked3, setIsButtonClicked3] = useState(false);
  const [isButtonClicked4, setIsButtonClicked4] = useState(false);

  useEffect(() => {
    if (isOpen) {
      fetchMenu();
    }
  }, [isOpen]);

  const [buttonStates, setButtonStates] = useState([]);

  useEffect(() => {
    if (allMenuItems) {
      setButtonStates(allMenuItems.map(() => false));
    }
  }, [allMenuItems]);

  const handleRecommendationsClick = (id) => {
    console.log("Clicked menu ID:", id);
    const itemIndex = allMenuItems.findIndex((item) => item._id === id);
    if (itemIndex !== -1) {
      setButtonStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[itemIndex] = !newStates[itemIndex];
        return newStates;
      });

      const apiRoute = buttonStates[itemIndex]
        ? `https://coral-app-mvtxg.ondigitalocean.app/api/unrecommended/menu/${userId}/${id}`
        : `https://coral-app-mvtxg.ondigitalocean.app/api/recommended/menu/${userId}/${id}`;

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: apiRoute,
        headers: {},
        data: {
          userId: userId,
          menuId: id,
        },
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* login */}
      <div className={`absolute w-full h-[95vh] top-[65px]`}>
        {login && (
          <div className="w-full">
            {/* blur */}
            <div className="absolute top-0 z-[100] w-full h-[100vh] bg-[rgba(95,95,95,0.82)] "></div>
          </div>
        )}
        {login && mobile && (
          <div className="w-full">
            <div className="z-[200] max-w-[380px] w-[100%]  p-5  rounded-md flex flex-col  bg-white absolute top-[25%] left-[50%] z translate-x-[-50%] translate-y-[-50%] ">
              <div className="flex justify-between">
                <p className="font-[600] font-sans text-[1.8rem]">
                  Login Or SignUp
                </p>
                <IoClose
                  className="text-[1.4rem] cursor-pointer"
                  onClick={() => {
                    setlogin((prev) => !prev);
                    setMobile(true);
                    setPassword(false);
                  }}
                />
              </div>
              <p className="font-[400] font-sans text-[.9rem] text-gray-400 mb-[.5rem]">
                Enter Mobile Number
              </p>
              <div className="relative w-full flex flex-col mx-auto">
                {/* mobileNo */}
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button
                  className="bg-[#EAB308] font-sen font-[500] px-6 py-3 rounded-md uppercase mb-[.5rem] mt-4"
                  onClick={onSignup}
                >
                  Continue
                </button>
              </div>
              <div id="recaptcha-container"></div>
            </div>
          </div>
        )}
        {login && showOTP && (
          <div className="z-[200] max-w-[380px] w-[100%] p-5 rounded-md flex flex-col bg-white absolute top-[70%] left-[50%] z translate-x-[-50%] translate-y-[-50%] ">
            <div className="flex justify-between">
              <p className="font-[600] font-sans text-[1.8rem]">Enter OTP</p>
              <IoClose
                className="text-[1.4rem] cursor-pointer"
                onClick={() => {
                  setlogin((prev) => !prev);
                  setMobile(true);
                  setPassword(false);
                }}
              />
            </div>
            <p className="font-[400] font-sans text-[.9rem] text-gray-400 mb-[.5rem]">
              An OTP has been sent to +91 {ph}
            </p>
            <OtpInput
              value={otp}
              onChange={setOtp}
              OTPLength={6}
              otpType="number"
              disabled={false}
              autoFocus
              className="opt-container mb-3"
            ></OtpInput>

            <button
              className="bg-[#EAB308] font-sen font-[500] px-6 py-3 rounded-md uppercase mb-[.5rem]"
              onClick={onOTPVerify}
            >
              Verify
            </button>
            <p className=" capitalize">
              Didn't recieve code?{" "}
              <span
                className=" cursor-pointer text-[#EAB308]"
                onClick={handleSubmitMobileNumber}
              >
                Resend Code
              </span>
            </p>
          </div>
        )}
        {login && profile && (
          <div className="z-[200] max-w-[400px] w-[100%]  p-5  rounded-md flex flex-col  bg-white absolute top-[50%] left-[50%] z translate-x-[-50%] translate-y-[-50%] ">
            <p className="font-[600] font-sans text-[1.8rem]">Create Profile</p>

            {/* form */}
            <form className="flex flex-col">
              {/* image */}

              <label
                htmlFor="profileImage"
                className="relative inline-block w-20 h-20 overflow-hidden bg-gray-300 rounded-full cursor-pointer"
              >
                {profileData.profileImage ? (
                  <div className="">
                    <img
                      src={profileData.profileImage}
                      alt="Profile"
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <FaEdit size={20} className=" text-white" />{" "}
                      {/* Edit icon */}
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
                  }}
                />
              </label>

              {/* fullName */}
              <div className="relative w-full flex flex-col">
                <label
                  className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                  htmlFor="fullName"
                >
                  Full Name:
                </label>
                <input
                  className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  onChange={handleChangeProfile}
                />
              </div>
              {/* gender */}
              <label
                className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                htmlFor="gender"
              >
                Gender:
              </label>
              <select
                className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                id="gender"
                name="gender"
                value={profileData.gender}
                onChange={handleChangeProfile}
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              {/* dob */}

              <label
                className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                htmlFor="dob"
              >
                Date of Birth:
              </label>
              <input
                className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                type="date"
                id="dob"
                name="dob"
                required
                onChange={handleChangeProfile}
              />

              {/* Anniversary */}

              <label
                className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                htmlFor="anniversary"
              >
                Anniversary :
              </label>
              <input
                className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                type="date"
                id="anniversary"
                name="anniversary"
                onChange={handleChangeProfile}
              />

              {/* email */}

              <label
                className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                htmlFor="email"
              >
                Email ID:
              </label>
              <input
                className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChangeProfile}
              />

              {/* foodPreference */}
              <label
                className="bg-white inline px-[1rem] w-fit h-fit relative top-[10px] left-[15px]"
                htmlFor="foodPreference"
              >
                Food Preference:
              </label>
              <select
                className="border-2 border-[#EAB308] bg-white h-[3rem] rounded-md px-1 mb-[.5rem]"
                id="foodPreference"
                name="foodPreference"
                value={profileData.foodPreference}
                onChange={handleChangeProfile}
                required
              >
                <option value="veg">Veg</option>
                <option value="nonveg">NonVeg</option>
                <option value="Both">Both</option>
              </select>
              {/* terms */}
              <div className="mb-[.5rem]">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={profileData.terms}
                  onChange={handleChangeProfile}
                  required
                />
                <label className="ml-[.5rem]" htmlFor="terms">
                  I accept the terms and conditions
                </label>
              </div>

              <button
                className="bg-[#EAB308] font-sen font-[500] px-6 py-3 rounded-md uppercase mb-[.5rem]"
                type="button"
                onClick={handleSubmitProfile}
              >
                Continue
              </button>
            </form>
          </div>
        )}
      </div>

      {/* popup1 recommendation */}

      <div className="">
        {isOpen && userData && (
          <div>
            <div className="absolute top-[100px] lg:left-[33%] md:left-[25%] sm:left-0 lg:w-[30vw] md:w-[50vw] w-[100vw] bg-white z-[100] ">
              <div className="pop-up lg:h-fit md:h-fit sm:h-fit sm:w-[90%]">
                <div className="head-pop text-xl font-bold text-slate-600 py-4 text-center">
                  Recommend this place to help other foodies
                </div>
                <div className="chow-div flex flex-row justify-center pb-4">
                  <div className="chow">
                    <img
                      src={restaurantData?.logo}
                      className="h-16 w-16"
                      alt=""
                    />
                  </div>
                  <div className="chow-text flex flex-col">
                    <div className="text1 px-4 text-xl font-bold">
                      {restaurantData.restaurantName}
                    </div>
                    <div className="txt2 px-4 text-slate-600">
                      {restaurantData.location}
                    </div>
                  </div>
                </div>
                <div className="chow-button flex flex-row justify-center gap-2">
                  <div className="btn-1  border-2 rounded-md ">
                    <button
                      className={` flex px-4 py-2 ${
                        isButtonClicked1 ? "bg-yellow-500 " : ""
                      }`}
                      onClick={handleRecommendClick}
                    >
                      <div className="-ml-2 py-1">
                        <GoThumbsup className="" />
                      </div>{" "}
                      <div className="ml-2">Recommend</div>
                    </button>
                  </div>
                  <div className="btn2   border-2 rounded-md ">
                    {" "}
                    <button
                      className={` flex px-4 py-2 ${
                        isButtonClicked ? "bg-yellow-500 " : ""
                      }`}
                      onClick={handleNotRecommendClick}
                    >
                      <div className="-ml-1 py-1">
                        <GoThumbsdown />
                      </div>
                      <div className="ml-2">Not Recommend</div>
                    </button>
                  </div>
                </div>
                <div className="rec-txt text-lg font-bold text-slate-600 px-8 py-6">
                  Recommend Dishes
                </div>
                <div className="flex items-center -mt-2 rounded-md border border-gray-300 w-[90%] mx-auto ">
                  <div className="absolute px-1 ">
                    {" "}
                    <CiSearch />
                  </div>
                  <input
                    type="text"
                    placeholder=" Search your Favourites "
                    className="w-[420px] h-8 px-6 py-2  "
                    value={searchTerm}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="map-img w-[88%] mx-auto pt-4 h-[350px] overflow-scroll no-scrollbar">
                  <div className="container flex flex-wrap justify-center gap-1">
                    {allMenuItems &&
                      allMenuItems.map((data, index) => (
                        <div
                          key={data._id}
                          className="p-1 md:p-2 border-2 w-fit rounded-xl relative shadow-lg flex flex-col items-center"
                        >
                          <img
                            className="h-24 w-36"
                            src={data.pic}
                            alt="menu"
                          ></img>
                          {/* <img
                            className="h-24 w-36"
                            src={burger}
                            alt="menu"
                          ></img> */}
                          <div className="text-sm font-bold text-[#32343E]">
                            {data.menuItem}
                          </div>
                          <div className="text-lg font-semibold text-[#020617] font-roboto">
                            ₹{data.price}
                          </div>
                          <div>
                            <button
                              className={`border-2 text-sm px-2 flex py-2 rounded-lg ${
                                buttonStates[index] ? "bg-yellow-500" : ""
                              }`}
                              onClick={() =>
                                handleRecommendationsClick(data._id)
                              }
                            >
                              <div className="">Recommend</div>
                              <div className="ml-1 py-[2px]">
                                <GoThumbsup className="" />
                              </div>
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="con-butt py-4 mb-2 ">
                  <button
                    className="text-xl font-bold bg-yellow-500 w-[90%] py-4 rounded-xl ml-5 "
                    onClick={closeModal}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-16 right-2   z-[100]">
              <button className="  " onClick={closeModal}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* available offer popup */}
      <div className="">
        {isOpen4 && userData && (
          <div>
            <div className="absolute top-[100px] lg:left-[33%] md:left-[25%] sm:left-[2%] bg-white z-[100] ">
              <div className="pop-up lg:h-fit lg:w-[35vw] md:h-fit md:w-[50vw] sm:h-fit sm:w-[98vw]">
                <div className="text-2xl text-slate-500 font-bold text-center py-4">
                  Available Offers
                </div>
                <div className="chow-div flex flex-row items-center justify-center border-y-2 py-2">
                  <div className="chow">
                    <img
                      src={restaurantData?.logo}
                      className="h-12 w-12"
                      alt=""
                    />
                  </div>
                  <div className="chow-text flex flex-col justify-center ">
                    <div className="text1  text-xl font-bold">
                      {restaurantData.restaurantName}
                    </div>
                    <div className="txt2  text-slate-600">
                      {restaurantData.location}
                    </div>
                  </div>
                </div>
                <div className="map ">
                  <div className="container flex flex-wrap justify-center gap-4 p-4 h-fit">
                    {/* {datanew.map((item) => (
                        <ListItem key={item.id} {...item} />
                      ))} */}
                    {datanew.map((data) => (
                      <div className="p-2 border-2 w-fit rounded-xl relative shadow-lg flex flex-col items-center">
                        <div className="absolute top-0 left-0 right-0 rounded-t-xl w-full h-4 bg-[#FFD601]">
                          <div className="">
                            <div className="absolute top-2 right-2">
                              <FaClock />
                            </div>
                            <div className="absolute top-7 right-1 text-[0.6rem] font-semibold">
                              {calculateDaysRemaining(
                                data.constantDate1,
                                data.constantDate2
                              )}{" "}
                              days
                            </div>
                          </div>
                        </div>
                        <div className="pt-3">
                          {" "}
                          <img
                            className="h-18 w-12 shadow-lg py-2"
                            src={data.image}
                          ></img>
                        </div>
                        <div className="text-md font-bold py-2">
                          {data.text1}
                        </div>
                        <div className="text-3xl font-bold border border-yellow-500 py-2 px-2 rounded-xl">
                          {data.discount}%
                        </div>
                        <div className="text-xs pb-4 font-semibold">
                          *on your dining bill
                        </div>

                        <div className="py-2">
                          <button
                            onClick={() => {
                              calcDiscount(data.discount, amount);
                              // setDiscount(data.discount);
                              openModal2();
                            }}
                            className="border-2 font-semibold text-sm px-6 py-2 rounded-lg bg-[#FFD601]"
                          >
                            Redeem Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-16 right-2 z-[100]">
              <button className="" onClick={closeModal4}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* book a table */}
      <div>
        {isOpen1 && userData && (
          <div>
            <div className="absolute top-[100px] lg:left-[33%] md:left-[25%] sm:left-0 lg:w-[30vw] md:w-[50vw] w-[100vw] bg-white z-[100] ">
              <div className="pop-up lg:h-fit md:h-fit sm:h-fit sm:w-[90%]">
                <div className="hd-txt text-xl font-bold text-slate-600  text-center  py-4 ">
                  Book a Table
                </div>
                <div className="chow-div flex flex-row border-y-2 py-4 justify-center">
                  <div className="chow">
                    <img
                      src={restaurantData?.logo}
                      className="h-16 w-16"
                      alt=""
                    />
                  </div>
                  <div className="chow-text flex flex-col">
                    <div className="text1 px-4 text-xl font-bold">
                      {restaurantData.restaurantName}
                    </div>
                    <div className="txt2 px-4 text-slate-600">
                      {restaurantData.location}
                    </div>
                  </div>
                </div>
                <div className="day">
                  <div className="day-text  px-6 text-lg pt-2 pb-4">
                    Which Day?
                  </div>
                  <div className="calendar-scroller" onScroll={handleScroll}>
                    <div className="calendar-header"></div>
                    <div className="calendar-body px-6 flex flex-row gap-2 overflow-scroll no-scrollbar">
                      {weekDates.map((day) => (
                        <div
                          key={day.date}
                          className={`calendar-day border-2 rounded-xl cursor-pointer py-2 ${
                            selectedDate === day.fullDate
                              ? "border border-yellow-500"
                              : "bg-white"
                          }`}
                          // className="calendar-day border-2  rounded-xl py-2 cursor-pointer"

                          onClick={() => {
                            setDateSelected(day.fullDate);
                            handleClick(day);
                          }}
                        >
                          <div className="date px-7 cursor-pointer text-xs ">
                            {day.date}
                          </div>
                          <div className="weekday px-6 text-sm font-bold py-2">
                            {day.dd}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-lg pt-2 px-6 pb-2">What time?</div>
                <div className=" w-[85%] overflow-scroll no-scrollbar px-6 ">
                  <ul className="flex flex-row  px-18 py-2 rounded-lg px-2 ">
                    {availableHours.map((hour, index) => {
                      const style = hour.isClickable
                        ? {}
                        : { pointerEvents: "none", opacity: 0.5 };
                      return (
                        <li
                          //className="border-2 text-lg px-4 py-2 ml-1 rounded-lg cursor-pointer"
                          className={`
                          border-2 text-lg px-4 py-2 ml-1 rounded-lg cursor-pointer
                          ${
                            index == selectedHourIndex
                              ? "border border-yellow-500 "
                              : ""
                          }
                        `}
                          key={index}
                          style={style}
                          //onClick={handletime(hour.time)}
                          onClick={() => {
                            setTimeSelected(hour.time);
                            handleTimeSelector(index);
                          }}
                        >
                          {hour.time}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="px-6 pb-4 text-lg">How Many Guests?</div>
                <div>
                  <ul className="flex flex-row w-[85%] overflow-scroll no-scrollbar px-6 ">
                    {numbers.map((number) => (
                      <li
                        //className="px-6 text-xl font-bold border-2 rounded-lg ml-2 py-4 cursor-pointer hover:bg-gray-200  selectable"
                        className={`
                        px-6 text-xl font-bold border-2 rounded-lg ml-2 py-4 cursor-pointer
                        ${
                          number === selectedNumber
                            ? "border border-yellow-500"
                            : ""
                        }  // Conditional background color
                      `}
                        key={number}
                        onClick={() => {
                          setNumberSelected(number);
                          handleNumberSelection(number);
                        }}
                      >
                        {number}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-4 text-lg">Special Ocassions</div>
                <div className="flex flex-row pb-4 ">
                  <ul className="flex flex-row items-center px-6">
                    <li
                      className={`border-2 ml-3 px-4 py-4 rounded-lg cursor-pointer ${
                        isButtonClicked2 ? "border border-yellow-500 " : ""
                      }`}
                      onClick={() => {
                        setOccassion("Birthday");
                        setIsButtonClicked2(!isButtonClicked2);
                      }}
                    >
                      Birthday
                    </li>
                    <li
                      //className="border-2 ml-3 px-4 py-4 rounded-lg cursor-pointer"
                      className={`border-2 ml-3 px-4 py-4 rounded-lg cursor-pointer ${
                        isButtonClicked3 ? "border border-yellow-500 " : ""
                      }`}
                      onClick={() => {
                        setOccassion("Anniversary");
                        setIsButtonClicked3(!isButtonClicked3);
                      }}
                    >
                      Anniversary
                    </li>
                    <li
                      // className="border-2 ml-3 px-4 py-4 rounded-lg cursor-pointer"
                      className={`border-2 ml-3 px-4 py-4 rounded-lg cursor-pointer ${
                        isButtonClicked4 ? "border border-yellow-500 " : ""
                      }`}
                      onClick={() => {
                        setOccassion("Couple Date");
                        setIsButtonClicked4(!isButtonClicked4);
                      }}
                    >
                      Couple Date
                    </li>
                  </ul>
                </div>
                <div className="con-butt pb-4 mb-2 flex justify-center">
                  <button
                    className="text-xl font-bold bg-yellow-500  py-4 rounded-xl w-[90%] text-center"
                    onClick={submitHandler}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-16 md:top-16 right-3 z-[100]">
              <button className="" onClick={closeModal1}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* pay a bill popup isOpen2 */}
      <div className="">
        {isOpen2 && userData && (
          <div>
            <div className="absolute top-[100px] lg:left-[33%] md:left-[33%] sm:left-0 bg-white z-[100] ">
              <div className="pop-up lg:h-fit lg:w-[30vw] md:h-fit md:w-[44vw] sm:h-fit sm:w-[95%]">
                <div className="payy text-2xl font-bold text-slate-600 px-28 py-4 text-center">
                  Pay Restaurant
                </div>
                <div className="chow-div flex flex-row px-8 py-2 border-t-2 border-b-2 mb-6 mt-3">
                  <div className="chow">
                    <img
                      src={restaurantData?.logo}
                      className="h-16 w-16"
                      alt=""
                    />
                  </div>
                  <div className="chow-text flex flex-col justify-center">
                    <div className="text1 px-4 text-xl font-bold">
                      {restaurantData.restaurantName}
                    </div>
                    <div className="txt2 px-4 text-slate-600">
                      {restaurantData.location}
                    </div>
                  </div>
                </div>
                <div className="money mx-auto w-[95%] ">
                  <div className="enter px-2 mx-auto">Enter Bill Amount</div>
                  <div className="input  py-4 relative">
                    <div className="absolute text-xl font-bold pl-2 pt-1">
                      ₹
                    </div>
                    <input
                      type="text"
                      id="amount"
                      value={amount}
                      onChange={handleChange}
                      placeholder=""
                      className="w-[100%] bg-gray-200 py-2 rounded-lg pl-6"
                    />
                  </div>
                </div>
                <div className="avoff px-4">
                  <div
                    className="flex flex-row justify-between py-4 -ml-4 cursor-pointer"
                    onClick={openModal4}
                  >
                    {" "}
                    <div className="ava px-4 pb-2 text-2xl">
                      Available Offers
                    </div>
                    <div>
                      {" "}
                      <MdKeyboardDoubleArrowRight color="yellow" size={36} />
                    </div>
                  </div>

                  <div className="offers w-[100%] shadow shadow-offset-x-8 shadow-offset-y-8 text-lg py-2  rounded-md px-2 ">
                    Check Your Offers
                  </div>
                </div>
                <div className="bill flex flex-col border-2 mt-4 py-4 px-4 rounded-lg w-[95%] mx-auto ">
                  <div className="flex flex-row justify-between">
                    <div className="pb-1">Total amount</div>
                    <div className="pb-1">{amount}</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="pb-1">Total Discount</div>
                    <div className="text-green-400 pb-1">{discount}</div>
                  </div>
                  <div className="flex flex-row justify-between border-t-2">
                    <div className="pt-2">Amount to be Paid</div>
                    <div className="pt-2">{amount - discount}</div>
                  </div>
                </div>
                <div className="con-butt py-4 mb-2 w-full flex justify-center">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="text-xl font-bold w-[90%] bg-yellow-500  py-4 rounded-xl  "
                  >
                    PAY NOW
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-20 right-4 z-[100]">
              <button className="" onClick={closeModal2}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 
       paymentsuccesful popup  - is Open5*/}
      <div className="">
        {isOpen5 && userData && (
          <div>
            <div className="absolute top-[100px] lg:left-[33%] md:left-[33%]   bg-white z-[100] ">
              <div className="pop-up lg:h-fit lg:w-[30vw] md:h-fit md:w-[44vw] sm:h-fit sm:w-[90%]">
                <div className="payy text-2xl font-bold text-slate-600 px-28 py-4 text-center">
                  Call Restaurant
                </div>
                <div className="chow-div flex justify-center flex-row border-y-2 py-2">
                  <div className="chow">
                    <img
                      src={restaurantData?.logo}
                      className="h-16 w-16"
                      alt=""
                    />
                  </div>
                  <div className="chow-text flex flex-col ">
                    <div className="text1 px-4 text-lg font-bold">
                      {restaurantData.restaurantName}
                    </div>
                    <div className="txt2 px-4 text-slate-600">
                      {restaurantData.location}
                    </div>
                  </div>
                </div>
                <div className="image">
                  <div className="flex justify-center relative">
                    <img src={celeb} className="h-60 w-60" alt="" />
                    <div className=" absolute bottom-4">
                      <img src={confirmation} className="h-33 w-23" />
                    </div>
                  </div>
                  {/* <div className="tick absolute h-32 w-32 bottom-[56%] left-[36%] ">
                    <img src={right} alt="" />
                    <div className="absolute top-8 left-8">
                      <FaCheck size={60} color="yellow" />
                    </div>
                  </div> */}
                </div>
                <div className="text-div flex flex-col ">
                  <div className="text-2xl font-bold text-center">
                    Payment Successful !
                  </div>
                  <div className="text-sm text-slate-600 text-center ">
                    Your Payment is successfully received by Us !
                  </div>
                </div>
                <div className="bill flex flex-col border-2 mt-4 py-8 px-4 rounded-lg w-[95%] mx-auto ">
                  <div className="flex flex-row justify-between">
                    <div className="pb-1 font-bold text-md text-slate-700">
                      Merchant Name:
                    </div>
                    <div className="pb-1 font-bold text-md text-slate-700">
                      {restaurantData?.restaurantName}
                    </div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="pb-1 text-sm text-slate-500">
                      Bill Amount:
                    </div>
                    <div className="pb-1 text-sm text-slate-500">{amount}</div>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="pb-1 text-sm text-slate-500">
                      Total Savings:
                    </div>
                    <div className="text-green-400 pb-1 ">₹ {discount}</div>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <div className="text-sm text-slate-500">Amount Paid:</div>
                    <div className="text-sm text-slate-500">
                      ₹{amount - discount}
                    </div>
                  </div>
                  {/* <div className="flex flex-row justify-between ">
                    <div className="text-sm text-slate-500">Txn Id:</div>
                    <div className="text-sm text-slate-500">
                      uhujdcjhhcuh2354623bhvbd
                    </div>
                  </div> */}
                </div>
                <div className="flex flex-col items-center py-4 ">
                  <div>
                    <button
                      className="bg-yellow-500 py-4 px-32 rounded-2xl font-bold"
                      onClick={closeModal5}
                    >
                      Continue
                    </button>
                  </div>
                  <div className="py-4">
                    <button>Need Help?</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-20 right-4 z-[100]">
              <button className="" onClick={closeModal5}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* popup failed isOpen6 */}
      <div className="">
        {isOpen6 && userData && (
          <div>
            <div className="absolute top-[100px] lg:left-[33%] md:left-[33%] sm:left-0 bg-white z-[100] ">
              <div className="pop-up lg:h-fit lg:w-[30vw] md:h-fit md:w-[44vw] sm:h-fit sm:w-[95%]">
                <div className="payy text-2xl font-bold text-slate-600  py-4 text-center">
                  Call Restaurant
                </div>
                <div className="chow-div flex flex-row justify-center border-y-2 py-2">
                  <div className="chow">
                    <img
                      src={restaurantData?.logo}
                      className="h-16 w-16"
                      alt=""
                    />
                  </div>
                  <div className="chow-text flex flex-col ">
                    <div className="text1  text-xl font-bold">
                      {restaurantData.restaurantName}
                    </div>
                    <div className="txt2  text-slate-600">
                      {restaurantData.location}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img src={girl} alt="" />
                </div>
                <div className="text-div flex flex-col ">
                  <div className="text-2xl font-bold text-center">
                    Oops ! Payment Failed
                  </div>
                  <div className="text-sm text-slate-600 text-center ">
                    Your Payment Transaction Failed ! Please try again !
                  </div>
                </div>

                <div className="flex flex-col items-center py-4 ">
                  <div>
                    <button className="bg-yellow-500 py-4 px-32 rounded-2xl font-bold">
                      TRY AGAIN
                    </button>
                  </div>
                  <div className="py-4">
                    <button>Need Help?</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-20 right-1 z-[100]">
              <button className="" onClick={closeModal6}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* share popup */}
      <div>
        {isOpen7 && (
          <div>
            <div className="absolute lg:h-fit top-28 lg:left-[38%] md:left-[22%] sm:left-0 bg-white z-[100] md:h-fit rounded-lg sm:h-[100vw]">
              <div className="pop-up lg:h-fit lg:w-[30vw] md:h-fit md:w-[58vw] sm:h-fit sm:w-[95%]">
                <div className="text-2xl font-bold py-6 text-[#363636] px-8">
                  Share
                </div>
                <div className="flex flex-row w-[90%] mx-auto">
                  <div className="flex flex-col  ">
                    <div className="mx-4">
                      <img className="h-14 w-14 " src={messeng} alt="" />
                    </div>
                    <div className="text-sm  text-center">Messenger</div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="mx-4">
                      <img className="h-14 w-14 " src={whatsapp} alt="" />
                    </div>
                    <div className="text-sm text-center">WhatsApp</div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="mx-4">
                      <img className="h-14 w-14" src={tele} alt="" />
                    </div>
                    <div className="text-sm text-center">Telegram</div>
                  </div>
                  <div className="flex flex-col ">
                    <div className="mx-4">
                      <img className="h-14 w-14" src={chat} alt="" />
                    </div>
                    <div className="text-sm text-center">Wechat</div>
                  </div>
                </div>
                <div className="flex flex-col py-4 ">
                  <div className="font-bold text-xl px-8 py-4 text-[#363636] ">
                    Or copy link
                  </div>
                  <div className="flex flex-row ">
                    <div className="  px-4 pb-4">
                      <input
                        type="text"
                        id="inputText"
                        placeholder="Enter text to copy"
                        value={textToCopy}
                        onChange={handleChange1}
                        className="bg-[#0000000D]
                        rounded-lg w-[320px] py-2 px-4"
                      />
                    </div>
                    <div className=" pb-4">
                      <button
                        id="copyButton"
                        onClick={handleCopy}
                        className="bg-[#F3D74C] font-bold text-sm px-6 rounded-xl py-2"
                      >
                        {copied ? "COPIED!" : "COPY"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-20 right-1 z-[100]">
              <button className="" onClick={closeModal7}>
                <IoCloseSharp size={36} color="rgba(255, 214, 40, 1)" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className=" pt-16 w-[100%]" id="background">
        {" "}
        <div className="Home">
          <div className="home-img h-[80vh] w-[100%] relative">
            <img className="w-[100%] h-full" src={bg} alt="" />
            <Link to="/home">
              <img
                className=" absolute top-6 left-10 cursor-pointer lg:top-5 md:top-4  sm:top-4 size-[2rem] sm:size-[3rem]"
                src={arrow}
                alt=""
              />
            </Link>
            <img
              src={isButtonClicked ? like : like2}
              onClick={
                isButtonClicked ? handleRecommendClick : handleNotRecommendClick
              }
              className="absolute right-20 lg:right-[7rem] cursor-pointer top-4 lg:top-[1.3rem] lg:size-[3rem] size-[2rem] "
              alt=""
            />
            <img
              src={share}
              className="absolute right-8 cursor-pointer top-2 lg:size-[5rem] size-[3rem]"
              alt=""
              onClick={openModal7}
            />
            {/* <img
              src={recommend}
              className="absolute top-80 right-0 cursor-pointer lg:top-44 md:top-28 md:h-[13vw] sm:top-28 sm:h-[16vw] lg:h-fit"
              alt=""
            /> */}
            <div className="bg-[#FFD601] w-60 rounded-l-lg absolute top-[12rem] right-0 lg:top-44 md:top-28 md:h-[13vw] sm:top-28 sm:h-[16vw] lg:h-24 flex flex-col justify-center items-center">
              <div className="flex justify-center">
                <img src={allStudent} alt="" className="w-24 h-12 " />
                <div className="font-bold text-2xl">
                  {restaurantData?.recommendations.length}+{/* 4689+ */}
                </div>
              </div>
              <div className="font-bold text-2xl">Recommendations</div>
            </div>
            {/* <img
            src={restro}
            className="absolute left-4 bottom-5 md:h-[12vw] sm:w-[80vw] h-[22vw] lg:w-[60vw]"
            alt=""
          /> */}
            <div className="flex flex-row items-center absolute left-10 bottom-16 gap-4">
              <div>
                <img
                  src={restaurantData?.logo}
                  className="sm:h-14 w-14 md:h-12 md:w-12"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="text-white font-bold lg:text-5xl md:text-5xl sm:text-xl">
                  {restaurantData?.restaurantName}
                </div>
                <div className="text-[#FFFFFF] lg:text-2xl md:text-2xl sm:text-md">
                  {restaurantData?.location}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[90%] mx-auto h-fit ">
          <div className="w-full py-[2rem]  sm:text-center md:text-start text-3xl text-slate-600 font-bold ">
            Photos
          </div>
          {/* slider */}
          <div className="relative flex md:flex-row flex-col gap-[1rem] w-full h-[70vh] justify-center items-center">
            {/* <Slider images={images} /> */}
            <div className="slider-container  h-full w-full lg:w-[50%]  relative flex  ">
              <img
                src={pics[currentSlide]?.image}
                alt="image"
                className="slider-image w-full h-full  object-contain rounded-lg shadow-md relative  "
              />

              <button
                className="absolute bottom-[50%] left-6 "
                onClick={handlePrev}
              >
                <MdArrowBackIos size={40} color="blue" />
              </button>
              <button
                className="absolute bottom-[50%] right-6"
                onClick={handleNext}
              >
                <MdArrowForwardIos size={40} color="blue" />
              </button>
            </div>

            <div className="w-[90%] mx-auto md:w-[20%] hidden lg:block sm:hidden  ">
              <div className="button-div bottom-2 h-fit w-full items-center lg:-left-24 relative md:-left-36 md:w-[36vw]">
                <div className="button1">
                  <button
                    className="h-16 text-md w-full border-2 rounded-lg mb-8 text-xl flex justify-between py-2 "
                    onClick={openModal}
                  >
                    <span className="pl-8 py-2 text-lg md:-mt-1">
                      Recommed This Place{" "}
                    </span>

                    <img className=" px-6 py-2 h-10 " src={arrow1} alt="" />
                  </button>
                </div>
                <div className="button2">
                  <button
                    className="h-16 text-md w-full border-2 rounded-lg mb-8 text-xl flex justify-between "
                    onClick={openModal4}
                  >
                    <span className="pl-8 pt-3">Available Offers</span>{" "}
                    <img className=" px-6 py-2 h-10 mt-2" src={arrow1} alt="" />
                  </button>
                </div>

                <div className="offers"></div>
                <div className="button3 ">
                  <button
                    className="h-16 text-md w-full border-2 rounded-lg mb-8 text-xl bg-yellow-400 flex justify-between"
                    onClick={openModal1}
                  >
                    <span className="pl-8 pt-3"> Book a table</span>
                    <img className=" px-6 py-2 h-10 mt-2" src={arrow2} alt="" />
                  </button>
                </div>
                <div className="button4 ">
                  {" "}
                  <button
                    className="h-16 text-md w-full border-2 rounded-lg text-xl bg-yellow-400 flex justify-between "
                    onClick={openModal2}
                  >
                    <span className="pl-8 pt-3">Pay Bill</span>
                    <img className=" px-6 py-2 h-10 mt-2" src={arrow2} alt="" />
                  </button>
                  {/* </Modal> */}
                </div>
              </div>
            </div>
          </div>
          {/* hi */}
          {/* md-div */}
          <div className="flex flex-col items-center h-fit w-full sm:w-[80%] py-8 lg:hidden ">
            <div className="button2 w-full max-w-[400px]">
              <button
                className="h-16 text-md w-full border-2 rounded-lg mb-8 text-xl flex justify-between px-[1rem] items-center"
                onClick={openModal4}
              >
                <span className="mr-[1rem]">Available Offers</span>{" "}
                <img className="ml-[1rem]" src={arrow1} alt="" />
              </button>
            </div>

            <div className="button1 w-full  max-w-[400px]">
              <button
                className="h-16 text-md w-full border-2 rounded-lg mb-8 text-xl flex justify-between px-[1rem] items-center"
                onClick={openModal}
              >
                <span className="mr-[1rem]">Recommed This Place </span>

                <img className="ml-[1rem]" src={arrow1} alt="" />
              </button>
            </div>

            <div className="button1 w-full  max-w-[400px]">
              <button
                className="h-16 text-md w-full border-2 rounded-lg mb-8 text-xl flex justify-between bg-yellow-400 px-[1rem] items-center"
                onClick={openModal1}
              >
                <span className="mr-[1rem]">Book a table </span>

                <img className="ml-[1rem]" src={arrow2} alt="" />
              </button>
            </div>

            <div className="button1 w-full  max-w-[400px]">
              <button
                className="h-16 text-md w-full border-2 rounded-lg mb-8 text-xl flex justify-between bg-yellow-400 px-[1rem] items-center"
                onClick={openModal2}
              >
                <span className="mr-[1rem]"> Pay Bill </span>

                <img className="ml-[1rem]" src={arrow2} alt="" />
              </button>
            </div>
          </div>

          {/* lg-button page */}
        </div>
      </div>
      <RestaurantAbout restaurantData={restaurantData} />
      {/* <RestaurantPhotos restaurantData={restaurantData} /> */}
      <RestaurantMenu restaurantData={restaurantData} />
      <RestaurantFooter restaurantData={restaurantData} />

      {/* footer - small screen */}
      {/* <div
        id="footer"
        className="footer1 w-full h-fit lg:hidden  py-8 flex flex-wrap gap-[1rem] justify-center items-center"
      >
        <div className="div1 w-fit h-fit">

          <button
            className=" w-full px-[.5rem]  border-2 rounded-lg  text-xl bg-yellow-400 flex justify-around items-center "
            onClick={openModal1}
          >
            <span className=" font-bold px-[3rem] py-[1rem]">
              {" "}
              Book a table
            </span>
            <img className="" src={arrow2} alt="" />
          </button>
        </div>

        <div className="div2 w-fit h-fit py-2">
          <button
            className="w-full  px-[2rem]  border-2 rounded-lg text-xl bg-yellow-400 flex justify-between items-center "
            onClick={openModal2}
          >
            <span className="font-bold px-[3rem] py-[1rem]">Pay Bill</span>
            <img className="" src={arrow2} alt="" />
          </button>
        </div>

      </div> */}
    </div>
  );
}

export default RestaurantPage;
