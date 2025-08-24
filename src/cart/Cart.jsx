import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../cart/CartSlice'


const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (

    <div className="p-6">
      <h2 className="text-xl font-bold mb-24 ">🛒 سلة المشتريات</h2>

      {cartItems.length === 0 ? (
        <p>السلة فاضية.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="border-b py-2">
            <h3 className="font-semibold">{item.title}</h3>
            <img src={item.image} alt="" className='w-[100px] h-[100px]  m-5 ' />

            <p className="text-sm text-gray-600">{item.price} جنيه</p>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              حذف
            </button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <div className="text-right mt-4 text-lg font-bold">
          الإجمالي: {totalPrice.toFixed(2)} جنيه
        </div>
      )}

    </div>
  )

}

export default Cart