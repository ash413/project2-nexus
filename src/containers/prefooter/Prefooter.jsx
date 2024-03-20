import React from 'react';
import './prefooter.css';
import prefooter from '../../assets/prefooter.jpg';

const Prefooter = () => {
  return (
    <div className='website__prefooter'>
        <div className='website__prefooter__text'>
            <h1>
                Your Adventure Awaits. <br /> Enroll Today!
            </h1>
            <p>
                Begin your adventure by creating your account now and enjoy a complimentary year of premium benefits!
            </p>
        </div>
        <div className='website__prefooter__input'>
            <input type="email" placeholder='Your email address' name="" id="" />
            <button type='button'>Create account</button>
        </div>
        <div className='website__prefooter__image'>
            <img src={prefooter} alt="" />
        </div>
    </div>
  )
}

export default Prefooter    