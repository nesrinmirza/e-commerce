import React from 'react'
import box from "../../pages/Home/homeimgs/box.svg"
import star from "../../pages/Home/homeimgs/medal-star.svg"
import card from "../../pages/Home/homeimgs/card-pos.svg"



const Delivery = () => {
    return (
        <div className='delivery-wrapper'>
            <div className='delivery-item'>
                <img src={box} />
                <h3>Çatdırılma</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            <div className='delivery-item'>
                <img src={card} />
                <h3>Kredit</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            <div className='delivery-item'>
                <img src={star} />
                <h3>Zəmanət</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>

        </div>
    )
}

export default Delivery