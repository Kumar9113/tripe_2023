/* eslint-disable array-callback-return */
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
import './Popular.css'
import PopularData from './PopularData'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsArrowLeftShort} from 'react-icons/bs'
import image1 from '../assets/images/image2.jpg'
import image2 from '../assets/images/image3.jpg'
import image3 from '../assets/images/image5.jpg'
import image4 from '../assets/images/image6.jpg'
import {BsDot} from 'react-icons/bs'

const Data = [
  {
    id:'01',
    imgSrc:image1,
    destTitle:'Mechu pichhu',
    location:'Peru',
    grade:'CULTURAL RELAX'
  },
  {
    id:'02',
    imgSrc:image2,
    destTitle:'Guanajuato',
    location:'Mexico',
    grade:'CULTURAL RELAX'
  },
  {
    id:'03',
    imgSrc:image3,
    destTitle:'Angkor Wat',
    location:'Cambobia',
    grade:'CULTURAL RELAX'
  },
  {
    id:'04',
    imgSrc:image4,
    destTitle:'Taj Mahal',
    location:'India',
    grade:'CULTURAL RELAX'
  },
  {
    id:'01',
    imgSrc:image1,
    destTitle:'Mechu pichhu',
    location:'Peru',
    grade:'CULTURAL RELAX'
  },
  {
    id:'02',
    imgSrc:image2,
    destTitle:'Guanajuato',
    location:'Mexico',
    grade:'CULTURAL RELAX'
  }
 ];


const Popular = () => {
  useEffect(()=>
  {Aos.init({duration:2000})
  },[])
 

  return (
   <section className='Popular section container'>
    <div className='seeContainer'>
      <div className='setHeader '>
        <div data-aos='fade-right' data-aos-duration='2500' className='textDiv'>
          <h2 className='secTitle'>
            Popular Destination
          </h2>
          <p>
            From histarical cities to natural specteculars, come see the best of the world
          </p>
        </div>
        <div data-aos='fade-left' data-aos-duration='2500' className='iconsDiv flex'>
          <BsArrowLeftShort className='icon leftIcon' ></BsArrowLeftShort>
          <BsArrowRightShort className='icon rightIcon'></BsArrowRightShort>
        </div>
      </div>
     
      {/* <PopularData id='1' img={image1}desTitle='{value.desTitle}' grade='{value.grade}' location='{value.location}' ></PopularData> */}
      <div className='mainContent grid'>
    {
      Data.map((value)=>
      {
        return(
        <PopularData id={value.id} img={value.imgSrc} destTitle={value.destTitle} grade={value.grade} location={value.location} ></PopularData>
        );
      })
    }
    </div>

    
    </div>
   </section>
  )
}

export default Popular