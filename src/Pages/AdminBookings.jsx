import React, { useState } from 'react';
import AdminLeftBar from '../Components/AdminLeftBar';
import AdminNav from '../Components/AdminNav';
import searchIcon from "../assets/Search.png"
import dp from "../assets/Ellipse48.png"
import editIcon from "../assets/Rectangle148.png"
import crossIcon from "../assets/cross.png"
import deleteIcon from "../assets/delete.png"
import left from "../assets/left.png"
import right from "../assets/right.png"


const bookings = [
    {
        id: "#ID238976",
        customerName: "Souptik Das",
        phoneNumber: "9123456789",
        Time: "7:30PM",
        Date: "23 Dec, 2024",
        merchantName: "ReUnion Cafe",
        PAX: "4 PAX",
        status: "Pending"
    },
    {
        id: "#ID238976",
        customerName: "Souptik Das feyguihj",
        phoneNumber: "9123456789",
        Time: "7:30PM",
        Date: "23 Dec, 2024",
        merchantName: "ReUnion Cafe",
        PAX: "4 PAX",
        status: "Pending"
    },
    {
        id: "#ID238976",
        customerName: "Souptik Das",
        phoneNumber: "9123456789",
        Time: "7:30PM",
        Date: "23 Dec, 2024",
        merchantName: "ReUnion Cafe",
        PAX: "4 PAX",
        status: "Pending"
    },
    {
        id: "#ID238976",
        customerName: "Souptik Das",
        phoneNumber: "9123456789",
        Time: "7:30PM",
        Date: "23 Dec, 2024",
        merchantName: "ReUnion Cafe",
        PAX: "4 PAX",
        status: "Pending"
    },
    {
        id: "#ID238976",
        customerName: "Souptik Das",
        phoneNumber: "9123456789",
        Time: "7:30PM",
        Date: "23 Dec, 2024",
        merchantName: "ReUnion Cafe",
        PAX: "4 PAX",
        status: "Pending"
    },
    {
        id: "#ID238976",
        customerName: "Souptik Das",
        phoneNumber: "9123456789",
        Time: "7:30PM",
        Date: "23 Dec, 2024",
        merchantName: "ReUnion Cafe",
        PAX: "4 PAX",
        status: "Pending"
    },
    {
        id: "#ID238976",
        customerName: "Souptik Das werstrdyufgukhiwedrtfyguhierdtfygu",
        phoneNumber: "9123456789",
        Time: "7:30PM",
        Date: "23 Dec, 2024",
        merchantName: "ReUnion Cafe wdefrgtyjuu",
        PAX: "4 PAX",
        status: "Complete"
    },
    {
        id: "#ID238976",
        customerName: "Souptik Das",
        phoneNumber: "9123456789",
        Time: "7:30PM",
        Date: "23 Dec, 2024",
        merchantName: "ReUnion Cafe",
        PAX: "4 PAX",
        status: "Pending"
    },
    {
        id: "#ID238976",
        customerName: "Souptik Das",
        phoneNumber: "9123456789",
        Time: "7:30PM",
        Date: "23 Dec, 2024",
        merchantName: "ReUnion Cafe",
        PAX: "4 PAX",
        status: "No Show"
    },
    {
        id: "#ID238976",
        customerName: "Souptik Das",
        phoneNumber: "9123456789",
        Time: "7:30PM",
        Date: "23 Dec, 2024",
        merchantName: "ReUnion Cafe",
        PAX: "4 PAX",
        status: "Pending"
    },
    {
        id: "#ID238976",
        customerName: "Souptik Das",
        phoneNumber: "9123456789",
        Time: "7:30PM",
        Date: "23 Dec, 2024",
        merchantName: "ReUnion Cafe",
        PAX: "4 PAX",
        status: "Pending"
    },
    {
        id: "#ID12345",
        customerName: "Souptik Das",
        phoneNumber: "9123456789",
        Time: "7:30PM",
        Date: "23 Dec, 2024",
        merchantName: "ReUniCo Cafe",
        PAX: "4 PAX",
        status: "Pending"
    },
    {
        id: "#ID238976",
        customerName: "Souptik Das werstrdyufgukhiwedrtfyguhierdtfygu",
        phoneNumber: "9123456789",
        Time: "7:30PM",
        Date: "23 Dec, 2024",
        merchantName: "ReUnion Cafe wdefrgtyjuu",
        PAX: "4 PAX",
        status: "Complete"
    },
    {
        id: "#ID238976",
        customerName: "Souptik Das",
        phoneNumber: "9123456789",
        Time: "7:30PM",
        Date: "23 Dec, 2024",
        merchantName: "ReUnion Cafe",
        PAX: "4 PAX",
        status: "Pending"
    },
    {
        id: "#ID238976",
        customerName: "Souptik Das",
        phoneNumber: "9123456789",
        Time: "7:30PM",
        Date: "23 Dec, 2024",
        merchantName: "ReUnion Cafe",
        PAX: "4 PAX",
        status: "No Show"
    },
];

