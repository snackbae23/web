import React, { useEffect, useState } from "react";
import { useSnackBae } from "../context/SnackBae";
import axios from "axios";
import toast from "react-hot-toast";

//image
import notliked from "../assets/notliked.png";
import good from "../assets/good.png";
import musttry from "../assets/musttry.png";
import defaultuser from '../assets/review.jpg';
import recommand from "../assets/recommand.jpg";

//icons
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { TbPinnedFilled } from "react-icons/tb";

const Menucomment = ({ resId, setOpenPhno }) => {
  const {
    commentVisible,
    setCommentVisible,
    setLogin,
    setMenuId,
    menuId,
    menuData,
    setMenuData,
    User,
    isFavorite,
    setIsFavorite,
    favoriteMenu,
    setFavoriteMenu,
  } = useSnackBae();
  // console.log("menu id : ", menuId);
  const [data, setData] = useState([]);
  console.log("favoriteMenu", favoriteMenu);

  function setTempData(menuId, commentVisible) {
    const temp = { menuId: menuId, commentVisible: commentVisible };
    temp.menuId = menuId;
    temp.commentVisible = commentVisible;
    localStorage.setItem("temp", JSON.stringify(temp));
  }
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("user"))?._id;
    console.log(userId);
    if (userId) {
      handleStateFavorite();
    }

    console.log(menuId);
    // console.log(userId);
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/getMenuById/${menuId}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setMenuData(response?.data);

        // console.log(menuData);
        // console.log("fd", menuData?.menu?.name);

        const a = menuData?.menu?.mustTry;
        const b = menuData?.menu?.liked;
        const c = menuData?.menu?.notLiked;

        if (userId) {
          if (a) {
            const containsString = (a, userId) =>
              a.some((element) => element.includes(userId));
            console.log(userId);
            if (containsString(a, userId)) {
              setValue(5);
            }
          }
          if (b) {
            const containsString = (b, userId) =>
              b.some((element) => element.includes(userId));
            console.log(userId);
            if (containsString(b, userId)) {
              setValue(4);
            }
          }
          if (c) {
            const containsString = (c, userId) =>
              c.some((element) => element.includes(userId));
            console.log(userId);
            if (containsString(c, userId)) {
              setValue(1);
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [menuId]);
  // const [newone, setNewone] = useState(false);
  // const [notlikedone, setNotliked] = useState(false);
  // const [goodone, setGood] = useState(false);
  // const [musttryone, setMustTry] = useState(false);
  const [filter, setFilter] = useState("new");
  const [comment, setComment] = useState("");

  const calculateTimeDifference = (fateDate) => {
    // Convert fate date to Date object
    const fateDateTime = new Date(fateDate);

    // Current date
    const currentDate = new Date();

    // Calculate time difference in milliseconds
    const timeDifference = currentDate.getTime() - fateDateTime.getTime();

    // Convert milliseconds to days, weeks, or months
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const weeksDifference = Math.floor(daysDifference / 7);
    const monthsDifference = Math.floor(daysDifference / 30);

    // Determine appropriate label based on time difference
    if (monthsDifference >= 1) {
      return `${monthsDifference} month${monthsDifference > 1 ? "s" : ""} ago`;
    } else if (weeksDifference >= 1) {
      return `${weeksDifference} week${weeksDifference > 1 ? "s" : ""} ago`;
    } else {
      if (daysDifference == 0) return "Today";
      else return `${daysDifference} day${daysDifference > 1 ? "s" : ""} ago`;
    }
  };

  const commentHandler = (e) => {
    setComment(e.target.value);
  };

  const submitHandler = () => {
    console.log(comment);
    let com = { description: "", rated: "", resId: "" };
    com.description = comment;

    const a = menuData.menu.mustTry;
    const b = menuData.menu.liked;
    const c = menuData.menu.notLiked;
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    if (userId) {
      if (a) {
        const containsString = (a, userId) =>
          a.some((element) => element.includes(userId));
        console.log(userId);
        if (containsString(a, userId)) {
          com.rated = "mustTry";
        }
      }
      if (b) {
        const containsString = (b, userId) =>
          b.some((element) => element.includes(userId));
        console.log(userId);
        if (containsString(b, userId)) {
          com.rated = "liked";
        }
      }
      if (c) {
        const containsString = (c, userId) =>
          c.some((element) => element.includes(userId));
        console.log(userId);
        if (containsString(c, userId)) {
          com.rated = "notLiked";
        }
      }
    }
    com.resId = resId;
    let data = JSON.stringify(com);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/addComment/${userId}/${menuId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));

        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: `https://seashell-app-lgwmg.ondigitalocean.app/getMenuById/${menuId}`,
          headers: {},
        };

        axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            setMenuData(response.data);
            console.log(menuData);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
    setComment("");
  };
  //input range
  const [value, setValue] = useState(4);

  const handleInputChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  useEffect(() => {
    const rating = { rated: "", resId: "" };
    if (value <= 2) rating.rated = "notLiked";
    else if (value > 2 && value <= 4) rating.rated = "liked";
    else rating.rated = "mustTry";

    rating.resId = resId;
    let data = JSON.stringify(rating);
    const userId = JSON.parse(localStorage.getItem("user"))?._id;
    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/updateRating/${User._id}/${menuId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // setValueChanged(!valueChanged);

        let config1 = {
          method: "get",
          maxBodyLength: Infinity,
          url: `https://seashell-app-lgwmg.ondigitalocean.app/api/getMenuById/${menuId}`,
          headers: {},
        };

        axios
          .request(config1)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            setMenuData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [value]);

  const handleClick = () => {
    setSliderColor("#FFD628");
  };

  const handleStateFavorite = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/favourites/${User._id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data.favoriteMenuItems);
        setFavoriteMenu(response.data.favoriteMenuItems);
        const isMenuFavorite =
          favoriteMenu.filter((element) => element._id === menuId).length > 0;
        console.log(isMenuFavorite);
        setIsFavorite(isMenuFavorite);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleAddFavorite = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/favourites/${user._id}/${menuId}/${resId}`,
      // url : `http://localhost:4000/api/favourites/${user._id}/${menuId}/${resId}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));

        setIsFavorite(!isFavorite);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getEmoji = () => {
    if (value <= 2) {
      return (
        <img src={notliked} alt="notliked" className="w-[30px] aspect-square" />
      ); // Bad
    } else if (value <= 4) {
      return <img src={good} alt="good" className="w-[30px] aspect-square" />; // Good
    } else {
      return (
        <img src={musttry} alt="musttry" className="w-[30px] aspect-square" />
      ); // Must Try
    }
  };
  //favorite

  const toggleFavorite = (item) => {
    // if(User.favoriteMenuItems)
    toggleAddFavorite();
    if (!isFavorite) {
      toast.success(`${item} added to Favorite!`);
    } else {
      toast.success(`${item} removed from Favorite!`);
    }
  };

  console.log("menudata", menuData);

  const [pinCommentIds, setPinCommentIds] = useState([]);

  useEffect(() => {
    if (menuData && menuData.menu && menuData.menu.Pincomments) {
      const ids = menuData.menu.Pincomments.map((comment) => comment._id);
      setPinCommentIds(ids);
    }
  }, [menuData]);

  console.log("pinCommentIds", pinCommentIds);

  const getFilteredComments = (filter) => {
    const filteredComments = [];
    console.log(filter);

    // Check if menuData.menu.comments exists
    if (menuData?.menu?.comments) {
      // Filter out pinned comments
      const nonPinnedComments = menuData.menu.comments.filter(
        (comment) => !pinCommentIds.includes(comment._id)
      );

      if (filter === "new") {
        const comments = nonPinnedComments
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 5);
        if (comments) {
          filteredComments.push(...comments); // Use spread operator to push individual comments
        }
      } else {
        nonPinnedComments.forEach((item) => {
          if (item.rated === filter) {
            filteredComments.push(item);
          }
        });
      }
    }

    return filteredComments;
  };

  const filteredComments = getFilteredComments(filter);
  console.log("comments", filteredComments);

  return (
    <div className=" relative w-full h-0">
      <div
        className={` fixed bottom-0 left-[50%] z-[5000] translate-x-[-50%] max-w-[400px] h-[100vh]  overflow-x-hidden hideScroller w-full comment ${commentVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
          } bg-transparent`}
      >
        <div className="w-full h-[26vh] bg-black opacity-45"></div>
        <div className="h-[75vh]  w-full overflow-y-scroll relative bg-white hideScroller border-2">
          <div className="relative w-full h-fit">
            <IoIosCloseCircleOutline
              onClick={() => {
                setMenuId("");
                setCommentVisible(!commentVisible);
                setFilter("new");
              }}
              className="text-[2rem] cursor-pointer fixed right-[1rem] top-[27vh] text-[#426CFF] z-[100]"
            />
          </div>
          <div className="relative">
            <img
              src={menuData?.menu?.image}
              alt={menuData?.menu?.name}
              className="h-[180px] aspect-auto object-contain mx-auto mt-[1rem]"
            />
            <p className="w-fit px-[.5rem] rounded-xl bg-[#FFD628] font-[500] sm:text-[1.2rem] absolute bottom-[2rem] sm:bottom-[1rem] right-[2rem] sm:right-[1rem] ">
              ₹ {menuData?.menu?.price}
            </p>
          </div>
          <div className="relative flex justify-between items-center px-[1rem]">
            <div className="flex gap-[1rem] items-center my-[.5rem] ">
              <div className="p-[.5rem] rounded-md flex items-center justify-start w-fit h-fit border-2  bg-white">
                {menuData?.menu?.veg !== "Yes" && (
                  <div className="bg-[#ED4F4F] rounded-full w-[10px] aspect-square"></div>
                )}
                {menuData?.menu?.veg == "Yes" && (
                  <div className="bg-[#2eae4e] rounded-full w-[10px] aspect-square"></div>
                )}
              </div>
              <p className="font-Roboto font-[500] sm:text-[1.2rem] my-[.5rem] text-center">
                {menuData?.menu?.name}
              </p>
              {/* <p className='text-[#0F172AB2] font-Roboto font-[500]'>Category</p> */}
            </div>
            <FaHeart
              id="favorite"
              className={`text-[1.4rem] cursor-pointer  ${isFavorite ? "fill-[#ED4F4F] overflow-hidden" : "fill-gray-300"
                } `}
              onClick={() => {
                const user = JSON.parse(localStorage.getItem("user"));
                if (user._id) {
                  toggleFavorite(menuData?.menu?.name);
                } else {
                  setTempData(menuId, commentVisible);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setLogin(true);
                  setOpenPhno(true);
                  // window.location.reload();
                }
              }}
            />
          </div>
          <p className="font-inter font-[400] text-[.9rem] text-[#64748B] text-center px-[20px]">
            {menuData?.menu?.description}
          </p>
          {(menuData?.menu?.variants1 ||
            menuData?.menu?.variants2 ||
            menuData?.menu?.variants3) && (
              <div>
                <p className="font-inter font-[700] px-[20px] my-[.5rem]">
                  Variants
                </p>
                <div className="w-[90%] mx-auto mt-[.5rem] border-2 rounded-xl p-[10px]">
                  {/* variants1 */}
                  {menuData?.menu?.variants1 && (
                    <div className="w-full flex justify-between items-center px-[20px]">
                      <p className="text-[#004AAD] text-[1.1rem]">
                        {menuData?.menu?.variants1}
                      </p>
                      <p className="text-[#004AAD] text-[1.1rem]">
                        ₹ {menuData?.menu?.variants1Price}/-
                      </p>
                    </div>
                  )}
                  {/* variants2 */}
                  {menuData?.menu?.variants2 && (
                    <div className="w-full flex justify-between items-center px-[20px]">
                      <p className="text-[#004AAD] text-[1.1rem]">
                        {menuData?.menu?.variants2}
                      </p>
                      <p className="text-[#004AAD] text-[1.1rem]">
                        ₹{menuData?.menu?.variants2Price}/-
                      </p>
                    </div>
                  )}
                  {/* variants3 */}
                  {menuData?.menu?.variants3 && (
                    <div className="w-full flex justify-between items-center px-[20px]">
                      <p className="text-[#004AAD] text-[1.1rem]">
                        {menuData?.menu?.variants3}
                      </p>
                      <p className="text-[#004AAD] text-[1.1rem]">
                        ₹{menuData?.menu?.variants3Price}/-
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          <div className="flex justify-center items-center my-[1rem] mt-[2rem]">
            <p className="w-[100px] h-[.5px] bg-[#00000057]"></p>
            <div className="text-center px-[.5rem]">
              <p className="leading-[1.3rem] font-[700] font-inter uppercase">
                User RATING
              </p>
            </div>
            <p className="w-[100px] h-[.5px] bg-[#00000057]"></p>
          </div>
          {/* notlike,good,musttry */}
          <div className="w-full flex justify-evenly my-[.5rem] ">
            <div className="flex flex-col items-center px-[2rem] py-[1rem] border-r-2">
              <p className="font-inter font-[500] text-[.9rem] sm:text-[1rem] mb-[.5rem]">
                {menuData?.menu?.notLikedCount}
              </p>
              <img src={notliked} alt="notliked" />
              <p className="font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]">
                Not Liked
              </p>
            </div>
            <div className="flex flex-col items-center px-[2rem]  py-[1rem]">
              <p className="font-inter font-[500]  text-[.9rem] sm:text-[1rem] mb-[.5rem]">
                {menuData?.menu?.likedCount}
              </p>
              <img src={good} alt="good" />
              <p className="font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]">
                Good
              </p>
            </div>
            <div className="flex flex-col items-center px-[2rem] py-[1rem] border-l-2">
              <p className="font-inter font-[500]  text-[.9rem] sm:text-[1rem] mb-[.5rem]">
                {menuData?.menu?.mustTryCount}
              </p>
              <img src={musttry} alt="musttry" />
              <p className="font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]">
                Must Try
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-[1rem]">
            <p className="w-[100px] h-[.5px] bg-[#00000057]"></p>
            <div className="text-center px-[.5rem]">
              <p className="leading-[1.3rem] font-[700] font-inter uppercase">
                Rate your
              </p>
              <p className="leading-[1.3rem] font-[700] font-inter uppercase">
                Experience
              </p>
            </div>
            <p className="w-[100px] h-[.5px] bg-[#00000057]"></p>
          </div>
          {/* input slider */}
          <div className="flex flex-col items-center mb-[1rem]">
            <div className="flex items-center justify-center mt-4">
              <div className=" flex items-center justify-center rounded-full border-2 border-yellow-300">
                {getEmoji()}
              </div>
            </div>
            <div className="mt-2">
              {value <= 2 && <span>Not Liked</span>}
              {value > 2 && value <= 4 && <span>Good</span>}
              {value > 4 && <span>Must Try</span>}
            </div>

            <input
              type="range"
              min="2"
              max="6"
              step="2"
              value={value}
              onChange={(e) => {
                const user = JSON.parse(localStorage.getItem("user"));
                if (user?._id) {
                  handleInputChange(e);
                } else {
                  setTempData(menuId, commentVisible);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setLogin(true);
                  setOpenPhno(true);
                  // window.location.reload();
                }
              }}
              className="w-64 h-[10px] mt-[1rem]  bg-[#00000069] appearance-auto accent-[#FFD601] cursor-pointer"
            />
          </div>
          {/* comment */}
          <div className="relative w-[90%] mx-auto h-fit shadow-md rounded-lg mb-[1rem]">
            <textarea
              className="w-full h-[10rem] focus:outline-none p-[1rem]"
              placeholder="Write your thoughts...."
              value={comment}
              maxLength={75}
              onChange={(e) => {
                const user = JSON.parse(localStorage.getItem("user"));
                if (user?._id) {
                  commentHandler(e);
                } else {
                  setTempData(menuId, commentVisible);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setLogin(true);
                  setOpenPhno(true);
                  // window.location.reload();
                }
              }}
            />
            <button
              onClick={(e) => {
                const user = JSON.parse(localStorage.getItem("user"));
                if (user?._id) {
                  submitHandler(e);
                } else {
                  setTempData(menuId, commentVisible);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setLogin(true);
                  setOpenPhno(true);
                  // window.location.reload();
                }
              }}
              className=" bg-[#FFD628] px-[1.4rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem] absolute right-[1rem] bottom-[1rem]"
            >
              Submit
            </button>
          </div>
          <div className="w-full sticky top-0 bg-white z-[100] pt-[1rem] border-b-2">
            {/* notlike,good,musttry
                    <div className='w-full flex justify-evenly mt-[1rem] '>
                        <div className='flex flex-col items-center px-[2rem] py-[1rem] border-r-2'>
                            <p className='font-inter font-[500] text-[.9rem] sm:text-[1rem] mb-[.5rem]'>{menuData?.menu?.notLikedCount}</p>
                            <img src={notliked} alt="notliked" />
                            <p className='font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]'>Not Liked</p>
                        </div>
                        <div className='flex flex-col items-center px-[2rem]  py-[1rem]'>
                            <p className='font-inter font-[500]  text-[.9rem] sm:text-[1rem] mb-[.5rem]'>{menuData?.menu?.likedCount}</p>
                            <img src={good} alt="good" />
                            <p className='font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]'>Good</p>
                        </div>
                        <div className='flex flex-col items-center px-[2rem] py-[1rem] border-l-2'>
                            <p className='font-inter font-[500]  text-[.9rem] sm:text-[1rem] mb-[.5rem]'>{menuData?.menu?.mustTryCount}</p>
                            <img src={musttry} alt="musttry" />
                            <p className='font-inter font-[400] text-[.6rem] sm:text-[.9rem] text-center mt-[.5rem]'>Must Try</p>
                        </div>
                    </div> */}

            <p className="font-inter font-[700] leading-[24px] text-[#262627] px-[1rem]">
              Recomendations by customers
            </p>
            <div className="w-full flex gap-[1rem] items-center my-[1rem] overflow-scroll hideScroller px-[1rem]">
              <button
                onClick={() => {
                  // setGood(false);
                  // setNewone(!newone);
                  // setNotliked(false);
                  // setMustTry(false);
                  setFilter("new");
                }}
                className={`${filter === "new" && "bg-[#FFD628]"
                  } px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem] border-2 text-nowrap`}
              >
                New
              </button>
              <button
                onClick={() => {
                  // setGood(false);
                  // setNewone(false);
                  // setNotliked(!notlikedone);
                  // setMustTry(false);
                  setFilter("notLiked");
                }}
                className={` ${filter === "notLiked" && "bg-[#FFD628]"
                  } px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem] border-2 text-nowrap`}
              >
                Not Liked
              </button>
              <button
                onClick={() => {
                  // setGood(!goodone);
                  // setNewone(false);
                  // setNotliked(false);
                  // setMustTry(false);
                  setFilter("liked");
                }}
                className={` ${filter === "liked" && "bg-[#FFD628]"
                  } px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem] border-2 text-nowrap`}
              >
                Liked
              </button>
              <button
                onClick={() => {
                  // setGood(false);
                  // setNewone(false);
                  // setNotliked(false);
                  // setMustTry(!musttryone);
                  setFilter("mustTry");
                }}
                className={` ${filter === "mustTry" && "bg-[#FFD628]"
                  }  px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem] border-2 text-nowrap`}
              >
                Must try
              </button>
            </div>
          </div>
          <div>
            {filteredComments.length === 0 ? (
              <div className="w-full h-fit flex flex-col items-center pt-[1rem]">
                <img
                  src={recommand}
                  alt="recommand-Image"
                  className="max-w-[400px] w-[90%] aspect-auto object-contain"
                />
                <p className="text-[1.4rem] font-inter font-[400]  capitalize">
                  No comment's found
                </p>
              </div>
            ) : (
              <div>
                {/* pinned message */}
                {filter == "new" &&
                  menuData.menu.Pincomments.map((comment, index) => (
                    <div
                      className=" relative  w-[80%]  h-fit  mx-auto border-[1.5px] my-[1rem] rounded-[15px] border-[#00000080]"
                      key={index}
                    >
                      {/* head */}
                      <div className="w-full flex justify-between items-center border-b-[.5px] border-[#00000080] px-[1rem] py-[.5rem]">
                        <img
                          src={defaultuser}
                          alt="dummyimage"
                          className="w-[50px] aspect-square rounded-full"
                        />
                        <p className="font-inter font-[500] text-[#334253]">
                          {comment?.userId?.name || "Anonymous"}
                        </p>
                        <p className="font-inter font-[400] text-[#67727E] flex gap-[.5rem] items-center">
                          {calculateTimeDifference(comment?.createdAt)}
                          <TbPinnedFilled className="text-[#426CFF]" />
                        </p>
                      </div>
                      {/* body */}
                      <p className="w-full px-[1rem] h-fit min-h-[150px] font-inter font-[400] text-[#0F172A] pt-[1rem] pb-[3rem] text-[1rem]">
                        {comment?.description}
                      </p>
                      {/* comment footer */}
                      <div className="flex  justify-between px-[1rem] items-center absolute w-fit right-0 bottom-2">
                        {/* <p className="font-Roboto font-[500] text-[#000000]">{menu.menuName}</p> */}
                        {comment?.rated == "mustTry" && (
                          <div className="w-fit h-fit mt-[.5rem] flex flex-col items-center ">
                            <img
                              src={musttry}
                              alt="musttry"
                              className="w-[20px] aspect-square"
                            />
                            <p className="font-inter font-[400] mt-[3px] text-nowrap">
                              must try
                            </p>
                          </div>
                        )}
                        {comment?.rated == "liked" && (
                          <div className="w-fit h-fit mt-[.5rem] flex flex-col items-center ">
                            <img
                              src={good}
                              alt="musttry"
                              className="w-[20px] aspect-square"
                            />
                            <p className="font-inter font-[400] mt-[3px] text-nowrap">
                              Liked
                            </p>
                          </div>
                        )}
                        {comment?.rated == "notLiked" && (
                          <div className="w-fit h-fit mt-[.5rem] flex flex-col items-center ">
                            <img
                              src={notliked}
                              alt="musttry"
                              className="w-[20px] aspect-square"
                            />
                            <p className="font-inter font-[400] mt-[3px] text-nowrap">
                              Not liked
                            </p>
                          </div>
                        )}
                        {comment?.rated == "" && (
                          <div className="w-fit h-fit mt-[.5rem] flex flex-col items-center ">
                            <img
                              src={notliked}
                              alt="musttry"
                              className="w-[20px] aspect-square"
                            />
                            <p className="font-inter font-[400] mt-[3px] text-nowrap">
                              No Reaction
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                {/* all comments */}
                {filteredComments?.map((comment, index) => (
                  <div
                    className=" relative  w-[80%]  h-fit  mx-auto border-[1.5px] my-[1rem] rounded-[15px] border-[#00000080]"
                    key={index}
                  >
                    {/* head */}
                    <div className="w-full flex justify-between items-center border-b-[.5px] border-[#00000080] px-[1rem] py-[.5rem]">
                      <img
                        src={defaultuser}
                        alt="dummyimage"
                        className="w-[50px] aspect-square rounded-full"
                      />
                      <p className="font-inter font-[500] text-[#334253]">
                        {comment?.userId?.name || "Anonymous"}
                      </p>
                      <p className="font-inter font-[400] text-[#67727E] flex gap-[.5rem] items-center">
                        {calculateTimeDifference(comment?.createdAt)}
                      </p>
                    </div>
                    {/* body */}
                    <p className="w-full px-[1rem] h-fit min-h-[150px] font-inter font-[400] text-[#0F172A] pt-[1rem] pb-[3rem] text-[1rem]">
                      {comment?.description}
                    </p>
                    {/* comment footer */}
                    <div className="flex  justify-between px-[1rem] items-center absolute w-fit right-0 bottom-2">
                      {/* <p className="font-Roboto font-[500] text-[#000000]">{menu.menuName}</p> */}
                      {comment?.rated == "mustTry" && (
                        <div className="w-fit h-fit mt-[.5rem] flex flex-col items-center ">
                          <img
                            src={musttry}
                            alt="musttry"
                            className="w-[20px] aspect-square"
                          />
                          <p className="font-inter font-[400] mt-[3px] text-nowrap">
                            must try
                          </p>
                        </div>
                      )}
                      {comment?.rated == "liked" && (
                        <div className="w-fit h-fit mt-[.5rem] flex flex-col items-center ">
                          <img
                            src={good}
                            alt="musttry"
                            className="w-[20px] aspect-square"
                          />
                          <p className="font-inter font-[400] mt-[3px] text-nowrap">
                            Liked
                          </p>
                        </div>
                      )}
                      {comment?.rated == "notLiked" && (
                        <div className="w-fit h-fit mt-[.5rem] flex flex-col items-center ">
                          <img
                            src={notliked}
                            alt="musttry"
                            className="w-[20px] aspect-square"
                          />
                          <p className="font-inter font-[400] mt-[3px] text-nowrap">
                            Not liked
                          </p>
                        </div>
                      )}
                      {comment?.rated == "" && (
                        <div className="w-fit h-fit mt-[.5rem] flex flex-col items-center ">
                          <img
                            src={notliked}
                            alt="musttry"
                            className="w-[20px] aspect-square"
                          />
                          <p className="font-inter font-[400] mt-[3px] text-nowrap">
                            No Reaction
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menucomment;
