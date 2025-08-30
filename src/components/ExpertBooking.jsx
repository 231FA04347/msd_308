import React from "react";

function ExpertBooking({ setActivePage }) {
  const handleBook = (e) => {
    e.preventDefault();
    alert("Booking request sent (placeholder)");
  };

  return (
    <section className="card">
      <button className="back-btn" onClick={() => setActivePage("features")}>← Back</button>
      <h2>👩‍⚕️ Expert Booking</h2>
      <p>Schedule calls with nutritionists, coaches or dietitians.</p>

      <form onSubmit={handleBook}>
        <label>
          Select expert
          <select required>
            <option>Coach Sam</option>
            <option>Dr. Lin</option>
          </select>
        </label>
        <label>
          Preferred date
          <input type="date" required />
        </label>
        <button type="submit">Request Booking</button>
      </form>
    </section>
  );
}

export default ExpertBooking;
