import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const test = () => {
  const navigate = useNavigate();
  const [formData, setFormData] =
    useState ({ name: "", gender: "", phone: "", orderId: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    try {
      let data = JSON.stringify({
        phoneNumber: "91" + formData.phone,
        otpLength: 6,
        channel: "SMS",
        expiry: 180,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://auth.otpless.app/auth/otp/v1/send",
        headers: {
          clientId: "I11NELHRNXTHQQEUGNVLQXS41T2L7UDZ",
          clientSecret: "68g5e567j63kv3h7ahz976xj2sk7k46j",
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          toast.success("OTP sent successfully");
          setFormData({
            ...formData,
            orderId: response.data.orderId,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    handleLogin();
   // navigate("otp", { state: { formData } });
  };

  return (
    <>
      {/* <video src={loginAnimation}></video> */}
      {/* <div className="flex justify-center items-center p-4">
        <video width="200" height="200" muted autoPlay loop>
          <source src={loginAnimation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      {/* <img
        src={logo}
        alt="logo"
        className="w-[100%] aspect-auto max-w-[150px] mx-auto"
      /> */}

      <form
        onSubmit={handleSubmit}
        className="w-full h-fit flex flex-col items-center justify-center"
      >
        {/* name */}
        <div className="w-[90%] mx-auto h-fit flex flex-col items-start justify-center mt-[1rem]">
          <label
            htmlFor="name"
            className="text-[16px] font-inter font-[500] leading-[19.36px] mb-[5px]"
          >
            Your full name
          </label>
          <div className="w-full  h-fit flex  items-center text-[1.1rem] px-[.5rem] justify-center border-2 border-[#12121214]  rounded-md">
            {/* <Ci className="text-[1.4rem] mx-[.5rem]" /> */}
            <input
              className="w-full h-[60px]  focus:outline-none capitalize "
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="snackBAE"
              required
            />
          </div>
        </div>

        {/* gender */}
        <div className="w-[90%] mx-auto h-fit flex flex-col items-start justify-center mt-[1rem]">
          <label
            htmlFor="gender"
            className="text-[16px] font-inter font-[500] leading-[19.36px] mb-[5px]"
          >
            Gender:
          </label>
          <select
            id="gender"
            className="w-full h-[60px]  focus:outline-none px-[.5rem] text-[1.1rem] flex items-center justify-center border-2 border-[#12121214]  rounded-md"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* phone number */}
        <div className="w-[90%] mx-auto h-fit flex flex-col items-start justify-center mt-[1rem]">
          <label
            htmlFor="phone"
            className="text-[16px] font-inter font-[500] leading-[19.36px] mb-[5px]"
          >
            Phone No:
          </label>
          <div className="w-full  h-fit flex  items-center text-[1.1rem] px-[.5rem] justify-center border-2 border-[#12121214]  rounded-md">
            {/* <img
              src={Whatsapp}
              alt="Whatsapp"
              className="h-[1.4rem] aspect-auto mx-[.5rem]"
            /> */}
            <input
              className="w-full h-[60px] focus:outline-none "
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              placeholder="Whatshap Number"
              maxLength={10}
            />
          </div>
        </div>
        {/* <div id="recaptcha-container"></div> */}

        {/* submit button */}
        <button
          type="submit"
          className="w-[90%] h-[54px] mx-auto bg-[#FFD600] my-[1rem] rounded-md font-Roboto font-[500] leading-[30px] text-[20px] "
        >
          Continue
        </button>
      </form>
    </>
  );
};

export default test;
