import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e?.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email: email,
        password: password,
      });

      console.log("LOGIN RESPONSE:", response.data);

      if (response.status === 200) {
        // Save email in LocalStorage
        console.log("EMAIL TO SAVE:", response.data.email);
        localStorage.setItem("email", response.data.email);

        // Dashboard par navigate karein
        navigate("/UserGetMandap");
      }
    } catch (error) {
      console.log("STATUS:", error.response?.status);
      console.log("MESSAGE:", error.response?.data);
      alert(error.response?.data || "Invalid Credentials. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        
        {/* LEFT SHOWCASE PANEL */}
        <div className="login-showcase">
          <div className="showcase-badge">✨ Welcome Back</div>
          <h2>Access Your Wedding Mandap Dashboard</h2>
          <p>
            Log in to manage your venue bookings, explore exclusive mandaps,
            and view personalized wedding planning details.
          </p>

          <div className="showcase-card">
            <div className="card-image-box">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
                alt="Luxury Mandap"
              />
              <span className="card-tag">Verified</span>
            </div>
            <div className="card-info">
              <h4>Seamless Venue Reservations</h4>
              <p>📍 Instant Booking • 24/7 Concierge Support</p>
            </div>
          </div>

          <div className="showcase-stats">
            <div className="stat-item">
              <h3>100%</h3>
              <p>Verified Bookings</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Customer Support</p>
            </div>
            <div className="stat-item">
              <h3>4.9★</h3>
              <p>User Satisfaction</p>
            </div>
          </div>
        </div>

        {/* RIGHT LOGIN CARD */}
        <div className="login-card">
          <div className="login-header">
            <h1>Welcome Back</h1>
            <p className="login-subtitle">
              Enter your credentials to access your account
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="login-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
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
                required
              />
            </div>

            <button type="submit" className="login-button">
              Sign In
            </button>

            <Link to="/" className="back-link">
              ← Return to Home Website
            </Link>

            <p className="login-register">
              Don't have an account? <Link to="/register">Register now</Link>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;