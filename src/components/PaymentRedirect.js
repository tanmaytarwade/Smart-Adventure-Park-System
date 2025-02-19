// import { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

// const PaymentRedirect = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { amount, name, email, phone } = location.state || {};

//   useEffect(() => {
//     if (!amount) {
//       navigate("/BookingPage");
//       return;
//     }

//     const initiatePayment = async () => {
//       try {
//         const response = await axios.post(
//           "http://localhost:8085/api/payment/create-order",
//           { amount }
//         );
//         const { orderId } = response.data;

//         if (!window.Razorpay) {
//           alert("Razorpay SDK failed to load.");
//           return;
//         }

//         const options = {
//           key: "rzp_test_rUtk2gJAuflYje", // Replace with your actual key
//           amount: amount * 100,
//           currency: "INR",
//           name: "Smart Adventure Park",
//           description: "Adventure Park Booking",
//           order_id: orderId,
//           handler: async function (response) {
//             await axios.post(
//               "http://localhost:8085/api/payment/verify-payment",
//               {
//                 orderId: response.razorpay_order_id,
//                 paymentId: response.razorpay_payment_id,
//               }
//             );

//             alert("Payment successful!");
//             navigate("/BookingPage");
//           },
//           prefill: { name, email, contact: phone },
//           theme: { color: "#3399cc" },
//         };

//         const rzp = new window.Razorpay(options);
//         rzp.open();
//       } catch (error) {
//         alert("Payment failed: " + error.message);
//       }
//     };

//     initiatePayment();
//   }, [amount, navigate, name, email, phone]);

//   return <h2>Redirecting to Razorpay...</h2>;
// };

// export default PaymentRedirect;


//-----------------------------------------------------------------
// import { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

// const PaymentRedirect = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { amount, name, email, phone } = location.state || {};

//   useEffect(() => {
//     if (!amount) {
//       navigate("/BookingPage");
//       return;
//     }

//     const initiatePayment = async () => {
//       try {
//         const response = await axios.post(
//           "http://localhost:8085/api/payment/create-order",
//           { amount }
//         );

//         if (response.status !== 200) {
//           throw new Error("Failed to create order");
//         }

//         const { orderId } = response.data;

//         if (!window.Razorpay) {
//           alert("Razorpay SDK failed to load.");
//           return;
//         }

//         const options = {
//           key: "rzp_test_rUtk2gJAuflYje", // Replace with actual key
//           amount: amount * 100,
//           currency: "INR",
//           name: "Smart Adventure Park",
//           description: "Adventure Park Booking",
//           order_id: orderId,
//           handler: async function (response) {
//             try {
//               const verifyResponse = await axios.post(
//                 "http://localhost:8085/api/payment/verify-payment",
//                 {
//                   orderId: response.razorpay_order_id,
//                   paymentId: response.razorpay_payment_id,
//                 }
//               );

//               if (verifyResponse.status === 200) {
//                 alert("Payment successful!");
//                 navigate("/BookingPage");
//               } else {
//                 throw new Error("Payment verification failed");
//               }
//             } catch (error) {
//               alert("Payment verification failed: " + error.message);
//             }
//           },
//           prefill: { name, email, contact: phone },
//           theme: { color: "#3399cc" },
//         };

//         const rzp = new window.Razorpay(options);
//         rzp.open();
//       } catch (error) {
//         alert("Payment failed: " + error.message);
//       }
//     };

//     initiatePayment();
//   }, [amount, navigate, name, email, phone]);

//   return <h2>Redirecting to Razorpay...</h2>;
// };

// export default PaymentRedirect;


//-----------------------------------------------
// import { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

// const PaymentRedirect = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { amount, name, email, phone } = location.state || {};

//   useEffect(() => {
//     if (!amount) {
//       navigate("/BookingPage");
//       return;
//     }

//     const initiatePayment = async () => {
//       try {
//         const response = await axios.post(
//           "http://localhost:8085/api/payment/create-order",
//           { amount }
//         );

//         if (response.status !== 200) {
//           throw new Error("Failed to create order");
//         }

//         const { orderId } = response.data;

//         if (!window.Razorpay) {
//           alert("Razorpay SDK failed to load.");
//           return;
//         }

//         const options = {
//           key: "rzp_test_rUtk2gJAuflYje", // Replace with actual key
//           amount: amount * 100,
//           currency: "INR",
//           name: "Smart Adventure Park",
//           description: "Adventure Park Booking",
//           order_id: orderId,
//           handler: async function (response) {
//             try {
//               const verifyResponse = await axios.post(
//                 "http://localhost:8085/api/payment/verify-payment",
//                 {
//                   orderId: response.razorpay_order_id,
//                   paymentId: response.razorpay_payment_id,
//                 }
//               );

