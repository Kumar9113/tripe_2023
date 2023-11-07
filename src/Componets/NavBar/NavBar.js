/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import './NavBar.css'
import NavData from './NavData'
import {TbGridDots} from 'react-icons/tb'
import {AiFillCloseCircle} from 'react-icons/ai'
import {SiYourtraveldottv} from 'react-icons/si'
const NavBar = () => {
  const [active,setActive]=useState("navBar");
  const showNav=()=>
  {
    setActive('navBar activeNavbar')

  }
  const Remove=()=>
  {
    setActive('navBar')

  }
  const[trasparent,setTrasparent]=useState('header');
  const addbg=()=>
  {
    if(window.scrollY>10)
    {
      setTrasparent('header activeHeader');
    }
    else
    {
      setTrasparent('header');
    }
  }
  window.addEventListener('scroll',addbg);

  return (
    <section className='navBarSection'>
      <div className={trasparent}>
        <div className='logoDiv'>
          <a href='/' className='logo'>
            <h1 className='flex'><SiYourtraveldottv className='icon'>
              </SiYourtraveldottv> Trempo</h1>
          </a>
        </div>
        <div className={active}>
          <ul className='navLists flex'>
            <NavData item='navItem' url='/' curl='.destDiv' title='Home' > </NavData>
            <NavData item='navItem' url='/Product' curl='navLink' title='Products' > </NavData>
            <NavData item='navItem' url='/Resource' curl='navLink' title='Resources' > </NavData>
            <NavData item='navItem' url='/Blog' curl='navLink' title='Blog' > </NavData>
            <div className='headerBtns flex'>
              <button className='btn loginBtn'>
                <a href='#'>Login</a>
              </button>
              <button className='btn'>
                <a href='#'>Sign Up</a>
              </button>
            </div>

          </ul>
          <div className='closeNavbar'>
            <AiFillCloseCircle className="icon" onClick={Remove}></AiFillCloseCircle>
          </div>

        </div>
        <div onClick={showNav} className='toggleNavBar'>
        <TbGridDots className='icon'></TbGridDots>
        </div>
      </div>
    </section>
  )
}

export default NavBar