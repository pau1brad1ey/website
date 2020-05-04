import React from 'react'
// import { Link } from 'gatsby'
import logoImg from '../assets/img/logo.svg'
import './header.css'

const Header = () => (
  <header id='header'>
    <div className='container-fluid'>
      <div id='logo' className='pull-left'>
        {/* <h1><a href='#intro' className='scrollto'>Greysphere</a></h1> */}

        <a href='/'><img src={logoImg} alt='' title='Greysphere Ltd' /></a>
      </div>

      <nav id='nav-menu-container'>
        <ul className='nav-menu'>
          {/*
          <li><Link to='/' activeClassName='menu-active'>Home</Link></li>
          <li><Link to='/contact' activeClassName='menu-active'>Contact</Link></li>
          */}
          {/*
          <li><a href='/services'>Services</a></li>
          <li><a href='#about'>About Us</a></li>
          <li><a href='/#portfolio'>Portfolio</a></li>
          <li><a href='#team'>Team</a></li>
          <li className='menu-has-children'><a href=''>Drop Down</a>
            <ul>
              <li><a href='#'>Drop Down 1</a></li>
              <li><a href='#'>Drop Down 3</a></li>
              <li><a href='#'>Drop Down 4</a></li>
              <li><a href='#'>Drop Down 5</a></li>
            </ul>
          </li>
          */}
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
