import React from 'react';
import './About.css';
import powerstepLogo from '../../assets/powerstep-logo.png';

const About = () => {
  return (
    <div className="about-container">
        <div className='drop-shadow'>
            <div className="about-header">
                ABOUT
            </div>
            <div className="about-content">
                <img src={powerstepLogo} alt="PowerStep Logo" className="about-logo" />
                <p className="about-paragraph semibold">
                “PowerStep” is a health campaign developed by Malaysia Petroleum Management (MPM), PETRONAS, where it designs to foster a culture of health and unity among our 28 esteemed Petroleum Arrangement Contractors (PACs) operating in Malaysia. In conjunction with PETRONAS 50 years anniversary, it signifies a successful collaboration that we have enjoyed in oil & gas industry and to be continued in many years to come.
                </p>
                <p className="about-paragraph">
                This campaign is also an extension from PETRONAS Health & Wellbeing program; MESTIfit4health. The program focuses on addressing key health risks such as physical inactivity, unhealthy or unbalanced diets and inadequate sleep through five elements of intervention i.e., Move Right, Eat Right, Sleep Right, Think Right and Individual Right.
                </p>
                <p className="about-paragraph">
                Overall, the objective of PowerStep is to inspire and collectively empower individuals across MPM and all PACs to prioritize their health & well-being. Through the campaign, participants will embark on a journey towards improved fitness levels, heightened energy and enhances overall well-being by engaging in regular physical activity or in other words to say, excuse no more in finding time to maintain your health. 
                </p>
                <p className="about-paragraph">
                Participants (as a team and as individuals) will be evaluated based on the number of steps accumulated throughout the campaign period, hence, it encourages consistent physical activity. Participants will also be able to influence others on health & wellbeing through photo and TikTok submission based on relevant health themes.
                </p>
                <p className="about-paragraph">
                In nurturing a positive work environment through healthy physical activity, PAC is required to assemble their own teams comprising enthusiastic members of employee and their Third Party Service Provider (TPSP), who are eager to embark on this wellness journey. The duration for this challenge is three (3) months, where it gives an opportunity for participants to accumulate steps and actively engage in physical activities.
                </p>
                <p className="about-paragraph">
                A standard scoring system will be applied for this challenge from steps accumulation, photos and TikTok submission. PAC and individuals will earn points throughout the challenge period. On top of that, selected photos and TikTok videos will be featured in MPM relevant platforms to encourage others on good health & wellbeing.
                </p>
                <p className="about-paragraph">
                Join us in this campaign as we stride towards a healthier, more united, and productive workforce. Together, let us pave the way for wellness & sustainability across our Malaysia oil & gas upstream community & beyond!
                </p>
            </div>
        </div>
    </div>
  );
};

export default About;
