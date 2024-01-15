import React from "react";
import "./code.css";
function CodeHeader() {
  return (
    <div>
      <h1 className="card-header"> Enter confirmation code </h1>
      <p className="signup-h-details">for your Mozilla account</p>
      <div className="email-bg"></div>
      <span className="signup-h-details">Enter the code that was sent to keyword@gmail.com within 5 minutes.</span>
    </div>
  );
}

export default CodeHeader;
