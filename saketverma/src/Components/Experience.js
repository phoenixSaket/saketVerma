import React from 'react';
import "./Experience.css";
import Company from './Company';

function ExperienceAndWork() {
  return (
    <div>
      <div className="boxShadow padding20 paddingBottom20 semi-white-bg" style={{ marginTop: "30px" }}>
        <div className="center-text heading-sub">
          EXPERIENCE
      </div>
        <Company
          companyName="PlexusMD"
          imageLink={require("../Images/PlexusMD.png")}
          type="Internship"
          workPeriod="Jan, 2020 - June, 2020"
          workingAs={[
            "React Frontend Developer",
            "Search Engine Optimizations"
          ]}
          workLink={[
            "www.plexusmd.com",
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
          workingAs={[
            "Software Developer"
          ]}
          workLink={[
            "www.scrollright.com"
          ]}
          aboutCompany="ScrollRight is a online freelance service provider and product building company where you can ask to create
          your own app, website, software. Also, we provided freelance support to any firm, company who needs it. Think Big.
          Think Innovative. Think ScrollRight!"
        />
      </div>
    </div>
  );
}

export default ExperienceAndWork;