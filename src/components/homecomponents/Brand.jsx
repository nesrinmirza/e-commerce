import React from 'react'
import brand1 from '../../pages/Home/homeimgs/brand1.png'
import brand2 from '../../pages/Home/homeimgs/brand2.png'
import brand3 from '../../pages/Home/homeimgs/brand3.png'
import brand4 from '../../pages/Home/homeimgs/brand4.png'
import brand5 from '../../pages/Home/homeimgs/brand5.png'
import brand6 from '../../pages/Home/homeimgs/brand6.png'



const Brand = () => {
  return (
    <div className='brand-wrapper'>
<div className='brand-item'>
    <img src={brand1} />
</div>
<div className='brand-item'>
    <img src={brand2} />
</div>
<div className='brand-item'>
    <img src={brand3}/>
</div>
<div className='brand-item'>
    <img src={brand4} />
</div>
<div className='brand-item'>
    <img src={brand5}/>
</div>
<div className='brand-item'>
    <img src={brand6} />
</div>
<div className='brand-item'>
    <img style={{width:"11rem"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png?20221128191222' />
</div>
<div className='brand-item'>
    <img src={brand1} />
</div>
<div className='brand-item'>
    <img src={brand2} />
</div>
    </div>
  )
}

export default Brand