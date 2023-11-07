import React from 'react'
import {MdAirportShuttle, MdKingBed, MdLocationOn} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {  BsArrowRightShort } from 'react-icons/bs'
import './Offers.css'
import image from '../assets/images/image7.jpg'



const OfferData = (props) => {
  return (
   

    <div  className='singleOffer'>
      <div data-aos='fade-down' data-aos-duration='2000' className='destImg'>
        <img src={props.image} alt={props.destTitle}></img>
        <span className='discount'>30%</span>
      </div>
       
    
      <div data-aos='fade-down' data-aos-duration='2000' className='offerBody'>
        <div className='price flex'>
          <h4>{props.price}</h4>
          <span className='status'>
            For Rent
            </span>
        </div>
    
        <div  className='amenities flex'>
          <div className='singleAmenity flex'>
            <MdKingBed className='icon'></MdKingBed>
            <small>2 Beds</small>
          </div>
          <div data-aos='fade-down' data-aos-duration='2000' className='singleAmenity flex'>
            <MdBathtub className='icon'></MdBathtub>
            <small>1 Bath</small>
          </div>
          <div data-aos='fade-down' data-aos-duration='2000' className='singleAmenity flex'>
            <FaWifi className='icon'></FaWifi>
            <small>Wi-fi</small>
          </div>
          <div className='singleAmenity flex'>
            <MdAirportShuttle className='icon'></MdAirportShuttle >
            <small>Shuttle</small>
          </div>
        </div>
    
        <div  className='location flex'>
          <MdLocationOn className='icon'></MdLocationOn>
          <small>450 vine #310 ,{props.location}</small>
        </div>
    
        <button className='btn flex'>View Details 
        <BsArrowRightShort className='icon'></BsArrowRightShort>  </button>
       </div>
    
    </div>
    
  )
}

export default OfferData

