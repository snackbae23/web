import React, { useState } from 'react';
import AdminLeftBar from '../Components/AdminLeftBar';
import AdminNav from '../Components/AdminNav';
import left from "../assets/left.png"
import right from "../assets/right.png"
import editIcon from "../assets/Rectangle148.png"
import crossIcon from "../assets/cross.png"


const payments = [
    {
        customerName: "Souptik Das",
        PaymentId: "#ID23434",
        merchantName: "ReUnion Cafe",
        time: "9:30 AM",
        status: "Received",
        discount: "100",
        amount: "2031",
    },
    {
        customerName: "Souptik Das",
        PaymentId: "#ID23434",
        merchantName: "ReUnion Cafe",
        time: "9:30 AM",
        status: "Failed",
        discount: "100",
        amount: "2031",
    },
    {
        customerName: "Souptik Das",
        PaymentId: "#ID23434",
        merchantName: "ReUnion Cafe",
        time: "9:30 AM",
        status: "Received",
        discount: "100",
        amount: "2031",
    },
    {
        customerName: "Souptik Das",
        PaymentId: "#ID23434",
        merchantName: "ReUnion Cafe",
        time: "9:30 AM",
        status: "Failed",
        discount: "100",
        amount: "2031",
    },
    {
        customerName: "Souptik Das",
        PaymentId: "#ID23434",
        merchantName: "ReUnion Cafe",
        time: "9:30 AM",
        status: "Received",
        discount: "100",
        amount: "2031",
    },
    {
        customerName: "Souptik Das",
        PaymentId: "#ID23434",
        merchantName: "ReUnion Cafe",
        time: "9:30 AM",
        status: "Failed",
        discount: "100",
        amount: "2031",
    },
    {
        customerName: "Souptik Das",
        PaymentId: "#ID23434",
        merchantName: "ReUnion Cafe",
        time: "9:30 AM",
        status: "Received",
        discount: "100",
        amount: "2031",
    },
    {
        customerName: "Souptik Das",
        PaymentId: "#ID23434",
        merchantName: "ReUnion Cafe",
        time: "9:30 AM",
        status: "Failed",
        discount: "100",
        amount: "2031",
    },
    {
        customerName: "Souptik Das",
        PaymentId: "#ID23434",
        merchantName: "ReUnion Cafe",
        time: "9:30 AM",
        status: "Received",
        discount: "100",
        amount: "2031",
    },
    {
        customerName: "Souptik Das",
        PaymentId: "#ID23434",
        merchantName: "ReUnion Cafe",
        time: "9:30 AM",
        status: "Failed",
        discount: "100",
        amount: "2031",
    },
    {
        customerName: "Souptik Das",
        PaymentId: "#ID23434",
        merchantName: "ReUnion Cafe",
        time: "9:30 AM",
        status: "Received",
        discount: "100",
        amount: "2031",
    },
    {
        customerName: "Souptik Das",
        PaymentId: "#ID23434",
        merchantName: "ReUnion Cafe",
        time: "9:30 AM",
        status: "Failed",
        discount: "100",
        amount: "2031",
    },
    {
        customerName: "Souptik Das",
        PaymentId: "#ID23434",
        merchantName: "ReUnion Cafe",
        time: "9:30 AM",
        status: "Received",
        discount: "100",
        amount: "2031",
    },
    {
        customerName: "Souptik Das",
        PaymentId: "#ID23434",
        merchantName: "ReUnion Cafe",
        time: "9:30 AM",
        status: "Failed",
        discount: "100",
        amount: "2031",
    },
    {
        customerName: "Souptik Das",
        PaymentId: "#ID23434",
        merchantName: "ReUnion Cafe",
        time: "9:30 AM",
        status: "Received",
        discount: "100",
        amount: "2031",
    },
    {
        customerName: "Souptik Das",
        PaymentId: "#ID23434",
        merchantName: "ReUnion Cafe",
        time: "9:30 AM",
        status: "Failed",
        discount: "100",
        amount: "2031",
    },

]

