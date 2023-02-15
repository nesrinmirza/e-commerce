import { createSlice } from "@reduxjs/toolkit";


const initialState={
    basketnumber:0,
}

const uniquecountSlice = createSlice({
    name: "unique",
    initialState,
    reducers:{
       setUniqueNumber:(state, {payload})=>{
        state.basketnumber=payload
       }
    }
})


export const uniquecountReducer = uniquecountSlice.reducer;
export const {setUniqueNumber}=uniquecountSlice.actions