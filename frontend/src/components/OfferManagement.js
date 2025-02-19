// import React, { useState } from "react";

// const OfferManagement = ({ activeSection }) => {
//   const [offers, setOffers] = useState([
//     { title: "Family Package Deal", description: "Get 20% off for families with 4 or more members." },
//     { title: "Student Discount", description: "15% discount for students with valid ID." },
//     { title: "Weekend Adventure Special", description: "Free meal voucher with every weekend booking." },
//     { title: "Early Bird Offer", description: "Book 7 days in advance and get a 10% discount." },
//     { title: "Group Adventure Bonus", description: "Special discounts for groups of 10 or more." },
//   ]);

//   const [newOffer, setNewOffer] = useState({ title: "", description: "" });

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
//     <div>
//       {activeSection === "add-offer" && (
//         <div className="add-offer-section">
//           <h2>Add New Offer</h2>
//           <form onSubmit={handleAddOffer} className="add-offer-form">
//             <div className="form-group">
//               <label>Title</label>
//               <input
//                 type="text"
//                 value={newOffer.title}
//                 onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
//                 placeholder="Enter offer title"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Description</label>
//               <textarea
//                 value={newOffer.description}
//                 onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
//                 placeholder="Enter offer description"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit">Add Offer</button>
//           </form>
//         </div>
//       )}

//       {activeSection === "show-offers" && (
//         <div className="dashboard-offers-section">
//           <h2>Existing Offers</h2>
//           <ul>
//             {offers.map((offer, index) => (
//               <li key={index}>
//                 <h3>{offer.title}</h3>
//                 <p>{offer.description}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OfferManagement;

//-------------------------------------------------

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const OfferManagement = ({ activeSection }) => {
//   const [offers, setOffers] = useState([]);
//   const [newOffer, setNewOffer] = useState({ title: "", description: "" });

//   // Fetch offers from the backend
//   useEffect(() => {
//     if (activeSection === "show-offers") {
//       fetchOffers();
//     }
//   }, [activeSection]);

//   const fetchOffers = async () => {
//     try {
//       const response = await axios.get("http://localhost:8085/api/offers");
//       setOffers(response.data);
//     } catch (error) {
//       console.error("Failed to fetch offers.", error);
//     }
//   };

//   const handleAddOffer = async (e) => {
//     e.preventDefault();
//     if (newOffer.title && newOffer.description) {
//       try {
//         const response = await axios.post("http://localhost:8085/api/offers/create", newOffer);
//         setOffers([...offers, response.data]);
//         setNewOffer({ title: "", description: "" });
//         alert("Offer added successfully!");
//       } catch (error) {
//         console.error("Failed to add offer.", error);
//         alert("Failed to add offer.");
//       }
//     } else {
//       alert("Please fill out all fields.");
//     }
//   };

//   const handleDeleteOffer = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8085/api/offers/delete/${id}`);
//       setOffers(offers.filter((offer) => offer.id !== id));
//       alert("Offer deleted successfully!");
//     } catch (error) {
//       console.error("Failed to delete offer.", error);
//       alert("Failed to delete offer.");
//     }
//   };

//   return (
//     <div>
//       {activeSection === "add-offer" && (
//         <div className="add-offer-section">
//           <h2>Add New Offer</h2>
//           <form onSubmit={handleAddOffer} className="add-offer-form">
//             <div className="form-group">
//               <label>Title</label>
//               <input
//                 type="text"
//                 value={newOffer.title}
//                 onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
//                 placeholder="Enter offer title"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label>Description</label>
//               <textarea
//                 value={newOffer.description}
//                 onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
//                 placeholder="Enter offer description"
//                 required
//               ></textarea>
//             </div>
//             <button type="submit">Add Offer</button>
//           </form>
//         </div>
//       )}

//       {activeSection === "show-offers" && (
//         <div className="dashboard-offers-section">
//           <h2>Existing Offers</h2>
//           <ul>
//             {offers.map((offer) => (
//               <li key={offer.id}>
//                 <h3>{offer.title}</h3>
//                 <p>{offer.description}</p>
//                 <button onClick={() => handleDeleteOffer(offer.id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OfferManagement;

//-------------------------------------------------------


//--------------------------------------------------------------------
import React, { useState, useEffect } from "react";
import axios from "axios";

const OfferManagement = ({ activeSection }) => {
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({ title: "", description: "" });

  // Fetch offers from the backend whenever activeSection changes to "show-offers"
  useEffect(() => {
    if (activeSection === "show-offers") {
      console.log("Fetching offers..."); // Debugging
      fetchOffers();
    }
  }, [activeSection]);

  // Fetch offers function
  const fetchOffers = async () => {
    try {
      const response = await axios.get("http://localhost:8085/api/offers/all");
      console.log("Fetched offers:", response.data); // Debugging
      setOffers(response.data); // Update the offers state with the fetched data
    } catch (error) {
      console.error("Failed to fetch offers.", error);
    }
  };

  // Handle adding a new offer
  const handleAddOffer = async (e) => {
    e.preventDefault();
    if (newOffer.title && newOffer.description) {
      try {
        const response = await axios.post("http://localhost:8085/api/offers/create", newOffer);
        console.log("Added offer:", response.data); // Debugging
        // Update the offers state with the new offer
        setOffers((prevOffers) => [...prevOffers, response.data]);
        // Clear the form
        setNewOffer({ title: "", description: "" });
        alert("Offer added successfully!");
      } catch (error) {
        console.error("Failed to add offer.", error);
        alert("Failed to add offer.");
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  // Handle deleting an offer
  const handleDeleteOffer = async (id) => {
    try {
      await axios.delete(`http://localhost:8085/api/offers/delete/${id}`);
      console.log("Deleted offer with ID:", id); // Debugging
      // Update the offers state by filtering out the deleted offer
      setOffers((prevOffers) => prevOffers.filter((offer) => offer.id !== id));
      alert("Offer deleted successfully!");
    } catch (error) {
      console.error("Failed to delete offer.", error);
      alert("Failed to delete offer.");
    }
  };

  return (
    <div>
      {activeSection === "add-offer" && (
        <div className="add-offer-section">
          <h2>Add New Offer</h2>
          <form onSubmit={handleAddOffer} className="add-offer-form">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={newOffer.title}
                onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
                placeholder="Enter offer title"
                required
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={newOffer.description}
                onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
                placeholder="Enter offer description"
                required
              ></textarea>
            </div>
            <button type="submit">Add Offer</button>
          </form>
        </div>
      )}

      {activeSection === "show-offers" && (
        <div className="dashboard-offers-section">
          <h2>Existing Offers</h2>
          <ul>
            {offers.map((offer) => (
              <li key={offer.id}>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <button onClick={() => handleDeleteOffer(offer.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OfferManagement; 
