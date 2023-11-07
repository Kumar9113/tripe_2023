import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
// import {MdAirportShuttle, MdKingBed, MdLocationOn} from 'react-icons/md'
// import {MdBathtub} from 'react-icons/md'
// import {FaWifi} from 'react-icons/fa'
// import {  BsArrowRightShort } from 'react-icons/bs'
import './Offers.css'
import image1 from '../assets/images/image7.jpg'
import image2 from '../assets/images/image8.jpg'
import image3 from '../assets/images/image9.jpg'
import image4 from '../assets/images/image10.jpg'
import OfferData from './OfferData'

const Data=[
  {
    id:1,
    imgSrc:image1,
    destTitle:'Guanajuato',
    location:'Mexixo',
    price:'$2,452'

  },
  {
    id:2,
    imgSrc:image2,
    destTitle:'Guanajuato',
    location:'Mexixo',
    price:'$2,452'

  },
  {
    id:3,
    imgSrc:image3,
    destTitle:'Angkor Wait',
    location:'Cambodia',
    price:'$4,400'

  },
  {
    id:4,
    imgSrc:image4,
    destTitle:'Guanajuato',
    location:'Mexixo',
    price:'$2,452'

  },
  {
    id:1,
    imgSrc:image1,
    destTitle:'Guanajuato',
    location:'Mexixo',
    price:'$2,452'

  },
  {
    id:2,
    imgSrc:image2,
    destTitle:'Guanajuato',
    location:'Mexixo',
    price:'$2,452'

  }
];

const Offers = () => {
  
    useEffect(()=>
    {Aos.init({duration:2000})
    },[])
   

  return (
   <section className='offer container section'>
    <div className='secContainer'>

      <div data-aos='fade-up'  className='secIntro'>
        <h2 className='secTitle'>
          Special Offers
        </h2>
        <p>
          Form historical cities to natural specteculars,come see the best of the world!
        </p>
      </div>
      <div   className='mainContent'>
      {
        Data.map((value)=>
        {
          return(
            <OfferData  image={value.imgSrc} id={value.id} destTitle={value.destTitle}location={value.location} price={value.price} ></OfferData>
          )
        })
      }
      </div>
      

   
    </div>

   </section>
  )
}

export default Offers