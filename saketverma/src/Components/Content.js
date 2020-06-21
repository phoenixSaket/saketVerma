import React from 'react';

function Content(props) {
    const data = props;
    console.log(data.title);
    return (
        <div className="aboutMe">
            <span className="center-text heading-sub padding-top-down">{data.title}</span>
            <br></br>
            <span className="font-bold">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.subtitle}
              </span>
            <br></br>
            <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.content}
              </span>
        </div>
    );
}

export default Content;
