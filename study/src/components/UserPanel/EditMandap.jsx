import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditMandap.css";

function EditUsers() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [mandap, setMandap] = useState({
    name: "",
    mandaptype: "",
    description: "",
    price: "",
    image: []
  });

  useEffect(() => {

    axios
      .get(`http://localhost:8080/api/AdminAddMandap/${id}`)
      .then((res) => {

        console.log(res.data);

        setMandap(res.data);

      })
      .catch((error) => {

        console.log(error);

      });

  }, [id]);


  const handleChange = (e) => {

    const { name, value } = e.target;

    setMandap({
      ...mandap,
      [name]: value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.put(
        `http://localhost:8080/api/AdminAddMandap/${id}`,
        mandap
      );

      console.log(res.data);

      navigate("/UserGetMandap");

    } catch (error) {

      console.log(error);

    }

  };


  return (
    <div className="edit-mandap-container">

      <h1>Edit Mandap</h1>

      <form
        className="edit-mandap-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label>Mandap Name</label>

          <input
            type="text"
            name="name"
            value={mandap.name}
            onChange={handleChange}
          />

        </div>


        <div className="form-group">

          <label>Mandap Type</label>

          <select
            name="mandaptype"
            value={mandap.mandaptype}
            onChange={handleChange}
          >

            <option value="">
              Select Mandap Type
            </option>

            <option value="traditional">
              Traditional
            </option>

            <option value="south">
              South Indian
            </option>

          </select>

        </div>


        <div className="form-group">

          <label>Description</label>

          <textarea
            name="description"
            value={mandap.description}
            onChange={handleChange}
          />

        </div>


        <div className="form-group">

          <label>Price</label>

          <input
            type="text"
            name="price"
            value={mandap.price}
            onChange={handleChange}
          />

        </div>


        <div className="form-group">

          <label>Images</label>

          <div className="image-container">

            {mandap.image &&
              mandap.image.map((img, index) => (

                <img
                  key={index}
                  src={`http://localhost:8080/${img}`}
                  alt="Mandap"
                />

              ))
            }

          </div>

        </div>


        <button
          className="update-btn"
          type="submit"
        >
          Update Mandap
        </button>

      </form>

    </div>
  );
}

export default EditUsers;