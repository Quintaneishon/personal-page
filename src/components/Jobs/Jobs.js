import React from 'react';

import './Jobs.scss';

export default function Jobs(props){
    const { datos } = props;
    console.log(datos);
    return(
        <div className='jobs'>
            {datos.map((job, index) => (
                <Job job={job} index={index} />
            ))}
        </div>
    );
}

function Job(props){
    const {job,index} = props;

    return(
        <div className="job-item" key={`job-${index}`}>
            <h3 className='job-item__company'>{job.company} - {job.jobTitle}</h3>
            <span className='job-item__dates'>{job.startDate} - {job.endDate}</span>
            <div className='job-item__description'>{job.jobDescription}</div>
        </div>
    );
}