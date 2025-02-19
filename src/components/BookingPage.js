

// import React, { useState } from "react";
// import "./BookingPage.css";

// const activities = [
//   { id: 1, name: "Zip-Lining", price: 500 },
//   { id: 2, name: "Rock Climbing", price: 700 },
//   { id: 3, name: "Kayaking", price: 600 },
// ];

// const offers = [
//   { id: 1, title: "Family Package Deal", discount: 20 },
//   { id: 2, title: "Student Discount", discount: 15 },
//   { id: 3, title: "Early Bird Offer", discount: 10 },
//   { id: 4, title: "Group Adventure Bonus", discount: 25 },
// ];

// const BookingPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [selectedActivities, setSelectedActivities] = useState([]);
//   const [ticketCount, setTicketCount] = useState(1);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [foodAndBeverage, setFoodAndBeverage] = useState(false);
//   const [identityProof, setIdentityProof] = useState("");
//   const [identityNumber, setIdentityNumber] = useState("");
//   const [selectedOffer, setSelectedOffer] = useState(null);

//   const handleActivityChange = (activityId) => {
//     setSelectedActivities((prev) =>
//       prev.includes(activityId)
//         ? prev.filter((id) => id !== activityId)
//         : [...prev, activityId]
//     );
//   };

//   const calculateTotalPrice = () => {
//     const activityTotal = selectedActivities.reduce((total, activityId) => {
//       const activity = activities.find((a) => a.id === activityId);
//       return total + (activity ? activity.price : 0);
//     }, 0);
//     const beverageCost = foodAndBeverage ? 200 : 0;
//     const totalBeforeDiscount = (activityTotal + beverageCost) * ticketCount;

//     // Apply discount if an offer is selected
//     if (selectedOffer) {
//       const discountAmount = (totalBeforeDiscount * selectedOffer.discount) / 100;
//       return totalBeforeDiscount - discountAmount;
//     }

//     return totalBeforeDiscount;
//   };

//   const handlePayment = () => {
//     alert(`Redirecting to payment for ₹${calculateTotalPrice()}`);
//   };

//   return (
//     <div className="booking-page">
//       <h1>Book Your Adventure</h1>
//       <div className="booking-form">
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Phone:</label>
//           <input
//             type="tel"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Date:</label>
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Choose Activities:</label>
//           {activities.map((activity) => (
//             <label key={activity.id}>
//               <input
//                 type="checkbox"
//                 onChange={() => handleActivityChange(activity.id)}
//               />
//               {activity.name} (₹{activity.price})
//             </label>
//           ))}
//         </div>

//         <div className="form-group">
//           <label>Tickets:</label>
//           <input
//             type="number"
//             min="1"
//             value={ticketCount}
//             onChange={(e) => setTicketCount(parseInt(e.target.value))}
//           />
//         </div>
//         <div className="form-group">
//           <label>Food & Beverage (₹200/person):</label>
//           <select
//             onChange={(e) => setFoodAndBeverage(e.target.value === "yes")}
//             value={foodAndBeverage ? "yes" : "no"}
//           >
//             <option value="no">No</option>
//             <option value="yes">Yes</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Identity Proof:</label>
//           <select
//             onChange={(e) => setIdentityProof(e.target.value)}
//             value={identityProof}
//           >
//             <option value="">Select</option>
//             <option value="Aadhaar">Aadhaar Card</option>
//             <option value="PAN">PAN Card</option>
//           </select>
//           <input
//             type="text"
//             placeholder="Enter ID Number"
//             value={identityNumber}
//             onChange={(e) => setIdentityNumber(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Select Offer:</label>
//           <select
//             onChange={(e) => {
//               const selected = offers.find((offer) => offer.id === parseInt(e.target.value));
//               setSelectedOffer(selected || null);
//             }}
//             value={selectedOffer ? selectedOffer.id : ""}
//           >
//             <option value="">No Offer</option>
//             {offers.map((offer) => (
//               <option key={offer.id} value={offer.id}>
//                 {offer.title} ({offer.discount}% off)
//               </option>
//             ))}
//           </select>
//         </div>

//         <h2>Total Price: ₹{calculateTotalPrice()}</h2>
//         <button className="pay-button" onClick={handlePayment}>
//           Proceed to Payment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookingPage;


//-----------------------------------------------------------

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./BookingPage.css";

