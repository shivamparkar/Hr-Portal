import "./App.css";
import Header from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Dashboard from "./Pages/Dashboard";
import EmployeeManagement from "./Pages/EmployeeManagment";
import Attendance from "./Pages/Attendance";
import Payroll from "./Pages/Payroll";
import PerformanceManagement from "./Pages/PerformanceManagment";
import Login from "./Pages/Login";
import Recruitment from "./Pages/Recruitment";
import Register from "./Pages/Register";

import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    // <Router>
    //   <div style={{ display: "flex", height: "100vh" }}>
    //     {isLoggedIn && <Sidebar />}

    //     <div
    //       style={{
    //         flex: 1,
    //         marginLeft: isLoggedIn ? "250px" : "0",
    //         padding: "0px",
    //       }}
    //     >
    //       {isLoggedIn && <Header />}

    //       <Routes>
    //         <Route path="/" element={<Login onLogin={handleLogin} />} />
    //         <Route path="/register" element={<Register />} />

    //         {isLoggedIn && (
    //           <>
    //             <Route path="/dashboard" element={<Dashboard />} />
    //             <Route
    //               path="/employee-management"
    //               element={<EmployeeManagement />}
    //             />
    //             <Route path="/attendance" element={<Attendance />} />
    //             <Route path="/payroll" element={<Payroll />} />
    //             <Route
    //               path="/performance-management"
    //               element={<PerformanceManagement />}
    //             />
    //             <Route path="/recruitment" element={<Recruitment />} />
    //           </>
    //         )}
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>
    <div>
  <Header />
  <EmployeeManagement />
    </div>
  
  );
}

export default App;
