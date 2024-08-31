import React from 'react'
import { Link,Outlet,useNavigate } from 'react-router-dom'
import './Admin.css'
import img1 from './img/404.jpg'

const Admin = () => {

    const navigate=useNavigate()

    const date=new Date()
    const tarikh=date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear()

    function handleLogout(){
        window.localStorage.clear();
        navigate('/')
    }

    if(window.localStorage.getItem('loggedIn')){
        return (
            <div>
                <div className="dashboard-container">
                    <div className="sidebar">
                        <h2>Admin Panel</h2>
                        <hr/>
                        <div className="sidebar-item"><Link to='' id='link_dash' >Appointments</Link></div>
                        <div className="sidebar-item"><Link to='change/' id='link_dash' >Change Password</Link></div>
                        <div className="sidebar-item" onClick={handleLogout}><Link to='/' id='link_dash' >Log Out</Link></div>
                    </div>
                </div>
                <div className="header_ad">
                    <h1>Dashboard</h1>
                    <div className="profile_ad">
                        <span>{tarikh}</span>
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

export default Admin;
