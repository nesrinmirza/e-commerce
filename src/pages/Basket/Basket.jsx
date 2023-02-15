import React from 'react'
import { useEffect, useState } from 'react'
import "./Basket.scss"
import { getCart, updateCart, deleteCart } from '../../API/cart'
import deleteicon from "./delete.svg"
import shopping from "./shopping-cart.svg"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setUniqueNumber } from '../../redux/reducer/uniquecountreducer'

const Basket = () => {
    const [product, setProduct] = useState([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
    const [number, setNumber] = useState()
    const dispatch = useDispatch();

    useEffect(() => {
        getCart().then((items) => { setProduct(items.line_items); setTotal(items.subtotal.raw); setLoading(false); setNumber(items.total_items); dispatch(setUniqueNumber(items.total_unique_items)) });
    }, [total])

    function updateQuantity(id, quantity) {
        updateCart(id, quantity).then((p) => { setProduct(p.line_items); setTotal(p.subtotal.raw) })
    }

    function deleteProduct(id) {
        deleteCart(id).then((p) => { setProduct(p.line_items); setTotal(p.subtotal.raw); dispatch(setUniqueNumber(p.total_unique_items)) })
    }
  

    return (
        <div className='basket-wrapper'>
            {
                loading ? <div className='lds-heart'><div></div></div> :
                    <div className='_container'>
                        <h1 className='sebet'>Səbət({number} məhsul)</h1>
                        {product?.length == 0 ?
                            <div className='empty-wrapper'>
                                <div className='empty-basket'>
                                    <img src={shopping} />
                                    <p>Səbətiniz halhazırda boşdur</p>
                                    <Link to="/"><button>Alış-verişə davam et</button></Link>
                                </div>

                            </div>
                            :
                            <div className='basket-side'>
                                <div className='basket-products'>
                                    {
                                        product?.map((el) => {
                                            return <div key={el.id} className='basket-productdetail'>
                                                <Link to={`/product/${el.product_id}`}><div style={{ color: "black" }} className='basket-product'>
                                                    <img src={el.image.url} />
                                                    <div className='basket-productname'>
                                                        <h1>{el.name}</h1>
                                                        <p>{el.price.raw} <span>₼</span></p>
                                                    </div>
                                                </div></Link>


                                                <div className='quantity-wrapper'>
                                                    <div className='quantity'>
                                                        <button onClick={+el.quantity > 1 && (() => updateQuantity(el.id, +(el.quantity - 1)))} >-</button>
                                                        <p>{el.quantity}</p>
                                                        <button onClick={() => updateQuantity(el.id, +(el.quantity + 1))}>+</button>
                                                    </div>
                                                    <img onClick={() => deleteProduct(el.id)} src={deleteicon} />
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                                <div className='total-price'>
                                    <h1>Ümumi</h1>
                                    <p><span>Məbləğ</span><span>{total}₼</span></p>
                                    <p><span>Çatdırılma</span><span>0₼</span></p>
                                    <p><span>Hədiyyə paketi</span><span>0₼</span></p>
                                    <p><span>Promo kod</span><span>0₼</span></p>
                                    <p className='border'></p>
                                    <p className='total'> <span>Cəmi</span> <span>{total}₼</span></p>
                                </div>
                            </div>
                        }
                    </div>
            }

        </div>

    )
}

export default Basket