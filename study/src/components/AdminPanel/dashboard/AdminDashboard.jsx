import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./AdminDashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout">

      {/* Common Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="dashboard-main">

        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, Admin</p>
          </div>
        </div>


        {/* Statistics */}
        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h3>Total Mandaps</h3>
            <h2>12</h2>
          </div>

          <div className="dashboard-card">
            <h3>Total Bookings</h3>
            <h2>35</h2>
          </div>

          <div className="dashboard-card">
            <h3>Total Users</h3>
            <h2>50</h2>
          </div>

        </div>


        {/* Quick Actions */}
        <div className="quick-section">

          <h2>Quick Actions</h2>

          <div className="quick-actions">

            <button
              onClick={() => navigate("/AdminAddMandap")}
            >
              Add New Mandap
            </button>

            <button
              onClick={() => navigate("/GetMandap")}
            >
              Manage Mandaps
            </button>

            <button
              onClick={() => navigate("/admin/bookings")}
            >
              View Bookings
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;