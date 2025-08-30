import React from "react";

function ProgressReports({ setActivePage }) {
  return (
    <section className="card">
      <button className="back-btn" onClick={() => setActivePage("features")}>← Back</button>
      <h2>📈 Progress Reports</h2>
      <p>Weekly and monthly summaries, weight & body-fat trends, adherence stats.</p>

      <h4>Summary</h4>
      <ul>
        <li>Weight: 72kg → 70.5kg (2 weeks)</li>
        <li>Protein adherence: 83%</li>
      </ul>
    </section>
  );
}

export default ProgressReports;
