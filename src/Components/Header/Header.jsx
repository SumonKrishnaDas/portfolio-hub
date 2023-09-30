import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            

<div> <img src="/src/assets/All Images/CareerHub.png" alt="" />   </div>


<div className='Link'> 
<Link to="/" > Home </Link>

<Link to="statics"  className='Lin'>Statics</Link>
<Link to="apliedjob">Applied jobs </Link>
<Link to="blog" >  Blog</Link>



    
     </div>




<div> <button className='btn'>Start Applying </button></div>



        </div>
    );
};

export default Header;