import React from 'react';
import './Footer.css'

import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa" 

const Footer = () => {
    return (
        <div className='Footer'>     

             <div className='footer'   >
                
            <div><img  className ="footer-img"src="/src/assets/All Images/CareerHub.png" alt="" />
            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br> Ratione quo quam perferendis inventore ipsum dolorum unde <br></br> ullam distinctio facilis quaerat.
            </p>
          
            <a className='icon' href='https://www.facebook.com/prokash.paul.pollob'><FaFacebookSquare></FaFacebookSquare></a>
                        <a className='icon' href='https://twitter.com/pollob_prokash'><FaTwitterSquare></FaTwitterSquare></a>
                        <a className='icon' href='https://www.instagram.com/prokashpollob/'><FaInstagramSquare></FaInstagramSquare></a>



            </div>
  
            <div className=''>
                    <p className='font-bold'>Company</p>
                    <div className='text-slate-500'>
                        <p>About Us</p>
                        <p>Work</p>
                        <p>Latest News</p>
                        <p>Careers</p>
                    </div>
                </div>
                <div className=''>
                    <p className='font-bold'>Support</p>
                    <div className='text-slate-500'>
                        <p>Help Desks</p>
                        <p>Sales</p>
                        <p>Become a Partner</p>
                        <p>Developers</p>
                    </div>
                </div>
                
                <div className=''>
                    <p className='font-bold'>Contact</p>
                    <div className='text-slate-500'>
                        <p>524 Broadway, NYC</p>
                        <p>01709005321</p>                
                    </div>
                </div>
                
                
                </div>   
            
            <hr />
            <small className='text-slate-400'>@2023 JobJunction. All Rights Reserved.</small>
        </div>
    );
};

export default Footer