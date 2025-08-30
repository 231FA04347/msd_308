import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Dashboard.css"; 

function Sidebar({ setActivePage }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <aside className="sidebar glass">
      <h2 className="logo">🍏 FitLife</h2>
      <nav>
        <ul>
          <li onClick={() => setActivePage("home")}>Home</li>
          <li onClick={() => setActivePage("features")}>Features</li>
          <li onClick={() => setActivePage("about")}>About</li>
          <li onClick={() => setActivePage("contact")}>Contact</li>
        </ul>
      </nav>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;
