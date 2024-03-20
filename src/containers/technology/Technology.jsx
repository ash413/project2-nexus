import React from 'react';
import './technology.css';

const Technology = () => {
  return (
    <div className='website__technology' id='technology'>
        <div className='website__technology__center-holder'>
            <h2 className='website__technology__center-heading'>
                Elevate Efficiency and Teamwork with Our Solution
            </h2>
            <p className='no-margin'>
                Say goodbye to juggling multiple apps and hello to streamlined collaboration.
            <br />
                Experience the future of work, simplified.
            </p>
        </div>
        <div className='website__technology__elevate-holder'>
            <div className='website__technology__elevate-box'>
                <h4 className='website__technology__elevate-box-heading'>
                    Seamless Integration
                </h4>
                <p className='no-margin'>
                    Our platform is designed to seamlessly integrate with your current software stack, 
                    allowing you to enhance efficiency without the hassle of a complete overhaul.
                </p>
            </div>
            <div className='website__technology__elevate-box'>
                <h4 className='website__technology__elevate-box-heading second'>
                    Comprehensive Features
                </h4>
                <p className='no-margin'>
                    This comprehensive approach means you won't need to purchase multiple subscriptions
                    or switch between various apps. It's all here, in one platform.
                </p>
            </div>
            <div className='website__technology__elevate-box'>
                <h4 className='website__technology__elevate-box-heading third'>
                    User-Friendly Interface
                </h4>
                <p className='no-margin'>
                    We prioritize usability. Our platform boasts an intuitive, user-friendly interface
                    that makes it easy for teams of all sizes to adopt and start using immediately.
                </p>
            </div>
            <div className='website__technology__elevate-box'>
                <h4 className='website__technology__elevate-box-heading fourth'>
                    Dedicated Support
                </h4>
                <p className='no-margin'>
                    We're your partners in productivity. Our dedicated support team is available around the clock to assist you. 
                    Your success is our priority, and we're committed to helping you achieve it.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Technology