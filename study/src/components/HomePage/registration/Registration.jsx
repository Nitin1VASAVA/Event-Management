

import React from "react";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import "./Registration.css";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const navigate = useNavigate();

  // Login + OTP send
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api/register", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        age: age,
      }),
    });

    const data = await response.text();

    console.log(data);

    if (response.ok) {
      // OTP successfully send hua
      setShowOtp(true);
    } else {
      alert(data);
    }
  };

  // OTP Verify
  const verifyOTP = async () => {
    const response = await fetch("http://localhost:8080/api/verify-otp", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        otp: otp,
      }),
    });

    const data = await response.text();

    console.log(data);

    // OTP correct
    if (response.ok) {
      alert("Login successful");

      // Dusre page par redirect
      navigate("/login");
    } else {
      // Wrong OTP / Expired OTP
      alert(data);
    }
  };

  return (
  <div className="register-page">

    <div className="register-card">

      <div className="register-header">
        <h1>Create Account</h1>
        <p>Register your account to continue</p>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <button className="register-btn" type="submit">
          Register
        </button>
        <Link to="/" >
                Back to Home
          </Link>
      </form>

      {showOtp && (
        <div className="otp-section">

          <div className="otp-title">
            <h3>Verify Your Email</h3>
            <p>Enter the OTP sent to your email</p>
          </div>

          <input
            className="otp-input"
            type="text"
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button
            className="verify-btn"
            type="button"
            onClick={verifyOTP}
          >
            Verify OTP
          </button>

        </div>
      )}

    </div>

  </div>
);
}

export default Login;
