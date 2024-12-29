import React, { useState } from "react";
import "./BookingPage.css"; // Custom CSS for styling

const activities = [
  { id: 1, name: "Zip-Lining", price: 500 },
  { id: 2, name: "Rock Climbing", price: 700 },
  { id: 3, name: "Kayaking", price: 600 },
];

const BookingPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [ticketCount, setTicketCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [foodAndBeverage, setFoodAndBeverage] = useState(false);
  const [identityProof, setIdentityProof] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleActivityChange = (activityId) => {
    setSelectedActivities((prev) =>
      prev.includes(activityId)
        ? prev.filter((id) => id !== activityId)
        : [...prev, activityId]
    );
  };

  const calculateTotalPrice = () => {
    const activityTotal = selectedActivities.reduce((total, activityId) => {
      const activity = activities.find((a) => a.id === activityId);
      return total + (activity ? activity.price : 0);
    }, 0);
    const beverageCost = foodAndBeverage ? 200 : 0;
    return (activityTotal + beverageCost) * ticketCount;
  };

  const handlePayment = () => {
    // Implement or navigate to the payment integration page here
    alert(`Redirecting to payment for ₹${calculateTotalPrice()}`);
    // Example: window.location.href = '/payment';  // Redirect to payment page
  };

  return (
    <div className="booking-page">
      <h1>Book Your Adventure</h1>
      <div className="booking-form">
        {/* User information form fields */}
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* Activity selection */}
        <div className="form-group">
          <label>Choose Activities:</label>
          {activities.map((activity) => (
            <label key={activity.id}>
              <input
                type="checkbox"
                onChange={() => handleActivityChange(activity.id)}
              />
              {activity.name} (₹{activity.price})
            </label>
          ))}
        </div>

        {/* Additional inputs */}
        <div className="form-group">
          <label>Tickets:</label>
          <input
            type="number"
            min="1"
            value={ticketCount}
            onChange={(e) => setTicketCount(parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Food & Beverage (₹200/person):</label>
          <select
            onChange={(e) => setFoodAndBeverage(e.target.value === "yes")}
            value={foodAndBeverage ? "yes" : "no"}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {/* Identity Proof */}
        <div className="form-group">
          <label>Identity Proof:</label>
          <select
            onChange={(e) => setIdentityProof(e.target.value)}
            value={identityProof}
          >
            <option value="">Select</option>
            <option value="Aadhaar">Aadhaar Card</option>
            <option value="PAN">PAN Card</option>
          </select>
          <input
            type="text"
            placeholder="Enter ID Number"
            value={identityNumber}
            onChange={(e) => setIdentityNumber(e.target.value)}
          />
        </div>

        {/* Display total price and payment button */}
        <h2>Total Price: ₹{calculateTotalPrice()}</h2>
        <button className="pay-button" onClick={handlePayment}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default BookingPage;





