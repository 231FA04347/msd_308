import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MealPlanning from "./components/MealPlanning";
import CalorieTracking from "./components/CalorieTracking";
import ProgressReports from "./components/ProgressReports";
import ExpertBooking from "./components/ExpertBooking";
import HealthReports from "./components/HealthReports";


function App() {
  return (
    <Router>
      <Routes>
        {/* Default route → redirect to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/meal-planning" element={<MealPlanning />} />
        <Route path="/calorie-tracking" element={<CalorieTracking />} />
        <Route path="/progress" element={<ProgressReports />} />
        <Route path="/experts" element={<ExpertBooking />} />
        <Route path="/reports" element={<HealthReports />} />
      </Routes>
    </Router>
  );
}

export default App;
