import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
import './Home.css'
import Homedata from './Homedata'
import Popular from '../Popular/Popular'
import NavBar from '../NavBar/NavBar'
import Offers from '../Offers/Offers'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Blog from '../Blog/Blog'




const Home = () => {
  useEffect(()=>
  {Aos.init({duration:2000})
  },[])

  return (
    <>
    <NavBar></NavBar>
    <section className='home'>
      <div className='setContainer Container'>
        <div className='homeText'>
          <h1 data-aos='fade-up' data-aos-duration='2500' className='title'>
            Plan your trip with Travel Trempo
          </h1>
          <p className='subTitle' data-aos='fade-up' data-aos-duration='2500' >
            Travel to your favourite with respectful of the enironment
          </p>
          <button className='btn' data-aos='fade-up' data-aos-duration='3000' >
            <a href='#'>Explore now</a>
          </button>
        </div>
        <div className='homeCard grid'>
          <Homedata div='locationDiv' lable='location' ltitle='Location' type='text' holder='Dream Destination'></Homedata>
          <Homedata div='destDiv' lable='Distance' ltitle='Distance' type='text' holder='11/Meters'></Homedata>
          <Homedata div='priceDiv' lable='price' ltitle='Price' type='text' holder='$140-$500'></Homedata>
          <div  data-aos='fade-left' data-aos-duration='2000' className='button'>
          <button  className='btn'>Serach</button>
          </div>
          
        </div>
      </div>
     

    </section>
    <Popular></Popular>
    <Offers></Offers>
    <About></About>
    <Blog></Blog>
    <Footer></Footer>
    </>
  )
}

export default Home