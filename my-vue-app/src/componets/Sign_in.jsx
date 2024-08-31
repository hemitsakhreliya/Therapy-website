import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Sign_in.css";
import Navbar from "./Navbar";
import img1 from './img/checked.png'


const Sign_in = () => {

  const navigate=useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);

  const [isSubmitted, setIsSubmitted] = useState(false);


  // const [Finallogin_name,setFinallogin_name]=useState("")
  // const [Finallogin_pass,setFinallogin_pass]=useState("")


  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/members/register/")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error!", error);
  //     });
  // }, []);

  

  async function handleSubmitSignin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    try {
        const response = await fetch('http://127.0.0.1:8000/members/register/');
        const data = await response.json();

        const user = data.find(item => item.username === username && item.password === pass);

        if (user) {
            
            window.localStorage.setItem("Lname", username);
            window.localStorage.setItem("Lpass", JSON.stringify(pass));
            window.localStorage.setItem("loggedIn", true);

            if(username==='Admin'){
              navigate('/admin')
            }else{
              navigate('/dashbord');
            }
        } else {
          setIsSubmitted(true);
        }
    } catch (error) {
        console.error("There was an error!", error);
    }

    

    document.getElementById("s_in").reset();
}

  function handleSubmitSignup(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    

    const signup={name:name,email:email,password:password}
    console.log(signup)

    fetch("http://127.0.0.1:8000/members/signup",{
      method:"POST",
      header:{
        'content-type':'application/json',
      },
      body:JSON.stringify(signup)
    })

    setIsSubmitted(true);

    document.getElementById("s_up").reset();
  }

  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <div>
      <Navbar/>
    <div className="auth-container zo mt-4">
      <div className="blur-background"></div>
      <div className="auth-form-container">
        <div className="auth-form">
          {isSignIn ? (
            <>
            
              <h2>Sign In</h2>
              <form id="s_in" onSubmit={handleSubmitSignin}>
                <div className="form-group">
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button type="submit">Sign In</button>
              </form>
              <p className="toggle-form">
                Don't have an account?{" "}
                <button
                  onClick={() => {
                    setIsSignIn(false);
                    document.getElementById("s_in").reset();
                  }}
                >
                  Sign Up
                </button>
              </p>

              {isSubmitted && (
        <div className="modal">
          <div className="modal-content">
            <h3 className='pt-3'> Plese First Sign Up!</h3>
            <button onClick={closeModal}>Ok</button>
          </div>
        </div>
      )}
            </>
          ) : (
            <>
              <h2>Sign Up</h2>
              <form id="s_up" onSubmit={handleSubmitSignup}>
                <div className="form-group">
                  <label htmlFor="name">username</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="pass"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button type="submit">Sign Up</button>
              </form>
              <p className="toggle-form">
                Already have an account?{" "}
                <button
                  onClick={() => {
                    setIsSignIn(true);
                    document.getElementById("s_up").reset();
                  }}
                >
                  Sign In
                </button>
              </p>

              {isSubmitted && (
        <div className="modal">
          <div className="modal-content">
            <div style={{textAlign:"center"}}><img src={img1} className='sub_img'/></div>
            <h3 className='pt-3'>Register Successfully!</h3>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
            </>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sign_in;
