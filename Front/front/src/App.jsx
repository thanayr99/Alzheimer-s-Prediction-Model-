import React, { useState } from "react";
import InputForm from "./components/InputForm";
import AnalyticsDashboard from "./components/AnalyticsDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";

function App() {
  const [predictionResult, setPredictionResult] = useState(null);
  const [userAnalytics, setUserAnalytics] = useState(null);
  const [error, setError] = useState(null);

  const handleUserAnalytics = async (formData) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData);
      console.log("Backend Response:", response.data); // Debugging log
      setPredictionResult(response.data.prediction);
      setUserAnalytics(response.data.analytics);
      setError(null);
    } catch (err) {
      console.error("Error:", err); // Debugging log
      setError(err.response ? err.response.data.error : "Error connecting to the server.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Alzheimer's Prediction Dashboard</h1>
      <InputForm onSubmit={handleUserAnalytics} />
      {predictionResult && (
        <div className="alert alert-info mt-4">
          <h4>Prediction Result</h4>
          <p><strong>Prediction:</strong> {predictionResult}</p>
        </div>
      )}
      {userAnalytics && <AnalyticsDashboard analyticsData={userAnalytics} />}
      {error && <div className="alert alert-danger mt-4">{error}</div>}
    </div>
  );
}

export default App;