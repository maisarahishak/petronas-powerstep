import React from 'react';
import './UserGuide.css';
import UserGuide from '../../assets/user-guide.png';
import Apple from '../../assets/apple.png';
import SamsungHealth from '../../assets/samsung-health.png';
import Garmin from '../../assets/garmin.png';
import Fitbit from '../../assets/fitbit.png';
import GoogleFit from '../../assets/google-fit.png';
import ZeppLife from '../../assets/zepp-life.png';
import HuaweiHealth from '../../assets/huawei-health.png';
import Suunto from '../../assets/suunto.png';
import Polar from '../../assets/polar.png';
import Coros from '../../assets/coros.png';
import Amazfit from '../../assets/amazfit.png';
import StepsTracker from '../../assets/steps-tracker.png';

const About = () => {
  return (
    <>
      <div className="user-guide-container">
        <div className="drop-shadow">
          <div className="user-guide-header">USER GUIDE</div>
          <div className="user-guide-content">
            <img src={UserGuide} alt="User Guide" className="user-guide-img" />
          </div>
        </div>
      </div>

      <div className="compatible-devices-container">
        <div className="row">
          <h1>Compatible Devices & Apps</h1>
        </div>
        <div className="row">
          <p>
            For Zepp Life user, you may refer to the user guide (iOS | Android) for the steps. Do contact our technical support team if you need further assistance. For Google Fit user, please use the account associated with Google Fit.
          </p>
        </div>
        <div className='image-container'>
          <div className="row image-row">
            <a href="https://www.bookdoc.com/faqs/faqs-apple/" target="_blank" rel="noopener noreferrer">
              <img src={Apple} alt="Apple" />
            </a>
            <a href="https://www.bookdoc.com/faqs/faqs-samsung-health/" target="_blank" rel="noopener noreferrer">
              <img src={SamsungHealth} alt="Samsung Health" />
            </a>
            <a href="https://www.bookdoc.com/faqs/faqs-garmin/" target="_blank" rel="noopener noreferrer">
              <img src={Garmin} alt="Garmin" />
            </a>
            <a href="https://www.bookdoc.com/faqs/faqs-fitbit/" target="_blank" rel="noopener noreferrer">
              <img src={Fitbit} alt="Fitbit" />
            </a>
          </div>
          <div className="row image-row">
            <a href="https://www.bookdoc.com/faqs/faqs-google-fit/" target="_blank" rel="noopener noreferrer">
              <img src={GoogleFit} alt="Google Fit" />
            </a>
            <a href="https://www.bookdoc.com/faqs/faqs-zepp-life/" target="_blank" rel="noopener noreferrer">
              <img src={ZeppLife} alt="Zepp Life" />
            </a>
            <a href="https://www.bookdoc.com/faqs/faqs-huawei-health/" target="_blank" rel="noopener noreferrer">
              <img src={HuaweiHealth} alt="Huawei Health" />
            </a>
            <a href="https://www.bookdoc.com/faqs/faqs-suunto/" target="_blank" rel="noopener noreferrer">
              <img src={Suunto} alt="Suunto" />
            </a>
          </div>
          <div className="row image-row">
            <a href="https://www.bookdoc.com/faqs/faqs-polar/" target="_blank" rel="noopener noreferrer">
              <img src={Polar} alt="Polar" />
            </a>
            <a href="https://www.bookdoc.com/faqs/faqs-coros/" target="_blank" rel="noopener noreferrer">
              <img src={Coros} alt="Coros" />
            </a>
            <a href="https://www.bookdoc.com/faqs/faqs-amazfit/" target="_blank" rel="noopener noreferrer">
              <img src={Amazfit} alt="Amazfit" />
            </a>
            <a href="https://www.bookdoc.com/faqs/faqs-bookdoc-steps-tracker/" target="_blank" rel="noopener noreferrer">
              <img src={StepsTracker} alt="Steps Tracker" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
