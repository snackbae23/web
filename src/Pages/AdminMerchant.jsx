/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import AdminNav from '../Components/AdminNav'
import AdminLeftBar from '../Components/AdminLeftBar'
import { LiaFileDownloadSolid } from "react-icons/lia";
import { GrSearch } from "react-icons/gr";
import icon1 from '../assets/Group 1171277063.png';
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png';
import { FiUpload } from "react-icons/fi";
// import { RxCross2 } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Select from 'react-select';
import axios from "axios";
import { useToast } from "@chakra-ui/toast";
import { Link } from 'react-router-dom';

function AdminMerchant() {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedCuisine, setSelectedCuisine] = useState([]);
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No selected Files");
    const [image1, setImage1] = useState(null);
    const [fileName1, setFileName1] = useState("No selected File");
    const [policies, setPolicies] = useState({
        softwarePolicy: false,
        paymentPolicy: false,
        otherTerms: false
    });
    const [alldata, setallData] = useState();
    const [pic, setPic] = useState();
    const [logo, setLogo] = useState();
    const [formData, setFormData] = useState({
        restaurantName: '',
        managerName: '',
        managerContact: '',
        customerContact: '',
        authorizedMail: '',
        openingHour: '',
        closingHour: '',
        offDay: '',
        averageCost: '',
        openAllDay: false,
        location: '',
        capacity: '',
        numberOfTables: '',
        selectedCategory: selectedCategory,
        selectedCuisine: selectedCuisine,
        paymentMethods: [],
        FSSAInumber: '',
        salesRepresentative: '',
        latitude: 0,
        longitude: 0,
        pic: '',
        logo: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCategoryChange = (selectedOptions) => {
        setSelectedCategory(selectedOptions);
        console.log(selectedCategory);

        formData.selectedCategory = selectedCategory;
    }

    const handleCuisineChange = (selectedOptions) => {
        setSelectedCuisine(selectedOptions);
        console.log(selectedCuisine);

        formData.selectedCuisine = selectedCuisine;
    }

    const handleCheckboxChange = (event) => {
        const { name, value, checked } = event.target;

        if (checked) {
            setFormData({
                ...formData,
                paymentMethods: [...formData.paymentMethods, value]
            });
        } else {
            setFormData({
                ...formData,
                paymentMethods: formData.paymentMethods.filter(method => method !== value)
            });
        }
    };

    const handleConditionChange = (event) => {
        const { name, checked } = event.target;

        setPolicies({
            ...policies,
            [name]: checked
        });
    };

    // save for later handler
    function saveForLaterHandler() {

    }

    function getGeoLocation(callback) {
        if (navigator.geolocation) {
            console.log("inside navigator.geolocation");
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    console.log("latitude  : ", latitude);
                    console.log("longitude  : ", longitude);
                    setLatitude(latitude);
                    setLongitude(longitude);
                    formData.latitude = latitude;
                    formData.longitude = longitude;
                    callback(latitude, longitude);
                },
                (error) => {
                    console.error("Error getting geolocation:", error);
                }
            )
        }
    }

    useEffect(() => {
        setFormData(prevData => ({
            ...prevData,
            selectedCategory: selectedCategory,
            selectedCuisine: selectedCuisine
        }));
    }, [selectedCategory, selectedCuisine]);
    const toast = useToast();

    // resetForm
    function resetForm() {
        setFormData({
            restaurantName: '',
            managerName: '',
            managerContact: '',
            customerContact: '',
            authorizedMail: '',
            openingHour: '',
            closingHour: '',
            offDay: '',
            averageCost: '',
            openAllDay: false,
            location: '',
            capacity: '',
            numberOfTables: '',
            selectedCategory: selectedCategory,
            selectedCuisine: selectedCuisine,
            paymentMethods: [],
            FSSAInumber: '',
            salesRepresentative: '',
            pic: '',
            logo: '',
        })
    }

    //create merchant handler
    const createMerchantHandler = async (e) => {
        e.preventDefault();

        getGeoLocation((latitude, longitude) => {
            console.log("fetched geolocation");
            console.log("form data : ", formData);
            console.log("geolocation ", latitude, " ", longitude);
            console.log("pic : ", pic);
            formData.pic = pic;
            formData.logo = logo;
            console.log("logo : ", logo);
            formData.pic=pic;
            formData.logo=logo;
            // setallData({...formData, pic});

            // console.log("all data : ", alldata);

            // let data = JSON.stringify(alldata);

            let data = JSON.stringify(formData);

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://coral-app-mvtxg.ondigitalocean.app/api/postFormDetails',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    toast({
                        title: "Registration Successful",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                        position: "bottom",
                    });
                    setSelectedCategory([]);
                    setSelectedCuisine([]);
                    resetForm();
                    closeMerchantForm();
                })
                .catch((error) => {
                    console.log(error);
                    alert(error);
                });
        });
    }

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
                formData.pic = response?.data?.image_url;
                console.log(pic);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const postDetails1 = async (pics) => {
        const formData = new FormData();
        formData.append("someExpressFiles", pics);

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "https://coral-app-mvtxg.ondigitalocean.app/api/gallery",
            // headers: {
            //   ...data.getHeaders(),
            // },
            data: formData,
        };

        await axios
            .request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                console.log(response?.data?.image_url);
                setLogo(response?.data?.image_url);
                formData.logo = response?.data?.image_url;
                console.log(logo);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const categoryOptions = [
        { value: 'Rooftop', label: 'RoofTop' },
        { value: 'PetFriendly', label: 'Pet-friendly' },
        { value: 'Classic', label: 'Classic' },
    ];

    const cuisineOptions = [
        { value: 'Indian', label: 'Indian' },
        { value: 'Chinese', label: 'Chinese' },
        { value: 'Italian', label: 'Italian' },
    ];

    const resDataPending = [
        { id: '#123456', ResName: 'Reunion Cafe', contact: '9876543210', mail: 'SouptikDas@gmail.com', saleRep: 'Aneashwan Acharya' },
        { id: '#123456', ResName: 'Reunion Cafe', contact: '9876543210', mail: 'SouptikDas@gmail.com', saleRep: 'Aneashwan Acharya' },
        { id: '#123456', ResName: 'Reunion Cafe', contact: '9876543210', mail: 'SouptikDas@gmail.com', saleRep: 'Aneashwan Acharya' },
        { id: '#123456', ResName: 'Reunion Cafe', contact: '9876543210', mail: 'SouptikDas@gmail.com', saleRep: 'Aneashwan Acharya' }
    ];

    const formatDate = (dateString) => {
        const [day, month, year] = dateString.split('/');
        const date = new Date(year, month - 1, day);
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);

        const timeUnits = [
            { unit: 'month', seconds: 30 * 24 * 60 * 60 },
            { unit: 'week', seconds: 7 * 24 * 60 * 60 },
            { unit: 'day', seconds: 24 * 60 * 60 },
            { unit: 'hour', seconds: 60 * 60 },
            { unit: 'minute', seconds: 60 },
            { unit: 'second', seconds: 1 },
        ];

        for (const unit of timeUnits) {
            const diffInUnits = Math.floor(diffInSeconds / unit.seconds);
            if (diffInUnits >= 1) {
                return `${diffInUnits} ${unit.unit}${diffInUnits > 1 ? 's' : ''} ago`;
            }
        }

        return 'Just now';
    };

    // const [currentScreen, setCurrentScreen] = useState(1);

    // for all
    const [searchAll, setSearchAll] = useState('');
    const [searchAllData, setSearchAllData] = useState([]);
    function changeHandlerAll(e) {
        setSearchAll(e.target.value);
    }

    const submitHandlerAll = async (e) => {
        e.preventDefault();
        // if(searchAll)
        // {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://coral-app-mvtxg.ondigitalocean.app/api/search?search=${searchAll}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setSearchAllData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        // }
    }

    useEffect(() => {
        let config1 = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://coral-app-mvtxg.ondigitalocean.app/api/search?search=${searchAll}`,
            headers: {}
        };

        axios.request(config1)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setSearchAllData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        let config3 = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://coral-app-mvtxg.ondigitalocean.app/api/getPartnerData?search=${searchNew}`,
            headers: {}
        };

        axios.request(config3)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setSearchNewData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // for pending
    const [searchPending, setSearchPending] = useState('');
    function changeHandlerPending(e) {
        setSearchPending(e.target.value);
    }
    function submitHandlerPending() {

    }

    // for new enquiry
    const [searchNew, setSearchNew] = useState('');
    const [searchNewData, setSearchNewData] = useState([]);
    function changeHandlerNew(e) {
        setSearchNew(e.target.value);
    }
    const submitHandlerNew = async (e) => {
        e.preventDefault();
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://coral-app-mvtxg.ondigitalocean.app/api/getPartnerData?search=${searchNew}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setSearchNewData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function one() {
        document.getElementById('one').style.backgroundColor = "black";
        document.getElementById('two').style.backgroundColor = "white";
        document.getElementById('three').style.backgroundColor = "white";

        document.getElementById('one').style.color = "white";
        document.getElementById('two').style.color = "black";
        document.getElementById('three').style.color = "black";

        document.getElementById('all').style.display = "block";
        document.getElementById('pending').style.display = "none";
        document.getElementById('new').style.display = "none";
    }
    function two() {
        document.getElementById('one').style.backgroundColor = "white";
        document.getElementById('two').style.backgroundColor = "black";
        document.getElementById('three').style.backgroundColor = "white";

        document.getElementById('one').style.color = "black";
        document.getElementById('two').style.color = "white";
        document.getElementById('three').style.color = "black";

        document.getElementById('all').style.display = "none";
        document.getElementById('pending').style.display = "block";
        document.getElementById('new').style.display = "none";
    }
    function three() {
        document.getElementById('one').style.backgroundColor = "white";
        document.getElementById('two').style.backgroundColor = "white";
        document.getElementById('three').style.backgroundColor = "black";

        document.getElementById('one').style.color = "black";
        document.getElementById('two').style.color = "black";
        document.getElementById('three').style.color = "white";

        document.getElementById('all').style.display = "none";
        document.getElementById('pending').style.display = "none";
        document.getElementById('new').style.display = "block";
    }

    function openMerchantForm() {
        document.getElementById('background').style.filter = "blur(2Px)";
        document.getElementById('popup').style.display = "block";
    }

    function closeMerchantForm() {
        document.getElementById('background').style.filter = "blur(0Px)";
        document.getElementById('popup').style.display = "none";
    }

    return (
        <div className='w-full'>
            {/* header */}
            <AdminNav />

            {/* popup */}
            <div id='popup' className='w-full relative hidden z-20 '>
                <div className='w-[75%] mx-auto absolute top-24 left-[12.5%] bg-white p-6 rounded-md shadow-xl shadow-gray-400' >

                    {/* heading */}
                    <div className='flex justify-between px-3'>
                        <div></div>
                        <div className='text-3xl font-roboto font-bold'>Merchant Form</div>
                        <div className='opacity-55 cursor-pointer' onClick={closeMerchantForm}><RxCross2 size={29} /></div>
                    </div>
                    <div className='p-8 mt-3'>

                        {/* form first section */}

                        {/* head - contact */}
                        <div className='flex items-center gap-3'>
                            <img src={icon1} width={28}></img>
                            <div className='font-bold'>Contact Details</div>
                        </div>
                        {/* main */}
                        <form className='mt-10'>
                            <div className='flex flex-col gap-8'>
                                <div className='flex flex-row gap-5'>
                                    <div className='w-[47%]'>
                                        <label className="flex ml-4 mt-2 font-bold text-sm" htmlFor="restaurantName">Restaurant Name:</label>
                                        <input className="rounded-lg shadow-sm ml-4 mt-1 px-4 py-3 w-full border border-gray-300"
                                            type="text"
                                            id="restaurantName"
                                            name="restaurantName"
                                            placeholder='Important'
                                            value={formData.restaurantName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='w-[47%] '>
                                        <label className="flex ml-4 mt-2 font-bold text-sm" htmlFor="managerName">Manager Name:</label>
                                        <input className="rounded-lg shadow-sm ml-4 mt-1 px-4 py-3 w-full border border-gray-300"
                                            type="text"
                                            id="managerName"
                                            name="managerName"
                                            placeholder='Important'
                                            value={formData.managerName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-row gap-5'>
                                    <div className='w-[47%]'>
                                        <label className="flex ml-4 mt-2 font-bold text-sm" htmlFor="managerContact">Manager Contact:</label>
                                        <input className="rounded-lg shadow-sm ml-4 mt-1 px-4 py-3 w-full border border-gray-300"
                                            type="text"
                                            id="managerContact"
                                            name="managerContact"
                                            placeholder='Important'
                                            value={formData.managerContact}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='w-[47%] '>
                                        <label className="flex ml-4 mt-2 font-bold text-sm" htmlFor="customerContact">Customer Contact Number:</label>
                                        <input className="rounded-lg shadow-sm ml-4 mt-1 px-4 py-3 w-full border border-gray-300"
                                            type="text"
                                            id="customerContact"
                                            name="customerContact"
                                            placeholder='Important'
                                            value={formData.customerContact}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='w-[47%]'>
                                    <label className="flex ml-4 mt-2 font-bold text-sm" htmlFor="authorizedMail">Authorized Mail:</label>
                                    <input className="rounded-lg shadow-sm ml-4 mt-1 px-4 py-3 w-full border border-gray-300"
                                        type="email"
                                        id="authorizedMail"
                                        name="authorizedMail"
                                        placeholder='Important'
                                        value={formData.authorizedMail}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* second section */}
                            <div className='flex items-center gap-3 my-10'>
                                <img src={icon2} width={28}></img>
                                <div className='font-bold'>Operational Details</div>
                            </div>

                            <div className='flex flex-col gap-8'>
                                <div className='flex gap-1 items-end'>
                                    <div className='w-[46%]'>
                                        <label className="flex ml-4 mt-2 font-bold text-sm" htmlFor="openingHour">Opening Hours:</label>
                                        <input className="rounded-lg shadow-sm ml-4 mt-1 px-4 py-3 w-full border border-gray-300"
                                            type="text"
                                            id="openingHour"
                                            name="openingHour"
                                            placeholder='Important'
                                            value={formData.openingHour}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='pl-7 opacity-55 pb-3'>To</div>
                                    <div className='w-[46%]'>
                                        <input className="rounded-lg shadow-sm ml-4 mt-1 px-4 py-3 w-full border border-gray-300"
                                            type="text"
                                            id="closingHour"
                                            name="closingHour"
                                            placeholder='Important'
                                            value={formData.closingHour}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex flex-row gap-14'>
                                        <div className='w-[46%]'>
                                            <label className="flex ml-4 mt-2 font-bold text-sm" htmlFor="offDay">Off Day(Optional):</label>
                                            <input className="rounded-lg shadow-sm ml-4 mt-1 px-4 py-3 w-full border border-gray-300"
                                                type="text"
                                                id="offDay"
                                                name="offDay"
                                                placeholder='Optional'
                                                value={formData.offDay}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='w-[46%] '>
                                            <label className="flex ml-4 mt-2 font-bold text-sm" htmlFor="averageCost">Average Cost for Two:</label>
                                            <input className="rounded-lg shadow-sm ml-4 mt-1 px-4 py-3 w-full border border-gray-300"
                                                type="text"
                                                id="averageCost"
                                                name="averageCost"
                                                placeholder='Important'
                                                value={formData.averageCost}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='flex items-center mt-1'>
                                        <input className="rounded-lg shadow-sm ml-4  px-4 py-3 w-fit border border-gray-300"
                                            type='checkbox'
                                            name='openAllDay'
                                            id='openAllDay'
                                            placeholder='Store is open every day'
                                            value={formData.openAllDay}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor='openAllDay' className='pl-2 text-sm'>Store is open every day</label>
                                    </div>
                                </div>
                                <div className='w-[46%]'>
                                    <label className="flex ml-4 mt-2 font-bold text-sm" htmlFor="location">Location/Address/Links :</label>
                                    <input className="rounded-lg shadow-sm ml-4 mt-1 px-4 py-3 w-full border border-gray-300"
                                        type="text"
                                        id="location"
                                        name="location"
                                        placeholder='Important'
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='flex flex-row gap-14'>
                                    <div className='w-[46%]'>
                                        <label className="flex ml-4 mt-2 font-bold text-sm" htmlFor="capacity">Capacity(Number of Seats) :</label>
                                        <input className="rounded-lg shadow-sm ml-4 mt-1 px-4 py-3 w-full border border-gray-300"
                                            type="text"
                                            id="capacity"
                                            name="capacity"
                                            placeholder='Important'
                                            value={formData.capacity}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='w-[46%] '>
                                        <label className="flex ml-4 mt-2 font-bold text-sm" htmlFor="numberOfTables">Number of Tables:</label>
                                        <input className="rounded-lg shadow-sm ml-4 mt-1 px-4 py-3 w-full border border-gray-300"
                                            type="text"
                                            id="numberOfTables"
                                            name="numberOfTables"
                                            placeholder='Important'
                                            value={formData.numberOfTables}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* third section */}
                            <div className='flex items-center gap-3 my-10'>
                                <img src={icon3} width={28}></img>
                                <div className='font-bold'>Additional Details</div>
                            </div>

                            <div className='flex flex-col gap-8'>
                                <div className='flex flex-row gap-14'>
                                    <div className='w-[46%]'>
                                        <label className='flex ml-4 mt-2 font-bold text-sm' htmlFor="selectedCategory">Category:</label>
                                        <div className='rounded-lg shadow-sm ml-4 mt-1 w-full border border-gray-300'>
                                            <Select options={categoryOptions} isMulti
                                                name="selectedCategory"
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                                value={selectedCategory}
                                                onChange={handleCategoryChange}
                                            >
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='w-[46%]'>
                                        <label className='flex ml-4 mt-2 font-bold text-sm' htmlFor="cuisineServed">Cuisines Served:</label>
                                        <div className='rounded-lg shadow-sm ml-4 mt-1 w-full border border-gray-300'>
                                            <Select options={cuisineOptions} isMulti
                                                name="cuisineServed"
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                                value={selectedCuisine}
                                                onChange={handleCuisineChange}
                                            >
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-row gap-20 items-end'>
                                    {/* payment and fssi */}
                                    <div className='flex flex-col gap-8 w-[46%]'>
                                        {/* payment */}
                                        <div>
                                            <label className="flex ml-4 mt-2 font-bold text-sm" htmlFor='paymentMethods'>
                                                Preferred Payment Methods:
                                            </label>
                                            <div className='ml-5 flex flex-row gap-4 mt-1'>
                                                <div className='flex flex-row gap-1 items-center'>
                                                    <input type="checkbox" className='' id="credit-cards" name="paymentMethods" value="Credit Cards" onChange={handleCheckboxChange} checked={formData.paymentMethods.includes("Credit Cards")} />
                                                    <label htmlFor="credit-cards" className=''>Credit Cards</label>
                                                </div>
                                                <div className='flex flex-row gap-1 items-center'>
                                                    <input type="checkbox" id="digital-wallets" name="paymentMethods" value="Digital Wallets" onChange={handleCheckboxChange} checked={formData.paymentMethods.includes("Digital Wallets")} />
                                                    <label htmlFor="digital-wallets">Digital Wallets</label>
                                                </div>
                                                <div className='flex flex-row gap-1 items-center'>
                                                    <input type="checkbox" id="cash" name="paymentMethods" value="Cash" onChange={handleCheckboxChange} checked={formData.paymentMethods.includes("Cash")} />
                                                    <label htmlFor="cash">Cash</label>
                                                </div>
                                                <div className='flex flex-row gap-1 items-center'>
                                                    <input type="checkbox" id="snackpay" name="paymentMethods" value="SnackPay" onChange={handleCheckboxChange} checked={formData.paymentMethods.includes("SnackPay")} />
                                                    <label htmlFor="snackpay">SnackPay</label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* fssai number*/}
                                        <div className='w-full '>
                                            <label className="flex ml-4 mt-2 font-bold text-sm" htmlFor="FSSAInumber">FSSAI License Number:</label>
                                            <input className="rounded-lg shadow-sm ml-4 mt-1 px-4 py-3 w-full border border-gray-300"
                                                type="text"
                                                id="FSSAInumber"
                                                name="FSSAInumber"
                                                placeholder='Important'
                                                value={formData.FSSAInumber}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    {/* upload file and logo*/}
                                    <div className='flex flex-row gap-4'>
                                        {/* file */}
                                        <div>
                                            <div className='text-sm font-bold'>Upload FSSAI License : </div>
                                            <div className='flex flex-row justify-center items-center w-64 h-32 border-2 border-dashed  border-yellow-600 rounded-lg bg-[#FEFCE8]' onClick={() => document.querySelector(".input-field").click()}>
                                                <input type='file' accept='image/*' className='input-field'
                                                    onChange={({ target: { files } }) => {
                                                        files[0] && setFileName(files[0].name)
                                                        if (files)
                                                            setImage(URL.createObjectURL(files[0]))
                                                        postDetails(files[0])
                                                    }}
                                                    hidden></input>
                                                {image ?
                                                    <div>Uploaded {fileName}</div> :
                                                    <div className='flex flex-col justify-center items-center'>
                                                        <div className='bg-yellow-500 w-12 h-12 rounded-full flex justify-center items-center'>
                                                            <FiUpload color='white'/>
                                                        </div>
                                                        <div className='font-bold text-sm'>Upload File</div>
                                                        <div className='text-sm opacity-50'>Drag and drop files here</div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        {/* logo */}
                                        <div>
                                            <div className='text-sm font-bold'>Upload Logo : </div>
                                            <div className='flex flex-row justify-center items-center w-64 h-32 border-2 border-dashed border-yellow-600 rounded-lg bg-[#FEFCE8]' onClick={() => document.querySelector(".input-field1").click()}>
                                                <input type='file' accept='image/*' className='input-field1'
                                                    onChange={({ target: { files } }) => {
                                                        files[0] && setFileName1(files[0].name)
                                                        if (files)
                                                            setImage1(URL.createObjectURL(files[0]))
                                                        postDetails1(files[0])
                                                    }}
                                                    hidden></input>
                                                {image1 ?
                                                    <div>Uploaded {fileName1}</div> :
                                                    <div className='flex flex-col justify-center items-center'>
                                                        <div className='bg-yellow-500 w-12 h-12 rounded-full flex justify-center items-center'>
                                                            <FiUpload color='white'/>
                                                        </div>
                                                        <div className='font-bold text-sm'>Upload File</div>
                                                        <div className='text-sm opacity-50'>Drag and drop files here</div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-row gap-14 items-center'>
                                    {/* tnc */}
                                    <div className='w-[46%]'>
                                        <label className="flex ml-4 mt-1 ">
                                            <input
                                                type="checkbox"
                                                name="softwarePolicy"
                                                checked={policies.softwarePolicy}
                                                onChange={handleConditionChange}
                                                className='mr-2'
                                            />
                                            Agree to our Software Policy
                                        </label>

                                        <label className="flex ml-4 mt-1 ">
                                            <input
                                                type="checkbox"
                                                name="paymentPolicy"
                                                checked={policies.paymentPolicy}
                                                onChange={handleConditionChange}
                                                className='mr-2'
                                            />
                                            Agree to our Payment Policy
                                        </label>

                                        <label className="flex ml-4 mt-1 ">
                                            <input
                                                type="checkbox"
                                                name="otherTerms"
                                                checked={policies.otherTerms}
                                                onChange={handleConditionChange}
                                                className='mr-2'
                                            />
                                            Agree to other terms & conditions
                                        </label>
                                    </div>
                                    {/* sales representative */}
                                    <div className='w-[46%]'>
                                        <label className="flex ml-4 mt-2 font-bold text-sm" htmlFor="salesRepresentative">Sales Representative:</label>
                                        <input className="rounded-lg shadow-sm ml-4 mt-1 px-4 py-3 w-full border border-gray-300"
                                            type="text"
                                            id="salesRepresentative"
                                            name="salesRepresentative"
                                            placeholder='Important'
                                            value={formData.salesRepresentative}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* buttons */}
                            <div className='w-full flex justify-center mt-16'>
                                <div className='flex gap-4'>
                                    <button onClick={createMerchantHandler} type='submit' className='cursor-pointer px-2 font-roboto font-medium text-sm py-2 bg-yellow-500 text-white rounded-lg '>Create Merchants</button>
                                    <button onClick={saveForLaterHandler} className='cursor-pointer px-3 font-roboto font-medium text-sm py-2 border border-yellow-500 text-yellow-500 rounded-lg'>Save for later</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='flex pt-20' id='background'>
                {/* left bar */}
                <div className='w-[20%]'>
                    <AdminLeftBar />
                </div>

                {/* main section */}
                <div className='w-[80%] min-h-[100vh] bg-slate-200 p-8'>

                    {/* performance section */}
                    <div className='w-[95%] mx-auto h-fit '>
                        <div className='text-xl font-bold font-roboto'>
                            Performance
                        </div>
                        <div className='mt-4 flex justify-between'>
                            <div className='bg-white w-72 h-28 mt-2 rounded-2xl flex flex-col justify-evenly'>
                                <div className='flex justify-between p-2'>
                                    <p className='text-slate-950 text-base font-medium'>
                                        Live Merchants
                                    </p>
                                    <div className='px-2 py-1 rounded-md text-sm text-green-700 bg-[#bff0c2]'>
                                        Live
                                    </div>
                                </div>
                                <div className='flex justify-between p-2'>
                                    <p className='font-roboto text-2xl font-semibold'>
                                        243090
                                    </p>
                                </div>
                            </div>
                            <div className='bg-white w-72 h-28 mt-2 rounded-2xl flex flex-col justify-evenly'>
                                <div className='flex justify-between p-2 pt-2'>
                                    <p className='text-slate-950 w-[60%] text-base font-medium'>
                                        New Merchants Onboarded
                                    </p>
                                    <p className='text-slate-500 font-normal text-sm'>
                                        Last 30 days
                                    </p>
                                </div>
                                <div className='flex justify-between p-2'>
                                    <p className='font-roboto text-2xl font-semibold'>
                                        120
                                    </p>
                                </div>
                            </div>
                            <div className='bg-white w-72 h-28 mt-2 rounded-2xl flex flex-col justify-evenly'>
                                <div className='flex justify-between p-2'>
                                    <p className='text-slate-950 text-base font-medium'>
                                        Number of enquiry
                                    </p>
                                    <p className='text-slate-500 font-normal text-sm'>
                                        Last 30 days
                                    </p>
                                </div>
                                <div className='flex justify-between p-2'>
                                    <p className='font-roboto text-2xl font-semibold'>
                                        21
                                    </p>

                                </div>
                            </div>
                            <div className='bg-white w-72 h-28 mt-2 rounded-2xl flex flex-col justify-evenly'>
                                <div className='flex justify-between p-2'>
                                    <p className='text-slate-950 text-base font-medium'>
                                        Monthly Growth Rate
                                    </p>
                                </div>
                                <div className='flex justify-between p-2'>
                                    <p className='font-roboto text-2xl font-semibold'>
                                        24%
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* tabs */}
                    <div className='my-12 flex w-[95%] mx-auto justify-between'>
                        <div className='flex gap-2'>
                            <div className='bg-black text-white px-4 py-2 rounded-full text-sm font-roboto flex items-center justify-center cursor-pointer' onClick={one} id='one'>All Merchants</div>
                            <div className='bg-white px-4 py-2 rounded-full text-sm font-roboto flex items-center justify-center cursor-pointer' onClick={two} id='two'>Pending forms</div>
                            <div className='bg-white px-4 py-2 rounded-full text-sm font-roboto flex items-center justify-center cursor-pointer' onClick={three} id='three'>New Enquiry</div>
                        </div>
                        <div className='px-4 py-2 bg-yellow-400 rounded-lg'>
                            <div className='flex gap-1 text-white justify-center items-center cursor-pointer' onClick={openMerchantForm}>
                                <div className=''><LiaFileDownloadSolid size={20} /></div>
                                <div className='font-bold'>Add Merchant</div>
                            </div>
                        </div>
                    </div>

                    {/* one */}
                    <div className='bg-white w-[95%] mx-auto rounded-lg p-3' id='all'>

                        {/* search */}
                        <div className='my-4 ml-4'>
                            <form className='flex gap-1' onSubmit={submitHandlerAll}>
                                <input type='text' placeholder='Search by ID,restaurant name' value={searchAll} onChange={changeHandlerAll} className='w-[50%] p-3 bg-slate-200 rounded-lg font-bold'></input>
                                <button type='submit'><GrSearch size={25} /></button>
                            </form>
                        </div>

                        {/* table */}
                        <table className='w-full'>
                            <thead className="min-w-full">
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right "
                                    >
                                        <span>Merchant Name</span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-12 py-3.5 text-sm font-bold text-left rtl:text-right"
                                    >
                                        Location
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right"
                                    >
                                        Authorised mail
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right "
                                    >
                                        <span>Sales Representative</span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right "
                                    >
                                        <span>Status</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {searchAllData?.map((restaurant) => {
                                    return (
                                        <tr key={restaurant._id}>

                                            <td className="py-4 px-4 whitespace-nowrap">
                                                <Link to={`/admin/merchantProfile/${restaurant.resturantId}`}>
                                                    <div className="text-sm">
                                                        {restaurant.restaurantName}
                                                    </div>
                                                    <div className='text-sm'>
                                                        {restaurant.resturantId}
                                                    </div>
                                                </Link>
                                            </td>
                                            <td className="px-12 py-4 whitespace-nowrap">
                                                <div className="text-sm">
                                                    {restaurant.location}
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm">
                                                {restaurant.authorizedMail}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm">
                                                {restaurant.salesRepresentative}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm">
                                                {/* {restaurant.status == 'true' && <div className='py-1 px-2 font-bold w-fit h-fit bg-green-100 text-green-500 rounded-md'>Live</div>}
                                                {restaurant.status == 'false' && <div className='py-1 px-2 font-bold w-fit h-fit bg-red-100 text-red-500 rounded-md'>Close</div>} */}
                                            </td>
                                            {/* </Link> */}
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>

                    {/* two */}
                    <div className='bg-white w-[95%] mx-auto border rounded-lg p-3 hidden' id='pending'>
                        {/* search */}
                        <div className='my-4 ml-4'>
                            <form className='flex gap-1' onSubmit={submitHandlerPending}>
                                <input type='text' placeholder='Search by ID,restaurant name' value={searchPending} onChange={changeHandlerPending} className='w-[50%] p-3 bg-slate-200 rounded-lg font-bold'></input>
                                <button type='submit'><GrSearch size={25} /></button>
                            </form>
                        </div>

                        {/* table */}
                        <table className='w-full'>
                            <thead className="min-w-full">
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right "
                                    >
                                        <span>Merchant Name</span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-12 py-3.5 text-sm font-bold text-left rtl:text-right"
                                    >
                                        Sales Representative
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right"
                                    >
                                        Contact Number
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right "
                                    >
                                        <span>Mail</span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right "
                                    >
                                        <span>Action</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {resDataPending?.map((restaurant) => {
                                    return (
                                        <tr key={restaurant.id}>
                                            <td className="py-4 px-4 whitespace-nowrap">
                                                <div className="text-sm">
                                                    {restaurant.ResName}
                                                </div>
                                            </td>
                                            <td className="px-12 py-4 whitespace-nowrap">
                                                <div className="text-sm">
                                                    {restaurant.saleRep}
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm">
                                                {restaurant.contact}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm">
                                                {restaurant.mail}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm cursor-pointer">
                                                <div className='bg-yellow-100 text-yellow-500 px-2 py-1 text-sm w-fit font-bold rounded-lg'>Edit Form</div>
                                            </td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>

                    {/* three */}
                    <div className='bg-white w-[95%] mx-auto rounded-lg p-3 hidden' id='new'>
                        {/* search */}
                        <div className='my-4 ml-4'>
                            <form className='flex gap-1' onSubmit={submitHandlerNew}>
                                <input type='text' placeholder='Search by restaurant name' value={searchNew} onChange={changeHandlerNew} className='w-[50%] p-3 bg-slate-200 rounded-lg font-bold'></input>
                                <button type='submit'><GrSearch size={25} /></button>
                            </form>
                        </div>

                        {/* table */}
                        <table className='w-full'>
                            <thead className="min-w-full">
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right "
                                    >
                                        <span>Merchant Name</span>
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-12 py-3.5 text-sm font-bold text-left rtl:text-right"
                                    >
                                        Contact Number
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right"
                                    >
                                        Email ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 px-4 text-sm font-bold text-left rtl:text-right "
                                    >
                                        <span>Time</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {searchNewData?.map((restaurant) => {
                                    return (
                                        <tr key={restaurant.id}>
                                            <td className="py-4 px-4 whitespace-nowrap">
                                                <div className="text-sm">
                                                    {restaurant.rname}
                                                </div>
                                            </td>
                                            <td className="px-12 py-4 whitespace-nowrap">
                                                <div className="text-sm">
                                                    {restaurant.phone}
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm">
                                                {restaurant.email}
                                            </td>
                                            <td className="px-4 py-4 whitespace-nowrap text-sm cursor-pointer">
                                                <div className='bg-yellow-100 text-yellow-500 px-2 py-1 text-sm w-fit font-bold rounded-lg'>{formatDate(restaurant.createdAt)}</div>
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
        </div>
    )
}

export default AdminMerchant
