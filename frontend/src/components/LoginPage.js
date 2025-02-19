

//-----------------------------------------------------------------
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginPage.css";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [registerDetails, setRegisterDetails] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [registeredUsers, setRegisteredUsers] = useState([]);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Hardcoded admin credentials
//     const adminEmail = "tanmaytarwade123@gmail.com";
//     const adminPassword = "Tanmay@2908";

//     // Check if the user is an admin
//     if (email === adminEmail && password === adminPassword) {
//       navigate("/AdminDashboard");
//       return;
//     }

//     // Check if the user is a registered user
//     const userExists = registeredUsers.some(
//       (user) => user.email === email && user.password === password
//     );

//     if (userExists) {
//       alert("User Login Successful! Redirecting to Booking Page.");
//       navigate("/BookingPage");
//     } else {
//       setErrorMessage(
//         "Invalid email or password. Please register if you are a new user."
//       );
//     }
//   };

//   const handleRegisterSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, password } = registerDetails;

//     if (name && email && password) {
//       // Add the new user to the registered users list
//       setRegisteredUsers([...registeredUsers, { email, password }]);
//       alert("Registration Successful! You can now login.");
//       setRegisterDetails({ name: "", email: "", password: "" });
//       setIsRegistering(false); // Switch back to login mode
//     } else {
//       alert("Please fill out all fields to register.");
//     }
//   };

//   return (
//     <div className="login-container">
//       {isRegistering ? (
//         <form className="login-form" onSubmit={handleRegisterSubmit}>
//           <h1>User Register</h1>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your name"
//               value={registerDetails.name}
//               onChange={(e) =>
//                 setRegisterDetails({
//                   ...registerDetails,
//                   name: e.target.value,
//                 })
//               }
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={registerDetails.email}
//               onChange={(e) =>
//                 setRegisterDetails({
//                   ...registerDetails,
//                   email: e.target.value,
//                 })
//               }
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={registerDetails.password}
//               onChange={(e) =>
//                 setRegisterDetails({
//                   ...registerDetails,
//                   password: e.target.value,
//                 })
//               }
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">
//             Register
//           </button>
//           <button
//             type="button"
//             className="toggle-button"
//             onClick={() => setIsRegistering(false)}
//           >
//             Back to Login
//           </button>
//         </form>
//       ) : (
//         <form className="login-form" onSubmit={handleLogin}>
//           <h1>Login</h1>
//           {errorMessage && <p className="error-message">{errorMessage}</p>}
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">
//             Login
//           </button>
//           <button
//             type="button"
//             className="toggle-button"
//             onClick={() => setIsRegistering(true)}
//           >
//             Register
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default LoginPage;

//-------------------------------------------------

// ----------------------------------------------------------------------------------


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginPage.css";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [registerDetails, setRegisterDetails] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   // ✅ Handle Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setErrorMessage(""); // Clear previous error messages

//     try {
//       const response = await fetch("http://localhost:8085/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const isSuccess = await response.json();

//       if (response.ok && isSuccess) {
//         alert("Login Successful! Redirecting to Booking Page.");
//         navigate("/BookingPage"); // Redirect after successful login
//       } else {
//         setErrorMessage("Invalid email or password.");
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       setErrorMessage("An error occurred during login. Please try again.");
//     }
//   };

//   // ✅ Handle User Registration
//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, password } = registerDetails;

//     try {
//       const response = await fetch("http://localhost:8085/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       if (response.ok) {
//         alert("Registration Successful! You can now login.");
//         setRegisterDetails({ name: "", email: "", password: "" });
//         setIsRegistering(false); // Switch back to login mode
//       } else {
//         const errorText = await response.text();
//         alert(errorText || "Registration failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Registration Error:", error);
//       alert("An error occurred during registration. Please try again.");
//     }
//   };

//   return (
//     <div className="login-container">
//       {isRegistering ? (
//         <form className="login-form" onSubmit={handleRegisterSubmit}>
//           <h1>User Registration</h1>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your name"
//               value={registerDetails.name}
//               onChange={(e) =>
//                 setRegisterDetails({
//                   ...registerDetails,
//                   name: e.target.value,
//                 })
//               }
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={registerDetails.email}
//               onChange={(e) =>
//                 setRegisterDetails({
//                   ...registerDetails,
//                   email: e.target.value,
//                 })
//               }
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={registerDetails.password}
//               onChange={(e) =>
//                 setRegisterDetails({
//                   ...registerDetails,
//                   password: e.target.value,
//                 })
//               }
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">
//             Register
//           </button>
//           <button
//             type="button"
//             className="toggle-button"
//             onClick={() => setIsRegistering(false)}
//           >
//             Back to Login
//           </button>
//         </form>
//       ) : (
//         <form className="login-form" onSubmit={handleLogin}>
//           <h1>Login</h1>
//           {errorMessage && <p className="error-message">{errorMessage}</p>}
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">
//             Login
//           </button>
//           <button
//             type="button"
//             className="toggle-button"
//             onClick={() => setIsRegistering(true)}
//           >
//             Register
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default LoginPage;

