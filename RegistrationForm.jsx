import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    plan: "",
    emergencyContact: "",
    medicalIssues: "",
    weight: "",
    height: "",
  });

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "6px",
    border: "1px solid white",
    background: "rgba(255,255,255,0.1)",
    color: "white",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  return (
    <div
      style={{
        backgroundImage: "url('/gym-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.75)",
          padding: "40px",
          borderRadius: "15px",
          width: "450px",
          color: "white",
          boxShadow: "0 0 15px rgba(255,255,255,0.4)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            fontSize: "26px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          Gym Registration Form
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <div>
            <label>Full Name</label>
            <input type="text" name="name" onChange={handleChange} style={inputStyle} required />
          </div>

          <div>
            <label>Age</label>
            <input type="number" name="age" onChange={handleChange} style={inputStyle} required />
          </div>

          <div>
            <label>Gender</label>
            <select name="gender" onChange={handleChange} style={inputStyle} required>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label>Phone Number</label>
            <input type="tel" name="phone" onChange={handleChange} style={inputStyle} required />
          </div>

          <div>
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} style={inputStyle} required />
          </div>

          <div>
            <label>Address</label>
            <textarea name="address" onChange={handleChange} style={{ ...inputStyle, height: "60px" }} required />
          </div>

          <div>
            <label>Membership Plan</label>
            <select name="plan" onChange={handleChange} style={inputStyle} required>
              <option value="">Choose Plan</option>
              <option>Monthly</option>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>Yearly</option>
            </select>
          </div>

          <div>
            <label>Emergency Contact</label>
            <input type="text" name="emergencyContact" onChange={handleChange} style={inputStyle} required />
          </div>

          <div>
            <label>Medical Issues</label>
            <textarea name="medicalIssues" onChange={handleChange} style={{ ...inputStyle, height: "60px" }} />
          </div>

          <div>
            <label>Weight (kg)</label>
            <input type="number" name="weight" onChange={handleChange} style={inputStyle} />
          </div>

          <div>
            <label>Height (cm)</label>
            <input type="number" name="height" onChange={handleChange} style={inputStyle} />
          </div>

          <button
            type="submit"
            style={{
              marginTop: "20px",
              width: "100%",
              padding: "12px",
              backgroundColor: "#ff9800",
              border: "none",
              color: "black",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "6px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

