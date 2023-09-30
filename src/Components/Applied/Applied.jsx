import React, { useEffect, useState } from 'react';
import './Applied.css';
import { getApplied } from '../Applydb';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Applied = () => {
    const appliedData = getApplied()




    const [applied, setApplied] = useState([]);

    useEffect(() => {

        fetch('FeatureJob.json')
            .then(res => res.json())
            .then(data => {



                let finalApplied = [];
                appliedData.map(apliedId => {

                    const d = data.find(fltrD => fltrD.id == apliedId)
                    finalApplied = [...finalApplied, d]

                })
                setApplied(finalApplied)

            })



    }, [])








    return (
        <div>
            <h1 className='appliedHead'> Applied Jobs</h1>

            <div>
                {
                    applied.map((obj)=>
                        {
                            const {address, availableJobType, brand, description, educationalrequirments, email, experience, icon, id, location, phone, responsibility, salary, title}=obj

                            return (
                                <div>
                 
                 <section className='aplied-section' > 

<div className=''>
    <img className='fimg' src={icon} alt="" />
   <div>
   <h5>{title}</h5>
    {
        availableJobType.map( job => <butoon className='jobbtn'  >{job.name}</butoon>)
    }
       <div className='aplied-det'> <p>{address} </p><p>{salary}</p></div>
   </div>


</div>


<Link  to={`/jobdetails/${id}`}> <button className='fbutton'>View Details </button> </Link>
                 </section>

                                </div>
                         )
                    
                        }
                    )                    
                }
            </div>

        

        </div>
    );
};

export default Applied;