//-------------------------------------------------
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginPage.css";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [registerDetails, setRegisterDetails] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   //----------------------------------------------------------------------------------------

//   // ✅ Handle Login
//   // const handleLogin = async (e) => {
//   //   e.preventDefault();
//   //   setErrorMessage(""); // Clear previous error messages

//   //   // Hardcoded admin credentials (change these as per your requirement)
//   //   const adminEmail = "admin@example.com";
//   //   const adminPassword = "adminpassword";

//   //   // Check if the entered credentials match the admin credentials
//   //   if (email === adminEmail && password === adminPassword) {
//   //     // Redirect to Admin Dashboard
//   //     alert("Admin Login Successful! Redirecting to Admin Dashboard.");
//   //     navigate("/AdminDashboard"); // Redirect to the admin page after login
//   //     return;
//   //   }

//   //   try {
//   //     const response = await fetch("http://localhost:8085/api/login", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({ email, password }),
//   //     });

//   //     const isSuccess = await response.json();

//   //     if (response.ok && isSuccess) {
//   //       alert("Login Successful! Redirecting to Booking Page.");
//   //       navigate("/BookingPage"); // Redirect to the booking page after successful login
//   //     } else {
//   //       setErrorMessage("Invalid email or password.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Login Error:", error);
//   //     setErrorMessage("An error occurred during login. Please try again.");
//   //   }
//   // };

// //----------------------------------------------------------------------------------

// const handleLogin = async (e) => {
//   e.preventDefault();
//   setErrorMessage(""); // Clear previous error messages

//   // Hardcoded admin credentials (change these as per your requirement)
//   const adminEmail = "admin@example.com";
//   const adminPassword = "adminpassword";

//   // Check if the entered credentials match the admin credentials
//   if (email === adminEmail && password === adminPassword) {
//     // Redirect to Admin Dashboard
//     alert("Admin Login Successful! Redirecting to Admin Dashboard.");
//     navigate("/AdminDashboard"); // Redirect to the admin page after login
//     return;
//   }

//   try {
//     const response = await fetch("http://localhost:8085/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const isSuccess = await response.json();

//     if (response.ok && isSuccess) {
//       alert("Login Successful! Redirecting to User Dashboard.");
//       navigate("/user-dashboard"); // Redirect to the user dashboard after successful login
//     } else {
//       setErrorMessage("Invalid email or password.");
//     }
//   } catch (error) {
//     console.error("Login Error:", error);
//     setErrorMessage("An error occurred during login. Please try again.");
//   }
// };



// //----------------------------------------------------------------------------------------
//   // ✅ Handle User Registration (Unchanged)
//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, password } = registerDetails;

//     try {
//       const response = await fetch("http://localhost:8085/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       if (response.ok) {
//         alert("Registration Successful! You can now login.");
//         setRegisterDetails({ name: "", email: "", password: "" });
//         setIsRegistering(false); // Switch back to login mode
//       } else {
//         const errorText = await response.text();
//         alert(errorText || "Registration failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Registration Error:", error);
//       alert("An error occurred during registration. Please try again.");
//     }
//   };

//   return (
//     <div className="login-container">
//       {isRegistering ? (
//         <form className="login-form" onSubmit={handleRegisterSubmit}>
//           <h1>User Registration</h1>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your name"
//               value={registerDetails.name}
//               onChange={(e) =>
//                 setRegisterDetails({
//                   ...registerDetails,
//                   name: e.target.value,
//                 })
//               }
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={registerDetails.email}
//               onChange={(e) =>
//                 setRegisterDetails({
//                   ...registerDetails,
//                   email: e.target.value,
//                 })
//               }
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={registerDetails.password}
//               onChange={(e) =>
//                 setRegisterDetails({
//                   ...registerDetails,
//                   password: e.target.value,
//                 })
//               }
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">
//             Register
//           </button>
//           <button
//             type="button"
//             className="toggle-button"
//             onClick={() => setIsRegistering(false)}
//           >
//             Back to Login
//           </button>
//         </form>
//       ) : (
//         <form className="login-form" onSubmit={handleLogin}>
//           <h1>Login</h1>
//           {errorMessage && <p className="error-message">{errorMessage}</p>}
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">
//             Login
//           </button>
//           <button
//             type="button"
//             className="toggle-button"
//             onClick={() => setIsRegistering(true)}
//           >
//             Register
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default LoginPage;


//---------------------------------------------------------------

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginPage.css";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [registerDetails, setRegisterDetails] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   // Handle Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setErrorMessage(""); // Clear previous error messages

//     // Hardcoded admin credentials (change these as per your requirement)
//     const adminEmail = "admin@example.com";
//     const adminPassword = "adminpassword";

//     // Check if the entered credentials match the admin credentials
//     if (email === adminEmail && password === adminPassword) {
//       // Redirect to Admin Dashboard
//       alert("Admin Login Successful! Redirecting to Admin Dashboard.");
//       navigate("/AdminDashboard"); // Redirect to the admin page after login
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8085/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const isSuccess = await response.json();

