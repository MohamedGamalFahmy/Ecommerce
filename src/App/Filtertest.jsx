
<secton className='container mx-auto  flex flex-row justify-between  h-full mt-[120px]  '>

  {cartItems.length === 0 ? (
    <p>السلة فاضية.</p>
  ) : (
    cartItems.map((item, index) => (
          <div className=' grid grid-cols-5 w-full  gap-14 '>

        <div className=' col-span-4 bg-slate-100  h-[100vh] w-full '>
          <div className='relative m-5'>
            <div className=" absolute text-right">
              <h1 className='text-3xl font-bold '>Shopping Cart</h1>
            </div>
             <img src={item.img} alt="" className='w-[100px] h-[100px]  m-5 ' />
            
                        <h3 className="font-semibold">{item.title}</h3>
            
                        <p className="text-sm text-gray-600">{item.price} جنيه</p>
                        <div className="bg-[#F0F2F2] flex justify-center items-center gap-2 w-36 py-1 text-center drop-shadow-lg rounded-md">
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
                          className="bg-red-500 text-white px-3 py-1 mt-3 rounded"
                        >
                          حذف
                        </button>
                      </div>
            <div className=" absolute right-0 ">
              <h1 className=' text-3xl font-bold'>Subtotl</h1>
            </div>
            <div className='flex flex-col border '> </div>
          </div>
        </div>
    ))
    )}

        <div className=' grid grid-cols-1 w-[200px] h-[200px] border bg-slate-100 p-2'>
          Your order qualifies for FREE Shipping Choose this option at checkout. See details....

          Total:
        </div>

      

</secton>
  {/* <div className="p-6">
      <h2 className="text-xl font-bold mb-20 ">🛒 سلة المشتريات</h2>

      {cartItems.length === 0 ? (
        <p>السلة فاضية.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="border-b py-2">
            <img src={item.img} alt="" className='w-[100px] h-[100px]  m-5 ' />

            <h3 className="font-semibold">{item.title}</h3>

            <p className="text-sm text-gray-600">{item.price} جنيه</p>
            <div className="bg-[#F0F2F2] flex justify-center items-center gap-2 w-36 py-1 text-center drop-shadow-lg rounded-md">
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
              className="bg-red-500 text-white px-3 py-1 mt-3 rounded"
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

    </div> */}