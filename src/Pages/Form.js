import React from 'react'
import { useState } from 'react';
import { Link } from 'react-scroll';
import AdminNav from '../Components/AdminNav';
import axios from 'axios';
import { useToast } from "@chakra-ui/react";

const Form = () => {
  const toast = useToast();

  const [formData, setFormData] = useState({
    restaurantName: '',
    cuisineType: '',
    location: '',
    pocContact: '',
    email: '',
    contactPerson: '',
    openingHour: '',
    closingHour: '',
    reservationPolicy: '',
    ambienceDescription: '',
    capacity: '',
    numberOfTables: '',
    specialties: '',
    currentPromotions: '',
    dietaryRestrictions: '',
    preferredPaymentMethod: '',
    specialties1: '',
    currentPromotion: '',
    agree: false,
  });

  function resetForm() {
    setFormData({
      restaurantName: '',
      cuisineType: '',
      location: '',
      pocContact: '',
      email: '',
      contactPerson: '',
      openingHour: '',
      closingHour: '',
      reservationPolicy: '',
      ambienceDescription: '',
      capacity: '',
      numberOfTables: '',
      specialties: '',
      currentPromotions: '',
      dietaryRestrictions: '',
      preferredPaymentMethod: '',
      specialties1: '',
      currentPromotion: '',
      agree: false,
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://coral-app-mvtxg.ondigitalocean.app/api/postFormDetails',
        headers: {
          'Content-Type': 'application/json'
        },
        data: formData
      };

      axios.request(config)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log('Form Data:', formData);
      resetForm();
      toast({
        title: "Registration successful",
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
  };

  return (
    <div>
      <AdminNav />
      <div className=" bg-zinc-100 w-full h-screen overflow-hidden text-center text-base text-white font-inter relative">
        <div className="flex  absolute top-[110px] left-[540px] text-[42px] tracking-[-0.02em]  font-semibold font-roboto text-slate-950 ">
          Become a partner
        </div>
        <div className="absolute top-[180px] left-[calc(50%_-_416px)] flex flex-row items-center justify-center gap-[14px]">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="relative w-10 h-10">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-slate-950 w-10 h-10" />
              <b className="absolute top-[8px] left-[15px] tracking-[-0.02em]">
                1
              </b>
              <img
                className="absolute top-[10px] left-[10px] w-5 h-5 overflow-hidden"
                alt=""
              />
            </div>
            <div className="relative text-sm tracking-[-0.02em] font-semibold font-roboto text-slate-950 text-left">
              Contact Details
            </div>
          </div>
          <div className="relative rounded-11xl bg-slate-300 w-[25px] h-1" />
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="relative w-10 h-10">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-slate-300 w-10 h-10" />
              <b className="absolute top-[8px] left-[14px] tracking-[-0.02em]">
                2
              </b>
            </div>
            <div className="relative text-sm tracking-[-0.02em] font-roboto text-slate-500 text-left">
              Operational Details
            </div>
          </div>
          <div className="relative rounded-11xl bg-slate-300 w-[25px] h-1" />
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="relative w-10 h-10">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-slate-300 w-10 h-10" />
              <b className="absolute top-[8px] left-[13px] tracking-[-0.02em]">
                3
              </b>
            </div>
            <div className="relative text-sm tracking-[-0.02em] font-roboto text-slate-500 text-left">
              Menu and Specialties
            </div>
            <div className="relative rounded-11xl bg-slate-300 w-[25px] h-1" />
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <div className="relative w-10 h-10">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-slate-300 w-10 h-10" />
                <b className="absolute top-[8px] left-[13px] tracking-[-0.02em]">
                  4
                </b>
              </div>
              <div className="relative text-sm tracking-[-0.02em] font-roboto text-slate-500 text-left">
                Additional Information
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_254px)] bg-white top-[250px]  rounded-3xl ml-40 ">
          <div className="ml-20 mr-20 mt-4">
            <form onSubmit={handleSubmit}>
              <div className='grid grid-rows-3 grid-cols-2  gap-9 text-slate-950 '>
                <div className='grid grid-rows-2 '>
                  <label className="flex ml-4 mt-2" htmlFor="restaurantName">Restaurant Name:</label>
                  <input className="rounded-xl shadow-md ml-4 px-4"
                    type="text"
                    id="restaurantName"
                    name="restaurantName"
                    placeholder='   important'
                    value={formData.restaurantName}
                    onChange={handleChange}
                  />
                </div>
                <div className='grid grid-rows-2 '>
                  <label className="flex ml-4 " htmlFor="cuisineType">Type of Cuisine:</label>
                  <input className="rounded-xl shadow-md ml-4 px-4"
                    type="text"
                    id="cuisineType"
                    name="cuisineType"
                    placeholder='   important'
                    value={formData.cuisineType}
                    onChange={handleChange}
                  />
                </div>
                <div className='grid grid-rows-2 '>
                  <label className="flex ml-4 " htmlFor="location">Location:</label>
                  <input className="rounded-xl shadow-md ml-4 px-4"
                    type="text"
                    id="location"
                    name="location"
                    placeholder='   important'
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
                <div className='grid grid-rows-2 '>
                  <label className="flex ml-4 " htmlFor="pocContact">POC Contact:</label>
                  <input className="rounded-xl shadow-md ml-4 px-4"
                    type="text"
                    id="pocContact"
                    name="pocContact"
                    placeholder='   important'
                    value={formData.pocContact}
                    onChange={handleChange}
                  />
                </div>
                <div className='grid grid-rows-2 '>
                  <label className="flex ml-4 " htmlFor="email">Email Address:</label>
                  <input className="rounded-xl shadow-md ml-4 px-4"
                    type="email"
                    id="email"
                    name="email"
                    placeholder='   important'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='grid grid-rows-2 '>
                  <label className="flex ml-4 " htmlFor="contactPerson">Contact Person:</label>
                  <input className="rounded-xl shadow-md ml-4 px-4"
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    placeholder='   important'
                    value={formData.contactPerson}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Link to="top" smooth={true} duration={200}>
                <button className=" bg-yellow-500 hover:bg-yellow-700 mt-7 mb-12 text-white font-bold py-2 px-8 rounded "
                >Next</button>
              </Link>
            </form>
          </div>

        </div>

      </div>

      {/* second form */}

      <div id='top' className="relative bg-zinc-100 w-full h-screen overflow-hidden text-center text-base text-white font-inter ">
        <div className="absolute top-[180px] left-[calc(50%_-_408.5px)] flex flex-row items-center justify-center gap-[0.63rem]">
          <div className="flex flex-row items-center justify-start gap-[0.75rem] text-left text-[0.88rem] text-goldenrod font-roboto">
            <img
              className="relative w-[2.5rem] h-[2.5rem]"
              alt=""
              src="/Group 1171277063.png"
            />
            <div className="relative tracking-[-0.02em] font-semibold text-yellow-400">
              Contact Details
            </div>
          </div>
          <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <div className="relative w-[2.5rem] h-[2.5rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-slate-950 w-[2.5rem] h-[2.5rem]" />
              <b className="absolute top-[0.5rem] left-[0.88rem] tracking-[-0.02em]">
                2
              </b>
            </div>
            <div className="relative text-[0.88rem] tracking-[-0.02em] font-semibold font-roboto text-slate-950 text-left">
              Operational Details
            </div>
          </div>
          <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <div className="relative w-[2.5rem] h-[2.5rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-slate-300 w-[2.5rem] h-[2.5rem]" />
              <b className="absolute top-[0.5rem] left-[0.81rem] tracking-[-0.02em]">
                3
              </b>
            </div>
            <div className="relative text-[0.88rem] tracking-[-0.02em] font-roboto text-slate-500 text-left">
              Menu and Specialties
            </div>
            <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
            <div className="flex flex-row items-center justify-start gap-[0.75rem]">
              <div className="relative w-[2.5rem] h-[2.5rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-slate-300 w-[2.5rem] h-[2.5rem]" />
                <b className="absolute top-[0.5rem] left-[0.81rem] tracking-[-0.02em]">
                  4
                </b>
              </div>
              <div className="relative text-[0.88rem] tracking-[-0.02em] font-roboto text-slate-500 text-left">
                Additional Information
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center w-full top-[90px]  text-[2.63rem] tracking-[-0.02em] leading-[3.5rem] font-semibold font-roboto text-slate-950 ">
          Become a partner
        </div>
        <div className="absolute w-[calc(100%_-_254px)] bg-white top-[250px]  rounded-3xl ml-40 " >
          <div className="ml-20 mr-20 mt-4">
            <form onSubmit={handleSubmit}>
              <div className='grid grid-rows-3 grid-cols-1  gap-2 text-slate-950 '>
                <div className='grid grid-rows-2 '>
                  <label className="flex ml-4 mt-4" htmlFor="openingHour">Opening Hour:</label>
                  <div className='flex '>
                    <input className="rounded-xl shadow-md ml-4 w-1/2 px-4"
                      type="time"
                      id="openingHour"
                      name="openingHour"
                      placeholder='   important'
                      value={formData.openingHour}
                      onChange={handleChange}
                    />
                    <h2 className="items-center mt-3 ml-2">TO</h2>
                    <input className="rounded-xl shadow-md ml-4 w-1/2 px-4"
                      type="time"
                      id="closingHour"
                      name="closingHour"
                      placeholder='   important'
                      value={formData.closingHour}
                      onChange={handleChange}
                    />
                  </div>

                </div>
                <div className='grid grid-rows-2 '>
                  <label className="flex ml-4 mt-4" htmlFor="reservationPolicy">Reservation Policy:</label>
                  <input className="rounded-xl shadow-md ml-4 px-4"
                    type="text"
                    id="reservationPolicy"
                    name="reservationPolicy"
                    placeholder='   important'
                    value={formData.reservationPolicy}
                    onChange={handleChange}
                  />
                </div>
                <div className='grid grid-rows-2 '>
                  <label className="flex ml-4 mt-4" htmlFor="ambienceDescription">Ambience Description:</label>
                  <textarea className="rounded-xl shadow-md ml-4 px-4"
                    id="ambienceDescription"
                    name="ambienceDescription"
                    placeholder='   important'
                    value={formData.ambienceDescription}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <Link to="top1" smooth={true} duration={200}>
                <button className=" bg-yellow-500 hover:bg-yellow-700 mt-7 mb-10 text-white font-bold py-2 px-8 rounded ">Next</button></Link>
            </form>
          </div>

        </div>

      </div>

      {/* 3 form */}
      <div id='top1' className="relative bg-zinc-100 w-full h-screen overflow-hidden text-center text-base text-white font-inter">
        <div className="absolute flex justify-center w-full top-[90px]  text-[2.63rem] tracking-[-0.02em] leading-[3.5rem] font-semibold font-roboto text-slate-950 ">
          Become a partner
        </div>
        <div className="absolute top-[180px] left-[calc(50%_-_408.5px)] flex flex-row items-center justify-center gap-[0.63rem]">
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <img
              className="relative w-[2.5rem] h-[2.5rem]"
              alt=""
              src="/Group 1171277063.png"
            />
            <div className="relative tracking-[-0.02em] font-semibold text-yellow-400">
              Contact Details
            </div>
          </div>
          <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <img
              className="relative w-[2.5rem] h-[2.5rem]"
              alt=""
              src="/Group 1171277063.png"
            />
            <div className="relative tracking-[-0.02em] font-semibold text-yellow-400">
              Operational Details
            </div>
          </div>
          <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
          <div className="flex flex-row items-center justify-start gap-[0.75rem] text-center text-[1.25rem] text-white font-inter">
            <div className="relative w-[2.5rem] h-[2.5rem]">
              <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-slate-950 w-[2.5rem] h-[2.5rem]" />
              <b className="absolute top-[0.5rem] left-[0.81rem] tracking-[-0.02em]">
                3
              </b>
            </div>
            <div className="relative text-[0.88rem] tracking-[-0.02em] font-semibold font-roboto text-slate-950 text-left">
              Menu and Specialties
            </div>
            <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
            <div className="flex flex-row items-center justify-start gap-[0.75rem]">
              <div className="relative w-[2.5rem] h-[2.5rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-slate-300 w-[2.5rem] h-[2.5rem]" />
                <b className="absolute top-[0.5rem] left-[0.81rem] tracking-[-0.02em]">
                  4
                </b>
              </div>
              <div className="relative text-[0.88rem] tracking-[-0.02em] font-roboto text-slate-500 text-left">
                Additional Information
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_254px)] bg-white top-[250px]  rounded-3xl ml-40 " >
          <div className="ml-20 mr-20 mt-2">
            <form className="grid grid-rows-2 grid-cols-2 text-black font-roboto  "
              onSubmit={handleSubmit}>
              <div className='grid grid-rows-2'>
                <label className="flex ml-4 mt-9" htmlFor="capacity">Capacity (Number of seats):</label>
                <input className="rounded-xl shadow-md ml-4 mb-4 px-4"
                  type="number"
                  id="capacity"
                  name="capacity"
                  placeholder='   1'
                  value={formData.capacity}
                  onChange={handleChange}
                />
              </div>
              <div className='grid grid-rows-2'>
                <label className="flex ml-4 mt-9" htmlFor="numberOfTables">Number of Tables:</label>
                <input className="rounded-xl shadow-md ml-4 mb-4 px-4"
                  type="number"
                  id="numberOfTables"
                  name="numberOfTables"
                  placeholder='   1'
                  value={formData.numberOfTables}
                  onChange={handleChange}
                />
              </div>
              <div className='grid grid-rows-2'>
                <label className="flex ml-4 mt-9" htmlFor="specialties">Specialties/Signature Dishes:</label>
                <input className="rounded-xl shadow-md ml-4 mb-4 px-4"
                  type="text"
                  id="specialties"
                  name="specialties"
                  placeholder='  eg-fish'
                  value={formData.specialties}
                  onChange={handleChange}
                />
              </div>
              <div className='grid grid-rows-2'>
                <label className="flex ml-4 mt-9" htmlFor="currentPromotions">Current Promotions/Deals:</label>
                <textarea className="rounded-xl shadow-md ml-4 mb-4 px-4"
                  id="currentPromotions"
                  name="currentPromotions"
                  value={formData.currentPromotions}
                  onChange={handleChange}
                />
              </div>

            </form>
            <Link to="top2" smooth={true} duration={200}>
              <button className=" bg-yellow-500 hover:bg-yellow-700 mt-7 mb-10 text-white font-bold py-2 px-8 rounded " >Next</button></Link>
          </div>
        </div>
      </div>

      {/* 4 frame */}



      <div id='top2' className="relative bg-zinc-100 w-full h-screen overflow-hidden text-center text-base text-white font-inter">

        <div className="absolute top-[180px] left-[calc(50%_-_408.5px)] flex flex-row items-center justify-center gap-[0.63rem]">
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <img
              className="relative w-[2.5rem] h-[2.5rem]"
              alt=""
              src="/Group 1171277063.png"
            />
            <div className="relative tracking-[-0.02em] font-semibold text-yellow-400">
              Contact Details
            </div>
          </div>
          <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <img
              className="relative w-[2.5rem] h-[2.5rem]"
              alt=""
              src="/Group 1171277063.png"
            />
            <div className="relative tracking-[-0.02em] font-semibold text-yellow-400">
              Operational Details
            </div>
          </div>
          <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
          <div className="flex flex-row items-center justify-start gap-[0.75rem]">
            <img
              className="relative w-[2.5rem] h-[2.5rem]"
              alt=""
              src="/Group 1171277063.png"
            />
            <div className="relative tracking-[-0.02em] font-semibold text-yellow-400">
              Menu and Specialties
            </div>
            <div className="relative rounded-11xl bg-slate-300 w-[1.56rem] h-[0.25rem]" />
            <div className="flex flex-row items-center justify-start gap-[0.75rem] text-center text-[1.25rem] text-white font-inter">
              <div className="relative w-[2.5rem] h-[2.5rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-slate-950 w-[2.5rem] h-[2.5rem]" />
                <b className="absolute top-[0.5rem] left-[0.81rem] tracking-[-0.02em]">
                  4
                </b>
              </div>
              <div className="relative text-[0.88rem] tracking-[-0.02em] font-semibold font-roboto text-slate-950 text-left">
                Additional Information
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-center w-full top-[90px]  text-[2.63rem] tracking-[-0.02em] leading-[3.5rem] font-semibold font-roboto text-slate-950 ">
          Become a partner
        </div>
        <div className="absolute w-[calc(100%_-_254px)] bg-white top-[250px]  rounded-3xl ml-40 px-12 " >
          <form className=' text-black font-roboto text- h-[400px] flex flex-col justify-center' onSubmit={handleSubmit}>
            <div className='grid grid-rows-2 grid-cols-2 mt-2 gap-9 '>
              <div className='grid grid-rows-2 '>
                <label className="flex ml-4 mt-2 " htmlFor="dietaryRestrictions">Any Dietary Restrictions or Special Accommodations</label>
                <input
                  className="rounded-xl shadow-md ml-4 px-4 "
                  type="text"
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                />
              </div>
              <div className='grid grid-rows-2 '>
                <label className='flex' htmlFor="preferredPaymentMethod">Preferred Payment Method:</label>
                <div className='flex  items-center space-x-4 mb-4 '>
                  <input
                    type='radio'
                    name='preferredPaymentMethod'
                    id='preferredPaymentMethod'
                    value='Credit'
                    onChange={handleChange}
                  ></input>
                  <label htmlFor="preferredPaymentMethod">Credit Card:</label>
                  <input
                    type='radio'
                    name='preferredPaymentMethod'
                    id='preferredPaymentMethod'
                    value='cash'
                    onChange={handleChange}
                  ></input>
                  <label htmlFor="preferredPaymentMethod">cash</label>
                  <input
                    type='radio'
                    name='preferredPaymentMethod'
                    id='preferredPaymentMethod'
                    value='wallets'
                    onChange={handleChange}
                  ></input>
                  <label htmlFor="preferredPaymentMethod">Digital Wallets</label>
                </div>


              </div>
              <div className='grid grid-rows-2 '>
                <label className="flex ml-4 mt-2" htmlFor="specialties1">Specialties/Signature Dishes:</label>
                <input
                  className="rounded-xl shadow-md ml-4 px-4 "
                  type="text"
                  id="specialties1"
                  name="specialties1"
                  value={formData.specialties1}
                  onChange={handleChange}
                />
              </div>
              <div className='grid grid-rows-2 '>
                <label className="flex ml-4 mt-2" htmlFor="currentPromotion">Current Promotions/Deals:</label>
                <input
                  className="rounded-xl shadow-md ml-4 px-4 "
                  type="text"
                  id="currentPromotion"
                  name="currentPromotion"
                  value={formData.currentPromotion}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='flex items-center justify-center flex-col mt-9'>
              <label>
                <input
                  className=" mr-4"
                  type="radio"
                  name="agree"
                  required
                  checked={formData.agree}
                  onChange={handleChange}
                />
                I agree terms and conditions
              </label>
              <button className=" bg-yellow-500 hover:bg-yellow-700 mt-7 mb-10 text-white font-bold py-2 px-8 rounded " onClick={handleSubmit}>Submit</button>
            </div>


          </form>
        </div>
      </div>



    </div>
  )
}

export default Form;