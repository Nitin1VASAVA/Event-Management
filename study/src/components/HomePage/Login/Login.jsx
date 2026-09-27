import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
const handleSubmit = async () => {
  try {

    const response = await axios.post(
      "http://localhost:8080/api/login",
      {
        email: email,
        password: password,
      }
    );

    console.log("LOGIN RESPONSE:", response.data);

    if (response.status === 200) {

      // Login wala email LocalStorage me save
      console.log("EMAIL TO SAVE:", response.data.email);
      localStorage.setItem(
        "email",
        response.data.email
      );

      localStorage.getItem(
        "after email",
        response.data.email
      )

      // Dashboard par jao
      navigate("/UserGetMandap");
    }

  } catch (error) {

    console.log("STATUS:", error.response?.status);
    console.log("MESSAGE:", error.response?.data);

  }
};

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome Back</h1>

        <p className="login-subtitle">Login to your Event Management account</p>

        <div className="login-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-group">
          <label>Password</label>

          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-button" onClick={handleSubmit}>
          Login
        </button>
        <Link to="/">Back to Home</Link>
        <p className="login-register">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
