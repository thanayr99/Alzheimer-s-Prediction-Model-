import React from "react";
import { FaChartPie, FaCheckCircle } from "react-icons/fa";
import { MdInsights } from "react-icons/md";
import { Pie } from "react-chartjs-2";
import "./InputForm.css"; // Reuse the gradient styles from InputForm.css

function AnalyticsDashboard({ analyticsData }) {
  console.log("Analytics Data:", analyticsData); // Debugging log

  if (!analyticsData) {
    return (
      <div className="text-center text-muted mt-4">
        <h4>No analytics data available</h4>
        <p>Submit the form to load data.</p>
      </div>
    );
  }

  // Prepare data for the pie chart
  const pieData = {
    labels: Object.keys(analyticsData.feature_contributions).map((key) =>
      key.replace("_", " ")
    ),
    datasets: [
      {
        data: Object.values(analyticsData.feature_contributions),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384AA",
          "#36A2EBAA",
          "#FFCE56AA",
          "#4BC0C0AA",
          "#9966FFAA",
        ],
      },
    ],
  };

  return (
    <div className="form-container mt-5">
      <h2 className="text-center mb-4 form-title">
        <MdInsights className="text-primary" /> User-Specific Analytics
      </h2>

      {/* Confidence Score */}
      <div className="card text-center shadow-sm mb-4 gradient-card">
        <div className="card-body">
          <h5 className="card-title">
            <FaCheckCircle className="text-success" /> Confidence Score
          </h5>
          <p className="card-text display-4 text-primary">
            {analyticsData.confidence}%
          </p>
        </div>
      </div>

      {/* Feature Contributions */}
      <div className="card shadow-sm mb-4 gradient-card">
        <div className="card-body">
          <h5 className="card-title">
            <FaChartPie className="text-info" /> Feature Contributions
          </h5>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-group">
                {Object.entries(analyticsData.feature_contributions).map(
                  ([key, value]) => (
                    <li
                      key={key}
                      className="list-group-item d-flex justify-content-between align-items-center gradient-list-item"
                    >
                      <span className="text-capitalize">
                        {key.replace("_", " ")}
                      </span>
                      <span className="badge bg-primary rounded-pill">
                        {value}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="col-md-6">
              <Pie data={pieData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsDashboard;