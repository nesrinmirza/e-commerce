import React, { useEffect, useState } from 'react'
import { getCustomer, logOut, updateCustomer } from '../../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import "./Profile.scss"
import { useNavigate } from 'react-router-dom'
import logout from "./profileimgs/log-out.svg"
import basket from "./profileimgs/basket.svg"
import fav from "./profileimgs/img2.svg"
import profile from "./profileimgs/img3.svg"
import loc from "./profileimgs/img4.svg"
import shopping from "./profileimgs/shopping.svg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useForm } from 'react-hook-form'



const Profile = () => {
  const customer = localStorage.getItem("commercejs_customer_id")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const data = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const [person, setPerson] = useState(null)
  const { register, formState: { errors } } = useForm();


  useEffect(() => {
    if (customer) {
      dispatch(getCustomer(customer))
    }
  }, []);

  useEffect(() => {
    if (loading) {
      setPerson(null);
    }
  }, [loading]);


  function handleSubmit(e) {
    e.preventDefault()
    if (data) {
      dispatch(updateCustomer(person))
    }
  }


  function logoutHandler() {
    dispatch(logOut(customer))
      .then((data) => {
        localStorage.setItem("isLogin", false)
        navigate("/login")
      })
  }

  return (
    <Tabs>
      <TabList>
        <h1>Profilim</h1>
        <Tab >
          <div className='profile-item'>
            <img src={profile} />
            <p>Şəxsi məlumatlar</p>
          </div>

        </Tab>
        <Tab>
          <div className='profile-item'>
            <img src={basket} />
            <p>Sifarişlərim</p>
          </div>

        </Tab>
        <Tab >
          <div className='profile-item'>
            <img src={fav} />
            <p>Favorilərim</p>
          </div>

        </Tab>

        <Tab >
          <div className='profile-item' >
            <img src={loc} />
            <p>Çatdırılma ünvanı</p>
          </div>

        </Tab>
        <Tab>
          <div className='profile-item' onClick={logoutHandler}>
            <img src={logout} />
            <p>Çıxış</p>
          </div>
        </Tab>
      </TabList>
      <TabPanel className='personal-information'>
        <h1>Şəxsi məlumatlar</h1>
        <form onSubmit={handleSubmit}>
          <div className='PI'>
            <div className='PI-left'>
              <div className='PI-item'>
                <label htmlFor="firstname">Ad</label>
                <input
                  disabled={loading}
                  {...register("firstname", {
                    required: "This is required", minLength: {
                      value: 3,
                      message: "Min length is 3",
                    }
                  })} type="text" placeholder='Adınızı daxil edin' defaultValue={data?.firstname}
                  onChange={e => { setPerson({ ...data, firstname: e.target.value }) }} />
                <p style={{ color: "red" }}>{errors?.firstname?.message}</p>
              </div>
              <div className='PI-item'>
                <label>E-mail</label>
                <input
                  disabled={loading} {...register("email", { required: "Email ünvanınızı düzgün daxil edin!" })} defaultValue={data?.email}
                  onChange={e => { setPerson({ ...data, email: e.target.value }) }} type="email" placeholder='nümunə@gmail.com' />
                <p style={{ color: "red" }}>{errors?.email?.message}</p>
              </div>
            </div>
            <div className='PI-right'>
              <div className='PI-item'>
                <label>Soyad</label>
                <input
                  disabled={loading} {...register("lastname", {
                    required: "Soyadınızı daxil edin", minLength: {
                      value: 3,
                      message: "Min length is 3"
                    }
                  })} defaultValue={data?.lastname}
                  onChange={e => { setPerson({ ...data, lastname: e.target.value }) }} type="text" placeholder='Soyadınızı daxil edin' />
                <p style={{ color: "red" }}>{errors?.lastname?.message}</p>
              </div>
              <div className='PI-item'>
                <label>Mobil nömrə</label>
                <input
                  disabled={loading} {...register("phone", { required: "This is required" })} type="tel" id='phone' name='phone' pattern="[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}" defaultValue={data?.phone}
                  onChange={e => { setPerson({ ...data, phone: e.target.value }) }} placeholder='055 000 00 00' required />
              </div>
            </div>
          </div>
          <button disabled={person === null}>Məlumatları yenilə</button>
        </form>
      </TabPanel>
      <TabPanel>
        <h1>Sifarişlərim</h1>
        <div className='order-item'>
          <img src={shopping} style={{ width: "100px", height: "100px" }} />
          <p>Səbətinizdə hazırda heç bir sifarişiniz yoxdur</p>
        </div>
      </TabPanel>
      <TabPanel>
        <h1>Favorilerim</h1>
      </TabPanel>

      <TabPanel>
        <h1>Catdirilma unvani</h1>
      </TabPanel>
      <TabPanel>
        Reylerim
      </TabPanel>
    </Tabs>
  )
}

export default Profile