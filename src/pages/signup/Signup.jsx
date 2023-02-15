import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../../redux/actions/auth'
import { useForm, Controller } from 'react-hook-form'
import "./Signup.scss"
import { Link, useNavigate } from 'react-router-dom'
import facebook from "./fb.svg"
import google from "./google.svg"
import photo from "./photo.png"
import { useState } from 'react'
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Signup = () => {
  const { signUp } = authActions
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: {errors}, control} = useForm();
const navigate = useNavigate()
const [data, setData] = useState("")
const onSubmit = data => setData(data)

useEffect(()=>{
  if (data) {
    dispatch(signUp(data))
    navigate("/login")
  }
}, [signUp, dispatch, data, navigate])


return (
  <div className='signup-login'>
    <div className='register-wrapper'>
      <h1>Qeydiyyat</h1>
      <div className='social-media'>
        <div className='social-item'>
          <div className='facebook-btn' style={{ backgroundColor: "#4267B2", width: "40px", height: "32px" }}>
            <a href='https://www.facebook.com/login/identify?ctx=login&lwv=100'><img src={facebook} /></a>
          </div>
          <p>Facebook ilə</p>
        </div>
        <div className='social-item'>
          <div className='google-btn' style={{ backgroundColor: "#DB4437", width: "40px", height: "32px" }}>
            <a href='https://accounts.google.com/v3/signin/identifier?dsh=S1510814462%3A1674238506922941&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Fpli%3D1&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession'>
              <img src={google} /></a>
          </div>
          <p>Google ilə</p>
        </div>
      </div>
      <p style={{ color: "#BDBDBD" }}> və ya</p>
      <form className='form-inputs' onSubmit={handleSubmit(onSubmit)} >
        <div className='input-part'>
          <label>Ad</label>
          <input
            {...register("firstname", {
              required: "Adınızı daxil edin", minLength: {
                value: 3,
                message: "Min length is 3",
              }
            })} type="text" placeholder='Adınızı daxil edin' />
            <p style={{color:"red"}}>{errors?.firstname?.message}</p>
        </div>
        <div className='input-part'>
          <label>Soyad</label>
          <input {...register("lastname", {
            required: "Adınızı daxil edin!", minLength: {
              value: 3,
              message: "Min length is 3"
            }
          })} type="text" placeholder='Soyadınızı daxil edin' />
          <p style={{color:"red"}}>{errors?.lastname?.message}</p>
        </div>
        <div className='input-part'>
          <label>E-mail</label>
          <input {...register("email", { required: "Email ünvanınızı düzgün daxil edin!" })} type="email" placeholder='nümunə@gmail.com' />
          <p style={{color:"red"}}>{errors?.email?.message}</p>
        </div>
        <div className='input-part'>
          <label>Mobil nömrə</label>

          <Controller
          name="phone-input"
          control={control}
          rules={{
            validate: (value) => isValidPhoneNumber(value)
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              value={value}
              onChange={onChange}
              defaultCountry="AZ"
              id="phone-input"
            />
          )}
        />
        {errors["phone-input"] && (
          <p className="error-message" style={{color:"red"}}>Nömrəni düzgün daxil edin</p>
        )}
        </div>
        <div>
          <input {...register("checkbox",{required: "Əgər istifadəçi şərtləri ilə razısınızsa bu xana mütləq doldurulmalıdır."})} type="checkbox" />
          <label>İstifadəçi şərtləri ilə razıyam</label>
          <p style={{color:"red"}}>{errors?.checkbox?.message}</p>
        </div>
        <button>Qeydiyyat</button>
      </form>
      <p className='show-mob' >Artıq hesabınız var? <Link to="/login" style={{ color: "blue", textAlign: "center" }}>Daxil olun</Link> </p>
    </div>
    <div className='register-image'>
      <img src={photo} />
      <p className='show-browser' >Artıq hesabınız var? <Link to="/login" style={{ color: "blue", textAlign: "center" }}>Daxil olun</Link> </p>
    </div>
  </div>
)
}

export default Signup