import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

function Form() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  // Input field validation steps
  // step 1: set input initial value in input field and thene manage a hook for initial input value
  // Now, detect if anything change in input by onChange
  // Like: onChange={(e)=> setEmail(e.target.value)}
  // Create email  validation function
  // Set  hook for error
  // Check this function found any error or not, if have error show it on below the input field
  // Like {emailError && <div>{emailError}</div> }
  // Then clear previous error

  const validateEmail = () => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail()) {
      setEmailError("Invalid email format");
      return;
    }

    // Clear previous error
    setEmailError("");

    setLoading(true);

    // Redirection after 2 seconds
    setTimeout(() => {
      navigate("/signUp/");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-controller">
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </div>
      <div className="mt">
        {loading ? (
          // Display loading icon or image
          <div className="btn-primary active-btn">
            <svg
              version="1.1"
              id="L9"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enableBackground="new 0 0 0 0"
              xmlSpace="preserve"
            >
              <path
                fill="#fff"
                d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="1s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
        ) : (
          // Display the button when not loading
          <button type="submit" className="btn-primary">
            Sign up or sign in
          </button>
        )}
      </div>
    </form>
  );
}

export default Form;
