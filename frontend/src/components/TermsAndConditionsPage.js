import React from "react";
import "./TermsAndConditions.css"; // Import the CSS file for styling

const TermsAndConditionsPage = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to Smart Adventure Park! Please read these terms and conditions
        carefully before using our services.
      </p>

      <div className="terms-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website, you agree to comply with and be
          bound by these terms and conditions. If you disagree with any part of
          these terms, you must not use our services.
        </p>
      </div>

      <div className="terms-section">
        <h2>2. Booking and Payments</h2>
        <p>
          All bookings are subject to availability and confirmation. Payments
          must be completed at the time of booking. Refunds, if applicable, will
          be processed as per our cancellation policy.
        </p>
      </div>

      <div className="terms-section">
        <h2>3. Safety and Conduct</h2>
        <p>
          Visitors must adhere to all safety guidelines provided by the park
          staff. Any misconduct or violation of rules may result in removal from
          the premises without a refund.
        </p>
      </div>

      <div className="terms-section">
        <h2>4. Intellectual Property</h2>
        <p>
          All content on this website, including text, images, and logos, is the
          intellectual property of Smart Adventure Park. Unauthorized use or
          reproduction is strictly prohibited.
        </p>
      </div>

      <div className="terms-section">
        <h2>5. Changes to Terms</h2>
        <p>
          We reserve the right to update or modify these terms at any time
          without prior notice. It is your responsibility to review this page
          periodically for updates.
        </p>
      </div>

      <div className="terms-footer">
        <p>
          If you have any questions about these terms, please contact us at
          support@smartadventurepark.com.
        </p>
        <p>
          &copy; {new Date().getFullYear()} Smart Adventure Park. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
