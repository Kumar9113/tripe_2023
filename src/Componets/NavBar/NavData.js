import React from 'react'

const NavData = (props) => {
  return (
    <div>
         
            <li className={props.item}>
              <a href={props.url} className={props.curl}>{props.title}</a>
            </li>
          
             
       
           
    </div>
  )
}

export default NavData
