import React from "react";
import "./Skills.css";
import Skill from "./Skill";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Skills() {
    return (
        <div className="semi-white-bg boxShadow padding20 " style={{ marginTop: "30px" }}>
            <span className="center-text heading-sub paddingBottom20">SKILLS</span>
            <Row>
                <Col xs={6}>
                    <Skill skill='Java' prof='80' key='1' />
                </Col>
                <Col xs={6}>
                    <Skill skill='C' prof='70' key='2' />
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <Skill skill='C++' prof='75' key='3' />
                </Col>
                <Col xs={6}>
                    <Skill skill='MySQL' prof='70' key='4' />
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <Skill skill='HTML' prof='90' key='5' />
                </Col>
                <Col xs={6}>
                    <Skill skill='CSS' prof='90' key='6' />
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <Skill skill='JavaScript' prof='85' key='7' />
                </Col>
                <Col xs={6}>
                    <Skill skill='React JS' prof='80' key='8' />
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <Skill skill='Node JS' prof='70' key='9' />
                </Col>
                <Col xs={6}>
                    <Skill skill='C#' prof='50' key='10' />
                </Col>
            </Row>


        </div>
    );
}

export default Skills;