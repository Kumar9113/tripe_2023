import React from 'react'

import { BsArrowRightShort } from 'react-icons/bs'

import './Blog.css'



const BlogData = (props) => {
  return (
    <div data-aos='fade-up' data-aos-duration='2500' className='singlePost'>

      <div className='imgDiv'>
        <img src={props.image} alt={props.title}></img>
      </div>

      <div className='postDetails'>
        <h3 data-aos='fade-up' data-aos-duration='3000'>
          {props.title}
        </h3>
        <p data-aos='fade-up' data-aos-duration='3500'>
          {props.desc}
        </p>
      </div>

      <a href='#' data-aos='fade-right' data-aos-duration='4000' className='flex'>
        <BsArrowRightShort className='icon' />Read More
      </a>

    </div>
  )
}

export default BlogData