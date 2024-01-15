import React from "react";
import "./logo.css";

function Logo() {
  return (
    <div className="Logo">
      <a
        href="/"
        className="logo"
      >
        <img
          src="https://accounts-static.cdn.mozilla.net/images/a7c41087.mozilla.svg"
          alt="Mozilla Logo"
        />
      </a>
    </div>
  );
}

export default Logo;
