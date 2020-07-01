import React from 'react';
// import { Row, Col } from 'react-bootstrap';
import "./ExperienceAndWork.css";
import { Carousel } from 'react-bootstrap';
import Company from './Company';

function ExperienceAndWork() {
  return (
    <div>
      <div className="boxShadow padding20 paddingBottom20 semi-white-bg">
        <div className="center-text heading-sub">
          EXPERIENCE
      </div>
        <Company 
          companyName="PlexusMD"
          imageLink={require("../Images/PlexusMD.png")}
          type="Internship"
          workPeriod="Jan, 2020 - June, 2020"
          workingAs= {[
            "React Frontend Developer",
            "Search Engine Optimizations"
          ]}
          workLink= {[
            "https://www.plexusmd.com",
            "https://www.linkedin.com/company/plexusmd/"
          ]}
          aboutCompany="PlexusMD is an online professional network exclusively for medical professionals and healthcare organisations.
          With lakhs of doctors and hundreds of hospitals across India,
          we are India's fastest growing online community of healthcare professionals.
          PlexusMD helps doctors create their professional identity on the web,
          stay updated with the latest news and developments in their specialty,
          find & connect with other medical professionals and apply to the best jobs,
          fellowships and courses from leading institutions."
        />
        <Company 
          companyName="ScrollRight"
          imageLink={require("../Images/sr_mukul.png")}
          type="Full Time"
          workPeriod="Since June, 2020"
          workingAs= {[
            "React Frontend Developer"
          ]}
          workLink= {[
            "https://www.scrollright.com"
          ]}
          aboutCompany="ScrollRight is a online freelance service provider and product building company where you can ask to create
          your own app, website, software. Also, we provided freelance support to any firm, company who needs it. Think Big.
          Think Innovative. Think ScrollRight !"
        />
      </div>
      <div className="workContainer boxShadow semi-white-bg" style={{ marginTop: '40px' }}>
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
            <div className="text-center w-100 font-bold">THE ABOVE MENTIONED ARE SOME THEMES THAT I HAVE CREATED USING KLWP.</div>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            KLWP stands for Kustom Live Wallpapers.
            KLWP enables you to change the theme on your android smartphone and make it customizable as you want.
            Once applied on your Lock Screen or Home Screen or both,
            the Live Wallpaper will make your device beautiful and unique and you can set it for
            various possible daily tasks and information.
            <br /><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Additionally you can use control statements, loops, APIs and can parse RSS, JSON, XML files.
            Design is basically set using semaphores and have similar concepts ike onClick event to change semaphores.
            <br /><br />
            <div className="text-center w-100 font-bold">
              <a className="workLink" href="https://play.google.com/store/apps/details?id=org.kustom.wallpaper&hl=en_IN"
                rel='noopener noreferrer' target="_blank">
                {/* <i className="fa fa-android"></i> */}
                KLWP on Google Play Store
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceAndWork;