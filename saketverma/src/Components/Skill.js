import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

function Skill(props) {

    return (
        <div className="skillContainer">
            <div className="skillTitle">
                {props.skill}
            </div>
            <div className="skill">
                <ProgressBar
                    // className="shadows"
                    style={{ boxShadow: 'rgba(0, 0, 0, 0.27) 0px 0px 4px 1px' }}
                    animated
                    now={props.prof}
                    min={0}
                    max={100}
                    // stripped
                    variant='info'
                    label={props.prof + "%"}
                    key={props.key}
                />
            </div>
        </div>
    );
}

export default Skill;