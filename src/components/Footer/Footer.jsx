import React from 'react'
import "../Footer/Footer.scss"
import logo from "./footericons/logo.svg"
import insta from "./footericons/instagram.svg"
import fb from "./footericons/facebook.svg"
import youtube from "./footericons/youtube.svg"
import twit from "./footericons/twitter.svg"
import loc from "./footericons/loc.svg"
import email from "./footericons/email.svg"
import phone from "./footericons/phone.svg"
import copy from "./footericons/copyright.svg"

const Footer = () => {

  return (
    <div className='footer-wrapper'>
      <div className='_container'>
        <div className='footer'>
          <div className='footer-logo'>
            <div className='logo-name'>
              <a>
                <img src={logo} />
                <p>Tello</p>
              </a>
            </div>
            <div className='logo-icons'>
              <a ><img src={insta} /></a>
              <a ><img src={fb} /></a>
              <a ><img src={youtube} /></a>
              <a ><img src={twit} /></a>
            </div>
          </div>
          <ul className='item'>
            <h3>Menu</h3>
            <li><a>Yeni</a></li>
            <li><a>Endirimlər</a></li>
            <li><a>Aksesuarlar</a></li>
            <li><a>Bütün brendlər</a></li>
          </ul>
          <ul className='item'>
            <h3>Kömək</h3>
            <li><a>Tez-tez soruşulan suallar</a></li>
            <li><a>Çatdırılma xidməti</a></li>
            <li><a>Geri qaytarılma şərtləri</a></li>
          </ul>
          <ul className='item'>
            <h3>Əlaqə</h3>
            <li><a className='address'> <img src={loc} /> M.K.Ataturk avenue 89, Baku, Azerbaijan</a></li>
            <li><a className='email'> <img src={email} /> tello@gmail.com </a></li>
            <li><a className='phone'> <img src={phone} />*2108 </a></li>
          </ul>

        </div>
      </div>
      <div className='footer-copyright'>
      <div className='_container' >
            <div className='footer-copy'>
            <div className='copyright'> <img src={copy}/> <p>PeojectX 2021. Bütün hüquqlar qorunur.</p> </div>
              <div className='footer-block'>
              <p>Qaydalar və şərtlər</p>
              <p>Məxfilik siyasəti</p>
              </div>
             
            </div>
          
          </div>
      </div>
     
    </div>
  )
}

export default Footer