// const activities = [
//   { id: 1, name: "Zip-Lining", price: 500 },
//   { id: 2, name: "Rock Climbing", price: 700 },
//   { id: 3, name: "Kayaking", price: 600 },
// ];

// const offers = [
//   { id: 1, title: "Family Package Deal", discount: 20 },
//   { id: 2, title: "Student Discount", discount: 15 },
//   { id: 3, title: "Early Bird Offer", discount: 10 },
//   { id: 4, title: "Group Adventure Bonus", discount: 25 },
// ];

// const BookingPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [selectedActivities, setSelectedActivities] = useState([]);
//   const [ticketCount, setTicketCount] = useState(1);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [foodAndBeverage, setFoodAndBeverage] = useState(false);
//   const [identityProof, setIdentityProof] = useState("");
//   const [identityNumber, setIdentityNumber] = useState("");
//   const [selectedOffer, setSelectedOffer] = useState(null);

//   const navigate = useNavigate();

//   const handleActivityChange = (activityId) => {
//     setSelectedActivities((prev) =>
//       prev.includes(activityId)
//         ? prev.filter((id) => id !== activityId)
//         : [...prev, activityId]
//     );
//   };

//   const calculateTotalPrice = () => {
//     const activityTotal = selectedActivities.reduce((total, activityId) => {
//       const activity = activities.find((a) => a.id === activityId);
//       return total + (activity ? activity.price : 0);
//     }, 0);
//     const beverageCost = foodAndBeverage ? 200 : 0;
//     const totalBeforeDiscount = (activityTotal + beverageCost) * ticketCount;

//     // Apply discount if an offer is selected
//     if (selectedOffer) {
//       const discountAmount = (totalBeforeDiscount * selectedOffer.discount) / 100;
//       return totalBeforeDiscount - discountAmount;
//     }

//     return totalBeforeDiscount;
//   };

//   const handlePayment = () => {
//     const totalPrice = calculateTotalPrice();
//     navigate("/payment-redirect", {
//       state: {
//         amount: totalPrice,
//         name,
//         email,
//         phone,
//       },
//     });
//   };

//   return (
//     <div className="booking-page">
//       <h1>Book Your Adventure</h1>
//       <div className="booking-form">
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Phone:</label>
//           <input
//             type="tel"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Date:</label>
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Choose Activities:</label>
//           {activities.map((activity) => (
//             <label key={activity.id}>
//               <input
//                 type="checkbox"
//                 onChange={() => handleActivityChange(activity.id)}
//               />
//               {activity.name} (₹{activity.price})
//             </label>
//           ))}
//         </div>

//         <div className="form-group">
//           <label>Tickets:</label>
//           <input
//             type="number"
//             min="1"
//             value={ticketCount}
//             onChange={(e) => setTicketCount(parseInt(e.target.value))}
//           />
//         </div>
//         <div className="form-group">
//           <label>Food & Beverage (₹200/person):</label>
//           <select
//             onChange={(e) => setFoodAndBeverage(e.target.value === "yes")}
//             value={foodAndBeverage ? "yes" : "no"}
//           >
//             <option value="no">No</option>
//             <option value="yes">Yes</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Identity Proof:</label>
//           <select
//             onChange={(e) => setIdentityProof(e.target.value)}
//             value={identityProof}
//           >
//             <option value="">Select</option>
//             <option value="Aadhaar">Aadhaar Card</option>
//             <option value="PAN">PAN Card</option>
//           </select>
//           <input
//             type="text"
//             placeholder="Enter ID Number"
//             value={identityNumber}
//             onChange={(e) => setIdentityNumber(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Select Offer:</label>
//           <select
//             onChange={(e) => {
//               const selected = offers.find((offer) => offer.id === parseInt(e.target.value));
//               setSelectedOffer(selected || null);
//             }}
//             value={selectedOffer ? selectedOffer.id : ""}
//           >
//             <option value="">No Offer</option>
//             {offers.map((offer) => (
//               <option key={offer.id} value={offer.id}>
//                 {offer.title} ({offer.discount}% off)
//               </option>
//             ))}
//           </select>
//         </div>

//         <h2>Total Price: ₹{calculateTotalPrice()}</h2>
//         <button className="pay-button" onClick={handlePayment}>
//           Proceed to Payment
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookingPage;

