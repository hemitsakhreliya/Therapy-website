import React, { useState,useEffect } from 'react';
import './Change.css';
import axios from 'axios';

const Change = () => {

    const [data, setData] = useState([]);

    const [name, setName] = useState('');

    const [oldPassword, setOldPassword] = useState('');

    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/members/therapizdetails/')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
      }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        data.map((item=>{
            if(item.name==name && item.password==oldPassword){
                
                const change={id:item.id,password:newPassword}
                fetch("http://127.0.0.1:8000/members/changepass",{
                    method:"POST",
                    header:{
                      'content-type':'application/json',
                    },
                    body:JSON.stringify(change)
                  })
            }
        }))
        setName('');
        setOldPassword('');
        setNewPassword('');
    };

    return (
        <div className='change_body'>
            <div className="password-container zo pt-4">
            <form className="password-form" onSubmit={handleSubmit} id='change_pass' >
                <h2>Change Password</h2>

                <div className="input-group">
                    <label>Therapist Name</label>
                    <input type="text" id="username" value={name} onChange={(e) => setName(e.target.value)}  required />
                </div>

                <div className="input-group">
                    <label>Old Password</label>
                    <input type="password" id="old-password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
                </div>

                <div className="input-group">
                    <label>New Password</label>
                    <input type="password" id="new-password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                </div>

                <button className='button_pass' type="submit">Update Password</button>
            </form>
        </div>
        </div>
        
    );
};

export default Change;
