import React, { useState } from 'react'
import AdminLeftBar from '../Components/AdminLeftBar'
import AdminNav from '../Components/AdminNav'
import editIcon from "../assets/Edit.png"
import crossIcon from "../assets/delete.png"
import crossIcon2 from "../assets/cross.png"


const admins = [
    {
        adminId: "",
        name: "Adriene Watson",
        email: "adrienwatson82@gmail.com",
        contactNo: "+9123456786",
        designation: "Sales",
    },
    {
        adminId: "",
        name: "Adriene Watson",
        email: "adrienwatson82@gmail.com",
        contactNo: "+9123456786",
        designation: "Marketing",
    },
    {
        adminId: "",
        name: "Adriene Watson",
        email: "adrienwatson82@gmail.com",
        contactNo: "+9123456786",
        designation: "Sales",
    },
    {
        adminId: "",
        name: "Adriene Watson",
        email: "adrienwatson82@gmail.com",
        contactNo: "+9123456786",
        designation: "Marketing",
    },
    {
        adminId: "",
        name: "Adriene Watson",
        email: "adrienwatson82@gmail.com",
        contactNo: "+9123456786",
        designation: "Sales",
    },
    {
        adminId: "",
        name: "Adriene Watson",
        email: "adrienwatson82@gmail.com",
        contactNo: "+9123456786",
        designation: "Marketing",
    },
]

const admin = {
    adminId: "",
    name: "Adriene Watson",
    email: "adrienwatson82@gmail.com",
    contactNo: "+9123456786",
    designation: "Marketing",
};

const AdminControl = () => {

    const [searchInput, setSearchInput] = useState('');
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
    const [isEditPopUpOpen, setIsEditPopUpOpen] = useState(false);
    const [formData, setFormData] = useState({ admin });


    // const filteredAdmins = admins.filter((admin) => {
    //     const searchValue = searchInput.toLowerCase();
    //     return admin.AdminId.toLowerCase().includes(searchValue) || admin.name.toLowerCase().includes(searchValue);
    // });

    function openPopup(event) {
        const rect = event.target.getBoundingClientRect();
        const scrollTop = document.documentElement.scrollTop;
        setIsPopUpOpen(true);
        setPopupPosition({ x: rect.left, y: rect.bottom + scrollTop });
    }

    function closePopup() {
        setIsPopUpOpen(false);
    }

    function openEditPopup() {
        resetForm();
        setIsEditPopUpOpen(true);
    }

    function closeEditPopup() {
        setIsEditPopUpOpen(false);
    }

    function resetForm() {
        setFormData({ admin });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // console.log(value);
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        resetForm();
        closePopup();
        console.log(formData);
    }

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
                    <div className='w-full  flex justify-between'>
                        <div className='w-full flex justify-between m-4'>
                            <div className='font-roboto text-xl font-bold leading-6 mt-2'>Admin Control</div>
                            <div className='flex justify-center '>
                                <button className='bg-[#EAB308] p-2 w-[138px] h-10 rounded-[10px] ' onClick={openEditPopup}>
                                    <div className='text-white text-[14px]'>Add Admin</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=' h-fit bg-white p-5 m-4 rounded-md text-[1.1rem] font-semibold '>
                        <div>
                            <input
                                className='p-2 bg-[#F1EFEF] rounded-md w-[50%] h-10 mt-1 text-[.92rem] border-2'
                                type="text"
                                name="name"
                                placeholder='Search by ID, name'
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
                            />
                        </div>
                        <hr className='my-3' />
                        <div>
                            <table className='w-full'>
                                <thead>
                                    <tr className='text-[#718096]'>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Contact No</th>
                                        <th className='mr-4'>Designation</th>
                                        <th className='text-white'>Blank</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {admins.map((admin) => (
                                        <tr key={admin._id} className='text-[13px] text-[#3A3A49] font-normal leading-[16px] text-center h-[53px] border-solid border-[1px]'>
                                            <td className='text-center'>{admin.name}</td>
                                            <td className='text-center'>{admin.email}</td>
                                            <td className='text-center'>{admin.contactNo}</td>
                                            <td className='text-center'>{admin.designation}</td>
                                            <td className='text-center -translate-y-1'>
                                                <button className='text-4xl leading-5 h-5' onClick={openPopup}>
                                                    ...
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div
                            id='PopUp'
                            className={`w-[110px] h-fit bg-white rounded-[10px] shadow-inner fixed z-50  flex items-center justify-center
                            ${isPopUpOpen ? '' : 'hidden'}`}
                            style={{
                                top: `calc(${popupPosition.y}px - 10%)`,
                                left: `calc(${popupPosition.x}px - 5%)`
                            }}
                        >
                            <div className='flex flex-col justify-center items-center '>
                                <div className='flex flex-col justify-center w-[110px]'>
                                    <button
                                        className='bg-[#ece5a2] flex w-[98%] h-7 rounded-md items-center gap-2 leading-7 '
                                        onClick={openEditPopup}
                                    >
                                        <img src={editIcon} alt='' className='w-3 h-3 ml-2' />
                                        <div className='text-xl text-black font-normal'>Edit</div>
                                    </button>
                                    <hr className='m-1'></hr>
                                    <button
                                        className='bg-[#dc7c88] flex w-[98%] h-7 rounded-md items-center gap-2 leading-7 '
                                        onClick={closePopup}
                                    >
                                        <img src={crossIcon} alt='' className='w-3 h-3 ml-2' />
                                        <div className='text-xl text-black font-normal'>Delete</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-50 ${isEditPopUpOpen ? '' : 'hidden'}`}>
                            <div
                                id='Editpopup'
                                className={`w-[470px] h-fit bg-white rounded-[10px] shadow-inner fixed ml-[35%] top-[20%] inset-0 z-50  flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-50
                                                        ${isEditPopUpOpen ? '' : 'hidden'}`}
                            >
                                <form onSubmit={submitHandler}>
                                    <div className='flex justify-between px-6 pt-6 w-[470px]'>
                                        <p className='font-roboto font-semibold text-xl'>Add & Edit Admin</p>
                                        <button className='p-3 rounded-full bg-[#e0babe] mb-4' onClick={closeEditPopup}>
                                            <img src={crossIcon2} alt='' className='h-[10px] w-[10px]' />
                                        </button>
                                    </div>
                                    <hr className='w-full' />
                                    <div className='px-6'>
                                        <div className='flex gap-4 mt-6'>
                                            <div className='flex flex-col w-[48%]'>
                                                <label>Admin Name</label>
                                                <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8]' type="text" name="adminName" placeholder={admin.name} onChange={handleChange} />
                                            </div>
                                            <div className='flex flex-col w-[48%]'>
                                                <label >Admin Contact</label>
                                                <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8] ' type="text" placeholder={admin.contactNo} name="adminContact" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className='flex gap-4 mt-6'>
                                            <div className='flex flex-col w-[48%]'>
                                                <label>Admin Email</label>
                                                <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8]' type="text" name="adminEmail" placeholder={admin.email} onChange={handleChange} />
                                            </div>
                                            <div className='flex flex-col w-[48%]'>
                                                <label >Designation</label>
                                                <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8] ' type="text" placeholder={admin.designation} name="adminContact" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center mt-8 mb-8'>
                                        <button className='bg-[#EAB308] p-2 w-[138px] h-10 rounded-[10px] ' type='submit'>
                                            <div className='text-white text-[14px]'>Add Admin</div>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AdminControl