//-------------------------------------------------------------

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./BookingPage.css";

// const BookingPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [selectedActivities, setSelectedActivities] = useState([]);
//   const [ticketCount, setTicketCount] = useState(1);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [foodAndBeverage, setFoodAndBeverage] = useState(false);
//   const [identityProof, setIdentityProof] = useState("");
//   const [identityNumber, setIdentityNumber] = useState("");
//   const [selectedOffer, setSelectedOffer] = useState(null);

//   // Manually define activities
//   const activities = [
//     { id: 1, name: "Zip-Lining", price: 500 },
//     { id: 2, name: "Rock Climbing", price: 700 },
//     { id: 3, name: "Kayaking", price: 600 },
//   ];

//   // Manually define the offers
//   const offers = [
//     { id: 1, title: "Family Package Deal", discount: 20 },
//     { id: 2, title: "Student Discount", discount: 15 },
//     { id: 3, title: "Early Bird Offer", discount: 10 },
//     { id: 4, title: "Group Adventure Bonus", discount: 25 },
//   ];

//   const navigate = useNavigate();

//   const handleActivityChange = (activityId) => {
//     setSelectedActivities((prev) =>
//       prev.includes(activityId)
//         ? prev.filter((id) => id !== activityId)
//         : [...prev, activityId]
//     );
//   };

//   const calculateTotalPrice = () => {
//     const activityTotal = selectedActivities.reduce((total, activityId) => {
//       const activity = activities.find((a) => a.id === activityId);
//       return total + (activity ? activity.price : 0);
//     }, 0);
//     const beverageCost = foodAndBeverage ? 200 : 0;
//     const totalBeforeDiscount = (activityTotal + beverageCost) * ticketCount;

//     if (selectedOffer) {
//       const discountAmount = (totalBeforeDiscount * selectedOffer.discount) / 100;
//       return totalBeforeDiscount - discountAmount;
//     }
//     return totalBeforeDiscount;
//   };
//   const handlePayment = async () => {
//     console.log("handlePayment triggered"); // Debugging
//     const totalPrice = calculateTotalPrice();
//     console.log("Total Price:", totalPrice); // Check if total price is correct
    
//     const bookingData = {
//       name,
//       email,
//       phone,
//       selectedActivities,
//       ticketCount,
//       selectedDate,
//       foodAndBeverage,
//       identityProof,
//       identityNumber,
//       selectedOffer: selectedOffer ? selectedOffer.id : null,
//       totalPrice,
//     };
  
//     try {
//       const response = await axios.post("http://localhost:8085/api/bookings", bookingData);
//       console.log("Booking response:", response); // Debug API response
  
//       if (response.status === 200) {
//         console.log("Navigating to PaymentRedirect");
//         navigate("/payment-redirect", {  // Ensure absolute path
//           state: {
//             amount: totalPrice,
//             name,
//             email,
//             phone,
//           },
//         });
//       }
//     } catch (error) {
//       console.error("Booking failed", error);
//     }
//   };
  


//   return (
//     <div className="booking-page">
//       <h1>Book Your Adventure</h1>
//       <div className="booking-form">
//         <div className="form-group">
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label>Phone:</label>
//           <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label>Date:</label>
//           <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
//         </div>

//         <div className="form-group">
//           <label>Choose Activities:</label>
//           {activities.map((activity) => (
//             <label key={activity.id}>
//               <input type="checkbox" onChange={() => handleActivityChange(activity.id)} />
//               {activity.name} (₹{activity.price})
//             </label>
//           ))}
//         </div>

//         <div className="form-group">
//           <label>Tickets:</label>
//           <input type="number" min="1" value={ticketCount} onChange={(e) => setTicketCount(parseInt(e.target.value))} />
//         </div>
//         <div className="form-group">
//           <label>Food & Beverage (₹200/person):</label>
//           <select onChange={(e) => setFoodAndBeverage(e.target.value === "yes")} value={foodAndBeverage ? "yes" : "no"}>
//             <option value="no">No</option>
//             <option value="yes">Yes</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Identity Proof:</label>
//           <select onChange={(e) => setIdentityProof(e.target.value)} value={identityProof}>
//             <option value="">Select</option>
//             <option value="Aadhaar">Aadhaar Card</option>
//             <option value="PAN">PAN Card</option>
//           </select>
//           <input type="text" placeholder="Enter ID Number" value={identityNumber} onChange={(e) => setIdentityNumber(e.target.value)} />
//         </div>

