import React from 'react';
import './job.css'

const Job = ({job}) => {
    return (
        <div className='jobs' > 
        


        <img src={job.icon} alt="" />
<h3> {job.name} </h3>
          <p>{job.numberOfJobs}</p>


    

        </div>
    );
};

export default Job;