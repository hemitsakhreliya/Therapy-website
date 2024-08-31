// src/components/Dashboard.js
import React from 'react';
import './Dashbord.css';
import {Link,Outlet,useNavigate} from "react-router-dom";
import img1 from './img/404.jpg'


const Dashbord = () => {
    const navigate=useNavigate()
    const handleLogOut=()=>{
        window.localStorage.clear();
        navigate('/')
    }
    const name=window.localStorage.getItem('Lname')
    if(window.localStorage.getItem('loggedIn')){
        return (
            <div className='body'>
                <div className="dashboard-container">
                    <div className="sidebar ">
                        <h2>Dashboard</h2>
                        <hr/>
                        <div className="sidebar-item"><Link to='' id='link_dash'>Book Appointment</Link></div>
                        <div className="sidebar-item"><Link to='shedule' id='link_dash'>Reshedule Sessions</Link></div>
                        <div className="sidebar-item">Feedback</div>
                        <div className="sidebar-item">Messages</div>
                    </div>
                </div>

                <div className="main-cotent" style={{marginLeft:"250px"}}>
                    <div className="topbar">
                        <h2> 👋,Hello {name}</h2>
                        <button className="profile" onClick={handleLogOut}>Log Out</button>
                    </div>
                </div>
            <Outlet/>
            </div>
          );
    }else{
        return(
            <div className="not-found-container">
                <img src={img1} alt="Page Not Found" className="not-found-image" />
                <h1 className='h1_404'>Oops! Page Not Found</h1>
                <p className='p_404'>Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className="home-link">Go Back to Home</Link>
             </div>
        )
    }
  
};

export default Dashbord;
