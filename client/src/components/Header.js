import React from 'react'
import './Style.css';

function Header() {
  return (
      <>
        <div className='header-container'>
            <div className='logo-image'>
                <img className='logo-image' src='logo_large.jpg' alt='logo.png' />
            </div>
            <div className='navbar'>
                <div className='navbar-button'>Property Management</div>
                <div className='navbar-button'>Property Search</div>
                <div className='navbar-button'>Body Corporate</div>
                <div className='navbar-button'>Commercial</div>
                <div className='navbar-button'>Waiheke Escapes</div>
                <div className='navbar-button'>FAQ & Contact Us</div>
            </div>

        </div>

    </>
  )
}

export default Header