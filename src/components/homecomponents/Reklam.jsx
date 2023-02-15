import React from 'react'
import iphone11 from "../../pages/Home/homeimgs/iphone11.jpg"
import airtag from "../../pages/Home/homeimgs/airtag.jpg"
const Reklam = () => {
  return (
    <div>
         <div className='reklam-wrapper'>
          <div className='reklam-part'>
            <div className='reklam-text'>
              <h1>Iphone 11. Rəngli. Güclü. Əsl sizə lazım olan.</h1>
              <h3>1 519 AZN</h3>
              <p>Faizsiz taksitlə 127 AZN-dən</p>
              <button>İndi alın</button>
            </div>
            <div className='reklam-image'>
              <img src={iphone11} />
            </div>
          </div>
          <div style={{ backgroundColor: "rgb(253, 249, 249)" }} className='reklam-part'>
            <div className='reklam-text'>
              <h2>AirTag</h2>
              <h1>Əşyalarınızı tapmağın super asan yolu.</h1>
              <h3>79 AZN-dən*</h3>
              <button>İndi alın</button>
            </div>
            <div className='reklam-image'>
              <img src={airtag} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Reklam