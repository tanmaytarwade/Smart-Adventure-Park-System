// import React, { useState } from "react";

// const EventManagement = ({ activeSection }) => {
//   const [eventsData, setEventsData] = useState({
//     "2024-12-15": ["Zip-Lining Championship", "Family Fun Day"],
//     "2024-12-20": ["Kayaking Competition", "Rock Climbing Workshop"],
//     "2024-12-25": ["Adventure Night Challenge", "Group Obstacle Course"],
//   });

//   const [newEvent, setNewEvent] = useState({ title: "", date: "", description: "" });

//   const handleAddEvent = (e) => {
//     e.preventDefault();
//     const { title, date, description } = newEvent;
//     if (title && date && description) {
//       const updatedEvents = { ...eventsData };
//       if (!updatedEvents[date]) {
//         updatedEvents[date] = [];
//       }
//       updatedEvents[date].push(title);
//       setEventsData(updatedEvents);
//       setNewEvent({ title: "", date: "", description: "" });
//       alert("Event added successfully!");
//     } else {
//       alert("Please fill out all fields.");
//     }
//   };

//   return (
//     <div>
//       {activeSection === "add-event" && (
//         <div className="add-event-section">
//           <h2>Add New Event</h2>
//           <form onSubmit={handleAddEvent} className="add-event-form">
//             <div className="form-group">
//               <label>Event Title</label>
//               <input
//                 type="text"
//                 value={newEvent.title}
//                 onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//                 placeholder="Enter event title"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Event Date</label>
//               <input
//                 type="date"
//                 value={newEvent.date}
//                 onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Event Description</label>
//               <textarea
//                 value={newEvent.description}
//                 onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
//                 placeholder="Enter event description"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit">Add Event</button>
//           </form>
//         </div>
//       )}

//       {activeSection === "show-events" && (
//         <div className="dashboard-events-section">
//           <h2>Existing Events</h2>
//           <ul>
//             {Object.keys(eventsData).map((date, index) => (
//               <li key={index}>
//                 <h3>{date}</h3>
//                 <ul>
//                   {eventsData[date].map((event, eventIndex) => (
//                     <li key={eventIndex}>{event}</li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventManagement;

//------------------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import axios for API requests

// const EventManagement = ({ activeSection }) => {
//   const [eventsData, setEventsData] = useState({});
//   const [newEvent, setNewEvent] = useState({ name: "", date: "", description: "" });

//   // Fetch events from the backend when the component mounts
//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get("http://localhost:8085/api/events/all");
//       const events = response.data;

//       // Group events by date
//       const groupedEvents = events.reduce((acc, event) => {
//         const date = event.date;
//         if (!acc[date]) {
//           acc[date] = [];
//         }
//         acc[date].push(event.name);
//         return acc;
//       }, {});

//       setEventsData(groupedEvents);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   const handleAddEvent = async (e) => {
//     e.preventDefault();
//     const { name, date, description } = newEvent;

//     if (name && date && description) {
//       try {
//         await axios.post("http://localhost:8085/api/events/create", {
//           name,
//           date,
//           description,
//           location: "Smart Adventure Park" // Assuming location is required
//         });
//         alert("Event added successfully!");
//         setNewEvent({ name: "", date: "", description: "" });
//         fetchEvents(); // Refresh events list
//       } catch (error) {
//         console.error("Error adding event:", error);
//         alert("Failed to add event.");
//       }
//     } else {
//       alert("Please fill out all fields.");
//     }
//   };

//   return (
//     <div>
//       {activeSection === "add-event" && (
//         <div className="add-event-section">
//           <h2>Add New Event</h2>
//           <form onSubmit={handleAddEvent} className="add-event-form">
//             <div className="form-group">
//               <label>Event Title</label>
//               <input
//                 type="text"
//                 value={newEvent.name}
//                 onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
//                 placeholder="Enter event title"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Event Date</label>
//               <input
//                 type="date"
//                 value={newEvent.date}
//                 onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Event Description</label>
//               <textarea
//                 value={newEvent.description}
//                 onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
//                 placeholder="Enter event description"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit">Add Event</button>
//           </form>
//         </div>
//       )}

