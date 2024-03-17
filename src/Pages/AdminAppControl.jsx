import React, { useState } from 'react'
import folderIcon from "../assets/folderIcon.png";
import AdminNav from '../Components/AdminNav';
import AdminLeftBar from '../Components/AdminLeftBar';
import editIcon from "../assets/Edit.png"
import crossIcon from "../assets/delete.png"
import cross from "../assets/cross2.png"
import crossX from "../assets/cross.png"
import { FiUpload } from "react-icons/fi";


const categories = [
    {
        size: "1.2 MB",
        categoryName: "Pet-Friendly",
        merchantCount: "21",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    }, {
        size: "1.2 MB",
        categoryName: "Pet-Friendly",
        merchantCount: "21",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    }, {
        size: "1.2 MB",
        categoryName: "Pet-Friendly",
        merchantCount: "21",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    }, {
        size: "1.2 MB",
        categoryName: "Pet-Friendly",
        merchantCount: "21",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    }, {
        size: "1.2 MB",
        categoryName: "Pet-Friendly",
        merchantCount: "21",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    }, {
        size: "1.2 MB",
        categoryName: "Pet-Friendly",
        merchantCount: "21",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    }, {
        size: "1.2 MB",
        categoryName: "Pet-Friendly",
        merchantCount: "21",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    },

]

const snackStories = [
    {
        size: "1.2 MB",
        caption: "Best Cafe in Salt Lake",
        merchantTag: "Chowman-Bagulati",
        duration: "10 Days",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    },
    {
        size: "1.2 MB",
        caption: "Best Cafe in Salt Lake",
        merchantTag: "Chowman-Bagulati",
        duration: "10 Days",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    }, {
        size: "1.2 MB",
        caption: "Best Cafe in Salt Lake",
        merchantTag: "Chowman-Bagulati",
        duration: "10 Days",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    }, {
        size: "1.2 MB",
        caption: "Best Cafe in Salt Lake",
        merchantTag: "Chowman-Bagulati",
        duration: "10 Days",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    }, {
        size: "1.2 MB",
        caption: "Best Cafe in Salt Lake",
        merchantTag: "Chowman-Bagulati",
        duration: "10 Days",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    }, {
        size: "1.2 MB",
        caption: "Best Cafe in Salt Lake",
        merchantTag: "Chowman-Bagulati",
        duration: "10 Days",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    }, {
        size: "1.2 MB",
        caption: "Best Cafe in Salt Lake",
        merchantTag: "Chowman-Bagulati",
        duration: "10 Days",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    },
]

const blogs = [
    {
        size: "1.2 MB",
        blogHeading: "Best Foodspots in Kolkata",
        viewCount: "12000",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    },
    {
        size: "1.2 MB",
        blogHeading: "Best Foodspots in Kolkata",
        viewCount: "12000",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    },
    {
        size: "1.2 MB",
        blogHeading: "Best Foodspots in Kolkata",
        viewCount: "12000",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    }, {
        size: "1.2 MB",
        blogHeading: "Best Foodspots in Kolkata",
        viewCount: "12000",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    }, {
        size: "1.2 MB",
        blogHeading: "Best Foodspots in Kolkata",
        viewCount: "12000",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    }, {
        size: "1.2 MB",
        blogHeading: "Best Foodspots in Kolkata",
        viewCount: "12000",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    }, {
        size: "1.2 MB",
        blogHeading: "Best Foodspots in Kolkata",
        viewCount: "12000",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    },
]

const banners = [
    {
        size: "1.2 MB",
        bannerTitle: "Restaurant Banner",
        url: "merchant.snackbae.in",
        duration: "10 Days",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    },
    {
        size: "1.2 MB",
        bannerTitle: "Restaurant Banner",
        url: "merchant.snackbae.in",
        duration: "10 Days",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    },
    {
        size: "1.2 MB",
        bannerTitle: "Restaurant Banner",
        url: "merchant.snackbae.in",
        duration: "10 Days",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    },
    {
        size: "1.2 MB",
        bannerTitle: "Restaurant Banner",
        url: "merchant.snackbae.in",
        duration: "10 Days",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    },
    {
        size: "1.2 MB",
        bannerTitle: "Restaurant Banner",
        url: "merchant.snackbae.in",
        duration: "10 Days",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    },
    {
        size: "1.2 MB",
        bannerTitle: "Restaurant Banner",
        url: "merchant.snackbae.in",
        duration: "10 Days",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    },
    {
        size: "1.2 MB",
        bannerTitle: "Restaurant Banner",
        url: "merchant.snackbae.in",
        duration: "10 Days",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    },
    {
        size: "1.2 MB",
        bannerTitle: "Restaurant Banner",
        url: "merchant.snackbae.in",
        duration: "10 Days",
        createdDate: "2021-11-03",
        createdTime: "22:00",
    },
]