//         <div className="form-group">
//           <label>Select Offer:</label>
//           <select onChange={(e) => {
//             const selected = offers.find((offer) => offer.id === parseInt(e.target.value));
//             setSelectedOffer(selected || null);
//           }} value={selectedOffer ? selectedOffer.id : ""}>
//             <option value="">No Offer</option>
//             {offers.map((offer) => (
//               <option key={offer.id} value={offer.id}>
//                 {offer.title} ({offer.discount}% off)
//               </option>
//             ))}
//           </select>
//         </div>

//         <h2>Total Price: ₹{calculateTotalPrice()}</h2>
//         <button className="pay-button" onClick={handlePayment}>Proceed to Payment</button>
//       </div>
//     </div>
//   );
// };

// export default BookingPage;


//----------------------------------------------------

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./BookingPage.css";

// const BookingPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [selectedActivities, setSelectedActivities] = useState([]);
//   const [ticketCount, setTicketCount] = useState(1);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [foodAndBeverage, setFoodAndBeverage] = useState(false);
//   const [identityProof, setIdentityProof] = useState("");
//   const [identityNumber, setIdentityNumber] = useState("");
//   const [selectedOffer, setSelectedOffer] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");

//   // Manually define activities
//   const activities = [
//     { id: 1, name: "Zip-Lining", price: 500 },
//     { id: 2, name: "Rock Climbing", price: 700 },
//     { id: 3, name: "Kayaking", price: 600 },
//   ];

//   // Manually define the offers
//   const offers = [
//     { id: 1, title: "Family Package Deal", discount: 20 },
//     { id: 2, title: "Student Discount", discount: 15 },
//     { id: 3, title: "Early Bird Offer", discount: 10 },
//     { id: 4, title: "Group Adventure Bonus", discount: 25 },
//   ];

//   const navigate = useNavigate();

//   const handleActivityChange = (activityId) => {
//     setSelectedActivities((prev) =>
//       prev.includes(activityId)
//         ? prev.filter((id) => id !== activityId)
//         : [...prev, activityId]
//     );
//   };

//   const calculateTotalPrice = () => {
//     const activityTotal = selectedActivities.reduce((total, activityId) => {
//       const activity = activities.find((a) => a.id === activityId);
//       return total + (activity ? activity.price : 0);
//     }, 0);
//     const beverageCost = foodAndBeverage ? 200 : 0;
//     const totalBeforeDiscount = (activityTotal + beverageCost) * ticketCount;

//     if (selectedOffer) {
//       const discountAmount = (totalBeforeDiscount * selectedOffer.discount) / 100;
//       return totalBeforeDiscount - discountAmount;
//     }
//     return totalBeforeDiscount;
//   };

//   const handlePayment = async () => {
//     setErrorMessage(""); // Clear previous error messages

//     // Validation checks
//     if (!name || !email || !phone || selectedActivities.length === 0 || !selectedDate || !identityProof || !identityNumber) {
//       setErrorMessage("All fields are required. Please fill in all details.");
//       return;
//     }

//     console.log("handlePayment triggered"); // Debugging
//     const totalPrice = calculateTotalPrice();
//     console.log("Total Price:", totalPrice);

//     const bookingData = {
//       name,
//       email,
//       phone,
//       selectedActivities,
//       ticketCount,
//       selectedDate,
//       foodAndBeverage,
//       identityProof,
//       identityNumber,
//       selectedOffer: selectedOffer ? selectedOffer.id : null,
//       totalPrice,
//     };

//     try {
//       const response = await axios.post("http://localhost:8085/api/bookings", bookingData);
//       console.log("Booking response:", response);

//       if (response.status === 200) {
//         console.log("Navigating to PaymentRedirect");
//         navigate("/payment-redirect", {
//           state: {
//             amount: totalPrice,
//             name,
//             email,
//             phone,
//           },
//         });
//       }
//     } catch (error) {
//       console.error("Booking failed", error);
//       setErrorMessage("Booking failed. Please try again.");
//     }
//   };

//   return (
//     <div className="booking-page">
//       <h1>Book Your Adventure</h1>
//       <div className="booking-form">
//         {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show error message */}

