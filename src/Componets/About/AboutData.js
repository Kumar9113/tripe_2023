import './About.css'
import React from 'react'

const AboutData = (props) => {
  return (
  
        <div data-aos='fade-up' data-aos-duration='2500' className='singleItem'>
          <img src={props.image} alt='Image Name'></img>
          <h3>{props.header}</h3>

          <p>
           {props.para}
          </p>
        </div>
      
    
  )
}

export default AboutData
