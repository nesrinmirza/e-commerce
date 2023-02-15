import {configureStore} from "@reduxjs/toolkit"
import { basketReducer } from "../reducer/basketreducer"
import { authReducer } from "../reducer/authreducer"
import { uniquecountReducer } from "../reducer/uniquecountreducer"


export const store = configureStore({
    reducer:{
       basket: basketReducer,
       auth: authReducer,
       uniquenumber: uniquecountReducer,
    }
})