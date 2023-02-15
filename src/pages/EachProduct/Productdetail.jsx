import React, { useEffect, useState } from 'react'
import { getProducts } from '../../API/getproducts'
import "./Productdetail.scss"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import basketicon from "./basket.svg"
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from '../../redux/reducer/basketreducer';
import { commerce } from '../../API/comerce';
import { setUniqueNumber } from '../../redux/reducer/uniquecountreducer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Navigation} from "swiper";
import SwiperCore, { Thumbs } from 'swiper/core';
import { useParams } from 'react-router-dom'

SwiperCore.use([Thumbs, Navigation]);

const Productdetail = () => {
  const [loading, setLoading] = useState(true)
  const [Basketloading, setBasketLoading] = useState(false)
  const [product, setProduct] = useState("")
  const [value, setValue] = useState(2);
  const id = window.location.pathname.split("/")
  const basket = useSelector((state) => state.basket)
  const dispatch = useDispatch()
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.log(id);

console.log(product);

  useEffect(() => {
    getProducts(id)
      .then((product) => {
        setProduct(product)
        setLoading(false)
      })
  }, [product?.id])


  const incrementHandler = () => {
    dispatch(increment())
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  async function addtoCart() {
    setBasketLoading(true)
    await commerce.cart.add(`${product.id}`, basket).then((response) => {dispatch(setUniqueNumber(response.total_unique_items));setBasketLoading(false)});
  }



  return (
    <div className='_container'>
      {loading ? <div className='lds-heart'><div></div></div> : <div className='product-details'>
        <div className='product-image'>
          <Swiper
            style={{
              "--swiper-navigation-color": "black",
              "--swiper-pagination-color": "black",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, Thumbs]}
            className="mySwiper2"
          >
            {
              product?.assets?.map((el) => {
                return <SwiperSlide key={el.id}> <img key={el.id} src={el.url} /></SwiperSlide>
              })
            }
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs]}
            className="mySwiper"
          >
            {
              product?.assets?.map((el) => {
                return <SwiperSlide key={el.id}> <img key={el.id} src={el.url} /></SwiperSlide>
              })
            }
          </Swiper>

        </div>
        <div className='product-detail'>
          <h1>{product?.name}</h1>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <h3>{product?.price?.raw} <span>₼</span></h3>
          {
            product?.variant_groups?.map((el) => {
              if (el.name === "color") {
                {
                  return (
                    <div className='product-colors' key={el.id}>
                      <p>Rəng:</p>
                      {el.options.map((e, i) => {
                        return <div className='product-color' key={i}><button className='color-btn' style={{ backgroundColor: `${e.name}` }}></button></div>
                      })
                      }
                    </div>
                  )
                }
              }
              else if (el.name === "memory") {
                {
                  return (
                    <div className='product-memories' key={el.id}>
                      <p>Yaddaş:</p>
                      {el.options.map((e, i) => {
                        return <div className='product-memory' key={i} ><button className='memory-btn'>{e.name}</button></div>
                      })
                      }
                    </div>
                  )
                }
              }
            })}
          <div className='add-to-basket'>
            <div className='product-count'>
              <p>Miqdar:</p>
              <button onClick={decrementHandler}>-</button>
              <p>{basket}</p>
              <button onClick={incrementHandler}>+</button>
            </div>
            <div className='basket-btn'>
              <button disabled={Basketloading} onClick={addtoCart} ><img src={basketicon} />Səbətə at</button>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default Productdetail