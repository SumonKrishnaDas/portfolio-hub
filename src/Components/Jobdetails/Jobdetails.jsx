import React, { useEffect, useState } from 'react';
import salaryicon from '../assets/Icons/Frame-1.png'
import phoneicon from "../assets/Icons/Frame-2.png"
import emailicon from "../assets/Icons/Frame-3.png"
import addressicon from "../assets/Icons/Frame-4.png"
import { useParams } from 'react-router-dom';
import './jobdetails.css';
import { apply } from '../Applydb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  

const Jobdetails = () => {

    const  {jobId} = useParams();


    

const [details,setDetails] = useState({});

useEffect(()=>{
 
fetch('../FeatureJob.json')
.then( res => res.json())
.then(data => setDetails(data.find((dt)=> dt.id ==jobId)))



},[]);

const applied =()=> toast("This job is already applied!!!");
const success = ()=>toast("applied Successfull!!!");
const wrong =()=> toast("something went wrong!!!");


const applyEvent =()=>{

    const rslt =apply(jobId)
    if(rslt==1)success()
    else if (rslt==0) applied()
    else wrong()

}



const{icon,title,brand,location,salary,description,responsibility,educationalrequirements,experience,availableJobType,phone,email,address}= details;

    return (
        <div >
            <h1 className='job-det'> Job Details</h1>
           
<div className='job-det-m'>


    <div> 
        <p> <b>Job Descripation</b>:{description}</p>
        <p> <b> Job Responsiblity:</b> {responsibility}</p>
        <p><b>Educational Requirement:</b>  </p><br />
        <p>{educationalrequirements}</p>

        <p><b>Job Experience:</b>  </p>
        <p>{experience} year</p>

        
        
        
        
         </div>

<div>



<h5>Job details </h5>
      
            
      <div className='flex' > <img src={salaryicon} alt="" /> 
      <b> &nbsp;Salary  </b>&nbsp;{salary}
      
      
        </div>
        <div className='flex'>
            <img src={salaryicon} alt="" />
            <b> &nbsp; Job Title</b>&nbsp;{title}
            
            </div>


            <h3>Contact Information</h3>
                        <hr></hr>

                        <div className="flex">
                            <img src={phoneicon}></img>
                            <b>&nbsp;Phone: </b>&nbsp;{phone}
                        </div>
                        <div className="flex">
                            <img src={emailicon}></img>
                            <b>&nbsp;Email: </b>&nbsp;{email}
                        </div>
                        <div className="flex">
                            <img src={addressicon}></img>
                            <b>&nbsp;Address: </b>&nbsp;{address}
                        </div>
                        <button  onClick={()=>applyEvent()} >Apply now</button>
<ToastContainer/>
              </div>
            


    
    </div>     
        </div>
    );
};

export default Jobdetails;