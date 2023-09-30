import React, { useEffect, useState } from 'react';
import './Jobcategory.css'
import { Link } from 'react-router-dom';
import Job from '../Job/Job';

const JobCategory = () => {

    const [jobs, setjobs]=useState([]);

    useEffect( ()=>{
        

fetch('job.json')
.then( res => res.json())
.then( jobs =>setjobs(jobs))





    }
        
        
        
        
        ,[])


    return (
        <div className='job'>
<h1 className='head'> Job Category List  </h1>
<p className='para'> Lorem ipsum dolorve ex odit odio maiores veritatis accusantium nemo distinctio?</p>


<div className='job-details' >
{
jobs.map(job => <Job job={job} > </Job> )
         }


</div>



        </div>
    );
};

export default JobCategory;