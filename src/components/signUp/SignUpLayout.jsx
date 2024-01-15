// SignUpLayout.jsx
import React from "react";
import CardHeader from "./SignUpHeader";
import CardFooter from "./SignUpFooter";
import Logo from "../Logo";
import SignUpForm from "./SignUpForm";
import "./signUp.css";

const SignUpLayout = () => {
  return (
    <div className="signup-box">
      <Logo />
      <div className="card signup_wrapper">
        <CardHeader />
        <SignUpForm />
        <CardFooter />
      </div>
    </div>
  );
};

export default SignUpLayout;
