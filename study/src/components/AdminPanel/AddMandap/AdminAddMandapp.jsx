import axios from "axios";
import { useState } from "react";
import "./AddMandapp.css";
import Sidebar from "../Sidebar/Sidebar";

function AddMandapp() {
  const [name, setName] = useState("");
  const [mandaptype, setMandaptype] = useState("");
  const [Description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fromData = new FormData();

    fromData.append("name", name);
    fromData.append("mandaptype", mandaptype);
    fromData.append("description", Description);
    fromData.append("price", price);
    for (let i = 0; i < images.length; i++) {
      fromData.append("images", images[i]);
    }
    axios
      .post("http://localhost:8080/api/AdminAddMandap", fromData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
  <Sidebar/>
    <div className="mandap-container">
      <form className="mandap-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Add Wedding Mandap</h2>

        <div className="form-group">
          <label>Mandap Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Mandap Type</label>

          <select
            value={mandaptype}
            onChange={(e) => setMandaptype(e.target.value)}
          >
            <option value="">Select Mandap Type</option>
            <option value="traditional">Traditional</option>
            <option value="south">South Indian</option>
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>

          <textarea
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-group">
          <label>Price</label>

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => setImages(e.target.files)}
          /> 
        </div>
        <button className="submit-btn" type="submit">
          Add Mandap
        </button>
      </form>
    </div>
    </>
  );
}

export default AddMandapp;
