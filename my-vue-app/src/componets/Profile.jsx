import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import "./P_1.css";
import img2 from "./img/Butterflies.png";
import img3 from "./img/Paperplane.webp";
import img4 from "./img/Hand.png";
import axios from "axios";
import Navbar from "./Navbar";

function Profile() {

  const [data, setData] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/members/profiles/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);


  return (
    <div>
      <Navbar />
      {data.map((item) => {

        if(id == item.id){
            return(
                <>
                    <div className="container-fluid mt-4 zoom3" id="p1">
                        <div className="pt-3" id="pname">{item.name}</div>
                        <div id="title">{item.post}</div>
                        <div id="line">-------------------</div>
                        <table className="table">
                            <tr>
                                <td rowspan="6" className="pt-5" id="img11">
                                    <img src={item.img} alt="" id="img11_1" />
                                </td>
                            </tr>
                            <tr>
                                <td className="pt-5" id="td1_1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" id="logo1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    </svg>
                                    <span id="td11">{item.gender}</span>
                                </td>
                            </tr>
                            <tr>
                                <td id="td1_1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" id="logo2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>
                                    </svg>
                                    <span id="td11"> {item.age} years</span>
                                </td>
                            </tr>
                            <tr>
                                <td id="td1_1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" id="logo1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                                    </svg>
                                    <span id="td11">{item.loc}</span>
                                </td>
                            </tr>
                            <tr>
                                <td id="td1_1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" id="logo1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/>
                                    </svg>
                                    <span id="td11">{item.exp} years experience</span>
                                </td>
                            </tr>
                            <tr>
                                <td id="td1_1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" id="logo1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                                    </svg>
                                    <span id="td11">{item.email}</span>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div className="container-fluid" id="p2">
                        <div className="pt-5" id="name2">Educational Qualifications</div>
                        <div id="line2">-------------------------------------</div>
                        <div className="container-fluied" style={{ position: "relative" }}>
                            <div className="container mt-2" id="div">
                                <div id="demo" className="carousel slide" data-bs-ride="carousel">

                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <pre id="slid11">{item.edu1}</pre>
                                        </div>
                                        <div className="carousel-item">
                                            <pre id="slid22">{item.edu2}</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-next" data-bs-target="#demo" data-bs-slide="next">
                                <span className="carousel-control-next-icon" id="b1"></span>
                            </button>
                        </div>
                        <br />
                        <br />
                    </div>

                    <div className="container-fluid" id="div2">
                        <div className="row pt-5 justify-content-between pl-2">
                            <div className="col-sm-4" id="div21">
                                <div style={{ textAlign: "center" }}>
                                    <img src={img2} id="div22" alt="" />
                                </div>
                                <div id="title1">Specialisation</div>
                                <div id="line11">---------------</div>
                                <pre className="pt-1" id="par1">{item.Specialisation}</pre>
                            </div>
                            <div className="col-sm-4" id="div21">
                                <div style={{ textAlign: "center" }}>
                                    <img src={img3} id="div22" alt="" />
                                </div>
                                <div id="title1">Approaches</div>
                                <div id="line11">---------------</div>
                                <pre className="pt-1" id="par1">{item.Approaches}</pre>
                            </div>
                            <div className="col-sm-4 mr-2" id="div21">
                                <div className="pt-4" style={{ textAlign: "center" }}>
                                    <img src={img4} id="div22" alt="" />
                                </div>
                                <div id="title1">Fees </div>
                                <div id="line11">---------------</div>
                                <pre className="pt-1" id="par1">{item.Fees}</pre>
                            </div>
                        </div>
                        <div className="pt-5 font-italic" id="par2">All our therapists are well equipped to deal with anxiety, stress, depression and emotional regulation concerns. <br /> Prices noted are for Indian residents and may differ for clients residing abroad.</div>
                    </div>

                    <div className="container-fluid" id="div3">
                        <div className="pt-4" id="div3_title">Additional Information</div>
                        <div id="t3_line">-------------------</div>
                        <div className="row justify-content-between">

                            <div className="col-sm-4 pt-4">
                                <div style={{ textAlign: "center" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" id="i1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"/>
                                    </svg>
                                </div>
                                <div id="i1_t">
                                    <br />
                                    {item.language}
                                </div>
                            </div>

                            <div className="col-sm-4 pt-4">
                                <div style={{ textAlign: "center" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" id="i1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                                    </svg>
                                </div>
                                <div id="i1_t">
                                    <br />
                                    {item.platform}
                                </div>
                            </div>

                            <div className="col-sm-4 pt-4">
                                <div style={{ textAlign: "center" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" id="i1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
                                    </svg>
                                </div>
                                <div id="i1_t">
                                    <br />
                                    {item.contat}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mt-4 mb-4" id="div4">
                        <div className="pt-4" id="t_d4">Know Your Therapist</div>
                        <div id="t_line">-------------------</div>
                        <div className="container-fluied" style={{ position: "relative" }}>
                            <div className="container mt-5" id="div41">
                                <div id="demo1" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                        <button data-bs-target="#demo1" data-bs-slide-to="0" className="active" id="d4_slid"></button>
                                        <button data-bs-target="#demo1" data-bs-slide-to="1" id="d4_slid"></button>
                                        <button data-bs-target="#demo1" data-bs-slide-to="2" id="d4_slid"></button>
                                        <button data-bs-target="#demo1" data-bs-slide-to="3" id="d4_slid"></button>
                                    </div>
                                    <div className="carousel-inner">

                                        <div className="carousel-item active">
                                            <div id="d4_p">How did you know you wanted to be a therapist?</div>
                                            <p className="pt-4 pb-5" id="d4_p2">{item.know1}</p>
                                        </div>

                                        <div className="carousel-item">
                                            <div id="d4_p">What makes you different from other therapists?</div>
                                            <p className="pt-4 pb-5" id="d4_p2">{item.know2}</p>
                                        </div>
                                        <div className="carousel-item">
                                            <div id="d4_p">What does a typical session with you look like?</div>
                                            <p className="pt-4 pb-5" id="d4_p2">{item.know3}</p>
                                        </div>
                                        <div className="carousel-item">
                                            <div id="d4_p">What should a client do/know before starting therapy with you?</div>
                                            <p className="pt-4 pb-5" id="d4_p2">{item.know4}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev justify-content-between pb-5" data-bs-target="#demo1" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" id="d4_b"></span>
                            </button>
                            <button className="carousel-control-next justify-content-end pb-5" data-bs-target="#demo1" data-bs-slide="next">
                                <span className="carousel-control-next-icon" id="d4_b"></span>
                            </button>
                        </div>
                    </div>
                </>
            )
        }
        
    })}
    </div>
  );
}

export default Profile;
