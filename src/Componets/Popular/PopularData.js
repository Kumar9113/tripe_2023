import './Popular.css'
import React from 'react'
import {BsArrowRightShort} from 'react-icons/bs'


import {BsDot} from 'react-icons/bs'

const PopularData = (props) => {
  return (
      
        <div data-aos='fade-up' data-aos-duration='2500' className='singleDestination'>
          <div className='destImage'>
            <img src={props.img} alt='Image title'></img>
            <div className='overlayInfo'>
               <h3>{props.location}</h3>
               <p>
               Lorem ipsum dolor sit amet
               </p>
               <BsArrowRightShort className='icon rightIcon'></BsArrowRightShort>
            </div>
            </div>
          <div className='destFooter'>
            <div className='Number'>
              {props.id}
             </div>
             <div className='destText'>
                <h6>{props.destTitle}</h6>
                <span className='flex'>
                  <span className='dot'>
                    <BsDot className='icon'></BsDot>
                  </span>{props.grade}
                </span>
              </div>
            
          </div>
        </div>
      
  )
}

export default PopularData