import React from 'react'

const Product = ({ el }) => {


  return (
    <div className='each-product'>
      <img src={el.image.url} />
      <h1>{el.name}</h1>
      <h4>{el.price.raw} ₼</h4>
    </div>
  )
}

export default Product