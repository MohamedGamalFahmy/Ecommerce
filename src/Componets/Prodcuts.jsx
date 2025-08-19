import React from 'react'
import Cart from '../cart/Cart';

import { useLoaderData } from 'react-router';
import { useDispatch } from 'react-redux'
import { addToCart } from '../cart/CartSlice'


const Prodcuts = () => {
  const dispatch = useDispatch();
  const data = useLoaderData()
  const prodcut = data.data

  return (
    <div className=' relative grid sml:grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 text-wrap top-[-100px] z-30' >
      {prodcut.map((item) => (
        <>
          <div key={item.id} className='border m-5 bg-white text-wrap  sm:max-w-[100%] ' >
            <p className=' text-right'>{item.category}</p>

            <img src={item.image} alt="" className='w-[200px] h-[300px]  m-5 sml:mx-auto sm:mx-auto ' />
            <div className='flex items-center justify-between'>
              <p className='font-normal text-[16px] mx-2 '> {item.title.length > 25
                ? (item.title.substring(0, 21)) : item.title}  </p>
              <p className='my-2 text-gray-900 mx-2 font-extrabold' >{item.price} $</p>
            </div>
            <p className='mx-2 font-bold text-sm'> {item.description.length > 25
              ? (item.description.substring(0, 60)) : item.description}  </p>

            {/* <button className='bg-slate-500 w-[200px] py-2 my-2 md:mx-5 text-white rounded-xl sm:max-w-full sm:mx-0 ' > Add to Cart </button> */}
            <button
              onClick={() => dispatch(addToCart(item))}
            className='bg-slate-500 w-[200px] py-2 my-2 md:mx-5 text-white rounded-xl sm:max-w-full sm:mx-0 ' > Add to Cart </button>
          </div>
        </>


      ))}

    </div>
  )
}

export default Prodcuts
