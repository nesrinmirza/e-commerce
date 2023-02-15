import { createSlice } from "@reduxjs/toolkit";
import { authActions } from '../actions/auth'

const { signUp, getToken, logOut, getCustomer, updateCustomer } = authActions

const initialState = {
  loading: false,
  isLogin: false || localStorage.getItem("isLogin"),
  error: false,
  user: {},
}


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginStatus: (state, { payload }) => {
      state.isLogin = payload;
    },
  },
  extraReducers: {
    [signUp.pending]: (state) => {
      state.loading = true;
      return state
    },
    [signUp.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false
      return state
    },
    [signUp.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.loading = false
      return state
    },

    // [getToken.pending]: (state) => {
    //   state.loading = true;
    //   return state
    // },
    // [getToken.rejected]: (state, { payload }) => {
    //   state.error = payload;
    //   state.loading = false
    //   return state
    // },
    [getToken.fulfilled]: (state) => {
      state.loading = false
      state.isLogin = true
      return state
    },
    [getCustomer.fulfilled]: (state, { payload }) => {
      state.user = payload
      state.isLogin = true
      return state
    },
    [logOut.fulfilled]: (state) => {
      state.isLogin = false
      // localStorage.setItem("isLogin", false)
      localStorage.removeItem("customer_id")
      localStorage.removeItem("jwt")
      localStorage.removeItem("token")
      return state
    },
    [updateCustomer.pending]: (state) => {
      state.loading = true;
      return state
    },
    [updateCustomer.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.data;
      return state
    },
  }
})
export const authReducer = authSlice.reducer
export const { setLoginStatus } = authSlice.actions