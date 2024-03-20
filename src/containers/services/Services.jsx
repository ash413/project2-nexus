import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div className='website__services' id='pricing'>
      <div className='website__services__center-holder'>
        <h2>
          Explore A Multitude of Hosting Solutions And Packages
        </h2>
        <p>
        Dive into a diverse range of plans designed to suit your unique web hosting needs and aspirations for online success
        </p>
      </div>
      <div className='website__services__hosting-holder'>
        <div className='website__services__hosting-box'>
          <div className='website__services__hosting-mid'>
            <div className='website__services__hosting-top'>
              <h4>Starter</h4>
              <p>Personal Blogs and Small Websites</p>
            </div>
            <h3 id='header' className='website__services__hosting-heading'>Free</h3>
            <ul role='list' className='unordered-list'>
              <li className='list-item'>1 Website</li>
              <li className='list-item'>10 GB Storage</li>
              <li className='list-item'>Unlimited Bandwidth</li>
              <li className='list-item'>Free SSL Container</li>
              <li className='list-item'>24/7 Customer Support</li>
            </ul>
          </div>
          <a href="#get started" className='website__services__button'>Get Started</a> 
        </div>
        <div className='website__services__hosting-box'>
          <div className='website__services__hosting-mid'>
            <div className='website__services__hosting-top'>
              <h4>Business</h4>
              <p>Small to Medium-Sized Businnesses</p>
            </div>
            <h3 id='header'>$14
              <span className="test-span">/ month </span>
            </h3>
            <ul role='list' className='unordered-list'>
              <li className='list-item'>5 Websites</li>
              <li className='list-item'>50 GB Storage</li>
              <li className='list-item'>Unlimited Bandwidth</li>
              <li className='list-item'>Free Domain Name</li>
              <li className='list-item'>Daily Backups</li>
              <li className='list-item'>Enhanced Security</li>
              <li className='list-item'>24/7 Priority Support</li>
            </ul>
          </div>
          <a href="#get started" className='website__services__button'>Get Started</a>
        </div>
        <div className='website__services__hosting-box'>
          <div className='hosting-label'>MOST POPULAR</div>
          <div className='website__services__hosting-mid'>
            <div className='website__services__hosting-top'>
              <h4>eCommerce</h4>
              <p>Online Stores and eCommerce Websites</p>
            </div>
            <h3 id='header'>$24 
              <span className="test-span">/ month </span>
            </h3>
            <ul role='list' className='unordered-list'>
              <li className='list-item'>Unlimited Website</li>
              <li className='list-item'>100 GB SSD Storage</li>
              <li className='list-item'>Unlimited Bandwidth</li>
              <li className='list-item'>Free SSL & Dedicated IP</li>
              <li className='list-item'>Software Installation</li>
              <li className='list-item'>Advanced Security</li>
              <li className='list-item'>24/7 Expert Support</li>
            </ul>
          </div>
          <a href="#get started" className='website__services__button'>Get Started</a>
        </div>
        <div className='website__services__hosting-box'>
          <div className='website__services__hosting-mid'>
          <div className='website__services__hosting-top'>
              <h4>Pro+</h4>
              <p>Developers and High-Traffic Websites</p>
            </div>
            <h3 id='header'>$40 
              <span className="test-span">/ month </span>
            </h3>
            <ul role='list' className='unordered-list'>
              <li className='list-item'>Unlimited Website</li>
              <li className='list-item'>200 GB SSD Storage</li>
              <li className='list-item'>Unlimited Bandwidth</li>
              <li className='list-item'>Free Domain Name</li>
              <li className='list-item'>Enhanced Performance</li>
              <li className='list-item'>Advanced Security</li>
              <li className='list-item'>Priority 24/7 Support</li>
              <li className='list-item'>Staging Environment</li>
            </ul>
          </div>
          <a href="#get started" className='website__services__button'>Get Started</a>
        </div>
      </div>
    </div>
  )
}

export default Services