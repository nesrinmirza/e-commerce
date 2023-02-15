import React from 'react'
import nextblue from "../../pages/Home/homeimgs/nextblue.svg"
import img1 from "../../pages/Home/homeimgs/img1.png"
import img2 from "../../pages/Home/homeimgs/img2.png"
import img3 from "../../pages/Home/homeimgs/img3.png"
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div>
         <div className='category-wrapper'>
          <div className='category-card-1'>
            <div className='card-text'>
              <h3>Telefon</h3>
              <p>Məhsul sayı: 322</p>
              <Link to="/butunbrendler">Məhsullara keçid <img src={nextblue} /></Link>
            </div>
            <div className='card-img'>
              <img style={{width:"100%"}} src={img1} />
            </div>
          </div>
          <div className='category-card-2'>
          <div className='card-text'>
              <h3>Smart saat</h3>
              <p>Məhsul sayı: 46</p>
              <Link to="/bestsellers">Məhsullara keçid <img src={nextblue} /></Link>
            </div>
            <div className='card-img'>
              <img src={img2} />
            </div>
          </div>
          <div className='category-card-2'>
          <div className='card-text'>
              <h3>Aksesuar</h3>
              <p>Məhsul sayı: 891</p>
              <Link to="/aksesuarlar">Məhsullara keçid <img style={{fill:"red"}} src={nextblue} /></Link>
            </div>
            <div className='card-img'>
              <img src={img3} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Category