const book = {
    customerName: "John",
    customerContact: "34567435678",
    pax: "4",
    restaurantName: "ewrtdfjg",
    date: "23 Dec, 2024",
    time: "9 AM"

}

const book2 = [
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe xikouhji",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23456",
        merchantName: "ReUnico Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
    {
        id: "#ID23454",
        merchantName: "ReUnion Cafe",
        location: "SaltLake",
        category: [
            "RoofTop",
            "Pet-Friendly",
            "cafe"
        ],
        Recommendations: "6700+",
        pax: "100",
        totalBookings: "100",
    },
]

function AdminBookings() {
    const [activeButton, setActiveButton] = useState('allBookings');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [activeButton2, setActiveButton2] = useState('weekly');
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchInput, setSearchInput] = useState('');
    const [searchInput2, setSearchInput2] = useState('');
    const [entriesPerPage2, setEntriesPerPage2] = useState(10);
    const [currentPage2, setCurrentPage2] = useState(1);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const handleButtonClick2 = (button) => {
        setActiveButton2(button);
    };

    function openPopup() {
        setIsPopupOpen(true);
    }

    function closePopup() {
        setIsPopupOpen(false);
        resetForm();
    }

    const [formData, setFormData] = useState({ book });

    function resetForm() {
        setFormData({ book });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        resetForm();
        closePopup();
        console.log(formData);
    }

    const handleEntriesPerPageChange = (e) => {
        setEntriesPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleEntriesPerPageChange2 = (e) => {
        setEntriesPerPage2(Number(e.target.value));
        setCurrentPage2(1);
    };

    const handlePageChange2 = (pageNumber) => {
        setCurrentPage2(pageNumber);
    };

    const filteredBook2 = book2.filter((book) => {
        const searchValue = searchInput2.toLowerCase();
        return book.id.toLowerCase().includes(searchValue) || book.merchantName.toLowerCase().includes(searchValue);
    })

    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;

    const totalPages = Math.ceil(filteredBook2.length / entriesPerPage);

    const filteredBookings = bookings.filter((booking) => {
        const searchValue = searchInput.toLowerCase();
        return booking.id.toLowerCase().includes(searchValue) || booking.merchantName.toLowerCase().includes(searchValue);
    });


    const startIndex2 = (currentPage2 - 1) * entriesPerPage2;
    const endIndex2 = startIndex2 + entriesPerPage2;

    const totalPages2 = Math.ceil(filteredBookings.length / entriesPerPage2);




    return (
        <div className='w-full'>
            <div>
                <AdminNav />
            </div>
            <div className='flex pt-20'>
                <div className='w-[20%]'>
                    <AdminLeftBar />
                </div>
                <div className='flex flex-col w-[80%] bg-slate-200 h-fit'>
                    <div className='w-full bg-slate-200 flex justify-between'>
                        <div className='flex gap-2 text-slate-500 mt-3 ml-4'>
                            <button
                                className={`rounded-full px-4 py-1 h-10 w-32 ${activeButton === 'allBookings' ? 'bg-black text-white' : 'bg-white'}`}
                                onClick={() => handleButtonClick('allBookings')}
                            >
                                All Bookings
                            </button>
                            <button
                                className={`rounded-full px-4 py-1 h-10 ${activeButton === 'merchantAnalytics' ? 'bg-black text-white' : 'bg-white'}`}
                                onClick={() => handleButtonClick('merchantAnalytics')}
                            >
                                Merchant Analytics
                            </button>
                        </div>
                        <div
                            className='rounded-full px-4 py-1 mt-3 flex space-x-2'
                            style={{ display: activeButton === 'merchantAnalytics' ? 'block' : 'none' }}
                        >
                            <button
                                className={`rounded-[10px] px-4 py-1 w-24 h-10 ${activeButton2 === 'weekly' ? 'bg-black text-white' : 'bg-white'}`}
                                onClick={() => handleButtonClick2('weekly')}
                            >
                                Weekly
                            </button>
                            <button
                                className={`rounded-[10px] px-4 py-1 h-10 ${activeButton2 === 'monthly' ? 'bg-black text-white' : 'bg-white'}`}
                                onClick={() => handleButtonClick2('monthly')}
                            >
                                Monthly
                            </button>
                            <button
                                className={`rounded-[10px] px-4 py-1 h-10 ${activeButton2 === 'yearly' ? 'bg-black text-white' : 'bg-white'}`}
                                onClick={() => handleButtonClick2('yearly')}
                            >
                                Yearly
                            </button>
                            <input type='date' className='rounded-[10px] px-4 py-1 h-10 bg-white' name='date' />
                        </div>
                    </div>

                    <div
                        id='allBookingsContent'
                        style={{ display: activeButton === 'allBookings' ? 'block' : 'none' }}
                        className='w-full h-fit bg-white p-5 mt-4 rounded-md text-[1.1rem] font-semibold'
                    >
                        <div >
                            <input
                                className='px-2 bg-[#F1EFEF] rounded-md w-[50%] h-10 mt-1 text-[.92rem] border-2'
                                type="text"
                                name="name"
                                placeholder='Search by ID, restaurant name'
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
                            />
                        </div>
                        <hr className='my-2' />
                    
                        <div className='text-[#718096] flex w-full justify-between'>
                            <div className='flex justify-center text-center items-center'>Customer Name</div>
                            <div className='translate-x-4'>Phone Number</div>
                            <div className=''>Time/Date</div>
                            <div className=''>Merchant Name</div>
                            <div className=''>PAX</div>
                            <div className='mr-[10%] '>
                                Status
                            </div>
                        </div>
                        <hr className='my-3' />
                        <div>
                            {filteredBookings.slice(startIndex2, endIndex2).map((booking) => (
                                <div>
                                    <div key={booking._id} className='flex justify-between  text-[16px] text-[#111827]'>
                                        <div className='flex '>
                                            <img className='h-9 w-9 ' src={dp} alt='' />
                                            <div className='flex flex-col pl-2'>
                                                <div className='text-[16px] text-[#111827] w-40'>
                                                    {booking.customerName}
                                                </div>
                                                <div className='text-[#718096] text-sm'>
                                                    {booking.id}
                                                </div>
                                            </div>
                                        </div>
                                        <p className=''>{booking.phoneNumber}</p>
                                        <p className='translate-x-4'>{booking.Time}/{booking.Date}</p>
                                        <p className='w-40 translate-x-4'>{booking.merchantName}</p>
                                        <p className='translate-x-4'>{booking.PAX}</p>
                                        <div className='flex gap-4'>
                                            <div
                                                className={`rounded-3xl w-40 h-11 text-center flex items-center justify-center 
                                            ${booking.status === 'Pending' ? 'bg-[#F1EFEF] ' :
                                                        booking.status === 'No Show' ? 'bg-[#fbd9de] text-[#FD4A65]' :
                                                            booking.status === 'Complete' ? 'bg-[#bdd3c1] text-[#3A974C]' : ''
                                                    }`}
                                            >
                                                {booking.status}
                                            </div>
                                            {booking.status === 'Pending' && (
                                                <button className='p-3 rounded-full bg-[#F1EFEF] mb-4' onClick={openPopup}>
                                                    <img alt='' src={editIcon} className='w-[18px] h-[18px]' />
                                                </button>
                                            )}
                                            {booking.status !== 'Pending' && (
                                                <div className='p-5 rounded-full bg-white mb-4 '>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <hr className='mb-3' />
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-between mt-4'>
                            <div>
                                <label>Show result:</label>
                                <select
                                    className='ml-2'
                                    value={entriesPerPage2}
                                    onChange={handleEntriesPerPageChange2}
                                >
                                    <option value={5}>5</option>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                </select>
                            </div>
                            <div className="flex ">
                                <button
                                    onClick={() => handlePageChange2(currentPage2 - 1)}
                                    disabled={currentPage2 === 1}
                                >
                                    <img src={left} alt='' />
                                </button>
                                <div
                                    className=""
                                    value={currentPage2}
                                >

                                    {Array.from({ length: totalPages2 }, (_, index) => (
                                        <button
                                            key={index + 1}
                                            value={index + 1}
                                            className={`w-10 h-10 mx-2 rounded-xl ${currentPage2 === index + 1 ? 'bg-[#eacd76]' : 'bg-white'}`}
                                            onClick={(e) => handlePageChange2(Number(e.target.value))}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>
                                {/* <div>of {totalPages}</div> */}
                                <button
                                    onClick={() => handlePageChange2(currentPage2 + 1)}
                                    disabled={currentPage2 === totalPages2}
                                >
                                    <img src={right} alt='' />
                                </button>
                            </div>
                        </div>
                        <div className={`fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-50 ${isPopupOpen ? '' : 'hidden'}`}>
                            <div
                                id='popup'
                                className={`w-[470px] h-fit bg-white rounded-[10px] shadow-inner fixed ml-[35%] top-[20%] inset-0 z-50  flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-50
                            ${isPopupOpen ? '' : 'hidden'}`}
                            >
                                <form onSubmit={submitHandler}>
                                    <div className='flex justify-between px-6 pt-6'>
                                        <p className='font-roboto font-semibold text-xl'>Edit Booking</p>
                                        <div className='flex gap-2'>
                                            <button className='p-3 rounded-full bg-[#d9a8ac] mb-4'>
                                                <img src={deleteIcon} alt='' className='h-[14px] w-3' />
                                            </button>
                                            <button className='p-3 rounded-full bg-[#d9a8ac] mb-4' onClick={closePopup}>
                                                <img src={crossIcon} alt='' className='h-[10px] w-[10px]' />
                                            </button>
                                        </div>
                                    </div>
                                    <hr className='w-full' />
                                    <div className='px-6'>
                                        <div className='flex w-full justify-between mt-4 mb-2'>
                                            <div className='flex flex-col w-[48%]'>
                                                <label>Customer Name</label>
                                                <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8]' type="text" name="customerName" placeholder={book.customerName} onChange={handleChange} />
                                            </div>
                                            <div className='flex flex-col w-[48%]'>
                                                <label>Customer Contact</label>
                                                <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8]' type="text" placeholder={book.customerContact} name="customerContact" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className='flex w-full justify-between mt-4 mb-2'>
                                            <div className='flex flex-col w-[48%]'>
                                                <label>Number of PAX</label>
                                                <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8]' type="text" name="numPax" placeholder={book.pax} onChange={handleChange} />
                                            </div>
                                            <div className='flex flex-col w-[48%]'>
                                                <label>Restaurant Name</label>
                                                <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8]' type="text" placeholder={book.restaurantName} name="restaurantName" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className='flex w-full justify-between mt-4 mb-2'>
                                            <div className='flex flex-col w-[48%]'>
                                                <label>Date</label>
                                                <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' type="date" name="date" placeholder={book.date} onChange={handleChange} />
                                            </div>
                                            <div className='flex flex-col w-[48%]'>
                                                <label>Time</label>
                                                <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2' type="time" placeholder={book.time} name="customerContact" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className='flex justify-center gap-2 mt-4 pb-6'>
                                            <button className='bg-white border-black p-2 w-24 h-10 rounded-[10px] ' onClick={closePopup}>
                                                <div className='text-[#EAB308]'>Close</div>
                                            </button>
                                            <button className='p-2 w-24 h-10 rounded-[10px] bg-[#EAB308] ' onClick={submitHandler}>
                                                <div className='text-white'>Save</div>
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div
                        id='merchantAnalyticsContent'
                        style={{ display: activeButton === 'merchantAnalytics' ? 'block' : 'none' }}
                        className='w-full h-fit bg-white p-5 mt-4 rounded-md text-[1.1rem] font-semibold'
                    >
                        <div>
                            <div >
                                <input
                                    className='px-2 bg-[#F1EFEF] rounded-md w-[50%] h-10 mt-1 text-[.92rem] border-2'
                                    type="text"
                                    name="name"
                                    placeholder='Search by ID, restaurant name'
                                    value={searchInput2}
                                    onChange={(e) => setSearchInput2(e.target.value.toLowerCase())}
                                />
                            </div>
                            <hr className='my-2' />
                            <div className='text-[#718096] flex w-full justify-between ml-4 '>
                                <div className=''>Merchant Name</div>
                                <div className=''>Location</div>
                                <div className=''>Category</div>
                                <div className='translate-x-6'>Recommendations</div>
                                <div className=''>Total PAX</div>
                                <div className=''>Total Bookings</div>
                            </div>
                            <hr className='my-3' />
                            <div>
                                {filteredBook2.slice(startIndex, endIndex).map((book) => (<div>
                                    <div key={book._id} className='flex justify-between ml-4 text-[16px] text-[#111827]'>
                                        <div className='flex flex-col pl-2'>
                                            <div className='text-[16px] text-[#111827] w-40'>
                                                {book.merchantName}
                                            </div>
                                            <div className='text-[#718096] text-sm'>
                                                {book.id}
                                            </div>
                                        </div>
                                        <p className='-translate-x-12'>{book.location}</p>
                                        <div className='-translate-x-24'>
                                            {book.category.length > 0 && (
                                                <p className=''>{book.category.join(', ')}</p>
                                            )}
                                        </div>
                                        <p className='-translate-x-24'>{book.Recommendations}</p>
                                        <p className='-translate-x-16'>{book.pax}</p>
                                        <p className='mr-6'>{book.totalBookings}</p>
                                    </div>
                                    <hr className='mb-3' />
                                </div>
                                ))}
                            </div>
                            <div className='flex justify-between mt-4'>
                                <div>
                                    <label>Show result:</label>
                                    <select
                                        className='ml-2'
                                        value={entriesPerPage}
                                        onChange={handleEntriesPerPageChange}
                                    >
                                        <option value={5}>5</option>
                                        <option value={10}>10</option>
                                        <option value={20}>20</option>
                                        <option value={50}>50</option>
                                    </select>
                                </div>
                                <div className="flex ">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        <img src={left} alt='' />
                                    </button>
                                    <div
                                        className=""
                                        value={currentPage}
                                    >

                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <button
                                                key={index + 1}
                                                value={index + 1}
                                                className={`w-10 h-10 mx-2 rounded-xl ${currentPage === index + 1 ? 'bg-[#eacd76]' : 'bg-white'}`}
                                                onClick={(e) => handlePageChange(Number(e.target.value))}
                                            >
                                                {index + 1}
                                            </button>
                                        ))}
                                    </div>
                                    {/* <div>of {totalPages}</div> */}
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        <img src={right} alt='' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminBookings;
