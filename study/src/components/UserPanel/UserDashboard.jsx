// path="/UserGetMandap"

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserDashboard.css";

function UserDashboard() {

  // =====================================
  // MANDAP DATA
  // =====================================

  const [mandaps, setMandaps] = useState([]);


  // =====================================
  // PROFILE SHOW / HIDE
  // =====================================

  const [showProfile, setshowProfile] = useState(false);


  // =====================================
  // USER DATA
  // =====================================

  const [user, setUser] = useState(null);


  // =====================================
  // GET USER EMAIL
  // =====================================

  useEffect(() => {

    const email = localStorage.getItem("email");

    console.log("User Email:", email);

    setUser({
      email: email
    });

  }, []);


  // =====================================
  // GET MANDAP DATA
  // =====================================

  useEffect(() => {

    axios
      .get("http://localhost:8080/api/UserMandapGetData")

      .then((res) => {

        console.log("Mandap Data:", res.data);

        setMandaps(res.data);

      })

      .catch((error) => {

        console.log("Error getting mandap data:", error);

      });

  }, []);


  // =====================================
  // JSX
  // =====================================

  return (

    <div className="dashboard-container">


      {/* =================================
          PROFILE BUTTON
      ================================= */}

      <button
        className="profile-button"
        onClick={() => setshowProfile(!showProfile)}
      >

        {showProfile
          ? "Hide Profile"
          : "Show Profile"
        }

      </button>


      {/* =================================
          PROFILE
      ================================= */}

      {showProfile && user && (

        <div className="profile-box">

          <h2>User Profile</h2>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

        </div>

      )}


      {/* =================================
          PAGE HEADING
      ================================= */}

      <div className="dashboard-heading">

        <h1>
          Available Wedding Mandaps
        </h1>

        <p>
          Choose the perfect mandap for your special day
        </p>

      </div>


      {/* =================================
          MANDAP GRID
      ================================= */}

      <div className="mandap-grid">


        {mandaps.map((mandap) => (

          <div
            className="mandap-card"
            key={mandap._id}
          >


            {/* =================================
                IMAGE GALLERY
            ================================= */}

            <div className="mandap-images">

              {mandap.image &&
              mandap.image.length > 0 ? (

                mandap.image.map((img, index) => (

                  <img
                    key={index}
                    src={`http://localhost:8080/${img}`}
                    alt={`${mandap.name} ${index + 1}`}
                    className="mandap-image"
                  />

                ))

              ) : (

                <div className="no-image">
                  No Image Available
                </div>

              )}

            </div>


            {/* =================================
                MANDAP CONTENT
            ================================= */}

            <div className="mandap-content">


              {/* NAME */}

              <h2 className="mandap-name">
                {mandap.name}
              </h2>


              {/* TYPE */}

              <span className="mandap-type">
                {mandap.mandaptype}
              </span>


              {/* DESCRIPTION */}

              <p className="mandap-description">
                {mandap.description}
              </p>


              {/* =================================
                  PRICE
              ================================= */}

              <div className="mandap-bottom">

                <div className="mandap-price">

                  ₹{mandap.price}

                </div>

              </div>


            </div>


          </div>

        ))}


      </div>


    </div>

  );

}

export default UserDashboard;