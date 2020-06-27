import React from 'react';
// import { Row, Col } from 'react-bootstrap';
import "./ExperienceAndWork.css";
import { Carousel } from 'react-bootstrap';

function ExperienceAndWork() {
  return (
    <div>
      <div className="boxShadow padding20 paddingBottom20">
        <div className="center-text heading-sub">
          EXPERIENCE
      </div>
        <div className="center-text subtitle-heading">
          INTERNSHIP
      </div>
        <div className="internshipContainer">
          <div className="company noWrapOnMobile">
            <div className="topContainer">
              <img alt="PlexusMd" src={require('../Images/PlexusMD.png')} style={{ width: '60px', height: '60px', borderRadius: '5px' }} />
              <div className="textContainerTop">
                <div className="CompanyName">
                  PlexusMD
              </div>
                <div className="workPeriod">
                  Since January 2020
              </div>
              </div>
            </div>
            <div className="textContainerBottom">
              <span>React Frontend Developer</span>
              <br />
              <span>Search Engine Optimizations</span>
            </div>
            <div className="workLink">
              <a className="workLink" href="https://www.plexusmd.com" rel='noopener noreferrer' target="_blank" >www.plexusmd.com</a>
              <a className="workLink inline"
                href="https://www.linkedin.com/company/plexusmd/" rel='noopener noreferrer' target="_blank" >
                {/* <i className="fa fa-linkedin-square" style={{paddingRight: '5px'}}/> */}
              PlexusMD's LinkedIn Profile
            </a>
            </div>
          </div>
          <div className="aboutCompany">
            <div className="CompanyNameBottom">
              About PlexusMD
          </div>
            <div className="companyDescription">
              PlexusMD is an online professional network exclusively for medical professionals and healthcare organisations.
              With lakhs of doctors and hundreds of hospitals across India,
              we are India's fastest growing online community of healthcare professionals.
              PlexusMD helps doctors create their professional identity on the web,
              stay updated with the latest news and developments in their specialty,
              find & connect with other medical professionals and apply to the best jobs,
              fellowships and courses from leading institutions.
          </div>
          </div>
        </div>
      </div>
      <div className="workContainer boxShadow ">
        <div className="padding20">
          <div className="center-text heading-sub">
            WORK
          </div>
        </div>
        <div className="miniTitle text-center">
          Kustom Live Wallpapers
        </div>
        <div className="carouselContainer padding-top-down">
          <Carousel interval={2000} indicators={false}>
            <Carousel.Item>
              <img alt="Quick for KLWP" src={require("../Images/KLWP/Quick.png")} style={{ width: '100%' }} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="Quick Version 2 for KLWP" src={require("../Images/KLWP/Quickv2.png")} style={{ width: '100%' }} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="Covered for KLWP" src={require("../Images/KLWP/Covered2.png")} style={{ width: '100%' }} />
            </Carousel.Item>
            <Carousel.Item>
              <img alt="Corona for KLWP" src={require("../Images/KLWP/Corona.png")} style={{ width: '100%' }} />
            </Carousel.Item>
          </Carousel>
          <div className="mini-Description padding20">
            THE ABOVE MENTIONED ARE SOME THEMES THAT I HAVE CREATED USING KLWP.
            <br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            KLWP stands for Kustom Live Wallpapers.
            KLWP enables you to change the theme on your android smartphone and make it customizable as you want.
            Once applied on your Lock Screen or Home Screen or both,
            the Live Wallpaper will make your device beautiful and unique and you can set it for
            various possible daily tasks and information.
            <br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Additionally you can use control statements, loops, APIs apn can parse RSS, JSON, XML files.
            Design is basically set using semaphores and have similar concepts ike onClick event to change semaphores.
            <br /><br />
            <a className="workLink" href="https://play.google.com/store/apps/details?id=org.kustom.wallpaper&hl=en_IN"
              rel='noopener noreferrer' target="_blank">
              {/* <i className="fa fa-android"></i> */}
            KLWP on Google Play Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceAndWork;