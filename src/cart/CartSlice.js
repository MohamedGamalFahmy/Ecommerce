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
      state.items.push(action.payload)
    },

      removeFromCart: (state, action) => {
         console.log("جاري حذف المنتج:", action.payload);
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
      }
  }
});


export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer
