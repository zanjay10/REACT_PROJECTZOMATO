import React from 'react'
import './Cta.css'
import Phone from '../image/ce5bc038a8a2d4f8f24465c8826182af1726501431.avif'
import Google from '../image/23e930757c3df49840c482a8638bf5c31556001144.webp'
import Apple from '../image/9f0c85a5e33adb783fa0aef667075f9e1556003622.webp'

function Cta() {
  return (
    <>
    <div className="cta">
        <div className="left">
            <img src={Phone} alt='phoneImg'/>
        </div>
        <div className="right">
            <h1>Get the Zomato app</h1>
            <p>We will send you a link, open it on your phone to download the app</p>
            <div className="radio">
                <div className="radioBtn">
                    <input type='radio' name='email'/>
                    <label htmlFor='email'>Email</label>
                </div>

                <div className="radioBtn">
                    <input type='radio' name='phone'/>
                    <label htmlFor='phone'>Phone</label>
                </div>
            </div>
            <form className='input'>
                <input type='email' placeholder='Email'/>
                <button type='submit'>Share App Link</button>

            </form>
            <span>Download app from</span>
            <div className="img">
                <img src={Google} alt='google'/>
                <img src={Apple} alt='apple'/>
            </div>
        </div>
    </div>

    </>
  )
}

export default Cta