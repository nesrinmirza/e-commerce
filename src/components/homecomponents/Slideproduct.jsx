import React from 'react'

const Slideproduct = ({ el }) => {
  return (
    <div className='slide-product'>
      <img style={{ width: "230px" }} src={el.image.url} />
      <div>
        <h1>{el.name}</h1>
        <h4>{el.price.raw} ₼</h4>
      </div>

    </div>
  )
}

export default Slideproduct