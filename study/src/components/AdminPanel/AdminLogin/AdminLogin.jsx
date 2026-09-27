import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const handleLogin = (e) => {

        e.preventDefault();

        // Abhi frontend testing ke liye
        if (
            email === "admin@gmail.com" &&
            password === "admin123"
        ) {

            localStorage.setItem("adminLoggedIn", "true");

            navigate("/AdminDashboard");

        } else {

            alert("Invalid admin email or password");

        }
    };


    return (

        <div className="admin-login-page">

            <div className="admin-login-box">

                <h1>Admin Login</h1>

                <p className="admin-login-text">
                    Login to manage your event management system
                </p>


                <form onSubmit={handleLogin}>

                    <div className="admin-input-group">

                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter admin email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="admin-input-group">

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />

                    </div>


                   {/* <Link to="/AdminDashboard">
                            Login
                   </Link> */}
                <button> Login</button>
                </form>

            </div>

        </div>

    );
}

export default AdminLogin;