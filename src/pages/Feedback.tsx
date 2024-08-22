import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
//redux
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { fetchRestaurantDetails } from '../redux/slices/restaurentslice';


//icons
import { IoLocationOutline } from "react-icons/io5";

//images
import Facebook from '../assets/Facebook.png';
import instagram from '../assets/instagram.png';
import toast from 'react-hot-toast';
import { baseUrl } from '../main';

const Feedback = () => {

  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.restaurant);
  const user = localStorage.getItem("user");

  const { id } = useParams<{ id: string }>();
  const userId = user ? JSON.parse(user)._id : null;
  console.log(userId);
  const navigate = useNavigate();
  const [rating, setRating] = useState<string>("");

  const handleRating = async () => {
    try {
      let data = JSON.stringify({
        "message": "Your experience is above average",
        "rating": rating
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${baseUrl}/api/postUserFeedback/${userId}/${id}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    if (rating === "") {
      toast.error("please rate us");
    }
    else if (rating === "very good" || rating === "nice") {
      if (data?.additionalDetails?.google) {
        handleRating();
        window.open(data?.additionalDetails?.google);
      } else {
        navigate("message", { state: { rating } });
      }
    } else {
      navigate("message", { state: { rating } });

    }
  }


  useEffect(() => {
    if (id) {
      dispatch(fetchRestaurantDetails({ id }));
      // console.log(rating);
    }
  }, []);

  return (
    <>

      <div className='w-full h-fit bg-[#FFD628] flex flex-col gap-[1rem] py-[2rem]'>
        {/* section */}
        <div className='w-[90%] h-fit mx-auto rounded-[20px] bg-[#FFFFFF] flex flex-wrap gap-[.5rem] justify-between items-center px-[1rem] py-[.5rem] shadow-lg'>
          <div className='h-full w-fit flex items-center gap-[.5rem]'>
            <img src={data?.additionalDetails?.image} alt="logo" className='h-[60px] aspect-auto rounded-full border-[.5px]' />
            <div className='w-fit flex flex-col gap-[.5rem]'>
              <p className=' font-[600] font-inter text-[24px] leading-[23px] text-wrap'>
                {data?.resName?.split(' ').length > 2 ? data?.resName?.split(' ')[0] : data?.resName}</p>
              <div className='flex'>
                <IoLocationOutline className='text-[1.1rem]' />
                <p className=' font-[500] font-Roboto text-[16px] leading-[20px]'>{data?.additionalDetails?.city}</p>
              </div>
            </div>
          </div>
          <div className='w-fit flex items-center gap-[10px]'>
            {
              data?.additionalDetails?.facebook &&
              <Link target='_blank' to={`${data?.additionalDetails?.facebook}`}>
                <img src={Facebook} alt="Facebook" className='w-[32px]' />
              </Link>
            }

            {
              data?.additionalDetails?.instagram &&
              <Link target='_blank' to={`${data?.additionalDetails?.instagram}`}>
                <img src={instagram} alt="instagram" className='w-[32px]' />
              </Link>
            }
          </div>
        </div>
        {/* section2  How was your experience? */}
        <p className=' font-Sen font-[700] text-[1.3rem] leading-[25.27px] text-center my-[2rem]'>How was your experience?</p>
      </div>

      {/* section 3 emoji and rating */}
      <div className='w-full h-fit bg-white rounded-[20px] relative top-[-20px] shadow-md p-[1.5rem]'>
        {/* rating */}
        <div className='w-full h-fit flex flex-row justify-center items-center gap-[1rem] py-[2rem]'>
          <div
            onClick={() => {
              setRating("worst");
              toast.success("Thanks for Rating Us");
            }} className='w-full h-fit flex flex-col justify-center  items-center cursor-pointer'>
            <p className='text-[2rem] hover:text-[3rem]'>😢</p>
            <p className=' font-Roboto font-[700] text-[.9rem] leading-[20px]'>Bad</p>
          </div>
          <div onClick={() => {
            setRating("good");
            toast.success("Thanks for Rating Us");
          }} className='w-full h-fit flex flex-col justify-center items-center cursor-pointer'>
            <p className='text-[2rem] hover:text-[3rem]'>😕</p>
            <p className=' font-Roboto font-[700] text-[.9rem] leading-[20px]'>Good</p>
          </div>
          <div onClick={() => {
            setRating("average");
            toast.success("Thanks for Rating Us");
          }} className='w-full h-fit flex flex-col justify-center items-center cursor-pointer'>
            <p className='text-[2rem] hover:text-[3rem]'>😐</p>
            <p className=' font-Roboto font-[700] text-[.9rem] leading-[20px]'>Average</p>
          </div>
          <div onClick={() => {
            setRating("very good");
            toast.success("Thanks for Rating Us");
          }} className='w-full h-fit flex flex-col justify-center items-center cursor-pointer'>
            <p className='text-[2rem] hover:text-[3rem]'>😊</p>
            <p className=' font-Roboto font-[700] text-[.9rem] leading-[20px]'>Verygood</p>
          </div>
          <div onClick={() => {
            setRating("nice");
            toast.success("Thanks for Rating Us");
          }} className='w-full h-fit flex flex-col justify-center items-center cursor-pointer'>
            <p className='text-[2rem] hover:text-[3rem]'>😍</p>
            <p className=' font-Roboto font-[700] text-[.9rem] leading-[20px]'>Excellent</p>
          </div>
        </div>

        <button
          onClick={handleSubmit} className='w-[90%] relative left-[50%] translate-x-[-50%] mt-[2rem] rounded-[12px] h-fit bg-[#FFD629] text-[1.2rem] font-Roboto font-[700] leading-[20px] py-[1rem]'>Continue</button>
      </div>

      <p className=' font-Sen font-[700] text-[1.3rem] leading-[25.27px] text-center my-[1rem] text-[#7C7C7C]'>Your feedback is important to us</p>

    </>
  )
}

export default Feedback
