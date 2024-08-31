import React,{useState} from "react";
import img1 from './img/checked.png'

function Book() {


    const today = new Date().toISOString().split('T')[0];
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        const fname=document.getElementById('fname').value;
        const lname=document.getElementById('lname').value;
        const email=document.getElementById('email').value;
        const therapist=document.getElementById('therapist').value;
        const phone=document.getElementById('phone').value;
        const date=document.getElementById('date').value;
        const time=document.getElementById('time').value;
        const message=document.getElementById('massage').value;

        // alert(`${fname},${lname},${email},${therapist},${phone},${date},${time},${massage}`)

        const book={fname:fname,lname:lname,email:email,therapist:therapist,phone:phone,date:date,time:time,message:message}

        fetch("http://127.0.0.1:8000/members/bookapointment",{
          method:"POST",
          header:{
            'content-type':'application/json',
          },
          body:JSON.stringify(book)
        })

        document.getElementById('book_Form').reset();

        setIsSubmitted(true);
    }

    const closeModal = () => {
        setIsSubmitted(false);
      };

  return (
    <div className="body" style={{ marginLeft: "250px" }}>
      
      <div className="mt-4 ml-4 zo" style={{fontSize:"21px"}}>Welcome,</div>
      <div className="mt-1 ml-4 zo" style={{fontSize:"21px"}}>Book Your Appointment!</div>
      <div className="book_form zo ml-4 mr-4 mt-4 pt-4 pb-4 mb-5">
        <form onSubmit={handleSubmit} id='book_Form'>
            <label >First Name:</label>
            <input type="text" placeholder="Enter First Name" name='fname' id='fname' className="book_input" required/>
            <label className="book_label">Last Name:</label>
            <input type="text" placeholder="Enter Last Name" name='lname' id='lname' className="book_input" required/>
            <label className="book_label">Email:</label>
            <input type="email" placeholder="Enter Email" name='email' id='email' className="book_input" required/>
            
            <label className="book_label">Select Therapist</label>
            <select  className="book_input" id='therapist' name='therapist'>
                <option value='Zena Yarde'>Zena Yarde</option>
                <option value='Zarana Mithani'>Zarana Mithani</option>
                <option value='Zahara Diwan'>Zahara Diwan</option>
                <option value='Yesha Jhaveri'>Yesha Jhaveri</option>
                <option value='Vinode Mudliar'>Vinode Mudliar</option>
                <option value='Unnati Bhatiya'>Unnati Bhatiya</option>
                <option value='Ujjwal Yadav'>Ujjwal Yadav</option>
                <option value='Thomas Jacob'>Thomas Jacob</option>
                <option value='Tanya Malik'>Tanya Malik</option>
                <option value='Tanvi Kanan'>Tanvi Kanan</option>
                <option value='Tanvi Bajaj'>Tanvi Bajaj</option>
                <option value='Tanusree Mustafi'>Tanusree Mustafi</option>
                <option value='Tanisha Singh'>Tanisha Singh</option>
                <option value='Surbhi Shah'>Surbhi Shah</option>
                <option value='Sukriti Dua'>Sukriti Dua</option>
                <option value='Srishti Banerjee'>Srishti Banerjee</option>
                <option value='Sonakshi Gandhi'>Sonakshi Gandhi</option>
                <option value='Snehal Chhajed'>Snehal Chhajed</option>
                <option value='Simone Saiya'>Simone Saiya</option>
                <option value='Siddhika L'>Siddhika L</option>
            </select>
            <label className="book_label">Phone Number:</label>
            <input type="tel" placeholder="Enter Phone Number" name='phone' id='phone' className="book_input" minLength={10} maxLength={10}  required/>
            <label className="book_label">Appointment Date:</label>
            <input type="date" placeholder="Enter Appontment Date" name='date' id='date' className="book_input" min={today}  required/>
            <label className="book_label">Appointment Time:</label>
            <input type="time" placeholder="Enter Appontment time" name='time' id='time' className="book_input"  required/>
            <label className="book_label">Message (Optional)</label>
            <textarea rows='4' placeholder="Enter Your Massage" name='massage' id='massage' className="book_input"></textarea>
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
  );
}

export default Book;