const AdminAppControl = () => {

    const [isDeletePopupOpen1, setIsDeletePopupOpen1] = useState(false);
    const [isDeletePopupOpen2, setIsDeletePopupOpen2] = useState(false);
    const [isDeletePopupOpen3, setIsDeletePopupOpen3] = useState(false);
    const [isDeletePopupOpen4, setIsDeletePopupOpen4] = useState(false);

    const [isAddPopupOpen1, setIsAddPopupOpen1] = useState(false);
    const [isAddPopupOpen2, setIsAddPopupOpen2] = useState(false);
    const [isAddPopupOpen3, setIsAddPopupOpen3] = useState(false);
    const [isAddPopupOpen4, setIsAddPopupOpen4] = useState(false);

    const [image1, setImage1] = useState(null);
    const [fileName1, setFileName1] = useState("No selected Files");

    const [data, SetData] = useState();
    const [formData1, setFormData1] = useState({
        categoryName: "",
        pic:""
    });

    const handleChange1 = (event) => {
        setFormData1({ ...formData1, [event.target.name]: event.target.value });

    };

    const handleSubmit1 = (event) => {
        event.preventDefault();
        console.log(formData1);
    };

    const [image2, setImage2] = useState(null);
    const [fileName2, setFileName2] = useState("No selected Files");

    const [formData2, setFormData2] = useState({
        caption: "",
        duration: "",
        merchantTag: "",
        pic:""
    });

    const handleChange2 = (event) => {
        setFormData2({ ...formData2, [event.target.name]: event.target.value });

    };

    const handleSubmit2 = (event) => {
        event.preventDefault();
        console.log(formData2);
    };

    const [image3, setImage3] = useState(null);
    const [fileName3, setFileName3] = useState("No selected Files");

    const [formData3, setFormData3] = useState({
        title: "",
        body: "",
        pic:"",
    });

    const handleChange3 = (event) => {
        setFormData3({ ...formData3, [event.target.name]: event.target.value });

    };

    const handleSubmit3 = (event) => {
        event.preventDefault();
        console.log(formData3);
    };

    const [image4, setImage4] = useState(null);
    const [fileName4, setFileName4] = useState("No selected Files");

    const [formData4, setFormData4] = useState({
        title: "",
        url: "",
        duration: "",
        pic:""
    });

    const handleChange4 = (event) => {
        setFormData4({ ...formData4, [event.target.name]: event.target.value });

    };

    const handleSubmit4 = (event) => {
        event.preventDefault();
        console.log(formData4);
    };

    function openDeletePopup1() {
        setIsDeletePopupOpen1(true);
    }

    function closeDeletePopup1() {
        setIsDeletePopupOpen1(false);
    }


    function openDeletePopup2() {
        setIsDeletePopupOpen2(true);
    }

    function closeDeletePopup2() {
        setIsDeletePopupOpen2(false);
    }

    function openDeletePopup3() {
        setIsDeletePopupOpen3(true);
    }

    function closeDeletePopup3() {
        setIsDeletePopupOpen3(false);
    }

    function openDeletePopup4() {
        setIsDeletePopupOpen4(true);
    }

    function closeDeletePopup4() {
        setIsDeletePopupOpen4(false);
    }

    function openAddPopup1() {
        setIsAddPopupOpen1(true);
    }

    function closeAddPopup1() {
        setIsAddPopupOpen1(false);
    }

    function openAddPopup2() {
        setIsAddPopupOpen2(true);
    }

    function closeAddPopup2() {
        setIsAddPopupOpen2(false);
    }

    function openAddPopup3() {
        setIsAddPopupOpen3(true);
    }

    function closeAddPopup3() {
        setIsAddPopupOpen3(false);
    }

    function openAddPopup4() {
        setIsAddPopupOpen4(true);
    }

    function closeAddPopup4() {
        setIsAddPopupOpen4(false);
    }


    return (
        <div className='w-full overflow-x-hidden relative'>
            <div>
                <AdminNav />
            </div>
            <div className='flex pt-20'>
                <div className='w-[20%]'>
                    <AdminLeftBar />
                </div>
                <div className='flex flex-col w-[80%] bg-slate-200 h-fit'>
                    <div className=' h-[450px] bg-white p-5 m-4 rounded-md text-[1.1rem] font-semibold '>
                        <div className='flex justify-between'>
                            <div className='font-roboto text-2xl font-bold leading-7'>Category</div>
                            <div className='flex justify-center '>
                                <button className='bg-[#EAB308] p-2 w-[138px] h-10 rounded-[10px] ' onClick={openAddPopup1}>
                                    <div className='text-white text-[14px]'>Create Category</div>
                                </button>
                            </div>
                        </div>
                        <hr className='my-2 w-[130%] -m-6' />
                        <div className='h-[360px] overflow-y-auto overflow-x-hidden'>
                            <table className='w-full overflow-y-auto overflow-x-hidden'>
                                <thead>
                                    <tr className='text-[#718096]'>
                                        <th className=''>Image File</th>
                                        <th>Category Name</th>
                                        <th>Merchant Count</th>
                                        <th>Created Date</th>
                                        <th>Edit</th>
                                        <th className='mr-4'>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((category) => (
                                        <tr key={category._id} className='text-[13px] text-[#3A3A49] font-normal leading-[16px] text-center h-[53px] border-solid border-[1px] '>
                                            <td className='text-center flex justify-center mt-2'>
                                                <div className=''>
                                                    <img src={folderIcon} alt='' className='h-[25px] w-[27px]' />
                                                    <div className='leading-[8px] text-[6px] '>{category.size}</div>
                                                </div>
                                            </td>
                                            <td>{category.categoryName}</td>
                                            <td>{category.merchantCount}</td>
                                            <td>{category.createdDate} {category.createdTime}</td>
                                            <td className='translate-x-4'>
                                                <button className='bg-[#d8cca5] h-7 w-7 rounded-full p-2 flex justify-center items-center'>
                                                    <img src={editIcon} alt='' className='h-3 w-3 ' />
                                                </button>
                                            </td>
                                            <td className='translate-x-8'>
                                                <button className='bg-[#d08f8f] h-7 w-7 rounded-full p-2 flex justify-center items-center' onClick={openDeletePopup1} >
                                                    <img src={crossIcon} alt='' className='h-3 w-3 ' />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div
                            className={`fixed inset-0 bg-white bg-opacity-50 z-40  ${isDeletePopupOpen1 ? '' : 'hidden'
                                }`}
                        ></div>
                        <div
                            id='deletePopup1'
                            className={`w-[440px] h-fit bg-white rounded-[10px] shadow-inner fixed ml-[35%] top-[20%] inset-0 z-50  flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-50
                            ${isDeletePopupOpen1 ? '' : 'hidden'}`}

                        >
                            <div className='flex flex-col justify-center items-center'>
                                <img src={cross} alt='' className='h-[113px] w-[100px] m-4' />
                                <div className='text-xl font-bold m-4'>Are you sure you want to Delete?</div>
                                <div className='flex justify-center gap-2 mt-4 pb-6'>
                                    <button className='p-2 w-24 h-10 rounded-[10px] bg-[#EAB308] ' onClick={closeDeletePopup1}>
                                        <div className='text-white'>Yes</div>
                                    </button>
                                    <button className='bg-white border-[#EAB308] ring-2 ring-[#EAB308] p-2 w-24 h-10 rounded-[10px] ' onClick={closeDeletePopup1}>
                                        <div className='text-[#EAB308]'>No</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`fixed inset-0 bg-white bg-opacity-50 z-40  ${isAddPopupOpen1 ? '' : 'hidden'
                                }`}
                        ></div>
                        <div
                            id='addPopup1'
                            className={`w-[470px] h-fit bg-white rounded-[10px] shadow-inner fixed ml-[35%] top-[20%] inset-0 z-50  flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-50
                            ${isAddPopupOpen1 ? '' : 'hidden'}`}

                        >
                            <div className='flex flex-col justify-center items-center'>
                                <form onSubmit={handleSubmit1}>
                                    <div className='flex justify-between px-6 pt-6 w-[470px]'>
                                        <p className='font-roboto font-semibold text-xl'>Add Category</p>
                                        <button className='p-3 rounded-full bg-[#e0babe] mb-4' onClick={closeAddPopup1}>
                                            <img src={crossX} alt='' className='h-[10px] w-[10px]' />
                                        </button>
                                    </div>
                                    <hr className='w-full' />
                                    <div className='px-6'>
                                        <div className='flex flex-col mt-8 mb-4'>
                                            <label className='font-medium'>Category Name</label>
                                            <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8]'
                                                type="text"
                                                name="categoryName"
                                                value={formData1.categoryName}
                                                onChange={handleChange1}
                                                required />
                                        </div>
                                        <label className='font-medium mb-2'>Category Image</label>
                                        <div className='flex flex-row justify-center items-center w-full h-32 border-2 border-dashed  border-yellow-600 rounded-lg bg-[#FEFCE8]' onClick={() => document.querySelector(".input-field1").click()}>
                                            <input type='file' accept='image/*' className='input-field1'
                                                onChange={({ target: { files } }) => {
                                                    files[0] && setFileName1(files[0].name)
                                                    if (files)
                                                        setImage1(URL.createObjectURL(files[0]))

                                                }}
                                                hidden></input>
                                            {image1 ?
                                                <div>Uploaded {fileName1}</div> :
                                                <div className='flex flex-col justify-center items-center'>
                                                    <div className='bg-yellow-500 w-12 h-12 rounded-full flex justify-center items-center'>
                                                        <FiUpload color='white' />
                                                    </div>
                                                    <div className='font-bold text-sm'>Upload File</div>
                                                    <div className='text-sm opacity-50'>Drag and drop files here</div>
                                                </div>
                                            }
                                        </div>
                                        <div className='flex justify-center mt-6 mb-4'>
                                            <button className='bg-[#EAB308] p-2 w-[138px] h-10 rounded-[10px] ' type='submit' onClick={closeAddPopup1}>
                                                <div className='text-white text-[14px]'>Add Category</div>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className=' h-[450px] bg-white p-5 m-4 rounded-md text-[1.1rem] font-semibold '>
                        <div className='flex justify-between'>
                            <div className='font-roboto text-2xl font-bold leading-7'>Snackstories</div>
                            <div className='flex justify-center '>
                                <button className='bg-[#EAB308] p-2 w-[138px] h-10 rounded-[10px] ' onClick={openAddPopup2}>
                                    <div className='text-white text-[14px]'>Create Snackstory</div>
                                </button>
                            </div>
                        </div>
                        <hr className='my-2 w-[130%] -m-6' />
                        <div className='h-[360px] overflow-y-auto overflow-x-hidden'>
                            <table className='w-full overflow-y-auto overflow-x-hidden'>
                                <thead>
                                    <tr className='text-[#718096]'>
                                        <th className=''>Video File</th>
                                        <th>Caption</th>
                                        <th>Merchant Tag</th>
                                        <th>Duration</th>
                                        <th>Created Date</th>
                                        <th>Edit</th>
                                        <th className='mr-4'>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {snackStories.map((snackStory) => (
                                        <tr key={snackStory._id} className='text-[13px] text-[#3A3A49] font-normal leading-[16px] text-center h-[53px] border-solid border-[1px] '>
                                            <td className='text-center flex justify-center mt-2'>
                                                <div className=''>
                                                    <img src={folderIcon} alt='' className='h-[25px] w-[27px]' />
                                                    <div className='leading-[8px] text-[6px] '>{snackStory.size}</div>
                                                </div>
                                            </td>
                                            <td>{snackStory.caption}</td>
                                            <td>{snackStory.merchantTag}</td>
                                            <td>{snackStory.duration}</td>
                                            <td>{snackStory.createdDate} {snackStory.createdTime}</td>
                                            <td className='translate-x-4'>
                                                <button className='bg-[#d8cca5] h-7 w-7 rounded-full p-2 flex justify-center items-center'>
                                                    <img src={editIcon} alt='' className='h-3 w-3 ' />
                                                </button>
                                            </td>
                                            <td className='translate-x-8'>
                                                <button className='bg-[#d08f8f] h-7 w-7 rounded-full p-2 flex justify-center items-center' onClick={openDeletePopup2}>
                                                    <img src={crossIcon} alt='' className='h-3 w-3 ' />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div
                            className={`fixed inset-0 bg-white bg-opacity-50 z-40  ${isDeletePopupOpen2 ? '' : 'hidden'
                                }`}
                        ></div>
                        <div
                            id='deletePopup2'
                            className={`w-[440px] h-fit bg-white rounded-[10px] shadow-inner fixed ml-[35%] top-[20%] inset-0 z-50  flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-50
                            ${isDeletePopupOpen2 ? '' : 'hidden'}`}

                        >
                            <div className='flex flex-col justify-center items-center'>
                                <img src={cross} alt='' className='h-[113px] w-[100px] m-4' />
                                <div className='text-xl font-bold m-4'>Are you sure you want to Delete?</div>
                                <div className='flex justify-center gap-2 mt-4 pb-6'>
                                    <button className='p-2 w-24 h-10 rounded-[10px] bg-[#EAB308] ' onClick={closeDeletePopup2}>
                                        <div className='text-white'>Yes</div>
                                    </button>
                                    <button className='bg-white border-[#EAB308] ring-2 ring-[#EAB308] p-2 w-24 h-10 rounded-[10px] ' onClick={closeDeletePopup2}>
                                        <div className='text-[#EAB308]'>No</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`fixed inset-0 bg-white bg-opacity-50 z-40  ${isAddPopupOpen2 ? '' : 'hidden'
                                }`}
                        ></div>
                        <div
                            id='addPopup2'
                            className={`w-[470px] h-fit bg-white rounded-[10px] shadow-inner fixed ml-[35%] top-[15%] inset-0 z-50  flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-50
                            ${isAddPopupOpen2 ? '' : 'hidden'}`}

                        >
                            <div className='flex flex-col justify-center items-center'>
                                <form onSubmit={handleSubmit2}>
                                    <div className='flex justify-between px-6 pt-6 w-[470px]'>
                                        <p className='font-roboto font-semibold text-xl'>Add Snackstory</p>
                                        <button className='p-3 rounded-full bg-[#e0babe] mb-4' onClick={closeAddPopup2}>
                                            <img src={crossX} alt='' className='h-[10px] w-[10px]' />
                                        </button>
                                    </div>
                                    <hr className='w-full' />
                                    <div className='px-6'>
                                        <div className='flex flex-col mt-8 mb-4'>
                                            <label className='font-medium'>Caption</label>
                                            <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8]'
                                                type="text"
                                                name="caption"
                                                value={formData2.caption}
                                                onChange={handleChange2}
                                                required />
                                        </div>
                                        <div className='flex flex-col mt-8 mb-4'>
                                            <label className='font-medium'>Duration</label>
                                            <select className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8]'
                                                type="text"
                                                name="duration"
                                                value={formData2.duration}
                                                onChange={handleChange2}
                                                required >
                                                <option value="">Select Duration</option>
                                                <option value="10">10 Days</option>
                                                <option value="15">15 Days</option>
                                                <option value="20">20 Days</option>
                                            </select>
                                        </div>
                                        <div className='flex flex-col mt-8 mb-4'>
                                            <label className='font-medium'>Merchant Tag</label>
                                            <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8]'
                                                type="text"
                                                name="merchantTag"
                                                value={formData2.merchantTag}
                                                onChange={handleChange2}
                                                required />
                                        </div>
                                        <div >
                                            <label className='font-medium mb-2'>Video Media</label>
                                            <div className='flex flex-row justify-center items-center w-full h-32 border-2 border-dashed  border-yellow-600 rounded-lg bg-[#FEFCE8]' onClick={() => document.querySelector(".input-field2").click()}>
                                                <input type='file' accept='video/*' className='input-field2'
                                                    onChange={({ target: { files } }) => {
                                                        files[0] && setFileName2(files[0].name)
                                                        if (files)
                                                            setImage2(URL.createObjectURL(files[0]))

                                                    }}
                                                    hidden></input>
                                                {image2 ?
                                                    <div>Uploaded {fileName2}</div> :
                                                    <div className='flex flex-col justify-center items-center'>
                                                        <div className='bg-yellow-500 w-12 h-12 rounded-full flex justify-center items-center'>
                                                            <FiUpload color='white' />
                                                        </div>
                                                        <div className='font-bold text-sm'>Upload File</div>
                                                        <div className='text-sm opacity-50'>Drag and drop files here</div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <div className='flex justify-center mt-6 mb-4'>
                                            <button className='bg-[#EAB308] p-2 w-[138px] h-10 rounded-[10px] ' type='submit' onClick={closeAddPopup2}>
                                                <div className='text-white text-[14px]'>Add Snackstory</div>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className=' h-[450px] bg-white p-5 m-4 rounded-md text-[1.1rem] font-semibold '>
                        <div className='flex justify-between'>
                            <div className='font-roboto text-2xl font-bold leading-8'>Blogs</div>
                            <div className='flex justify-center '>
                                <button className='bg-[#EAB308] p-2 w-[138px] h-10 rounded-[10px] ' onClick={openAddPopup3}>
                                    <div className='text-white text-[14px]'>Add Blog</div>
                                </button>
                            </div>
                        </div>
                        <hr className='my-2 w-[130%] -m-6' />
                        <div className='h-[360px] overflow-y-auto overflow-x-hidden'>
                            <table className='w-full overflow-y-auto overflow-x-hidden'>
                                <thead>
                                    <tr className='text-[#718096]'>
                                        <th>Blog Heading</th>
                                        <th className=''>Media File</th>
                                        <th>View Count</th>
                                        <th>Created Date</th>
                                        <th>Edit</th>
                                        <th className='mr-4'>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blogs.map((blog) => (
                                        <tr key={blog._id} className='text-[13px] text-[#3A3A49] font-normal leading-[16px] text-center h-[53px] border-solid border-[1px] '>
                                            <td>{blog.blogHeading}</td>
                                            <td className='text-center flex justify-center mt-2'>
                                                <div className=''>
                                                    <img src={folderIcon} alt='' className='h-[25px] w-[27px]' />
                                                    <div className='leading-[8px] text-[6px] '>{blog.size}</div>
                                                </div>
                                            </td>
                                            <td>{blog.viewCount}</td>
                                            <td>{blog.createdDate} {blog.createdTime}</td>
                                            <td className='translate-x-4'>
                                                <button className='bg-[#d8cca5] h-7 w-7 rounded-full p-2 flex justify-center items-center' >
                                                    <img src={editIcon} alt='' className='h-3 w-3 ' />
                                                </button>
                                            </td>
                                            <td className='translate-x-8'>
                                                <button className='bg-[#d08f8f] h-7 w-7 rounded-full p-2 flex justify-center items-center' onClick={openDeletePopup3}>
                                                    <img src={crossIcon} alt='' className='h-3 w-3 ' />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div
                            className={`fixed inset-0 bg-white bg-opacity-50 z-40  ${isDeletePopupOpen3 ? '' : 'hidden'
                                }`}
                        ></div>
                        <div
                            id='deletePopup3'
                            className={`w-[440px] h-fit bg-white rounded-[10px] shadow-inner fixed ml-[35%] top-[20%] inset-0 z-50  flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-50
                            ${isDeletePopupOpen3 ? '' : 'hidden'}`}

                        >
                            <div className='flex flex-col justify-center items-center'>
                                <img src={cross} alt='' className='h-[113px] w-[100px] m-4' />
                                <div className='text-xl font-bold m-4'>Are you sure you want to Delete?</div>
                                <div className='flex justify-center gap-2 mt-4 pb-6'>
                                    <button className='p-2 w-24 h-10 rounded-[10px] bg-[#EAB308] ' onClick={closeDeletePopup3}>
                                        <div className='text-white'>Yes</div>
                                    </button>
                                    <button className='bg-white border-[#EAB308] ring-2 ring-[#EAB308] p-2 w-24 h-10 rounded-[10px] ' onClick={closeDeletePopup3}>
                                        <div className='text-[#EAB308]'>No</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`fixed inset-0 bg-white bg-opacity-50 z-40  ${isAddPopupOpen3 ? '' : 'hidden'
                                }`}
                        ></div>
                        <div
                            id='addPopup3'
                            className={`w-[470px] h-fit bg-white rounded-[10px] shadow-inner fixed ml-[35%] top-[12%] inset-0 z-50  flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-50
                            ${isAddPopupOpen3 ? '' : 'hidden'}`}

                        >
                            <div className='flex flex-col justify-center items-center'>
                                <form onSubmit={handleSubmit3}>
                                    <div className='flex justify-between px-6 pt-6 w-[470px]'>
                                        <p className='font-roboto font-semibold text-xl'>Add Blog</p>
                                        <button className='p-3 rounded-full bg-[#e0babe] mb-4' onClick={closeAddPopup3}>
                                            <img src={crossX} alt='' className='h-[10px] w-[10px]' />
                                        </button>
                                    </div>
                                    <hr className='w-full' />
                                    <div className='px-6'>
                                        <div className='flex flex-col mt-8 mb-4'>
                                            <label className='font-medium'>Title</label>
                                            <input className='px-2 rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8]'
                                                type="text"
                                                name="title"
                                                value={formData3.title}
                                                onChange={handleChange3}
                                                required />
                                        </div>
                                        <div className='flex flex-col mt-8 mb-4'>
                                            <label className='font-medium'>Body</label>
                                            <textarea className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8]'
                                                name="body"
                                                value={formData3.body}
                                                onChange={handleChange3}
                                                required />
                                        </div>
                                        <div >
                                            <label className='font-medium mb-2'>Add Image</label>
                                            <div className='flex flex-row justify-center items-center w-full h-32 border-2 border-dashed  border-yellow-600 rounded-lg bg-[#FEFCE8]' onClick={() => document.querySelector(".input-field3").click()}>
                                                <input type='file' accept='image/*' className='input-field3'
                                                    onChange={({ target: { files } }) => {
                                                        files[0] && setFileName3(files[0].name)
                                                        if (files)
                                                            setImage3(URL.createObjectURL(files[0]))

                                                    }}
                                                    hidden></input>
                                                {image3 ?
                                                    <div>Uploaded {fileName3}</div> :
                                                    <div className='flex flex-col justify-center items-center'>
                                                        <div className='bg-yellow-500 w-12 h-12 rounded-full flex justify-center items-center'>
                                                            <FiUpload color='white' />
                                                        </div>
                                                        <div className='font-bold text-sm'>Upload File</div>
                                                        <div className='text-sm opacity-50'>Drag and drop files here</div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <div className='flex justify-center mt-6 mb-4'>
                                            <button className='bg-[#EAB308] p-2 w-[138px] h-10 rounded-[10px] ' type='submit' onClick={closeAddPopup3}>
                                                <div className='text-white text-[14px]'>Add Blog</div>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className=' h-[450px] bg-white p-5 m-4 rounded-md text-[1.1rem] font-semibold bottom-10'>
                        <div className='flex justify-between'>
                            <div className='font-roboto text-2xl font-bold leading-7'>Banners</div>
                            <div className='flex justify-center '>
                                <button className='bg-[#EAB308] p-2 w-[138px] h-10 rounded-[10px] ' onClick={openAddPopup4}>
                                    <div className='text-white text-[14px]'>Add Banner</div>
                                </button>
                            </div>
                        </div>
                        <hr className='my-2 w-[130%] -m-6' />
                        <div className='h-[360px] overflow-y-auto overflow-x-hidden'>
                            <table className='w-full overflow-y-auto overflow-x-hidden'>
                                <thead>
                                    <tr className='text-[#718096]'>
                                        <th className=''>Image File</th>
                                        <th>Banner Title</th>
                                        <th>URL</th>
                                        <th>Duration</th>
                                        <th>Created Date</th>
                                        <th>Edit</th>
                                        <th className='mr-4'>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {banners.map((banner) => (
                                        <tr key={banner._id} className='text-[13px] text-[#3A3A49] font-normal leading-[16px] text-center h-[53px] border-solid border-[1px] '>
                                            <td className='text-center flex justify-center mt-2'>
                                                <div className=''>
                                                    <img src={folderIcon} alt='' className='h-[25px] w-[27px]' />
                                                    <div className='leading-[8px] text-[6px] '>{banner.size}</div>
                                                </div>
                                            </td>
                                            <td>{banner.bannerTitle}</td>
                                            <td>{banner.url}</td>
                                            <td>{banner.duration}</td>
                                            <td>{banner.createdDate} {banner.createdTime}</td>
                                            <td className='translate-x-4'>
                                                <button className='bg-[#d8cca5] h-7 w-7 rounded-full p-2 flex justify-center items-center'>
                                                    <img src={editIcon} alt='' className='h-3 w-3 ' />
                                                </button>
                                            </td>
                                            <td className='translate-x-8'>
                                                <button className='bg-[#d08f8f] h-7 w-7 rounded-full p-2 flex justify-center items-center' onClick={openDeletePopup4}>
                                                    <img src={crossIcon} alt='' className='h-3 w-3 ' />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div
                            className={`fixed inset-0 bg-white bg-opacity-50 z-40  ${isDeletePopupOpen4 ? '' : 'hidden'
                                }`}
                        ></div>
                        <div
                            id='deletePopup4'
                            className={`w-[440px] h-fit bg-white rounded-[10px] shadow-inner fixed ml-[35%] top-[20%] inset-0 z-50  flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-50
                            ${isDeletePopupOpen4 ? '' : 'hidden'}`}

                        >
                            <div className='flex flex-col justify-center items-center'>
                                <img src={cross} alt='' className='h-[113px] w-[100px] m-4' />
                                <div className='text-xl font-bold m-4'>Are you sure you want to Delete?</div>
                                <div className='flex justify-center gap-2 mt-4 pb-6'>
                                    <button className='p-2 w-24 h-10 rounded-[10px] bg-[#EAB308] ' onClick={closeDeletePopup4}>
                                        <div className='text-white'>Yes</div>
                                    </button>
                                    <button className='bg-white border-[#EAB308] ring-2 ring-[#EAB308] p-2 w-24 h-10 rounded-[10px] ' onClick={closeDeletePopup4}>
                                        <div className='text-[#EAB308]'>No</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`fixed inset-0 bg-white bg-opacity-50 z-40  ${isAddPopupOpen4 ? '' : 'hidden'
                                }`}
                        ></div>
                        <div
                            id='addPopup2'
                            className={`w-[470px] h-fit bg-white rounded-[10px] shadow-inner fixed ml-[35%] top-[15%] inset-0 z-50  flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-50
                            ${isAddPopupOpen4 ? '' : 'hidden'}`}

                        >
                            <div className='flex flex-col justify-center items-center'>
                                <form onSubmit={handleSubmit4}>
                                    <div className='flex justify-between px-6 pt-6 w-[470px]'>
                                        <p className='font-roboto font-semibold text-xl'>Add Banner</p>
                                        <button className='p-3 rounded-full bg-[#e0babe] mb-4' onClick={closeAddPopup4}>
                                            <img src={crossX} alt='' className='h-[10px] w-[10px]' />
                                        </button>
                                    </div>
                                    <hr className='w-full' />
                                    <div className='px-6'>
                                        <div className='flex space-x-4 justify-center'>
                                            <div className='flex flex-col mt-8 mb-4 w-[48%]'>
                                                <label className='font-medium'>Banner Title</label>
                                                <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8]'
                                                    type="text"
                                                    name="title"
                                                    value={formData4.title}
                                                    onChange={handleChange4}
                                                    required />
                                            </div>
                                            <div className='flex flex-col mt-8 mb-4 w-[48%]'>
                                                <label className='font-medium'>Redirection URL</label>
                                                <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8]'
                                                    type="text"
                                                    name="url"
                                                    value={formData4.url}
                                                    onChange={handleChange4}
                                                    required />
                                            </div>
                                        </div>
                                        <div className='flex flex-col mt-8 mb-4'>
                                            <label className='font-medium'>Duration</label>
                                            <select className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8]'
                                                type="text"
                                                name="duration"
                                                value={formData4.duration}
                                                onChange={handleChange4}
                                                required >
                                                <option value="alwaysValid">Always valid</option>
                                                <option value="10">10 Days</option>
                                                <option value="15">15 Days</option>
                                                <option value="20">20 Days</option>
                                            </select>
                                        </div>
                                        <div >
                                            <label className='font-medium mb-2'>Banner Media</label>
                                            <div className='flex flex-row justify-center items-center w-full h-32 border-2 border-dashed  border-yellow-600 rounded-lg bg-[#FEFCE8]' onClick={() => document.querySelector(".input-field4").click()}>
                                                <input type='file' accept='video/*' className='input-field4'
                                                    onChange={({ target: { files } }) => {
                                                        files[0] && setFileName4(files[0].name)
                                                        if (files)
                                                            setImage4(URL.createObjectURL(files[0]))

                                                    }}
                                                    hidden></input>
                                                {image4 ?
                                                    <div>Uploaded {fileName4}</div> :
                                                    <div className='flex flex-col justify-center items-center'>
                                                        <div className='bg-yellow-500 w-12 h-12 rounded-full flex justify-center items-center'>
                                                            <FiUpload color='white' />
                                                        </div>
                                                        <div className='font-bold text-sm'>Upload File</div>
                                                        <div className='text-sm opacity-50'>Drag and drop files here</div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <div className='flex justify-center mt-6 mb-4'>
                                            <button className='bg-[#EAB308] p-2 w-[138px] h-10 rounded-[10px] ' type='submit' onClick={closeAddPopup4}>
                                                <div className='text-white text-[14px]'>Add Banner</div>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <div
                        className={`fixed inset-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg z-40 ${isDeletePopupOpen ? '' : 'hidden'
                            }`}
                    ></div> */}
                </div>
            </div>
        </div>
    )
}

export default AdminAppControl