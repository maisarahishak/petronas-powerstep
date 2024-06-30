import React from 'react';
import './ScoringMechanics.css';

const ScoringMechanics = () => {
  return (
    <>
      <div className="scoring-mechanics-container">
        <div className="drop-shadow">
          <div className="scoring-mechanics-header">SCORING MECHANICS</div>
          <div className="scoring-mechanics-content">
            <div className="column">
              <h2>Daily Steps Points</h2>
              <p className="description">Individuals will contribute points to their team based on the daily steps.</p>
              <p className="points">
                3,000 steps = 1 point<br />
                6,000 steps = 3 points<br />
                10,000 steps = 5 points
              </p>
              <p className="remarks-title">Remarks:</p>
              <p className="remarks-description">Steps will only be counted upon joining the challenge with the join code. For example:</p>
              <p className="example">
                Challenge period: 1/8/2024 to 31/10/2024<br />
                If you join challenge on 3/8/2024 at 12pm<br />
                Step only starts to count on 3/8/2024 at 12pm onwards
              </p>
            </div>
            <div className="column">
              <h2>Photo Submission Points</h2>
              <p className="points-extra">Extra 10 points for photo submission</p>
              <p className="criteria">
                Criteria:<br />
                1. Must be submitted via the Microsite<br />
                2. 1st photo to be submitted between 1 Sep to 30 Sep 2024<br />
                3. 2nd photo to be submitted between 1 Oct to 31 Oct 2024<br />
                4. Minimum 4 people in the photo<br />
                5. Doing physical activities<br />
                6. Must include company name / logo for identification
              </p>
              <h2>Video Submission Points</h2>
              <p className="points-extra">Extra 20 points for video submission</p>
              <p className="criteria">
                Criteria:<br />
                1. Must be submitted via the Microsite<br />
                2. 1st video to be submitted between 1 Sep to 30 Sep 2024<br />
                3. 2nd video to be submitted between 1 Oct to 31 Oct 2024<br />
                4. Minimum 4 people in the video<br />
                5. Doing physical activities<br />
                6. Must include company name / logo for identification<br />
                7. Video length: 30 – 60 seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoringMechanics;
