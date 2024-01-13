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

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route
          path="/"
          element={
            <div>
              <Logo />
              <div className="content-wrapper">
                <div className="card">
                  <CardHeader />
                  <Form />
                  <CardFooter />
                </div>
              </div>
            </div>
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
      </Routes>
    </Router>
  );
}

export default App;
