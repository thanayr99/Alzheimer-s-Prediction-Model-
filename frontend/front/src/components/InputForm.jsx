import React, { useState } from "react";

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
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Enter Patient Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {Object.keys(formData).map((key) => (
            <div className="col-md-6 mb-3" key={key}>
              <label className="form-label">{key.replace("_", " ").toUpperCase()}</label>
              <input
                type="text"
                className="form-control"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={`Enter ${key.replace("_", " ")}`}
                required
              />
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputForm;