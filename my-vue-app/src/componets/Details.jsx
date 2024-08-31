import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Details.css";
import img1 from "./img/checked.png";
import img2 from "./img/reject.png"

import axios from "axios";

const Details = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [data, setData] = useState([]);

  const [book, setBook] = useState([]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isRejected,setIsRejected]=useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/members/therapizdetails/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/members/book/")
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  const selectedItem = data.find((item) => item.id == id);

  if (!selectedItem) {
    return <div>No doctor found.</div>;
  }

  const handleAccept = (iid) => {
    const id = { id: iid };
    fetch("http://127.0.0.1:8000/members/acceptbook", {
      method: "POST",
      header: {
        "content-type": "application/json",
      },

      body: JSON.stringify(id),
    });

    setIsSubmitted(true);
  };

  const handleReject=(rid)=>{
    const id={id:rid}
    fetch("http://127.0.0.1:8000/members/rejectbook", {
      method: "POST",
      header: {
        "content-type": "application/json",
      },

      body: JSON.stringify(id),
    });

    setIsRejected(true);

  }

  const handleBack = () => {
    navigate(-1);
  };

  const closeModal = () => {
    setIsSubmitted(false);
    setIsRejected(false);
  };

  return (
    <>
      <div
        className="doctor-profile-page pt-3 pl-5 zo"
        style={{ marginLeft: "330px" }}
      >
        <div className="profile-header">
          <img src={selectedItem.img} alt="Doctor" className="profile-image" />
          <div className="profile-info">
            <h1 className="profile-name">Welcome, {selectedItem.name}</h1>
          </div>
          <button className="back-button mt-3" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
      <div>
        {book.map((item) => {
          if (selectedItem.name === item.therapist) {
            return (
              <>
                <div
                  className="appointment-card zo pt-3 pb-4 pl-5 pr-5 mr-5 mb-5"
                  style={{ marginLeft: "300px" }}
                >
                  <h2>Appointment Details</h2>
                  <div className="mt-4">
                    <div className="pt-3 details_user">
                      <div>Name: {item.fname + " " + item.lname}</div>
                    </div>
                  </div>
                  <div className="mt-3 ">
                    <div className="pt-3 details_user">
                      <div>Email: {item.email}</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="pt-3 details_user">
                      <div>Phone No: {item.phone}</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="pt-3 details_user">
                      <div>Date: {item.date}</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="pt-3 details_user">
                      <div>Time: {item.time}</div>
                    </div>
                  </div>
                  <div className="detilas_b1 mt-4">
                    <button
                      className="details_b3 mr-5"
                      onClick={() => {
                        handleAccept(item.id);
                      }}
                    >
                      Accept
                    </button>
                    <button className="details_b2 ml-5" onClick={()=>{handleReject(item.id)}}>Reject</button>
                  </div>
                </div>
              </>
            );
          }
        })}
        {isSubmitted && (
          <div className="modal">
            <div className="modal-content">
              <div style={{ textAlign: "center" }}>
                <img src={img1} className="sub_img" />
              </div>
              <h3 className="pt-3">Accepted!</h3>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}

        {isRejected &&(
          <div className="modal">
          <div className="modal-content">
            <div style={{ textAlign: "center" }}>
              <img src={img2} className="sub_img" />
            </div>
            <h3 className="pt-3">Rejected!</h3>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
        )}
      </div>
    </>
  );
};

export default Details;
