// import React, { useState } from "react";

// const ActivityManagement = ({ activeSection }) => {
//   const [activities, setActivities] = useState([]);
//   const [newActivity, setNewActivity] = useState({
//     name: "",
//     description: "",
//     details: "",
//     benefits: "",
//   });

//   // Handle adding a new activity
//   const handleAddActivity = (e) => {
//     e.preventDefault();
//     if (
//       newActivity.name &&
//       newActivity.description &&
//       newActivity.details &&
//       newActivity.benefits
//     ) {
//       setActivities((prevActivities) => [...prevActivities, newActivity]);
//       setNewActivity({ name: "", description: "", details: "", benefits: "" });
//       alert("Activity added successfully!");
//     } else {
//       alert("Please fill out all fields.");
//     }
//   };

//   return (
//     <div>
//       {activeSection === "add-activity" && (
//         <div className="add-activity-section">
//           <h2>Add New Activity</h2>
//           <form onSubmit={handleAddActivity} className="add-activity-form">
//             <div className="form-group">
//               <label>Activity Name</label>
//               <input
//                 type="text"
//                 value={newActivity.name}
//                 onChange={(e) => setNewActivity({ ...newActivity, name: e.target.value })}
//                 placeholder="Enter activity name"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Description</label>
//               <textarea
//                 value={newActivity.description}
//                 onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
//                 placeholder="Enter activity description"
//                 required
//               ></textarea>
//             </div>
//             <div className="form-group">
//               <label>Details</label>
//               <textarea
//                 value={newActivity.details}
//                 onChange={(e) => setNewActivity({ ...newActivity, details: e.target.value })}
//                 placeholder="Enter activity details"
//                 required
//               ></textarea>
//             </div>
//             <div className="form-group">
//               <label>Benefits</label>
//               <textarea
//                 value={newActivity.benefits}
//                 onChange={(e) => setNewActivity({ ...newActivity, benefits: e.target.value })}
//                 placeholder="Enter activity benefits"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit">Add Activity</button>
//           </form>
//         </div>
//       )}

//       {activeSection === "show-activities" && (
//         <div className="dashboard-activities-section">
//           <h2>Existing Activities</h2>
//           <ul>
//             {activities.map((activity, index) => (
//               <li key={index}>
//                 <h3>{activity.name}</h3>
//                 <p><strong>Description:</strong> {activity.description}</p>
//                 <p><strong>Details:</strong> {activity.details}</p>
//                 <p><strong>Benefits:</strong> {activity.benefits}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ActivityManagement;

