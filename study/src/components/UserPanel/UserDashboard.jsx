

// path="/UserGetMandap"
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserDashboard.css";

// import { useNavigate } from "react-router-dom";



function UserDashboard() {
  const [mandaps, setMandaps] = useState([]);
  // profile
  const [showProfile,setshowProfile] = useState(false);
  
  // userdata save
  const [user,setUser] = useState(null);
  
  useEffect(()=>{
    const email = localStorage.getItem("email");
    console.log(email)

    setUser({
      email: email
    });
  },[])


  useEffect(() => {
    const email = localStorage.getItem("email");

    console.log("Dashboard Login Response:", email);
    // localStorage.setItem("email",email);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/UserMandapGetData")
      .then((res) => {
        setMandaps(res.data);
        // console.log(res.data[0]._id);
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
 

  return (
    <div className="dashboard-container">

                <button onClick={()=>setshowProfile(!showProfile)}>
                  Show Profile
                </button>

                {showProfile &&(
                  <div>
                    {/* {user ?( */}
                      <>
                        <h2>{user.email}</h2>
                      </>
                    {/* ):( */}
                      {/* <p>hello</p> */}
                    {/* )} */}
                  </div>
                )}
      <div className="dashboard-heading">
        <h1>Available Wedding Mandaps</h1>
        <p>Choose the perfect mandap for your special day</p>
      </div>

      <div className="mandap-grid">
        {mandaps.map((mandap) => (
          <div className="mandap-card" key={mandap._id}>
            {/* Images */}
            <div className="mandap-images">
              {mandap.image.length > 0 ? (
                mandap.image.map((img, index) => (
                  <img
                    key={index}
                    src={`http://localhost:8080/${img}`}
                    alt={mandap.name}
                    className="mandap-image"
                  />
                ))
              ) : (
                <div className="no-image">No Image Available</div>
              )}
            </div>

            {/* Details */}
            <div className="mandap-content">
              <h2>{mandap.name}</h2>

              <span className="mandap-type">{mandap.mandaptype}</span>

              <p className="mandap-description">{mandap.description}</p>

              <div className="mandap-bottom">
                <div className="mandap-price">₹{mandap.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default UserDashboard;
