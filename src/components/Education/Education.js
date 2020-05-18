import React from 'react';

import './Education.scss';

export default function Education(props){
    const {datos} = props;

    return(
        <div className='education'>
            {datos.map((edu, index) => (
                <Edu edu={edu} index={index} />
            ))}
        </div>
    )
}

function Edu(props){
    const {edu,index} = props;

    return(
        <div className="Education-item" key={`Edu-${index}`}>
            <h3 className='Education-item__title'>{edu.degree} {edu.institution}</h3>
            <span className='Education-item__dates'>{edu.startDate} - {edu.endDate}</span>
            <div className='Education-item__description'>{edu.description}</div>
        </div>
    );
}