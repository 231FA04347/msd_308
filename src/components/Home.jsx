import React from "react";

function Home() {
  return (
    <div className="home">
      <h2>👤 User Profile</h2>
      <div className="profile-card">
        <img src="https://via.placeholder.com/100" alt="Profile" />
        <h3>John Doe</h3>
        <p>Bio: Fitness enthusiast working towards a healthy lifestyle 💪</p>
        <p>Goal: Lose 5kg in 3 months 🥗</p>
        <p>Achievements: Completed 10 workouts ✅</p>
        <p>Day Streak: 🔥 7 days</p>
      </div>

      <div className="analytics">
        <h3>📊 Analytics</h3>
        <p>(Graph Placeholder – Calories Burned / Progress)</p>
      </div>

      <div className="history">
        <h3>📅 Doctor Consultation History</h3>
        <ul>
          <li>Dr. Smith – Nutritionist – 20th Aug 2025</li>
          <li>Dr. Jane – Fitness Coach – 10th Aug 2025</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
