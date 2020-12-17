import { Carousel } from 'react-bootstrap';
import React from 'react';
import { CarouselItem } from 'react-bootstrap';
// import './InstaBlock.css';

function InstaBlocks(props) {
    // console.log(props.props);

    const imageURL = props.props.imageURL;

    const tryRender = [];
    if (props.props.isMulti) {

        props.props.multiple.forEach(element => {
            tryRender.push(<CarouselItem>
                <img alt="multi" src={element.node.display_url} style={{ width: '100%', height: '100%' }} />
            </CarouselItem>);
        });
    }

    return (
        <div className="InstaBlockMain"
            style={{
                width: props.props.width, height: 'auto', margin: '1%',
                borderRadius: '15px', boxShadow: '0px 0px 5px 1px #00000045'
            }}>

            <div className="top">
                <img src={props.props.avatar} alt="avatar" className="instaAvatar" />
                <span className="white paddingLeft">{props.props.username}</span>
            </div>
            <div className="image">

                {/* Single Photo */}

                {!props.props.isMulti &&
                    <div className="carouselContainer2">
                        <div className="carouselInner2">
                            <Carousel indicators={false} controls={false}>
                                <CarouselItem>
                                    <img src={imageURL} alt="Instagram" style={{ width: '100%', height: '100%' }} />
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </div>
                }

                {/* Multi Photo */}

                {props.props.isMulti &&
                    <div className="carouselContainer2">
                        <div className="carouselInner2">
                            <Carousel interval={10000} indicators>
                                {tryRender}
                            </Carousel>
                        </div>
                    </div>
                }
            </div>
            <div className="bottomContainer">
                <div className="caption">
                    {props.props.caption}
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
        </div>
    );
}

export default InstaBlocks;