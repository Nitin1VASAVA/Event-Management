import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">

      <h1 className="logo">
        Event<span>Management</span>
      </h1>

      <div className="sidebar-menu">

        <a href="/AdminDashboard">Dashboard</a>

        <a href="/AdminAddMandap">Add Mandap</a>

        <a href="/GetMandap">Manage Mandaps</a>

        <a href="/bookings">Bookings</a>

        <a href="/users">Users</a>

      </div>

      {/* <button className="logout-btn">
        Logout
      </button> */}
      
        <button className="logout-btn">
            <Link className="link" to="/">
            Logout
              </Link>
        </button>
    

    </div>
  );
}

export default Sidebar;