import { Route, Routes, Navigate} from "react-router-dom"
import { useEffect } from "react";
import "./index.css";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import Products from "./pages/Products/Products";
import Productdetail from "./pages/EachProduct/Productdetail";
import Basket from "./pages/Basket/Basket";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Confirm from "./pages/confirm/Confirm";
import Profile from "./pages/Profile/Profile";
import Checkemail from "./pages/Checkemail/Checkemail";
import { commerce } from './API/comerce';
import {setLoginStatus} from './redux/reducer/authreducer'
import {useDispatch, useSelector} from 'react-redux'


function App() {
  const login = useSelector((state)=>state.auth.isLogin)
  const dispatch = useDispatch()

useEffect(()=>{
  dispatch(setLoginStatus(commerce.customer.isLoggedIn()))
}, [])


  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Products />} />
          <Route path="/product/:idname" element={<Productdetail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/signup" element={login ? ( <Navigate replace to={"/"} /> ) :(<Signup />)} />
          <Route path="/login" element={login ? ( <Navigate replace to={"/"} /> ) :(<Login />)} />
          <Route path="/login" element={<Login/>} />
          <Route path="/confirm-user/:token" element={<Confirm />} />
          {/* <Route path="/profile" element={<Profile/>} /> */}
          <Route path="/profile" element={login ? (<Profile />) : <Navigate replace to={"/login"} /> } />
          <Route path="/checkemail" element={<Checkemail />} />
        </Route>

    
      </Routes>
    </>
  );
}

export default App;