//----------------------------------------------------
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ActivityManagement = ({ activeSection }) => {
//   const [activities, setActivities] = useState([]);
//   const [newActivity, setNewActivity] = useState({
//     name: "",
//     description: "",
//     details: "",
//     benefits: "",
//   });

//   // Fetch activities when component mounts or activeSection changes
//   useEffect(() => {
//     if (activeSection === "show-activities") {
//       fetchActivities();
//     }
//   }, [activeSection]);

//   const fetchActivities = async () => {
//     try {
//       const response = await axios.get("http://localhost:8085/api/activities/all");
//       console.log("Fetched Activities:", response.data);

//       if (!Array.isArray(response.data)) {
//         console.error("Invalid API response format:", response.data);
//         return;
//       }

//       setActivities(response.data);
//     } catch (error) {
//       console.error("Error fetching activities:", error);
//     }
//   };

//   const handleAddActivity = async (e) => {
//     e.preventDefault();
//     const { name, description, details, benefits } = newActivity;

//     if (name && description && details && benefits) {
//       try {
//         await axios.post("http://localhost:8085/api/activities/create", {
//           name,
//           description,
//           details,
//           benefits,
//         });

//         alert("Activity added successfully!");
//         setNewActivity({ name: "", description: "", details: "", benefits: "" });
//         fetchActivities(); // Refresh activity list
//       } catch (error) {
//         console.error("Error adding activity:", error);
//         alert("Failed to add activity.");
//       }
//     } else {
//       alert("Please fill out all fields.");
//     }
//   };

//   const handleDeleteActivity = async (activityId) => {
//     try {
//       await axios.delete(`http://localhost:8085/api/activities/delete/${activityId}`);
//       alert("Activity deleted successfully!");
//       fetchActivities(); // Refresh activity list
//     } catch (error) {
//       console.error("Error deleting activity:", error);
//       alert("Failed to delete activity.");
//     }
//   };

//   return (
//     <div>
//       {activeSection === "add-activity" && (
//         <div className="add-activity-section">
//           <h2>Add New Activity</h2>
//           <form onSubmit={handleAddActivity} className="add-activity-form">
//             <div className="form-group">
//               <label>Activity Name</label>
//               <input
//                 type="text"
//                 value={newActivity.name}
//                 onChange={(e) => setNewActivity({ ...newActivity, name: e.target.value })}
//                 placeholder="Enter activity name"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Description</label>
//               <textarea
//                 value={newActivity.description}
//                 onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
//                 placeholder="Enter activity description"
//                 required
//               ></textarea>
//             </div>
//             <div className="form-group">
//               <label>Details</label>
//               <textarea
//                 value={newActivity.details}
//                 onChange={(e) => setNewActivity({ ...newActivity, details: e.target.value })}
//                 placeholder="Enter activity details"
//                 required
//               ></textarea>
//             </div>
//             <div className="form-group">
//               <label>Benefits</label>
//               <textarea
//                 value={newActivity.benefits}
//                 onChange={(e) => setNewActivity({ ...newActivity, benefits: e.target.value })}
//                 placeholder="Enter activity benefits"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit">Add Activity</button>
//           </form>
//         </div>
//       )}

//       {activeSection === "show-activities" && (
//         <div className="dashboard-activities-section">
//           <h2>Existing Activities</h2>
//           {activities.length === 0 ? (
//             <p>No activities available.</p>
//           ) : (
//             <ul>
//               {activities.map((activity) => (
//                 <li key={activity.id}>
//                   <h3>{activity.name}</h3>
//                   <p><strong>Description:</strong> {activity.description}</p>
//                   <p><strong>Details:</strong> {activity.details}</p>
//                   <p><strong>Benefits:</strong> {activity.benefits}</p>
//                   <button onClick={() => handleDeleteActivity(activity.id)}>Delete</button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ActivityManagement;

//----------------------------------------
import React, { useState, useEffect } from "react";
import axios from "axios";

const ActivityManagement = ({ activeSection }) => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState({
    name: "",
    description: "",
    details: "",
    benefits: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch activities from the backend when "show-activities" is active
  useEffect(() => {
    if (activeSection === "show-activities") {
      console.log("Fetching activities...");
      fetchActivities();
    }
  }, [activeSection]);

  // Fetch activities function
  const fetchActivities = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:8085/api/activities/all");
      console.log("API Response:", response); // Log the entire response

      // Check if the response is valid and contains an array of activities
      if (response.status === 200 && Array.isArray(response.data)) {
        setActivities(response.data);
      } else {
        console.error("Unexpected API response format:", response.data);
        setError("Unexpected API response format.");
      }
    } catch (error) {
      console.error("Error fetching activities:", error);
      setError("Failed to fetch activities. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  // Handle adding a new activity
  const handleAddActivity = async (e) => {
    e.preventDefault();
    if (newActivity.name && newActivity.description && newActivity.details && newActivity.benefits) {
      try {
        const response = await axios.post("http://localhost:8085/api/activities/create", newActivity);
        console.log("Added activity:", response.data);

        // Update the activities list with the new activity
        setActivities((prevActivities) => [...prevActivities, response.data]);

        // Reset the form
        setNewActivity({ name: "", description: "", details: "", benefits: "" });

        alert("Activity added successfully!");
      } catch (error) {
        console.error("Error adding activity:", error);
        alert("Failed to add activity.");
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="activityform">
      {activeSection === "add-activity" && (
        <div className="add-activity-section">
          <h2>Add New Activity</h2>
          <form onSubmit={handleAddActivity} className="add-activity-form">
            <div className="form-group">
              <label>Activity Name</label>
              <input
                type="text"
                value={newActivity.name}
                onChange={(e) => setNewActivity({ ...newActivity, name: e.target.value })}
                placeholder="Enter activity name"
                required
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={newActivity.description}
                onChange={(e) => setNewActivity({ ...newActivity, description: e.target.value })}
                placeholder="Enter activity description"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label>Details</label>
              <textarea
                value={newActivity.details}
                onChange={(e) => setNewActivity({ ...newActivity, details: e.target.value })}
                placeholder="Enter activity details"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label>Benefits</label>
              <textarea
                value={newActivity.benefits}
                onChange={(e) => setNewActivity({ ...newActivity, benefits: e.target.value })}
                placeholder="Enter activity benefits"
                required
              ></textarea>
            </div>
            <button type="submit">Add Activity</button>
          </form>
        </div>
      )}

      {activeSection === "show-activities" && (
        <div className="dashboard-activities-section">
          <h2>Existing Activities</h2>
          {loading ? (
            <p>Loading activities...</p>
          ) : error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : activities.length === 0 ? (
            <p>No activities available.</p>
          ) : (
            <ul>
              {activities.map((activity) => (
                <li key={activity.id}>
                  <h3>{activity.name}</h3>
                  <p><strong>Description:</strong> {activity.description}</p>
                  <p><strong>Details:</strong> {activity.details}</p>
                  <p><strong>Benefits:</strong> {activity.benefits}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ActivityManagement;

