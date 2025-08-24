import React, { useRef, useState } from 'react'
import { amazon, logo } from '../../assets'
import { FaLocationDot } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaSortDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Cart from '../../cart/Cart'
import { Link } from 'react-router';
import {allItems} from '../contantsAllSearch/Indexx'
import NavbarBottom from './NavbarBottom';



const Navbar = () => {
  const [showAll, setShowAll] = useState(false)

  return (
    <header className='fixed top-0 left-0 w-[100%] z-50 bg-black/40 backdrop-blur-sm '>
      <div className='flex bg-black/40 backdrop-blur-xl text-white'>
        
        {/* left */}
        <div className='flex ml-5  py-4  '>
          <div >
            <Link to="/" className=' '>
              <img src={amazon} alt="logo-amazon" className='p-1 h-[40px] w-[100px]  border border-transparent hover:border-b-white duration-200  ' />
            </Link>
          </div>
          <Link to="/" className='flex '>
            <div className='px-3  hidden md:flex items-center  border border-transparent hover:border-b-white duration-200'>

              <FaLocationDot className='mx-1 ' />

              <p className=' flex flex-col text-sm  ' >
                Deliver To
                <span className='text-sm font-extrabold '>
                  Eqypt
                </span>
              </p>
            </div>
          </Link>
        </div>




        {/*mid */}

        <div className="mt-4 mx-2 h-9 rounded-md flex flex-grow  relative bg-white">
          <span onClick={() => setShowAll(!showAll)} className='flex items-center absolute text-black px-1 rounded-l-lg my-auto text-sm bg-[#D1D5DB] h-full cursor-pointer'>All <span></span><FaSortDown /></span>
          {
              showAll && (
                <div>
                 
                  <ul className='absolute w-56 h-80 top-10 overflow-scroll overflow-x-hidden bg-white border-[1px] border-black text-black'>
                   {
                    allItems.map((item)=>(
                      <li
                      className='py-[2px] text-sm border-b-[1px] ml-1 font-semibold
                      border-b-transparent hover:border-b-black cursor-pointer'
                      key={item.id}>
                        
                         {item.title} </li>
                    )
                    )
                   }
                  </ul>
                </div>
              )




          }
          <input className='w-full rounded-lg  border border-none pl-11 outline-none text-black' type="text" />
          <Link to="/">

            <IoSearch className='text-black absolute right-0 h-full text-[30px] w-9 rounded-r-md bg-[#F3A847] px-1' />
          </Link>

        </div>


        {/* right */}

        <div className='flex mt-4 md:flex'>
          <Link to="/singin">
            <div className='flex '>
              <p className='flex flex-col text-sm items-center sml:hidden md:flex md:text-center md:text-[10px] xl:text-sm ' >
                Hello, sing in
                <span className=' hidden md:flex md:font-normal md:text-center md:text-[10px] xl:text-sm xl:font-extrabold  border border-transparent hover:border-b-white duration-200'>
                  Accounts & Lists
                  <FaSortDown className='text-white ml-1' />
                </span>

              </p>
            </div>

          </Link>
          <Link to="/" className='hidden md:flex mx-1'>
            <div >
              <p className='flex flex-col text-sm items-center  md:text-[10px]' >
                Returns
                <span className='  md:text-[10px] md:font-normal text-sm font-extrabold'>
                  &Orders
                </span>
              </p>
            </div>
          </Link>
          <div className=' relative   ' >
            <Link to="/Cart" className='flex mx-3 my-1 py-[1px] border border-transparent hover:border-b-white duration-200 mt-1'>
              <div className='flex items-center justify-center' >
                <FaCartShopping className='w-10 h-8' />
                <p className=' flex items-center font-normal'>Cart <span className='absolute top-2 left-7  text-black text-xs bg-[#FEBD69] h-4  p-1 font-semibold rounded-full flex items-center justify-center'>0</span></p>
                {/* <div className='absolute text-red-900 font-extrabold left-[30%] top-[3px]'>
                  19
                </div> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
          {/* navbarBottom */}
          <NavbarBottom />
     

    </header>
  )
}

export default Navbar