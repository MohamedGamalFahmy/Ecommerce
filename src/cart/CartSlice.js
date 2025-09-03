import { createSlice } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

const initialState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itmes = state.items.find((items) =>{items.id === action.payload.id})
      if (itmes) {
        itmes.quantity += action.payload.quantity;
      }else{
      state.items.push(action.payload);
      }
    },
    // increment quantity rom cart
    incrementQuantity: (state, action) => {
      const item = state.items.find((items) => items.id === action.payload);
      item.quanitity++;
    },
    // decrement quantity from cart

    decrementQuantity: (state, action) => {
      const item = state.items.find((items) => items.id === action.payload);
      if (item.quanitity === 1) {
        item.quanitity = 1;
      } else {
        item.quanitity--;
      }
    },

      removeFromCart: (state, action) => {
         console.log("جاري حذف المنتج:", action.payload);
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
      }
  }
});


export const { addToCart, removeFromCart, incrementQuantity ,decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer
