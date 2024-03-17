import React, { useEffect, useState } from "react";
import AdminNav from "../Components/AdminNav";
import AdminLeftBar from "../Components/AdminLeftBar";
import { MdContentCopy } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

// const data = {
//     logo: "",
//     qr: "",
//     url: "foodoos.snackbae.in",
//     businessName: "ReUnion Cafe",
//     location: "AG Block, Salt Lake",
//     managerName: "Sangit Saha",
//     managerContact: "9123456789",
//     customerContact: "9112343244",
//     email: "abc@gmail.com",
//     category: [
//         "Rooftop",
//         "Pet Friendly",
//         "Biryani"
//     ],
//     cuisines: [
//         "Indian",
//         "Chinese",
//         "Mughlai"
//     ],
//     opening: "11:00 AM",
//     closing: "11:00 PM",
//     offDay: "Thursday",
//     avgCost: "1200",
//     capacity: "28",
//     numberOfTables: "10",
//     FSSAI: "12345678457345345",
//     salesRep: "Annwesan Acharya"
// }

// const data = null;

function AdminMerchantProfile() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [offDayDisabled, setOffDayDisabled] = useState(false);
  const [originalFormData, setOriginalFormData] = useState(null);

  const categoryOptions = [
    { value: "Rooftop", label: "RoofTop" },
    { value: "PetFriendly", label: "Pet-friendly" },
    { value: "Classic", label: "Classic" },
  ];

  const cuisineOptions = [
    { value: "Indian", label: "Indian" },
    { value: "Chinese", label: "Chinese" },
    { value: "Italian", label: "Italian" },
  ];

  useEffect(() => {
    // const {id} = useParams();
    let config1 = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://coral-app-mvtxg.ondigitalocean.app/api/search?search=${id}`,
      headers: {},
    };

    axios
      .request(config1)
      .then((response) => {
        console.log(JSON.stringify(response.data[0]));
        setData(response.data[0]);
        // setSearchAllData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    if (data) {
      setFormData(data);
      setOriginalFormData(data);
    }
  }, [data]);

  const handleEditDetailsClick = () => {
    setIsEditable(!isEditable);
  };

  const handleCancelClick = () => {
    setIsEditable(false);
    setFormData(originalFormData);
    setSelectedCategory(originalFormData?.selectedCategory);
    setSelectedCuisine(originalFormData?.selectedCuisine);
  };

  const [formData, setFormData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(
    data?.selectedCategory
  );
  const [selectedCuisine, setSelectedCuisine] = useState(data?.selectedCuisine);

  useEffect(() => {
    // Update formData when data changes
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCategoryChange = (selectedOptions) => {
    setSelectedCategory(selectedOptions);

    // console.log(selectedOptions);

    setFormData((prevData) => ({
      ...prevData,
      selectedCategory: selectedOptions.map((option) => option.value),
    }));

    // console.log(formData.selectedCategory);
  };

  const handleCuisineChange = (selectedOptions) => {
    setSelectedCuisine(selectedOptions);
    // console.log(selectedCuisine);

    setFormData((prevData) => ({
      ...prevData,
      selectedCuisine: selectedOptions.map((option) => option.value),
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `https://coral-app-mvtxg.ondigitalocean.app/api/merchantprofile/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    // window.location.reload();
  };

  const handleCopyClick = () => {
    const textarea = document.createElement("textarea");
    textarea.value = data.url;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);
  };

  const handleDownloadClick = () => {
    const imageSrc = data.qr;

    fetch(imageSrc)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = "qr-code.png";

        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);
      })
      .catch((error) => {
        console.error("Error in downloading image:", error);
      });
  };

  // console.log("rId",rId);

  return (
    <div className="w-full">
      <div>
        <AdminNav />
      </div>
      <div className="flex pt-20">
        {/* Left Bar */}
        <div className="w-[20%]">
          <AdminLeftBar />
        </div>
        {!data ? (
          <div className="w-full bg-slate-200">
            <div className="p-8 rounded-md "></div>
          </div>
        ) : (
          <div className="w-full bg-slate-200">
            <div className=" p-8   rounded-md ">
              <div className="flex justify-between">
                <h1 className="text-[1.2rem] font-bold   ">Merchant Profile</h1>
                <div className="flex justify-center gap-10 pb-6">
                  <button
                    className="bg-white border-[#EAB308] ring-2 ring-[#EAB308] p-2 w-32 h-10 rounded-[10px] "
                    onClick={
                      isEditable ? handleCancelClick : handleEditDetailsClick
                    }
                  >
                    <div className="text-[#EAB308]">
                      {isEditable ? "Cancel" : "Edit Details"}
                    </div>
                  </button>
                  {isEditable ? (
                    <button
                      className="p-2 w-32 h-10 rounded-[10px] bg-[#EAB308] "
                      onClick={submitHandler}
                    >
                      <div className="text-white">Save Changes</div>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <form className="w-full h-fit bg-white p-5 mt-4 rounded-md text-[1.1rem] font-semibold">
                <div>
                  <div className="flex w-full justify-between mt-3 mb-2">
                    <div className="flex  w-[50%] justify-between mt-3 mb-2">
                      <div className="text-slate-300 h-[96px] w-full flex items-center">
                        <img
                          className="size-24 bg-slate-300  rounded-full"
                          name="logo"
                          alt=""
                          src={data?.logo}
                          onClick={handleDownloadClick}
                        />
                      </div>
                      <div className="">
                        <img
                          className="size-24 bg-slate-300  rounded-md"
                          name="logo"
                          alt=""
                          src={data?.qr}
                        />
                        <button className="text-yellow-500 text-[1rem]  font-roboto hover:text-slate-500">
                          Download QR Code
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col w-[48%] mt-20 font-roboto">
                      <label>Url</label>
                      {isEditable ? (
                        <input
                          className="rounded-md mt-1 my-1.5 px-2 h-10 w-full text-[.92rem] text-slate-500 border-2 border-gray-300"
                          type="text"
                          id="url"
                          name="url"
                          value={formData?.url}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2 flex justify-between items-center">
                          <p className="flex items-center my-1.5 text-slate-500 font-roboto">
                            {data?.url}
                          </p>
                          <div
                            className={`text-slate-500 cursor-pointer hover:text-yellow-500`}
                            onClick={handleCopyClick}
                          >
                            <MdContentCopy />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex w-full justify-between mt-3 mb-2">
                    <div className="flex flex-col w-[48%] font-roboto">
                      <label className="" htmlFor="restaurantName">
                        Business Name
                      </label>
                      {isEditable ? (
                        <input
                          className="rounded-md mt-1 my-1.5 px-2 h-10 w-full text-[.92rem] text-slate-500 border-2 border-gray-300"
                          type="text"
                          id="restaurantName"
                          name="restaurantName"
                          value={formData?.restaurantName}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                          <p className="flex items-center my-1.5 text-slate-500 font-roboto">
                            {data?.restaurantName}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-[48%] font-roboto">
                      <label className="" htmlFor="location">
                        Location
                      </label>
                      {isEditable ? (
                        <input
                          className="rounded-md mt-1 my-1.5 px-2 h-10 w-full text-[.92rem] text-slate-500 border-2 border-gray-300"
                          type="text"
                          id="location"
                          name="location"
                          value={formData?.location}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                          <p className="flex items-center my-1.5 text-slate-500 font-roboto">
                            {data?.location}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex w-full justify-between mt-3 mb-2">
                    <div className="flex flex-col w-[48%] font-roboto">
                      <label className=" font-roboto">Manager Name</label>
                      {isEditable ? (
                        <input
                          className="rounded-md mt-1 my-1.5 px-2 h-10 w-full text-[.92rem] text-slate-500 border-2 border-gray-300"
                          type="text"
                          id="managerName"
                          name="managerName"
                          value={formData?.managerName}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                          <p className="flex items-center my-1.5 text-slate-500 font-roboto">
                            {data?.managerName}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-[48%] font-roboto">
                      <label>Manager Contact</label>
                      {isEditable ? (
                        <input
                          className="rounded-md mt-1 my-1.5 px-2 h-10 w-full text-[.92rem] text-slate-500 border-2 border-gray-300"
                          type="text"
                          id="managerContact"
                          name="managerContact"
                          value={formData?.managerContact}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                          <p className="flex items-center my-1.5 text-slate-500 font-roboto">
                            {data?.managerContact}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex w-full justify-between mt-3 mb-2">
                    <div className="flex flex-col w-[48%] font-roboto">
                      <label>Customer Contact</label>
                      {isEditable ? (
                        <input
                          className="rounded-md mt-1 my-1.5 px-2 h-10 w-full text-[.92rem] text-slate-500 border-2 border-gray-300"
                          type="text"
                          id="customerContact"
                          name="customerContact"
                          value={formData?.customerContact}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                          <p className="flex items-center my-1.5 text-slate-500 font-roboto">
                            {data?.customerContact}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-[48%] font-roboto">
                      <label>Email</label>
                      {isEditable ? (
                        <input
                          className="rounded-md mt-1 my-1.5 px-2 h-10 w-full text-[.92rem] text-slate-500 border-2 border-gray-300"
                          type="text"
                          id="authorizedMail"
                          name="authorizedMail"
                          value={formData?.authorizedMail}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                          <p className="flex items-center my-1.5 text-slate-500 font-roboto">
                            {data?.authorizedMail}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </form>
              {/* <div className='w-full h-fit bg-white p-5 mt-4 rounded-md text-[1.1rem] font-semibold font-roboto'>
                                <h1 className='text-[1.1rem] font-bold mt-2 mb-3'>Cuisine details</h1>
                                <div className='flex w-full justify-between mt-3 mb-2'>
                                    <div className='flex flex-col w-[48%]'>
                                        <label className='text-[1.1rem] font-bold'>Category</label>
                                        {isEditable ? (
                                            <div
                                                className='rounded-md mt-1 font-roboto w-full border-2 border-gray-300 text-[.92rem] text-[#CA8A04]'>
                                                <Select options={categoryOptions} isMulti
                                                    name="selectedCategory"
                                                    className="basic-multi-select"
                                                    classNamePrefix="select"
                                                    value={selectedCategory}
                                                    onChange={handleCategoryChange}
                                                >
                                                </Select>
                                            </div>
                                        ) : (
                                            <div className='px-2  rounded-md h-12 mt-1 text-[.92rem] border-2 flex gap-2' name="category" >
                                                {data?.selectedCategory.map((category, index) => (
                                                    <div key={index} className='bg-[#FEFCE8] rounded-3xl'>
                                                        <p className='text-center text-[#CA8A04] px-4 py-2 font-roboto'>{category}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className='flex flex-col w-[48%]'>
                                        <label className='text-[1.1rem] font-bold font-roboto'>Cuisines</label>
                                        {isEditable ? (
                                            <div
                                                className='rounded-md mt-1 font-roboto w-full border-2 border-gray-300 text-[.92rem] text-[#CA8A04]'>
                                                <Select options={cuisineOptions} isMulti
                                                    name="selectedCuisine"
                                                    className="basic-multi-select bg-[#FEFCE8] rounded-3xl"
                                                    classNamePrefix="select"
                                                    value={selectedCuisine}
                                                    onChange={handleCuisineChange}
                                                >
                                                </Select>
                                            </div>
                                        ) : (
                                            <div className='px-2 rounded-md h-12 mt-1 text-[.92rem] border-2 flex gap-2' name="Cuisines" >
                                                {data?.selectedCuisine.map((cuisine, index) => (
                                                    <div key={index} className='bg-[#FEFCE8] rounded-3xl'>
                                                        <p className='text-center text-[#CA8A04] px-4 py-2 font-roboto'>{cuisine}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div> */}
              <div className="w-full h-fit bg-white p-5 mt-4 rounded-md text-[1.1rem] font-semibold  font-roboto">
                <h1 className="text-[1.1rem] font-bold mt-2 mb-3">
                  Operational details
                </h1>
                <div>
                  <div className="flex w-full justify-between mt-3 mb-2">
                    <div className="flex flex-col w-[47%]">
                      <label>Opening Hours</label>
                      {isEditable ? (
                        <input
                          className="rounded-md mt-1 my-1.5 px-2 h-10 w-full text-[.92rem] text-slate-500 border-2 border-gray-300"
                          type="text"
                          id="openingHour"
                          name="openingHour"
                          value={formData?.openingHour}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                          <p className="flex items-center my-1.5 text-slate-500 font-roboto">
                            {data?.openingHour}
                          </p>
                        </div>
                      )}
                    </div>
                    <p className="text-slate-500 mt-8 ">To</p>
                    <div className="flex flex-col w-[47%]">
                      <label className="text-white">Closing</label>
                      {isEditable ? (
                        <input
                          className="rounded-md mt-1 my-1.5 px-2 h-10 w-full text-[.92rem] text-slate-500 border-2 border-gray-300"
                          type="text"
                          id="closingHour"
                          name="closingHour"
                          value={formData?.closingHour}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                          <p className="flex items-center my-1.5 text-slate-500 font-roboto">
                            {data?.closingHour}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex w-full justify-between mt-3 mb-2">
                    <div className="flex flex-col w-[47%] font-roboto">
                      <label>Off Day(Optional)</label>
                      {isEditable ? (
                        <input
                          className="rounded-md mt-1 my-1.5 px-2 h-10 w-full text-[.92rem] text-slate-500 border-2 border-gray-300"
                          type="text"
                          id="offDay"
                          name="offDay"
                          value={formData?.offDay}
                          onChange={(e) =>
                            setFormData({ ...formData, offDay: e.target.value })
                          }
                          disabled={offDayDisabled}
                        />
                      ) : (
                        <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                          <p className="flex items-center my-1.5 text-slate-500 font-roboto">
                            {data?.offDay}
                          </p>
                        </div>
                      )}
                      {isEditable ? (
                        <div className="flex items-center mt-1">
                          <input
                            type="checkbox"
                            id="disableOffDay"
                            checked={offDayDisabled}
                            onChange={(e) => {
                              setOffDayDisabled(e.target.checked);

                              if (e.target.checked) {
                                setFormData({
                                  ...formData,
                                  openAllDay: true,
                                  offDay: "",
                                });
                              } else {
                                setFormData({ ...formData, openAllDay: false });
                              }
                            }}
                            className={`w-5 h-5 rounded-md `}
                          />
                          <label
                            htmlFor="openAllDay"
                            className="font-roboto ml-3 block text-sm font-medium text-slate-950"
                          >
                            Store is open every day
                          </label>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="flex flex-col w-[47%] font-roboto">
                      <label>Average Cost for Two</label>
                      {isEditable ? (
                        <input
                          className="rounded-md mt-1 my-1.5 px-2 h-10 w-full text-[.92rem] text-slate-500 border-2 border-gray-300"
                          type="text"
                          id="averageCost"
                          name="averageCost"
                          value={formData?.averageCost}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 flex gap-2">
                          <p className=" text-black font-bold text-2xl">₹</p>
                          <p className="flex items-center my-1.5 text-slate-500">
                            {data.averageCost}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex w-full justify-between mt-3 mb-2">
                    <div className="flex flex-col w-[47%]">
                      <label>Capacity(Number of Seats)</label>
                      {isEditable ? (
                        <input
                          className="rounded-md mt-1 my-1.5 px-2 h-10 w-full text-[.92rem] text-slate-500 border-2 border-gray-300"
                          type="text"
                          id="capacity"
                          name="capacity"
                          value={formData?.capacity}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                          <p className="flex items-center my-1.5 text-slate-500 font-roboto">
                            {data?.capacity}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-[47%]">
                      <label className="">Number of Tables</label>
                      {isEditable ? (
                        <input
                          className="rounded-md mt-1 my-1.5 px-2 h-10 w-full text-[.92rem] text-slate-500 border-2 border-gray-300"
                          type="text"
                          id="numberOfTables"
                          name="numberOfTables"
                          value={formData?.numberOfTables}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                          <p className="flex items-center my-1.5 text-slate-500 font-roboto">
                            {data?.numberOfTables}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex w-full justify-between mt-3 mb-2">
                    <div className="flex flex-col w-[47%]">
                      <label>FSSAI License Number</label>
                      {isEditable ? (
                        <input
                          className="rounded-md mt-1 my-1.5 px-2 h-10 w-full text-[.92rem] text-slate-500 border-2 border-gray-300"
                          type="text"
                          id="FSSAInumber"
                          name="FSSAInumber"
                          value={formData?.FSSAInumber}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                          <p className="flex items-center my-1.5 text-slate-500 font-roboto">
                            {data?.FSSAInumber}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-[47%]">
                      <label className="">Sales Representative</label>
                      {isEditable ? (
                        <input
                          className="rounded-md mt-1 my-1.5 px-2 h-10 w-full text-[.92rem] text-slate-500 border-2 border-gray-300"
                          type="text"
                          id="salesRepresentative"
                          name="salesRepresentative"
                          value={formData?.salesRepresentative}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="px-2 rounded-md h-10 mt-1 text-[.92rem] border-2">
                          <p className="flex items-center my-1.5 text-slate-500 font-roboto">
                            {data?.salesRepresentative}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminMerchantProfile;
