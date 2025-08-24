import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import NavbarSide from './NavbarSide';
import { FaWindowClose } from "react-icons/fa";
import {motion} from "framer-motion"



const NavbarBottom = () => {
    const ref=useRef();
    const [sideBar, setSideBar] = useState(false)
    useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
            if(e.target.contains(ref.current))
                setSideBar(false)
        })

    },[ref,sideBar])

    return (
        <>
            {/* star navbarbottom */}
            <div className='text-white flex items-center text-base space-x-5 bg-black  cursor-pointer py-1   '>

                <ul className=' flex'>
                    <li onClick={() => setSideBar(!sideBar)} className='flex items-center ml-5 text-base space-x-1 border border-transparent hover:border-b-white duration-200'>< MdOutlineMenu /> All </li>

                    <li className='hidden md:flex items-center ml-5 text-base space-x-1 border border-transparent hover:border-b-white duration-200'>Today's Deals </li>

                    <li className='hidden md:flex items-center ml-5 text-base space-x-1 border border-transparent hover:border-b-white duration-200'>Customer Service </li>

                    <li className='hidden md:flex items-center ml-5 text-base space-x-1 border border-transparent hover:border-b-white duration-200'>Gift Cards  </li>
                    <li className='hidden md:flex items-center ml-5 text-base space-x-1 border border-transparent hover:border-b-white duration-200'>Registry</li>
                    <li className='hidden md:flex items-center ml-5 text-base space-x-1 border border-transparent hover:border-b-white duration-200'>Sell</li>
                </ul>
            </div>
            {/* end navbarbottom */}
            {/* star side Nav*/}
            {
                sideBar && (
                    <div className='w-full h-screen text-balck fixed top-4 bg-black bg-opacity-50'>
                        <div className='w-full h-full relative' >
                            <motion.div ref={ref} initial={{x:-500,opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:.7}} className='w-[350px] h-full bg-white border border-black'>
                                <div className='w-full bg-[#232F3E] text-white flex items-center px-5 py-2 gap-4'>
                                    < FaUserCircle className='text-2xl' />
                                    <h3 className='text-lg font-bold tracking-wide '  >Hello, Sign In</h3>
                                </div>
                                <NavbarSide
                                    title="Digital Content & Devices"
                                    one="Amazon Music"
                                    two="Kindle E-readers & Books"
                                    three="Amazon Appstore"
                                />
                                <NavbarSide
                                    title="Shop By Department"
                                    one="Electronics"
                                    two="Computers"
                                    three="Smart Home"
                                />
                                <NavbarSide
                                    title="Shop By Department"
                                    one="Gift Cards"
                                    two="Amazon live"
                                    three="International Shopping"
                                />
                                <NavbarSide
                                    title="Help & Settings"
                                    one="Your Account"
                                    two="Customer Service"
                                    three="Contact us"
                                />
                                    <span 
                               on onClick={()=>setSideBar(false)} className='cursor-pointer absolute top-0 left-[302px] text-5xl  text-white flex items-center 
                            hover:text-red-600  duration-300'> <FaWindowClose/></span>
                            </motion.div>
                          
                        </div>

                    </div>
                )
            }

            {/* End side Nav*/}
        </>
    )
}

export default NavbarBottom