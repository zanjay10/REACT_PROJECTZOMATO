import React from 'react'
import './Card.css'
import Dine from '../image/d026b357feb0d63c997549f6398da8cc1647364915.avif'
import Online from '../image/e5b8785c257af2a7f354f1addaf37e4e1647364814.avif'

function Card() {
  return (
    <>
    <div className='card'>
        <div className="cardImg">
            <img src={Online} alt='online-img'/>
            <h1>Order Online</h1>
            <span>Stay home and order to your doorstep</span>
        </div>

        <div className="cardImg">
            <img src={Dine} alt='dine-img'/>
            <h1>Dining</h1>
            <span>View the city's favourite dining venues</span>
        </div>
    </div>
    
    </>
  )
}

export default Card