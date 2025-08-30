import React from "react";

function MealPlanning({ setActivePage }) {
  return (
    <section className="card">
      <button className="back-btn" onClick={() => setActivePage("features")}>← Back</button>
      <h2>🥗 Meal Planning</h2>
      <p>Create weekly meal plans, save favorites and auto-calc macros.</p>

      <h4>Example plan</h4>
      <ul>
        <li>Breakfast: Oats, berries, protein</li>
        <li>Lunch: Grilled chicken bowl</li>
        <li>Dinner: Salmon + veggies</li>
      </ul>
    </section>
  );
}

export default MealPlanning;
