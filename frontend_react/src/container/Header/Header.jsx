import React from 'react'
import Logo from '../../assets/Logo.png';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className='headerImg'>
          <img src={Logo} alt='headerImg' />
      </div>
    </>
  )
}

export default Header