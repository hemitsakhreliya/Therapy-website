import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Find.css'
import Navbar from './Navbar';
import axios from 'axios';
function Find() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/members/therapizdetails/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <div className="mt-5 zo" id="find1">Find a Therapist</div>

      {data.map(item=>{
        return(
          <>
            <div className='container mt-5 mb-5 div1'>
              <div className='row'>
                <div className='col-sm-5'>
                  <div id="img1" key={item.id}><img  src={item.img} id="img1_1" alt=""/></div>
                </div>
          
                <div className='col-sm'>
                  <div className="pt-3" id="td1">{item.name}</div>
                  <div className='pt-3' id='td2'>{item.post}</div>
                  <div id='td3' style={{marginTop:"-9%"}}>-----------</div>
                  <div className='pt-3' id='td4'><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ4VLwpdFdN9I9B8jisSTkTYhEToaCKameTzm-Pz0mDx6NqW9Pu"   id="td4_logo" alt=""/><span id="td4_font"> {item.exp} years experience</span></div>
                  <div className='pt-3' id='td4'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXk2u_WTWgVvZm1-LmmHz_6k_qkJ6mVu1Sk9CID0pfzd0cL_E5"   id="td4_logo" alt=""/><span id="td4_font2"> INR {item.inr}</span></div>
                  <div className='pt-3' id='td4'><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIMji6PxKWufzsX-QekgwQOucao0lSAdm-yO0ioTbId1NOuysF" id="td4_logo" alt=""/><span id="td4_font"> {item.loc}</span></div>
                  <div id='td4' className='pt-4'><Link to={`/profile/${item.id}`}><button class="btn p-2" id="bt1" >View Profile  <span style={{color:"floralwhite", fontWeight:"bold"}}></span></button></Link></div>
                </div>
              </div>
            </div>
          </>
        )
        
      })}
    </div>
  )
}

export default Find
