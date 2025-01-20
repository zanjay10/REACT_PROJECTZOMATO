import React from 'react'
import './collection.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import collection1 from '../../image/collection1.webp'
import collection2 from '../../image/collection2.webp'
import collection3 from '../../image/collection3.webp'
import collection4 from '../../image/collection4.webp'

function Collection() {
  return (
    <>
    <div className="collection">
        <h1>Collections</h1>
        <div className="collectionText">
            <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Kochi, based on trends            </p>
            <span>All collections in kochi <KeyboardArrowRightIcon />

            </span>
        </div>
        <div className="collectionCard">
            <div className="collectionImg">
              <img src={collection1} alt='collectionimg'/>
              <h3>8 places for Art Lovers</h3>
              <span>7 Places <KeyboardArrowRightIcon /></span>

            </div>

            <div className="collectionImg">
              <img src={collection2} alt='collectionimg'/>
              <h3>14 Great Cafes</h3>
              <span>11 Places <KeyboardArrowRightIcon /> </span>

            </div>

            <div className="collectionImg">
              <img src={collection3} alt='collectionimg'/>
              <h3>6 Places for Authentic Kuzhimandhi</h3>
              <span>5 Places <KeyboardArrowRightIcon /></span>

            </div>

            <div className="collectionImg">
              <img src={collection4} alt='collectionimg'/>
              <h3>5 Must-visit Legendary Places</h3>
              <span>5 Places<KeyboardArrowRightIcon /></span>

            </div>
        </div>
    </div>
    </>
  )
}

export default Collection