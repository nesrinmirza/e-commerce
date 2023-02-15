import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../../redux/actions/auth'
import { useForm } from 'react-hook-form'
import { Link ,useNavigate} from 'react-router-dom'
import facebook from "../signup/fb.svg"
import google from "../signup/google.svg"
import photo from "../signup/photo.png"



const Login = () => {
  const { login } = authActions
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
const navigate = useNavigate()


  function loginHandler(data) {
    dispatch(login(data))
    .then((data)=>{
      navigate("/checkemail")
      localStorage.setItem("isLogin", true)
    })
  }
  const loginn = localStorage.getItem("isLogin")

  

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
        <form className='form-inputs' onSubmit={handleSubmit((data) => { loginHandler(data) })} >
          <div className='input-part'>
            <label>E-mail</label>
            <input {...register("email", { required: "This is required" })} type="email" placeholder='nümunə@gmail.com' />
          </div>
          <button onClick={loginHandler}>Daxil ol</button>
        </form>
        <p className='show-mob' >Hesabınız yoxdur? <Link to="/signup" style={{ color: "blue", textAlign: "center" }}>Qeydiyyatdan keçin</Link> </p>
      </div>
      <div className='register-image'>
        <img src={photo} />
        <p className='show-browser'>Hesabınız yoxdur?<Link to="/signup" style={{ color: "blue", textAlign: "center" }}>Qeydiyyatdan keçin</Link> </p>
      </div>
    </div>
  )
}

export default Login