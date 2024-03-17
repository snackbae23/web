import React, { useEffect } from 'react'
import { useState } from 'react';
import AdminNav from '../Components/AdminNav'
import axios from 'axios';
import { FiSearch } from "react-icons/fi";
function AdminDashboard() {
  let d = '';
  const [resData, setResData] = useState();
  const [date, setDate] = useState();
  function changeHandler(e) {
    setDate(e.target.value);
    console.log("change", date);
  }
  function dateSubmit(e) {
    e.preventDefault();
    console.log(typeof (date));
    console.log("submit:", date);
    getAllData();
  }
  const getAllData = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://coral-app-mvtxg.ondigitalocean.app/api/getPartnerData",
      headers: {},
    };
    if (!date) {
      axios
        .request(config)
        .then((response) => {
          console.log(response);
          setResData(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
    else {
      let config1 = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://coral-app-mvtxg.ondigitalocean.app/api/getPartnerDataByDate/${date}`,
        headers: {},
      };
      axios.request(config1)
        .then((response) => {
          // console.log(response.data);
          setResData(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getAllData();
  }, [date]);

  return (
    <div>
      <AdminNav />
      <div className='w-[80vw] mx-auto mt-32'>
        <div className='w-full flex flex-row justify-between items-center'>
          <div>
            <div className='font-bold text-3xl'>Restaurant Details</div>
            <div className='text-sm opacity-80'>Restaurants that want to tie up </div>
          </div>
          <div >
            <form className='flex flex-row gap-3 items-center' onSubmit={dateSubmit}>
              <input type='date' className='py-2 px-6 bg-[#e7e6e6] rounded-md' value={date} onChange={changeHandler}></input>
              <button>
                <FiSearch fontSize={25} />
              </button>
            </form>

          </div>
        </div>
        <div className='mt-7 rounded-lg mb-7'>
          <table className='w-full'>
            <thead className="bg-[#bababada] min-w-full">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right "
                >
                  <span>Restaurant Name</span>
                </th>
                <th
                  scope="col"
                  className="px-12 py-3.5 text-sm font-bold text-left rtl:text-right"
                >
                  Contact
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right"
                >
                  Location
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#e7e6e6] divide-y divide-gray-200 dark:divide-gray-700">
              {resData?.data?.map((restaurant) => {
                return (
                  <tr key={restaurant._id}>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="text-sm">
                        {restaurant.rname}
                      </div>
                    </td>
                    <td className="px-12 py-4 whitespace-nowrap">
                      <div className="text-sm">
                        {restaurant.phone}
                      </div>
                      <div className="text-sm">
                        {restaurant.email}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm ">
                      {restaurant.loc}
                    </td>
                  </tr>
                )
              })

              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard