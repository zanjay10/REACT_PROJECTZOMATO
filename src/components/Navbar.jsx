import React from 'react'
import './Navbar.css'
import Logo from '../image/Zomato-Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  return (
    <>
    <div className="header">
      <nav>
        <span className='span1'>Get the App</span>
        <div className="right">
          <span className='span2'>Investor Relations</span>
          <span className='span2' >Add restaurant</span>
          <span className='span2'>Login in</span>
          <span className='span2'>Sign up</span>
        </div>
      </nav>
      <div className="headerContent">
        <img src={Logo} alt='Logo-img'></img>
        <h3>Discover the best food & drinks in Kochi</h3>
        <div className="input">
        <FontAwesomeIcon className='icon' icon={faLocationDot} size="lg" style={{color: "#e17e8b",}} />
        
          <select name='' id=''>
            <option value='kochi'>Kochi</option>
            <option value='Chennai'>Chennai</option>
            <option value='Bangalore'>Bangalore</option>
            <option value='Delhi'>Delhi</option>
            <option value='Jaipur'>Jaipur</option>
            <option value='Goa'>Goa</option>

          </select>
          
          <input type='text' placeholder='Search for restuarnt,cuisine or a dish '>
          </input>
        </div>
      </div>
    </div>
   
  </>
  
  )
}

export default Navbar