const payouts = [
    {
        id: "#ID12345",
        merchantName: "ReUnion Cafe",
        location: "Salt Lake ersdtfhyjgesrdt",
        lastPayoutTime: "9:30 AM",
        lastPAyoutDate: "23 Dec 2024",
        payoutMethod: "Bank Transfer",
        balance: "2031",
    },
    {
        id: "#ID12346",
        merchantName: "ReUnion Cafe",
        location: "Salt Lake ersdtfhyjgesrdt er4ty dcfvgbhnjmk xtcyvgubhinjmk,l",
        lastPayoutTime: "9:30 AM",
        lastPAyoutDate: "23 Dec 2024",
        payoutMethod: "UPI",
        balance: "2031",
    },
    {
        id: "#ID12345",
        merchantName: "ReUnion Cafe",
        location: "Salt Lake ersdtfhyjgesrdt",
        lastPayoutTime: "9:30 AM",
        lastPAyoutDate: "23 Dec 2024",
        payoutMethod: "Bank Transfer",
        balance: "2031",
    },
    {
        id: "#ID12346",
        merchantName: "ReUnion Cafe",
        location: "Salt Lake ersdtfhyjgesrdt er4ty dcfvgbhnjmk xtcyvgubhinjmk,l",
        lastPayoutTime: "9:30 AM",
        lastPAyoutDate: "23 Dec 2024",
        payoutMethod: "UPI",
        balance: "2031",
    },
    {
        id: "#ID12345",
        merchantName: "ReUnico Cafe",
        location: "Salt Lake ersdtfhyjgesrdt",
        lastPayoutTime: "9:30 AM",
        lastPAyoutDate: "23 Dec 2024",
        payoutMethod: "Bank Transfer",
        balance: "2031",
    },
    {
        id: "#ID12346",
        merchantName: "ReUnion Cafe",
        location: "Salt Lake ersdtfhyjgesrdt er4ty dcfvgbhnjmk xtcyvgubhinjmk,l",
        lastPayoutTime: "9:30 AM",
        lastPAyoutDate: "23 Dec 2024",
        payoutMethod: "UPI",
        balance: "2031",
    },
]

const payoutRequests = [
    {
        id: "#ID12345",
        merchantName: "ReUnion Cafe",
        requesTime: "9:30 AM",
        requestDate: "23 Dec 2024",
        payoutMethod: "Bank Transfer",
        requestAmount: "2000",
        payoutAmount: "1920",
        charges: "4%",
        status: "Pending",
    },
    {
        id: "#ID12345",
        merchantName: "ReUniCo Cafe",
        requesTime: "9:30 AM",
        requestDate: "23 Dec 2024",
        payoutMethod: "Bank Transfer",
        requestAmount: "2000",
        payoutAmount: "1920",
        charges: "4%",
        status: "Approved",
    },
    {
        id: "#ID12345",
        merchantName: "ReUnion Cafe",
        requesTime: "9:30 AM",
        requestDate: "23 Dec 2024",
        payoutMethod: "Bank Transfer",
        requestAmount: "2000",
        payoutAmount: "1920",
        charges: "4%",
        status: "Pending",
    },
    {
        id: "#ID12345",
        merchantName: "ReUniCo Cafe",
        requesTime: "9:30 AM",
        requestDate: "23 Dec 2024",
        payoutMethod: "Bank Transfer",
        requestAmount: "2000",
        payoutAmount: "1920",
        charges: "4%",
        status: "Approved",
    },
    {
        id: "#ID12345",
        merchantName: "ReUnion Cafe",
        requesTime: "9:30 AM",
        requestDate: "23 Dec 2024",
        payoutMethod: "Bank Transfer",
        requestAmount: "2000",
        payoutAmount: "1920",
        charges: "4%",
        status: "Pending",
    },
    {
        id: "#ID12345",
        merchantName: "ReUniCo Cafe",
        requesTime: "9:30 AM",
        requestDate: "23 Dec 2024",
        payoutMethod: "Bank Transfer",
        requestAmount: "2000",
        payoutAmount: "1920",
        charges: "4%",
        status: "Approved",
    },
    {
        id: "#ID12345",
        merchantName: "ReUnion Cafe",
        requesTime: "9:30 AM",
        requestDate: "23 Dec 2024",
        payoutMethod: "Bank Transfer",
        requestAmount: "2000",
        payoutAmount: "1920",
        charges: "4%",
        status: "Pending",
    },
    {
        id: "#ID12345",
        merchantName: "ReUniCo Cafe",
        requesTime: "9:30 AM",
        requestDate: "23 Dec 2024",
        payoutMethod: "Bank Transfer",
        requestAmount: "2000",
        payoutAmount: "1920",
        charges: "4%",
        status: "Approved",
    },
    {
        id: "#ID12345",
        merchantName: "ReUnion Cafe",
        requesTime: "9:30 AM",
        requestDate: "23 Dec 2024",
        payoutMethod: "Bank Transfer",
        requestAmount: "2000",
        payoutAmount: "1920",
        charges: "4%",
        status: "Pending",
    },
    {
        id: "#ID12345",
        merchantName: "ReUniCo Cafe",
        requesTime: "9:30 AM",
        requestDate: "23 Dec 2024",
        payoutMethod: "Bank Transfer",
        requestAmount: "2000",
        payoutAmount: "1920",
        charges: "4%",
        status: "Approved",
    },

]

