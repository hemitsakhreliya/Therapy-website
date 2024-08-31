import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css'
import Profile from './componets/Profile';
import Project from './componets/Project';
import Find from './componets/Find'
import Service from './componets/Service';
import Faq from './componets/Faq';
import Sign_in from './componets/Sign_in';
import Book from './componets/Book';
import Dashbord from './componets/Dashbord';
import Shedule from './componets/Shedule';
import Admin from './componets/Admin';
import Therapist from './componets/Therapist';
import Details from './componets/Details';
import Change from './componets/Change';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Project/>}/>
          <Route path='find' element={<Find/>}/>
          <Route path='service' element={<Service/>}/>
          <Route path='faq' element={<Faq/>}/>
          <Route path='profile/:id' element={<Profile/>}/>
          <Route path='signin' element={<Sign_in/>}/>
          <Route path='dashbord' element={<Dashbord/>}>
            <Route index element={<Book/>}/>
            <Route path='shedule' element={<Shedule/>}/>
          </Route>
          <Route path='admin' element={<Admin/>}>
            <Route index element={<Therapist/>}/>
            <Route path='details/:id' element={<Details/>}/>
            <Route path='change' element={<Change/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
