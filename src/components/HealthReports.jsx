import React from "react";

function HealthReports({ setActivePage }) {
  return (
    <section className="card">
      <button className="back-btn" onClick={() => setActivePage("features")}>← Back</button>
      <h2>📝 Health Reports</h2>
      <p>Exportable consultation summaries, lab results, and progress notes.</p>

      <ul>
        <li>2025-08-14 — Nutrition Review (Dr. Lin)</li>
        <li>2025-08-07 — Progress Check (Coach Sam)</li>
      </ul>
    </section>
  );
}

export default HealthReports;
