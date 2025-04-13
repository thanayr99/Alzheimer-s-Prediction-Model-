import React from "react";

function AnalyticsDashboard({ analyticsData }) {
  if (!analyticsData) {
    return (
      <div className="text-center text-muted mt-4">
        No analytics data available. Submit the form to load data.
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User-Specific Analytics</h2>

      {/* Confidence Score */}
      <div className="card text-center shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Confidence Score</h5>
          <p className="card-text display-4 text-primary">{analyticsData.confidence}%</p>
        </div>
      </div>

      {/* Feature Contributions */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title">Feature Contributions</h5>
          <ul className="list-group">
            {Object.entries(analyticsData.feature_contributions).map(([key, value]) => (
              <li key={key} className="list-group-item">
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsDashboard;