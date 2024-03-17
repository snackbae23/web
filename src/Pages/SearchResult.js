import React from 'react'
import Navbar1 from '../Components/Navbar1'
import bgImg from "../assets/homeHero.png"
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const SearchResult = () => {

    const Menu=[
        {
            id:1,
            category:"ROOFTOP CAFE",
            distance:"2 km"
        },
        {
            id:2,
            category:"PUBS",
            distance:"5 km"
        },
        {
            id:3,
            category:"NEARBY",
            distance:"6 km"
        },
        {
            id:1,
            category:"ROOFTOP CAFE",
            distance:"2 km"
        },
        {
            id:2,
            category:"PUBS",
            distance:"5 km"
        },
        {
            id:3,
            category:"NEARBY",
            distance:"6 km"
        },
        {
            id:1,
            category:"ROOFTOP CAFE",
            distance:"2 km"
        },
        {
            id:2,
            category:"PUBS",
            distance:"5 km"
        },
        {
            id:3,
            category:"NEARBY",
            distance:"6 km"
        },
        {
            id:1,
            category:"ROOFTOP CAFE",
            distance:"2 km"
        },
        {
            id:2,
            category:"PUBS",
            distance:"5 km"
        },
        {
            id:3,
            category:"HOOKAH",
            distance:"6 km"
        },
        
    ]

    const filterItem =(categITem)=>{
        const updateItem =Menu.filter((curElem)=>{
            return curElem.category === categITem;
        })
        setitems(updateItem);
    }
    
    const [items,setitems]=useState(Menu);
    //form of hero section
    const [searchValue, setSearchValue] = useState('');

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('Search term:', searchValue);
            // You can perform additional actions here, such as triggering a search
        }
    };

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };
    return (
        <div className='w-full h-fit'>
            <Navbar1 />

            {/* hero section */}
            <div className='w-full h-[95vh] relative '>
                <img src={bgImg} className='h-full md:object-fill absolute top-0 z-[-1]' alt='heroImage'></img>
                <div className='md:w-[80%] w-full absolute top-[50%] left-[10%] translate-x-[-10%] translate-y-[-50%] '>
                    <p className='md:w-[50%] w-full text-[3.6rem] md:text-[4.8rem] text-white tracking-tighter leading-[100px]'>
                        Planning for your <span className='text-[#FFD601]'>next Dining ?</span></p>

                    {/* input */}
                    <div className='mt-[1rem] md:w-[55%] sm:w-[75%] w-full'>
                        <div className="relative flex items-center w-full ">
                            <AiOutlineSearch className="absolute left-4 text-gray-300 text-[1.2rem]" />
                            <input
                                type="text"
                                id="searchInput"
                                placeholder="Embark on your search adventure!"
                                className=" pl-12  w-full h-[3.6rem] border rounded-md  bg-[#FFFFFF33]  text-gray-100 text-[1.1rem] "
                                value={searchValue}
                                onChange={handleChange}
                                onKeyDown={handleKeyPress}
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Button for filter */}

            <div className='flex mt-5 font-semibold justify-evenly p-1 text-[1.2rem]  '>
                <NavLink className=' px-4 py-1 rounded-md border-2 border-slate-400' onClick={()=>{setitems(Menu)}}>All</NavLink>
                <NavLink className=' px-4 py-1 rounded-md border-2 border-slate-400' onClick={()=> filterItem('ROOFTOP CAFE')}>ROOFTOP CAFE</NavLink>
                <NavLink className=' px-4 py-1 rounded-md border-2 border-slate-400' onClick={()=> filterItem('PUBS')}>PUBS</NavLink>
                <NavLink className=' px-4 py-1 rounded-md border-2 border-slate-400' onClick={()=> filterItem('PET FRIENDLY')}>PET FRIENDLY</NavLink>
                <NavLink className=' px-4 py-1 rounded-md border-2 border-slate-400' onClick={()=> filterItem('NEARBY')}>NEARBY</NavLink>
                <NavLink className=' px-4 py-1 rounded-md border-2 border-slate-400' onClick={()=> filterItem('COUPLES')}>COUPLES</NavLink>
                <NavLink className=' px-4 py-1 rounded-md border-2 border-slate-400' onClick={()=> filterItem('FIND DINING')}>FIND DINING</NavLink>
                <NavLink className=' px-4 py-1 rounded-md border-2 border-slate-400' onClick={()=> filterItem('HOOKAH')}>HOOKAH</NavLink>
            </div>


            {/* CARDS */}
            <div className='grid md:grid-cols-3 grid-cols-2 p-5 mt-5 gap-4'>
                
                {
                    items.map((elem)=>{
                        return(
                            <div className='md:h-[350px] h-[300px] flex flex-col rounded-md relative shadow-xl'>
                    <img className='absolute right-6 top-6 size-8' src='/Fav icon.png'></img>
                    <img className='absolute w-[150px] h-[80px] top-2 -left-5' src='/Group 15.png'></img>
                    <div className='absolute bg-yellow-400 w-[38%] h-[65px] md:top-[164px] top-[130px] rounded-r-md  flex flex-col items-center justify-center'>
                        <div className='flex'>
                            <img src='/Frame 26.png'></img>
                            <p className='font-bold'>4689+</p>
                        </div>
                        <p className='font-semibold'>Recommendation</p>
                    </div>
                    
                    <img className=' h-[230px] object-fit'  src='/image 5.png' alt='image food'></img>
                   

                    <div className='mt-2 px-2' >
                        <div className='border-b-2 '>
                            <div className='  flex justify-between'>
                                <p className='font-bold text-[1.15rem]'>Chowman - Salt Lake</p>
                                <p className='px-4 py-1 rounded-md border-2'>{elem.distance}</p>
                            </div>
                            <p>Asian ,Chinese ,Find dining</p>
                        </div>

                        <div className='flex items-center mt-5 font-serif '>
                        <CiLocationOn className='text-[1.6rem]' />
                        <p className='ml-3'> Salt Lake , Sector 2</p>
                           
                        </div>


                    </div>
                </div>
                        )
                    })
                }

                

               
             
            </div>
        </div>
    )
}

export default SearchResult