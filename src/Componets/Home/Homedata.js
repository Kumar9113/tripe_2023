import './Home.css'
import React from 'react'

const Homedata = (props) => {
  return (
    <>
    <div  data-aos='fade-right' data-aos-duration='2000' className={props.div}>
    <label for={props.lable}>{props.ltitle}</label><br/>
    <input type={props.type} placeholder={props.holder} id={props.lable}></input>
    </div>
    </>
  )
}

export default Homedata