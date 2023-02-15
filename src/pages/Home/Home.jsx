import React from 'react'
import Slider from '../../components/homecomponents/Slider'
import "./Home.scss"
import Slideproducts from '../../components/homecomponents/Slideproducts'
import Reklam from '../../components/homecomponents/Reklam'
import Category from '../../components/homecomponents/Category'
import Delivery from '../../components/homecomponents/Delivery'
import Brand from '../../components/homecomponents/Brand'



const Home = () => {


  return (
    <div className='home'>
      <Slider />
      <div className='_container'>
        <Slideproducts text="Ən çox satılan məhsullar" getproducts={"bestsellers"} />
        <Slideproducts text="Yeni gələn məhsullar" getproducts={"yeni"} />
        <Reklam />
        <Slideproducts text="Yeni gələn aksesuarlar" getproducts={"aksesuarlar"} />
        <Category />
        <Delivery />

      </div>
      <Brand />

    </div>
  )
}

export default Home