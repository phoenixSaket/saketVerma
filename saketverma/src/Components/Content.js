import React from 'react';

function Content(props) {
  const data = props;
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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.content}
        </span>
      </div>
    </div>
  );
}

export default Content;
