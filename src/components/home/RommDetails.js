import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RoomDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Fallback if state or room is null
  if (!state || !state.room) {
    navigate("/rooms"); // Redirect to the rooms page if no room data
    return null;
  }

  const { room } = state;

  const handlePayment = (method) => {
    alert(`You selected ${method} as your payment method.`);
    // Add payment processing logic here
  };

  return (
    <div className="container py-5">
      <div className="room-details shadow rounded p-4">
        <img
          src={room.img}
          alt={room.name}
          className="img-fluid rounded mb-4"
        />
        <h1 className="mb-3 text-primary">{room.name}</h1>
        <p className="text-muted">{room.description}</p>
        <h3 className="my-3">Price: <span className="text-success">{room.price}</span></h3>
        <h4 className="mt-4">Select Payment Method:</h4>
        <div className="payment-options d-flex gap-3 mt-3">
          <button
            className="btn btn-primary px-4 py-2"
            onClick={() => handlePayment("PayPal")}
          >
            PayPal
          </button>
          <button
            className="btn btn-secondary px-4 py-2"
            onClick={() => handlePayment("Bank Transfer")}
          >
            Bank Transfer
          </button>
          <button
            className="btn btn-success px-4 py-2"
            onClick={() => handlePayment("Bitcoin")}
          >
            Bitcoin
          </button>
        </div>
      </div>
    </div>
  );
}
