import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import JobCategory from '../JobCategory/JobCategory';
import './Main.css'
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <div >
            
    <div className='main'  >


    <Header> </Header>
    
    <Outlet> </Outlet>
    
            


    </div>
    <Footer> </Footer>
        </div>
    );
};

export default Main;