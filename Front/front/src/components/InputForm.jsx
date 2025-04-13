import React, { useState } from "react";
import "./InputForm.css"; // Reuse gradient styles for consistency

function InputForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    education: "",
    ses: "",
    mmse: "",
    etiv: "",
    nwbv: "",
    asf: "",
    memory_loss: "",
    confusion: "",
    mood_swings: "",
    genetic_history: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    onSubmit(formData); // Call the parent component's onSubmit handler
  };

  return (
    <div className="form-container">
      <h2 className="text-center mb-4 form-title">Enter Patient Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {Object.keys(formData).map((key) => (
            <div className="col-md-6 mb-3" key={key}>
              <label className="form-label">{key.replace("_", " ").toUpperCase()}</label>
              <input
                type="text"
                className="form-control gradient-input"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={`e.g., ${
                  key === "age"
                    ? "65"
                    : key === "gender"
                    ? "1 (Male)"
                    : key === "education"
                    ? "16"
                    : key === "ses"
                    ? "3"
                    : key === "mmse"
                    ? "22"
                    : key === "etiv"
                    ? "1500"
                    : key === "nwbv"
                    ? "0.75"
                    : key === "asf"
                    ? "1.2"
                    : key === "memory_loss"
                    ? "1 (Yes)"
                    : key === "confusion"
                    ? "0 (No)"
                    : key === "mood_swings"
                    ? "0 (No)"
                    : key === "genetic_history"
                    ? "1 (Yes)"
                    : ""
                }`}
              />
            </div>
          ))}
        </div>
        <button type="submit" className="btn gradient-btn w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputForm;