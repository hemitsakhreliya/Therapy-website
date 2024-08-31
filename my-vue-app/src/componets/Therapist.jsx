import React, { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import './Therapist.css'
import axios from 'axios';


function Therapist() {

    const [data, setData] = useState([]);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [currentItem, setCurrentItem] = useState(null);

    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/members/therapizdetails/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  const handleView = (item) => {
    setCurrentItem(item);
    setIsSubmitted(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = () => {
    if (password === currentItem.password) {
      navigate(`details/${currentItem.id}`);
    } else {
      alert("Incorrect password. Please try again.");
      setIsSubmitted(false);
    }
  };

  return (
    <div>
        {data.map(item=>{
            return(
                <div className='mt-5 mb-5 pl-5 pr-5 zo body_therapist' key={item.id} style={{marginLeft:"250px"}}>
                    <div className="doctor-profile">
                        <img src={item.img} alt="Doctor" className="doctor-image"/>
                        <div className="doctor-details pl-4">
                            <h2 className="doctor-name pt-4">{item.name}</h2>
                            <p className="doctor-location">{item.loc}</p>
                        </div>
                        {/* <Link to={`details/${item.id}`}><button onClick={handleView} className="view-button">View</button></Link> */}
                        <button onClick={()=>handleView(item)} className="view-button">View</button>
                    </div>
                </div>
            )
        })}

        {isSubmitted && (
          <div className="modal">
            <div className="modal-content">
              <div style={{ textAlign: "center" }}>
                <h3 className="pt-2">Enter Password</h3>
                <input type='password' name='pass' onChange={handlePasswordChange} style={{width:"90%",padding:"5px",border:"1px solid black",borderRadius:"10px"}}/>
              </div>
              <div>
                 <button className='mt-4 model_b3' onClick={handlePasswordSubmit}>Submit</button>
              </div>
            </div>
          </div>
        )}
        
    </div>
    
  )
}

export default Therapist
