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
          imageLink={"https://raw.githubusercontent.com/phoenixSaket/saketVerma/master/saketverma/src/Images/PlexusMD.png"}
          type="Internship"
          workPeriod="Jan, 2020 - June, 2020"
          workingAs={[
            "React Frontend Developer",
            "Search Engine Optimizations"
          ]}
          workLink={[
            "https://www.plexusmd.com",
            "https://www.linkedin.com/company/plexusmd/"
          ]}
          aboutCompany="PlexusMD is an online professional network exclusively for medical professionals and healthcare organisations."
        />
        <Company
          companyName="ScrollRight"
          imageLink={"https://raw.githubusercontent.com/phoenixSaket/saketVerma/master/saketverma/src/Images/sr_mukul.png"}
          type="Freelance"
          workPeriod="Since June, 2020"
          workingAs={[
            "Software Developer"
          ]}
          workLink={[
            "https://www.scrollright.com"
          ]}
          aboutCompany="ScrollRight is a online freelance service provider and product building company where you can ask to create
          your own app, website, software. Think Big.
          Think Innovative. Think ScrollRight!"
        />
        <Company
          companyName="CitiusTech"
          imageLink={"https://raw.githubusercontent.com/phoenixSaket/saketVerma/master/saketverma/src/Images/citiustech.png"}
          type="Full Time"
          workPeriod="Since October, 2020"
          workingAs={[
            "Software Developer"
          ]}
          workLink={[
            "https://www.citiustech.com"
          ]}
          aboutCompany="CitiusTech is a healthcare IT company providing specialized healthcare technology & business services, consulting, and medical IT solutions."
        />
      </div>
    </div>
  );
}

export default ExperienceAndWork;
