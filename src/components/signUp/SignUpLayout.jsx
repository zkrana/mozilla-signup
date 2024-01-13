// SignUpLayout.jsx
import React from "react";
import CardHeader from "./SignUpHeader";
import CardFooter from "./SignUpFooter";
import Logo from "../Logo";
import SignUpForm from "./SignUpForm";

const SignUpLayout = () => {
  return (
    <>
      <Logo />
      <div className="card">
        <CardHeader />
        <SignUpForm />
        <CardFooter />
      </div>
    </>
  );
};

export default SignUpLayout;
