import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalCount: 0, // 全ての商品数
  totalPrice: 0, // 合計価格
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
})

export default cartSlice.reducer
