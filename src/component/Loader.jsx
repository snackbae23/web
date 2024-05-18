import React from 'react';
import './Loader.css';

//image
import logo from '../assets/logo.png';

const Loader = () => {
  return (
    <div className='w-full h-[calc(100vh-70px)] flex flex-col justify-center items-center'>
      {/* <span className="loader"></span> */}
      <div className='flex items-center'>
        <img src={logo} alt="logo" />
        <p className='text-[1.2rem] font-Roboto font-[500]'>is Load<span className='text-[#FFD628]'>ing...</span></p>
      </div>
    </div>
  )
}

export default Loader