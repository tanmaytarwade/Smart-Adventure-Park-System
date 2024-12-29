import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default calendar styles
import './EventCalendarPage.css'; // Custom styles

const eventsData = {
  '2024-12-15': ['Zip-Lining Championship', 'Family Fun Day'],
  '2024-12-20': ['Kayaking Competition', 'Rock Climbing Workshop'],
  '2024-12-25': ['Adventure Night Challenge', 'Group Obstacle Course'],
};

const formatDate = (date) => {
  // Ensure the date format is 'YYYY-MM-DD' (consistent with eventsData keys)
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Zero-padded month
  const day = String(date.getDate()).padStart(2, '0'); // Zero-padded day
  return `${year}-${month}-${day}`;
};

const EventCalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const onDateChange = (date) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date); // Use the custom format function
    setEvents(eventsData[formattedDate] || []); // Update events if available, or set empty
  };

  return (
    <div className="event-calendar-page">
      <h1>Upcoming Events Calendar</h1>
      <Calendar 
        onChange={onDateChange} 
        value={selectedDate}
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
      </section>
    </div>
  );
};

export default EventCalendarPage;


