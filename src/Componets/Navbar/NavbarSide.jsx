import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const NavbarSide = ({title,one,two,three}) => {
    return (
        <>
            <div>
                <h3 className=' mx-6 font-bold text-xl py-2'>
                    {title}</h3>
                <ul >
                    <li className='flex items-center justify-between mx-6 hover:bg-zinc-100 py-1 cursor-pointer '  >
                        {one} <span>
                        < MdOutlineKeyboardArrowRight />
                    </span>
                    </li>
                    <li className='flex items-center justify-between mx-6 hover:bg-zinc-100 py-1 cursor-pointer '  
                    >{two} <span>
                        < MdOutlineKeyboardArrowRight />
                    </span>
                    </li>
                    <li className='flex items-center justify-between mx-6 hover:bg-zinc-100 py-1 cursor-pointer '  >
                       {three} <span>
                        < MdOutlineKeyboardArrowRight />
                    </span>
                    </li>
                    <hr className='w-full bg-slate-50 my-4 ' />
                </ul>
            </div>

        </>
    )
}

export default NavbarSide