//         <div className="form-group">
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label>Phone:</label>
//           <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
//         </div>
//         <div className="form-group">
//           <label>Date:</label>
//           <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
//         </div>

//         <div className="form-group">
//           <label>Choose Activities:</label>
//           {activities.map((activity) => (
//             <label key={activity.id}>
//               <input type="checkbox" onChange={() => handleActivityChange(activity.id)} />
//               {activity.name} (₹{activity.price})
//             </label>
//           ))}
//         </div>

//         <div className="form-group">
//           <label>Tickets:</label>
//           <input type="number" min="1" value={ticketCount} onChange={(e) => setTicketCount(parseInt(e.target.value))} />
//         </div>
//         <div className="form-group">
//           <label>Food & Beverage (₹200/person):</label>
//           <select onChange={(e) => setFoodAndBeverage(e.target.value === "yes")} value={foodAndBeverage ? "yes" : "no"}>
//             <option value="no">No</option>
//             <option value="yes">Yes</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Identity Proof:</label>
//           <select onChange={(e) => setIdentityProof(e.target.value)} value={identityProof}>
//             <option value="">Select</option>
//             <option value="Aadhaar">Aadhaar Card</option>
//             <option value="PAN">PAN Card</option>
//           </select>
//           <input type="text" placeholder="Enter ID Number" value={identityNumber} onChange={(e) => setIdentityNumber(e.target.value)} />
//         </div>

//         <div className="form-group">
//           <label>Select Offer:</label>
//           <select onChange={(e) => {
//             const selected = offers.find((offer) => offer.id === parseInt(e.target.value));
//             setSelectedOffer(selected || null);
//           }} value={selectedOffer ? selectedOffer.id : ""}>
//             <option value="">No Offer</option>
//             {offers.map((offer) => (
//               <option key={offer.id} value={offer.id}>
//                 {offer.title} ({offer.discount}% off)
//               </option>
//             ))}
//           </select>
//         </div>

//         <h2>Total Price: ₹{calculateTotalPrice()}</h2>
//         <button className="pay-button" onClick={handlePayment}>Proceed to Payment</button>
//       </div>
//     </div>
//   );
// };

// export default BookingPage;

//------------------------------------------------------
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./BookingPage.css";

// const BookingPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [selectedActivities, setSelectedActivities] = useState([]);
//   const [ticketCount, setTicketCount] = useState(1);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [foodAndBeverage, setFoodAndBeverage] = useState(false);
//   const [identityProof, setIdentityProof] = useState("Aadhaar"); // Only Aadhaar
//   const [identityNumber, setIdentityNumber] = useState("");
//   const [selectedOffer, setSelectedOffer] = useState(null);
//   const [errors, setErrors] = useState({});

//   const activities = [
//     { id: 1, name: "Zip-Lining", price: 500 },
//     { id: 2, name: "Rock Climbing", price: 700 },
//     { id: 3, name: "Kayaking", price: 600 },
//   ];

//   const offers = [
//     { id: 1, title: "Family Package Deal", discount: 20 },
//     { id: 2, title: "Student Discount", discount: 15 },
//     { id: 3, title: "Early Bird Offer", discount: 10 },
//     { id: 4, title: "Group Adventure Bonus", discount: 25 },
//   ];

//   const navigate = useNavigate();

//   const handleActivityChange = (activityId) => {
//     setSelectedActivities((prev) =>
//       prev.includes(activityId)
//         ? prev.filter((id) => id !== activityId)
//         : [...prev, activityId]
//     );
//   };

//   const calculateTotalPrice = () => {
//     const activityTotal = selectedActivities.reduce((total, activityId) => {
//       const activity = activities.find((a) => a.id === activityId);
//       return total + (activity ? activity.price : 0);
//     }, 0);
//     const beverageCost = foodAndBeverage ? 200 : 0;
//     const totalBeforeDiscount = (activityTotal + beverageCost) * ticketCount;

//     if (selectedOffer) {
//       const discountAmount = (totalBeforeDiscount * selectedOffer.discount) / 100;
//       return totalBeforeDiscount - discountAmount;
//     }
//     return totalBeforeDiscount;
//   };

//   const validateForm = () => {
//     let errors = {};
//     const nameRegex = /^[A-Za-z\s]+$/;
//     const aadhaarRegex = /^\d{12}$/;

