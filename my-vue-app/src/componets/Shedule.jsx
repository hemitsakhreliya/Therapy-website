import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import img1 from './img/checked.png'


function Shedule() {
    const navigate=useNavigate()

    const today = new Date().toISOString().split('T')[0];
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        const fname=document.getElementById('fname').value;
        const lname=document.getElementById('lname').value;
        const email=document.getElementById('email').value;
        const phone=document.getElementById('phone').value;
        const date=document.getElementById('date').value;
        const time=document.getElementById('time').value;

        // alert(`Your Appointment is Reshedule ${fname},${lname},${email},${phone},${date},${time}`)

        document.getElementById('book_Form').reset();

        setIsSubmitted(true);
        
    }


    const closeModal = () => {
        setIsSubmitted(false);
      };

  return (
    <div style={{marginLeft:"250px"}} >
      {/* <div className="main-cotent ">
        <div className="topbar">
          <h2> 👋,Hello Hemit</h2>
          <button className="profile" onClick={handleLogOut}>Log Out</button>
        </div>
      </div> */}
      {/* <div className="content-area mt-3 ml-4 mr-4">
        <div className="card1 zoom">
          <h3>Reshedule Your Appointment!</h3>
          <p>Plese Fill this form.</p>
        </div>
      </div> */}

        <div className="mt-4 ml-4 zo" style={{fontSize:"21px"}}>Welcome,</div>
        <div className="mt-1 ml-4 zo" style={{fontSize:"21px"}}>Reshedule Your Appointment!</div>

      <div className="book_form zo mt-4 mb-5 ml-4 mr-4 pt-4 pb-4">
        <form onSubmit={handleSubmit} id='book_Form'>
            <label >First Name:</label>
            <input type="text" placeholder="Enter First Name" name='fname' id='fname' className="book_input" required/>
            <label className="book_label">Last Name:</label>
            <input type="text" placeholder="Enter Last Name" name='lname' id='lname' className="book_input" required/>
            <label className="book_label">Email:</label>
            <input type="email" placeholder="Enter Email" name='email' id='email' className="book_input" required/>
            
            <label className="book_label">Phone Number:</label>
            <input type="tel" placeholder="Enter Phone Number" name='phone' id='phone' className="book_input" minLength={10} maxLength={10}  required/>
            <label className="book_label">Appointment Date:</label>
            <input type="date" placeholder="Enter Appontment Date" name='date' id='date' className="book_input" min={today}  required/>
            <label className="book_label">Appointment Time:</label>
            <input type="time" placeholder="Enter Appontment time" name='time' id='time' className="book_input"  required/>

            <div className="book_label" style={{textAlign:"center"}}>
                <button type='submit' id='explor'>Submit</button>
            </div>
        </form>
        {isSubmitted && (
        <div className="modal">
          <div className="modal-content">
            <div style={{textAlign:"center"}}><img src={img1} className='sub_img'/></div>
            <h3 className='pt-3'>submitted!</h3>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Shedule