//       {activeSection === "show-events" && (
//         <div className="dashboard-events-section">
//           <h2>Existing Events</h2>
//           <ul>
//             {Object.keys(eventsData).map((date, index) => (
//               <li key={index}>
//                 <h3>{date}</h3>
//                 <ul>
//                   {eventsData[date].map((event, eventIndex) => (
//                     <li key={eventIndex}>{event}</li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventManagement;


//---------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const EventManagement = ({ activeSection }) => {
//   const [eventsData, setEventsData] = useState({});
//   const [newEvent, setNewEvent] = useState({ name: "", date: "", description: "" });

//   // Fetch events from the backend when the component mounts
//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get("http://localhost:8085/api/events/all");
//       const events = response.data;

//       // Group events by date with name and description
//       const groupedEvents = events.reduce((acc, event) => {
//         const date = event.date.split("T")[0]; // Format date
//         if (!acc[date]) {
//           acc[date] = [];
//         }
//         acc[date].push({ name: event.name, description: event.description });
//         return acc;
//       }, {});

//       setEventsData(groupedEvents);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   const handleAddEvent = async (e) => {
//     e.preventDefault();
//     const { name, date, description } = newEvent;

//     if (name && date && description) {
//       try {
//         await axios.post("http://localhost:8085/api/events/create", {
//           name,
//           date,
//           description,
//           location: "Smart Adventure Park" // Assuming location is required
//         });
//         alert("Event added successfully!");
//         setNewEvent({ name: "", date: "", description: "" });
//         fetchEvents(); // Refresh events list
//       } catch (error) {
//         console.error("Error adding event:", error);
//         alert("Failed to add event.");
//       }
//     } else {
//       alert("Please fill out all fields.");
//     }
//   };

//   return (
//     <div>
//       {activeSection === "add-event" && (
//         <div className="add-event-section">
//           <h2>Add New Event</h2>
//           <form onSubmit={handleAddEvent} className="add-event-form">
//             <div className="form-group">
//               <label>Event Title</label>
//               <input
//                 type="text"
//                 value={newEvent.name}
//                 onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
//                 placeholder="Enter event title"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Event Date</label>
//               <input
//                 type="date"
//                 value={newEvent.date}
//                 onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Event Description</label>
//               <textarea
//                 value={newEvent.description}
//                 onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
//                 placeholder="Enter event description"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit">Add Event</button>
//           </form>
//         </div>
//       )}

//       {activeSection === "show-events" && (
//         <div className="dashboard-events-section">
//           <h2>Existing Events</h2>
//           <ul>
//             {Object.keys(eventsData).map((date, index) => (
//               <li key={index}>
//                 <h3>{date}</h3>
//                 <ul>
//                   {eventsData[date].map((event, eventIndex) => (
//                     <li key={eventIndex}>
//                       <strong>{event.name}</strong>
//                       <p>{event.description}</p>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventManagement;

//----------------------------------------------------


//---------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const EventManagement = ({ activeSection }) => {
//   const [eventsData, setEventsData] = useState([]);
//   const [newEvent, setNewEvent] = useState({ title: "", date: "", description: "" });

//   // Fetch events when component mounts or activeSection changes
//   useEffect(() => {
//     if (activeSection === "show-events") {
//       fetchEvents();
//     }
//   }, [activeSection]);

//   const fetchEvents = async () => {
//     try {
//       const response = await axios.get("http://localhost:8085/api/events/all");
//       console.log("Fetched Events:", response.data);

//       if (!Array.isArray(response.data)) {
//         console.error("Invalid API response format:", response.data);
//         return;
//       }

//       setEventsData(response.data);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//     }
//   };

//   const handleAddEvent = async (e) => {
//     e.preventDefault();
//     const { title, date, description } = newEvent;

//     if (title && date && description) {
//       try {
//         await axios.post("http://localhost:8085/api/events/create", {
//           title,
//           date,
//           description,
//           location: "Smart Adventure Park",
//         });

