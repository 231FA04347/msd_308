import React from "react";

function CalorieTracking({ setActivePage }) {
  return (
    <section className="card">
      <button className="back-btn" onClick={() => setActivePage("features")}>← Back</button>
      <h2>🔥 Calorie Tracking</h2>
      <p>Log foods, auto-sum calories and macros, and see daily totals.</p>

      <h4>Quick log</h4>
      <table>
        <tbody>
          <tr><td>Oats</td><td>310 kcal</td></tr>
          <tr><td>Salmon Salad</td><td>480 kcal</td></tr>
        </tbody>
      </table>
    </section>
  );
}

export default CalorieTracking;
