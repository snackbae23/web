
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../main";
import axios from "axios";


const feedbackmessage = () => {
    const [message, setMessage] = useState<string>("");
    const navigate = useNavigate();
    const { id, tableNo } = useParams<{ id: string, tableNo: string }>();
    const location = useLocation();
    const { rating } = location.state || {};
    const user = localStorage.getItem("user");
    const userId = user ? JSON.parse(user)._id : null;

    console.log(rating);

    const handleSubmit = () => {
        toast.success("Thanks for feedback!!");
        console.log(message);
        handleRating();

        navigate(`/restaurant/${id}/${tableNo}`)
    }


    const handleRating = async () => {
        try {
            let data = JSON.stringify({
                "message": message,
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

    return (
        <>
            <div>
                <p className=' font-Sen font-[700] text-[1.3rem] leading-[25.27px] text-center my-[2rem]'>We are extremely sorry for your bad experience!</p>

                <textarea
                    className="w-[90%] relative translate-x-[-50%] left-[50%] p-[1rem] h-[200px] bg-[#EFEFEF] focus:outline-none rounded-[20px]"
                    name="message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please describe about your experience and how we can improve ourselves"
                ></textarea>


                <button
                    onClick={handleSubmit} className='w-[90%] relative left-[50%] translate-x-[-50%] mt-[2rem] rounded-[12px] h-fit bg-[#FFD629] text-[1.2rem] font-Roboto font-[700] leading-[20px] py-[1rem]'>Continue</button>
            </div>
        </>
    )
}

export default feedbackmessage
