import React, { useEffect, useState } from 'react';
import './Applied.css';
import { getApplied } from '../Applydb';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


let finalApplied = [];
const Applied = () => {
    const appliedData = getApplied()




    const [applied, setApplied] = useState([]);

    useEffect(() => {

        fetch('FeatureJob.json')
            .then(res => res.json())
            .then(data => {



                appliedData.map(apliedId => {

                    const d = data.find(fltrD => fltrD.id == apliedId)
                    finalApplied = [...finalApplied, d]

                })


        setApplied(finalApplied)








                

            })



    }, [])

    



 const handleRemote=()=>{

    const Remote= finalApplied.filter((dt)=>dt.availableJobType[0].name=="Remote")

    setApplied(Remote)
 }
 
      

 const handelOnsite =()=>{



    const onSite = finalApplied.filter((dt)=>dt.availableJobType[0].name=="Onsite")
    setApplied(onSite)

 }


 const handleAll= ()=>{


    setApplied(finalApplied)
    
     }


    return (
        <div>
            <h1 className='appliedHead'> Applied Jobs</h1>

            <button className='separateBtn' onClick={handleAll} >All</button>
            <button className='separateBtn' onClick={handleRemote}  >Remote</button>
            <button  className='separateBtn' onClick={handelOnsite} >Onsite</button>

            <div>
                {
                    applied.map((obj)=>
                        {
                            const {address, availableJobType, brand, description, educationalrequirments, email, experience, icon, id, location, phone, responsibility, salary, title}=obj

                            return (
                                <div>
                 
                 <section className='aplied-section' > 



{
    console.log(availableJobType)
}


<div className='aplied-det'>
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