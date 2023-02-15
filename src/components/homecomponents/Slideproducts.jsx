import React, { useEffect, useState } from 'react'
import Slideproduct from './Slideproduct'
import { Link } from 'react-router-dom'
import next from "../../pages/Home/homeimgs/next.svg"
import { getCategories } from '../../API/getproducts'


const Slideproducts = ({ text, getproducts }) => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        getCategories(getproducts)
            .then((products) => { setProducts(products.data); setLoading(false) })

    }, [])



    return (
        <div className='slide-products'>
            <div className='products-viewall'>
                <h3>{text}</h3>
                <Link to={`/${getproducts}`}  >Hamısına bax <img src={next} /></Link>
            </div>
            {
                loading ? <div className='lds-heart'><div></div></div> :

                    <div className='slider-products'>
                        {
                            products?.map((el) => {
                                return <Link key={el.id} to={`/product/${el.id}`}><Slideproduct el={el} /></Link>

                            })
                        }
                    </div>
            }


        </div>
    )
}

export default Slideproducts