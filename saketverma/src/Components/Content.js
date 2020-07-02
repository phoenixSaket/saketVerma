import React from 'react';

function Content(props) {
    const data = props;
    console.log(data.title);
    return (
        <div className="aboutMe semi-white-bg" style={{boxShadow: '0px 0px 5px rgba(0,0,0,0.1)'}}>
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