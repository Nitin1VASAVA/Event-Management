import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* ================= NAVBAR ================= */}
      <nav className="home-navbar">

        <div className="navbar-logo">
          Wedding Mandap
        </div>

        <div className="navbar-links">

          <a href="#about">
            About
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#contact">
            Contact
          </a>

          <Link to="/login" className="nav-login">
            Login
          </Link>

          <Link to="/register" className="nav-register">
            Register
          </Link>

          <Link to="/adminlogin" className="nav-admin">
            Admin Login
          </Link>
        </div>

      </nav>


      {/* ================= HERO SECTION ================= */}
      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-subtitle">
            YOUR SPECIAL DAY, OUR RESPONSIBILITY
          </p>

          <h1>
            Find The Perfect
            <br />
            Wedding Mandap
          </h1>

          <p className="hero-description">
            Discover beautiful wedding mandaps and venues for your
            special celebration. Choose a place that makes your
            memorable day truly special.
          </p>

          {/* <Link to="/mandaps" className="hero-btn">
            Explore Mandaps
          </Link> */}

        </div>

      </section>


      {/* ================= ABOUT SECTION ================= */}
      <section className="about-section" id="about">

        <div className="section-container">

          <p className="section-label">
            ABOUT US
          </p>

          <h2>
            Make Your Wedding
            <br />
            <span>Truly Memorable</span>
          </h2>

          <p className="about-text">
            Event Management is a platform where users can discover
            and book beautiful wedding mandaps according to their
            requirements. We make it easier to find the right venue
            for your special occasion.
          </p>

        </div>

      </section>


      {/* ================= SERVICES SECTION ================= */}
      <section className="services-section" id="services">

        <div className="section-container">

          <p className="section-label">
            WHY CHOOSE US
          </p>

          <h2>
            Everything You Need
          </h2>

          <div className="services-grid">

            <div className="service-box">

              <div className="service-number">
                01
              </div>

              <h3>
                Beautiful Venues
              </h3>

              <p>
                Explore different wedding mandaps suitable for
                your celebration.
              </p>

            </div>


            <div className="service-box">

              <div className="service-number">
                02
              </div>

              <h3>
                Easy Booking
              </h3>

              <p>
                Find your preferred mandap and make the booking
                process simple.
              </p>

            </div>


            <div className="service-box">

              <div className="service-number">
                03
              </div>

              <h3>
                Simple Management
              </h3>

              <p>
                Manage your bookings and event details from one
                convenient platform.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section" id="contact">

        <div className="contact-container">

          <div>

            <p className="section-label">
              GET STARTED
            </p>

            <h2>
              <br />
            </h2>
             <b>Developed By: Nitin</b><br />
             <b>vasavanitin9734@gmail.com</b>

          </div>

          <Link to="/register" className="contact-btn">
            Create Account
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;