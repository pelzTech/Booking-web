import React, { useState } from "react";
import "./Book.css"; // Assuming you're importing an external CSS file

export default function Book() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
  });

  const [generatedId, setGeneratedId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, phone, checkIn, checkOut } = formData;
    if (!fullName || !email || !phone || !checkIn || !checkOut) {
      alert("Please fill in all fields.");
      return;
    }

    const uniqueId = Math.floor(100000 + Math.random() * 900000);
    setGeneratedId(uniqueId);

    alert(`Thank you for booking! Your ID is: ${uniqueId}`);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
    });
  };

  return (
    <div className="booking-container">
      <div className="booking-form">
        <h2 className="booking-title">Book Your Stay</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              className="form-control"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              name="checkIn"
              className="form-control"
              value={formData.checkIn}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              name="checkOut"
              className="form-control"
              value={formData.checkOut}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-submit">
            Submit
          </button>
        </form>
        {generatedId && (
          <div className="booking-id">
            Your booking ID is: <strong>{generatedId}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
