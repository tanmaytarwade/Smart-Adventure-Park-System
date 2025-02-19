// import React, { useState } from "react";
// import "./AdminDashboard.css";

// const AdminDashboard = () => {
//   const [eventsData, setEventsData] = useState({
//     "2024-12-15": ["Zip-Lining Championship", "Family Fun Day"],
//     "2024-12-20": ["Kayaking Competition", "Rock Climbing Workshop"],
//     "2024-12-25": ["Adventure Night Challenge", "Group Obstacle Course"],
//   });

//   const [newEvent, setNewEvent] = useState({
//     title: "",
//     date: "",
//     description: "",
//   });

//   const [offers, setOffers] = useState([
//     {
//       title: "Family Package Deal",
//       description: "Get 20% off for families with 4 or more members.",
//     },
//     {
//       title: "Student Discount",
//       description: "15% discount for students with valid ID.",
//     },
//     {
//       title: "Weekend Adventure Special",
//       description: "Free meal voucher with every weekend booking.",
//     },
//     {
//       title: "Early Bird Offer",
//       description: "Book 7 days in advance and get a 10% discount.",
//     },
//     {
//       title: "Group Adventure Bonus",
//       description: "Special discounts for groups of 10 or more.",
//     },
//   ]);

//   const [newOffer, setNewOffer] = useState({ title: "", description: "" });
//   const [activeSection, setActiveSection] = useState("add-event");

//   const handleAddEvent = (e) => {
//     e.preventDefault();
//     const { title, date, description } = newEvent;
//     if (title && date && description) {
//       const updatedEvents = { ...eventsData };
//       if (!updatedEvents[date]) {
//         updatedEvents[date] = [];
//       }
//       updatedEvents[date].push(title); // Add the event title to the selected date
//       setEventsData(updatedEvents);
//       setNewEvent({ title: "", date: "", description: "" });
//       alert("Event added successfully!");
//     } else {
//       alert("Please fill out all fields.");
//     }
//   };

//   const handleAddOffer = (e) => {
//     e.preventDefault();
//     if (newOffer.title && newOffer.description) {
//       setOffers([...offers, newOffer]);
//       setNewOffer({ title: "", description: "" });
//       alert("Offer added successfully!");
//     } else {
//       alert("Please fill out all fields.");
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <div className="sidebar">
//         <ul>
//           <li onClick={() => setActiveSection("add-event")}>Add Event</li>
//           <li onClick={() => setActiveSection("show-events")}>Show Events</li>
//           <li onClick={() => setActiveSection("add-offer")}>Add Offer</li>
//           <li onClick={() => setActiveSection("show-offers")}>Show Offers</li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="content">
//         <h1>Admin Dashboard</h1>

//         {/* Show different sections based on the active section */}
//         {activeSection === "add-event" && (
//           <div className="add-event-section">
//             <h2>Add New Event</h2>
//             <form onSubmit={handleAddEvent} className="add-event-form">
//               <div className="form-group">
//                 <label htmlFor="eventTitle">Event Title</label>
//                 <input
//                   type="text"
//                   id="eventTitle"
//                   value={newEvent.title}
//                   onChange={(e) =>
//                     setNewEvent({ ...newEvent, title: e.target.value })
//                   }
//                   placeholder="Enter event title"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="eventDate">Event Date</label>
//                 <input
//                   type="date"
//                   id="eventDate"
//                   value={newEvent.date}
//                   onChange={(e) =>
//                     setNewEvent({ ...newEvent, date: e.target.value })
//                   }
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="eventDescription">Event Description</label>
//                 <textarea
//                   id="eventDescription"
//                   value={newEvent.description}
//                   onChange={(e) =>
//                     setNewEvent({ ...newEvent, description: e.target.value })
//                   }
//                   placeholder="Enter event description"
//                   required
//                 ></textarea>
//               </div>
//               <button type="submit" className="add-event-button">
//                 Add Event
//               </button>
//             </form>
//           </div>
//         )}

//         {activeSection === "show-events" && (
//           <div className="dashboard-events-section">
//             <h2>Existing Events</h2>
//             <ul className="event-list">
//               {Object.keys(eventsData).map((date, index) => (
//                 <li key={index} className="event-item">
//                   <h3>{date}</h3>
//                   <ul>
//                     {eventsData[date].map((event, eventIndex) => (
//                       <li key={eventIndex}>{event}</li>
//                     ))}
//                   </ul>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {activeSection === "add-offer" && (
//           <div className="add-offer-section">
//             <h2>Add New Offer</h2>
//             <form onSubmit={handleAddOffer} className="add-offer-form">
//               <div className="form-group">
//                 <label htmlFor="offerTitle">Title</label>
//                 <input
//                   type="text"
//                   id="offerTitle"
//                   value={newOffer.title}
//                   onChange={(e) =>
//                     setNewOffer({ ...newOffer, title: e.target.value })
//                   }
//                   placeholder="Enter offer title"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="offerDescription">Description</label>
//                 <textarea
//                   id="offerDescription"
//                   value={newOffer.description}
//                   onChange={(e) =>
//                     setNewOffer({ ...newOffer, description: e.target.value })
//                   }
//                   placeholder="Enter offer description"
//                   required
//                 ></textarea>
//               </div>
//               <button type="submit" className="add-offer-button">
//                 Add Offer
//               </button>
//             </form>
//           </div>
//         )}

//         {activeSection === "show-offers" && (
//           <div className="dashboard-offers-section">
//             <h2>Existing Offers</h2>
//             <ul className="offer-list">
//               {offers.map((offer, index) => (
//                 <li key={index} className="offer-item">
//                   <h3>{offer.title}</h3>
//                   <p>{offer.description}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

//-----------------------------------------------------------------

//AdminDashboard.js
import React, { useState } from "react";
import EventManagement from "./EventManagement";
import OfferManagement from "./OfferManagement";
import ActivityForm from "./ActivityForm";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("add-event");

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li onClick={() => setActiveSection("add-event")}>Add Event</li>
          <li onClick={() => setActiveSection("show-events")}>Show Events</li>
          <li onClick={() => setActiveSection("add-offer")}>Add Offer</li>
          <li onClick={() => setActiveSection("show-offers")}>Show Offers</li>
          <li onClick={() => setActiveSection("add-activity")}>add activity</li>
          {/* <li onClick={() => setActiveSection("show-activities")}>show activities</li> */}


        </ul>
      </div>

      {/* Main Content */}
      <div className="content">
        <h1>Admin Dashboard</h1>

        {activeSection.includes("event") && (
          <EventManagement activeSection={activeSection} />
        )}

        {activeSection.includes("offer") && (
          <OfferManagement activeSection={activeSection} />
        )}

{activeSection.includes("activity") && (
  <ActivityForm activeSection={activeSection} />
)}
      </div>
    </div>
  );
};

export default AdminDashboard;