//               if (verifyResponse.status === 200) {
//                 alert("Payment successful!");
//                 navigate("/UserDashboard"); // Redirect to User Dashboard
//               } else {
//                 throw new Error("Payment verification failed");
//               }
//             } catch (error) {
//               alert("Payment verification failed: " + error.message);
//             }
//           },
//           prefill: { name, email, contact: phone },
//           theme: { color: "#3399cc" },
//         };

//         const rzp = new window.Razorpay(options);
//         rzp.open();
//       } catch (error) {
//         alert("Payment failed: " + error.message);
//       }
//     };

//     initiatePayment();
//   }, [amount, navigate, name, email, phone]);

//   return <h2>Redirecting to Razorpay...</h2>;
// };

// export default PaymentRedirect;

//------------------------------------------------------------------------------
// import { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

// const PaymentRedirect = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { amount, name, email, phone } = location.state || {};

//   useEffect(() => {
//     if (!amount) {
//       navigate("/BookingPage");  // If no amount, redirect to BookingPage
//       return;
//     }

//     const initiatePayment = async () => {
//       try {
//         const response = await axios.post(
//           "http://localhost:8085/api/payment/create-order",
//           { amount }
//         );

//         if (response.status !== 200) {
//           throw new Error("Failed to create order");
//         }

//         const { orderId } = response.data;

//         if (!window.Razorpay) {
//           alert("Razorpay SDK failed to load.");
//           navigate("/LoginPage");  // Redirect to LoginPage if Razorpay SDK fails to load
//           return;
//         }

//         const options = {
//           key: "rzp_test_rUtk2gJAuflYje", // Replace with actual key
//           amount: amount * 100,
//           currency: "INR",
//           name: "Smart Adventure Park",
//           description: "Adventure Park Booking",
//           order_id: orderId,
//           handler: async function (response) {
//             try {
//               const verifyResponse = await axios.post(
//                 "http://localhost:8085/api/payment/verify-payment",
//                 {
//                   orderId: response.razorpay_order_id,
//                   paymentId: response.razorpay_payment_id,
//                 }
//               );

//               if (verifyResponse.status === 200) {
//                 alert("Payment successful!");
//                 navigate("/UserDashboard"); // Redirect to User Dashboard after successful payment
//               } else {
//                 throw new Error("Payment verification failed");
//               }
//             } catch (error) {
//               alert("Payment verification failed: " + error.message);
//               navigate("/LoginPage");  // Redirect to Login page in case of failure
//             }
//           },
//           prefill: { name, email, contact: phone },
//           theme: { color: "#3399cc" },
//         };

//         const rzp = new window.Razorpay(options);
//         rzp.open();
//       } catch (error) {
//         alert("Payment failed: " + error.message);
//         navigate("/LoginPage");  // Redirect to Login page in case of payment failure
//       }
//     };

//     initiatePayment();
//   }, [amount, navigate, name, email, phone]);

//   return <h2>Redirecting to Razorpay...</h2>;
// };

// export default PaymentRedirect;

//-----------------------------------------------------
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const PaymentRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { amount, name, email, phone } = location.state || {};

  useEffect(() => {
    if (!amount) {
      navigate("/BookingPage");  // Redirect to BookingPage if no amount is provided
      return;
    }

    const initiatePayment = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8085/api/payment/create-order",
          { amount }
        );

        if (response.status !== 200) {
          throw new Error("Failed to create order");
        }

        const { orderId } = response.data;

        if (!window.Razorpay) {
          alert("Razorpay SDK failed to load.");
          navigate("/LoginPage");  // Redirect to Login Page if Razorpay SDK fails to load
          return;
        }

        const options = {
          key: "rzp_test_rUtk2gJAuflYje", // Replace with actual key
          amount: amount * 100,
          currency: "INR",
          name: "Smart Adventure Park",
          description: "Adventure Park Booking",
          order_id: orderId,
          handler: async function (response) {
            try {
              const verifyResponse = await axios.post(
                "http://localhost:8085/api/payment/verify-payment",
                {
                  orderId: response.razorpay_order_id,
                  paymentId: response.razorpay_payment_id,
                }
              );

              if (verifyResponse.status === 200) {
                alert("Payment successful!");
                navigate("/UserDashboard"); // Redirect to User Dashboard after successful payment
              } else {
                throw new Error("Payment verification failed");
              }
            } catch (error) {
              alert("Payment verification failed: " + error.message);
              navigate("/LoginPage");  // Redirect to Login Page if payment verification fails
            }
          },
          prefill: { name, email, contact: phone },
          theme: { color: "#3399cc" },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
        
        rzp.on("payment.failed", function (response) {
          alert("Payment failed: " + response.error.description);
          navigate("/LoginPage");  // Redirect to Login Page if payment fails
        });
        
      } catch (error) {
        alert("Payment failed: " + error.message);
        navigate("/LoginPage");  // Redirect to Login Page if an error occurs during payment initiation
      }
    };

    initiatePayment();
  }, [amount, navigate, name, email, phone]);

  return <h2>Redirecting to Razorpay...</h2>;
};

export default PaymentRedirect;
