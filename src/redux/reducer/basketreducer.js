import { createSlice } from "@reduxjs/toolkit";




const basketSlice = createSlice({
  name: "basket",
  initialState: 1,
  reducers: {
    increment: (state) => {
      state++
      return state
    },
    decrement: (state) => {
      if (state == 1) {
        return state
      }
      else {
        state--
        return state
      }

    }
  }
})


export const basketReducer = basketSlice.reducer;
export const { increment, decrement } = basketSlice.actions;