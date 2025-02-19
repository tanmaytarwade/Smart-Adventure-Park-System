// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./TimeAllocationPage.css"; // Import CSS for styling

// const TimeAllocationPage = () => {
//   const [bookings, setBookings] = useState([]);

//   // Activity List (Mapping IDs to Activity Names)
//   const activitiesList = {
//     1: "Zip-Lining",
//     2: "Rock Climbing",
//     3: "Kayaking",
//     4: "Bungee Jumping",
//     5: "Skydiving",
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get("http://localhost:8085/api/bookings");
//       setBookings(response.data);
//     } catch (error) {
//       console.error("Error fetching bookings:", error);
//     }
//   };

//   // Function to generate a random time slot between 9 AM - 6 PM
//   const getRandomTimeSlot = () => {
//     const startHour = 9; // 9 AM
//     const endHour = 18; // 6 PM
//     const randomHour = Math.floor(Math.random() * (endHour - startHour + 1)) + startHour;
//     const randomMinutes = Math.random() < 0.5 ? "00" : "30"; // Either ":00" or ":30"
//     return `${randomHour}:${randomMinutes}`;
//   };

//   return (
//     <div className="booking-container">
//       <h1>Time Allocation for Bookings</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Date</th>
//             <th>Activities</th>
//             <th>Time Slot</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking) => (
//             <tr key={booking.id}>
//               <td>{booking.name}</td>
//               <td>{booking.date}</td>
//               <td>
//                 {booking.selectedActivities
//                   .map((activityId) => activitiesList[activityId])
//                   .join(", ")}
//               </td>
//               <td>{getRandomTimeSlot()} AM - {getRandomTimeSlot()} PM</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TimeAllocationPage;

//--------------------------------------------------------------------
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TimeAllocationPage.css"; // Import CSS for styling

const TimeAllocationPage = () => {
  const [bookings, setBookings] = useState([]);
  const [allocatedTimes, setAllocatedTimes] = useState({}); // Store allocated times

  // Activity List (Mapping IDs to Activity Names)
  const activitiesList = {
    1: "Zip-Lining",
    2: "Rock Climbing",
    3: "Kayaking",
    4: "Bungee Jumping",
    5: "Skydiving",
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:8085/api/bookings");
      console.log("API Response:", response.data); // Debugging: Log API response
      setBookings(response.data);

      // Load allocated times if they exist, else generate new ones
      const storedTimes = JSON.parse(localStorage.getItem("allocatedTimes")) || {};
      const newAllocatedTimes = { ...storedTimes };

      response.data.forEach((booking) => {
        if (!newAllocatedTimes[booking.id]) {
          newAllocatedTimes[booking.id] = getRandomTimeSlot();
        }
      });

      setAllocatedTimes(newAllocatedTimes);
      localStorage.setItem("allocatedTimes", JSON.stringify(newAllocatedTimes)); // Save times to prevent change on refresh
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  // Function to generate a random time slot between 9 AM - 6 PM
  const getRandomTimeSlot = () => {
    const startHour = 9;
    const endHour = 18;
    const randomHour = Math.floor(Math.random() * (endHour - startHour + 1)) + startHour;
    const randomMinutes = Math.random() < 0.5 ? "00" : "30";
    return `${randomHour}:${randomMinutes}`;
  };

  return (
    <div className="booking-container">
      <h1>Time Allocation for Bookings</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
           {/* /* <th>Date</th> {/* Fetching from selected_date */}
            <th>Activities</th>
            <th>Time Slot</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.name}</td>
              {/* <td>{booking.selected_date ? booking.selected_date : "N/A"}</td>  */}
              <td>
                {booking.selectedActivities && booking.selectedActivities.length > 0
                  ? booking.selectedActivities.map((activityId) => activitiesList[activityId] || "Unknown").join(", ")
                  : "No Activities"}
              </td>
              <td>{allocatedTimes[booking.id] || "N/A"}</td> {/* Persist allocated time */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeAllocationPage;


