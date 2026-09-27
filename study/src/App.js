import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registration from "./components/HomePage/registration/Registration";
import Home from "./components/HomePage/Home/Home";
import Login from "./components/HomePage/Login/Login";
import Footer from "./components/HomePage/Footer/Footer";
import AdminLogin from "./components/AdminPanel/AdminLogin/AdminLogin";
import AdminDashboard from "./components/AdminPanel/dashboard/AdminDashboard";
import AdminAddMandap from "./components/AdminPanel/AddMandap/AdminAddMandapp";
import UserGetMandap from "./components/UserPanel/UserDashboard";
import EditMandap from "./components/UserPanel/EditMandap"
import ManageMandap from "./components/AdminPanel/EditMandap/ManageMandap";

import Sidebar from "./components/AdminPanel/Sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />}/>
        <Route path="/AdminAddMandap" element={<AdminAddMandap />}/>
        <Route path="/UserGetMandap" element={<UserGetMandap />}/>
        {/* remove karna hai */}
        <Route path="/api/UserMandapGetData/:id" element={<EditMandap />} /> 

        <Route path="/GetMandap" element={<ManageMandap />} />
        <Route path="/Sidebar" element={<Sidebar />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
