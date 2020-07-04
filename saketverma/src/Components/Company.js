import React from 'react';

function Company(props) {
  const data = props;
  // console.log("Data is ",data);
  // const image = require(data.imageLink);
  return (
    <div className="internshipContainer">
      <div className="company noWrapOnMobile">
        <div className="topContainer">
          <img alt={data.companyName} src={data.imageLink} style={{ width: '60px', height: '60px', borderRadius: '5px' }} />
          <div className="textContainerTop">
            <div className="CompanyName">
              {/* PlexusMD */}
              {data.companyName}
                </div>
            <div>
              {data.type}
              {/* INTERNSHIP */}
                </div>
            <div className="workPeriod">
              {data.workPeriod}
              {/* Jan, 2020 - June, 2020 */}
              </div>
          </div>
        </div>
        <div className="textContainerBottom">
          <span>
            {data.workingAs[0]}
            {/* React Frontend Developer */}
            </span>
          <br />
          {!!data.workingAs[1] && 
          <span>
            {/* Search Engine Optimizations */}
            {data.workingAs[1]}
          </span>}
        </div>
        <div className="workLink">
          <a className="workLink" href={data.workLink[0]} rel='noopener noreferrer' target="_blank" >{data.workLink[0]}</a>
          {!!data.workLink[1] &&
          <a className="workLink inline"
            href={data.workLink[1]} rel='noopener noreferrer' target="_blank" >
            {/* <i className="fa fa-linkedin-square" style={{paddingRight: '5px'}}/> */}
              PlexusMD's LinkedIn Profile
            </a>}
        </div>
      </div>
      <div className="aboutCompany">
        <div className="CompanyNameBottom">
          About {data.companyName}
          {/* PlexusMD */}
          </div>
        <div className="companyDescription">
          {data.aboutCompany}
          {/* PlexusMD is an online professional network exclusively for medical professionals and healthcare organisations.
          With lakhs of doctors and hundreds of hospitals across India,
          we are India's fastest growing online community of healthcare professionals.
          PlexusMD helps doctors create their professional identity on the web,
          stay updated with the latest news and developments in their specialty,
          find & connect with other medical professionals and apply to the best jobs,
          fellowships and courses from leading institutions. */}
          </div>
      </div>
    </div>
  );
}

export default Company;