const payoutRequest = {
    merchantName: "John",
    payoutAmount: "1920",
    accountNumber: "1234567890",
    IFSC: "SBIN345678678",
    beneficiaryName: "ReUnion Cafe",
}

const AdminSales = () => {

    const [activeButton, setActiveButton] = useState('allPayments');
    const [searchInput, setSearchInput] = useState('');
    const [searchInput2, setSearchInput2] = useState('');
    const [searchInput3, setSearchInput3] = useState('');
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage2, setEntriesPerPage2] = useState(10);
    const [currentPage2, setCurrentPage2] = useState(1);
    const [entriesPerPage3, setEntriesPerPage3] = useState(10);
    const [currentPage3, setCurrentPage3] = useState(1);
    const [formData, setFormData] = useState({ payoutRequest });
    const [isPopupOpen, setIsPopupOpen] = useState(false);



    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const filteredPayments = payments.filter((payment) => {
        const searchValue = searchInput.toLowerCase();
        return payment.PaymentId.toLowerCase().includes(searchValue) || payment.merchantName.toLowerCase().includes(searchValue);
    });

    const filteredPayouts = payouts.filter((payout) => {
        const searchValue = searchInput2.toLowerCase();
        return payout.id.toLowerCase().includes(searchValue) || payout.merchantName.toLowerCase().includes(searchValue);
    });

    const filteredPayoutRequests = payoutRequests.filter((payoutRequest) => {
        const searchValue = searchInput3.toLowerCase();
        return payoutRequest.id.toLowerCase().includes(searchValue) || payoutRequest.merchantName.toLowerCase().includes(searchValue);
    });

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

    const handleEntriesPerPageChange3 = (e) => {
        setEntriesPerPage3(Number(e.target.value));
        setCurrentPage3(1);
    };

    const handlePageChange3 = (pageNumber) => {
        setCurrentPage3(pageNumber);
    };

    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;

    const totalPages = Math.ceil(filteredPayments.length / entriesPerPage);

    const startIndex2 = (currentPage2 - 1) * entriesPerPage2;
    const endIndex2 = startIndex2 + entriesPerPage2;

    const totalPages2 = Math.ceil(filteredPayouts.length / entriesPerPage2);

    const startIndex3 = (currentPage3 - 1) * entriesPerPage3;
    const endIndex3 = startIndex3 + entriesPerPage3;

    const totalPages3 = Math.ceil(filteredPayoutRequests.length / entriesPerPage3);

    function openPopup() {
        setIsPopupOpen(true);
    }

    function closePopup() {
        setIsPopupOpen(false);
        resetForm();
    }

    function resetForm() {
        setFormData({ payoutRequest });
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
        // console.log(formData);
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
                    <div className='w-full bg-slate-200 flex justify-between'>
                        <div className='flex gap-2 text-slate-500 mt-3 ml-4'>
                            <button
                                className={`rounded-full px-4 py-1 h-10 w-32 ${activeButton === 'allPayments' ? 'bg-black text-white' : 'bg-white'}`}
                                onClick={() => handleButtonClick('allPayments')}
                            >
                                All Payments
                            </button>
                            <button
                                className={`rounded-full px-4 py-1 h-10 ${activeButton === 'merchantBalances' ? 'bg-black text-white' : 'bg-white'}`}
                                onClick={() => handleButtonClick('merchantBalances')}
                            >
                                Merchant Balances
                            </button>
                            <button
                                className={`rounded-full px-4 py-1 h-10 w-fit ${activeButton === 'payoutRequest' ? 'bg-black text-white' : 'bg-white'}`}
                                onClick={() => handleButtonClick('payoutRequest')}
                            >
                                Payout Request
                            </button>
                            <button
                                className={`rounded-full px-4 py-1 h-10 ${activeButton === 'payoutHistory' ? 'bg-black text-white' : 'bg-white'}`}
                                onClick={() => handleButtonClick('payoutHistory')}
                            >
                                Payout History
                            </button>
                        </div>
                    </div>
                    <div
                        id='allPaymentsContent'
                        style={{ display: activeButton === 'allPayments' ? 'block' : 'none' }}
                        className='w-full h-fit bg-white p-5 mt-4 rounded-md text-[1.1rem] font-semibold'
                    >
                        <div className='flex justify-between'>
                            <div>
                                <input
                                    className='p-2 bg-[#F1EFEF] rounded-md w-[250%] h-10 mt-1 text-[.92rem] border-2'
                                    type="text"
                                    name="name"
                                    placeholder='Search by ID, restaurant name'
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
                                />
                            </div>
                            <div className='px-2 h-10 mt-1 text-[.92rem] border-2 bg-[#E7F7EF] rounded-md flex items-center mr-4'>
                                <p className='text-[#0CAF60] '>○ Live </p>
                            </div>
                        </div>
                        <hr className='my-2' />
                        {/* <div className='text-[#718096] flex w-full justify-between'>
                            <div className='w-[28%]'>Customer Name & Payment ID</div>
                            <div className='-translate-x-10'>Merchant</div>
                            <div className=' '>Time</div>
                            <div className=''>Status</div>
                            <div className=''>Discount Availed</div>
                            <div className='mr-4 '>Amount</div>
                        </div>
                        <hr className='my-3' />
                        <div>
                            {filteredPayments.slice(startIndex, endIndex).map((payment) => (
                                <div>
                                    <div key={payment._id} className='flex justify-between  text-[16px] text-[#111827]'>
                                        <div className='flex justify-center mx-[5%]'>
                                            <div className='flex flex-col pl-2'>
                                                <div className='text-[16px] text-[#111827] w-40'>
                                                    {payment.customerName}
                                                </div>
                                                <div className='text-[#718096] text-sm'>
                                                    {payment.PaymentId}
                                                </div>
                                            </div>
                                        </div>
                                        <p className='-translate-x-10'>{payment.merchantName}</p>
                                        <p className='-translate-x-10'>{payment.time}</p>
                                        <p className={`-translate-x-10 ${payment.status === 'Failed' ? 'text-[#FD4A65]' : 'text-[#49CC7D]'}`}>{payment.status}</p>
                                        <p className='-translate-x-10'>-{payment.discount}</p>
                                        <p className={`-translate-x-10 ${payment.status === 'Failed' ? 'text-[#FD4A65]' : 'text-[#49CC7D]'}`}>₹{payment.amount}</p>
                                    </div>
                                    <hr className='mb-3' />
                                </div>
                            ))}
                        </div> */}
                        {/* <div className='text-[#718096] flex w-full justify-between'>
                            <div className='w-[28%]'>Customer Name & Payment ID</div>
                            <div className='-translate-x-10'>Merchant</div>
                            <div className=' '>Time</div>
                            <div className=''>Status</div>
                            <div className=''>Discount Availed</div>
                            <div className='mr-4 '>Amount</div>
                        </div>
                        <hr className='my-3' /> */}
                        <div>
                            <table className='w-full'>
                                <thead>
                                    <tr className='text-[#718096]'>
                                        <th className=''>Customer Name & Payment ID</th>
                                        <th>Merchant</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                        <th>Discount Availed</th>
                                        <th className='mr-4'>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredPayments.slice(startIndex, endIndex).map((payment) => (
                                        <tr key={payment._id} className=' text-[16px] text-[#111827]'>
                                            <td className='flex justify-center mx-[5%]'>
                                                <div className='flex flex-col pl-2'>
                                                    <div className='text-[16px] text-[#111827] '>
                                                        {payment.customerName}
                                                    </div>
                                                    <div className='text-[#718096] text-sm'>
                                                        {payment.PaymentId}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='text-center'>{payment.merchantName}</td>
                                            <td className='text-center'>{payment.time}</td>
                                            <td className={`text-center ${payment.status === 'Failed' ? 'text-[#FD4A65]' : 'text-[#49CC7D]'}`}>{payment.status}</td>
                                            <td className='text-center'>-{payment.discount}</td>
                                            <td className={`text-center ${payment.status === 'Failed' ? 'text-[#FD4A65]' : 'text-[#49CC7D]'}`}>₹{payment.amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                    <div
                        id='merchantBalancesContent'
                        style={{ display: activeButton === 'merchantBalances' ? 'block' : 'none' }}
                        className='w-full h-fit bg-white p-5 mt-4 rounded-md text-[1.1rem] font-semibold'
                    >
                        <div className='flex justify-between'>
                            <div>
                                <input
                                    className='p-2 bg-[#F1EFEF] rounded-md w-[250%] h-10 mt-1 text-[.92rem] border-2'
                                    type="text"
                                    name="name"
                                    placeholder='Search by ID, restaurant name'
                                    value={searchInput2}
                                    onChange={(e) => setSearchInput2(e.target.value.toLowerCase())}
                                />
                            </div>
                        </div>
                        <hr className='my-2' />
                        <table className='w-full'>
                            <thead>
                                <tr className='text-[#718096]'>
                                    <th className='text-center'>Merchant Name</th>
                                    <th className='text-center'>Location</th>
                                    <th className='text-center'>Last Payout</th>
                                    <th className='text-center'>Payout Method</th>
                                    <th className='text-center '>Balance Amount</th>
                                </tr>
                            </thead>
                            <hr className='my-3' />
                            <tbody>
                                {filteredPayouts.slice(startIndex2, endIndex2).map((payout) => (
                                    <tr key={payout._id} className='text-[16px] text-[#111827]'>
                                        <td className='text-center'>{payout.merchantName}</td>
                                        <td className='w-[30%] text-center'>{payout.location}</td>
                                        <td className='text-center'>{`${payout.lastPayoutTime}/${payout.lastPAyoutDate}`}</td>
                                        <td className='text-center'>{payout.payoutMethod}</td>
                                        <td className='text-center text-[#00AD11]'>{`₹${payout.balance}`}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
                    </div>
                    <div
                        id='payoutRequestsContent'
                        style={{ display: activeButton === 'payoutRequest' ? 'block' : 'none' }}
                        className='w-full h-fit bg-white p-5 mt-4 rounded-md text-[1.1rem] font-semibold'
                    >
                        <div>
                            <div className='flex justify-between'>
                                <div>
                                    <input
                                        className='p-2 bg-[#F1EFEF] rounded-md w-[250%] h-10 mt-1 text-[.92rem] border-2'
                                        type="text"
                                        name="name"
                                        placeholder='Search by ID, restaurant name'
                                        value={searchInput3}
                                        onChange={(e) => setSearchInput3(e.target.value.toLowerCase())}
                                    />
                                </div>
                            </div>
                            <hr className='my-2' />
                            <div>
                                <table className='w-full'>
                                    <thead>
                                        <tr className='text-[#718096]'>
                                            <th className=''>Merchant Name</th>
                                            <th>Payout Method</th>
                                            <th>Request Amount</th>
                                            <th>Charges</th>
                                            <th>Payout Amount</th>
                                            <th className='mr-4'>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredPayoutRequests.slice(startIndex3, endIndex3).map((payoutRequest) => (
                                            <tr key={payoutRequest._id} className=' text-[16px] text-[#111827]'>
                                                <td className='flex justify-center mx-[5%]'>
                                                    <div className='flex flex-col pl-2'>
                                                        <div className='text-[16px] text-[#111827] '>
                                                            {payoutRequest.merchantName}
                                                        </div>
                                                        <div className='text-[#718096] text-sm'>
                                                            {payoutRequest.requesTime}/ {payoutRequest.requestDate}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='text-center'>{payoutRequest.payoutMethod}</td>
                                                <td className='text-center'>{payoutRequest.requestAmount}</td>
                                                <td className='text-center'>{payoutRequest.charges}</td>
                                                <td className='text-center'>{payoutRequest.payoutAmount}</td>
                                                <td className=''>
                                                    <div className='flex gap-4 justify-center items-center'>
                                                        <div
                                                            className={`rounded-lg w-24 h-8 text-center flex items-center justify-center 
                                            ${payoutRequest.status === 'Pending' ? 'bg-[#F1EFEF] ' :
                                                                    payoutRequest.status === 'Approved' ? 'bg-[#bdd3c1] text-[#3A974C]' : 'bg-[#979797] font-medium'
                                                                }`}
                                                        >
                                                            {payoutRequest.status}
                                                        </div>
                                                        {payoutRequest.status === 'Pending' && (
                                                            <button className='p-3 rounded-full bg-[#F1EFEF] mb-4 flex items-center translate-y-2' onClick={openPopup}>
                                                                <img alt='' src={editIcon} className='w-[14px] h-[14px]' />
                                                            </button>
                                                        )}
                                                        {payoutRequest.status !== 'Pending' && (
                                                            <div className='p-5 rounded-full bg-white mb-4 '>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className='flex justify-between mt-4'>
                                    <div>
                                        <label>Show result:</label>
                                        <select
                                            className='ml-2'
                                            value={entriesPerPage3}
                                            onChange={handleEntriesPerPageChange3}
                                        >
                                            <option value={5}>5</option>
                                            <option value={10}>10</option>
                                            <option value={20}>20</option>
                                            <option value={50}>50</option>
                                        </select>
                                    </div>
                                    <div className="flex ">
                                        <button
                                            onClick={() => handlePageChange3(currentPage3 - 1)}
                                            disabled={currentPage3 === 1}
                                        >
                                            <img src={left} alt='' />
                                        </button>
                                        <div
                                            className=""
                                            value={currentPage3}
                                        >

                                            {Array.from({ length: totalPages3 }, (_, index) => (
                                                <button
                                                    key={index + 1}
                                                    value={index + 1}
                                                    className={`w-10 h-10 mx-2 rounded-xl ${currentPage3 === index + 1 ? 'bg-[#eacd76]' : 'bg-white'}`}
                                                    onClick={(e) => handlePageChange3(Number(e.target.value))}
                                                >
                                                    {index + 1}
                                                </button>
                                            ))}
                                        </div>
                                        <button
                                            onClick={() => handlePageChange3(currentPage3 + 1)}
                                            disabled={currentPage3 === totalPages3}
                                        >
                                            <img src={right} alt='' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={`fixed inset-0 z-50 flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-50 ${isPopupOpen ? '' : 'hidden'}`}>
                        <div
                            id='popup'
                            className={`w-[470px] h-fit bg-white rounded-[10px] shadow-inner fixed ml-[35%] top-[20%] inset-0 z-50  flex items-center justify-center backdrop-filter backdrop-blur-lg bg-opacity-50
                            ${isPopupOpen ? '' : 'hidden'}`}
                        >
                            <form onSubmit={submitHandler}>
                                <div className='flex justify-between px-6 pt-6 w-[470px]'>
                                    <p className='font-roboto font-semibold text-xl'>Approve Payment</p>
                                    <button className='p-3 rounded-full bg-[#e0babe] mb-4' onClick={closePopup}>
                                        <img src={crossIcon} alt='' className='h-[10px] w-[10px]' />
                                    </button>
                                </div>
                                <hr className='w-full' />
                                <div className='px-6'>
                                    <div className='flex gap-4 mt-6'>
                                        <div className='flex flex-col w-[48%]'>
                                            <label>Merchant Name</label>
                                            <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8]' type="text" name="merchantName" placeholder={payoutRequest.merchantName} />
                                        </div>
                                        <div className='flex flex-col w-[48%]'>
                                            <label >Payout Amount</label>
                                            <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#F7F7F8] ' type="text" placeholder={payoutRequest.payoutAmount} name="payoutAmount" />
                                        </div>
                                    </div>
                                    <div className='flex flex-col mt-8'>
                                        <label className='font-medium'>Account Number</label>
                                        <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#ffffff]' type="text" name="accountNumber"  onChange={handleChange} />
                                    </div>
                                    <div className='flex flex-col mt-4'>
                                        <label className='font-medium'>IFSC Code</label>
                                        <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#ffffff]' type="text" name="IFSC"  onChange={handleChange} />
                                    </div>
                                    <div className='flex flex-col mt-4'>
                                        <label className='font-medium'>Beneficiary Name</label>
                                        <input className='px-2  rounded-md h-10 mt-1 text-[.92rem] border-2 bg-[#ffffff]' type="text" name="beneficiaryName"  onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='flex justify-center mt-8 mb-8'>
                                    <button className='bg-[#EAB308] p-2 w-[138px] h-10 rounded-[10px] ' onClick={submitHandler}>
                                        <div className='text-white text-[14px]'>Approve Payout</div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSales