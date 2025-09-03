import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, incrementQuantity, decrementQuantity } from '../cart/CartSlice'
import { Link, Links } from 'react-router-dom'
import Home from "../Pages/Home"


const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  if (cartItems.length === 0) {
    return (
      <div className='container mx-auto px-4 py-8 mt-[110px]'>
        <div className="text-center">
          <h1>your Cart is Empty </h1>
          <p className='text-gray-500 mb-4' >
            Add Some Products Your Cart to see them hare
          </p>
          <Link to="/" className='inline-block bg-slate-200 py-2 px-4 hover:bg-zinc-500 rounded-lg hover:text-white'>
            Continue Shopping

          </Link>
        </div>
      </div>
    )
  }
  return (
    <div className='container mx-auto px-5 py-4 mt-[110px] '>
      <h2 className=' text-2xl font-bold mb-8'> Shopping Cart</h2>
      <div className=' grid grid-cols-1 lg:grid-cols-3 gap-3 '>
        <div className='lg:col-span-2 shadow-md p-4 rounded-md'>

          {cartItems.map((item) => (
            <div key={item.id} className=' flex items-center gap-4 p-4 border-b '>
              {/* <Link to={'/Prodcuts/${item.id}'}>
                  <img src={item.img} alt="" className='w-[100px] h-[100px] object-cover rounded' />
                </Link> */}

              <img src={item.img} alt="" className='w-[100px] h-[130px] object-cover rounded' />
              <div className='flex-1 px-2'>
                <p className='font-semibold'>{item.title}</p>
                <p className='text-zinc-400' > ${item.price} </p>
                <div className="bg-[#F0F2F2] flex justify-center items-center gap-2 w-36 py-1 mt-3 text-center drop-shadow-lg rounded-md">
                  <p className="text-base font-normal">Qty:</p>
                  <p
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300"
                  >
                    -
                  </p>
                  <p className="font-titleFont text-base font-semibold text-amazon_blue">
                    {item.quanitity}
                  </p>
                  <p
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300"
                  >
                    +
                  </p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-red-500 text-white px-3 py-1 mt-3 rounded hover:bg-red-700 ">
                  حذف
                </button>
                <div className='text-right'>
                  <p className='font-bold'>
                    ${(item.price*item.quanitity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))
          }
        </div>
        <div className='lg:col-span-1'>
          <div className='bg-white shadow-md rounded-md px-3'>
            <h2 className='text-2xl font-bold mb-4'> Order summary</h2>
            <div className=' space-y-2 mb-4'>
              <div className=' flex justify-between px-3'>
                <span>Sub Total </span>
                <span> ${totalPrice}</span>

              </div>
              <div className=' flex justify-between px-3'>
                <span>Shpping </span>
                <span> Free</span>
              </div>
              <div className=' flex justify-between border-t pt-2 font-bold px-3'>
                <span>Total </span>
                <span> ${totalPrice}</span>
              </div>
            </div >
            <div className='px-3 py-1'>
              <button className='w-full  p-2 bg-zinc-500 hover:bg-slate-600 rounded-xl hover:text-white'> Proceed to Checkout </button>

            </div>
          </div>

        </div>












      </div>
    </div>
  )







}

export default Cart