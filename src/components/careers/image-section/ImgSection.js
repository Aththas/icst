import React from 'react'
import './ImgSection.css'
import bg from '../../../img/Firefly.png'

const ImgSection = () => {
  return (
        <div className='image-container'>
            <img src={bg} alt='careers bg'></img>
            <div className="overlay-text">
                {/* <h2>Careers</h2> */}
                <input type="text" placeholder="Type Position to Search" className="search-bar" />
            </div>
        </div>
  )
}

export default ImgSection