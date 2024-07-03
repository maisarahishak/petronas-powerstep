import React, { useState } from 'react';
import './Gallery.css';
import Placeholder from '../../assets/img-placeholder.png';

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState('Photos');

  return (
    <>
      <div className="gallery-container">
        <div className="drop-shadow">
          <div className="gallery-header">GALLERY</div>
          <div className="gallery-content">
            <div className="tabs">
              <div
                className={`tab ${selectedTab === 'Photos' ? 'active' : ''}`}
                onClick={() => setSelectedTab('Photos')}
              >
                Photos
              </div>
              <div
                className={`tab ${selectedTab === 'Videos' ? 'active' : ''}`}
                onClick={() => setSelectedTab('Videos')}
              >
                Videos
              </div>
            </div>
            <div className={`tab-content ${selectedTab === 'Photos' ? 'active-tab' : ''}`}>
              {selectedTab === 'Photos' ? (
                <div className="photos">
                  {Array.from({ length: 16 }).map((_, index) => (
                    <img
                      key={index}
                      src={Placeholder}
                      alt={`Placeholder ${index}`}
                      className="photo-item"
                    />
                  ))}
                </div>
              ) : (
                <div className="videos">
                  <img
                    src={Placeholder}
                    alt="Video Placeholder"
                    className="video-item"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
