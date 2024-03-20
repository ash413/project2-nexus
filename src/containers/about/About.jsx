import React from 'react';
import './about.css';

const About = () => {
return (
    <div className='website__about' id='about'>
        <div className='website__about-image'>
            <img src="https://img.freepik.com/premium-vector/professional-language-data-analysis-program_999616-445.jpg?size=626&ext=jpg&ga=GA1.1.980076375.1709043024&semt=ais" alt="" />
        </div>
        <div className='website__about-maintext'>
            <div className='website__about-text'>
                <h1>Optimize Your Workflow: Schedule Tasks</h1>
                <p>Our user-friendly tool simplifies task management by allowing you to easily assign deadlines to your tasks, preventing any oversights. The intuitive reminder system keeps you in control of your commitments, delivering timely notifications that empower you to meet deadlines and achieve your objectives.</p>
            </div>
            <div className='website__about-button'>
                <button type='button'>Get Started</button>
            </div>
        </div>
    </div> 
)
}

export default About