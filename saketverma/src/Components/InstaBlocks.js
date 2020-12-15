import React from 'react';
// import './InstaBlock.css';

function InstaBlocks(props) {
    console.log(props.props);

    const imageURL = props.props.imageURL;

    return (
        <div className="InstaBlockMain"
            style={{
                width: props.props.width, height: 'auto', alignSelf: 'center', margin: '1%',
                borderRadius: '15px', boxShadow: '0px 0px 5px 1px #00000045'    
            }}>

            <div className="top">
                <img src={props.props.avatar} alt="avatar" className="instaAvatar" />
                <span className="white paddingLeft">{props.props.username}</span>
            </div>
            <div className="image">
                <img src={imageURL} alt="Instagram" style={{ width: '94%' }} />
            </div>
            <div className="bottom">
                <i className="fa fa-heart" aria-hidden="true"></i>
                <span className="red">
                    {props.props.likes}
                </span>
                <div className="middleGap" />
                <i className="fa fa-comment" aria-hidden="true"></i>
                {props.props.comments}
            </div>
        </div>
    );
}

export default InstaBlocks;