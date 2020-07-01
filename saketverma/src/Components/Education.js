import React from 'react';
import "./Education.css";
import { Row, Col } from 'react-bootstrap';

function Education() {
    return (
        <div className="boxShadow padding20 semi-white-bg">
            <span className="center-text heading-sub">
                EDUCATION
            </span>
            <div className="Education-Container">
                
                {/* MCA */}

                <Row style={{ width: '100%' }}>
                    <Col xs="6" className="leftSide">
                        <span className="educationTitle">MCA</span><br />
                        <span className="institute">
                            Veermata Jijabai Technological Institute<br />
                            <span className="city">
                                Mumbai
                                </span>
                        </span><br />
                        <span className="duration">2017 - 2020</span>
                    </Col>
                    <div className="verticalLine" />
                    <Col xs="6" className="rightSide" />
                </Row>
                
                
                <Row className="blanRow">
                    <Col xs="6" />
                    <div className="verticalLine" />
                    <Col xs="6" />
                </Row>
                
                {/* BCA */}

                <Row style={{ width: '100%' }}>
                    <Col xs="6" className="leftSide" />
                    <div className="verticalLine" />
                    <Col xs="6" className="rightSide" >
                        <span className="educationTitle">BCA</span><br />
                        <span className="institute">
                            G. H. Raisoni Institute for .I.T<br />
                            <span className="city">
                                Nagpur
                            </span>
                        </span><br />
                        <span className="duration">2014 - 2017</span>
                    </Col>
                </Row>
                <Row className="blanRow">
                    <Col xs="6" />
                    <div className="verticalLine" />
                    <Col xs="6" />
                </Row>
                
                {/* High School */}

                <Row style={{ width: '100%' }}>
                    <Col xs="6" className="leftSide">
                        <span className="educationTitle">High School Certificate (HSC)</span><br />
                        <span className="institute">
                            Ushabai Deshmukh Jr. College<br />
                            <span className="city">
                                Achalpur
                            </span>
                        </span><br />
                        <span className="duration">2014</span>
                    </Col>
                    <div className="verticalLine" />
                    <Col xs="6" className="rightSide" />
                </Row>
                <Row className="blanRow">
                    <Col xs="6" />
                    <div className="verticalLine" />
                    <Col xs="6" />
                </Row>

                {/* Secondary School */}

                <Row style={{ width: '100%' }}>
                    <Col xs="6" className="leftSide" />
                    <div className="verticalLine" />
                    <Col xs="6" className="rightSide" >
                        <span className="educationTitle">Secondary School Certificate (SSC)</span><br />
                        <span className="institute">
                            Fatima Convent High School<br />
                            <span className="city">
                                Achalpur
                            </span>
                        </span><br />
                        <span className="duration">2012</span>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Education;