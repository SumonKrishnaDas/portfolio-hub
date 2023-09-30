import React, { useState } from 'react';
import './Feature.css';

import icon2 from "../assets/Icons/Location Icon.png";
import icon3 from "../assets/Icons/Frame.png"
import { Link } from 'react-router-dom';

const Featurejob = ({Featurejob}) => {

    const {availableJobType,id} = Featurejob;
    


    return (
        <div className='Features'>
            
<img className='fimg' src={Featurejob.icon} alt="" />
<h3>{Featurejob.title}</h3>
<p>{Featurejob.brand}</p>

<div>

{

availableJobType.map(job => <button className='jobbtn'  >{job.name}</button>)
}
</div>
<div>

    <div className='address' >
<img className='icon' src={icon2} alt="" />
    <p>{Featurejob.address}</p>
    </div>
<div className='salary'  >
    <img className='icon' src={icon3} alt="" />
<p>{Featurejob.salary} </p>
</div>

</div>





<Link  to={`jobdetails/${id}`}> <button className='fbutton'>View Details </button> </Link>


        </div>
    );
};

export default Featurejob;