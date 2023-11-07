import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { SiYourtraveldottv } from 'react-icons/si'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
  useEffect(()=>
  {Aos.init({duration:2000})
  },[])
  return (
    <div className='footer'>
      <div className='secContainer container '>
        <div data-aos='fade-up' data-aos-duration='2000' className='logoDiv'>
          <div data-aos='fade-up' data-aos-duration='2500' className='footerLogo'>
            <a href='#'  className='logo flex'>
             <h1 className='flex'> <SiYourtraveldottv className='icon'/>Trempo</h1>
            </a>
          </div>

          <div data-aos='fade-up' data-aos-duration='3000' className='socials flex'>
          <ImFacebook className='icon'/>
          <BsTwitter className='icon'/>
          <AiFillInstagram className='icon'/>
        </div>
      </div>

     

      <div data-aos='fade-up' data-aos-duration='4000' className='footerLinks'>
        <span className='linkTitle'>
         Contact us
        </span>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Explore</a>
        </li>
        <li>
          <a href='#'>Travel</a>
        </li>
        <li>
          <a href='#'>Blog</a>
        </li>
      </div>

      <div data-aos='fade-up' data-aos-duration='5000' className='footerLinks'>
        <span className='linkTitle'>
         Contact us
        </span>
        <span  className='phone'>+91 9113501465</span>
        <span  className='email'>gogulasukumar26@gmail.com</span>
      </div>

        

      </div>
      
    </div>
  )
}

export default Footer