//     if (!name.trim()) {
//       errors.name = "Name is required";
//     } else if (!nameRegex.test(name)) {
//       errors.name = "Only alphabets are allowed";
//     }

//     if (!email.trim()) {
//       errors.email = "Email is required";
//     }

//     if (!phone.trim()) {
//       errors.phone = "Phone number is required";
//     }

//     if (!selectedDate) {
//       errors.selectedDate = "Date is required";
//     }

//     if (selectedActivities.length === 0) {
//       errors.selectedActivities = "Select at least one activity";
//     }

//     if (!identityNumber.trim()) {
//       errors.identityNumber = "Aadhaar number is required";
//     } else if (!aadhaarRegex.test(identityNumber)) {
//       errors.identityNumber = "Aadhaar must be exactly 12 digits";
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handlePayment = async () => {
//     if (!validateForm()) return;

//     const totalPrice = calculateTotalPrice();
//     const bookingData = {
//       name,
//       email,
//       phone,
//       selectedActivities,
//       ticketCount,
//       selectedDate,
//       foodAndBeverage,
//       identityProof,
//       identityNumber,
//       selectedOffer: selectedOffer ? selectedOffer.id : null,
//       totalPrice,
//     };

//     try {
//       const response = await axios.post("http://localhost:8085/api/bookings", bookingData);
//       if (response.status === 200) {
//         navigate("/payment-redirect", {
//           state: {
//             amount: totalPrice,
//             name,
//             email,
//             phone,
//           },
//         });
//       }
//     } catch (error) {
//       console.error("Booking failed", error);
//     }
//   };

//   return (
//     <div className="booking-page">
//       <h1>Book Your Adventure</h1>
//       <div className="booking-form">
//         <div className="form-group">
//           <label>Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//           {errors.name && <p className="error">{errors.name}</p>}
//         </div>

//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           {errors.email && <p className="error">{errors.email}</p>}
//         </div>

//         <div className="form-group">
//           <label>Phone:</label>
//           <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
//           {errors.phone && <p className="error">{errors.phone}</p>}
//         </div>

//         <div className="form-group">
//           <label>Date:</label>
//           <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
//           {errors.selectedDate && <p className="error">{errors.selectedDate}</p>}
//         </div>

//         <div className="form-group">
//           <label>Choose Activities:</label>
//           {activities.map((activity) => (
//             <label key={activity.id}>
//               <input type="checkbox" onChange={() => handleActivityChange(activity.id)} />
//               {activity.name} (₹{activity.price})
//             </label>
//           ))}
//           {errors.selectedActivities && <p className="error">{errors.selectedActivities}</p>}
//         </div>

//         <div className="form-group">
//           <label>Tickets:</label>
//           <input type="number" min="1" value={ticketCount} onChange={(e) => setTicketCount(parseInt(e.target.value))} />
//         </div>

//         <div className="form-group">
//           <label>Food & Beverage (₹200/person):</label>
//           <select onChange={(e) => setFoodAndBeverage(e.target.value === "yes")} value={foodAndBeverage ? "yes" : "no"}>
//             <option value="no">No</option>
//             <option value="yes">Yes</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Aadhaar Number:</label>
//           <input type="text" placeholder="Enter 12-digit Aadhaar" value={identityNumber} onChange={(e) => setIdentityNumber(e.target.value)} />
//           {errors.identityNumber && <p className="error">{errors.identityNumber}</p>}
//         </div>

//         <div className="form-group">
//           <label>Select Offer:</label>
//           <select onChange={(e) => {
//             const selected = offers.find((offer) => offer.id === parseInt(e.target.value));
//             setSelectedOffer(selected || null);
//           }} value={selectedOffer ? selectedOffer.id : ""}>
//             <option value="">No Offer</option>
//             {offers.map((offer) => (
//               <option key={offer.id} value={offer.id}>
//                 {offer.title} ({offer.discount}% off)
//               </option>
//             ))}
//           </select>
//         </div>

//         <h2>Total Price: ₹{calculateTotalPrice()}</h2>
//         <button className="pay-button" onClick={handlePayment}>Proceed to Payment</button>
//       </div>
//     </div>
//   );
// };

// export default BookingPage;

//-----------------------------------------------
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./BookingPage.css";

const BookingPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [ticketCount, setTicketCount] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [foodAndBeverage, setFoodAndBeverage] = useState(false);
  const [identityNumber, setIdentityNumber] = useState("");
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [errors, setErrors] = useState({});

  const activities = [
    { id: 1, name: "Zip-Lining", price: 500 },
    { id: 2, name: "Rock Climbing", price: 700 },
    { id: 3, name: "Kayaking", price: 600 },
  ];

  const offers = [
    { id: 1, title: "Family Package Deal", discount: 20 },
    { id: 2, title: "Student Discount", discount: 15 },
    { id: 3, title: "Early Bird Offer", discount: 10 },
    { id: 4, title: "Group Adventure Bonus", discount: 25 },
  ];

  const navigate = useNavigate();

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
    const totalBeforeDiscount = (activityTotal + beverageCost) * ticketCount;

    if (selectedOffer) {
      const discountAmount = (totalBeforeDiscount * selectedOffer.discount) / 100;
      return totalBeforeDiscount - discountAmount;
    }
    return totalBeforeDiscount;
  };

  const validateForm = () => {
    let errors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{10}$/;
    const aadhaarRegex = /^\d{12}$/;

    if (!name.trim()) {
      errors.name = "Name is required";
    } else if (!nameRegex.test(name)) {
      errors.name = "Only alphabets are allowed";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Enter a valid email (example@domain.com)";
    }

    if (!phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Phone number must be exactly 10 digits";
    }

    if (!selectedDate) {
      errors.selectedDate = "Date is required";
    }

    if (selectedActivities.length === 0) {
      errors.selectedActivities = "Select at least one activity";
    }

    if (!identityNumber.trim()) {
      errors.identityNumber = "Aadhaar number is required";
    } else if (!aadhaarRegex.test(identityNumber)) {
      errors.identityNumber = "Aadhaar must be exactly 12 digits";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    const totalPrice = calculateTotalPrice();
    const bookingData = {
      name,
      email,
      phone,
      selectedActivities,
      ticketCount,
      selectedDate,
      foodAndBeverage,
      identityNumber,
      selectedOffer: selectedOffer ? selectedOffer.id : null,
      totalPrice,
    };

    try {
      const response = await axios.post("http://localhost:8085/api/bookings", bookingData);
      if (response.status === 200) {
        navigate("/payment-redirect", {
          state: {
            amount: totalPrice,
            name,
            email,
            phone,
          },
        });
      }
    } catch (error) {
      console.error("Booking failed", error);
    }
  };

  return (
    <div className="booking-page">
      <h1>Book Your Adventure</h1>
      <div className="booking-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
          {errors.selectedDate && <p className="error">{errors.selectedDate}</p>}
        </div>

        <div className="form-group">
          <label>Choose Activities:</label>
          {activities.map((activity) => (
            <label key={activity.id}>
              <input type="checkbox" onChange={() => handleActivityChange(activity.id)} />
              {activity.name} (₹{activity.price})
            </label>
          ))}
          {errors.selectedActivities && <p className="error">{errors.selectedActivities}</p>}
        </div>

        <div className="form-group">
          <label>Tickets:</label>
          <input type="number" min="1" value={ticketCount} onChange={(e) => setTicketCount(parseInt(e.target.value))} />
        </div>

        <div className="form-group">
          <label>Food & Beverage (₹200/person):</label>
          <select onChange={(e) => setFoodAndBeverage(e.target.value === "yes")} value={foodAndBeverage ? "yes" : "no"}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        <div className="form-group">
          <label>Aadhaar Number:</label>
          <input type="text" placeholder="Enter 12-digit Aadhaar" value={identityNumber} onChange={(e) => setIdentityNumber(e.target.value)} />
          {errors.identityNumber && <p className="error">{errors.identityNumber}</p>}
        </div>

        <div className="form-group">
          <label>Select Offer:</label>
          <select onChange={(e) => {
            const selected = offers.find((offer) => offer.id === parseInt(e.target.value));
            setSelectedOffer(selected || null);
          }} value={selectedOffer ? selectedOffer.id : ""}>
            <option value="">No Offer</option>
            {offers.map((offer) => (
              <option key={offer.id} value={offer.id}>
                {offer.title} ({offer.discount}% off)
              </option>
            ))}
          </select>
        </div>

        <h2>Total Price: ₹{calculateTotalPrice()}</h2>
        <button className="pay-button" onClick={handlePayment}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default BookingPage;
