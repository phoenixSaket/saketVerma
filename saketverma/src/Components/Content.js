import React from 'react';

function Content(props) {
  const data = props;
  const renderContent = data.content.map((element) =>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{element}</div>
  );
  // console.log(data.title);
  return (
    <div className="aboutMe boxShadow semi-white-bg">
      <div className="inner-content">
        <span className="center-text heading-sub paddingBottom20">{data.title}</span>
        <span className="font-bold">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.subtitle}
        </span>
        <br></br>
        <span>
          {renderContent}
        </span>
      </div>
    </div>
  );
}

export default Content;
