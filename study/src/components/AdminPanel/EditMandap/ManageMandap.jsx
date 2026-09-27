import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import "./ManageMandap.css";

function EditMandap() {
  const [data, setData] = useState([]);

  const handleDelete = (id) =>{
    axios.delete(`http://localhost:8080/api/ManageMandap/${id}`).then((res)=>{
      console.log(res.data);
      
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/ManageMandap")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("API ERROR:", err);
      });
  }, []);

  return (
    <div className="page-layout">

      <Sidebar />

      <main className="edit-content">

        <div className="edit-header">
          <h1>Edit Mandaps</h1>
          <p>View and update your mandap details.</p>
        </div>

        <div className="mandap-list">

          {data.map((users) => (
            <div className="mandap-card" key={users._id}>

              {/* IMAGE */}
              <div className="mandap-image-box">
                {users.image?.map((img, index) => (
                  <img
                    key={index}
                    src={`http://localhost:8080/${img}`}
                    alt={users.mandaptype}
                  />
                ))}
              </div>

              {/* CONTENT */}
              <div className="mandap-content">

                <div className="mandap-name">
                  <h2>{users.mandaptype}</h2>
                  <span>Mandap</span>
                </div>

                <p className="mandap-description">
                  {users.description}
                </p>

                <div className="mandap-details">

                  <div>
                    <label>Price</label>
                    <strong>₹{users.price}</strong>
                  </div>

                  <div>
                    <label>Type</label>
                    <strong>{users.mandaptype}</strong>
                  </div>

                </div>

                <div className="mandap-buttons">

                  <button className="edit-btn">
                    ✎ Edit
                  </button>

                  <button className="delete-btn" onClick={()=>handleDelete(users._id)}>
                    🗑 Delete
                    
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </main>

    </div>
  );
}

export default EditMandap;