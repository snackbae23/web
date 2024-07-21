import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const SnackbaeContext = createContext({});

export const useSnackBae = () => {
  const snack = useContext(SnackbaeContext);
  return snack;
};

export const SnackBaeProvider = (props) => {
  const [User, setUser] = useState(""); // it help in store data of user after fetch
  const [login, setLogin] = useState(false); //open login for user when it not logged in
  const [allBlogs, setAllBlogs] = useState("");
  const [loader, setLoader] = useState(false);
  const [commentVisible, setCommentVisible] = useState(false);
  const [isOn, setIsOn] = useState(false); //toggle switch
  const [shareVisible, setShareVisible] = useState(false); //toggle switch
  const [restaurentdata, setRestaurentData] = useState();
  const [menuId,setMenuId] = useState("");
  const [menuData,setMenuData] = useState({});
  const [valueChanged,setValueChanged] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteMenu, setFavoriteMenu] = useState(null);
  const [recommend, setRecommend] = useState(false);
  
  const [openprofile, setOpenProfile] = useState(false); // open user profile for signup
  const [editprofile, setEditProfile] = useState(false); //edit and open user profile

  //payment
  const [paymentamount, setPaymentAmount] = useState("");//payamount for bill pay
  const [ successPayment, setsuccesspayment ] = useState(false);
  const [ failurePayment, setfailurepayment ] = useState(false);

  useEffect(() => {
    setLoader(true);
    const storedUser = localStorage.getItem('user');
    
    // Update state if user data is found
    if (storedUser) {
       setUser(JSON.parse(storedUser));
    }
    getAllData();
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  //get all blog data
  const getAllData = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://goldfish-app-yhaxv.ondigitalocean.app/api/getBlogs",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setAllBlogs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SnackbaeContext.Provider
      value={{
        loader,
        setLoader,
        allBlogs,
        setAllBlogs,
        commentVisible,
        setCommentVisible,
        User,
        setUser,
        login,
        setLogin,
        isOn,
        setIsOn,
        shareVisible,
        setShareVisible,
        restaurentdata,
        setRestaurentData,
        menuId,
        setMenuId,
        menuData,
        setMenuData,
        valueChanged,
        setValueChanged,
        openprofile,
        setOpenProfile,
        setEditProfile,
        editprofile,
        setIsFavorite,
        isFavorite,
        setFavoriteMenu,
        favoriteMenu,
        paymentamount,
        setPaymentAmount,
        successPayment, 
        setsuccesspayment,
        failurePayment, 
        setfailurepayment,
        recommend,
        setRecommend

      }}
    >
      {props.children}
    </SnackbaeContext.Provider>
  );
};