//         alert("Event added successfully!");
//         setNewEvent({ title: "", date: "", description: "" });
//         fetchEvents(); // Refresh event list
//       } catch (error) {
//         console.error("Error adding event:", error);
//         alert("Failed to add event.");
//       }
//     } else {
//       alert("Please fill out all fields.");
//     }
//   };

//   const handleDeleteEvent = async (eventId) => {
//     try {
//       await axios.delete(`http://localhost:8085/api/events/delete/${eventId}`);
//       alert("Event deleted successfully!");
//       fetchEvents(); // Refresh event list
//     } catch (error) {
//       console.error("Error deleting event:", error);
//       alert("Failed to delete event.");
//     }
//   };

//   return (
//     <div>
//       {activeSection === "add-event" && (
//         <div className="add-event-section">
//           <h2>Add New Event</h2>
//           <form onSubmit={handleAddEvent} className="add-event-form">
//             <div className="form-group">
//               <label>Event Title</label>
//               <input
//                 type="text"
//                 value={newEvent.title}
//                 onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
//                 placeholder="Enter event title"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Event Date</label>
//               <input
//                 type="date"
//                 value={newEvent.date}
//                 onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Event Description</label>
//               <textarea
//                 value={newEvent.description}
//                 onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
//                 placeholder="Enter event description"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit">Add Event</button>
//           </form>
//         </div>
//       )}

//       {activeSection === "show-events" && (
//         <div className="dashboard-events-section">
//           <h2>Existing Events</h2>
//           {eventsData.length === 0 ? (
//             <p>No events available.</p>
//           ) : (
//             <ul>
//               {eventsData.map((event) => (
//                 <li key={event.id}>
//                   <strong>{event.title}</strong>
//                   <p>{event.description}</p>
//                   <p><strong>Date:</strong> {event.date}</p>
//                   <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventManagement;


//-----------------------------------------------------------
import React, { useState, useEffect } from "react";
import axios from "axios";

const EventManagement = ({ activeSection }) => {
  const [eventsData, setEventsData] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", description: "" });

  // Fetch events when component mounts or activeSection changes
  useEffect(() => {
    if (activeSection === "show-events") {
      fetchEvents();
    }
  }, [activeSection]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8085/api/events/all");
      console.log("Fetched Events:", response.data);

      if (!Array.isArray(response.data)) {
        console.error("Invalid API response format:", response.data);
        return;
      }

      setEventsData(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    const { title, date, description } = newEvent;

    if (title && date && description) {
      try {
        await axios.post("http://localhost:8085/api/events/create", {
          title, // Ensure "title" is sent correctly
          date,
          description,
          location: "Smart Adventure Park",
        });

        alert("Event added successfully!");
        setNewEvent({ title: "", date: "", description: "" });
        fetchEvents(); // Refresh event list
      } catch (error) {
        console.error("Error adding event:", error);
        alert("Failed to add event.");
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:8085/api/events/delete/${eventId}`);
      alert("Event deleted successfully!");
      fetchEvents(); // Refresh event list
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete event.");
    }
  };

  return (
    <div>
      {activeSection === "add-event" && (
        <div className="add-event-section">
          <h2>Add New Event</h2>
          <form onSubmit={handleAddEvent} className="add-event-form">
            <div className="form-group">
              <label>Event Title</label>
              <input
                type="text"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                placeholder="Enter event title"
                required
              />
            </div>
            <div className="form-group">
              <label>Event Date</label>
              <input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Event Description</label>
              <textarea
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                placeholder="Enter event description"
                required
              ></textarea>
            </div>
            <button type="submit">Add Event</button>
          </form>
        </div>
      )}

      {activeSection === "show-events" && (
        <div className="dashboard-events-section">
          <h2>Existing Events</h2>
          {eventsData.length === 0 ? (
            <p>No events available.</p>
          ) : (
            <ul>
              {eventsData.map((event) => (
                <li key={event.id}>
                  <strong>{event.title}</strong>
                  <p>{event.description}</p>
                  <p><strong>Date:</strong> {event.date ? new Date(event.date).toISOString().split("T")[0] : "N/A"}</p>
                  <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default EventManagement;