//       if (response.ok && isSuccess) {
//         alert("Login Successful! Redirecting to User Dashboard.");
//         navigate("/UserDashboard"); // Redirect to the user dashboard after successful login
//       } else {
//         setErrorMessage("Invalid email or password.");
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       setErrorMessage("An error occurred during login. Please try again.");
//     }
//   };

//   // Handle User Registration (Unchanged)
//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, password } = registerDetails;

//     try {
//       const response = await fetch("http://localhost:8085/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, password }),
//       });

//       if (response.ok) {
//         alert("Registration Successful! You can now login.");
//         setRegisterDetails({ name: "", email: "", password: "" });
//         setIsRegistering(false); // Switch back to login mode
//       } else {
//         const errorText = await response.text();
//         alert(errorText || "Registration failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Registration Error:", error);
//       alert("An error occurred during registration. Please try again.");
//     }
//   };

//   return (
//     <div className="login-container">
//       {isRegistering ? (
//         <form className="login-form" onSubmit={handleRegisterSubmit}>
//           <h1>User Registration</h1>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Enter your name"
//               value={registerDetails.name}
//               onChange={(e) =>
//                 setRegisterDetails({
//                   ...registerDetails,
//                   name: e.target.value,
//                 })
//               }
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={registerDetails.email}
//               onChange={(e) =>
//                 setRegisterDetails({
//                   ...registerDetails,
//                   email: e.target.value,
//                 })
//               }
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={registerDetails.password}
//               onChange={(e) =>
//                 setRegisterDetails({
//                   ...registerDetails,
//                   password: e.target.value,
//                 })
//               }
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">
//             Register
//           </button>
//           <button
//             type="button"
//             className="toggle-button"
//             onClick={() => setIsRegistering(false)}
//           >
//             Back to Login
//           </button>
//         </form>
//       ) : (
//         <form className="login-form" onSubmit={handleLogin}>
//           <h1>Login</h1>
//           {errorMessage && <p className="error-message">{errorMessage}</p>}
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="login-button">
//             Login
//           </button>
//           <button
//             type="button"
//             className="toggle-button"
//             onClick={() => setIsRegistering(true)}
//           >
//             Register
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default LoginPage;


//------------------------------------------------

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [registerErrorMessage, setRegisterErrorMessage] = useState("");

  const navigate = useNavigate();

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error messages

    // Hardcoded admin credentials (change these as per your requirement)
    const adminEmail = "admin@example.com";
    const adminPassword = "adminpassword";

    // Check if the entered credentials match the admin credentials
    if (email === adminEmail && password === adminPassword) {
      // Redirect to Admin Dashboard
      alert("Admin Login Successful! Redirecting to Admin Dashboard.");
      navigate("/AdminDashboard"); // Redirect to the admin page after login
      return;
    }

    try {
      const response = await fetch("http://localhost:8085/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const isSuccess = await response.json();

      if (response.ok && isSuccess) {
        alert("Login Successful! Redirecting to User Dashboard.");
        navigate("/UserDashboard"); // Redirect to the user dashboard after successful login
      } else {
        setErrorMessage("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setErrorMessage("An error occurred during login. Please try again.");
    }
  };

  // Validate Registration Form
  const validateRegisterForm = () => {
    const { name, email, password } = registerDetails;
    let error = "";

    if (!name.trim()) {
      error = "Name is required.";
    } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      error = "Please enter a valid email address.";
    } else if (password.length < 6) {
      error = "Password must be at least 6 characters long.";
    }

    return error;
  };

  // Handle User Registration
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = registerDetails;

    // Validate the registration form
    const validationError = validateRegisterForm();
    if (validationError) {
      setRegisterErrorMessage(validationError);
      return;
    }

    try {
      const response = await fetch("http://localhost:8085/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        alert("Registration Successful! You can now login.");
        setRegisterDetails({ name: "", email: "", password: "" });
        setIsRegistering(false); // Switch back to login mode
      } else {
        const errorText = await response.text();
        alert(errorText || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="login-container">
      {isRegistering ? (
        <form className="login-form" onSubmit={handleRegisterSubmit}>
          <h1>User Registration</h1>
          {registerErrorMessage && <p className="error-message">{registerErrorMessage}</p>}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={registerDetails.name}
              onChange={(e) =>
                setRegisterDetails({
                  ...registerDetails,
                  name: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={registerDetails.email}
              onChange={(e) =>
                setRegisterDetails({
                  ...registerDetails,
                  email: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={registerDetails.password}
              onChange={(e) =>
                setRegisterDetails({
                  ...registerDetails,
                  password: e.target.value,
                })
              }
              required
            />
          </div>
          <button type="submit" className="login-button">
            Register
          </button>
          <button
            type="button"
            className="toggle-button"
            onClick={() => setIsRegistering(false)}
          >
            Back to Login
          </button>
        </form>
      ) : (
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Login</h1>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <button
            type="button"
            className="toggle-button"
            onClick={() => setIsRegistering(true)}
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
