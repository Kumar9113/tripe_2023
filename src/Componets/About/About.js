import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
import AboutData from './AboutData'
import './About.css'
import image1 from'../assets/images/image11.jpg'
import image2 from'../assets/images/image12.jpg'
import image3 from'../assets/images/image13.jpg'
import image4 from'../assets/images/image14.jpg'
import video from '../assets/images/video.mp4'

const Data=[
  {
    id:1,
    imgDes:image1,
    header:'100+ Mountains',
    para:' Research Show that a chance to break away from the normal rhythms ofdaily life reduces stress and improves health and well-being',

  },
  {
    id:1,
    imgDes:image2,
    header:'1000+ Hikings',
    para:' Research Show that a chance to break away from the normal rhythms ofdaily life reduces stress and improves health and well-being',
    
  },
  {
    id:1,
    imgDes:image3,
    header:'2000+ Customer',
    para:' Research Show that a chance to break away from the normal rhythms ofdaily life reduces stress and improves health and well-being',
    
  }
  , {
    id:1,
    imgDes:image4,
    header:'100+ Mountains',
    para:' Research Show that a chance to break away from the normal rhythms ofdaily life reduces stress and improves health and well-being',
    
  }
]

const About = () => {
  useEffect(()=>
  {Aos.init({duration:2000})
  },[])
 
  return (
   <section className='about section'>
    <div className='seeContainer'>
      <h2 data-aos='fade-up' data-aos-duration='2500' className='title'>
        Why Hikings?
      </h2>
       
      <div className='mainContent container grid'>
        {
          Data.map((value)=>
          {
            return(
              <AboutData id={value.id} image={value.imgDes} header={value.header} para={value.para}></AboutData>
            )
          })
        }


     

      </div>
      <div className='videoCard container'>
        <div className='cardContent grid'>

          <div data-aos='fade-right' data-aos-duration='2500' className='cardText'>
          <h2>Wonderful House experience nin there</h2>
          <p>
            The adventure subrankig is based on an equally weighted of scores from five country.

          </p> 
          </div>

          <div data-aos='fade-left' data-aos-duration='2500' className='cardVideo'>
            <video src={video} autoPlay loop muted  type='video/mp4'> </video>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default About