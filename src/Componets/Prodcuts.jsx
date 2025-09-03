import React, { useRef, useState } from 'react'
import Cart from '../cart/Cart';
import { FaCodeCompare } from "react-icons/fa6";
import { useLoaderData } from 'react-router';
import { useDispatch } from 'react-redux'
import { addToCart } from '../cart/CartSlice'
import { ImCart } from "react-icons/im";
import { GrFormView } from "react-icons/gr";
import { TbJewishStar } from "react-icons/tb";
import { TbJewishStarFilled } from "react-icons/tb";
import { MdAssistantDirection } from "react-icons/md";
import { incrementQuantity } from '../cart/CartSlice';


const Prodcuts = () => {
  const dispatch = useDispatch();
  const data = useLoaderData()
  const prodcut = data.data
  const [liked, setLiked] = useState({});
  const toggleWishlist = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

  };

  return (
    <div className=' relative grid sml:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 text-wrap top-[-100px] z-30' >
      {prodcut.map((item) => (


        

          <div key={item.id} className='border m-5 bg-white text-wrap  sm:max-w-[100%]   sml:hover:shadow-2xl ' >
            <p className=' text-right '>{item.category}</p>
            <div className="relative group 0 rounded-xl overflow-hidden ">
              <img src={item.image} alt="" className='w-[200px] h-[300px]  m-5 sml:mx-auto sm:mx-auto ' />
              <div
                className="absolute inset-0 flex items-end mt-3 flex-col
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div
                  className="absolute bottom-0 left-0 right-0 
               translate-y-full group-hover:translate-y-0
               bg-black border-t flex flex-col text-sm text-white
               transition-transform duration-1000 ease-in-out "
                >
                  <button className=" flex flex-row-reverse items-center gap-4 px-8 py-2  hover:bg-gray-700 text-right">
                    <FaCodeCompare className=' absolute right-0 w-[20px]  mr-1 text-sky-400 ' />
                    Compare</button>

                  <button className=" flex flex-row-reverse items-center gap-4 px-8 py-2  hover:bg-gray-700 text-right " onClick={() => dispatch(addToCart(item))}>
                    < ImCart className=' absolute right-0 w-[20px] mr-1   text-sky-400' />

                    Add to Cart</button>

                  <button className=" flex flex-row-reverse items-center gap-4 px-8 py-2  hover:bg-gray-700 text-right">
                    <MdAssistantDirection className=' absolute right-0 w-[20px] mr-1  text-sky-400' />

                    View Details</button>
                  <button onClick={() => toggleWishlist(item.id)} className=" flex flex-row-reverse items-center gap-4 px-8 py-2  hover:bg-gray-700 text-right">
                    {liked[item.id]

                      ?
                      <TbJewishStarFilled className=' absolute right-0 w-[20px] mr-1  text-sky-400' />
                      : <TbJewishStar className=' absolute right-0 w-[20px] mr-1 text-sky-400 ' />

                    }

                    {liked[item.id] ? "Added to Wish List" : "Add to Wish List"}

                  </button>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <p className='font-normal text-[16px] mx-2 '> {item.title.length > 25
                ? (item.title.substring(0, 21)) : item.title}  </p>
              <p className='my-2 text-gray-900 mx-2 font-extrabold' >{item.price} $</p>
            </div>
            <p className='mx-2 font-bold text-sm'> {item.description.length > 25
              ? (item.description.substring(0, 60)) : item.description}  </p>


            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    category: item.category,
                    img: item.image,
                    quanitity: 1,
                  })
                )
              }
              className="group relative left-[20%] overflow-hidden border border-indigo-600 mx-4 my-3 px-5 py-3 focus:outline-hidden focus:rounded-e-full  "  >
              <span
                className="absolute  left-0 inset-y-0  w-[2px] bg-indigo-600 transition-all group-hover:w-full "
              ></span>

              <span
                className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white "
              >
                Add to Cart
              </span>
            </button>


          </div>
        


      ))}

    </div>
  )
}

export default Prodcuts

