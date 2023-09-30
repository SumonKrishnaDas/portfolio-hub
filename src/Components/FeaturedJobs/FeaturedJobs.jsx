import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css'
import Featurejob from '../Featurejob/Featurejob';
import { setItem } from 'localforage';

const FeaturedJobs = () => {

    const[FeaturedJobs, setFeaturedJob] = useState([]);

    const [visible,setVisible]= useState(4);
    const [btn,setBtn]  =useState(true)
    // const view =["View Less","view All"]



    const showMoreItems =()=>
    {
        setBtn(!btn);

        if(visible==4){
            setVisible((prevalue)=>prevalue+2);
        

        }
        else{

setVisible((prevalue)=>prevalue-2);
        }


        
          



    }
    
    
    useEffect ( ()=>{

        fetch('FeatureJob.json')
        .then( res => res.json())
        .then( FeaturedJobs => setFeaturedJob(FeaturedJobs))



    } ,[]);





    return (
        <div className='FeatureJobs'>
        <div className='FJP'>
        <h1>Featured  Jobs </h1>  
          <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, tempora.  </p>

        </div >





<div className='Feature' >

{

FeaturedJobs.slice(0,visible).map(FeaturedJob => <Featurejob key={FeaturedJob.id}  Featurejob =  {FeaturedJob} >  </Featurejob>)
}

<button  className='showMoreButton'  onClick={showMoreItems} > {btn? "Show More Jobs":"Show Less Jobs"}</button>
</div>

        </div>
    );
};

export default FeaturedJobs;