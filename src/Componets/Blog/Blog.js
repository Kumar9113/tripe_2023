import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'

import image1 from'../assets/images/image11.jpg'
import image2 from'../assets/images/image12.jpg'
import image3 from'../assets/images/image13.jpg'
import image4 from'../assets/images/image14.jpg'
import BlogData from './BlogData'
import'./Blog.css'

const Data=[
  {
    id:1,
    postImage:image1,
    title:'Beatutiful Morocco,let us travel',
    desc:'The Kingdom of Morocco is a muslim country in western North africa with coastlines on the atlantic Ocean and Mediterranen Sea'
  },
  {
    id:2,
    postImage:image2,
    title:'Beatutiful Morocco,let us travel',
    desc:'The Kingdom of Morocco is a muslim country in western North africa with coastlines on the atlantic Ocean and Mediterranen Sea'
  },
  {
    id:3,
    postImage:image3,
    title:'Beatutiful Morocco,let us travel',
    desc:'The Kingdom of Morocco is a muslim country in western North africa with coastlines on the atlantic Ocean and Mediterranen Sea'
  },
  {
    id:4,
    postImage:image4,
    title:'Beatutiful Morocco,let us travel',
    desc:'The Kingdom of Morocco is a muslim country in western North africa with coastlines on the atlantic Ocean and Mediterranen Sea'
  }
];

const Blog = () => {
  useEffect(()=>
  {Aos.init({duration:2000})
  },[])
  return (
   <section className='blog container section'>
    <div className='secContainer'>


      <div className='secIntro'>
        <h2 data-aos='fade-up' data-aos-duration='2500' className='secTitle'>
          Our Best Blog
        </h2>
        <p data-aos='fade-up' data-aos-duration='2500'>
          An insight to incredible experince in the world
        </p>
      </div>
      <div className='mainContent'>

        {
          Data.map((value)=>
          {
            return(
              <BlogData id={value.id} image={value.postImage} desc={value.desc} title={value.title} ></BlogData>

            )
          })
        }



      </div>


    </div>
   </section>
  )
}

export default Blog
