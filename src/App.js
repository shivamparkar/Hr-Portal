import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import EmployeeManagement from "./Pages/EmployeeManagment";
import Attendance from "./Pages/Attendance/Attendance";
import Payroll from "./Pages/Payroll";
import PerformanceManagement from "./Pages/PerformanceManagment";
import Login from "./Pages/Login";
import Recruitment from "./Pages/Recruitment";
import Register from "./Pages/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        {isLoggedIn && (
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        )}

        <div
          style={{
            flex: 1,
            marginLeft: isLoggedIn ? (collapsed ? "90px" : "250px") : "0",
            transition: "margin-left 0.5s ease",
            paddingtop: "16px",
            // backgroundColor: "yellow",
            // position:"sticky",
          }}
        >
          {isLoggedIn && <Header sidebarCollapsed={collapsed} />}

          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />

            {isLoggedIn && (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/employee-management"
                  element={<EmployeeManagement />}
                />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/payroll" element={<Payroll />} />
                <Route
                  path="/performance-management"
                  element={<PerformanceManagement />}
                />
                <Route path="/recruitment" element={<Recruitment />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
