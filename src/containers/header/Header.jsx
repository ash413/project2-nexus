import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='website__header'>
      <div className='website__header-content'>
        <h1>
          Fast and Secure Web Hosting
        at Your Fingertips</h1>
        <p>Upgrade seamlessly as your website traffic and demands increase.</p>
        <div className='website__header-content__input'>
          <input type="email" placeholder='Your email address' name="" id="" />
          <button type='button'>Create account</button>
        </div>
      </div>
    </div>
  )
}

export default Header
