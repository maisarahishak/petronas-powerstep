import React from 'react';
import './ChallengeDetails.css';
import Timeline from '../../assets/timeline.png';
import Guide from '../../assets/guide.png';
import DownloadApp from '../../assets/download-app.png'; // Add this import

const ChallengeDetails = () => {
  return (
    <>
      <div className="challenge-details-main-container">
        <div className="challenge-drop-shadow">
          <div className="challenge-header">CHALLENGE DETAILS</div>
          <div className="challenge-content">
            <div className="challenge-column">
              <h2>Duration</h2>
              <p className="challenge-regular-text">July 2024 - October 2024</p>
              <h2>How To Join?</h2>
              <p className="challenge-regular-text">
                1. Search for your team to get the <span className="challenge-bold-text">JOIN CODE</span>.<br />
                2. Open the BookDoc App and navigate to “Challenge” Page.<br />
                3. Select the “PowerStep 2024 Challenge” to join.<br />
                4. Join the “PowerStep 2024 Challenge” by:<br />
                &nbsp;&nbsp;&nbsp;a. Enter the <span className="challenge-bold-text">JOIN CODE</span> provided by your respective company; or<br />
                &nbsp;&nbsp;&nbsp;b. Scan the <span className="challenge-bold-text">QR Code</span> provided by your respective company.
              </p>
            </div>
            <div className="challenge-column">
              <img src={Timeline} alt="Timeline" className="challenge-timeline-img" />
            </div>
          </div>
          <div className='top-stroke'>
            <div className="new-user-guide-container">
              <h2 className="guide-title">Guide for New Users</h2>
              <img src={Guide} alt="Guide" className="guide-img" />
            </div>
          </div>
          <div className="bottom-content">
            <div className="bottom-column">
              <img src={DownloadApp} alt="Download App" className="download-app-img" />
            </div>
            <div className="bottom-column">
              <h2 className="bottom-title">Are you up for the challenge?</h2>
              <p className="bottom-text">
                Start by downloading BookDoc mobile application at the Apple App Store, Google Play Store or Huawei AppGallery!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChallengeDetails;
