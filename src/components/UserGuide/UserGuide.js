import React from 'react';
import './UserGuide.css';
import UserGuide from '../../assets/user-guide.png';

const About = () => {
  return (
    <div className="user-guide-container">
        <div className='drop-shadow'>
            <div className="user-guide-header">
                USER GUIDE
            </div>
            <div className="user-guide-content">
                <img src={UserGuide} alt="User Guide" className="user-guide-img" />
            </div>
        </div>
    </div>
  );
};

export default About;
