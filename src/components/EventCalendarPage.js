

// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css"; // Default calendar styles
// import "./EventCalendarPage.css"; // Custom styles
// import { Link } from "react-router-dom"; // For navigation

// const eventsData = {
//   "2025-01-15": ["Zip-Lining Championship", "Family Fun Day"],
//   "2025-01-20": ["Kayaking Competition", "Rock Climbing Workshop"],
//   "2025-01-25": ["Adventure Night Challenge", "Group Obstacle Course"],
// };

// const formatDate = (date) => {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");
//   return `${year}-${month}-${day}`;
// };

// const EventCalendarPage = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [events, setEvents] = useState([]);

//   const onDateChange = (date) => {
//     setSelectedDate(date);
//     const formattedDate = formatDate(date);
//     setEvents(eventsData[formattedDate] || []);
//   };

//   const isEventDay = (date) => {
//     const formattedDate = formatDate(date);
//     return !!eventsData[formattedDate];
//   };

//   const tileClassName = ({ date, view }) => {
//     if (view === "month" && isEventDay(date)) {
//       return "event-day"; // Add custom class for event days
//     }
//     return null;
//   };

//   const tileDisabled = ({ date, view }) => {
//     const today = new Date();
//     return view === "month" && date < today.setHours(0, 0, 0, 0); // Disable past dates
//   };

//   return (
//     <div className="event-calendar-page">
//       <h1>Upcoming Events Calendar</h1>
//       <Calendar
//         onChange={onDateChange}
//         value={selectedDate}
//         tileClassName={tileClassName}
//         tileDisabled={tileDisabled}
//       />

//       <section className="events-list">
//         <h2>Events on {selectedDate.toDateString()}</h2>
//         {events.length > 0 ? (
//           <ul>
//             {events.map((event, index) => (
//               <li key={index}>{event}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No events scheduled for this day.</p>
//         )}
//         {events.length > 0 && (
//           <Link to="/LoginPage">
//             <button className="book-button">Book Now</button>
//           </Link>
//         )}
//       </section>
//     </div>
//   );
// };

// export default EventCalendarPage;

//-----------------------------------------------------

// import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "./EventCalendarPage.css";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const formatDate = (date) => {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");
//   return `${year}-${month}-${day}`;
// };

// const EventCalendarPage = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [events, setEvents] = useState([]);
//   const [eventsData, setEventsData] = useState({});

//   useEffect(() => {
//     fetchAllEvents();
//   }, []);

//   const fetchAllEvents = async () => {
//     try {
//       const response = await axios.get("http://localhost:8085/api/events/all");
//       const eventsArray = response.data;
//       const groupedEvents = eventsArray.reduce((acc, event) => {
//         const date = event.date.split("T")[0];
//         if (!acc[date]) {
//           acc[date] = [];
//         }
//         acc[date].push(event.title);
//         return acc;
//       }, {});
//       setEventsData(groupedEvents);
//     } catch (error) {
//       console.error("Error fetching all events:", error);
//     }
//   };

//   const onDateChange = async (date) => {
//     setSelectedDate(date);
//     const formattedDate = formatDate(date);
//     try {
//       const response = await axios.get(`http://localhost:8085/api/events/date/${formattedDate}`);
//       setEvents(response.data.map(event => event.title));
//     } catch (error) {
//       console.error("Error fetching events for date:", error);
//       setEvents([]);
//     }
//   };

//   const isEventDay = (date) => {
//     const formattedDate = formatDate(date);
//     return !!eventsData[formattedDate];
//   };

//   const tileClassName = ({ date, view }) => {
//     if (view === "month" && isEventDay(date)) {
//       return "event-day";
//     }
//     return null;
//   };

//   const tileDisabled = ({ date, view }) => {
//     const today = new Date();
//     return view === "month" && date < today.setHours(0, 0, 0, 0);
//   };

//   return (
//     <div className="event-calendar-page">
//       <h1>Upcoming Events Calendar</h1>
//       <Calendar
//         onChange={onDateChange}
//         value={selectedDate}
//         tileClassName={tileClassName}
//         tileDisabled={tileDisabled}
//       />

//       <section className="events-list">
//         <h2>Events on {selectedDate.toDateString()}</h2>
//         {events.length > 0 ? (
//           <ul>
//             {events.map((event, index) => (
//               <li key={index}>{event}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No events scheduled for this day.</p>
//         )}
//         {events.length > 0 && (
//           <Link to="/LoginPage">
//             <button className="book-button">Book Now</button>
//           </Link>
//         )}
//       </section>
//     </div>
//   );
// };

// export default EventCalendarPage;

//------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Default calendar styles
import "./EventCalendarPage.css"; // Custom styles
import { Link } from "react-router-dom"; // For navigation
import axios from "axios";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const EventCalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventDates, setEventDates] = useState(new Set()); // Store event dates

  // Fetch all events once when component mounts
  useEffect(() => {
    fetchAllEvents();
  }, []);

  const fetchAllEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8085/api/events/all");
      const eventsList = response.data;

      // Extract dates with events and store in a Set for quick lookup
      const eventDateSet = new Set(eventsList.map((event) => formatDate(new Date(event.date))));
      setEventDates(eventDateSet);
    } catch (error) {
      console.error("Error fetching all events:", error);
    }
  };

  const fetchEventsForDate = async (date) => {
    const formattedDate = formatDate(date);
    try {
      const response = await axios.get(`http://localhost:8085/api/events/date/${formattedDate}`);
      setEvents(response.data.map((event) => event.title));
    } catch (error) {
      console.error("Error fetching events for date:", error);
      setEvents([]); // Clear events if error occurs
    }
  };

  const onDateChange = (date) => {
    setSelectedDate(date);
    fetchEventsForDate(date);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month" && eventDates.has(formatDate(date))) {
      return "event-day"; // Apply highlight class if event exists on this date
    }
    return null;
  };

  const tileDisabled = ({ date, view }) => {
    const today = new Date();
    return view === "month" && date < today.setHours(0, 0, 0, 0); // Disable past dates
  };

  return (
    <div className="event-calendar-page">
      <h1>Upcoming Events Calendar</h1>
      <Calendar
        onChange={onDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
        tileDisabled={tileDisabled}
      />

      <section className="events-list">
        <h2>Events on {selectedDate.toDateString()}</h2>
        {events.length > 0 ? (
          <ul>
            {events.map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        ) : (
          <p>No events scheduled for this day.</p>
        )}
        {events.length > 0 && (
          <Link to="/LoginPage">
            <button className="book-button">Book Now</button>
          </Link>
        )}
      </section>
    </div>
  );
};

export default EventCalendarPage;
