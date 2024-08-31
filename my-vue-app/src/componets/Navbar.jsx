import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import img1 from './img/_edited.png'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{overflowX:"hidden"}}>
          <div className="container-fluid mt-4 justify-content-center">
              <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#link">
                  <span className="navbar-toggler-icon"></span>
              </button>
                <ul className="navbar-nav" >
                  <li className="nav-item mt-1 pl-5"><Link to='/' className="nav-link"><img src={img1} width="150px" alt=""/></Link></li>
                  <div className="collapse navbar-collapse" id="link">
                    <li className="nav-item pl-5"><Link to='/find'  className="nav-link" id="h1">Find a Therapist</Link></li>
                    <li className="nav-item pl-5"><Link to='/service'  className="nav-link" id="h1">Services</Link></li>
                    <li className="nav-item pl-5"><Link to='/faq'  className="nav-link" id="h1">FAQs</Link></li>
                    <li className="nav-item pl-5"><Link to='/signin' className="nav-link" id="h1">Log In</Link></li>
                  </div>
                </ul>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
