// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CardFooter from "./components/CardFooter";
import CardHeader from "./components/CardHeader";
import Form from "./components/Form";
import SignUp from "./components/signUp/SignUp";
import Logo from "./components/Logo";
import SignUpLayout from "./components/signUp/SignUpLayout";
import SignUpCodeLayout from "./components/confirm_signup_code/SignUpCodeLayout";
import ConfirmCode from "./components/confirm_signup_code/ConfirmCode";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route
          path="/"
          element={
            <>
              <Logo />
              <div className="content-wrapper">
                <div className="card">
                  <CardHeader />
                  <Form />
                  <CardFooter />
                </div>
              </div>
            </>
          }
        />

        <Route
          path="/signUp/"
          element={
            <SignUpLayout>
              <SignUp />
            </SignUpLayout>
          }
        />

        <Route
          path="/confirm_signup_code/"
          element={
            <SignUpCodeLayout>
              <ConfirmCode />
            </SignUpCodeLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
