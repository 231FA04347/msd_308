function Features({ setActivePage }) {
  return (
    <div className="features">
      <h2>✨ Features</h2>
      <div className="feature-grid">
        <div className="card" onClick={() => setActivePage("meal-planning")}>🥗 Meal Planning</div>
        <div className="card" onClick={() => setActivePage("calorie-tracking")}>🔥 Calorie Tracking</div>
        <div className="card" onClick={() => setActivePage("progress")}>📈 Progress Reports</div>
        <div className="card" onClick={() => setActivePage("experts")}>👩‍⚕️ Expert Booking</div>
        <div className="card" onClick={() => setActivePage("reports")}>📝 Health Reports</div>
      </div>
    </div>
  );
}
export default Features;
