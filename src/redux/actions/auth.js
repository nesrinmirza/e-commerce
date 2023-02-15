import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { commerce } from "../../API/comerce";

export const signUp = createAsyncThunk("auth/signup", async (data, thunkAPI) => {
    try {
        const headers = {
            "X-Authorization": 'sk_493514998829392b39fb54be00d793721acc57f4b5bfe',
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        const body = {
            'email': data.email,
            'firstname': data.firstname,
            'lastname': data.lastname,
            'phone': data.phone,
        }
        const res = await axios.post('https://api.chec.io/v1/customers', body, { headers })
        console.log(res)
    } catch (error) {
        thunkAPI.rejectWithValue(error)
    }
})


export const login = createAsyncThunk("auth/login", async (data) => {
    try {
        const headers = {
            "X-Authorization": 'sk_493514998829392b39fb54be00d793721acc57f4b5bfe',
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        const body = {
            'email': data.email,
            'base_url': 'http://localhost:3000/confirm-user'
        }
        const res = await axios.post('https://api.chec.io/v1/customers/email-token', body, { headers })
        console.log(res)
        return res
    } catch (error) {
        console.log(error)
    }
})

export const getToken = createAsyncThunk("auth/getToken", async (token) => {
    try {
        const headers = {
            "X-Authorization": 'sk_493514998829392b39fb54be00d793721acc57f4b5bfe',
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        const body = {
            token
        }
        const res = await axios.post("https://api.chec.io/v1/customers/exchange-token", body, { headers })
        console.log(res)
        localStorage.setItem('commercejs_customer_id', res?.data?.customer_id);
        localStorage.setItem('commercejs_customer_token', res?.data?.jwt);
        // localStorage.setItem('status', res?.data?.jwt);
    } catch (error) {
        console.log(error)
    }
})

export const getCustomer = createAsyncThunk("auth/getCustomer", async (customer, thunkAPI) => {
    try {
        const url = new URL(
            `https://api.chec.io/v1/customers/${customer}`
        );
        const headers = {
            "X-Authorization": 'sk_493514998829392b39fb54be00d793721acc57f4b5bfe',
            "Content-Type": "application/json",
            "Accept": "application/json",
        };

        const data = await fetch(url, {
            method: "GET",
            headers: headers,
        }).then(response => response.json())
            .then(
                (data) => {
                    console.log(data);
                    return data
                })
        return data
    } catch (error) {
        thunkAPI.rejectWithValue(error)
    }
})


export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
        const data = await commerce.customer.logout();
        return data
    } catch (error) {
        thunkAPI.rejectWithValue(error)
    }
})

export const updateCustomer = createAsyncThunk("auth/update", async (data, thunkAPI) => {
    try {
        const headers = {
            "X-Authorization": 'sk_493514998829392b39fb54be00d793721acc57f4b5bfe',
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        const body = {
            'email': data?.email,
            'firstname': data?.firstname,
            'lastname': data?.lastname,
            'phone': data?.phone,
        }
        const res = await axios.put(`https://api.chec.io/v1/customers/${data?.id}`, body, { headers });
        return res;
    } catch (error) {
        thunkAPI.rejectWithValue(error)
    }
})




export const authActions = {
    signUp,
    login,
    getToken,
    getCustomer,
    logOut,
    updateCustomer
}