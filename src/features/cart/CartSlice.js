import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
  items: cartItems,
  totalCount: cartItems.length, // 全ての商品数
  totalPrice: 0, // 合計価格
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      return {
        items: [],
        totalCount: 0,
        totalPrice: 0,
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      state.items = state.items.filter((item) => item.id !== itemId)
    },
    increase: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload)
      cartItem.count = cartItem.count + 1
    },
    decrease: (state, action) => {
      const cartItem = state.items.find((item) => item.id === action.payload)
      cartItem.count = cartItem.count - 1
    },
    calculateTotals: (state) => {
      let totalCount = 0
      let totalPrice = 0
      state.items.forEach((item) => {
        totalCount += item.count
        totalPrice += item.count * item.price
      })
      state.totalCount = totalCount
      state.totalPrice = totalPrice
    },
  },
})

// Action Creator
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions

export default cartSlice.reducer
