import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Registration.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const navigate = useNavigate();

  // Register + Send OTP
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, age }),
      });

      const data = await response.text();

      if (response.ok) {
        setShowOtp(true);
      } else {
        alert(data);
      }
    } catch (error) {
      alert("Server error, please try again later.");
    }
  };

  // Verify OTP
  const verifyOTP = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.text();

      if (response.ok) {
        alert("Registration & Verification Successful!");
        navigate("/login");
      } else {
        alert(data);
      }
    } catch (error) {
      alert("Verification failed, try again.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        {/* LEFT SHOWCASE PANEL (Light Luxury Theme) */}
        <div className="register-showcase">
          <div className="showcase-badge">✨ Wedding Mandap & Venues</div>
          <h2>Find & Reserve Your Ideal Wedding Mandap</h2>
          <p>
            Join thousands of happy couples. Unlock verified mandap setups,
            transparent pricing, and hassle-free venue management.
          </p>

          <div className="showcase-card">
            <div className="card-image-box">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
                alt="Mandap Venue"
              />
              <span className="card-tag">Popular</span>
            </div>
            <div className="card-info">
              <h4>Royal Orchid Lawn & Mandap</h4>
              <p>📍 Delhi NCR • Capacity 500+ Guests</p>
            </div>
          </div>

          <div className="showcase-stats">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Verified Mandaps</p>
            </div>
            <div className="stat-item">
              <h3>4.9★</h3>
              <p>User Rating</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Secure Booking</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        <div className="register-card">
          <div className="register-header">
            <h1>Create Account</h1>
            <p>Register your account to unlock curated venues and pricing.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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
                required
              />
            </div>

            <button className="register-btn" type="submit">
              Register Account
            </button>

            <Link to="/" className="back-link">
              ← Return to Home
            </Link>
          </form>

          {showOtp && (
            <div className="otp-section">
              <div className="otp-title">
                <h3>Verify Your Email</h3>
                <p>Enter the 6-digit OTP sent to {email || "your email"}</p>
              </div>

              <input
                className="otp-input"
                type="text"
                placeholder="ENTER OTP"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />

              <button className="verify-btn" type="button" onClick={verifyOTP}>
                Verify OTP & Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;