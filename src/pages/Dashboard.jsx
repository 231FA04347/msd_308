import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
import Features from "../components/Features";
import About from "../components/About";
import Contact from "../components/Contact";

import MealPlanning from "../components/MealPlanning";
import CalorieTracking from "../components/CalorieTracking";
import ProgressReports from "../components/ProgressReports";
import ExpertBooking from "../components/ExpertBooking";
import HealthReports from "../components/HealthReports";

function Dashboard() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("home");

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/login");
  };

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "features":
        return <Features setActivePage={setActivePage} />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "meal":
        return <MealPlanning setActivePage={setActivePage} />;
      case "calorie":
        return <CalorieTracking setActivePage={setActivePage} />;
      case "progress":
        return <ProgressReports setActivePage={setActivePage} />;
      case "expert":
        return <ExpertBooking setActivePage={setActivePage} />;
      case "health":
        return <HealthReports setActivePage={setActivePage} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar setActivePage={setActivePage} handleLogout={handleLogout} />
      <main className="content glass">
        {renderPage()}
      </main>
    </div>
  );
}

export default Dashboard;
